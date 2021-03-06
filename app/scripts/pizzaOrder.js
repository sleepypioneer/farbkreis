
/************** Event Listeners ***************/

document.getElementById("abschicken").addEventListener("click", function(){
    bestellen();
});



document.getElementById("zurucksetzen").addEventListener("click", function(){
    clearForms();
});


/************** Functions ***************/

function reveal(){
    document.getElementById("reveal-if-active").classList.add('reveal');
    document.getElementById("individuelle").reset();
}

function hideAgain(){
    document.getElementById("reveal-if-active").classList.remove('reveal');
}

function clearForms(){
    r = confirm("Wollen Sie wirklich Ihre Auswahl zurücksetzen?");
    if (r == true) {
        document.getElementById("groesse").reset();
        document.getElementById("art").reset();
        document.getElementById("individuelle").reset();
        hideAgain();
    }
}

function bestellen(){
    var groesse = document.welchegroesse.groesse.value,
    art = document.welcheart.art.value,
    zuzatens = document.welcheindividuelle.individuelle,
    gr,
    a,
    j = true,
    zu = [],
    z = "",
    i,
    date = Date();
    
    if (groesse == "" || groesse == undefined) {
        alert("Sie müssen mindestens eine Option für den Groesse der Pizza auswählen.");
        j = false;
    } else if (groesse == 1 && j){
        gr = "klein";
    } else if (groesse == 2 && j){
        gr = "mittel";
    } else if (groesse == 3 && j){
        gr = "gross";
    }
    
    if (art == "" || art == undefined) {
       alert("Sie müssen mindestens eine Option für den Art der Pizza auswählen.");
       j = false;
    } else if (art == 1 && j){
        a = "Tonno (Thunfisch, Zwiebel, Knoblauch)";
    } else if (art == 2 && j){
        a = "Quattro(Salami, Schinken, Paprika, Champigons)";
    } else if (art == 3 && j){
        a = "Italia (Schinken, Artischocke, Zweibel)";
    } else if (art == 4 && j){
        a = "individuelle";  
    }
 
    for ( i= 0; i < zuzatens.length; i +=1){
        if (zuzatens[i].checked) {
            zu.push(zuzatens[i].value);
        }
     }       
            
    if (zu.length < 2 && art == 4){
           alert("Sie müssen mindestens zwei Zutaten für Ihre Pizza wählen.");
           j = false;
       } else {
           for (var k = 0; k < zu.length; k +=1) {
               z = z + "" + zu[k] + "; ";
           }
           
   }
    getLocation();
    
    if (j) {
     alert("Folgende Bestellung liefern wir zu Ihnen nach Hause: \nGroesse: " + gr + "\n" + "Pizza: " + a +  "\n" + "Zutaten: " + z +"\n\n" + date +"\n\n" + location);
    }

}
    
var location;

function getLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        location = "Geolocation is not supported by this browser.";
    }
    return location;
}

function showPosition(position) {
    location = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    return location;
}

function showError(error) {
switch(error.code) {
    case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
    case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
    case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
    case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
}
}


