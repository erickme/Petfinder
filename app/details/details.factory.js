(function () {
    'use strict';

    angular
        .module('petfinder.details')
        .factory('DetailsService', detailsService);

    detailsService.$inject = ['$http'];

    function detailsService($http) {
        var url = 'http://api.petfinder.com/';
        var defaultArgs = '?format=json&key=1f0c7f48315c13e63b7b7923cacc7959';

        var service = {
            getPet: getPet
        };

        return service;

        function getPet(id) {
            var args = '&id='+id;

            return $http.jsonp(url + 'pet.get' + defaultArgs + args + '&callback=JSON_CALLBACK');
        }
    }
})();