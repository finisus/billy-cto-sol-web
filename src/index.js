import './style.css';


/*

base: blinking stars

landingPage {

  Enter button middle

  Get vector of Planets/moons in their weird circular shapes with imperfect edges etc,
    post billy memes pictures on each of the planets
  
  Make the billy planets free roam around the website

} 

mainPage {
  
  Star Wars like scrolling text bottom to top and fade away
    Put billy to a billy song lyrics in the scrolling text 

  Make billy to a billy song mp3 play in bg

  have contract and other buttons styled in star wars theme

}

*/

const spaceCanvas = document.getElementById('space');
var canvas;
var context;
var screenH;
var screenW;
var stars = [];
var fps = 50;
var numStars = 2000;

$('document').ready(function() {
  
  // Calculate the screen size
	screenH = $(window).height();
	screenW = $(window).width();
	
	// Get the canvas
	canvas = $('#space');
	
	// Fill out the canvas
	canvas.attr('height', screenH);
	canvas.attr('width', screenW);
	context = canvas[0].getContext('2d');
	
	// Create all the stars
	for(var i = 0; i < numStars; i++) {
		var x = Math.round(Math.random() * screenW);
		var y = Math.round(Math.random() * screenH);
		var length = 1 + Math.random() * 2;
		var opacity = Math.random();
		
		// Create a new star and draw
		var star = new Star(x, y, length, opacity);
		
		// Add the the stars array
		stars.push(star);
	}
	
	setInterval(animate, 1000 / fps);
});

/**
 * Animate the canvas
 */
function animate() {
	context.clearRect(0, 0, screenW, screenH);
	$.each(stars, function() {
		this.draw(context);
	})
}

/**
 * Star
 * 
 * @param int x
 * @param int y
 * @param int length
 * @param opacity
 */
function Star(x, y, length, opacity) {
	this.x = parseInt(x);
	this.y = parseInt(y);
	this.length = parseInt(length);
	this.opacity = opacity;
	this.factor = 1;
	this.increment = Math.random() * .03;
}

/**
 * Draw a star
 * 
 * This function draws a start.
 * You need to give the contaxt as a parameter 
 * 
 * @param context
 */
Star.prototype.draw = function() {
	context.rotate((Math.PI * 1 / 10));
	
	// Save the context
	context.save();
	
	// move into the middle of the canvas, just to make room
	context.translate(this.x, this.y);
	
	// Change the opacity
	if(this.opacity > 1) {
		this.factor = -1;
	}
	else if(this.opacity <= 0) {
		this.factor = 1;
		
		this.x = Math.round(Math.random() * screenW);
		this.y = Math.round(Math.random() * screenH);
	}
		
	this.opacity += this.increment * this.factor;
	
	context.beginPath()
	for (var i = 5; i--;) {
		context.lineTo(0, this.length);
		context.translate(0, this.length);
		context.rotate((Math.PI * 2 / 10));
		context.lineTo(0, - this.length);
		context.translate(0, - this.length);
		context.rotate(-(Math.PI * 6 / 10));
	}
	context.lineTo(0, this.length);
	context.closePath();
	context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
	context.shadowBlur = 5;
	context.shadowColor = '#ffff33';
	context.fill();
	
	context.restore();
}

const landingPage = document.getElementById('landingPage');
const mainPage = document.getElementById('mainPage');

landingPage.style.display = 'none';
mainPage.style.display = 'block';

const closeLandingBtn = document.createElement('button');
closeLandingBtn.innerHTML = 'Enter';
landingPage.appendChild(closeLandingBtn);

// Socials
const socials = document.createElement('div');
socials.classList.add("socials");

const twitterBtn = document.createElement('button');
twitterBtn.innerHTML = "Twitter";
socials.appendChild(twitterBtn);

const telegramBtn = document.createElement('button');
telegramBtn.innerHTML = "Telegram";
socials.appendChild(telegramBtn);

const chartBtn = document.createElement('button');
chartBtn.innerHTML = "Chart";
socials.appendChild(chartBtn);

const buyBtn = document.createElement('button');
buyBtn.innerHTML = "Buy";
socials.appendChild(buyBtn);

mainPage.appendChild(socials);
//////////

// Footer
const footer = document.createElement('div'); 
footer.classList.add("footer");

const contract = document.createElement('span');
contract.innerHTML = "3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump";
footer.appendChild(contract);

const copyCa = document.createElement('button');
copyCa.innerHTML = "Copy CA";
footer.appendChild(copyCa);

mainPage.appendChild(footer);
//////////

document.addEventListener('DOMContentLoaded', function() {

  closeLandingBtn.addEventListener('click', function() {
    landingPage.style.display = 'none';
    mainPage.style.display = 'block';

  })

  // Copy Contract Logic
  const textToCopy = contract.innerHTML;
  copyCa.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });

});