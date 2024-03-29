const request = {
  get(url) {
    return fetch(url);
  },

  post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  },

  patch(url, payload) {
    return fetch(url, {
      method: 'PATCH',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  },

  delete(url) {
    return fetch(url, { method: 'DELETE' });
  },
};

request
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));

request
  .post('https://jsonplaceholder.typicode.com/todos', {
    userId: 1,
    title: 'JavaScript',
    completed: false,
  })
  .then((response) => response.json())
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));

request
  .patch('https://jsonplaceholder.typicode.com/todos/1', {
    completed: true,
  })
  .then((response) => response.json())
  .then((todos) => console.log(todos))
  .catch((err) => console.log(err));

request
  .delete('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
