---
title: '함수형 프로그래밍 (1) - 일급함수'
date: 2021-02-12 21:53:18
category: 'javascript'
draft: false
---

# 일급이란?

1. 값으로 다룰 수 있음.
2. 변수에 담을 수 있음.
3. 함수의 arguments
4. 함수의 return

## 일급함수란???

1. 함수를 값으로 다룰 수 있음
2. javascript에서 일급함수는 조합성과 추상화의 도구로 사용한다는 뜻.

```js{3}
const add10 = number => number + 10;
console.log(add10); // number => number + 10
console.log(add10(10)); // 20

const f1 = () => () => 1;
console.log(f1()); // () => 1

const f2 = f1();
console.log(f2); // () => 1
console.log(f2()); // 1
```

## 고차함수?????

- 함수를 값으로 다루는 함수
  - 함수를 인자로 받아서 실행하는 함수
  - 함수를 만들어 리턴하는 함수 (클로저 사용)

### 함수를 인자로 받아서 실행하는 함수

```js{3}
// 1. 함수를 인자로 받아서 실행시키는 함수
const apply10 = func => func(10); // 1-1. 함수를 인자로 받고 인자로 받은 함수에 10이라는 파라미터를 넣어준다.
const add5 = num => num + 5; // 1-2. 숫자를 인자로 받아 숫자에 5를 더하는 일급함수
console.log(apply10(add5)); // 1-3. 결과 값: 15

// 2. 함수를 인자로 받아서 n번만큼 실행시키는 함수
const repeater = (func, n) => {
  if (!n) return;
  let i = -1;
  while (++i < n) func(i); // 0~n번째까지 함수를 실행시켜주겠다.
};

repeater(console.log, 3); // 0, 1, 2
repeater(num => console.log(num + 10), 3); // 10, 11, 12
```

### 함수를 만들어 리턴하는 함수 (클로저 사용)

```js{3}
const addMaker = a => b => a + b;
const add10 = addMaker(10); // add10함수가 addMaker(10)이라는 일급함수가되고 함수를 반환
console.log(add10); // b => a + b // b => 10 + b 가 된다.
console.log(add10(10)); // 20
// 클로저는 b => a + b에서 함수가 만들어지는 환경에서의 a와 자기자신을 기억하는 객체를 통칭
```
