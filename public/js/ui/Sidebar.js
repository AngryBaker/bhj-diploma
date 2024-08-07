
/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const body = document.getElementsByClassName("sidebar-mini")[0];
    function bodyHandler(e) {
      if (e.target.classList.contains("sidebar-toggle")){
        this.classList.toggle("sidebar-open sidebar-collapse");
      }
    };
    body.addEventListener("click", bodyHandler);
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    function sideBarHandler(e) {
      if (e.target.closest(".menu-item_register")){
        App.getModal("register").open();
      }
      if (e.target.closest(".menu-item_login")){
        App.getModal("login").open();
      }
      if (e.target.closest(".menu-item_logout")){
        User.logout((err, response) => {
          if(err){
            console.log(err);
          }
          if (response.success) {
            App.setState("init");
          }
        })
      }
    };
    const sidebarMenu = document.getElementsByClassName("sidebar-menu")[0];
    sidebarMenu.addEventListener("click", sideBarHandler);

  }
}