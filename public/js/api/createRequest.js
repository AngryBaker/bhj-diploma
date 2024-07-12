const { options } = require("nodemon/lib/config");

function formAppender(obj, form) {
    for ( const key in obj) {
       form.append(key, obj.key);
    }
};

function urlConstructor(url, obj) {
    url = url + "?";
    if (url[url.length -1] === "?") {
        for ( const key in obj) {
            url = `${url}${key}=${obj.key}`
        }
    } else {
        for ( const key in obj) {
            url = `${url}&${key}=${obj.key}`
        }
        return url;
    }
    
};
const err = null;
function loadHandler(e) {
  const response = this.response;
  options.callback(err, response);
};

const createRequest = (options) => {
  const xhr = new XMLHttpRequest;
  const url = options.url;

  try {
    if (options.method === "GET") {
        currentUrl = urlConstructor(url, options.data);
        xhr.open( 'GET', currentUrl);
        // xhr.open( 'GET', options.url, [true, options.data.email, options.data.password]);
        xhr.responseType = 'json';
        xhr.send();
      } else {
        const formData = new FormData;
        formAppender(options.data, formData);
        xhr.open(options.method, options.url);
        xhr.responseType = 'json';
        xhr.send(formData);
      }
  }
  catch(e) {
    err = e;
  }


  
  xhr.addEventListener("load", loadHandler);
};
