"use strict";document.addEventListener("DOMContentLoaded",()=>{const e=[{name:"linterna",img:"assets/images/heroes/linterna.png"},{name:"linterna",img:"assets/images/logos/linterna-logo.png"},{name:"batman",img:"assets/images/heroes/batman.png"},{name:"batman",img:"assets/images/logos/batman-logo.png"},{name:"flash",img:"assets/images/heroes/flash.png"},{name:"flash",img:"assets/images/logos/flash-logo.png"},{name:"superman",img:"assets/images/heroes/superman.png"},{name:"superman",img:"assets/images/logos/superman-logo.png"},{name:"capitan",img:"assets/images/heroes/capitan.png"},{name:"capitan",img:"assets/images/logos/capitan-logo.png"},{name:"hulk",img:"assets/images/heroes/hulk.png"},{name:"hulk",img:"assets/images/logos/hulk-logo.png"},{name:"ironman",img:"assets/images/heroes/ironman.png"},{name:"ironman",img:"assets/images/logos/ironman-logo.png"},{name:"lobezno",img:"assets/images/heroes/lobezno.png"},{name:"lobezno",img:"assets/images/logos/lobezno-logo.png"},{name:"spiderman",img:"assets/images/heroes/spiderman.png"},{name:"spiderman",img:"assets/images/logos/spiderman-logo.png"},{name:"thor",img:"assets/images/heroes/thor.png"},{name:"thor",img:"assets/images/logos/thor-logo.png"},{name:"wonderwoman",img:"assets/images/heroes/wonderwoman.png"},{name:"wonderwoman",img:"assets/images/logos/wonderwoman-logo.png"},{name:"aquaman",img:"assets/images/heroes/aquaman.png"},{name:"aquaman",img:"assets/images/logos/aquaman-logo.png"}];e.sort(()=>.5-Math.random());const s=document.querySelector(".grid"),a=document.querySelector("#result"),n=document.querySelector(".score");let t=[],g=[],o=[];function m(){const s=document.querySelectorAll("img"),m=g[0],i=g[1];t[0]===t[1]?(alert("You found a match!"),s[m].setAttribute("src","assets/images/yeah.jpg"),s[i].setAttribute("src","assets/images/yeah.jpg"),o.push(t)):(s[m].setAttribute("src","assets/images/blank.png"),s[i].setAttribute("src","assets/images/blank.png"),alert("Sorry, try again")),t=[],g=[],a.textContent=o.length,o.length===e.length/2&&(a.textContent="Congratulations! You found them all!",n.classList.add("congrats"))}function i(){const s=this.getAttribute("data-id");t.push(e[s].name),g.push(s),this.setAttribute("src",e[s].img),2===t.length&&setTimeout(m,500)}!function(){for(let a=0;a<e.length;a++){const e=document.createElement("img");e.setAttribute("src","assets/images/blank.png"),e.setAttribute("data-id",a),e.addEventListener("click",i),s.appendChild(e)}}()});