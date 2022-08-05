const promise = new Promise((resolve, reject) => {
  if(/* 비동기 처리 성공 */) {
    resolve('result');
  } else {  
    reject('failure reason')
  }
});
