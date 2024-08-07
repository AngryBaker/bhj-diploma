
class Account extends Entity {
  URL = "/account";
  

  static get(id = '', callback){
    createRequest({
      url: Account.URL + id,
      method: "GET",
      callback: callback,
    });

  }
}
