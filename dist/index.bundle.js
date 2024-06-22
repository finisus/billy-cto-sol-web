"use strict";(self.webpackChunkbilly_cto_sol_web=self.webpackChunkbilly_cto_sol_web||[]).push([[57],{208:(n,e,t)=>{t.d(e,{A:()=>h});var o=t(354),r=t.n(o),a=t(314),i=t.n(a),A=t(417),l=t.n(A),s=new URL(t(760),t.b),c=new URL(t(440),t.b),d=i()(r()),m=l()(s),p=l()(c);d.push([n.id,`@font-face {\n  font-family: 'star';\n  src: url(${m});\n}\n@font-face {\n  font-family: 'starHollow';\n  src: url(${p});\n}\n\n:root {\n  --base: #000000;\n  --text: #ffffff;\n  --cream: #ffffc8;\n  --yellow: #ffe81f;\n}\n\nhtml {\n  height: 100%;\n}\nbody {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  color: var(--text);\n  background-color: var(--base);\n  font-family: 'star';\n  overflow: hidden;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#space {\n  z-index: -99;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: var(--base);\n}\n\n#landingPage {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n#landingPage button {\n  z-index: 99;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 4px 16px;\n  font-family: 'star';\n  font-size: 3rem;\n  color: var(--cream);\n  background: none;\n  border: none;\n}\n#landingPage button:hover { color: var(--text); }\n#landingPage button:active { color: var(--cream); }\n\n#mainPage {\n  z-index: 99;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n#mainPage .socials {\n  z-index: 99;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(100% - 48px);\n  margin-top: 32px;\n  margin-left: 24px;\n  margin-right: 24px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px; \n}\n#mainPage .socials button {\n  font-family: 'star';\n  font-size: 1rem;\n  letter-spacing: 1px;\n  color: var(--text);\n  background: none;\n}\n#mainPage .socials button:hover { color: var(--cream); }\n#mainPage .socials button:active { color: var(--text); }\n#mainPage .socials button:nth-child(1) {\n  border-top: none;\n  border-bottom: none;\n  border-left: none;\n  border-right: 1px solid var(--cream);\n}\n#mainPage .socials button:nth-child(2) {\n  border-top: none;\n  border-bottom: none;\n  border-left: 1px solid var(--cream);\n  border-right: 1px solid var(--cream);\n}\n#mainPage .socials button:nth-child(3) {\n  border-top: none;\n  border-bottom: none;\n  border-left: 1px solid var(--cream);\n  border-right: 1px solid var(--cream);\n}\n#mainPage .socials button:nth-child(4) {\n  border-top: none;\n  border-bottom: none;\n  border-left: 1px solid var(--cream);\n  border-right: none;\n}\n\n#mainPage .footer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(100% - 48px);\n  margin-top: 90px;\n  margin-left: 24px;\n  margin-right: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n}\n#mainPage .footer span {\n  font-size: 1rem;\n  letter-spacing: 2px;\n  word-break: break-all;\n  text-align: start;\n}\n#mainPage .footer button {\n  font-family: 'star';\n  font-size: 1rem;\n  letter-spacing: 1px;\n  line-height: 20px;\n  color: var(--cream);\n  background: none;\n  border: none;\n}\n\n/* Star Wars Scroll Text */\n#sw_scroller {\n  z-index: 0;\n  height: 90em;\n  width: 20em;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%) perspective(320px) rotateX(24deg);\n  transform-origin: 50% 100%;\n  font-family: 'starHollow';\n  font-weight: bold;\n  color: var(--yellow);\n  font-size: 350%;\n  text-align: justify;\n  overflow: hidden;\n}\n#sw_scroller::after {\n  position: absolute;\n  content: '';\n  bottom: 60%;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n#sw_scroller .content {\n  position: absolute;\n  top: 100%;\n  animation: sw_scroll 169s linear 2s;\n}\n@keyframes sw_scroll {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -200%;\n  }\n}\n\n#sw_scroller .content .title, #sw_scroller .content .subtitle {\n  line-height: 1.5rem;\n} \n#sw_scroller .content .subtitle {\n  text-transform: capitalize;\n  font-size: 3rem;\n}\n\n@media screen and (max-width: 1000px) {\n  #mainPage .socials {\n    width: calc(100% - 32px);\n    margin-top: 90px;\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n  #mainPage .footer {\n    width: calc(100% - 48px);\n    margin-top: 32px;\n    margin-left: 24px;\n    margin-right: 24px;\n    gap: 16px;\n  }\n  #mainPage .footer span {\n    font-size: 0.8rem;\n    letter-spacing: 1px;\n  }\n  #sw_scroller {\n    height: 88em;\n    width: 16em;\n    font-size: 1.4rem;\n  }\n  #sw_scroller::after {\n    position: absolute;\n    content: '';\n    bottom: 60%;\n    left: 0;\n    right: 0;\n    top: 0;\n  }\n  #sw_scroller .content {\n    animation: sw_scroll 148s linear 2s;\n  }\n\n  #sw_scroller .content .title, #sw_scroller .content .subtitle {\n    line-height: 1.4rem;\n  } \n  #sw_scroller .content .subtitle {\n    text-transform: capitalize;\n    font-size: 1.4rem;\n  }\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["@font-face {\n  font-family: 'star';\n  src: url('./metadata/fonts/StarJediSpecialEdition.woff');\n}\n@font-face {\n  font-family: 'starHollow';\n  src: url('./metadata/fonts/StarJediHollow.woff');\n}\n\n:root {\n  --base: #000000;\n  --text: #ffffff;\n  --cream: #ffffc8;\n  --yellow: #ffe81f;\n}\n\nhtml {\n  height: 100%;\n}\nbody {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  color: var(--text);\n  background-color: var(--base);\n  font-family: 'star';\n  overflow: hidden;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#space {\n  z-index: -99;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: var(--base);\n}\n\n#landingPage {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n#landingPage button {\n  z-index: 99;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 4px 16px;\n  font-family: 'star';\n  font-size: 3rem;\n  color: var(--cream);\n  background: none;\n  border: none;\n}\n#landingPage button:hover { color: var(--text); }\n#landingPage button:active { color: var(--cream); }\n\n#mainPage {\n  z-index: 99;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n#mainPage .socials {\n  z-index: 99;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(100% - 48px);\n  margin-top: 32px;\n  margin-left: 24px;\n  margin-right: 24px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px; \n}\n#mainPage .socials button {\n  font-family: 'star';\n  font-size: 1rem;\n  letter-spacing: 1px;\n  color: var(--text);\n  background: none;\n}\n#mainPage .socials button:hover { color: var(--cream); }\n#mainPage .socials button:active { color: var(--text); }\n#mainPage .socials button:nth-child(1) {\n  border-top: none;\n  border-bottom: none;\n  border-left: none;\n  border-right: 1px solid var(--cream);\n}\n#mainPage .socials button:nth-child(2) {\n  border-top: none;\n  border-bottom: none;\n  border-left: 1px solid var(--cream);\n  border-right: 1px solid var(--cream);\n}\n#mainPage .socials button:nth-child(3) {\n  border-top: none;\n  border-bottom: none;\n  border-left: 1px solid var(--cream);\n  border-right: 1px solid var(--cream);\n}\n#mainPage .socials button:nth-child(4) {\n  border-top: none;\n  border-bottom: none;\n  border-left: 1px solid var(--cream);\n  border-right: none;\n}\n\n#mainPage .footer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(100% - 48px);\n  margin-top: 90px;\n  margin-left: 24px;\n  margin-right: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n}\n#mainPage .footer span {\n  font-size: 1rem;\n  letter-spacing: 2px;\n  word-break: break-all;\n  text-align: start;\n}\n#mainPage .footer button {\n  font-family: 'star';\n  font-size: 1rem;\n  letter-spacing: 1px;\n  line-height: 20px;\n  color: var(--cream);\n  background: none;\n  border: none;\n}\n\n/* Star Wars Scroll Text */\n#sw_scroller {\n  z-index: 0;\n  height: 90em;\n  width: 20em;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%) perspective(320px) rotateX(24deg);\n  transform-origin: 50% 100%;\n  font-family: 'starHollow';\n  font-weight: bold;\n  color: var(--yellow);\n  font-size: 350%;\n  text-align: justify;\n  overflow: hidden;\n}\n#sw_scroller::after {\n  position: absolute;\n  content: '';\n  bottom: 60%;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n#sw_scroller .content {\n  position: absolute;\n  top: 100%;\n  animation: sw_scroll 169s linear 2s;\n}\n@keyframes sw_scroll {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -200%;\n  }\n}\n\n#sw_scroller .content .title, #sw_scroller .content .subtitle {\n  line-height: 1.5rem;\n} \n#sw_scroller .content .subtitle {\n  text-transform: capitalize;\n  font-size: 3rem;\n}\n\n@media screen and (max-width: 1000px) {\n  #mainPage .socials {\n    width: calc(100% - 32px);\n    margin-top: 90px;\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n  #mainPage .footer {\n    width: calc(100% - 48px);\n    margin-top: 32px;\n    margin-left: 24px;\n    margin-right: 24px;\n    gap: 16px;\n  }\n  #mainPage .footer span {\n    font-size: 0.8rem;\n    letter-spacing: 1px;\n  }\n  #sw_scroller {\n    height: 88em;\n    width: 16em;\n    font-size: 1.4rem;\n  }\n  #sw_scroller::after {\n    position: absolute;\n    content: '';\n    bottom: 60%;\n    left: 0;\n    right: 0;\n    top: 0;\n  }\n  #sw_scroller .content {\n    animation: sw_scroll 148s linear 2s;\n  }\n\n  #sw_scroller .content .title, #sw_scroller .content .subtitle {\n    line-height: 1.4rem;\n  } \n  #sw_scroller .content .subtitle {\n    text-transform: capitalize;\n    font-size: 1.4rem;\n  }\n}"],sourceRoot:""}]);const h=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var l=this[A][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var l=n[A],s=o.base?l[0]+o.base:l[0],c=a[s]||0,d="".concat(s," ").concat(c);a[s]=c+1;var m=t(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=r(p,o);o.byIndex=A,e.splice(A,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var l=o(n,r),s=0;s<a.length;s++){var c=t(a[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},244:(n,e,t)=>{var o=t(72),r=t.n(o),a=t(825),i=t.n(a),A=t(659),l=t.n(A),s=t(56),c=t.n(s),d=t(540),m=t.n(d),p=t(113),h=t.n(p),f=t(208),B={};B.styleTagTransform=h(),B.setAttributes=c(),B.insert=l().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=m(),r()(f.A,B),f.A&&f.A.locals&&f.A.locals;const b=t.p+"e4ddddf7178bf44e1c20.mp3";document.getElementById("space");var g,C,u,E,y=[];function w(){C.clearRect(0,0,E,u),$.each(y,(function(){this.draw(C)}))}function v(n,e,t,o){this.x=parseInt(n),this.y=parseInt(e),this.length=parseInt(t),this.opacity=o,this.factor=1,this.increment=.03*Math.random()}$("document").ready((function(){u=$(window).height(),E=$(window).width(),(g=$("#space")).attr("height",u),g.attr("width",E),C=g[0].getContext("2d");for(var n=0;n<2e3;n++){var e=new v(Math.round(Math.random()*E),Math.round(Math.random()*u),1+2*Math.random(),Math.random());y.push(e)}setInterval(w,20)})),v.prototype.draw=function(){C.rotate(1*Math.PI/10),C.save(),C.translate(this.x,this.y),this.opacity>1?this.factor=-1:this.opacity<=0&&(this.factor=1,this.x=Math.round(Math.random()*E),this.y=Math.round(Math.random()*u)),this.opacity+=this.increment*this.factor,C.beginPath();for(var n=5;n--;)C.lineTo(0,this.length),C.translate(0,this.length),C.rotate(2*Math.PI/10),C.lineTo(0,-this.length),C.translate(0,-this.length),C.rotate(-6*Math.PI/10);C.lineTo(0,this.length),C.closePath(),C.fillStyle="rgba(255, 255, 200, "+this.opacity+")",C.shadowBlur=5,C.shadowColor="#ffff33",C.fill(),C.restore()};const x=document.getElementById("landingPage"),k=document.getElementById("mainPage");x.style.display="block",k.style.display="none";const P=document.createElement("button");P.innerHTML="Enter",x.appendChild(P);const M=document.createElement("div");M.classList.add("socials");const S=document.createElement("button");S.innerHTML="Tele",M.appendChild(S);const I=document.createElement("button");I.innerHTML="Twitter",M.appendChild(I);const _=document.createElement("button");_.innerHTML="Chart",M.appendChild(_);const T=document.createElement("button");T.innerHTML="Buy",M.appendChild(T),k.appendChild(M);const z=document.createElement("div");z.classList.add("footer");const L=document.createElement("span");L.innerHTML="3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump",z.appendChild(L);const j=document.createElement("button");j.innerHTML="Copy CA",z.appendChild(j),k.appendChild(z),document.addEventListener("DOMContentLoaded",(function(){const n=new Audio(b);n.loop=!0,n.volume=1,P.addEventListener("click",(function(){n.play().catch((n=>{console.log("AutoPlay was prevented. Please interact with the page to play audio.")})),x.style.display="none",k.style.display="block"})),function(){const n=document.createElement("div");n.id="sw_scroller";const e=document.createElement("div");e.classList.add("content");const t=document.createElement("p");t.classList.add("title"),t.innerHTML="Episode ix";const o=document.createElement("p");o.classList.add("subtitle"),o.innerHTML="$Billy to a Billy";const r=document.createElement("p");r.innerHTML="Billy the dog with a climb on the rise,\n  <br>Cute meme star taking everyone by surprise.\n  <br>From Solana blockchain, watch the numbers climb Billy to a billy, yeah it's our time.\n  <br>Billy's got the charm of the wagon of bark. \n  <br>\n  <br>His coin on Solana lighting up the dark From zero to a billy, \n  <br>he's leaving a mark, \n  <br>Saving meme coins, igniting the spark. \n  <br>\n  <br>Celebrity hype, taking the fall, Billy's here to rescue, answering the call.\n  <br>Meme coin savior, he's standing tall, \n  <br>\n  <br>So layin' is fine as breakin' down the wall.\n  <br>Billy to a Billy we're ridin' this wave, You don't know me \n  <br>in the space it saves. So let us feature, it's Billy we praise,\n  <br>From meme coin chaos to fire days.\n  <br>\n  <br>\n  <br>Every party signal, \n  <br>every wagon cheer. \n  <br>\n  <br>Billy coin's a hero, makin' it clear.\n  <br>\n  <br>So let a meme coin leadin' the sphere Billy to a Billy, \n  <br>the vision is near Bounce and flow.\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>Coins and smiles, \n  <br>spreadin' worldwide, Billy's takin' us on the joyride.\n  <br>\n  <br>That's the line of city with paws up and wide, \n  <br>from meme to legend, he's our guide. \n  <br>\n  <br>Billy's icon in the crypto game, small beginnings to worldwide fame.\n  <br>Memecoin hero, remember his name, Billy to a Billy, forever his claim. \n  <br>\n  <br>\n  <br>Billy to a Billy, we're riding this wave, cute doggo meme, the space it saves.\n  <br>So let us feature, it's Billy we praise, from memecoin chaos to brighter days.\n  <br>Billy to a Billy we're riding this wave, cute doggo meme, the space it saves.\n  <br>So let us feature. it's Billy we praise, from memecoin chaos to brighter days.\n  <br>\n  <br>\n  <br>\n  <br>brighter days\n  <br>\n  <br>\n  <br>\n  <br>brighter days\n  <br>\n  <br>\n  <br>\n  <br>You're impowerful, Billy's the face, of a meme coin future in a digital space, \n  <br>\n  <br>selling the blockchain, keeping the pace, Billy to a billy, leading the race.\n  <br>\n  <br>Wands and giggles, he's the meme king. Billy coin's the joy, that we all sing. \n  <br>\n  <br>Solana's picking the life brains, from meme coin wars to peaceful springs. \n  <br>\n  <br>\n  <br>Billy to a billy, we're bad this way. \n  <br>Cute dog I'll mean the space and say Solana's, future, it's big big brains From meme coin chaos to brighter days. \n  <br>\n  <br>\n  <br>In a world of crypto, it's a shining light Billy coin's the hero in the day and night Solana's, champion, big and fly From meme coin darkness to visions bright. \n  <br>Billy to a billy, the journey's begun. Cute mean savior, he's the one. \n  <br>\n  <br>\n  <br>Solana's, hero, second to none Billy Coin, Rising meme, Already Won.\n  <br>\n  <br>\n  <br>\n  <br>Brighter days\n  <br>\n  <br>Brighter days\n  <br>\n  <br>\n  <br>Billy the dog, Billy the crew, cute meme Savior, He's the One. \n  <br>Solana's Hero, Second to None. Billy Coin, Rising meme, Already Won.\n  <br>\n  <br>Brighter days\n  <br>\n  <br>\n  <br>Brighter days\n  <br>\n  <br>\n  <br>Brighter days\n  <br>\n  <br>\n  <br>Brighter days\n  <br>...",e.appendChild(t),e.appendChild(o),e.appendChild(r),n.appendChild(e),k.appendChild(n)}(),S.addEventListener("click",(()=>window.open("https://t.me/billy_cto_sol","_self"))),I.addEventListener("click",(()=>window.open("https://x.com/billycoinsolana","_self"))),_.addEventListener("click",(()=>window.open("https://dexscreener.com/solana/9uww4c36hictgr6pzw9vfhr9vdxktz8na8jvnzqu35pj","_blank"))),T.addEventListener("click",(()=>window.open("https://raydium.io/swap/?outputMint=3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump&inputMint=sol","_blank")));const e=L.innerHTML;j.addEventListener("click",(async()=>{try{await navigator.clipboard.writeText(e),console.log("Text copied successfully using Clipboard API"),alert("Contract copied successfully!")}catch(n){const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),console.log("Text copied successfully using legacy approach"),alert("Contract copied successfully!")}}))}))},440:(n,e,t)=>{n.exports=t.p+"fonts/StarJediHollow.woff"},760:(n,e,t)=>{n.exports=t.p+"fonts/StarJediSpecialEdition.woff"}},n=>{n(n.s=244)}]);
//# sourceMappingURL=index.bundle.js.map