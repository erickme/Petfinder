(function () {
    'use strict';

    angular
        .module('petfinder.filter')
        .factory('FilterService', filterService);

    filterService.$inject = ['$http'];

    function filterService($http) {
        var url = 'http://api.petfinder.com/';
        var args = '?format=json&key=1f0c7f48315c13e63b7b7923cacc7959';

        var service = {
            getBreeds: getBreeds,
            getRandom: getRandom
        };

        return service;

        function getBreeds(animalType) {
            return $http.jsonp(url + 'breed.list' + args + '&animal=' + animalType+'&callback=JSON_CALLBACK');
        }

        function getRandom(filter) {
            if (filter.type)
                args += '&animal=' + filter.type;
            if (filter.breed)
                args += '&breed=' + filter.breed;
            if (filter.location)
                args += '&location=' + filter.location;
            return $http.jsonp(url + 'pet.getRandom' + args + '&callback=JSON_CALLBACK');
        }
    }
})();