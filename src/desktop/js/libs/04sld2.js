!function(){function a(){b(),l.addEventListener("click",function(a){a.preventDefault(),c("next")}),m.addEventListener("click",function(a){a.preventDefault(),c("prev")}),c("next")}function b(){k.style.display="block"}function c(a){if(n)return!1;n=!0;var b=0,c=h[i];"next"===a?i=i<j-1?i+1:0:"prev"===a&&(i=i>0?i-1:j-1);var e=h[i],g=function(){this.removeEventListener(f,g),classie.removeClass(this,"current"),classie.removeClass(this,"next"===a?"navOutNext":"navOutPrev"),++b,2===b&&(n=!1)},k=function(){this.removeEventListener(f,k),classie.addClass(this,"current"),classie.removeClass(this,"next"===a?"navInNext":"navInPrev"),++b,2===b&&(n=!1)};d.animations?(c.addEventListener(f,g),e.addEventListener(f,k)):(g(),k()),classie.addClass(c,"next"===a?"navOutNext":"navOutPrev"),classie.addClass(e,"next"===a?"navInNext":"navInPrev")}var d={animations:Modernizr.cssanimations},e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},f=e[Modernizr.prefixed("animation")],g=document.getElementById("component2"),h=g.querySelector("ul.itemwrap").children,i=0,j=h.length,k=g.querySelector("nav"),l=k.querySelector(".next"),m=k.querySelector(".prev"),n=!1;a()}();