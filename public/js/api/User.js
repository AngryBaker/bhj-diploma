
class User {
  URL = "/user";
  
  static setCurrent(user) {
    localStorage.user = JSON.stringify(user);
  }

  static unsetCurrent() {
    localStorage.removeItem("user");
  }

  
  static current() {
    return JSON.parse(localStorage.user);
  }

  static fetch (callback) {
    const fetchObj = {
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
    };
    createRequest(fetchObj);
  }

 
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  static register(data, callback) {
    const registerObj = {
      url: Entity.URL + "/register",
      data,
      method: "POST",
      callback: (err, response) => {
        if (response.user) {
          User.setCurrent(response.user);
        }
        callback(err, response);
      },
    };
    createRequest(registerObj);
  }

  static logout(callback) {
    const logoutObj = {
      url: Entity.URL + "/logout",
      method: "POST",
      callback: (err, response) => {
        if (response.user) {
          User.setCurrent(response.user);
        }
        callback(err, response);
      },
    };
    createRequest(logoutObj);
  }
}
