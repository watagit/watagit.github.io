---
category: 'blog'
cover: './cover.jpg'
title: 'ReactのStateの初期化について'
description: ''
date: '2019-09-30'
tags: ['react', 'typescript']
published: true
---

```tsx:title=Sample.tsx
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

↓ のようにも書ける

```tsx:title=Sample.tsx
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
