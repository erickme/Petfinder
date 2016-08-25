(function () {
    'use strict';

    angular.module('petfinder.results')
        //filter to get sliced list from the starting index
        .filter('startFrom', function () {
            return function (input, start) {
                start = +start; //parse to int
                return input.slice(start);
            }
        });
})();