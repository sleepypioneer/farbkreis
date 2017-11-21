//get Canvas element
var canvas = document.querySelector("canvas");

//Set Canvas element height and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//returns a drawing context on the canvas
var c = canvas.getContext('2d');


//Rectangle
c.fillStyle = "pink";
c.fillRect(100, 100, 100, 100);

console.log(canvas);

//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300, 100);
c.lineTo(50, 100);
c.lineTo(50, 300);
c.strokeStyle = "blue";
c.stroke();

//Arc /circle
/*c.arc(x: Int, y: Int, r; Int, startAngle: Float, endAngle: Float, drawCounterClockwise; bool (false));
Math.PI * 2 full circle
c.beginPath();
c.arc(300,300, 30, 0, Math.PI * 2, false);
c.stroke();*/

/*for(var i= 0; i < 100; i+=1) {
    var x = Math.random() * window.innerWidth;
    //return random value within screen space
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0,Math.PI * 2, false);
    c.strokeStyle= '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    c.stroke();
}*/

/*var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = (Math.random() - 0.5) * 8 ; // to produce a value that is between -0.5 and 0.5
var dy = (Math.random() - 0.5) * 8 ;
var radius = 30;*/

var mouse = {
    x: undefined,
    y: undefined
};

var maxRadius = 40;

//cooler.com good for finding colour pallets
var colourArray = [
    'red',
    'blue',
    'green',
    'grey',
    'pink',
    'purple',
    'magenta'
];

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y =event.y;
    });

window.addEventListener('resize', function(){ //to enable resizing of canvas on resizing of window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); // this function ensure spawning happens in new window size
    });

function Circle(x, y, dx, dy, radius) { // to create multiply independant cicrles
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.colour = colourArray[Math.floor(Math.random() * colourArray.length)] ; //so colour is only selected once and not flickering
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.colour;
        c.fill();
    };
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { // incorporates radius so that it bounces when edge of circle touches the side of the screen
        this.dx = -this.dx;
        }
        
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) { // incorporates radius so that it bounces when edge of circle touches the side of the screen
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y +=this.dy;
        
        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50
            ) {
            if (this.radius < maxRadius) {
                this.radius +=1;
            }
        } else if(this.radius > this.minRadius) {
            this.radius -= 1;
        }
        
        this.draw();
    };
}

var circleArray = [];

function init(){
    
    circleArray = []; // stops circleArray being created over and over
    for (var i = 0; i < 100; i +=1) {
        var radius = Math.random() * 3 + 1; //range 1-3
        var x = Math.random() * (window.innerWidth - radius * 2) + radius; // so the circles are not generated on the side of the canvas and getting stuck
        var y = Math.random() * (window.innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 4 ; // to produce a value that is between -0.5 and 0.5
        var dy = (Math.random() - 0.5) * 4 ;
        
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}    


var circle = new Circle(200, 200, 3, 3, 30);  

init();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); // clear canvas sop circle is not drawn over itself.
    
    circle.update();
    
    for (var i = 0; i < circleArray.length; i += 1) {
        circleArray[i].update();
    }

}

animate();