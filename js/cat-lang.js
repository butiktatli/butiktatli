/* Butiktatli — category page i18n v1
   Requires: window.CAT_PAGE = { tr:{...}, en:{...} } defined before this script loads */
(function(){
var qs=function(s){return document.querySelector(s);};
var qsa=function(s){return Array.from(document.querySelectorAll(s));};

var C={
  tr:{
    about:'Hakkında',
    courses:'Eğitimler',
    cats:'Pasta Siparişi',
    gallery:'Galeri',
    reviews:'Yorumlar',
    contact:'İletişim',
    allTypes:'Tüm Çeşitler',
    orderBtn:'Sipariş Ver',
    waOrder:'WhatsApp\'tan Sipariş Ver',
    home:'Anasayfa',
    otherCats:'Diğer Pasta Çeşitleri',
    kicker:'Özel Sipariş',
    footerP:'Butik tatlı satışları ve pastacılık eğitimleri: makaron, cupcake ve tasarım pastalar.',
    footerOrder:'Pasta Siparişi',
    catNames:{
      'anneler-gunu-pastasi.html':'Anneler Günü Pastası',
      'dogum-gunu-pastasi.html':'Doğum Günü Pastası',
      'nisan-pastasi.html':'Söz / Nişan Pastası',
      'cupcake.html':'Cupcake',
      'makaron.html':'Butik Makaron',
      'cocuk-pastasi.html':'Çocuk Pastaları',
      'cicekli-pasta.html':'Çiçekli Pastalar',
      'kremali-pasta.html':'Kremalı Pastalar',
      'resim-baski-pasta.html':'Resim Baskılı Pastalar',
      'sevgililer-gunu-pastasi.html':'Sevgililer Günü Pastaları',
      'taraftar-spor-pastasi.html':'Taraftar ve Spor Pastaları',
      'vegan-pasta.html':'Vegan Pastalar',
      'cakepops.html':'Cake Pops'
    }
  },
  en:{
    about:'About',
    courses:'Classes',
    cats:'Order a Cake',
    gallery:'Gallery',
    reviews:'Reviews',
    contact:'Contact',
    allTypes:'All Types',
    orderBtn:'Order Now',
    waOrder:'Order on WhatsApp',
    home:'Home',
    otherCats:'Other Cake Types',
    kicker:'Custom Order',
    footerP:'Boutique dessert sales and pastry classes: macarons, cupcakes and design cakes.',
    footerOrder:'Order a Cake',
    catNames:{
      'anneler-gunu-pastasi.html':"Mother's Day Cake",
      'dogum-gunu-pastasi.html':'Birthday Cake',
      'nisan-pastasi.html':'Engagement Cake',
      'cupcake.html':'Cupcake',
      'makaron.html':'Boutique Macarons',
      'cocuk-pastasi.html':"Kids' Cakes",
      'cicekli-pasta.html':'Floral Cakes',
      'kremali-pasta.html':'Cream Cakes',
      'resim-baski-pasta.html':'Photo Print Cakes',
      'sevgililer-gunu-pastasi.html':"Valentine's Day Cakes",
      'taraftar-spor-pastasi.html':'Fan & Sports Cakes',
      'vegan-pasta.html':'Vegan Cakes',
      'cakepops.html':'Cake Pops'
    }
  }
};

function applyLang(l){
  var c=C[l]||C.tr;
  var p=(window.CAT_PAGE&&window.CAT_PAGE[l])||{};
  localStorage.setItem('butiktatli_lang',l);

  qsa('#langTR,#langTR_m').forEach(function(b){b.classList.toggle('active',l==='tr');});
  qsa('#langEN,#langEN_m').forEach(function(b){b.classList.toggle('active',l==='en');});

  var el;

  /* Desktop nav */
  el=qs('.nav-links a[href="index.html#about"]');if(el)el.textContent=c.about;
  el=qs('.nav-links a[href="index.html#courses"]');if(el)el.textContent=c.courses;
  el=qs('.nav-dropdown-trigger');if(el)el.innerHTML=c.cats+' <i class="bi bi-chevron-down"></i>';
  el=qs('.nav-links a[href="index.html#gallery"]');if(el)el.textContent=c.gallery;
  el=qs('.nav-links a[href="index.html#reviews"]');if(el)el.textContent=c.reviews;
  el=qs('.nav-links a[href="index.html#contact"]');if(el)el.textContent=c.contact;

  /* Dropdown items */
  qsa('.nav-dropdown-menu a[href]').forEach(function(a){
    var href=a.getAttribute('href'),icon=a.querySelector('i');
    if(c.catNames[href]&&icon)a.innerHTML=icon.outerHTML+' '+c.catNames[href];
    else if(href==='index.html#satis'&&icon)a.innerHTML=icon.outerHTML+' '+c.allTypes;
  });

  /* Nav order button */
  el=qs('.nav-actions .btn-wa span');if(el)el.textContent=c.orderBtn;

  /* Mobile panel links */
  el=qs('#mobilePanel a[href="index.html#about"]');if(el)el.innerHTML=c.about+' <i class="bi bi-arrow-right"></i>';
  el=qs('#mobilePanel a[href="index.html#courses"]');if(el)el.innerHTML=c.courses+' <i class="bi bi-arrow-right"></i>';
  el=qs('#mobilePanel a[href="index.html#gallery"]');if(el)el.innerHTML=c.gallery+' <i class="bi bi-arrow-right"></i>';
  el=qs('#mobilePanel a[href="index.html#reviews"]');if(el)el.innerHTML=c.reviews+' <i class="bi bi-arrow-right"></i>';
  el=qs('#mobilePanel a[href="index.html#contact"]');if(el)el.innerHTML=c.contact+' <i class="bi bi-arrow-right"></i>';

  /* Mobile submenu trigger */
  el=qs('.mobile-submenu-trigger');if(el)el.innerHTML=c.cats+' <i class="bi bi-chevron-down"></i>';

  /* Mobile submenu items */
  qsa('.mobile-submenu-list a[href]').forEach(function(a){
    var href=a.getAttribute('href'),icon=a.querySelector('i');
    if(c.catNames[href]&&icon)a.innerHTML=icon.outerHTML+' '+c.catNames[href];
    else if(href==='index.html#satis'&&icon)a.innerHTML=icon.outerHTML+' '+c.allTypes;
  });

  /* Mobile WA button */
  el=qs('.mobile-wa-btn');if(el)el.innerHTML='<i class="bi bi-whatsapp"></i> '+c.waOrder;

  /* Breadcrumb */
  el=qs('.breadcrumb a');if(el)el.textContent=c.home;
  var bc=qs('.breadcrumb');
  if(bc&&p.breadcrumb){
    Array.from(bc.childNodes).forEach(function(n){
      if(n.nodeType===3&&n.textContent.indexOf('›')!==-1)n.textContent=' › '+p.breadcrumb;
    });
  }

  /* Kicker text node */
  var kicker=qs('.cat-hero .kicker');
  if(kicker){
    Array.from(kicker.childNodes).forEach(function(n){
      if(n.nodeType===3&&n.textContent.trim())n.textContent=' '+c.kicker;
    });
  }

  /* Hero h1 and paragraph */
  if(p.h1){el=qs('.cat-hero h1');if(el)el.textContent=p.h1;}
  if(p.heroP){el=qs('.cat-hero>p');if(el)el.textContent=p.heroP;}

  /* Hero WA button */
  el=qs('.cat-hero .btn-wa');if(el)el.innerHTML='<i class="bi bi-whatsapp"></i> '+c.waOrder;

  /* cat-desc section */
  if(p.descH2){el=qs('.cat-desc h2');if(el)el.textContent=p.descH2;}
  if(p.descPs){
    var dp=qsa('.cat-desc p');
    p.descPs.forEach(function(t,i){if(dp[i])dp[i].innerHTML=t;});
  }

  /* cat-cta section */
  if(p.ctaH2){el=qs('.cat-cta h2');if(el)el.textContent=p.ctaH2;}
  if(p.ctaP){el=qs('.cat-cta p');if(el)el.textContent=p.ctaP;}

  /* Related cats */
  el=qs('.related-cats h2');if(el)el.textContent=c.otherCats;
  qsa('.related-grid a[href]').forEach(function(a){
    var href=a.getAttribute('href');
    if(c.catNames[href])a.textContent=c.catNames[href];
  });

  /* Footer */
  el=qs('.footer-brand p');if(el)el.textContent=c.footerP;
  el=qs('.footer-links a[href="index.html"]');if(el)el.textContent=c.home;
  el=qs('.footer-links a[href="index.html#courses"]');if(el)el.textContent=c.courses;
  el=qs('.footer-links a[href="index.html#satis"]');if(el)el.textContent=c.footerOrder;
  el=qs('.footer-links a[href="index.html#contact"]');if(el)el.textContent=c.contact;

  /* Document title */
  if(p.title)document.title=p.title;
}

/* Lang button event listeners */
var lTR=qs('#langTR'),lEN=qs('#langEN'),lTR_m=qs('#langTR_m'),lEN_m=qs('#langEN_m');
if(lTR)lTR.addEventListener('click',function(){applyLang('tr');});
if(lEN)lEN.addEventListener('click',function(){applyLang('en');});
if(lTR_m)lTR_m.addEventListener('click',function(){applyLang('tr');});
if(lEN_m)lEN_m.addEventListener('click',function(){applyLang('en');});

/* Initialize from stored preference */
applyLang(localStorage.getItem('butiktatli_lang')||'tr');

/* Always scroll to top on page load/refresh */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('load', function(){ window.scrollTo(0, 0); });
})();
