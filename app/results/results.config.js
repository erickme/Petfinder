(function () {
    'use strict';

    angular.module('petfinder.results')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('petfinder.results', {
                    url: '/results?loc=:location&t=:type&b=:breed',
                    views: {
                        'filter': { templateUrl: 'app/filter/filter.html', controller: 'FilterController'},
                        'content': { templateUrl: 'app/results/results.html', controller: 'ResultsController' }
                    }
                });
        }]);
})();