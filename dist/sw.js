if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const u=s=>i(s,l),o={module:{uri:l},exports:t,require:u};e[l]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(r(...s),t)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-56d4fbba.js",revision:null},{url:"assets/hardware-back-button-77fd2980.js",revision:null},{url:"assets/index-0abccf6f.js",revision:null},{url:"assets/index-5946572b.css",revision:null},{url:"assets/index8-33400430.js",revision:null},{url:"assets/index9-d44a4a6d.js",revision:null},{url:"assets/input-shims-9fabfec1.js",revision:null},{url:"assets/ios.transition-6e118094.js",revision:null},{url:"assets/keyboard2-78b51126.js",revision:null},{url:"assets/md.transition-ae5d1b00.js",revision:null},{url:"assets/status-tap-652f2b23.js",revision:null},{url:"assets/swipe-back-5451b33a.js",revision:null},{url:"index.html",revision:"049b7e54909c63a0c1523a6f5ffafeb4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"bb40a8d146b4d26e3925913ec9ce23dc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
