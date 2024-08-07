/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    Account.create(data, (err, response) => {
      if (err) {
        console.log(err);
      } 
      if (response.succes) {
        document.getElementById("new-account-form").reset();
        document.getElementById("modal-new-account").close();
        App.update();
      }
    })

  }
}