---
category: 'blog'
cover: './cover.jpg'
title: 'ReactのStateの初期化について'
description: ''
date: '2019-09-30'
tags: ['react', 'typescript']
published: false
---

↓ 一般的な初期化方法

```tsx
import React, { useState } from 'react'

const Sample: React.FC = () => {
  const [ count, setCount ] = useState(0)

  const decreaseCount = () => {
    setCount(count - 1)
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={decreaseCount}> - </button>
      <span> {count} </span>
      <button onClick={increaseCount}> + </button>
    </div>
  )
}

export default Sample
```

<br />

↓ のようにも書ける

```tsx
import React, { useState } from 'react'

const countInitial = () => {
  return 0
}

const Todo: React.FC = () => {
  const [ todos, setTodos ] = useState(() => countInitial())

  const decreaseCount = () => {
    setCount(count - 1)
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={decreaseCount}> - </button>
      <span> {count} </span>
      <button onClick={increaseCount}> + </button>
    </div>
  )
}
```

<br />

**参考文献** <br />
[What I Have Learned Using React Hooks](https://medium.com/swlh/what-i-have-learned-using-react-hooks-b5d99593b33a)
