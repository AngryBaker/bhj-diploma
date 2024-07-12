
class Entity {
  URL = "";

  // entityCallback(err, response) {
  //   console.log( 'Ошибка, если есть', err );
  //   console.log( 'Данные, если нет ошибки', response );
  // };

  static list(data, callback){
    const listObj = {
      url: Entity.URL,
      data,
      method: "GET",
      callback: callback,
    };
    createRequest(listObj);
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    const createObj = {
      url: Entity.URL,
      data,
      method: "PUT",
      callback: callback,
    };
    createRequest(createObj);
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback ) {
    const removeObj = {
      url: Entity.URL,
      data,
      method: "PUT",
      callback: callback,
    };
    createRequest(DELETE);
  }
}
