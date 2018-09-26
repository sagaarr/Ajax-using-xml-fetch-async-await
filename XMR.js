function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url , true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200){
      callback(null, self.http.responseText)
    }else{
      callback('Error :' + self.http.status);
    }
  }
  this.http.send();
};


// Make HTTP POST request
easyHTTP.prototype.post = function(url , data , callback) {
  this.http.open('POST', url , true);
  /*
    Content-Type ==	The Media type of the body of the request (used with POST and PUT requests).	
    Content-Type: application/x-www-form-urlencoded	Permanent

    FOR MORE INFO:: https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
  */
  this.http.setRequestHeader('content-type', 'application/json');

  let self = this;
  this.http.onload = function() {

    //  Here as we pass The First parameter as null we have to declare 2-variable at app.js as in the function's for each loop as the first parameter is gonna get the null value if we declare a single variable it by-default will take null.
     callback(null, self.http.responseText)
    
  }
  this.http.send(JSON.stringify(data));
};

// Make HTTP PUT request

// Make HTTP POST request
easyHTTP.prototype.put = function(url , data , callback) {
  this.http.open('PUT', url , true);
  /*
    Content-Type ==	The Media type of the body of the request (used with POST and PUT requests).	
    Content-Type: application/x-www-form-urlencoded	Permanent

    FOR MORE INFO:: https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
  */
  this.http.setRequestHeader('content-type', 'application/json');

  let self = this;
  this.http.onload = function() {

  
     callback(null, self.http.responseText)
    
  }
  this.http.send(JSON.stringify(data));
};



// Make HTTP DELETE request

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url , true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200){
      callback(null, 'Post Deleted')
    }else{
      callback('Error :' + self.http.status);
    }
  }
  this.http.send();
};

