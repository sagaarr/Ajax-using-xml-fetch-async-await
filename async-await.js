/**
 * Easy HTTP Library 
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author sagar.C 
 */


 class EasyHTTP {

  // Make an HTTP GET Request
  async get(url) {
    const fetchD = await fetch(url) ;
    const data = await fetchD.json();
    return data;
  }

  // make an HTTP POST Request 
  async post(url, data) {
    const fetchD = await fetch(url, {
                                      method:'POST',
                                      headers: {
                                        'Content-type': 'application/json'
                                      },
                                      body:JSON.stringify(data)
                           })
      const Ddata = await fetchD.json();
      return Ddata;
  }

  // Make HTTP put Request
  async put(url, data) {
    const fetchD = await fetch(url, {
                                        method:'PUT',
                                        headers: {
                                          'Content-type': 'application/json'
                                        },
                                        body:JSON.stringify(data)
                               })
      
    const Ddata = await fetchD.json();
    return Ddata;
  }


   // Make an HTTP DELETE Request
  async delete(url) {
    const fetchD = await  fetch(url);
     
    const data = "Data Deleted..."
    return data;
  }
 }