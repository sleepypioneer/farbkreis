var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
function hello(){
    var name = "";
    janein = confirm("Möchten Sie mir Ihren Namen verraten?");
    if (janein == true)
        name = prompt("Wie ist Ihr Name?", "");

    if ((name == "") || (name == null)) {
        alert("Name unbekannt.");
        name = "";
    }
    var x = document.getElementById("message");
    x.innerHTML = "Hallo " + name + ",<br>willkommen auf meiner Webseite. <br>" + hours + ":" + minutes + ":" + seconds + " Uhr";
}