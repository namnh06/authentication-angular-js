angular
  .module('auth')
  .controller('RegisterController', ['AuthService', function (AuthService) {
    var self = this;
    self.submitForm = function (valid) {
      var data = {
        'name': registerForm.name.value,
        'email': registerForm.email.value,
        'password': registerForm.password.value
      }
      AuthService.register(data).then(function (response) {
        console.log(response);
      })
    }
  }]);