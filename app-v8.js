const A=window.KOREANITA_ASSETS||{};
['mainLogo','heroLogo'].forEach(id=>{const el=document.getElementById(id);if(el)el.src=A.logo||''});
['brandIconHeader','brandIcon'].forEach(id=>{const el=document.getElementById(id);if(el)el.src=A.icon||''});
const heroImg1=document.getElementById('heroBales1'),heroImg2=document.getElementById('heroBales2');
if(heroImg1){heroImg1.src='assets/hero-sucursal.jpg';const frame=heroImg1.closest('.hero-slide-photo');if(frame)frame.style.setProperty('--slide-bg',"url('assets/hero-sucursal.jpg')")}
if(heroImg2){heroImg2.src='assets/hero-bodega.jpg';const frame=heroImg2.closest('.hero-slide-photo');if(frame)frame.style.setProperty('--slide-bg',"url('assets/hero-bodega.jpg')")}
['img711','img708','img705'].forEach(id=>{const el=document.getElementById(id);if(el)el.src=A[id.replace('img','')]||''});
const heroSlides=[...document.querySelectorAll('.hero-slide')],heroDots=[...document.querySelectorAll('#heroDots button')],heroPrev=document.getElementById('heroPrev'),heroNext=document.getElementById('heroNext'),heroSlider=document.getElementById('heroSlider');
let heroIndex=0,heroTimer=null;
function showHeroSlide(i){if(!heroSlides.length)return;heroIndex=(i+heroSlides.length)%heroSlides.length;heroSlides.forEach((s,n)=>s.classList.toggle('active',n===heroIndex));heroDots.forEach((d,n)=>d.classList.toggle('active',n===heroIndex))}
function restartHero(){if(heroTimer)clearInterval(heroTimer);heroTimer=setInterval(()=>showHeroSlide(heroIndex+1),4800)}
if(heroPrev)heroPrev.onclick=()=>{showHeroSlide(heroIndex-1);restartHero()};
if(heroNext)heroNext.onclick=()=>{showHeroSlide(heroIndex+1);restartHero()};
heroDots.forEach((d,i)=>d.onclick=()=>{showHeroSlide(i);restartHero()});
if(heroSlider){heroSlider.onmouseenter=()=>heroTimer&&clearInterval(heroTimer);heroSlider.onmouseleave=restartHero;let sx=0;heroSlider.addEventListener('touchstart',e=>sx=e.changedTouches[0].screenX,{passive:true});heroSlider.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-sx;if(Math.abs(dx)>45){showHeroSlide(heroIndex+(dx<0?1:-1));restartHero()}},{passive:true})}
showHeroSlide(0);restartHero();

