
class Account extends Entity {
  URL = "/account";
  

  static get(id = '', callback){
    const accountGetObj = {
      url: Account.URL,
      data: {id},
      method: "GET",
      callback: callback,
    };

  }
}
