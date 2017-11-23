var view = {
    displayMessage: function(msg) {
       var messageArea = document.getElementById("messageArea");
       messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

var model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [{locations: [0, 0, 0], hits: ["", "", ""]},
            {locations: [0, 0, 0], hits: ["", "", ""]},
            {locations: [0, 0, 0], hits: ["", "", ""]}],
    fire: function(guess) {
        for(var i = 0; i < this.numShips; i+=1) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if(index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("TREFFER!");

            if(this.isSunk(ship)) {
                view.displayMessage("Schiff versenkt!");
                this.shipsSunk += 1;
            }
            return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("Leider daneben.");
        return false;
    },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i +=1) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },
    generateShipLocations: function() { //method to generate ships location and size
        var locations;
        for (var i = 0; i < this.numShips; i +=1) {
            console.log(i);
            
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            
            this.ships[i].locations = locations;
            console.log(this.ships[i].locations);
        }
    },
    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var row;
        var col;
        if (direction === 1) { 
            // start point for horizontal ship
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else  {
            row = Math.floor(Math.random() * ( this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize) ;
        }
        
        var newShipLocation = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                 // positions array point for horizontal ship
                 newShipLocation.push(row + "" + (col + i));
            } else {
                // positions array point for verticle ship
               newShipLocation.push((row + i) + "" + col);
            }
        }
        return newShipLocation;
    },
    collision: function(locations) {
        for (var i = 0; i < this.numShips; i +=1) {
            var ship = model.ships[i];
            for (var j = 0; j < locations.length; j+=1) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};



var controller = {
    guesses: 0,
    
    processGuess: function(guess) {
        var location = parseGuess(guess);
        console.log(location);
        if (location) {
            this.guesses +=1;
            var hit = model.fire(location);
            console.log(hit);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("Sie haben mit " + this.guesses + " Versuchen alle Schiffe versenkt.");
            }
        }
    }
};

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("Bitte geben Sie einen Buchstaben (A-G) und eine Zahl auf dem Spielfeld ein.");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        
        if (isNaN(row) || isNaN(column)) {
            alert("Hoppla, das ist nicht auf dem Spielfeld.");
        } else if (row < 0 || row >= model.boardsize || column < 0 || column >= model.boardSize) {
            alert("Hoppla, das ist nicht auf dem Spielfeld.");
        } else {
            return row + column;
        }
    }
    return null;
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.toUpperCase();
    
    controller.processGuess(guess);
    
    guessInput.value = ""; // reset the input to an empty string
}

function handleKeyPress(e) { // so that the result is returned also by the pressing of the enter key not only by a click on the fire button 
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) { // 13 == return key
        fireButton.click();
        return false; // witout this 
    }
}


function init() {
    view.displayMessage("GAME ON!");
    
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    
    model.generateShipLocations();
}


window.onload = init;


//method to create board size

//fix when you rechoose a position that it is not taken again