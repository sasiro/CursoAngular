angular.module("misPelisSeriesApp").filter("fechaEstreno", function(){

    return function(datoEntrada){

        return "se estrena el " + datoEntrada;
    }

});