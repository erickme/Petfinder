(function () {
    'use strict';

    angular.module('petfinder.results')
        .filter('startFrom', function () {
            return function (input, start) {
                start = +start; //parse to int
                return input.slice(start);
            }
        });
})();