const p=document.querySelector(".product-page-posture-s"),u=document.querySelector(".tab-dropdown-img-default"),c={speed:300,oneOpen:!0,offsetAnchor:!0,offsetFromTop:180,scrollTopDelay:400,classes:{accordion:"tabs-mobile-w",header:"tab-link",item:"tab-content-c",body:"tab-content-w",icon:"tab-plus-icon",iconOpen:"tab-minus-icon",image:"tab-dropdown-img",active:"active"}},o=c.classes,b=function(){const l=$(`.${o.accordion}`),f=l.find(`.${o.header}`),n=$(`.${o.item}`),g=$(`.${o.body}`),d=$(`.${o.icon}`),i=$(`.${o.iconOpen}`),m=$(`.${o.image}`),e=o.active;return{init:function(s){f.on("click",function(){b.toggle($(this)),c.offsetAnchor&&window.innerWidth<991&&setTimeout(()=>{$("html").animate({scrollTop:$(this).offset().top-c.offsetFromTop},c.speed)},c.scrollTopDelay)}),$.extend(c,s),s.oneOpen&&$(`.${o.item}.${e}`).length>1&&$(`.${o.item}.${e}:not(:first)`).removeClass(e).find(`.${o.header} > .${o.icon}`).removeClass(e),$(`.${o.item}.${e}`).find(`> .${o.body}`).show()},toggle:function(s){c.oneOpen&&s[0]!=s.closest(l).find(`> .${o.item}.${e} > .${o.header}`)[0]&&(s.closest(l).find(`> .${o.item}`).removeClass(e).find(g).slideUp(c.speed),s.closest(l).find(`> .${o.item}`).find(`> .${o.header} > .${o.icon}`).removeClass(e),s.find(i).toggleClass(e),s.find(d).toggleClass(e));let a=s.closest(n).siblings().find(i);for(let t=0;t<a.length;t++)a[t].classList.contains(e)&&(a[t].classList.toggle(e),a[t].nextElementSibling.classList.toggle(e));let r=s.closest(n).siblings().find(m);for(let t=0;t<r.length;t++)r[t].classList.contains(e)&&r[t].classList.toggle(e);s.closest(n).siblings().find(i).hasClass(e)&&(s.closest(n).siblings().find(i).toggleClass(e),s.closest(n).siblings().find(d).toggleClass(e)),s.closest(n).toggleClass(`${e}`).find(`> .${o.header} > .${o.icon}`).toggleClass(e),s.next().stop().slideToggle(c.speed),s.closest(n).find(g).find(m).toggleClass(e),s.closest(n).find(f).toggleClass(e),u.classList.remove(e),p.classList.remove(e),s.closest(n).hasClass(e)||(s.closest(n).find(i).toggleClass(e),s.closest(n).find(d).toggleClass(e),u.classList.add(e),p.classList.add(e))}}}();$(document).ready(function(){b.init(c)});const C=document.querySelectorAll(".tab-link")[0];C.click();
