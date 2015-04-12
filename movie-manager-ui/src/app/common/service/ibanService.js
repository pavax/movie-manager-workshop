/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.common')
        .factory('IbanService', IbanService);

    // @ngAnnotate
    function IbanService() {

        return {
            validate: validate
        };

        // Algorithm taken from http://www.swissiban.com/
        function validate(iban) {
            if (!iban || iban.length !== 21) {
                return false;
            }
            var country = iban.slice(0, 2),
                control = iban.slice(2, 4),
                accountAndBankNumber = iban.slice(4, 21),
                ibanWithCountryAndControlAtTheEnd = accountAndBankNumber + country + control,
                ibanWithConvertedCharacters = "";

            ibanWithCountryAndControlAtTheEnd.split("").forEach(function(ibanChar, index) {
                var result = ibanChar;
                if (!isNumber(ibanChar)) {
                    result = characterToNumber(ibanChar) ;
                }
                ibanWithConvertedCharacters += result;
            });
            return bigIntModulo(ibanWithConvertedCharacters, 97) === 1;
        }

        function characterToNumber(character) {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
                result;
            character = character.toUpperCase();
            chars.forEach(function(c, index) {
                if (c === character) {
                    result = index + 10;
                    return;
                }
            });
            return result;
        }

        function isNumber(character) {
            return (/^\d$/).test(character);
        }

        function bigIntModulo(divident, divisor) {
            var partLength = 10;
            while (divident.length > partLength) {
                var part = divident.substring(0, partLength);
                divident = (part % divisor) +  divident.substring(partLength);
            }
            return divident % divisor;
        }

    }

}());