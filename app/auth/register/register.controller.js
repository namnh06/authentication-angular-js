angular
  .module('auth')
  .controller('RegisterController', ['AuthService', function (AuthService) {
    var self = this;
    self.$onInit = function () {}
    self.submitForm = function (valid) {
      console.log(valid, registerForm);
      var data = {
        'name': registerForm.name.value,
        'email': registerForm.email.value,
        'password': registerForm.password.value,
        're_password': registerForm.rePassword.value
      }
      AuthService.register(data).then(function (response) {
        console.log(response);
      })
    }
  }]);