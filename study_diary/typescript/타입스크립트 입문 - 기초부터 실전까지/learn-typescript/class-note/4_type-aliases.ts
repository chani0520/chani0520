// interface Person1 {
//   name: string;
//   age: number;
// }

type Person1 = {
  name: string;
  age: number;
};

var seho: Person1 = {
  name: 'seho',
  age: 30,
};

// 타입은 어느곳에서든지 사용 가능
type myString = string;
var str: myString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

// 타입별칭은 새로운 타입을 생성하는 것이 아니라, 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것
/**
 * 타입 VS 인터페이스
 * - 타입 별칭의 경우는 확장이 불가능하다.
 * - 인터페이스는 확장이 가능, 따라서 공식문서에서도 인터페이스를 활용하라고 추천 ( 좋은 소프트웨어의 요소중 하나는 확장 가능성... )
 */
