describe('ResultsController', function () {
    beforeEach(module('petfinder.results'));

    var $controller;

    beforeEach(inject(function (_$controller) {
        $controller = _$controller_;
    }));

    describe('$scope.numberOfPages', function () {
        it('sets pagesize to 12 and array of perList with 15, expects pages to equal 2', function () {
            var $scope = {};
            var controller = $controller('ResultsController', { $scope: $scope });
            $scope.pageSize = 12;
            $scope.petList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
            var pages = $scope.numberOfPages();
            expect(pages).toEqual(2);
        });
    });
});