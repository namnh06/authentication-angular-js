angular
  .module('bookExchange')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<login></login>'
      })
      .when('/login', {
        template: '<login></login>'
      })
      .otherwise(
        '/'
      );
  }]);