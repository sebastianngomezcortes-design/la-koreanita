const A=window.KOREANITA_ASSETS||{};
['mainLogo','heroLogo'].forEach(id=>{const el=document.getElementById(id);if(el)el.src=A.logo||''});
['brandIconHeader','brandIcon'].forEach(id=>{const el=document.getElementById(id);if(el)el.src=A.icon||''});
const heroImg1=document.getElementById('heroBales1'),heroImg2=document.getElementById('heroBales2');
if(heroImg1){heroImg1.src='assets/hero-sucursal.jpg';const frame=heroImg1.closest('.hero-slide-photo');if(frame)frame.style.setProperty('--slide-bg',"url('assets/hero-sucursal.jpg')")}
if(heroImg2){heroImg2.src='assets/hero-bodega.jpg';const frame=heroImg2.closest('.hero-slide-photo');if(frame)frame.style.setProperty('--slide-bg',"url('assets/hero-bodega.jpg')")}
[['img711','Abrigo 3/4 Hombre'],['img708','Abrigo 3/4 Dama'],['img705','Abrigo Corto Dama']].forEach(([id,name])=>{const el=document.getElementById(id);if(el)el.src=productArt(name)});
const heroSlides=[...document.querySelectorAll('.hero-slide')],heroDots=[...document.querySelectorAll('#heroDots button')],heroPrev=document.getElementById('heroPrev'),heroNext=document.getElementById('heroNext'),heroSlider=document.getElementById('heroSlider');
let heroIndex=0,heroTimer=null;
function showHeroSlide(i){if(!heroSlides.length)return;heroIndex=(i+heroSlides.length)%heroSlides.length;heroSlides.forEach((s,n)=>s.classList.toggle('active',n===heroIndex));heroDots.forEach((d,n)=>d.classList.toggle('active',n===heroIndex))}
function restartHero(){if(heroTimer)clearInterval(heroTimer);heroTimer=setInterval(()=>showHeroSlide(heroIndex+1),4800)}
if(heroPrev)heroPrev.onclick=()=>{showHeroSlide(heroIndex-1);restartHero()};
if(heroNext)heroNext.onclick=()=>{showHeroSlide(heroIndex+1);restartHero()};
heroDots.forEach((d,i)=>d.onclick=()=>{showHeroSlide(i);restartHero()});
if(heroSlider){heroSlider.onmouseenter=()=>heroTimer&&clearInterval(heroTimer);heroSlider.onmouseleave=restartHero;let sx=0;heroSlider.addEventListener('touchstart',e=>sx=e.changedTouches[0].screenX,{passive:true});heroSlider.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-sx;if(Math.abs(dx)>45){showHeroSlide(heroIndex+(dx<0?1:-1));restartHero()}},{passive:true})}
showHeroSlide(0);restartHero();

