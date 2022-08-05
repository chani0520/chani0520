const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis'],
};

// 객체를 JSON포맷의 문자열로 변환
const json = JSON.stringify(obj);

// JSON포맷의 문자열을 객체로 변환
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
// object { name: 'Lee', age: 20, alive: true, hobby: [ 'traveling', 'tennis' ] }
