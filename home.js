const g=new Swiper(".swiper",{speed:500,loop:!0,autoplay:{delay:5e3},effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets"}});g.on("slideChange",()=>{const i=document.querySelectorAll(".swiper-slide")[g.activeIndex],c=document.querySelectorAll(".testimonial-company-name");for(let t=0;t<c.length;t++)c[t].style.opacity="0.1",setTimeout(()=>{const d=i.getAttribute("company-name");d!==null&&(c[t].innerHTML=d,c[t].style.opacity="1")},400)});const s={speed:300,oneOpen:!0,offsetAnchor:!0,offsetFromTop:180,scrollTopDelay:400,classes:{accordion:"tabs-mobile-w",header:"tab-link",item:"tab-content-c",body:"tab-content-w",icon:"tab-plus-icon",iconOpen:"tab-minus-icon",active:"active"}},o=s.classes,p=(()=>{const i=$(`.${o.accordion}`),c=i.find(`.${o.header}`),t=$(`.${o.item}`),d=$(`.${o.body}`),f=$(`.${o.icon}`),l=$(`.${o.iconOpen}`),e=o.active;return{init:function(n){c.on("click",function(){p&&(p.toggle($(this)),s.offsetAnchor&&setTimeout(()=>{$("html")&&$(this)&&$("html").animate({scrollTop:$(this).offset().top-s.offsetFromTop},s.speed)},s.scrollTopDelay))}),$.extend(s,n),n.oneOpen&&$(`.${o.item}.${e}`).length>1&&$(`.${o.item}.${e}:not(:first)`).removeClass(e).find(`.${o.header} > .${o.icon}`).removeClass(e),$(`.${o.item}.${e}`).find(`> .${o.body}`).show()},toggle:function(n){s.oneOpen&&n[0]!=n.closest(i).find(`> .${o.item}.${e} > .${o.header}`)[0]&&(n.closest(i).find(`> .${o.item}`).removeClass(e).find(d).slideUp(s.speed),n.closest(i).find(`> .${o.item}`).find(`> .${o.header} > .${o.icon}`).removeClass(e),n.find(l).toggleClass(e),n.find(f).toggleClass(e));const r=n.closest(t).siblings().find(l);for(let a=0;a<r.length;a++)r[a].classList.contains(e)&&(r[a].classList.toggle(e),r[a].nextElementSibling.classList.toggle(e));n.closest(t).siblings().find(l).hasClass(e)&&(n.closest(t).siblings().find(l).toggleClass(e),n.closest(t).siblings().find(f).toggleClass(e)),n.closest(t).toggleClass(`${e}`).find(`> .${o.header} > .${o.icon}`).toggleClass(e),n.next().stop().slideToggle(s.speed),n.closest(t).hasClass(e)||(n.closest(t).find(l).toggleClass(e),n.closest(t).find(f).toggleClass(e))}}})();$(document).ready(function(){p.init(s)});const m=document.querySelectorAll(".tab-link")[0];m.click();