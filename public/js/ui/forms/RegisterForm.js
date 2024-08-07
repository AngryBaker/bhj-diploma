/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */

function registerCallback(err, response){
  if (err) {
    console.log(err);
  }
  if (response.success) {
    App.setState("user-logged");
    document.getElementById("register-form").reset();
    document.getElementById("modal-register").close();
  }
};
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, registerCallback);
  }
}