/*! For license information please see 108-4fa88d555738b10f5a69.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[108],{2362:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>d});var t=r(1379),i=r(5315),o=r(400),a=r(4522);function s(e){let n;return{c(){n=(0,t.bG)("div"),(0,t.Lj)(n,"id",e[0])},m(e,r){(0,t.$T)(e,n,r)},p:t.ZT,i:t.ZT,o:t.ZT,d(e){e&&(0,t.og)(n)}}}function l(e){let n,r={membershipStatus:{name:"hasmembership",value:0},locale:{name:"locale",value:a.Z.locale}},t=[],s=null,l=`PlasmaPromotionWrapper-${a.Z.reviveConfig.zoneId}`;return(0,o.H3)((()=>{t.push({id:a.Z.reviveConfig.zoneId,wrapper:`PlasmaPromotionWrapper-${a.Z.reviveConfig.zoneId}`,zone:`<div class="js-revive-banner-container"><ins data-revive-zoneid="${a.Z.reviveConfig.zoneId}" data-revive-id="${a.Z.reviveConfig.hash}"></ins></div>`}),function(){if(!t.length)return!1;window.reviveAsync={};const e=String(Date.now()).valueOf();s=new i.ZP,t.forEach((t=>{const i=document.getElementById(l);if(null===i||i.length<1)return!1;const o=document.createElement("script"),c=(new DOMParser).parseFromString(t.zone,"text/html").body.childNodes[0],d=c.querySelector("ins");for(const e in r){const n=r[e];n.value=String(n.value).valueOf(),d.setAttribute(`data-revive-${n.name}`,n.value)}c.querySelector("ins").remove(),c.insertBefore(d,c.firstChild),i.insertBefore(c,i.firstChild),o.src=`${a.Z.reviveConfig.url}?${e}`,o.id="promotion_initiator",o.async=!0,o.onerror=function(){throw new Error("Banner insert script is lost")},document.body.lastChild.parentElement.append(o),n||(document.documentElement.addEventListener("bannerScriptLoadEvent",(()=>{!function(e){if(1!==e.childNodes.length)return;s.run()}(i)})),n=!0)}))}()})),[l]}class c extends t.f_{constructor(e){super(),(0,t.S1)(this,e,l,s,t.N8,{})}}const d=c},1616:()=>{}}]);