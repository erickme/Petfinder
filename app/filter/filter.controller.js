(function () {
    'use strict';

    angular
        .module('petfinder.filter')
        .controller('FilterController', filterController);

    filterController.$inject = ['$scope', '$state', 'FilterService', '$stateParams'];

    function filterController($scope, $state, FilterService, $stateParams) {
        $scope.getBreeds = getBreeds;
        $scope.search = search;
        $scope.random = random;

        $scope.filter = {};
        if ($stateParams.type)
            $scope.filter.type = $stateParams.type;
        if ($stateParams.breed)
            $scope.filter.breed = $stateParams.breed;
        if ($stateParams.location)
            $scope.filter.location = Number($stateParams.location);

        if ($scope.filter.type)
            getBreeds();

        function getBreeds() {
            FilterService.getBreeds($scope.filter.type)
                .then(function (response) {
                    loadBreeds(response);
                })
                .catch(function (message) {
                    console.log(message);
                });
        }

        function search() {
            $state.go('petfinder.results', { type: $scope.filter.type, breed: $scope.filter.breed, location: $scope.filter.location });
        }

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

        function loadBreeds(response) {
            $scope.breeds = response.data.petfinder.breeds.breed;
        }
    }
})();
