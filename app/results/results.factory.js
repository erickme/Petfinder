(function () {
    'use strict';

    angular
        .module('petfinder.results')
        .factory('ResultsService', resultsService);

    resultsService.$inject = ['$http'];

    function resultsService($http) {
        var url = 'http://api.petfinder.com/';
        var defaultArgs = '?format=json&key=1f0c7f48315c13e63b7b7923cacc7959';

        var service = {
            getPets: getPets
        };

        return service;

        function getPets(filter) {
            var args = '';
            if (filter.type)
                args += '&animal=' + filter.type;
            if (filter.breed)
                args += '&breed=' + filter.breed;
            args += '&location=' + filter.location;
            return $http.jsonp(url + 'pet.find' + defaultArgs + args + '&callback=JSON_CALLBACK');
        }
    }
})();