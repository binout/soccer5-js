function MatchCtrl($scope, $http) {
    var url = "http://soccer-binout.rhcloud.com/soccer5/rest/match/next?callback=JSON_CALLBACK";

    $http.jsonp(url).
        success(function(data) {
            $scope.matches = data;
        }).
        error(function(data) {
            $scope.matches = data || "Request failed";
        });

}