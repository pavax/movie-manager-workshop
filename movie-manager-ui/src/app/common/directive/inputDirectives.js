/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.common')
        .directive('integer', function () {
            var INTEGER_REGEXP = /^[\-|\+]?\d+$/;
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ngModelController) {
                    //For DOM -> model validation
                    ngModelController.$parsers.unshift(function (viewValue) {
                        if (ngModelController.$isEmpty(viewValue)) {
                            ngModelController.$setValidity('integer', true);
                            return viewValue;
                        }
                        // remove ' and , from input (eg 1'000 -> 1000)
                        var numberToValidate = viewValue.toString().replace(/[',]/g, '');
                        if (INTEGER_REGEXP.test(numberToValidate)) {
                            ngModelController.$setValidity('integer', true);
                            return parseInt(numberToValidate.replace('+', ''), 10);
                        } else {
                            ngModelController.$setValidity('integer', false);
                            return undefined;
                        }
                    });
                }
            };
        })
        .directive('greater', function () {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ngModelController) {
                    ngModelController.$validators.greater = function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        return ngModelController.$isEmpty(value) || parseFloat(value) > attrs.greater;
                    };
                }
            };
        })
        .directive('numberFormat', function ($filter) {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ngModelController) {
                    var decimals = attrs.numberFormat || 0;
                    elm.bind('blur', function () {
                        if (ngModelController.$viewValue && ngModelController.$valid) {
                            ngModelController.$viewValue = $filter('number')(ngModelController.$modelValue, decimals);
                            ngModelController.$render();
                        }
                    });

                    elm.bind('focus', function () {
                        if (ngModelController.$viewValue && ngModelController.$valid) {
                            ngModelController.$viewValue = ngModelController.$viewValue.toString().replace(/[',]/g, '');
                            ngModelController.$render();
                        }
                    });

                    ngModelController.$formatters.push(function (data) {
                        //Model -> View
                        return $filter('number')(data, decimals);
                    });
                }
            };
        });
}());