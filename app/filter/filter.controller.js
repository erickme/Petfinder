(function () {
    'use strict';

    angular
        .module('petfinder.filter')
        .controller('FilterController', filterController);

    filterController.$inject = ['$scope', '$state', 'FilterService', '$stateParams'];

    function filterController($scope, $state, FilterService, $stateParams) {
        //intial load
        load();

        //method declaration
        $scope.getBreeds = getBreeds;
        $scope.search = search;
        $scope.random = random;

        //initialize scope variable
        $scope.breeds = [];

        function load() {
            //loads filter selections based on state parameters
            $scope.filter = {};
            if ($stateParams.type)
                $scope.filter.type = $stateParams.type;
            if ($stateParams.breed)
                $scope.filter.breed = $stateParams.breed;
            if ($stateParams.location)
                $scope.filter.location = Number($stateParams.location);

            //it will get breeds if a type is selected
            if ($scope.filter.type)
                getBreeds();
        }

        //returns list of breeds
        function getBreeds() {
            FilterService.getBreeds($scope.filter.type)
                .then(function (response) {
                    loadBreeds(response);
                })
                .catch(function (message) {
                    console.log(message);
                });
        }

        //redirects user to results page on search and passes the filter parameters
        function search() {
            $state.go('petfinder.results', { type: $scope.filter.type, breed: $scope.filter.breed, location: $scope.filter.location });
        }

        //gets random pet id and redirects user to pet details page
        function random() {
            FilterService.getRandom($scope.filter)
                .then(function (response) {
                    var id = response.data.petfinder.petIds.id.$t;
                    $state.go('petfinder.details', {id: id});
                })
                .catch(function (message) {
                    console.log(message);
                });
        }

        //reads API response and loads breeds into the scope
        function loadBreeds(response) {
            $scope.breeds = response.data.petfinder.breeds.breed;
        }
    }
})();
