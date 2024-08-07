/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */

function loginCallback(err, response){
  if (err) {
    alert(err);
  }
  if (response.success) {
    document.getElementById("login-form").reset();
    App.setState("user-logged");
    document.getElementById("modal-login").close();
  }
};

class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.login(data, loginCallback);
  }
}