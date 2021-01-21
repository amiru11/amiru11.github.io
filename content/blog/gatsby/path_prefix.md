---
title: 'Gatsby에서 __PATH_PREFIX__ 못찾을 때'
date: 2021-01-21 22:53:18
category: 'gatsby'
draft: false
---

Gatsby에서 javascript를 typescript로 변환 중에 `__PATH_PREFIX__`를 잡지 못하는 상황이 생겨서 빠르게 적어놓는다.
`src/global.d.ts` 식으로 글로벌 타입으로 선언해줌.

```js{3}
declare const __PATH_PREFIX__: string;
```
