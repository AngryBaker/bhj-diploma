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


const createRequest = (options) => {
  const xhr = new XMLHttpRequest;
  const url = options.url;
  xhr.responseType = "json";
  xhr.withCredentials = true;
  
  if (options.method === "GET") {
    currentUrl = urlConstructor(url, options.data);
    try {
      xhr.open( "GET", currentUrl);
      xhr.send(); 
    }   catch(e) {
      console.log("tyt ne rabotaet");
      options.callback(e);
    }
  } else {
    const formData = new FormData;
    formAppender(options.data, formData);
    try {
      xhr.open(options.method, options.url);
      xhr.send(formData); 
    }  catch(e) {
      options.callback(e);
    }
    
  } 
  const response = xhr.response;
  function loadHandler(e) {
    
    options.callback(response);
  };
   

  xhr.addEventListener("load", loadHandler);
};
