/************** Global Variables ***************/

const DaysOfChristmas = ["A Partridge in a Pear Tree",
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
let verseContainer = document.getElementById('verse'),
imageSprite = document.getElementById('twelveDay'),
day,
value,
backgroundPosition,
verse = [],
date = new Date(),
g = ""+ date.getMonth() + date.getDate() + "";

switch(parseInt(g)) {
    case 1125:
        value = 0;
        day = "first";
        backgroundPosition = "1% 0%";
        createVerse();
        break;
    case 1126:
        value = 1;
        day = "second";
        backgroundPosition = "34% 0%";
        createVerse();
        break;
    case 1127:
        value = 2;
        day = "third";
        backgroundPosition = "66.5% 0%";
        createVerse();
        break;
    case 1128:
        value = 3;
        day = "fourth";
        backgroundPosition = "99% 0%";
        createVerse();
        break;
    case 1129:
        value = 4;
        day = "fifth";
        backgroundPosition = "1% 46.5%";
        createVerse();
        break;
    case 1130:
        value = 5;
        day = "sixth";
        backgroundPosition = "33% 46.5%";
        createVerse();
        break;
    case 1131:
        value = 6;
        day = "seventh";
        backgroundPosition = "66% 46.5%";
        createVerse();
        break;
    case 101:
        value = 7;
        day = "eighth";
        backgroundPosition = "99.5% 46.5%";
        createVerse();
        break;
    case 102:
        value = 8;
        day = "ninth";
        backgroundPosition = "0.8% 46.5%";
        createVerse();
        break;
    case 103:
        value = 9;
        day = "tenth";
        backgroundPosition = "33% 46.5%";
        createVerse();
        break;
    case 104:
        value = 10;
        day = "eleventh";
        backgroundPosition = "65.5% 46.5%";
        createVerse();
        break;
    case 105:
        value = 11;
        day = "twelfth";
        backgroundPosition = "99.5% 96.5%";
        createVerse();
        break;    
    default:
       notChristmasMessage();
}

/************** Functions ***************/
function calculateDaysBetween() {
  let cmas=new Date(date.getFullYear(), 11, 25);
  if (date.getMonth()==11 && date.getDate()>25) {
   cmas.setFullYear(cmas.getFullYear()+1); 
  }
  let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  let diffDays = Math.round(Math.abs((cmas.getTime() - date.getTime())/(oneDay)));
  return diffDays + " days left until Christmas!";
}

function notChristmasMessage(){
 verseContainer.innerHTML = calculateDaysBetween();
}

function createVerse() {
    if (value === 0){
        verse.push(DaysOfChristmas[0]);
    } else {
        for(i=1; i < value; i +=1){
            verse.push("</br>" + DaysOfChristmas[i]);
        }
        verse.push("</br>and a Partridge in a Pear Tree.");   
    }
    verseContainer.innerHTML = `On the ${day} of Christmas my true love sent to me: </br>${verse}`;
}

function changeImageSprite() {
 imageSprite.style.backgroundPosition = backgroundPosition;
}


/************** Init and event Listener ***************/
function init(){
 changeImageSprite();
}

window.addEventListener('load', init);