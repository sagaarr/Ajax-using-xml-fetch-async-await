const http = new easyHTTP;

// Get Posts

// http.get('https://jsonplaceholder.typicode.com/posts', function(err , posts) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// });


// Get a single Post
// http.get('https://jsonplaceholder.typicode.com/posts/50', function(err , posts) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// });


// Create a Data 
const data = {
  name:'steve Jobs',
  roll:'Apple founder' 
}

// create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data , function(err, post) {
//   if(err) {
//     console.log('Something is wrong')
//   }else{
//     console.log(post)
//   }
// } )

//  Update  Post
// http.put('https://jsonplaceholder.typicode.com/posts/3', data , function(err , put) {
//   if(err) {
//        console.log('Something is wrong')
//   }else{
//         console.log(put)
//   }
// })

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/10', function(err , deleted) {
    if(err){
      console.log(err);
    }else{
      console.log(deleted);
    }
  });
  
  
