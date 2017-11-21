function reveal(){
        document.getElementById("reveal-if-active").classList.toggle("reveal");
        document.getElementById("individuelle").reset();
}

function hideAgain(){
        document.getElementById("reveal-if-active").classList.remove("reveal");
}

function checkOrder(){
    var j = false,
    i = 0;
    
    //  Test, ob Groesse gewaehlt 
    function groesseGewaehlt() {
        for (i = 0; i < document.welchegroesse.groesse.length; i++) {
            if(document.welchegroesse.groesse[i].checked) {
                j = true;
                break;
            }
        }
        if (!j) {
            alert("Sie müssen mindestens eine Option auswählen.");
            return false;
        }
    }
           
    // Test, ob Pizza gewählt
    for (i = 0; i < document.welcheart.art.length; i += 1) {
        if(document.welcheart.art[i].checked) {
            j = true;
            break;
        }
    }
    if (!j) {
        alert("Sie müssen mindestens eine Option auswählen.");
        return false;
    }

    // ob bei individueller Zusammenstellung mindestens zwei Zutaten gewählt
    if (document.welcheart.art.value == 4){
        var zuzatens = document.welcheindividuelle.individuelle;
        var zu = [];
        for ( i= 0; i < zuzatens.length; i +=1){
            if (zuzatens[i].checked) {
                zu.push(zuzatens[i].value);
            }
        }
        
        if (zu.length < 2 ) {
            alert("Sie müssen mindestens zwei Zutaten für Ihre Pizza wählen.");
            return false;
        } 
    }
    return true;
}


function bestellen(){
    checkOrder();
    if (checkOrder()) {
        var groesse = document.welchegroesse.groesse.value,
        art = document.welcheart.art.value,
        zuzaten = document.welcheindividuelle.individuelle,
        gr,
        a,
        z = "",
        i,
        date = Date();
        
        if (groesse == 1){
            gr = "klein";
        } else if (groesse == 2){
            gr = "mittel";
        } else if (groesse == 3){
            gr = "gross";
        }
        
        if (art == 1){
            a = "Tonno (Thunfisch, Zwiebel, Knoblauch)";
        } else if (art == 2){
            a = "Quattro(Salami, Schinken, Paprika, Champigons)";
        } else if (art == 3){
            a = "Italia (Schinken, Artischocke, Zweibel)";
        } else if (art == 4){
            a = "individuelle";  
        }
        
        for ( i= 0; i < zuzaten.length; i +=1){
            if (zuzaten[i].checked) {
                z = z + " " + zuzaten[i].value + ";";
            }
        }
        
         alert("Folgende Bestellung liefern wir zu Ihnen nach Hause: \nGröße: " + gr + "\n" + "Pizza: " + a +  "\n" + "Zutaten: " + z +"\n\n" + date);
     
        }
    }



function clearForms(){
    
    r = confirm("Wollen Sie wirklich Ihre Auswahl zurücksetzen?");
    if (r == true) {
        document.getElementById("groesse").reset();
        document.getElementById("art").reset();
        document.getElementById("individuelle").reset();
        document.getElementById("reveal-if-active").classList.remove("reveal");  
    }
    
}