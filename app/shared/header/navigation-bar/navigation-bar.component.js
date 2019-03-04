angular
  .module('header')
  .component('navigationBar', {
    templateUrl: 'app/shared/header/navigation-bar/navigation-bar.template.html',
    controller: 'NavigationBarController',
    controllerAs: 'navbarctrl'
  });