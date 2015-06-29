angular.module("misPelisSeriesApp").directive("mediaItem",["ApiService", function (ApiService) {

    return {

        restrict: "AE",
        templateUrl: "views/MediaItem.html",
        scope: {
            datos: "=",
            alSeleccionar: "&"
        },
        link: function (scope) {

            scope.rutaImagen = function (ruta) {

                return ApiService.obtenerRutaImagen( 45 ,ruta )
            };

            scope.clickEnMedia = function (id) {

                 scope.alSeleccionar({ mediaId : id });
            }

        }

    };

}]);