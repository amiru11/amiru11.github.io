---
title: 'String에 있는 숫자에 콤마찍기'
date: 2018-10-07 20:54:18
category: 'javascript'
draft: false
---

## String to Number with Comma

데이터를 받아와서 나타내려다 보면 숫자의 단위값을 나타내는 함수가 필요할 때가 있다.

```js{3}
  function validateNumberComma(value) {
    var nf = Intl.NumberFormat(); // 넘버포맷 함수

    // 정규식을 통해서 받는 값을 string 판별

    if (typeof value === 'string') {
      var pureValue = value.replace(/[^0-9]/g, "");
    } else {
      var pureValue = value;
    }
    var numberComma = nf.format(pureValue);
    return numberComma;
  }

  // Result
  > validateNumberComma(300)
  '300'
  > validateNumberComma(3000)
  '3,000'
  > validateNumberComma(30000)
  '30,000'
  > validateNumberComma(300000)
  '300,000'
  > validateNumberComma(3000000)
  '3,000,000'
```

## 마치며

자주 쓰는 코드를 좀 정리해서 관리해야겠다는 생각이 강하게 든다.....

- Reference
  1. <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat>
