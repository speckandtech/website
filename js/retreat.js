$( document ).ready(function() {

    // $("visitorNumber").text("Altre "+visitors+" persone stanno guardando questo sito");
    function calcVisitors() {
        var visitors = Math.max(Math.round(Math.random()*8),2);
        document.getElementById("visitorNumber").innerHTML = "<p>"+"Altre <strong>"+visitors+"</strong> persone stanno guardando il sito in questo momento"+"</p>";
    }

    calcVisitors();

    setInterval(calcVisitors, 10000);

});