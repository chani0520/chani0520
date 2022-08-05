const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis'],
};

// 객체를 JSON 포맷의 문자열로 변환
const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
// string {
//   "name": "Lee",
//   "age": 20,
//   "alive": true,
//   "hobby": [
//     "traveling",
//     "tennis"
//   ]
// }

// replacer함수 ( stringify()의 두번째 인자 ).
// 아래 예제는 값(value)의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
  // undefined: 반환하지 않음
  return typeof value === 'number' ? undefined : value;
}

const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
// string {
//   "name": "Lee",
//   "alive": true,
//   "hobby": [
//     "traveling",
//     "tennis"
//   ]
// } ==> "age": 20이 필터링됨