const products=[{"id":"JSD01","name":"Blusas Franela"},{"id":"JSD02","name":"Blusas de Seda"},{"id":"JSD03","name":"Polo Hombre cuello redondo M/C"},{"id":"JSD04","name":"Polo con cuello M/C"},{"id":"JSD05","name":"Polo Manga Larga con cuello"},{"id":"JSD06","name":"Polo Montana Verano"},{"id":"JSD07","name":"Jeans de Hombre"},{"id":"JSD08","name":"Jardinera"},{"id":"JSD09","name":"Jeans Adulto Frizado"},{"id":"JSD10","name":"Pantalon color frizado"},{"id":"JSD11","name":"Pantaletas"},{"id":"JSD12","name":"Enterizo"},{"id":"JSD13","name":"Pantalones de Montaña verano"},{"id":"JSD14","name":"Pantalones de Montaña Invierno"},{"id":"JSD15","name":"Short Hombre"},{"id":"JSD16","name":"Short Jean Sexy"},{"id":"JSD17","name":"Short Cargo"},{"id":"JSD18","name":"Pantalon Cargo"},{"id":"JSD19","name":"Falda Seda"},{"id":"JSD20","name":"Falda Jean"},{"id":"JSD21","name":"FALDA LANA"},{"id":"JSD22","name":"Vestido de Seda Mujer"},{"id":"JSD23","name":"Zipper Nino"},{"id":"JSD24","name":"Casaca Montana"},{"id":"JSD25","name":"Polar Montana"},{"id":"JSD26","name":"Canguro"},{"id":"JSD27","name":"Chaqueta Jeans"},{"id":"JSD28","name":"Bleiser Hombre Drill"},{"id":"JSD29","name":"Corderoy"},{"id":"JSD30","name":"Blaisser Oficina"},{"id":"JSD31","name":"Calcetines"},{"id":"JSD32","name":"Calcetin de nino"},{"id":"JSD33","name":"Gorra de Verano"},{"id":"JSD34","name":"Chulo"},{"id":"JSD35","name":"Ropa de Baño"},{"id":"JSD36","name":"Zipper"},{"id":"JSD37","name":"Buzo Raquelado"},{"id":"JSD38","name":"Deportivo Mixto"},{"id":"JSD39","name":"Buzo Jogger"},{"id":"JSD40","name":"Polo Short Deportivo"},{"id":"JSD41","name":"Polo Montana Invierno"},{"id":"JSD42","name":"Bufanda de Piel"},{"id":"JSD43","name":"Sudadera"},{"id":"JSD44","name":"Capa de Lana y chal"},{"id":"JSD45","name":"Boxer licra Hombre"},{"id":"JSD46","name":"Faja"},{"id":"JSD47","name":"Top Deportivo"},{"id":"JSD48","name":"Chaquetas cintura Mixto Hombre"},{"id":"JSD49","name":"Casaca Bomber hombre"},{"id":"JSD50","name":"CHAMARRA HOMBRE"},{"id":"JSD51","name":"CHAMARRA MUJER"},{"id":"JSD52","name":"Parka Larga"},{"id":"JSD53","name":"Parka Niños/as"},{"id":"JSD54","name":"Abrigo niños/as"},{"id":"JSD55","name":"Chompa"},{"id":"JSD56","name":"Chompa Hombre"},{"id":"JSD57","name":"ANGORA"},{"id":"JSD58","name":"CHOMPA MONO"},{"id":"JSD59","name":"Chompa Largos de Mujer"},{"id":"JSD60","name":"Chompa Cardigan"},{"id":"JSD61","name":"PANTALON PANO"},{"id":"JSD62","name":"Chaleco Lana"},{"id":"JSD63","name":"Pijama Polar"},{"id":"JSD64","name":"Polar"},{"id":"JSD65","name":"Chaleco Polar"},{"id":"JSD66","name":"Polar Nino"},{"id":"JSD67","name":"Chaleco Mixto"},{"id":"JSD68","name":"Chaleco Pluma"},{"id":"JSD69","name":"Deportivo Mixto Zipper"},{"id":"JSD70","name":"Gabardina de Mujer"},{"id":"JSD71","name":"Cuero"},{"id":"JSD72","name":"Gamulan"},{"id":"JSD73","name":"Gamulan Sintetico"},{"id":"JSD74","name":"Abrigo Hombre"},{"id":"JSD75","name":"Bleiser Pano Dama"},{"id":"JSD76","name":"Abrigo 3/4 Dama"},{"id":"JSD77","name":"Abrigo Largo Mujer"},{"id":"JSD78","name":"Piel"},{"id":"JSD79","name":"Ropa perro"},{"id":"JSD80","name":"Accesorios"},{"id":"JSD81","name":"Faja de trabajo"},{"id":"JSD82","name":"SLEEPING"},{"id":"JSD83","name":"Cartera"},{"id":"JSD84","name":"Mochila"},{"id":"JSD85","name":"Cartera Menuda"}].map((p,i)=>({...p,code:String(i+1).padStart(2,'0'),image:pickImage(p.name,i)}));
function pickImage(name,i){
 const n=name.toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'');
 if(/jean|pantalon|short|falda|jardinera/.test(n)) return A['13LS']||A['LWP']||A['01']||'';
 if(/blusa|seda|polo|vestido|enterizo|top/.test(n)) return A['13T']||A['01']||A['LWP']||'';
 if(/chaqueta|casaca|abrigo|parka|bleiser|blaisser|gabardina|cuero|gamulan|chamarra|zipper|corderoy/.test(n)) return A['920C']||A['13T']||A['01']||'';
 if(/chompa|polar|chaleco|sudadera|canguro|bufanda|capa|angora|piel/.test(n)) return A['67M']||A['13T']||A['01']||'';
 if(/pijama|sleeping|deportivo|buzo|ropa de bano/.test(n)) return A['67M']||A['01']||A['13T']||'';
 if(/cartera|mochila|accesorios|gorra|chulo|calcetin|boxer|ropa perro|faja/.test(n)) return A['LWP']||A['01']||A['13T']||'';
 return A['01']||A['13T']||A['LWP']||'';
}
const cart={};
const grid=document.getElementById('productGrid'),cartList=document.getElementById('cartList'),cartTotal=document.getElementById('cartTotal'),cartCount=document.getElementById('cartCount');
document.getElementById('year').textContent=new Date().getFullYear();
function card(p){return '<article class="product" data-id="'+p.id+'"><div class="media"><img src="'+p.image+'" alt="'+p.name+'" loading="lazy"></div><div class="body"><h3>'+p.name+'</h3><button class="add" type="button">Agregar al carrito</button></div></article>'}
grid.innerHTML=products.map(card).join('');
grid.querySelectorAll('.product').forEach(el=>{const p=products.find(x=>x.id===el.dataset.id),a=el.querySelector('.add');a.onclick=()=>{cart[p.id]=(cart[p.id]||0)+1;render();a.textContent='Agregado ✓';setTimeout(()=>a.textContent='Agregar al carrito',900)}});
function render(){
 const e=Object.entries(cart).map(([id,qty])=>({product:products.find(p=>p.id===id),qty})).filter(x=>x.product);
 cartCount.textContent=e.reduce((s,i)=>s+i.qty,0);
 if(!e.length){cartList.innerHTML='<div class="empty">Tu carrito está vacío.</div>';cartTotal.textContent='A confirmar';return}
 cartList.innerHTML=e.map(i=>'<div class="cart-row"><div><strong>'+i.product.name+'</strong><small>Cantidad: '+i.qty+'</small><div class="mini-qty"><button onclick="change(\''+i.product.id+'\',-1)">−</button><button onclick="change(\''+i.product.id+'\',1)">+</button></div></div><button class="remove" onclick="removeItem(\''+i.product.id+'\')">Quitar</button></div>').join('');
 cartTotal.textContent='A confirmar';
}
window.change=(id,d)=>{if(!cart[id])return;cart[id]+=d;if(cart[id]<=0)delete cart[id];render()};
window.removeItem=id=>{delete cart[id];render()};
function message(country){
 const e=Object.entries(cart).map(([id,qty])=>({product:products.find(p=>p.id===id),qty})).filter(x=>x.product);
 if(!e.length){alert('Agrega al menos un producto antes de finalizar.');return null}
 return encodeURIComponent(['Hola La Koreanita, quiero consultar este pedido desde la web:','',...e.map(i=>'• '+i.product.name+' x'+i.qty),'','Atención: '+country,'','Por favor confirmar stock, valor en moneda local, pago y entrega.','','Nombre:','Ciudad:'].join('\n'))
}
document.getElementById('waChile').onclick=()=>{const m=message('Chile');if(m)window.open('https://wa.me/56929954812?text='+m,'_blank')};
document.getElementById('waBolivia').onclick=()=>{const m=message('Bolivia');if(m)window.open('https://wa.me/59178373242?text='+m,'_blank')};
const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');if(menu)menu.onclick=()=>links.classList.toggle('open');if(links)links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
render();