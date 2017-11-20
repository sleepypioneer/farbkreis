// Canvas 

var myCanvas = document.getElementById("myCanvas");
myCanvas.width =300;
myCanvas.height =300;
				
var ctx = myCanvas.getContext("2d");

var colours = {};
// Sliders and values 


//Gruen 
	var sliderGruen = document.getElementById("gruen");
	var outputGruen = document.getElementById("gruenValue");
	outputGruen.innerHTML = sliderGruen.value; // Display the default slider value
	
	// Update the current slider value (each time you drag the slider handle)
	sliderGruen.oninput = function() {
	outputGruen.innerHTML = this.value;
	};
	
//Gelb 	
	var sliderGelb = document.getElementById("gelb");
	var outputGelb = document.getElementById("gelbValue");
	outputGelb.innerHTML = sliderGelb.value; // Display the default slider value
	
	// Update the current slider value (each time you drag the slider handle)
	sliderGelb.oninput = function() {
	outputGelb.innerHTML = this.value;
	};

//Rot 	
	var sliderRot = document.getElementById("rot");
	var outputRot = document.getElementById("rotValue");
	outputRot.innerHTML = sliderRot.value; // Display the default slider value
	
	// Update the current slider value (each time you drag the slider handle)
	sliderRot.oninput = function() {
	outputRot.innerHTML = this.value;
	};
	
//Magenta 
	var sliderMagenta = document.getElementById("magenta");
	var outputMagenta = document.getElementById("magentaValue");
	outputMagenta.innerHTML = sliderMagenta.value; // Display the default slider value
	
	// Update the current slider value (each time you drag the slider handle)
	sliderMagenta.oninput = function() {
			outputMagenta.innerHTML = this.value;
	};
	
//Blau 	
	var sliderBlau = document.getElementById("blau");
	var outputBlau = document.getElementById("blauValue");
	outputBlau.innerHTML = sliderBlau.value; // Display the default slider value
	
	// Update the current slider value (each time you drag the slider handle)
	sliderBlau.oninput = function() {
	outputBlau.innerHTML = this.value;
	};

/*Cyan 	
	var sliderCyan = document.getElementById("cyan");
	var outputCyan = document.getElementById("cyanValue");
	outputCyan.innerHTML = sliderCyan.value; // Display the default slider value
	
	// Update the current slider value (each time you drag the slider handle)
	sliderCyan.oninput = function() {
	outputCyan.innerHTML = this.value;
	};*/
	
	
function changeColoursData() {	
	colours = {
		"Gruen": parseInt(sliderGruen.value),
		"Gelb": parseInt(sliderGelb.value),
		"Red": parseInt(sliderRot.value),
		"Magenta": parseInt(sliderMagenta.value),
		"Blau": parseInt(sliderBlau.value),
		"Cyan": parseInt(360 - parseInt(sliderGruen.value)- parseInt(sliderGelb.value)- parseInt(sliderRot.value)- parseInt(sliderMagenta.value)- parseInt(sliderBlau.value))			
	};
	var outputCyan = document.getElementById("cyanValue");
	outputCyan.innerHTML = colours.Cyan;
	return colours;
	
}

				
/* https://code.tutsplus.com/tutorials/how-to-draw-a-pie-chart-and-doughnut-chart-using-javascript-and-html5-canvas--cms-27197 */

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX,centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
}

var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
    
    this.draw = function(){
        var total_value = 0;
        var color_index = 0;
        for(var categ in this.options.data) {
            var val = this.options.data[categ];
            total_value += val;
        }
        
        var start_angle = 0;
        for (categ in this.options.data) {
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;
            
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
            
            start_angle += slice_angle;
            color_index++;
        }
    };
    
};
				

function refreshPiechart(){
	var myPiechart = new Piechart(
    {
        canvas:myCanvas,
        data: changeColoursData(),
        colors: ["#009933", "#ffff4d", "#ff1a1a", "#cc0099", "#3333cc", "#00ccff"]
				//colours : gruen, gelb, rot, magenta, blau,cyan
    }
);

myPiechart.draw()	
	
};



				