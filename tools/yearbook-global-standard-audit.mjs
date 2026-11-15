#!/usr/bin/env node
import fs from "node:fs";
const WRITE=process.argv.includes("--write"),FILE="index.html",TAG='  <script src="./assets/yearbook-global-standard-v1.js" defer data-yearbook-global-standard="16-33-66-chrome-semantics"></script>\n',RE=/yearbook-global-standard-v1\.js/i;
let s=fs.readFileSync(FILE,"utf8"),changed=0;
if(!RE.test(s)&&WRITE){s=/<\/head>/i.test(s)?s.replace(/<\/head>/i,TAG+"</head>"):TAG+s;fs.writeFileSync(FILE,s);changed=1}
const g=fs.readFileSync("assets/yearbook-global-standard-v1.js","utf8");
const failures=[["16",/n<16/],["33",/font-size:33px!important/],["66",/font-size:66px!important/],["333",/vnv-333-ticker\.js/],["auto",/vnv-ticker-autopopulate\.js/],["header",/vnv-header-autopopulate\.js/],["toolbar",/vnv-ecosystem-toolbar\.js/],["semantic",/khaemenesHierarchy="title-description-v1"/]].filter(([,r])=>!r.test(g)).map(([n])=>n);
console.log(JSON.stringify({mode:WRITE?"write":"check",publicYearbook:"index.html",covered:RE.test(s)||!!changed,changed,specializedMiniCloudExcluded:true,assertionFailures:failures},null,2));
if(failures.length)process.exitCode=1;