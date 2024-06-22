import './style.css';
import billyToBillyMp3 from './metadata/billy_to_a_billy.mp3';

import moonImg from './metadata/memes/yellow-full-moon.png';
import meme1 from './metadata/memes/1.jpg';
import meme2 from './metadata/memes/2.jpeg';
import meme3 from './metadata/memes/3.jpeg';
import meme4 from './metadata/memes/4.webp';
import meme5 from './metadata/memes/5.webp';
import meme6 from './metadata/memes/6.webp';
import meme7 from './metadata/memes/7.webp';
import meme8 from './metadata/memes/8.webp';
import meme9 from './metadata/memes/9.webp';
import meme10 from './metadata/memes/10.webp';
import meme11 from './metadata/memes/11.webp';
import meme12 from './metadata/memes/12.webp';
import meme13 from './metadata/memes/13.webp';
import meme14 from './metadata/memes/14.webp';
import meme15 from './metadata/memes/blank.png';
import meme16 from './metadata/memes/blank.png';
import meme17 from './metadata/memes/blank.png';
import meme18 from './metadata/memes/blank.png';
import meme19 from './metadata/memes/blank.png';
import meme20 from './metadata/memes/blank.png';
import meme21 from './metadata/memes/blank.png';
import meme22 from './metadata/memes/blank.png';
import meme23 from './metadata/memes/blank.png';
import meme24 from './metadata/memes/blank.png';
import meme25 from './metadata/memes/blank.png';

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

var canvas;
var context;
var screenH;
var screenW;
var stars = [];
var fps = 50;
var numStars = 690;

$(document).ready(function() {
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
 * This function draws a star.
 * You need to give the context as a parameter 
 * 
 * @param context
 */
Star.prototype.draw = function(context) {
  // Save the context
  context.save();
  
  // Move to the position of the star
  context.translate(this.x, this.y);
  
  // Change the opacity
  if(this.opacity > 1) {
    this.factor = -1;
  } else if(this.opacity <= 0) {
    this.factor = 1;
    
    // Reset to a new random position
    this.x = Math.round(Math.random() * screenW);
    this.y = Math.round(Math.random() * screenH);
  }
  
  this.opacity += this.increment * this.factor;
  
  context.beginPath();
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
  
  // Restore the context
  context.restore();
}

const landingPage = document.getElementById('landingPage');
const mainPage = document.getElementById('mainPage');

landingPage.style.display = 'block';
mainPage.style.display = 'none';

const closeLandingBtn = document.createElement('button');
closeLandingBtn.innerHTML = 'Enter';
landingPage.appendChild(closeLandingBtn);

// Moons moving animation
const moons = document.createElement('div'); 
moons.id = "moons";

const moonsImgs = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9, meme10, meme11, meme12, meme13, meme14];
moonsImgs.forEach((meme, index) => {
  const moonContainer = document.createElement('div'); 
  moonContainer.id = `moon${index + 1}`;
  moonContainer.classList.add('moon');

  const moon = document.createElement('img');
  moon.src = moonImg;
  moon.style.position = 'absolute';
  moon.style.width = '100%';
  moon.style.height = '100%';
  moon.style.display = 'block';

  const memeImg = document.createElement('img');
  memeImg.src = meme;
  memeImg.style.position = 'absolute';
  memeImg.style.width = '100%';
  memeImg.style.height = '100%';
  memeImg.style.border = 'none';
  memeImg.style.borderRadius = '50%';
  memeImg.style.opacity = '0.69';
  memeImg.classList.add('memeImg');

  moonContainer.appendChild(moon);
  moonContainer.appendChild(memeImg);
  moons.appendChild(moonContainer);
});

mainPage.appendChild(moons);
//////////

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
  <br>Cute dog i'll mean the space and say Solana's, future, it's big big brains From meme coin chaos to brighter days. 
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