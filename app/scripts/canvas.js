/***************** get Canvas element **********************/
var canvas = document.querySelector("canvas");

/***************** Set Canvas element height and width **********************/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/***************** returns a drawing context on the canvas **********************/
var c = canvas.getContext('2d');



/***************** Event Listeners **********************/

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y =event.y;
    });

window.addEventListener('resize', function(){ //to enable resizing of canvas on resizing of window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); // this function ensure spawning happens in new window size
    });

window.addEventListener("click", function(){
    init();
});

/***************** Global variables **********************/
var colourArray = [
    'red',
    'blue',
    'green',
    'grey',
    'pink',
    'purple',
    'magenta'
];
//coolors.co good for finding colour pallets

var maxRadius = 40,
gravity =  1,
friction = 0.88,
circleArray = [],
mouse = {
    x: undefined,
    y: undefined
};



/***************** Ultility Functions **********************/
/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 -y1;
    
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}


/***************** Objects **********************/
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
        
        if (this.y + this.radius > innerHeight) { // incorporates radius so that it bounces when edge of circle touches the side of the screen
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }
        
        if (this.y - this.radius < 0) { // incorporates radius so that it bounces when edge of circle touches the side of the screen
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y +=this.dy;
        
        
        // Collision checker
        for (j = 0; j < circleArray.length; j +=1 ) {
            var dist = getDistance(this.x, this.y, circleArray[j].x, circleArray[j].y);
            if( dist < this.radius - circleArray[j].radius){
                circleArray.splice(this,1);
            }
        }
        
        // Interactivity
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


/***************** Functions **********************/
 //Implementation
function init(){
    
    circleArray = []; // stops circleArray being created over and over
    for (var i = 0; i < 50; i +=1) {
        var radius = Math.random() * 8 + 5; //range 5-8
        var x = Math.random() * (window.innerWidth - radius * 2) + radius; // so the circles are not generated on the side of the canvas and getting stuck
        var y = Math.random() * (window.innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 4 ; // to produce a value that is between -0.5 and 0.5
        var dy = (Math.random() - 0.5) * 4 ;
        
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

}    


 //Animation
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); // clear canvas sop circle is not drawn over itself.
    
    //circle.update();
 
    for (var i = 0; i < circleArray.length; i += 1) {
        circleArray[i].update();
    }
}



/***************** Call Functions **********************/
init();
animate();