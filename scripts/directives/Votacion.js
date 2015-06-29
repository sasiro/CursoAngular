
angular
    .module("misPelisSeriesApp")
    .directive("votacion",["$compile", function ($compile) {

        return {
            restrict: "AE",
            replace: true,
            scope: {
                media: "@"
            },
            link: function (scope, element) {

                var mediaComoNumero = parseFloat(scope.media);
                var mediaRedondeada = Math.round(mediaComoNumero);

                var vista = "<div>";

                for(var f = 0; f < mediaRedondeada; f++){

                    vista += "<span class='glyphicon glyphicon-star' ></span>" //comillas simples o escapamamos (\"\") comillas dobles
                }

                for ( var f = 0, F = 10 - mediaRedondeada; f < F; f++ ){
                    vista += "<span class='glyphicon glyphicon-star-empty'></span>"
                }
                vista += "</div>";

                var nuevoElemento = angular.element( vista );
                var nuevoElementoCompilado = $compile( nuevoElemento ) ( scope);
                element.replaceWith(nuevoElementoCompilado);

            }


        }
    }]);