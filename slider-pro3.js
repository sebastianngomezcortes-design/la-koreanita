(()=>{'use strict';
const root=document.querySelector('.kp3');if(!root)return;
const slides=[...root.querySelectorAll('.kp3-slide')],tabs=[...root.querySelectorAll('.kp3-tab')],pause=root.querySelector('.kp3-pause'),count=root.querySelector('.kp3-count b'),announce=root.querySelector('.kp3-announcement'),reduce=matchMedia('(prefers-reduced-motion: reduce)');
const delay=6500;let index=0,timer=null,remaining=delay,started=0,userPaused=reduce.matches,hovered=false,focused=false,visible=true,touchX=0,touchY=0;
function blocked(){return userPaused||hovered||focused||document.hidden||!visible}
function stop(){if(timer){clearTimeout(timer);timer=null;remaining=Math.max(0,remaining-(performance.now()-started))}}
function sync(){stop();root.classList.toggle('is-paused',blocked());pause.textContent=userPaused?'▶':'Ⅱ';pause.setAttribute('aria-label',userPaused?'Reanudar presentación automática':'Pausar presentación automática');pause.setAttribute('aria-pressed',String(userPaused));if(!blocked()){started=performance.now();timer=setTimeout(()=>{timer=null;show(index+1,false)},remaining)}}
function show(next,manual=true){stop();index=(next+slides.length)%slides.length;slides.forEach((s,i)=>{const active=i===index;s.classList.toggle('is-active',active);s.setAttribute('aria-hidden',String(!active));s.inert=!active;const img=s.querySelector('img');if(active)img.loading='eager'});tabs.forEach((t,i)=>{t.classList.remove('is-active');t.setAttribute('aria-current',String(i===index))});void root.offsetWidth;tabs[index].classList.add('is-active');count.textContent=String(index+1).padStart(2,'0');if(manual)announce.textContent='Imagen '+(index+1)+' de '+slides.length;remaining=delay;sync();const upcoming=slides[(index+1)%slides.length].querySelector('img');upcoming.loading='eager'}
root.querySelector('.kp3-prev').addEventListener('click',()=>show(index-1));root.querySelector('.kp3-next').addEventListener('click',()=>show(index+1));tabs.forEach((t,i)=>t.addEventListener('click',()=>show(i)));pause.addEventListener('click',()=>{userPaused=!userPaused;sync()});
root.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches){hovered=true;sync()}});root.addEventListener('mouseleave',()=>{hovered=false;sync()});
root.addEventListener('focusin',()=>{focused=true;sync()});root.addEventListener('focusout',()=>setTimeout(()=>{focused=root.contains(document.activeElement);sync()},0));
root.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();show(index+(e.key==='ArrowRight'?1:-1))}});
root.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;touchY=e.changedTouches[0].clientY},{passive:true});root.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX,dy=e.changedTouches[0].clientY-touchY;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.3)show(index+(dx<0?1:-1))},{passive:true});
document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',()=>{userPaused=reduce.matches;sync()});
if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()},{threshold:.15}).observe(root);
show(0,false);
})();