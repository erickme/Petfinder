(function () {
    'use strict';

    angular
        .module('petfinder.results')
        .factory('ResultsService', resultsService);

    resultsService.$inject = ['$http', 'apiUrl', 'apiDefaultArgs'];

    function resultsService($http, apiUrl, apiDefaultArgs) {
        var service = {
            getPets: getPets
        };

        return service;

        //Retrieves Pet List based on filters
        function getPets(filter) {
            var args = '';
            if (filter.type)
                args += '&animal=' + filter.type;
            if (filter.breed)
                args += '&breed=' + filter.breed;
            args += '&location=' + filter.location;
            return $http.jsonp(apiUrl + 'pet.find' + apiDefaultArgs + args + '&callback=JSON_CALLBACK');
        }
    }
})();