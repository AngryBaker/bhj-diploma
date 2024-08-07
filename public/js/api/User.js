
class User {
  URL = "/user";
  
  static setCurrent(user) {
    localStorage.user = JSON.stringify(user);
  }

  static unsetCurrent() {
    localStorage.removeItem("user");
  }

  
  static current() {
    return JSON.parse(localStorage.getItem("user"));
  }

  static fetch (callback) {
    createRequest({
      url: Entity.URL + "/current",
      data: User.current(),
      method: "GET",
      callback: (err, response) => {
        if (!response.success) {
          User.unsetCurrent();
        } else if (response.user) {
          User.setCurrent(response.user);
        }
        callback(err, response);
      },
    });
  }

 
  static login(data, callback) {
    if (data.email && data.password){
      createRequest({
        url: this.URL + '/login',
        method: 'POST',
        data,
        callback: (err, response) => {
          if (response.success) {
            User.setCurrent(response.user);
          }
          callback(err, response);
         
        }
      });
    } else {
      throw new Error ("не все обязательные параметры заполнены");
    }
    
   
  }

  static register(data, callback) {
    if(data.email && data.password && data.name){
      createRequest({
        url: Entity.URL + "/register",
        data,
        method: "POST",
        callback: (err, response) => {
          if (response.user) {
            User.setCurrent(response.user);
          }
          callback(err, response);
        },
      });
    } else {
      throw new Error ("не все обязательные параметры заполнены");
    }
  }

  static logout(callback) {
    createRequest({
      url: Entity.URL + "/logout",
      method: "POST",
      callback: (err, response) => {
        if (response.success) {
          User.unsetCurrent();
        }
        callback(err, response);
      },
    });
  }
}
