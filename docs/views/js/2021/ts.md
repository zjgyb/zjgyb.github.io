---
title: TS练习题
date: 2021-10-21
categories: JavaScript
tags:
 - TypeScript
---

## 前言

写了一段时间的TS了，正好看到一篇文章，来自**[掘金阿宝哥](https://juejin.cn/post/7009046640308781063)**，里面出了30道TS的练习题，我尝试了一下解题。通过练习发现自己对TS的协变、泛型等加深了理解，不过还是没能自己解答所有问题:joy:

## 第1道

原因：因为T内的内容多余User

解决措施：

```ts
type User = {
    id: number;
    kind: string;
};
  
function makeCustomer<T extends User>(u: T): T {
    return {
        ...u,
        id: u.id,
        kind: 'customer'
    };
}
```

## 第2道-函数重载

```ts
function f(a: string, b: string)
function f(a: number, b: number)
function f(a: string | number, b: string | number) {
    if (typeof a === 'string') {
        return a + ':' + b;
    } else {
        return a + b;
    }
}
  
f(2, 3);
f(1, 'a');
f('a', 2);
f('a', 'b');
```

## 第3道

```ts
type Foo = {
	a?: number;
	b: string;
	c?: boolean;
}

type SetRequired<T, keys extends keyof T> = Required<Pick<T, keys>> & Omit<T, keys>;

// 测试用例
type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
```

## 第4道

```ts
interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
}

type ValueOf<T> = T[keyof T];
type ConditionalPick<T, U> = Pick<T, NonNullable<ValueOf<{ [key in keyof T]: T[key] extends U ? key : null; }>>>;

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}
```

## 第5道

```ts
type Fn = (a: number, b: string) => number
type AppendArgument<F extends (...arg: any) => any, A> = (x: A, ...rest: Parameters<F>) => ReturnType<F>;

type FinalFn = AppendArgument<Fn, boolean>;
// (x: boolean, a: number, b: string) => number
```

## 第6道

```ts
type NaiveFlat<T extends any[]> = T[number] extends any[] ? NaiveFlat<T[number]> : T[number];

// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>;

type DeepFlat<T extends any[]> = {
    [key in keyof T]: T[key] extends any[] ? NaiveFlat<T[key]> : T[key];
}[number];

// 测试用例
type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]];
type DeepTestResult = DeepFlat<Deep>;
```

## 第7道

```ts
type EmptyObject = {
    [key in string]: never
}; 

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = { // 将出现编译错误
  prop: "TS"
}
```

```ts
// 来自：https://dev.to/macsikora/advanced-typescript-exercises-answer-7-3k5e
type SomeType = {
    prop: string
}

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly<T1 extends SomeType, T2 = T1>(x: {
    [key in keyof T2]: key extends keyof T1 ? T2[key]: never
} ) { return x }

// 测试用例：
const x = { prop: 'a' };
takeSomeTypeOnly(x) // 可以正常调用

const y = { prop: 'a', addditionalProp: 'x' };
takeSomeTypeOnly(y) // 将出现编译错误

// 2
type Exclusive<T, T2 extends T> = {
    [key in keyof T2]: key extends keyof T ? T2[key] : never;
}
// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly<T extends SomeType>(x: Exclusive<SomeType, T>) { return x }

// 3
type Exclusive<T, T2 extends T> = T2 & Record<Exclude<keyof T2, keyof T>, never>;

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly<T extends SomeType>(x: Exclusive<SomeType, T>) { return x }
```

## 第8道

```ts
type NonEmptyArray<T> = T[] & { 0: T };

const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使用
```

## 第9道

```ts
type InferToString<T> = T extends string ? `${T}` : never;

type JoinStrArray<
    Arr extends string[], 
    Separator extends string, 
    Result extends string = ''
> = Arr extends [infer S1, ...infer S2] ? 
        S2 extends [] ? `${Result}${InferToString<S1>}`
        : S2 extends string[] ? JoinStrArray<S2, Separator, `${Result}${InferToString<S1>}${Separator}`> : never
        : Result;

// 测试用例
type Names = ["Sem", "Lolo", "Kaquko"]
type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, " "> // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, "⭐️"> // "Sem⭐️Lolo⭐️Kaquko"
```

## 第10道

```ts
type TrimLeft<V extends string> = V extends `${infer S1}${infer S2}` ? S1 extends ' ' ? TrimLeft<S2> : `${S1}${S2}` : V;
type TrimRight<V extends string, Result extends string = ''> = V extends `${infer S1}${infer S2}` ? S1 extends ' ' ? Result : TrimRight<S2, `${Result}${S1}`> : Result;
type Trim<V extends string> = TrimRight<TrimLeft<V>>;

// 测试用例
type B = Trim<'   semlinker '>
//=> 'semlinker'
```

## 第11道

```ts
type IsEqual<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false;

// 测试用例
type E0 = IsEqual<1, 2>; // false
type E1 = IsEqual<{ a: 1 }, { a: 1 }> // true
type E2 = IsEqual<[1], []>; // false
```

## 第12道

```ts
type Head<T extends Array<any>> = T[0] extends undefined ? never : T[0];// 你的实现代码

// 测试用例
type H0 = Head<[]> // never
type H1 = Head<[1]> // 1
type H2 = Head<[3, 2]> // 3
```

## 第13道

```ts
type Tail<T extends Array<any>> = T extends [infer L, ...infer R] ? R : []; 

// 测试用例
type T0 = Tail<[]> // []
type T1 = Tail<[1, 2]> // [2]
type T2 = Tail<[1, 2, 3, 4, 5]> // [2, 3, 4, 5]
```

## 第14道

```ts
type Unshift<T extends any[], E> = [E, ...T];

// 测试用例
type Arr0 = Unshift<[], 1>; // [1]
type Arr1 = Unshift<[1, 2, 3], 0>; // [0, 1, 2, 3]
```

## 第15道

```ts
type Shift<T extends any[]> = T extends [infer T1, ...infer T2] ? T2 : [];

// 测试用例
type S0 = Shift<[1, 2, 3]> // [2, 3]
type S1 = Shift<[string,number,boolean]> // [number,boolean]
```

## 第16道

```ts
type Push<T extends any[], V> = [...T, V];

// 测试用例
type Arr0 = Push<[], 1> // [1]
type Arr1 = Push<[1, 2, 3], 4> // [1, 2, 3, 4]
```

## 第17道

```ts
type Includes<T extends Array<any>, E> = E extends T[number] ? true : false;

type I0 = Includes<[], 1> // false
type I1 = Includes<[2, 2, 3, 1], 2> // true
type I2 = Includes<[2, 3, 3, 1], 1> // true
```

## 第18道

```ts
// 来自https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

// 测试用例
type U0 = UnionToIntersection<string | number> // never
type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }
```

## 第19道

```ts
type Person = {
    id: string;
    name: string;
    age: number;
    from?: string;
    speak?: string;
};

type OptionalKeys<T> = {
    [key in keyof T]: T extends Record<key, T[key]> ? never : key;
}[keyof T];
type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"
```

## 第20道

```ts
type Curry<
  F extends (...args: any[]) => any,
  P extends any[] = Parameters<F>, 
  R = ReturnType<F> 
> = P extends [infer P1, ...infer P2] ? 
    (P2 extends [] ? (arg: P[0]) => R : (arg: P[0]) => Curry<F, P2, R>)
    : () => R;
type F0 = Curry<() => Date>; // () => Date
type F1 = Curry<(a: number) => Date>; // (arg: number) => Date
type F2 = Curry<(a: number, b: string) => Date>; //  (arg_0: number) => (b: string) => Date
```

## 第21道

```ts
type Foo = {
	a: number;
	b: string;
};

type Bar = {
	b: number;
};

type Merge<FirstType, SecondType> = Omit<FirstType, Extract<keyof FirstType, keyof SecondType>> & SecondType;

const ab: Merge<Foo, Bar> = { a: 1, b: 2 };
```

## 第22道

```ts
type Responder = {
	text?: () => string;
	json?: () => string;
	secure?: boolean;
};

type RequireAtLeastOne<
	ObjectType,
	KeysType extends keyof ObjectType = keyof ObjectType,
> = Omit<ObjectType, KeysType> & {
    [key in KeysType]: Required<Pick<ObjectType, key>> & Partial<Omit<ObjectType, key>>
}[KeysType];

type B = RequireAtLeastOne<Responder, 'text' | 'json'>;

// 表示当前类型至少包含 'text' 或 'json' 键
const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
	json: () => '{"message": "ok"}',
	secure: true
};
```

## 第23道

```ts
interface Foo {
    [key: string]: any;
    [key: number]: any;
    bar(): void;
}
  
type RemoveIndexSignature<T> = {
    [key in keyof T as string extends key ? never : number extends key ? never : key]: T[key]
}
  
type FooWithOnlyBar = RemoveIndexSignature<Foo>; //{ bar: () => void; }
```

## 第24道

```ts
type Foo = {
    readonly a: number;
    readonly b: string;
    readonly c: boolean;
};

type CreateMutable<T> = {
    -readonly [key in keyof T]: T[key];
};
type Mutable<T, Keys extends keyof T = keyof T> = CreateMutable<Pick<T, Keys>> & Omit<T, Keys>;

const mutableFoo: Mutable<Foo, 'a'> = { a: 1, b: '2', c: true };

mutableFoo.a = 3; // OK
mutableFoo.b = '6'; // Cannot assign to 'b' because it is a read-only property.
```

## 第25道

```ts
type IsUnion<T, U = T> = U extends infer P ? [T] extends [P] ? false : true : false;

type I0 = IsUnion<string|number> // true
type I1 = IsUnion<string|never> // false
type I2 =IsUnion<string|unknown> // false
```

## 第26道

```ts
type IsNever<T> = [T] extends [never] ? true : false;

type I0 = IsNever<never> // true
type I1 = IsNever<never | string> // false
type I2 = IsNever<null> // false
```

## 第27道

```ts
type Reverse<
  T extends Array<any>,
  R extends Array<any> = []
> = T extends [infer T1, ...infer T2] ? Reverse<T2, [T1, ...R]> : R;

type R0 = Reverse<[]> // []
type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]
```

## 第28道 

```ts
type Item = 'semlinker,lolo,kakuqo';

type Split<
	S extends string, 
	Delimiter extends string,
    Result extends string[] = []
> = S extends `${infer S1}${Delimiter}${infer S2}` ? 
    S2 extends `${infer S3}${Delimiter}${infer S4}` ? 
    Split<S2, Delimiter, [...Result, S1]> : [...Result, S1, S2] : [S];

type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]

// 第二种
type Split<
	S extends string, 
	Delimiter extends string
> = S extends `${infer S1}${Delimiter}${infer S2}` ? [S1, ...Split<S2, Delimiter>] : [S];
```

## 第29道

```ts
type ToPath<S extends string> = S extends `${infer S1}.${infer S2}` ? 
    S1 extends `${infer S3}[${infer S4}]` ? [S3, S4, ...ToPath<S2>] : [S1, ...ToPath<S2>] 
    : [S];

type A = ToPath<'foo.bar.baz'> //=> ['foo', 'bar', 'baz']
type B = ToPath<'foo[0].bar.baz'> //=> ['foo', '0', 'bar', 'baz']
```

## 第30道

```ts
declare const config: Chainable

type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & { [P in K]: V }>;
  get(): { [P in keyof T]: T[P] };
}

const result = config
  .option('age', 7)
  .option('name', 'lolo')
  .option('address', { value: 'XiaMen' })
  .get()

type ResultType = typeof result  
```