const products=[{"id":"JSD01","name":"Blusas Franela"},{"id":"JSD02","name":"Blusas de Seda"},{"id":"JSD03","name":"Polo Hombre cuello redondo M/C"},{"id":"JSD04","name":"Polo con cuello M/C"},{"id":"JSD05","name":"Polo Manga Larga con cuello"},{"id":"JSD06","name":"Polo Montana Verano"},{"id":"JSD07","name":"Jeans de Hombre"},{"id":"JSD08","name":"Jardinera"},{"id":"JSD09","name":"Jeans Adulto Frizado"},{"id":"JSD10","name":"Pantalon color frizado"},{"id":"JSD11","name":"Pantaletas"},{"id":"JSD12","name":"Enterizo"},{"id":"JSD13","name":"Pantalones de Montaña verano"},{"id":"JSD14","name":"Pantalones de Montaña Invierno"},{"id":"JSD15","name":"Short Hombre"},{"id":"JSD16","name":"Short Jean Sexy"},{"id":"JSD17","name":"Short Cargo"},{"id":"JSD18","name":"Pantalon Cargo"},{"id":"JSD19","name":"Falda Seda"},{"id":"JSD20","name":"Falda Jean"},{"id":"JSD21","name":"FALDA LANA"},{"id":"JSD22","name":"Vestido de Seda Mujer"},{"id":"JSD23","name":"Zipper Nino"},{"id":"JSD24","name":"Casaca Montana"},{"id":"JSD25","name":"Polar Montana"},{"id":"JSD26","name":"Canguro"},{"id":"JSD27","name":"Chaqueta Jeans"},{"id":"JSD28","name":"Bleiser Hombre Drill"},{"id":"JSD29","name":"Corderoy"},{"id":"JSD30","name":"Blaisser Oficina"},{"id":"JSD31","name":"Calcetines"},{"id":"JSD32","name":"Calcetin de nino"},{"id":"JSD33","name":"Gorra de Verano"},{"id":"JSD34","name":"Chulo"},{"id":"JSD35","name":"Ropa de Baño"},{"id":"JSD36","name":"Zipper"},{"id":"JSD37","name":"Buzo Raquelado"},{"id":"JSD38","name":"Deportivo Mixto"},{"id":"JSD39","name":"Buzo Jogger"},{"id":"JSD40","name":"Polo Short Deportivo"},{"id":"JSD41","name":"Polo Montana Invierno"},{"id":"JSD42","name":"Bufanda de Piel"},{"id":"JSD43","name":"Sudadera"},{"id":"JSD44","name":"Capa de Lana y chal"},{"id":"JSD45","name":"Boxer licra Hombre"},{"id":"JSD46","name":"Faja"},{"id":"JSD47","name":"Top Deportivo"},{"id":"JSD48","name":"Chaquetas cintura Mixto Hombre"},{"id":"JSD49","name":"Casaca Bomber hombre"},{"id":"JSD50","name":"CHAMARRA HOMBRE"},{"id":"JSD51","name":"CHAMARRA MUJER"},{"id":"JSD52","name":"Parka Larga"},{"id":"JSD53","name":"Parka Niños/as"},{"id":"JSD54","name":"Abrigo niños/as"},{"id":"JSD55","name":"Chompa"},{"id":"JSD56","name":"Chompa Hombre"},{"id":"JSD57","name":"ANGORA"},{"id":"JSD58","name":"CHOMPA MONO"},{"id":"JSD59","name":"Chompa Largos de Mujer"},{"id":"JSD60","name":"Chompa Cardigan"},{"id":"JSD61","name":"PANTALON PANO"},{"id":"JSD62","name":"Chaleco Lana"},{"id":"JSD63","name":"Pijama Polar"},{"id":"JSD64","name":"Polar"},{"id":"JSD65","name":"Chaleco Polar"},{"id":"JSD66","name":"Polar Nino"},{"id":"JSD67","name":"Chaleco Mixto"},{"id":"JSD68","name":"Chaleco Pluma"},{"id":"JSD69","name":"Deportivo Mixto Zipper"},{"id":"JSD70","name":"Gabardina de Mujer"},{"id":"JSD71","name":"Cuero"},{"id":"JSD72","name":"Gamulan"},{"id":"JSD73","name":"Gamulan Sintetico"},{"id":"JSD74","name":"Abrigo Hombre"},{"id":"JSD75","name":"Bleiser Pano Dama"},{"id":"JSD76","name":"Abrigo 3/4 Dama"},{"id":"JSD77","name":"Abrigo Largo Mujer"},{"id":"JSD78","name":"Piel"},{"id":"JSD79","name":"Ropa perro"},{"id":"JSD80","name":"Accesorios"},{"id":"JSD81","name":"Faja de trabajo"},{"id":"JSD82","name":"SLEEPING"},{"id":"JSD83","name":"Cartera"},{"id":"JSD84","name":"Mochila"},{"id":"JSD85","name":"Cartera Menuda"}].map((p,i)=>({...p,code:String(i+1).padStart(2,'0'),image:(window.KOREANITA_PRODUCT_IMAGES||{})[p.id]||productArt(p.name)}));

