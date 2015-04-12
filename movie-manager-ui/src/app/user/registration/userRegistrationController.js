(function () {
    angular.module('movie-manager.movies')
        .controller('UserRegistrationController', function () {

            var self = this;

            function init(){
                self.model = {
                    name: undefined,
                    age: undefined
                };
            }

            init();

            this.submit = function () {
                alert('submit');
            };

            this.reset = function () {
                alert('reset');
                init();
            };
        });
}());