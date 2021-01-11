---
title: '[CodeWars] 최소값 & 최대값 구하기'
date: 2018-02-26 09:22:55
category: 'codewars'
draft: false
---

## 배열의 최소값 & 최대값 찾아서 구하기

> Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
> Example

```js{3}
  max([4,6,2,1,9,63,-134,566]) returns 566
  min([-52, 56, 30, 29, -54, 0, -110]) returns -110
  max([5]) returns 5
  min([42, 54, 65, 87, 0]) returns 0
```

1. Array.sort() 사용하기

```js{3}
  function min((list) => {
    list.sort((a, b) => (a - b))
    return list[0]
  })

  function max((list) =>{
    list.sort((a, b) => (b - a))
    return list[0]
  })
```

2. Math.min Math.max & apply() 사용하기

```js{3}
  function min((list) => {
    return Math.min.apply(null,list);
  })

  function max((list) => {
    return Math.max.apply(null,list);
  })
```

3. Math.min, Math.max & array 사용하기

```js{3}
const min = list => Math.min(...list);
const max = list => Math.max(...list);
```

## 마치며

하나의 문제를 해결하는 데 정해진 답안은 없는 것 같다는 느낌을 받았습니다 :D
일단 정도는 없지만.. 답안을 보면 변태같은 답안을 내는 사람들을 보며 오늘도 반성하게 되네요 :P
