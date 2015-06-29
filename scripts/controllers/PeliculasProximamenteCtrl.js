
angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl",
    ["$scope", "$filter","Peliculas","$location", function($scope , $filter, Peliculas, $location){

        $scope.peliculas = $filter("orderBy")(Peliculas.data.results, "release_date");



        $scope.verDetalle = function ( id ) {

            $location.path("/peliculas/detalles").search({

                idPelicula: id

            });

        };

 }]);



/*
 ApiService
 .consultaApi("movie/upcoming")
 .then( //OK
 function( resultado){
 $scope.peliculas = $filter("orderBy")(resultado.data.results, "release_date");

 }, //ERROR
 function(){
 alert("Algo fue mal");
 }
 );

 */


/*
angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl", ["$scope", "$http","$q","$timeout", function($scope, $http, $q, $timeout){

    function usoDiferido(){
        var diferido = $q.defer();
        $timeout(function(){
            diferido.reject();
        }, 2000);

        return diferido.promise;
    }
    /*
    $http
        .get("")
        .then( //OK
            function(){

            }, //ERROR
            function(){

            }
    )

    usoDiferido().then(
        function(){
            alert("Todo salió bien");
        },
        function(){
            alert("Algo salió mal");
        }
    );

}]); */