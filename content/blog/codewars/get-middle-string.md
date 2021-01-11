---
title: '[CodeWars] the Middle Character'
date: 2018-02-26 09:22:55
category: 'codewars'
draft: false
---

## 들어가기

[Codewars - Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028) 문제풀이

## getMiddle 함수를 사용해서 각 문자열의 가운데 문자를 가져오기

- Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

- Example

```js{3}
// For Example
// 1. getMiddle("test") -> "es"
// 2. getMiddle("testing") -> "t"
// 3. getMiddle("cwAt") -> "wA"
// 4. getMiddle("A") -> "A"
```

## 풀이과정

1. 문자열의 길이가 짝수인지 홀수인지 파악하기

```js{3}
const getMiddle = str => {
  if (str.length % 2 === 1) {
    // 문자열의 길이가 홀수일 때
  } else {
    // 문자열의 길이가 짝수일 때
  }
};
```

2. 짝수는 두 글자 return, 홀수는 한 글자 return 시키기

```js{3}
const getMiddle = str => {
  if (str.length % 2 === 1) {
    // 문자열의 길이가 홀수일 때
    str.substring(str.length / 2, str.length / 2 + 1);
  } else {
    // 문자열의 길이가 짝수일 때
    str.substring(str.length / 2 - 1, str.length / 2 + 1);
  }
};
```

3. 코드 다듬기 :)

```js{3}
const getMiddle = str => {
  const middleIndex = str.length / 2;
  return str.length % 2 === 1
    ? str.substring(middleIndex, middleIndex + 1)
    : str.substring(middleIndex - 1, middleIndex + 1);
};
```

4. substring() 대신 slice()사용하기

```js{3}
const getMiddle = str => {
  return str.slice((str.length - 1) / 2, str.length / 2 + 1);
};
```

- Reference
  - [MDN - substring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
  - [MDN - slice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
