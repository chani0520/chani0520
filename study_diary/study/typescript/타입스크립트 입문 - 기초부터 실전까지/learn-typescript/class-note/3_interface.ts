interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 30,
  name: 'seho',
};

// 함수에 인터페이스 활용 -> 이 경우가 정말 많음
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: 'captain',
  age: 100,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용 ( 함수도 인터페이스로 정의해 규칙화 할수 있다. )
interface sumFunction {
  // 함수의 인자와 반환타입 정의
  (a: number, b: number): number;
}

var sum: sumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string; // 인덱스는 number
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // 딕셔너리 패턴?

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {
  // ...
});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var chan: Developer = {
  name: 'Chan',
  age: 31,
  language: 'hi',
};
