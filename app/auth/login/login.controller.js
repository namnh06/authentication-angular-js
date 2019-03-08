angular
  .module('auth')
  .controller('LoginController', ['AuthService', function (AuthService) {
    var self = this;
    self.submitForm = function (isValid) {
      const email = loginForm.email.value;
      const password = loginForm.email.value;

      console.log(email, password);
    }
  }]);