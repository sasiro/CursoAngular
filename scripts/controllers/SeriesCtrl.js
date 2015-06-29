
angular.module("misPelisSeriesApp").controller("SeriesCtrl",["$scope", "$routeSegment", function($scope, $routeSegment){

    $scope.rutaEsHoy = function() {
        return $routeSegment.startsWith("series.hoy");
    };

    $scope.rutaEsEmision = function() {
        return $routeSegment.startsWith("series.emision");
    };

}]);