/**
 * Easy HTTP Library 
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author sagar.C 
 */


 class EasyHTTP {

  // Make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err)=>{
        reject(err);
      })

    });
  }

  // make an HTTP POST Request 
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method:'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err)=>{
        reject(err);
      })

    });
  }

  // Make HTTP put Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method:'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err)=>{
        reject(err);
      })

    });
  }


   // Make an HTTP DELETE Request
   delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        resolve('Data Deleted !!!');
      })
      .catch((err)=>{
        reject(err);
      })

    });
  }
 }