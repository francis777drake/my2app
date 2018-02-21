const GlobalConfigs = {
  pageTitle: "Azino777 mobile games",
  navigationType: ProjectConsts.allNavigationTypes.listMenu,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://www.boomerangtv.ru/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://www.boomerangtv.ru/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://www.boomerangtv.ru/videos", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://www.boomerangtv.ru/games"},
    {
      icon: 'info', text: 'О нас',
      url: "http://www.boomerangtv.ru/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://www.boomerangtv.ru/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "blue lighten-2", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



