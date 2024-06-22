import './style.css';
import billyToBillyMp3 from './metadata/billy_to_a_billy.mp3';

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

landingPage.style.display = 'block';
mainPage.style.display = 'none';

const closeLandingBtn = document.createElement('button');
closeLandingBtn.innerHTML = 'Enter';
landingPage.appendChild(closeLandingBtn);

// Star Wars Scroll Text
function starWarsText() {
  const scroller = document.createElement('div');
  scroller.id = "sw_scroller";
  
  const content = document.createElement('div');
  content.classList.add("content");
  
  const title = document.createElement('p');
  title.classList.add("title");
  title.innerHTML = "Episode ix";

  const subtitle = document.createElement('p');
  subtitle.classList.add("subtitle");
  subtitle.innerHTML = "$Billy to a Billy";

  const loreText = document.createElement('p');
  loreText.innerHTML = `Billy the dog with a climb on the rise,
  <br>Cute meme star taking everyone by surprise.
  <br>From Solana blockchain, watch the numbers climb Billy to a billy, yeah it's our time.
  <br>Billy's got the charm of the wagon of bark. 
  <br>
  <br>His coin on Solana lighting up the dark From zero to a billy, 
  <br>he's leaving a mark, 
  <br>Saving meme coins, igniting the spark. 
  <br>
  <br>Celebrity hype, taking the fall, Billy's here to rescue, answering the call.
  <br>Meme coin savior, he's standing tall, 
  <br>
  <br>So layin' is fine as breakin' down the wall.
  <br>Billy to a Billy we're ridin' this wave, You don't know me 
  <br>in the space it saves. So let us feature, it's Billy we praise,
  <br>From meme coin chaos to fire days.
  <br>
  <br>
  <br>Every party signal, 
  <br>every wagon cheer. 
  <br>
  <br>Billy coin's a hero, makin' it clear.
  <br>
  <br>So let a meme coin leadin' the sphere Billy to a Billy, 
  <br>the vision is near Bounce and flow.
  <br>
  <br>
  <br>
  <br>
  <br>Coins and smiles, 
  <br>spreadin' worldwide, Billy's takin' us on the joyride.
  <br>
  <br>That's the line of city with paws up and wide, 
  <br>from meme to legend, he's our guide. 
  <br>
  <br>Billy's icon in the crypto game, small beginnings to worldwide fame.
  <br>Memecoin hero, remember his name, Billy to a Billy, forever his claim. 
  <br>
  <br>
  <br>Billy to a Billy, we're riding this wave, cute doggo meme, the space it saves.
  <br>So let us feature, it's Billy we praise, from memecoin chaos to brighter days.
  <br>Billy to a Billy we're riding this wave, cute doggo meme, the space it saves.
  <br>So let us feature. it's Billy we praise, from memecoin chaos to brighter days.
  <br>
  <br>
  <br>
  <br>brighter days
  <br>
  <br>
  <br>
  <br>brighter days
  <br>
  <br>
  <br>
  <br>You're impowerful, Billy's the face, of a meme coin future in a digital space, 
  <br>
  <br>selling the blockchain, keeping the pace, Billy to a billy, leading the race.
  <br>
  <br>Wands and giggles, he's the meme king. Billy coin's the joy, that we all sing. 
  <br>
  <br>Solana's picking the life brains, from meme coin wars to peaceful springs. 
  <br>
  <br>
  <br>Billy to a billy, we're bad this way. 
  <br>Cute dog I'll mean the space and say Solana's, future, it's big big brains From meme coin chaos to brighter days. 
  <br>
  <br>
  <br>In a world of crypto, it's a shining light Billy coin's the hero in the day and night Solana's, champion, big and fly From meme coin darkness to visions bright. 
  <br>Billy to a billy, the journey's begun. Cute mean savior, he's the one. 
  <br>
  <br>
  <br>Solana's, hero, second to none Billy Coin, Rising meme, Already Won.
  <br>
  <br>
  <br>
  <br>Brighter days
  <br>
  <br>Brighter days
  <br>
  <br>
  <br>Billy the dog, Billy the crew, cute meme Savior, He's the One. 
  <br>Solana's Hero, Second to None. Billy Coin, Rising meme, Already Won.
  <br>
  <br>Brighter days
  <br>
  <br>
  <br>Brighter days
  <br>
  <br>
  <br>Brighter days
  <br>
  <br>
  <br>Brighter days
  <br>...`;
  

  content.appendChild(title);
  content.appendChild(subtitle);
  content.appendChild(loreText);
  
  scroller.appendChild(content);
  mainPage.appendChild(scroller);
}
//////////

// Socials
const socials = document.createElement('div');
socials.classList.add("socials");

const telegramBtn = document.createElement('button');
telegramBtn.innerHTML = "Tele";
socials.appendChild(telegramBtn);

const twitterBtn = document.createElement('button');
twitterBtn.innerHTML = "Twitter";
socials.appendChild(twitterBtn);

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

  // Landing & Audio Event Listeners
  const audio = new Audio(billyToBillyMp3);
  audio.loop = true;
  audio.volume = 1.0;

  closeLandingBtn.addEventListener('click', function() {
    audio.play().catch(error => {
      console.log('AutoPlay was prevented. Please interact with the page to play audio.');
    });

    landingPage.style.display = 'none';
    mainPage.style.display = 'block';
  })
  starWarsText();
  //////////

  // Socials & Other Hyperlinks
  telegramBtn.addEventListener('click', () => window.open("https://t.me/billy_cto_sol", "_self"));
  twitterBtn.addEventListener('click', () => window.open("https://x.com/billycoinsolana", "_self"));
  chartBtn.addEventListener('click', () => window.open("https://dexscreener.com/solana/9uww4c36hictgr6pzw9vfhr9vdxktz8na8jvnzqu35pj", "_blank"));
  buyBtn.addEventListener('click', () => window.open("https://raydium.io/swap/?outputMint=3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump&inputMint=sol", "_blank")); 
  //////////

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
  //////////

});