(function () {
    'use strict';

    angular.module('petfinder', [
        //angular modules
        'ngMaterial',
        'ui.router',
        //custom modules
        'petfinder.filter',
        'petfinder.results',
        'petfinder.details'
    ]);
})();