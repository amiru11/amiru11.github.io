---
title: '배열에서 중복 값 제거하기'
date: 2019-11-20 20:54:18
category: 'javascript'
draft: false
---

배열에서 중복 값을 쉽게 제거해본다.

```js{3}
// 1. new Set() 사용하기
const items = [1, 4, 2, 3, 1, 5];
const uniqArray = array => [...new Set(array)];

console.log(uniqArray(items));

// 2. Array.filter 사용하기
const items = [1, 4, 2, 3, 1, 5];
const uniqArray = array => array.filter((item, index) => array.indexOf(item) >= index);

console.log(uniqArray(items));
```
