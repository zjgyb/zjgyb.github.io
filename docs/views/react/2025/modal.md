---
title: Modal使用的疑惑与讨论
date: 2025-05-23
categories: React
---

最近有一个疑惑，就是不知道大家是怎么使用弹窗的，下面是测试代码`react` + `antd`

## 版本1

一开始我是这样使用弹窗的，所有的参数单独传入，如下：

```tsx
import { Button } from 'antd'
import ModalTest, { Item } from './ModalTest';
import { useState } from 'react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [record, setRecord] = useState<Item>()

  return (
    <>
      <Button onClick={() => {
        setRecord({
          id: 1,
          name: '2'
        })
        setVisible(true)
      }}>编辑</Button>
      <ModalTest visible={visible} record={record} onClose={() => setVisible(false)} />
    </>
  );
};

export default App;
```

弹窗内容是这样定义的：

```tsx
// ModalTest.tsx
import { Modal } from 'antd'
import { FC } from 'react'

export type Item = {
  id: number
  name: string
}

type IProps = {
  visible: boolean
  record?: Item
  onClose: (update: boolean) => void
}

const ModalTest: FC<IProps> = ({ visible, record, onClose }) => {
  const onSubmit = () => {
    return Promise.resolve().then(() => {
      onClose(true)
    })
  }
  return <Modal title="测试" open={visible} onCancel={() => onClose(false)} onOk={onSubmit}>
    {record?.name}
  </Modal>
}

export default ModalTest
```

这种方式得定义多个`state`，相对比较繁琐，因此后面我更多使用了版本2

## 版本2

这个是我目前比较常用的方式，就是在弹窗层面定义好数据类型和默认数据，然后提供给父组件使用，如果需要覆盖默认数据，那么只在一个`state`处理就可以了

```tsx
import { Button } from 'antd'
import ModalTest, { getModalTestData } from './ModalTest';
import { useState } from 'react';

const App = () => {
  const [modalData, setModalData] = useState(getModalTestData)

  return (
    <>
      <Button onClick={() => {
        setModalData({
          open: true,
          record: {
            id: 1,
            name: '2'
          },
          onClose: () => {
            setModalData(getModalTestData)
          }
        })
      }}>编辑</Button>
      <ModalTest {...modalData} />
    </>
  );
};

export default App;
```

```tsx
import { Modal, ModalProps } from 'antd'
import { FC, memo } from 'react'

type Item = {
  id: number
  name: string
}

type IProps = {
  record?: Item
  onClose: (update: boolean) => void
} & ModalProps

export const getModalTestData = (): IProps => {
  return {
    open: false,
    onClose: () => {}
  }
}

const ModalTest: FC<IProps> = ({  record, onClose, ...rest }) => {
  const onSubmit = () => {
    return Promise.resolve().then(() => {
      onClose(true)
    })
  }
  return <Modal title="测试" onCancel={() => onClose(false)} onOk={onSubmit} {...rest}>
    {record?.name}
  </Modal>
}

export default memo(ModalTest)
```

## 版本3

当然我也见过把弹窗行为封装起来的方式，如下：

```tsx
import { Button } from 'antd'
import QuickModal from './QuickModal';

const App = () => {
  return (
    <>
      <QuickModal type='custom' title="测试" content={<div>12312</div>}>
        <Button>编辑</Button>
      </QuickModal>
    </>
  );
};

export default App;
```

```tsx
import { Modal, ModalFuncProps } from 'antd'
import { cloneElement } from 'react'

type RequiredType = 'type' | 'children'
export type QuickModalProps = Omit<ModalFuncProps, RequiredType> &
  Required<Pick<ModalFuncProps, RequiredType>>

export default ({ type, children, ...rest }: QuickModalProps) => {
  const showModal = () => {
    Modal[type](rest)
  }

  return cloneElement(children, {
    onClick: showModal
  })
}
```

但是这种只适合内容相对较少的弹窗，对于相对复杂的弹窗来说在同一个文件内写会导致内容相对较多，不利于维护

## 版本4

还有一种是封装好了，然后传入相关参数，可以看[链接](https://github.com/eBay/nice-modal-react)，这种方式我没有使用过，下面是摘抄的使用方式

```tsx
import NiceModal from '@ebay/nice-modal-react';
import MyAntdModal from './my-antd-modal'; // created by above code

function App() {
  const showAntdModal = () => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(MyAntdModal, { name: 'Nate' })
  };
  return (
    <div className="app">
      <h1>Nice Modal Examples</h1>
      <div className="demo-buttons">
        <button onClick={showAntdModal}>Antd Modal</button>
      </div>
    </div>
  );
}
```

## 总结

这是我见过的 4 种使用方式，不知道其他方式是怎样的