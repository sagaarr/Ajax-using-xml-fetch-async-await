

const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users').then((data) => console.log(data))
// .catch(err => console.log(err));

const data = {
  name: 'sagar.c',
  username : 'jsd.com',
  email:'jsd@gmail.com'
}

// // Create Post 


// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// Update a POST (PUT-request) 

// http.put('https://jsonplaceholder.typicode.com/users/5', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// DELETE a POST

http.delete('https://jsonplaceholder.typicode.com/users/5')
      .then(data => console.log(data))
      .catch(err => console.log(err));