(function () {
    'use strict';

    angular
        .module('petfinder.details')
        .factory('DetailsService', detailsService);

    detailsService.$inject = ['$http', 'apiUrl', 'apiDefaultArgs'];

    function detailsService($http, apiUrl, apiDefaultArgs) {
        var service = {
            getPet: getPet
        };

        return service;

        //returns pet details
        function getPet(id) {
            var args = '&id='+id;

            return $http.jsonp(apiUrl + 'pet.get' + apiDefaultArgs + args + '&callback=JSON_CALLBACK');
        }
    }
})();