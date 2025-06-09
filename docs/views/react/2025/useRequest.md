---
title: useRequest如何避免Race condition
date: 2025-06-01
categories: React
---

最近看到[React 之 Race Condition](https://juejin.cn/post/7163202327594139679)这篇文章，里面提到了ahooks中的useRequest也能解决Race Condition，因此挺好奇怎么解决的

以下是测试代码：

```tsx
import { useState } from 'react';
import { useRequest } from 'ahooks';

const fakeFetch = (person: string) => {
  return new Promise<string>((res) => {
    setTimeout(() => res(`${person}'s data`), Math.random() * 5000);
  });
};

const Test = () => {
  const [person, setPerson] = useState('Nick');

  const { data, loading } = useRequest(() => fakeFetch(person), {
    refreshDeps: [person],
  });

  const handleClick = (name: string) => () => {
    setPerson(name);
  };

  return (
    <>
      <button onClick={handleClick('Nick')}>Nick's Profile</button>
      <button onClick={handleClick('Deb')}>Deb's Profile</button>
      <button onClick={handleClick('Joe')}>Joe's Profile</button>

      {person && (
        <>
          <h1>{person}</h1>
          <p>{loading ? 'Loading...' : data}</p>
        </>
      )}
    </>
  );
};

export default Test;
```

找到 `ahooks` 的源码，位置在 `/packages/hooks/src/useRequest/src/Fetch.ts`，看到如下[代码](https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useRequest/src/Fetch.ts#L45)

```ts
async runAsync(...params: TParams): Promise<TData> {
	this.count += 1;
	const currentCount = this.count;
	// ...

	try {
		// replace service
		let { servicePromise } = this.runPluginHandler('onRequest', this.serviceRef.current, params);
		// ...

		const res = await servicePromise;

		if (currentCount !== this.count) {
			// prevent run.then when request is canceled
			return new Promise(() => {});
		}

		// ...
		return res;
	} catch (error) {
		if (currentCount !== this.count) {
			// prevent run.then when request is canceled
			return new Promise(() => {});
		}
		// ...
		throw error;
	}
}
```

从代码中其实可以看出来内部是通过 `count` 这个变量来控制当前请求函数值的，从这一点也可以看出代码并没有禁用之前的请求函数，也就是说在 `useRequest` 中，不推荐在异步函数中直接设置值，请看如下测试代码：

```tsx
import { useState } from 'react';
import { useRequest } from 'ahooks';

const fakeFetch = (person: string) => {
  return new Promise<string>((res) => {
    setTimeout(() => res(`${person}'s data`), Math.random() * 5000);
  });
};

const Test = () => {
  const [person, setPerson] = useState('Nick');
  const [data, setData] = useState('')

  const { loading } = useRequest(() => {
    return fakeFetch(person).then(d => {
      setData(d)
    })
  }, {
    refreshDeps: [person],
  });

  const handleClick = (name: string) => () => {
    setPerson(name);
  };

  return (
    <>
      <button onClick={handleClick('Nick')}>Nick's Profile</button>
      <button onClick={handleClick('Deb')}>Deb's Profile</button>
      <button onClick={handleClick('Joe')}>Joe's Profile</button>

      {person && (
        <>
          <h1>{person}</h1>
          <p>{loading ? 'Loading...' : data}</p>
        </>
      )}
    </>
  );
};

export default Test;
```

通过测试发现，上面代码还是会不可避免的出现`Race Condition`，所以在设置值的时候要么使用函数返回的 `data`，也就是最开始的测试代码那种形式，要么在 `onSuccess` 中去设置值，如下

```tsx
const [data, setData] = useState('')

const { loading } = useRequest(() => {
	return fakeFetch(person)
}, {
	refreshDeps: [person],
	onSuccess: (d) => {
		setData(d)
	}
});
```
