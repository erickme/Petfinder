(function () {
    'use strict';

    angular
        .module('petfinder.filter')
        .factory('FilterService', filterService);

    filterService.$inject = ['$http', 'apiUrl', 'apiDefaultArgs'];

    function filterService($http, apiUrl, apiDefaultArgs) {
        var service = {
            getBreeds: getBreeds,
            getRandom: getRandom
        };

        return service;

        //returns Breed list based on selected animal type
        function getBreeds(animalType) {
            return $http.jsonp(apiUrl + 'breed.list' + apiDefaultArgs + '&animal=' + animalType + '&callback=JSON_CALLBACK');
        }

        //returns a pet id randomly selected by the API
        function getRandom(filter) {
            var args = '';
            if (filter.type)
                args += '&animal=' + filter.type;
            if (filter.breed)
                args += '&breed=' + filter.breed;
            if (filter.location)
                args += '&location=' + filter.location;
            return $http.jsonp(apiUrl + 'pet.getRandom' + apiDefaultArgs + args + '&callback=JSON_CALLBACK');
        }
    }
})();