function productArt(name){
 const raw=String(name||'Producto');
 const n=raw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 let shape='';
 if(/mochila/.test(n)){
   shape='<path d="M270 130 Q360 70 450 130 L470 390 Q470 420 440 420 H280 Q250 420 250 390 Z" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/><path d="M305 145 Q360 95 415 145" fill="none" stroke="#083d8b" stroke-width="14"/><rect x="300" y="245" width="120" height="95" rx="18" fill="#fff" stroke="#083d8b" stroke-width="10"/>';
 } else if(/cartera/.test(n)){
   shape='<rect x="230" y="205" width="260" height="190" rx="28" fill="#fee2e2" stroke="#083d8b" stroke-width="12"/><path d="M300 210 Q360 115 420 210" fill="none" stroke="#083d8b" stroke-width="14"/><circle cx="360" cy="295" r="14" fill="#d71920"/>';
 } else if(/jean|pantalon|cargo|pano/.test(n)){
   shape='<path d="M285 105 H435 L415 410 H350 L360 245 L330 410 H265 Z" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/><path d="M285 160 H435" stroke="#083d8b" stroke-width="10"/><path d="M360 105 V245" stroke="#083d8b" stroke-width="8"/>';
 } else if(/short/.test(n)){
   shape='<path d="M270 160 H450 L435 335 H365 L360 235 L350 335 H280 Z" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/><path d="M270 205 H450" stroke="#083d8b" stroke-width="10"/>';
 } else if(/falda/.test(n)){
   shape='<path d="M305 135 H415 L470 405 H250 Z" fill="#fee2e2" stroke="#083d8b" stroke-width="12"/><path d="M300 180 H420" stroke="#083d8b" stroke-width="10"/>';
 } else if(/vestido|enterizo/.test(n)){
   shape='<path d="M330 110 Q360 90 390 110 L420 180 475 410 H245 L300 180 Z" fill="#fee2e2" stroke="#083d8b" stroke-width="12"/><path d="M330 110 L300 180 245 205 M390 110 L420 180 475 205" fill="none" stroke="#083d8b" stroke-width="12"/>';
 } else if(/calcetin/.test(n)){
   shape='<path d="M285 120 H355 V285 Q355 345 415 345 H455 V405 H395 Q285 405 285 300 Z" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/><path d="M385 120 H455 V250 Q455 300 505 300 H535 V360 H480 Q385 360 385 265 Z" fill="#fee2e2" stroke="#083d8b" stroke-width="12"/>';
 } else if(/gorra|chulo/.test(n)){
   shape='<path d="M260 290 Q285 135 430 180 Q485 200 485 285 Z" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/><path d="M390 285 Q500 270 545 315 Q455 335 365 320 Z" fill="#fee2e2" stroke="#083d8b" stroke-width="10"/>';
 } else if(/ropa perro/.test(n)){
   shape='<path d="M245 250 Q300 185 420 205 L475 250 435 330 H310 L275 385 H235 L255 325 Q220 300 245 250Z" fill="#fee2e2" stroke="#083d8b" stroke-width="12"/><circle cx="455" cy="185" r="55" fill="#fff" stroke="#083d8b" stroke-width="12"/><circle cx="472" cy="175" r="6" fill="#083d8b"/><path d="M430 145 L400 105" stroke="#083d8b" stroke-width="12"/>';
 } else if(/sleeping|pijama/.test(n)){
   shape='<rect x="275" y="120" width="170" height="285" rx="70" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/><path d="M310 165 H410 M310 215 H410 M310 265 H410 M310 315 H410" stroke="#fff" stroke-width="12"/>';
 } else if(/boxer|pantaleta|faja/.test(n)){
   shape='<path d="M275 170 H445 L425 350 H375 L360 270 L345 350 H295 Z" fill="#fee2e2" stroke="#083d8b" stroke-width="12"/><path d="M275 215 H445" stroke="#083d8b" stroke-width="10"/>';
 } else if(/abrigo|parka|chaqueta|casaca|gabardina|chamarra|gamulan|bleiser|blaisser|cuero|zipper|corderoy/.test(n)){
   const long=/largo|3\/4|gabardina|abrigo/.test(n);
   const y=long?435:370;
   shape='<path d="M305 115 Q360 75 415 115 L465 190 430 '+y+' H290 L255 190 Z" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/><path d="M305 115 L360 175 415 115 M360 175 V'+(y-25)+'" fill="none" stroke="#083d8b" stroke-width="10"/><circle cx="380" cy="235" r="8" fill="#d71920"/><circle cx="380" cy="285" r="8" fill="#d71920"/>';
 } else if(/chompa|polar|chaleco|sudadera|canguro|angora|capa|bufanda|piel/.test(n)){
   const sleeveless=/chaleco/.test(n);
   shape='<path d="M305 130 Q360 95 415 130 L'+(sleeveless?'430 175 410':'475 210 430')+' 390 H290 '+(sleeveless?'310 175':'245 210 290 390')+' Z" fill="#fee2e2" stroke="#083d8b" stroke-width="12"/><path d="M320 145 Q360 185 400 145" fill="none" stroke="#083d8b" stroke-width="10"/>';
 } else if(/blusa|polo|top/.test(n)){
   shape='<path d="M300 145 L240 205 285 250 300 225 310 390 H410 L420 225 435 250 480 205 420 145 390 120 Q360 155 330 120 Z" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/><path d="M335 120 Q360 155 385 120" fill="none" stroke="#083d8b" stroke-width="10"/>';
 } else if(/deportivo|buzo|ropa de bano/.test(n)){
   shape='<path d="M300 125 L250 200 300 235 315 205 320 360 H400 L405 205 420 235 470 200 420 125 390 110 Q360 145 330 110 Z" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/><path d="M315 360 L290 430 H345 L360 365 375 430 H430 L405 360" fill="#fee2e2" stroke="#083d8b" stroke-width="12"/>';
 } else {
   shape='<path d="M300 145 L240 205 285 250 305 225 315 390 H405 L415 225 435 250 480 205 420 145 390 120 Q360 155 330 120 Z" fill="#dbeafe" stroke="#083d8b" stroke-width="12"/>';
 }
 const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 540"><rect width="720" height="540" rx="32" fill="#f8fafc"/><circle cx="610" cy="85" r="54" fill="#fee2e2"/><circle cx="105" cy="445" r="70" fill="#dbeafe"/>'+shape+'<rect x="178" y="462" width="364" height="42" rx="21" fill="#083d8b"/><text x="360" y="490" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="700" fill="white">ILUSTRACIÓN REFERENCIAL</text></svg>';
 return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg);
}

