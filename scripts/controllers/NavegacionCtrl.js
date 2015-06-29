angular.module("misPelisSeriesApp").controller("NavegacionCtrl", ["$scope", "$routeSegment",  function($scope, $routeSegment){

    $scope.rutaEsPelicula = function(){
        return $routeSegment.startsWith("peliculas");


    };

    $scope.rutaEsSerie = function(){
        return $routeSegment.startsWith("serie");

    };

}]);