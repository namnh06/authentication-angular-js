angular
  .module('authenticate')
  .service('AuthService', ['$http', function ($http) {
    var self = this;
    var url = 'http://localhost/authentication-laravel/public/api';

    self.register = function (data) {
      return $http.post(url + '/register', data);
    }
    self.login = function (data) {
      return $http.post(url + '/login', data);
    }
  }])