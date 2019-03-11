angular
  .module('auth')
  .controller('LoginController', ['AuthService', function (AuthService) {
    var self = this;
    self.submitForm = function (isValid) {
      var data = {
        'email': loginForm.email.value,
        'password': loginForm.email.value
      }
      AuthService.login(data)
        .then(function (response) {
          console.log(response);
        });


    }
  }]);