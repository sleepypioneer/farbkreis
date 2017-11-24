/************** Utility Functions ***************/
String.prototype.uncap = function () {
        return this.charAt(0).toLowerCase() + this.slice(1);
};

String.prototype.deleteSpaces = function() {
        return this.replace(" ", "");
};



/************** Master Branch of Coffee ***************/
function Rubiaceae(){
    this.plantType = 'Flowering Plant';
    this.name = 'Rubiaceae';
    this.description = 'The Rubiaceae are a family of flowering plants, commonly known as the coffee, madder, or bedstraw family.';
    this.origin = 'The Rubiaceae is found in nearly every region of the world, except for extreme environments such as the polar regions and deserts.';
}


/************** CoffeeCanephora Branch ***************/
function CoffeaLiberica() {
    this.name = "Coffea Liberica";
}
CoffeaLiberica.prototype = new Rubiaceae();

var coffeaLiberica = new CoffeaLiberica();
 /*       *
   *     *
    *   *
      */
function Liberica() {
    this.name = "Liberica";
    this.leafRustResistant = false;
}
Liberica.prototype = new CoffeaLiberica();

var liberica = new Liberica();
 /*       *
   *     *
    *   *
      */
function S288() {
    this.name = "S288";
}
S288.prototype = new Liberica();

var s288 = new S288();

 /*       *
   *     *
    *   *
      */
function S795() {
    this.name = "S795";
    this.leafRustResistant = true;
}
S795.prototype = new S288();

var s795 = new S795();


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



/************** C.Anthonyi & C.Eugenoides Branch **************
function CoffeaLiberica() {}
Anthonyi.prototype = new Rubiaceae();

function CoffeaLiberica() {}
CoffeaEugenoides.prototype = new Rubiaceae();

function CoffeaLiberica() {}
ArabicaEthiopia.prototype = new CoffeaEugenoides();
*/
// need to also add in Anthonyi to Arabica Prototype

/************** Arabica Ethiopian/ Sudan Accessions Sub Branch **************
EthiopiaSudanAccessions.prototype = new ArabicaEthiopia();

Gesha.prototype = new EthiopiaSudanAccessions();

BarbukSudan.prototype = new EthiopiaSudanAccessions();

RumeSudan.prototype = new EthiopiaSudanAccessions();

JavaCultivar.prototype = new EthiopiaSudanAccessions();

Kaffa.prototype = new EthiopiaSudanAccessions();

Dilla.prototype = new EthiopiaSudanAccessions();

Ennarea.prototype = new EthiopiaSudanAccessions();

DeigaDega.prototype = new EthiopiaSudanAccessions();

Gimma.prototype = new EthiopiaSudanAccessions();

Dalle.prototype = new EthiopiaSudanAccessions();

TafariKela.prototype = new EthiopiaSudanAccessions();

Alghe.prototype = new EthiopiaSudanAccessions();

Rambung.prototype = new EthiopiaSudanAccessions();

Agaro.prototype = new EthiopiaSudanAccessions();

S4.prototype = new EthiopiaSudanAccessions();

S12.prototype = new EthiopiaSudanAccessions();

USDA.prototype = new EthiopiaSudanAccessions();*/

/************** Arabica Yemen Accessions - Typica Sub Branch **************
YemenAccessionsTypica.prototype = new ArabicaEthiopia();

JavaSumatra.prototype = new YemenAccessionsTypica();

AmerelloDeBoucatu.prototype = new YemenAccessionsTypica();

SanRamon.prototype = new YemenAccessionsTypica();

PlumaHidalgo.prototype = new YemenAccessionsTypica();

Villalobos.prototype = new YemenAccessionsTypica();

Bergandal.prototype = new YemenAccessionsTypica();

KonaGuatemala.prototype = new YemenAccessionsTypica();

BlueMt.prototype = new YemenAccessionsTypica();

Kent.prototype = new YemenAccessionsTypica();

Maragogype.prototype = new YemenAccessionsTypica();

*/

/************** Arabica Yemen Accessions - Bourbon Sub Branch **************
YemenAccessionsBourbon.prototype = new ArabicaEthiopia();

Mokka.prototype = new YemenAccessionsBourbon();

SL28.prototype = new Mokka();

FrenchMission.prototype = new YemenAccessionsBourbon();

SL34.prototype = new FrenchMission();

Laurina.prototype = new YemenAccessionsBourbon();

Pacas.prototype = new YemenAccessionsBourbon();

RedBourbon.prototype = new YemenAccessionsBourbon();

Caturra.prototype = new YemenAccessionsBourbon();

YellowBourbon.prototype = new YemenAccessionsBourbon();

OrangeBourbon.prototype = new YemenAccessionsBourbon();

VillaSarchi.prototype = new YemenAccessionsBourbon();

Mayaguez.prototype = new YemenAccessionsBourbon();

Mibrizi.prototype = new YemenAccessionsBourbon();

Jackson.prototype = new YemenAccessionsBourbon();

PinkBourbon.prototype = new YemenAccessionsBourbon();
*/

/************** CoffeeCanephora Branch **************
CoffeaCanephora.prototype = new Rubiaceae();

Robusta.prototype = new CoffeaCanephora();
*/
