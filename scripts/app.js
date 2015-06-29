angular.module("misPelisSeriesApp",["ngRoute","route-segment","view-segment"]);

angular.module("misPelisSeriesApp").config(["$routeSegmentProvider", "$routeProvider", function($routesegmentprovider, $routeProvider){


    $routesegmentprovider.when("/peliculas", "peliculas");
    $routesegmentprovider.when("/peliculas/proximamente", "peliculas.proximamente");
    $routesegmentprovider.when("/peliculas/cartelera", "peliculas.cartelera");
    $routesegmentprovider.when("/peliculas/detalles", "peliculas.detalles");

    $routeProvider.otherwise({
        redirectTo: "/peliculas/proximamente"
    });


    $routesegmentprovider.when("/series", "series");
    $routesegmentprovider.when("/series/hoy", "series.hoy");
    $routesegmentprovider.when("/series/emision", "series.emision");


    $routesegmentprovider.segment("peliculas", {
        controller:"PeliculasCtrl",
        templateUrl: "views/Peliculas.html"

    });

    $routesegmentprovider.within("peliculas").segment("proximamente",{
        controller:"PeliculasProximamenteCtrl",
        templateUrl:"views/PeliculasProximamente.html",
        resolve:{
            Peliculas: ["ApiService", function(ApiService){
                return ApiService.consultaApi("movie/upcoming");
            }]
        },
        resolveFailed: {
            template: "<h1>Error</h1><h2>Ha habido un error al obtener las películas.</h2>"
        }

    });

    $routesegmentprovider.within("peliculas").segment("cartelera",{
        controller:"CarteleraCtrl",
        templateUrl:"views/Cartelera.html",
        resolve:{
            Peliculas: ["ApiService", function(ApiService){
                return ApiService.consultaApi("movie/now_playing");
            }]
        },
        resolveFailed: {
            template: "<h1>Error</h1><h2>Ha habido un error al obtener las películas.</h2>"
        }
    });

    $routesegmentprovider.segment("series", {
        controller: "SeriesCtrl",
        templateUrl: "views/Series.html"
    });

    $routesegmentprovider.within("series").segment("hoy", {
        controller: "SeriesHoyCtrl",
        templateUrl: "views/SeriesHoy.html"
    });

    $routesegmentprovider.within("series").segment("emision", {
        controller: "SeriesEmisionCtrl",
        templateUrl: "views/SeriesEmision.html"
    });

    $routesegmentprovider.within("peliculas").segment("detalles", {
        controller:"PeliculasDetallesCtrl",
        templateUrl:"views/PeliculasDetalles.html",
        resolve:{
            Pelicula: ["ApiService", "$routeParams", function (ApiService, $routeParams) {
                return ApiService.consultaApi("movie/" + $routeParams.idPelicula);
            }]
        }
    })

}]);