angular
  .module('authenticate')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<login></login>'
      })
      .when('/login', {
        template: '<login></login>'
      })
      .when('/register', {
        template: '<register></register>'
      })
      .otherwise(
        '/'
      );
  }]);