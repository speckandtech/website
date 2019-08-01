$( document ).ready(function() {

    var timeout = 2000;

    // $("visitorNumber").text("Altre "+visitors+" persone stanno guardando questo sito");
    function calcVisitors() {
        var visitors = Math.max(Math.round(Math.random()*8),2);
        var text = "<p>"+"<strong>"+visitors+"</strong> people are watching this page 👀"+"</p>";
        if (Math.random() > 0.6) {
            text = "<p>🐷</p>";
            timeout = 5000;
        } else {
            timeout = 2000;
        }
        document.getElementById("visitorNumber").innerHTML = text;
    }

    calcVisitors();

    setInterval(calcVisitors, timeout);

});