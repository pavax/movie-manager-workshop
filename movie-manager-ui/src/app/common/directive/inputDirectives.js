/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.common')

        .directive('integerValidator', function () {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ngModelController) {
                    var INTEGER_REGEXP = /^[\-|\+]?\d+$/;

                    ngModelController.$validators.integer = function (modelValue, viewValue) {
                        var value = modelValue;
                        return ngModelController.$isEmpty(value) || INTEGER_REGEXP.test(value);
                    };
                }
            };
        })
        .directive('greater', function () {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ngModelController) {
                    ngModelController.$validators.greater = function (modelValue, viewValue) {
                        var value = modelValue;
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
        })


    ;
}());


/*


 .directive('integer', function() {
 var INTEGER_REGEXP = /^\-?\d+$/;
 return {
 require: 'ngModel',
 link: function(scope, elm, attrs, ctrl) {
 ctrl.$parsers.unshift(function(viewValue) {
 if (INTEGER_REGEXP.test(viewValue)) {
 ctrl.$setValidity('integer', true);
 return viewValue;
 } else {
 ctrl.$setValidity('integer', false);
 return undefined;
 }
 });
 }
 };
 })

 .directive('float', function() {
 var FLOAT_REGEXP = /^(\-?\d+((\.|\,)\d+)?)?$/;
 return {
 require: 'ngModel',
 link: function(scope, elm, attrs, ctrl) {
 ctrl.$parsers.unshift(function(viewValue) {
 if (FLOAT_REGEXP.test(viewValue)) {
 ctrl.$setValidity('float', true);
 return parseFloat(viewValue.replace(',', '.'));
 } else {
 ctrl.$setValidity('float', false);
 return undefined;
 }
 });
 }
 };
 })

 .directive('greater', function() {
 return {
 require: 'ngModel',
 link: function(scope, elm, attrs, ctrl) {
 ctrl.$parsers.unshift(function(viewValue) {
 if (viewValue > attrs.greater) {
 ctrl.$setValidity('greater', true);
 return viewValue;
 } else {
 ctrl.$setValidity('greater', false);
 return undefined;
 }
 });
 }
 };
 })

 .directive('less', function() {
 return {
 require: 'ngModel',
 link: function(scope, elm, attrs, ctrl) {
 ctrl.$parsers.unshift(function(viewValue) {
 if (viewValue < attrs.less) {
 ctrl.$setValidity('less', true);
 return viewValue;
 } else {
 ctrl.$setValidity('less', false);
 return undefined;
 }
 });
 }
 };
 })

 .directive('validateDatepickerPattern',function() {
 return {
 restrict: 'A',
 priority: 1000,
 require: 'ngModel',
 link: function(scope, elem, attrs, ngModelCtrl) {
 var regex = new RegExp(attrs.validateDatepickerPattern);
 ngModelCtrl.$parsers.unshift(function(viewValue) {
 if (typeof viewValue === 'string') {
 if (!regex.test(viewValue)) {
 ngModelCtrl.$setValidity('validate-datepicker-pattern', false);
 return undefined;
 }
 }
 ngModelCtrl.$setValidity('validate-datepicker-pattern', true);
 return viewValue;
 });

 }
 };
 });



 */