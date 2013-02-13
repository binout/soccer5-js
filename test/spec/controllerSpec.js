/* jasmine specs for controllers go here */
describe('Controllers', function() {

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    describe("MatchCtrl", function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.whenJSONP(url).respond([{"id": 24,"date": 1363827600000}]);

            scope = $rootScope.$new();
            ctrl = $controller(MatchCtrl, {$scope: scope});
        }));

        it('should init matches', function () {
            expect(scope.matches).toEqual([]);
        });

        it('should fetch rest backend', function () {
            $httpBackend.flush();
            expect(scope.matches).toEqualData([{"id": 24,"date": 1363827600000}]);
        });
    });
});