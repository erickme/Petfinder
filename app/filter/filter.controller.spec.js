describe('FilterController', function () {
    beforeEach(module('petfinder.filter'));

    var $controller;

    beforeEach(inject(function (_$controller) {
        $controller = _$controller_;
    }));

    describe('$scope.getBreeds', function () {
        it('gets breed list for dog and should return a list with a length more than 0', function () {
            var $scope = {};
            var controller = $controller('FilterController', { $scope: $scope });
            $scope.filter = { type: 'dog' };
            $scope.getBreeds();
            expect($scope.breeds.length).toBeMoreThan(0);
        });
        it('sets filter.type to null and gets breed list and should return a list with a length more than 0', function () {
            var $scope = {};
            var controller = $controller('FilterController', { $scope: $scope });
            $scope.filter = { type: null };
            $scope.getBreeds();
            expect($scope.breeds.length).toEqual(0);
        });
    });
});