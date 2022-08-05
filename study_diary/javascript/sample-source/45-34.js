const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

const githubIds = ['chani0520'];

Promise.all(
  githubIds.map((id) => promiseGet(`http://api.github.com/users/${id}`))
)
  .then((users) => users.map((user) => user.name))
  .then(console.log)
  .catch(console.error);
