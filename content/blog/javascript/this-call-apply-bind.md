---
title: 'call(), apply(), bind()'
date: 2020-01-13 22:54:18
category: 'javascript'
draft: false
---

## 들어가며

> javascript에서 this로 사용할 객체를 인수로 받아서 처리하는 method들은 Function.proptotype.call(), Function.proptotype.apply(), Function.proptotype.bind()가 존재하며 특히 react에서 Class Component 사용 시, bind를 많이 사용하게된다. 이 세가지 메서드들은 뭐가 다를까?

```js{3}
function iAmThisBinding() {
  console.log(arguments);
  return this;
}

const thisArg = { count: 1 }; // this로 사용할 객체

/**
 * 1. Function.proptotype.call()
 * 본질적인 기능은 함수를 호출하는 것이며, 첫번째 argument로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.
 * 선언 즉시 호출
 **/
console.log(iAmThisBinding.call(thisArg, 1, 2, 3));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// { count: 1 }

/**
 * 2. Function.proptotype.apply()
 * call과 동일한 동작을 하지만 두번째 인자를 배열로 받아 처리한다.
 **/
console.log(iAmThisBinding.apply(thisArg, [1, 2, 3]));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// { count: 1 }

/**
 * 3. Function.proptotype.bind()
 * ES5에서 추가된 메서드
 * 선언한 즉시 함수를 호출하지 않고 새로운 함수를 반환
 * 함수에 this를 미리 적용하는 것과 부분 적용 함수를 구현하는 두 가지 목적
 * 메서드의 this와 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 이슈 해결을 위해 사용
 **/
console.log(iAmThisBinding.bind(thisArg)); // iAmThisBinding
console.log(iAmThisBinding.bind(thisArg)()); // { count: 1 }
```
