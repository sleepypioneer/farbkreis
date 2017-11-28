var DaysOfChristmas = ["A Partridge in a Pear Tree",
                       "2 Turtle Doves",
                       "3 French Hens",
                       "4 Calling Birds",
                       "5 Golden Rings",
                       "6 Geese a Laying",
                       "7 Swans a Swimming",
                       "8 Maids a Milking",
                       "9 Ladies Dancing",
                       "10 Lords a Leaping",
                       "11 Pipers Piping",
                       "12 Drummers Drumming"
                       ];
var day;
var date = new Date(2017,11,28);
var g = ""+ date.getMonth() + date.getDate() + "";
console.log(g);
switch(parseInt(g)) {
    case 1125:
        value = 0;
        break;
    case 1126:
        value = 1;
        break;
    case 1127:
        value = 2;
        break;
    case 1128:
        value = 3;
        break;
    case 1129:
        value = 4;
        break;
    case 1130:
        value = 5;
        break;
    case 1131:
        value = 6;
        break;
    case 101:
        value = 7;
        break;
    case 102:
        value = 8;
        break;
    case 103:
        value = 9;
        break;
    case 104:
        value = 10;
        break;
    case 105:
        value = 11;
        break;    
    default:
       notChristmasMessage();
}


switch(value) {
    case 0:
        day = "first";
        break;
    case 1:
        day = "second";
        break;
    case 2:
        day = "third";
        break;
    case 3:
        day = "fourth";
        break;
    case 4:
        day = "fifth";
        break;
    case 5:
        day = "sixth";
        break;
    case 6:
        day = "seventh";
        break;
    case 7:
        day = "eighth";
        break;
    case 8:
        day = "ninth";
        break;
    case 9:
        day = "tenth";
        break;
    case 10:
        day = "eleventh";
        break;
    case 11:
        day = "twelfth";
        break;    
    default:
       notChristmasMessage();
}


function notChristmasMessage(){
    console.log("It's not Christmas yet!");
}

//var christmas = 

 let verse = [];

function createVerse(){
    var i,
    DaysOfChristmas,
    value,
    verse;
    if (value ===0){
        verse.push(DaysOfChristmas[0]);
    } else {
        for(i=1; i > value; i +=1){
            console.log(verse);
            verse.push(DaysOfChristmas[i]);
        }
        //verse.push("and a Partridge in a Pear Tree.");   
    }
    console.log(verse);
}

createVerse(day);
console.log( "On the " + day + " of Christmas my true love sent to me: " + verse);