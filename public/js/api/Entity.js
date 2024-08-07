
class Entity {
  URL = "";

  static list(data, callback){
    createRequest({
      url: Entity.URL,
      data,
      method: "GET",
      callback: callback,
    });
  }

  static create(data, callback) {
    createRequest({
      url: Entity.URL,
      data,
      method: "PUT",
      callback: callback,
    });
  }

  static remove(data, callback ) {
    createRequest({
      url: Entity.URL,
      data,
      method: "PUT",
      callback: callback,
    });
  }
}