const weeklyPack=[
 {id:'W711',name:'711 Abrigo 3/4 Hombre',image:productArt('Abrigo 3/4 Hombre')},
 {id:'W708',name:'708 Abrigo 3/4 Dama',image:productArt('Abrigo 3/4 Dama')},
 {id:'W705',name:'705 Abrigo Corto Dama',image:productArt('Abrigo Corto Dama')}
];
const allProducts=[...products,...weeklyPack];
const cart={};
window.addPack=()=>{weeklyPack.forEach(p=>cart[p.id]=(cart[p.id]||0)+1);render();document.getElementById('carrito')?.scrollIntoView({behavior:'smooth',block:'start'});};
const grid=document.getElementById('productGrid'),cartList=document.getElementById('cartList'),cartCount=document.getElementById('cartCount');
document.getElementById('year').textContent=new Date().getFullYear();
function card(p){return '<article class="product" data-id="'+p.id+'"><div class="media"><img src="'+p.image+'" alt="'+p.name+'" loading="lazy"></div><div class="body"><span class="product-code">'+p.id+'</span><h3>'+p.name+'</h3><button class="add" type="button">Agregar al carro</button></div></article>'}
grid.innerHTML=products.map(card).join('');
grid.querySelectorAll('.product').forEach(el=>{const p=products.find(x=>x.id===el.dataset.id),a=el.querySelector('.add');a.onclick=()=>{cart[p.id]=(cart[p.id]||0)+1;render();a.textContent='Agregado ✓';setTimeout(()=>a.textContent='Agregar al carro',900)}});
function render(){
 const e=Object.entries(cart).map(([id,qty])=>({product:allProducts.find(p=>p.id===id),qty})).filter(x=>x.product);
 cartCount.textContent=e.reduce((s,i)=>s+i.qty,0);
 if(!e.length){cartList.innerHTML='<div class="empty">Tu carrito está vacío.</div>';return}
 cartList.innerHTML=e.map(i=>'<div class="cart-row"><div><strong>'+i.product.name+'</strong><small>Cantidad: '+i.qty+'</small><div class="mini-qty"><button onclick="change(\''+i.product.id+'\',-1)">−</button><button onclick="change(\''+i.product.id+'\',1)">+</button></div></div><button class="remove" onclick="removeItem(\''+i.product.id+'\')">Quitar</button></div>').join('');
}
window.change=(id,d)=>{if(!cart[id])return;cart[id]+=d;if(cart[id]<=0)delete cart[id];render()};
window.removeItem=id=>{delete cart[id];render()};
function message(country){
 const e=Object.entries(cart).map(([id,qty])=>({product:allProducts.find(p=>p.id===id),qty})).filter(x=>x.product);
 if(!e.length){alert('Agrega al menos un producto antes de finalizar.');return null}
 return encodeURIComponent(['Hola La Koreanita, quiero consultar este pedido desde la web:','',...e.map(i=>'• '+i.product.name+' x'+i.qty),'','Atención: '+country,'','Por favor confirmar stock, pago y entrega.','','Nombre:','Ciudad:'].join('\n'))
}
document.getElementById('waChile').onclick=()=>{const m=message('Chile');if(m)window.open('https://wa.me/56929954812?text='+m,'_blank')};
document.getElementById('waBolivia').onclick=()=>{const m=message('Bolivia');if(m)window.open('https://wa.me/59178373242?text='+m,'_blank')};
const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');if(menu)menu.onclick=()=>links.classList.toggle('open');if(links)links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
render();