var url = "http://soccer-binout.rhcloud.com/soccer5/rest/match/next?callback=JSON_CALLBACK";

function MatchCtrl($scope, $http) {
    $scope.matches = [];
    $http.jsonp(url).
        success(function(data) {
            $scope.matches = data;
        }).
        error(function(data) {
            $scope.matches = data || "Request failed";
        });

}