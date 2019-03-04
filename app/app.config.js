angular
  .module('bookExchange')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<home></home>'
      })
      .when('/home', {
        template: '<home></home>'
      })
      .when('/login', {
        template: '<login></login>'
      })
      .otherwise(
        '/home'
      );
  }]);