const GlobalConfigs = {
  pageTitle: "Azino777 mobile games",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://bananagame.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://bananagame.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://bananagame.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://bananagame.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://bananagame.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://bananagame.top/"
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



