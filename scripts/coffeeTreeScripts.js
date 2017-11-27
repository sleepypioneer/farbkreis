/************** Utility Functions ***************/
String.prototype.uncap = function () {
        return this.charAt(0).toLowerCase() + this.slice(1);
};

String.prototype.deleteSpaces = function() {
        return this.replace(" ", "");
};


function getGenerations(genus) {
    this.genus = genus.uncap();
    console.log(genus);
    var generation = 0,
    i=0,
    generations = [];
    while(typeof (window[genus]) != "undefined") {
        generations.push(Object.getPrototypeOf(window[genus]).name);
        genus = Object.getPrototypeOf(window[genus]).name.uncap().deleteSpaces();
        generation += 1;
        i +=1;
    }
    console.log(generations);
    console.log(generation);
}

getGenerations("s795");