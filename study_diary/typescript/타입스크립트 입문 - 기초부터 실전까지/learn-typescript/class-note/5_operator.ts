// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// 유니언 타입 ( 하나 이상의 타입을 쓸 수 있게 만들어 줌 )
var seho1: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('value must be string or number!');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// | 유니언
// function askSomeoneUnion(someone: Developer | Person) {
//   // someone.name; // 두 인터페이스의 공통 속성만 참조가능 ( 다른 속성을 사용하려면 타입 가드 사용해야 한다. )
//   // someone.skill;
//   // someone.age;
// }
// askSomeoneUnion({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeoneUnion({ name: '캡틴', age: 100 });

// & 인터섹션
function askSomeoneIntersection(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeoneIntersection({ name: '디벨로퍼', skill: '웹 개발', age: 34 });
// askSomeoneIntersection({ name: '캡틴', age: 100 });

// var seho: string | number | boolean;
// var capt: string & number & boolean;
