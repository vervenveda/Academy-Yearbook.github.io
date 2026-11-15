(()=>{"use strict";
if(window.__KHAEMENES_YEARBOOK_STANDARD_V1__)return;
window.__KHAEMENES_YEARBOOK_STANDARD_V1__=true;
const VNV="https://vervenveda.com/assets/",STYLE="khaemenesYearbookTypographyV1",PRIMARY="data-khaemenes-primary-title";
const scripts={t333:VNV+"vnv-333-ticker.js",auto:VNV+"vnv-ticker-autopopulate.js",header:VNV+"vnv-header-autopopulate.js",toolbar:VNV+"vnv-ecosystem-toolbar.js"};
function hasScript(p){return [...document.scripts].some(s=>{try{return new URL(s.src,location.href).pathname===p}catch{return false}})}
function load(src,k){const u=new URL(src,location.href);if(hasScript(u.pathname))return Promise.resolve();return new Promise(r=>{const s=document.createElement("script");s.src=u.href;s.defer=true;s.dataset[k]="true";s.onload=r;s.onerror=r;(document.head||document.documentElement).append(s)})}
function visible(el){if(!el||!el.isConnected||el.hidden)return false;const cs=getComputedStyle(el);return cs.display!=="none"&&cs.visibility!=="hidden"}
function markPrimary(){document.querySelectorAll("["+PRIMARY+"]").forEach(e=>e.removeAttribute(PRIMARY));const h=[...document.querySelectorAll("main .hero h1,main h1,.hero h1,h1,.page-title,.hero-title")].find(visible);if(h)h.setAttribute(PRIMARY,"true")}
function readable(el){return el&&el.nodeType===1&&!el.matches("script,style,noscript,template,svg,svg *,canvas,iframe,br,hr,source,track,meta,link")&&([...el.childNodes].some(n=>n.nodeType===Node.TEXT_NODE&&String(n.nodeValue||"").trim())||el.matches("input,select,textarea,button,option"))}
function floor(){for(const el of [document.body,...document.body.querySelectorAll("*")]){if(!readable(el)||el.matches("h1,h2,h3,h4,h5,h6,[role=heading],["+PRIMARY+"]"))continue;const n=parseFloat(getComputedStyle(el).fontSize||"0");if(n>0&&n<16)el.style.setProperty("font-size","16px","important")}}
function typography(){if(!document.getElementById(STYLE)){const s=document.createElement("style");s.id=STYLE;s.textContent=`
html:root body{font-size:16px!important}
html:root body :is(p,li,dt,dd,blockquote,figcaption,caption,legend,label,a,button,input,select,textarea,option,output,td,th,summary,small,strong,em,b,i,u,s,mark,time,.eyebrow,.kicker,.subtitle,.lead,.description,.hint,.status,.counter){font-size:max(16px,1em)!important}
html:root body :is(h1,h2,h3,h4,h5,h6,[role="heading"],.page-title,.hero-title,.main-title,.section-title,.card-title,.modal-title,.dialog-title){font-size:33px!important;line-height:1.2!important;font-weight:400!important;overflow-wrap:anywhere;text-wrap:balance}
html:root body [${PRIMARY}="true"]{font-size:66px!important;line-height:1.05!important;font-weight:400!important}
`;document.head.append(s)}markPrimary();floor();document.documentElement.dataset.khaemenesYearbookTypography="16-33-66"}
const clean=s=>String(s||"").replace(/\s+/g," ").trim(),words=s=>clean(s).split(/\s+/).filter(Boolean);
const brand=s=>/^(?:verve\s*n\s*veda|khaemenes academy)(?:\b|\s*[·|—-])/i.test(clean(s));
const title=s=>{const t=clean(s),w=words(t);return t&&t.length<=100&&w.length<=10&&!/[.!?…]$/.test(t)};
const sentence=s=>{const t=clean(s),w=words(t);return /[.!?…]$/.test(t)||w.length>=9||(w.length>=6&&/[,;:]/.test(t))};
function semantics(){document.querySelectorAll(".eyebrow,.kicker,[data-eyebrow],[data-kicker]").forEach(l=>{if(l.dataset.khaemenesHierarchyChecked==="true")return;l.dataset.khaemenesHierarchyChecked="true";const h=l.nextElementSibling;if(!h||!/^H[1-6]$/.test(h.tagName)||l.children.length||h.children.length)return;const e=clean(l.textContent),q=clean(h.textContent);if(!sentence(q)||!title(e))return;if(brand(e)){h.dataset.khaemenesHierarchyReview="brand-eyebrow-sentence-heading";return}const p=document.createElement("p");p.className="khaemenes-section-description";p.textContent=q;h.textContent=e;l.textContent="Khaemenes Academy";h.insertAdjacentElement("afterend",p)});document.documentElement.dataset.khaemenesHierarchy="title-description-v1"}
function m333(){try{window.VNV333Ticker?.mount?.()}catch{}}
function mauto(){try{if(!document.getElementById("vnvTickerAutoPopulate"))window.VNV_TICKER?.autoPopulate?.({mode:"auto"})}catch{}m333()}
function mheader(){try{window.VNV_HEADER?.mount?.({title:"Khaemenes Academy",subtitle:"Yearbook · Student Creative Studio",icon:"K",home:"https://vervenveda.com/KhaemenesAcademy_Home.github.io/"})}catch{}}
function mtoolbar(){try{window.VNVEcosystemToolbar?.mount?.()}catch{}}
let pending=false;function schedule(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;typography();semantics();m333();mauto();mheader();mtoolbar()})}
async function start(){typography();semantics();await load(scripts.t333,"yearbook333");m333();await load(scripts.auto,"yearbookAuto");mauto();await load(scripts.header,"yearbookHeader");mheader();await load(scripts.toolbar,"yearbookToolbar");mtoolbar();document.documentElement.dataset.khaemenesYearbookChrome="333-auto-header-menu-toolbar";new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true})}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();