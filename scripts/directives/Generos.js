angular
    .module("misPelisSeriesApp")
    .directive("generos",["$compile", function ($compile) {

        return {
            restrict: "AE",
            scope: {
                coleccion: "=" //No puedo usar la @ ya que esto es para valores normales, no arrays.
            },
            link: function (scope, elemento) {

                var vista = "<div class='caja-generos'>";
               for ( f = 0, F = scope.coleccion.length; f < F; f++ ){
                   vista += "<span class='label label-danger'>" + scope.coleccion[f].name + "</span>";
               }

                vista += "</div>";

                var nuevoElemento = angular.element( vista );
                var nuevoElementoCompilado = $compile( nuevoElemento )( scope ) ;
                elemento.replaceWith( nuevoElementoCompilado );
            }
        }


    }]);


