var Sf=Object.defineProperty;var Ec=n=>{throw TypeError(n)};var Ef=(n,t,e)=>t in n?Sf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Bn=(n,t,e)=>Ef(n,typeof t!="symbol"?t+"":t,e),so=(n,t,e)=>t.has(n)||Ec("Cannot "+e);var G=(n,t,e)=>(so(n,t,"read from private field"),e?e.call(n):t.get(n)),Vt=(n,t,e)=>t.has(n)?Ec("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Gt=(n,t,e,i)=>(so(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),Be=(n,t,e)=>(so(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const zo=!1;var Wu=Array.isArray,yf=Array.prototype.indexOf,as=Array.prototype.includes,Ka=Array.from,Tf=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,bf=Object.getOwnPropertyDescriptors,Af=Object.prototype,wf=Array.prototype,Xu=Object.getPrototypeOf,yc=Object.isExtensible;function Rf(n){return n()}function ko(n){for(var t=0;t<n.length;t++)n[t]()}function qu(){var n,t,e=new Promise((i,r)=>{n=i,t=r});return{promise:e,resolve:n,reject:t}}const Ne=2,Ba=4,Ws=8,Yu=1<<24,_i=16,Fn=32,yr=64,Gl=128,vn=512,Re=1024,Fe=2048,Nn=4096,sn=8192,Ui=16384,Vl=32768,os=65536,Tc=1<<17,ju=1<<18,vs=1<<19,Zu=1<<20,ui=1<<25,_r=32768,Ho=1<<21,Wl=1<<22,Ii=1<<23,qr=Symbol("$state"),Gr=new class extends Error{constructor(){super(...arguments);Bn(this,"name","StaleReactionError");Bn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Ku(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Cf(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Pf(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Df(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Lf(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Uf(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function If(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Nf(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ff(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Of(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Bf=1,zf=2,$u=4,kf=8,Hf=16,Gf=1,Vf=2,Pe=Symbol();function Wf(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ju(n){return n===this.v}function Xf(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Qu(n){return!Xf(n,this.v)}let Xs=!1,qf=!1;function Yf(){Xs=!0}let ve=null;function ls(n){ve=n}function Gi(n,t=!1,e){ve={p:ve,i:!1,c:null,e:null,s:n,x:null,l:Xs&&!t?{s:null,u:null,$:[]}:null}}function Vi(n){var t=ve,e=t.e;if(e!==null){t.e=null;for(var i of e)vh(i)}return t.i=!0,ve=t.p,{}}function qs(){return!Xs||ve!==null&&ve.l===null}let Vr=[];function jf(){var n=Vr;Vr=[],ko(n)}function Ni(n){if(Vr.length===0){var t=Vr;queueMicrotask(()=>{t===Vr&&jf()})}Vr.push(n)}function th(n){var t=se;if(t===null)return qt.f|=Ii,n;if(t.f&Vl)cs(n,t);else{if(!(t.f&Gl))throw n;t.b.error(n)}}function cs(n,t){for(;t!==null;){if(t.f&Gl)try{t.b.error(n);return}catch(e){n=e}t=t.parent}throw n}const Zf=-7169;function xe(n,t){n.f=n.f&Zf|t}function Xl(n){n.f&vn||n.deps===null?xe(n,Re):xe(n,Nn)}function eh(n){if(n!==null)for(const t of n)!(t.f&Ne)||!(t.f&_r)||(t.f^=_r,eh(t.deps))}function nh(n,t,e){n.f&Fe?t.add(n):n.f&Nn&&e.add(n),eh(n.deps),xe(n,Re)}const na=new Set;let re=null,Le=null,Rn=[],ql=null,Go=!1;var Qr,ts,or,es,ks,Hs,lr,ai,ns,Zn,Vo,Wo,ih;const dc=class dc{constructor(){Vt(this,Zn);Bn(this,"committed",!1);Bn(this,"current",new Map);Bn(this,"previous",new Map);Vt(this,Qr,new Set);Vt(this,ts,new Set);Vt(this,or,0);Vt(this,es,0);Vt(this,ks,null);Vt(this,Hs,new Set);Vt(this,lr,new Set);Vt(this,ai,new Map);Bn(this,"is_fork",!1);Vt(this,ns,!1)}is_deferred(){return this.is_fork||G(this,es)>0}skip_effect(t){G(this,ai).has(t)||G(this,ai).set(t,{d:[],m:[]})}unskip_effect(t){var e=G(this,ai).get(t);if(e){G(this,ai).delete(t);for(var i of e.d)xe(i,Fe),Dn(i);for(i of e.m)xe(i,Nn),Dn(i)}}process(t){var r;Rn=[],this.apply();var e=[],i=[];for(const s of t)Be(this,Zn,Vo).call(this,s,e,i);if(this.is_deferred()){Be(this,Zn,Wo).call(this,i),Be(this,Zn,Wo).call(this,e);for(const[s,a]of G(this,ai))ah(s,a)}else{for(const s of G(this,Qr))s();G(this,Qr).clear(),G(this,or)===0&&Be(this,Zn,ih).call(this),re=null,bc(i),bc(e),(r=G(this,ks))==null||r.resolve()}Le=null}capture(t,e){e!==Pe&&!this.previous.has(t)&&this.previous.set(t,e),t.f&Ii||(this.current.set(t,t.v),Le==null||Le.set(t,t.v))}activate(){re=this,this.apply()}deactivate(){re===this&&(re=null,Le=null)}flush(){if(this.activate(),Rn.length>0){if(Kf(),re!==null&&re!==this)return}else G(this,or)===0&&this.process([]);this.deactivate()}discard(){for(const t of G(this,ts))t(this);G(this,ts).clear()}increment(t){Gt(this,or,G(this,or)+1),t&&Gt(this,es,G(this,es)+1)}decrement(t){Gt(this,or,G(this,or)-1),t&&Gt(this,es,G(this,es)-1),!G(this,ns)&&(Gt(this,ns,!0),Ni(()=>{Gt(this,ns,!1),this.is_deferred()?Rn.length>0&&this.flush():this.revive()}))}revive(){for(const t of G(this,Hs))G(this,lr).delete(t),xe(t,Fe),Dn(t);for(const t of G(this,lr))xe(t,Nn),Dn(t);this.flush()}oncommit(t){G(this,Qr).add(t)}ondiscard(t){G(this,ts).add(t)}settled(){return(G(this,ks)??Gt(this,ks,qu())).promise}static ensure(){if(re===null){const t=re=new dc;na.add(re),Ni(()=>{re===t&&t.flush()})}return re}apply(){}};Qr=new WeakMap,ts=new WeakMap,or=new WeakMap,es=new WeakMap,ks=new WeakMap,Hs=new WeakMap,lr=new WeakMap,ai=new WeakMap,ns=new WeakMap,Zn=new WeakSet,Vo=function(t,e,i){t.f^=Re;for(var r=t.first,s=null;r!==null;){var a=r.f,o=(a&(Fn|yr))!==0,l=o&&(a&Re)!==0,c=l||(a&sn)!==0||G(this,ai).has(r);if(!c&&r.fn!==null){o?r.f^=Re:s!==null&&a&(Ba|Ws|Yu)?s.b.defer_effect(r):a&Ba?e.push(r):js(r)&&(a&_i&&G(this,lr).add(r),Bs(r));var u=r.first;if(u!==null){r=u;continue}}var p=r.parent;for(r=r.next;r===null&&p!==null;)p===s&&(s=null),r=p.next,p=p.parent}},Wo=function(t){for(var e=0;e<t.length;e+=1)nh(t[e],G(this,Hs),G(this,lr))},ih=function(){var r;if(na.size>1){this.previous.clear();var t=Le,e=!0;for(const s of na){if(s===this){e=!1;continue}const a=[];for(const[l,c]of this.current){if(s.current.has(l))if(e&&c!==s.current.get(l))s.current.set(l,c);else continue;a.push(l)}if(a.length===0)continue;const o=[...s.current.keys()].filter(l=>!this.current.has(l));if(o.length>0){var i=Rn;Rn=[];const l=new Set,c=new Map;for(const u of a)rh(u,o,l,c);if(Rn.length>0){re=s,s.apply();for(const u of Rn)Be(r=s,Zn,Vo).call(r,u,[],[]);s.deactivate()}Rn=i}}re=null,Le=t}this.committed=!0,na.delete(this)};let Fi=dc;function Kf(){Go=!0;var n=null;try{for(var t=0;Rn.length>0;){var e=Fi.ensure();if(t++>1e3){var i,r;$f()}e.process(Rn),Oi.clear()}}finally{Go=!1,ql=null}}function $f(){try{Uf()}catch(n){cs(n,ql)}}let wn=null;function bc(n){var t=n.length;if(t!==0){for(var e=0;e<t;){var i=n[e++];if(!(i.f&(Ui|sn))&&js(i)&&(wn=new Set,Bs(i),i.deps===null&&i.first===null&&i.nodes===null&&(i.teardown===null&&i.ac===null?Eh(i):i.fn=null),(wn==null?void 0:wn.size)>0)){Oi.clear();for(const r of wn){if(r.f&(Ui|sn))continue;const s=[r];let a=r.parent;for(;a!==null;)wn.has(a)&&(wn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];l.f&(Ui|sn)||Bs(l)}}wn.clear()}}wn=null}}function rh(n,t,e,i){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;s&Ne?rh(r,t,e,i):s&(Wl|_i)&&!(s&Fe)&&sh(r,t,i)&&(xe(r,Fe),Dn(r))}}function sh(n,t,e){const i=e.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(as.call(t,r))return!0;if(r.f&Ne&&sh(r,t,e))return e.set(r,!0),!0}return e.set(n,!1),!1}function Dn(n){for(var t=ql=n;t.parent!==null;){t=t.parent;var e=t.f;if(Go&&t===se&&e&_i&&!(e&ju))return;if(e&(yr|Fn)){if(!(e&Re))return;t.f^=Re}}Rn.push(t)}function ah(n,t){if(!(n.f&Fn&&n.f&Re)){n.f&Fe?t.d.push(n):n.f&Nn&&t.m.push(n),xe(n,Re);for(var e=n.first;e!==null;)ah(e,t),e=e.next}}function Jf(n){let t=0,e=gr(0),i;return()=>{Zl()&&(Rt(e),xh(()=>(t===0&&(i=Zs(()=>n(()=>Os(e)))),t+=1,()=>{Ni(()=>{t-=1,t===0&&(i==null||i(),i=void 0,Os(e))})})))}}var Qf=os|vs|Gl;function td(n,t,e){new ed(n,t,e)}var hn,Hl,kn,cr,Hn,fn,Ye,Gn,oi,Ci,ur,Pi,is,hr,rs,ss,li,ja,Ce,nd,id,Xo,Ra,Ca,qo;class ed{constructor(t,e,i){Vt(this,Ce);Bn(this,"parent");Bn(this,"is_pending",!1);Vt(this,hn);Vt(this,Hl,null);Vt(this,kn);Vt(this,cr);Vt(this,Hn);Vt(this,fn,null);Vt(this,Ye,null);Vt(this,Gn,null);Vt(this,oi,null);Vt(this,Ci,null);Vt(this,ur,0);Vt(this,Pi,0);Vt(this,is,!1);Vt(this,hr,!1);Vt(this,rs,new Set);Vt(this,ss,new Set);Vt(this,li,null);Vt(this,ja,Jf(()=>(Gt(this,li,gr(G(this,ur))),()=>{Gt(this,li,null)})));Gt(this,hn,t),Gt(this,kn,e),Gt(this,cr,i),this.parent=se.b,this.is_pending=!!G(this,kn).pending,Gt(this,Hn,Kl(()=>{se.b=this;{var r=Be(this,Ce,Xo).call(this);try{Gt(this,fn,pn(()=>i(r)))}catch(s){this.error(s)}G(this,Pi)>0?Be(this,Ce,Ca).call(this):this.is_pending=!1}return()=>{var s;(s=G(this,Ci))==null||s.remove()}},Qf))}defer_effect(t){nh(t,G(this,rs),G(this,ss))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!G(this,kn).pending}update_pending_count(t){Be(this,Ce,qo).call(this,t),Gt(this,ur,G(this,ur)+t),!(!G(this,li)||G(this,is))&&(Gt(this,is,!0),Ni(()=>{Gt(this,is,!1),G(this,li)&&us(G(this,li),G(this,ur))}))}get_effect_pending(){return G(this,ja).call(this),Rt(G(this,li))}error(t){var e=G(this,kn).onerror;let i=G(this,kn).failed;if(G(this,hr)||!e&&!i)throw t;G(this,fn)&&(Ze(G(this,fn)),Gt(this,fn,null)),G(this,Ye)&&(Ze(G(this,Ye)),Gt(this,Ye,null)),G(this,Gn)&&(Ze(G(this,Gn)),Gt(this,Gn,null));var r=!1,s=!1;const a=()=>{if(r){Wf();return}r=!0,s&&Of(),Fi.ensure(),Gt(this,ur,0),G(this,Gn)!==null&&dr(G(this,Gn),()=>{Gt(this,Gn,null)}),this.is_pending=this.has_pending_snippet(),Gt(this,fn,Be(this,Ce,Ra).call(this,()=>(Gt(this,hr,!1),pn(()=>G(this,cr).call(this,G(this,hn)))))),G(this,Pi)>0?Be(this,Ce,Ca).call(this):this.is_pending=!1};Ni(()=>{try{s=!0,e==null||e(t,a),s=!1}catch(o){cs(o,G(this,Hn)&&G(this,Hn).parent)}i&&Gt(this,Gn,Be(this,Ce,Ra).call(this,()=>{Fi.ensure(),Gt(this,hr,!0);try{return pn(()=>{i(G(this,hn),()=>t,()=>a)})}catch(o){return cs(o,G(this,Hn).parent),null}finally{Gt(this,hr,!1)}}))})}}hn=new WeakMap,Hl=new WeakMap,kn=new WeakMap,cr=new WeakMap,Hn=new WeakMap,fn=new WeakMap,Ye=new WeakMap,Gn=new WeakMap,oi=new WeakMap,Ci=new WeakMap,ur=new WeakMap,Pi=new WeakMap,is=new WeakMap,hr=new WeakMap,rs=new WeakMap,ss=new WeakMap,li=new WeakMap,ja=new WeakMap,Ce=new WeakSet,nd=function(){try{Gt(this,fn,pn(()=>G(this,cr).call(this,G(this,hn))))}catch(t){this.error(t)}},id=function(){const t=G(this,kn).pending;t&&(Gt(this,Ye,pn(()=>t(G(this,hn)))),Ni(()=>{var e=Be(this,Ce,Xo).call(this);Gt(this,fn,Be(this,Ce,Ra).call(this,()=>(Fi.ensure(),pn(()=>G(this,cr).call(this,e))))),G(this,Pi)>0?Be(this,Ce,Ca).call(this):(dr(G(this,Ye),()=>{Gt(this,Ye,null)}),this.is_pending=!1)}))},Xo=function(){var t=G(this,hn);return this.is_pending&&(Gt(this,Ci,di()),G(this,hn).before(G(this,Ci)),t=G(this,Ci)),t},Ra=function(t){var e=se,i=qt,r=ve;Yn(G(this,Hn)),Mn(G(this,Hn)),ls(G(this,Hn).ctx);try{return t()}catch(s){return th(s),null}finally{Yn(e),Mn(i),ls(r)}},Ca=function(){const t=G(this,kn).pending;G(this,fn)!==null&&(Gt(this,oi,document.createDocumentFragment()),G(this,oi).append(G(this,Ci)),bh(G(this,fn),G(this,oi))),G(this,Ye)===null&&Gt(this,Ye,pn(()=>t(G(this,hn))))},qo=function(t){var e;if(!this.has_pending_snippet()){this.parent&&Be(e=this.parent,Ce,qo).call(e,t);return}if(Gt(this,Pi,G(this,Pi)+t),G(this,Pi)===0){this.is_pending=!1;for(const i of G(this,rs))xe(i,Fe),Dn(i);for(const i of G(this,ss))xe(i,Nn),Dn(i);G(this,rs).clear(),G(this,ss).clear(),G(this,Ye)&&dr(G(this,Ye),()=>{Gt(this,Ye,null)}),G(this,oi)&&(G(this,hn).before(G(this,oi)),Gt(this,oi,null))}};function rd(n,t,e,i){const r=qs()?Yl:oh;var s=n.filter(h=>!h.settled);if(e.length===0&&s.length===0){i(t.map(r));return}var a=re,o=se,l=sd(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function u(h){l();try{i(h)}catch(m){o.f&Ui||cs(m,o)}a==null||a.deactivate(),Yo()}if(e.length===0){c.then(()=>u(t.map(r)));return}function p(){l(),Promise.all(e.map(h=>ad(h))).then(h=>u([...t.map(r),...h])).catch(h=>cs(h,o))}c?c.then(p):p()}function sd(){var n=se,t=qt,e=ve,i=re;return function(s=!0){Yn(n),Mn(t),ls(e),s&&(i==null||i.activate())}}function Yo(){Yn(null),Mn(null),ls(null)}function Yl(n){var t=Ne|Fe,e=qt!==null&&qt.f&Ne?qt:null;return se!==null&&(se.f|=vs),{ctx:ve,deps:null,effects:null,equals:Ju,f:t,fn:n,reactions:null,rv:0,v:Pe,wv:0,parent:e??se,ac:null}}function ad(n,t,e){let i=se;i===null&&Cf();var r=i.b,s=void 0,a=gr(Pe),o=!qt,l=new Map;return vd(()=>{var m;var c=qu();s=c.promise;try{Promise.resolve(n()).then(c.resolve,c.reject).then(()=>{u===re&&u.committed&&u.deactivate(),Yo()})}catch(_){c.reject(_),Yo()}var u=re;if(o){var p=r.is_rendered();r.update_pending_count(1),u.increment(p),(m=l.get(u))==null||m.reject(Gr),l.delete(u),l.set(u,c)}const h=(_,v=void 0)=>{if(u.activate(),v)v!==Gr&&(a.f|=Ii,us(a,v));else{a.f&Ii&&(a.f^=Ii),us(a,_);for(const[d,f]of l){if(l.delete(d),d===u)break;f.reject(Gr)}}o&&(r.update_pending_count(-1),u.decrement(p))};c.promise.then(h,_=>h(null,_||"unknown"))}),pd(()=>{for(const c of l.values())c.reject(Gr)}),new Promise(c=>{function u(p){function h(){p===s?c(a):u(s)}p.then(h,h)}u(s)})}function oh(n){const t=Yl(n);return t.equals=Qu,t}function lh(n){var t=n.effects;if(t!==null){n.effects=null;for(var e=0;e<t.length;e+=1)Ze(t[e])}}function od(n){for(var t=n.parent;t!==null;){if(!(t.f&Ne))return t.f&Ui?null:t;t=t.parent}return null}function jl(n){var t,e=se;Yn(od(n));try{n.f&=~_r,lh(n),t=Ch(n)}finally{Yn(e)}return t}function ch(n){var t=jl(n);if(!n.equals(t)&&(n.wv=wh(),(!(re!=null&&re.is_fork)||n.deps===null)&&(n.v=t,n.deps===null))){xe(n,Re);return}vr||(Le!==null?(Zl()||re!=null&&re.is_fork)&&Le.set(n,t):Xl(n))}let jo=new Set;const Oi=new Map;let uh=!1;function gr(n,t){var e={f:0,v:n,reactions:null,equals:Ju,rv:0,wv:0};return e}function dn(n,t){const e=gr(n);return Sd(e),e}function ld(n,t=!1,e=!0){var r;const i=gr(n);return t||(i.equals=Qu),Xs&&e&&ve!==null&&ve.l!==null&&((r=ve.l).s??(r.s=[])).push(i),i}function ye(n,t,e=!1){qt!==null&&(!Ln||qt.f&Tc)&&qs()&&qt.f&(Ne|_i|Wl|Tc)&&(xn===null||!as.call(xn,n))&&Ff();let i=e?Di(t):t;return us(n,i)}function us(n,t){if(!n.equals(t)){var e=n.v;vr?Oi.set(n,t):Oi.set(n,e),n.v=t;var i=Fi.ensure();if(i.capture(n,e),n.f&Ne){const r=n;n.f&Fe&&jl(r),Xl(r)}n.wv=wh(),hh(n,Fe),qs()&&se!==null&&se.f&Re&&!(se.f&(Fn|yr))&&(un===null?Ed([n]):un.push(n)),!i.is_fork&&jo.size>0&&!uh&&cd()}return t}function cd(){uh=!1;for(const n of jo)n.f&Re&&xe(n,Nn),js(n)&&Bs(n);jo.clear()}function ud(n,t=1){var e=Rt(n);return ye(n,t===1?++e:--e)}function Os(n){ye(n,n.v+1)}function hh(n,t){var e=n.reactions;if(e!==null)for(var i=qs(),r=e.length,s=0;s<r;s++){var a=e[s],o=a.f;if(!(!i&&a===se)){var l=(o&Fe)===0;if(l&&xe(a,t),o&Ne){var c=a;Le==null||Le.delete(c),o&_r||(o&vn&&(a.f|=_r),hh(c,Nn))}else l&&(o&_i&&wn!==null&&wn.add(a),Dn(a))}}}function Di(n){if(typeof n!="object"||n===null||qr in n)return n;const t=Xu(n);if(t!==Af&&t!==wf)return n;var e=new Map,i=Wu(n),r=dn(0),s=pr,a=o=>{if(pr===s)return o();var l=qt,c=pr;Mn(null),Rc(s);var u=o();return Mn(l),Rc(c),u};return i&&e.set("length",dn(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&If();var u=e.get(l);return u===void 0?u=a(()=>{var p=dn(c.value);return e.set(l,p),p}):ye(u,c.value,!0),!0},deleteProperty(o,l){var c=e.get(l);if(c===void 0){if(l in o){const u=a(()=>dn(Pe));e.set(l,u),Os(r)}}else ye(c,Pe),Os(r);return!0},get(o,l,c){var m;if(l===qr)return n;var u=e.get(l),p=l in o;if(u===void 0&&(!p||(m=Fs(o,l))!=null&&m.writable)&&(u=a(()=>{var _=Di(p?o[l]:Pe),v=dn(_);return v}),e.set(l,u)),u!==void 0){var h=Rt(u);return h===Pe?void 0:h}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=e.get(l);u&&(c.value=Rt(u))}else if(c===void 0){var p=e.get(l),h=p==null?void 0:p.v;if(p!==void 0&&h!==Pe)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){var h;if(l===qr)return!0;var c=e.get(l),u=c!==void 0&&c.v!==Pe||Reflect.has(o,l);if(c!==void 0||se!==null&&(!u||(h=Fs(o,l))!=null&&h.writable)){c===void 0&&(c=a(()=>{var m=u?Di(o[l]):Pe,_=dn(m);return _}),e.set(l,c));var p=Rt(c);if(p===Pe)return!1}return u},set(o,l,c,u){var T;var p=e.get(l),h=l in o;if(i&&l==="length")for(var m=c;m<p.v;m+=1){var _=e.get(m+"");_!==void 0?ye(_,Pe):m in o&&(_=a(()=>dn(Pe)),e.set(m+"",_))}if(p===void 0)(!h||(T=Fs(o,l))!=null&&T.writable)&&(p=a(()=>dn(void 0)),ye(p,Di(c)),e.set(l,p));else{h=p.v!==Pe;var v=a(()=>Di(c));ye(p,v)}var d=Reflect.getOwnPropertyDescriptor(o,l);if(d!=null&&d.set&&d.set.call(u,c),!h){if(i&&typeof l=="string"){var f=e.get("length"),A=Number(l);Number.isInteger(A)&&A>=f.v&&ye(f,A+1)}Os(r)}return!0},ownKeys(o){Rt(r);var l=Reflect.ownKeys(o).filter(p=>{var h=e.get(p);return h===void 0||h.v!==Pe});for(var[c,u]of e)u.v!==Pe&&!(c in o)&&l.push(c);return l},setPrototypeOf(){Nf()}})}var Ac,fh,dh,ph;function hd(){if(Ac===void 0){Ac=window,fh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,t=Node.prototype,e=Text.prototype;dh=Fs(t,"firstChild").get,ph=Fs(t,"nextSibling").get,yc(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),yc(e)&&(e.__t=void 0)}}function di(n=""){return document.createTextNode(n)}function za(n){return dh.call(n)}function Ys(n){return ph.call(n)}function St(n,t){return za(n)}function Li(n,t=!1){{var e=za(n);return e instanceof Comment&&e.data===""?Ys(e):e}}function Ut(n,t=1,e=!1){let i=n;for(;t--;)i=Ys(i);return i}function fd(n){n.textContent=""}function mh(){return!1}function _h(n){var t=qt,e=se;Mn(null),Yn(null);try{return n()}finally{Mn(t),Yn(e)}}function gh(n){se===null&&(qt===null&&Lf(),Df()),vr&&Pf()}function dd(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function Kn(n,t,e){var i=se;i!==null&&i.f&sn&&(n|=sn);var r={ctx:ve,deps:null,nodes:null,f:n|Fe|vn,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,wv:0,ac:null};if(e)try{Bs(r),r.f|=Vl}catch(o){throw Ze(r),o}else t!==null&&Dn(r);var s=r;if(e&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&!(s.f&vs)&&(s=s.first,n&_i&&n&os&&s!==null&&(s.f|=os)),s!==null&&(s.parent=i,i!==null&&dd(s,i),qt!==null&&qt.f&Ne&&!(n&yr))){var a=qt;(a.effects??(a.effects=[])).push(s)}return r}function Zl(){return qt!==null&&!Ln}function pd(n){const t=Kn(Ws,null,!1);return xe(t,Re),t.teardown=n,t}function ka(n){gh();var t=se.f,e=!qt&&(t&Fn)!==0&&(t&Vl)===0;if(e){var i=ve;(i.e??(i.e=[])).push(n)}else return vh(n)}function vh(n){return Kn(Ba|Zu,n,!1)}function md(n){return gh(),Kn(Ws|Zu,n,!0)}function _d(n){Fi.ensure();const t=Kn(yr|vs,n,!0);return(e={})=>new Promise(i=>{e.outro?dr(t,()=>{Ze(t),i(void 0)}):(Ze(t),i(void 0))})}function gd(n){return Kn(Ba,n,!1)}function vd(n){return Kn(Wl|vs,n,!0)}function xh(n,t=0){return Kn(Ws|t,n,!0)}function gn(n,t=[],e=[],i=[]){rd(i,t,e,r=>{Kn(Ws,()=>n(...r.map(Rt)),!0)})}function Kl(n,t=0){var e=Kn(_i|t,n,!0);return e}function pn(n){return Kn(Fn|vs,n,!0)}function Mh(n){var t=n.teardown;if(t!==null){const e=vr,i=qt;wc(!0),Mn(null);try{t.call(null)}finally{wc(e),Mn(i)}}}function Sh(n,t=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const r=e.ac;r!==null&&_h(()=>{r.abort(Gr)});var i=e.next;e.f&yr?e.parent=null:Ze(e,t),e=i}}function xd(n){for(var t=n.first;t!==null;){var e=t.next;t.f&Fn||Ze(t),t=e}}function Ze(n,t=!0){var e=!1;(t||n.f&ju)&&n.nodes!==null&&n.nodes.end!==null&&(Md(n.nodes.start,n.nodes.end),e=!0),Sh(n,t&&!e),Ha(n,0),xe(n,Ui);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();Mh(n);var r=n.parent;r!==null&&r.first!==null&&Eh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function Md(n,t){for(;n!==null;){var e=n===t?null:Ys(n);n.remove(),n=e}}function Eh(n){var t=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===n&&(t.first=i),t.last===n&&(t.last=e))}function dr(n,t,e=!0){var i=[];yh(n,i,!0);var r=()=>{e&&Ze(n),t&&t()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function yh(n,t,e){if(!(n.f&sn)){n.f^=sn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||e)&&t.push(o);for(var r=n.first;r!==null;){var s=r.next,a=(r.f&os)!==0||(r.f&Fn)!==0&&(n.f&_i)!==0;yh(r,t,a?e:!1),r=s}}}function $l(n){Th(n,!0)}function Th(n,t){if(n.f&sn){n.f^=sn,n.f&Re||(xe(n,Fe),Dn(n));for(var e=n.first;e!==null;){var i=e.next,r=(e.f&os)!==0||(e.f&Fn)!==0;Th(e,r?t:!1),e=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function bh(n,t){if(n.nodes)for(var e=n.nodes.start,i=n.nodes.end;e!==null;){var r=e===i?null:Ys(e);t.append(e),e=r}}let Pa=!1,vr=!1;function wc(n){vr=n}let qt=null,Ln=!1;function Mn(n){qt=n}let se=null;function Yn(n){se=n}let xn=null;function Sd(n){qt!==null&&(xn===null?xn=[n]:xn.push(n))}let je=null,en=0,un=null;function Ed(n){un=n}let Ah=1,nr=0,pr=nr;function Rc(n){pr=n}function wh(){return++Ah}function js(n){var t=n.f;if(t&Fe)return!0;if(t&Ne&&(n.f&=~_r),t&Nn){for(var e=n.deps,i=e.length,r=0;r<i;r++){var s=e[r];if(js(s)&&ch(s),s.wv>n.wv)return!0}t&vn&&Le===null&&xe(n,Re)}return!1}function Rh(n,t,e=!0){var i=n.reactions;if(i!==null&&!(xn!==null&&as.call(xn,n)))for(var r=0;r<i.length;r++){var s=i[r];s.f&Ne?Rh(s,t,!1):t===s&&(e?xe(s,Fe):s.f&Re&&xe(s,Nn),Dn(s))}}function Ch(n){var v;var t=je,e=en,i=un,r=qt,s=xn,a=ve,o=Ln,l=pr,c=n.f;je=null,en=0,un=null,qt=c&(Fn|yr)?null:n,xn=null,ls(n.ctx),Ln=!1,pr=++nr,n.ac!==null&&(_h(()=>{n.ac.abort(Gr)}),n.ac=null);try{n.f|=Ho;var u=n.fn,p=u(),h=n.deps,m=re==null?void 0:re.is_fork;if(je!==null){var _;if(m||Ha(n,en),h!==null&&en>0)for(h.length=en+je.length,_=0;_<je.length;_++)h[en+_]=je[_];else n.deps=h=je;if(Zl()&&n.f&vn)for(_=en;_<h.length;_++)((v=h[_]).reactions??(v.reactions=[])).push(n)}else!m&&h!==null&&en<h.length&&(Ha(n,en),h.length=en);if(qs()&&un!==null&&!Ln&&h!==null&&!(n.f&(Ne|Nn|Fe)))for(_=0;_<un.length;_++)Rh(un[_],n);if(r!==null&&r!==n){if(nr++,r.deps!==null)for(let d=0;d<e;d+=1)r.deps[d].rv=nr;if(t!==null)for(const d of t)d.rv=nr;un!==null&&(i===null?i=un:i.push(...un))}return n.f&Ii&&(n.f^=Ii),p}catch(d){return th(d)}finally{n.f^=Ho,je=t,en=e,un=i,qt=r,xn=s,ls(a),Ln=o,pr=l}}function yd(n,t){let e=t.reactions;if(e!==null){var i=yf.call(e,n);if(i!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[i]=e[r],e.pop())}}if(e===null&&t.f&Ne&&(je===null||!as.call(je,t))){var s=t;s.f&vn&&(s.f^=vn,s.f&=~_r),Xl(s),lh(s),Ha(s,0)}}function Ha(n,t){var e=n.deps;if(e!==null)for(var i=t;i<e.length;i++)yd(n,e[i])}function Bs(n){var t=n.f;if(!(t&Ui)){xe(n,Re);var e=se,i=Pa;se=n,Pa=!0;try{t&(_i|Yu)?xd(n):Sh(n),Mh(n);var r=Ch(n);n.teardown=typeof r=="function"?r:null,n.wv=Ah;var s;zo&&qf&&n.f&Fe&&n.deps}finally{Pa=i,se=e}}}function Rt(n){var t=n.f,e=(t&Ne)!==0;if(qt!==null&&!Ln){var i=se!==null&&(se.f&Ui)!==0;if(!i&&(xn===null||!as.call(xn,n))){var r=qt.deps;if(qt.f&Ho)n.rv<nr&&(n.rv=nr,je===null&&r!==null&&r[en]===n?en++:je===null?je=[n]:je.push(n));else{(qt.deps??(qt.deps=[])).push(n);var s=n.reactions;s===null?n.reactions=[qt]:as.call(s,qt)||s.push(qt)}}}if(vr&&Oi.has(n))return Oi.get(n);if(e){var a=n;if(vr){var o=a.v;return(!(a.f&Re)&&a.reactions!==null||Dh(a))&&(o=jl(a)),Oi.set(a,o),o}var l=(a.f&vn)===0&&!Ln&&qt!==null&&(Pa||(qt.f&vn)!==0),c=a.deps===null;js(a)&&(l&&(a.f|=vn),ch(a)),l&&!c&&Ph(a)}if(Le!=null&&Le.has(n))return Le.get(n);if(n.f&Ii)throw n.v;return n.v}function Ph(n){if(n.deps!==null){n.f|=vn;for(const t of n.deps)(t.reactions??(t.reactions=[])).push(n),t.f&Ne&&!(t.f&vn)&&Ph(t)}}function Dh(n){if(n.v===Pe)return!0;if(n.deps===null)return!1;for(const t of n.deps)if(Oi.has(t)||t.f&Ne&&Dh(t))return!0;return!1}function Zs(n){var t=Ln;try{return Ln=!0,n()}finally{Ln=t}}function Td(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(qr in n)Zo(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&qr in e&&Zo(e)}}}function Zo(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let i in n)try{Zo(n[i],t)}catch{}const e=Xu(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const i=bf(e);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const bd=["touchstart","touchmove"];function Ad(n){return bd.includes(n)}const Lh=new Set,Ko=new Set;function Ks(n){for(var t=0;t<n.length;t++)Lh.add(n[t]);for(var e of Ko)e(n)}let Cc=null;function ia(n){var d;var t=this,e=t.ownerDocument,i=n.type,r=((d=n.composedPath)==null?void 0:d.call(n))||[],s=r[0]||n.target;Cc=n;var a=0,o=Cc===n&&n.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(t===document||t===window)){n.__root=t;return}var c=r.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==t){Tf(n,"currentTarget",{configurable:!0,get(){return s||e}});var u=qt,p=se;Mn(null),Yn(null);try{for(var h,m=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var v=s["__"+i];v!=null&&(!s.disabled||n.target===s)&&v.call(s,n)}catch(f){h?m.push(f):h=f}if(n.cancelBubble||_===t||_===null)break;s=_}if(h){for(let f of m)queueMicrotask(()=>{throw f});throw h}}finally{n.__root=t,delete n.currentTarget,Mn(u),Yn(p)}}}function wd(n){var t=document.createElement("template");return t.innerHTML=n.replaceAll("<!>","<!---->"),t.content}function Ga(n,t){var e=se;e.nodes===null&&(e.nodes={start:n,end:t,a:null,t:null})}function ee(n,t){var e=(t&Gf)!==0,i=(t&Vf)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=wd(s?n:"<!>"+n),e||(r=za(r)));var a=i||fh?document.importNode(r,!0):r.cloneNode(!0);if(e){var o=za(a),l=a.lastChild;Ga(o,l)}else Ga(a,a);return a}}function hs(n=""){{var t=di(n+"");return Ga(t,t),t}}function mr(){var n=document.createDocumentFragment(),t=document.createComment(""),e=di();return n.append(t,e),Ga(t,e),n}function Dt(n,t){n!==null&&n.before(t)}function _e(n,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=e,n.nodeValue=e+"")}function Rd(n,t){return Cd(n,t)}const Ar=new Map;function Cd(n,{target:t,anchor:e,props:i={},events:r,context:s,intro:a=!0}){hd();var o=new Set,l=p=>{for(var h=0;h<p.length;h++){var m=p[h];if(!o.has(m)){o.add(m);var _=Ad(m);t.addEventListener(m,ia,{passive:_});var v=Ar.get(m);v===void 0?(document.addEventListener(m,ia,{passive:_}),Ar.set(m,1)):Ar.set(m,v+1)}}};l(Ka(Lh)),Ko.add(l);var c=void 0,u=_d(()=>{var p=e??t.appendChild(di());return td(p,{pending:()=>{}},h=>{if(s){Gi({});var m=ve;m.c=s}r&&(i.$$events=r),c=n(h,i)||{},s&&Vi()}),()=>{var _;for(var h of o){t.removeEventListener(h,ia);var m=Ar.get(h);--m===0?(document.removeEventListener(h,ia),Ar.delete(h)):Ar.set(h,m)}Ko.delete(l),p!==e&&((_=p.parentNode)==null||_.removeChild(p))}});return Pd.set(c,u),c}let Pd=new WeakMap;var Cn,Vn,nn,fr,Gs,Vs,Za;class Dd{constructor(t,e=!0){Bn(this,"anchor");Vt(this,Cn,new Map);Vt(this,Vn,new Map);Vt(this,nn,new Map);Vt(this,fr,new Set);Vt(this,Gs,!0);Vt(this,Vs,()=>{var t=re;if(G(this,Cn).has(t)){var e=G(this,Cn).get(t),i=G(this,Vn).get(e);if(i)$l(i),G(this,fr).delete(e);else{var r=G(this,nn).get(e);r&&(G(this,Vn).set(e,r.effect),G(this,nn).delete(e),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of G(this,Cn)){if(G(this,Cn).delete(s),s===t)break;const o=G(this,nn).get(a);o&&(Ze(o.effect),G(this,nn).delete(a))}for(const[s,a]of G(this,Vn)){if(s===e||G(this,fr).has(s))continue;const o=()=>{if(Array.from(G(this,Cn).values()).includes(s)){var c=document.createDocumentFragment();bh(a,c),c.append(di()),G(this,nn).set(s,{effect:a,fragment:c})}else Ze(a);G(this,fr).delete(s),G(this,Vn).delete(s)};G(this,Gs)||!i?(G(this,fr).add(s),dr(a,o,!1)):o()}}});Vt(this,Za,t=>{G(this,Cn).delete(t);const e=Array.from(G(this,Cn).values());for(const[i,r]of G(this,nn))e.includes(i)||(Ze(r.effect),G(this,nn).delete(i))});this.anchor=t,Gt(this,Gs,e)}ensure(t,e){var i=re,r=mh();if(e&&!G(this,Vn).has(t)&&!G(this,nn).has(t))if(r){var s=document.createDocumentFragment(),a=di();s.append(a),G(this,nn).set(t,{effect:pn(()=>e(a)),fragment:s})}else G(this,Vn).set(t,pn(()=>e(this.anchor)));if(G(this,Cn).set(i,t),r){for(const[o,l]of G(this,Vn))o===t?i.unskip_effect(l):i.skip_effect(l);for(const[o,l]of G(this,nn))o===t?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(G(this,Vs)),i.ondiscard(G(this,Za))}else G(this,Vs).call(this)}}Cn=new WeakMap,Vn=new WeakMap,nn=new WeakMap,fr=new WeakMap,Gs=new WeakMap,Vs=new WeakMap,Za=new WeakMap;function Te(n,t,e=!1){var i=new Dd(n),r=e?os:0;function s(a,o){i.ensure(a,o)}Kl(()=>{var a=!1;t((o,l=!0)=>{a=!0,s(l,o)}),a||s(!1,null)},r)}function Jl(n,t){return t}function Ld(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let p=t[o];dr(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var h=n.outrogroups;$o(Ka(s.done)),h.delete(s),h.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var c=e,u=c.parentNode;fd(u),u.append(c),n.items.clear()}$o(t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function $o(n,t=!0){for(var e=0;e<n.length;e++)Ze(n[e],t)}var Pc;function Ql(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&$u)!==0;if(l){var c=n;a=c.appendChild(di())}var u=null,p=oh(()=>{var f=e();return Wu(f)?f:f==null?[]:Ka(f)}),h,m=!0;function _(){d.fallback=u,Ud(d,h,a,t,i),u!==null&&(h.length===0?u.f&ui?(u.f^=ui,Ls(u,null,a)):$l(u):dr(u,()=>{u=null}))}var v=Kl(()=>{h=Rt(p);for(var f=h.length,A=new Set,T=re,S=mh(),N=0;N<f;N+=1){var C=h[N],b=i(C,N),w=m?null:o.get(b);w?(w.v&&us(w.v,C),w.i&&us(w.i,N),S&&T.unskip_effect(w.e)):(w=Id(o,m?a:Pc??(Pc=di()),C,b,N,r,t,e),m||(w.e.f|=ui),o.set(b,w)),A.add(b)}if(f===0&&s&&!u&&(m?u=pn(()=>s(a)):(u=pn(()=>s(Pc??(Pc=di()))),u.f|=ui)),!m)if(S){for(const[E,x]of o)A.has(E)||T.skip_effect(x.e);T.oncommit(_),T.ondiscard(()=>{})}else _();Rt(p)}),d={effect:v,items:o,outrogroups:null,fallback:u};m=!1}function Ts(n){for(;n!==null&&!(n.f&Fn);)n=n.next;return n}function Ud(n,t,e,i,r){var x,R,B,O,X,Y,q,J,H;var s=(i&kf)!==0,a=t.length,o=n.items,l=Ts(n.effect.first),c,u=null,p,h=[],m=[],_,v,d,f;if(s)for(f=0;f<a;f+=1)_=t[f],v=r(_,f),d=o.get(v).e,d.f&ui||((R=(x=d.nodes)==null?void 0:x.a)==null||R.measure(),(p??(p=new Set)).add(d));for(f=0;f<a;f+=1){if(_=t[f],v=r(_,f),d=o.get(v).e,n.outrogroups!==null)for(const nt of n.outrogroups)nt.pending.delete(d),nt.done.delete(d);if(d.f&ui)if(d.f^=ui,d===l)Ls(d,null,e);else{var A=u?u.next:l;d===n.effect.last&&(n.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),xi(n,u,d),xi(n,d,A),Ls(d,A,e),u=d,h=[],m=[],l=Ts(u.next);continue}if(d.f&sn&&($l(d),s&&((O=(B=d.nodes)==null?void 0:B.a)==null||O.unfix(),(p??(p=new Set)).delete(d))),d!==l){if(c!==void 0&&c.has(d)){if(h.length<m.length){var T=m[0],S;u=T.prev;var N=h[0],C=h[h.length-1];for(S=0;S<h.length;S+=1)Ls(h[S],T,e);for(S=0;S<m.length;S+=1)c.delete(m[S]);xi(n,N.prev,C.next),xi(n,u,N),xi(n,C,T),l=T,u=C,f-=1,h=[],m=[]}else c.delete(d),Ls(d,l,e),xi(n,d.prev,d.next),xi(n,d,u===null?n.effect.first:u.next),xi(n,u,d),u=d;continue}for(h=[],m=[];l!==null&&l!==d;)(c??(c=new Set)).add(l),m.push(l),l=Ts(l.next);if(l===null)continue}d.f&ui||h.push(d),u=d,l=Ts(d.next)}if(n.outrogroups!==null){for(const nt of n.outrogroups)nt.pending.size===0&&($o(Ka(nt.done)),(X=n.outrogroups)==null||X.delete(nt));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var b=[];if(c!==void 0)for(d of c)d.f&sn||b.push(d);for(;l!==null;)!(l.f&sn)&&l!==n.fallback&&b.push(l),l=Ts(l.next);var w=b.length;if(w>0){var E=i&$u&&a===0?e:null;if(s){for(f=0;f<w;f+=1)(q=(Y=b[f].nodes)==null?void 0:Y.a)==null||q.measure();for(f=0;f<w;f+=1)(H=(J=b[f].nodes)==null?void 0:J.a)==null||H.fix()}Ld(n,b,E)}}s&&Ni(()=>{var nt,ht;if(p!==void 0)for(d of p)(ht=(nt=d.nodes)==null?void 0:nt.a)==null||ht.apply()})}function Id(n,t,e,i,r,s,a,o){var l=a&Bf?a&Hf?gr(e):ld(e,!1,!1):null,c=a&zf?gr(r):null;return{v:l,i:c,e:pn(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function Ls(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&!(t.f&ui)?t.nodes.start:e;i!==null;){var a=Ys(i);if(s.before(i),i===r)return;i=a}}function xi(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}const Dc=[...` 	
\r\f \v\uFEFF`];function Nd(n,t,e){var i=n==null?"":""+n;if(e){for(var r in e)if(e[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||Dc.includes(i[a-1]))&&(o===i.length||Dc.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function Fd(n,t){return n==null?null:String(n)}function Yr(n,t,e,i,r,s){var a=n.__className;if(a!==e||a===void 0){var o=Nd(e,i,s);o==null?n.removeAttribute("class"):n.className=o,n.__className=e}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function Od(n,t,e,i){var r=n.__style;if(r!==t){var s=Fd(t);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=t}return i}function Lc(n,t){return n===t||(n==null?void 0:n[qr])===t}function Bd(n={},t,e,i){return gd(()=>{var r,s;return xh(()=>{r=s,s=[],Zs(()=>{n!==e(...s)&&(t(n,...s),r&&Lc(e(...r),n)&&t(null,...r))})}),()=>{Ni(()=>{s&&Lc(e(...s),n)&&t(null,...s)})}}),n}function $a(n=!1){const t=ve,e=t.l.u;if(!e)return;let i=()=>Td(t.s);if(n){let r=0,s={};const a=Yl(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});i=()=>Rt(a)}e.b.length&&md(()=>{Uc(t,i),ko(e.b)}),ka(()=>{const r=Zs(()=>e.m.map(Rf));return()=>{for(const s of r)typeof s=="function"&&s()}}),e.a.length&&ka(()=>{Uc(t,i),ko(e.a)})}function Uc(n,t){if(n.l.s)for(const e of n.l.s)Rt(e);t()}function Jo(n,t,e,i){var r=i,s=!0,a=()=>(s&&(s=!1,r=i),r),o;o=n[t],o===void 0&&i!==void 0&&(o=a());var l;return l=()=>{var c=n[t];return c===void 0?a():(s=!0,c)},l}function tc(n){ve===null&&Ku(),Xs&&ve.l!==null?zd(ve).m.push(n):ka(()=>{const t=Zs(n);if(typeof t=="function")return t})}function Uh(n){ve===null&&Ku(),tc(()=>()=>Zs(n))}function zd(n){var t=n.l;return t.u??(t.u={a:[],b:[],m:[]})}const kd="5";var Vu;typeof window<"u"&&((Vu=window.__svelte??(window.__svelte={})).v??(Vu.v=new Set)).add(kd);let Qn=Di({connected:!1,error:null,reconnecting:!1});const rn={get connected(){return Qn.connected},get error(){return Qn.error},get reconnecting(){return Qn.reconnecting},setConnected(n){Qn.connected=n,Qn.error=null,Qn.reconnecting=!1},setError(n){Qn.error=n,Qn.connected=!1},setReconnecting(n){Qn.reconnecting=n}};let Se=null,jr=null,ir=null,Qi=0;const Ic=10,Hd=1e3,Gd=3e4;function Vd(n){ir=n;const e=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws`;function i(){Se&&Se.readyState===WebSocket.OPEN||(Se=new WebSocket(e),Se.onopen=()=>{console.log("[WS] Connected"),rn.setConnected(!0),Qi=0},Se.onclose=r=>{if(console.log("[WS] Disconnected",r.code,r.reason),rn.setConnected(!1),Qi<Ic){rn.setReconnecting(!0);const s=Math.min(Hd*Math.pow(2,Qi)+Math.random()*1e3,Gd);Qi++,console.log(`[WS] Reconnecting in ${Math.round(s)}ms (attempt ${Qi}/${Ic})...`),jr=setTimeout(()=>{i()},s)}else console.log("[WS] Max reconnection attempts reached. Click to reconnect."),rn.setError("Connection lost. Server may have stopped."),rn.setReconnecting(!1)},Se.onerror=r=>{console.error("[WS] Error:",r)},Se.onmessage=r=>{try{const s=JSON.parse(r.data);console.log("[WS] Received:",s.type),ir==null||ir(s)}catch(s){console.error("[WS] Parse error:",s)}})}return i(),()=>{jr&&clearTimeout(jr),Se&&Se.close(1e3,"Cleanup")}}function Us(n){(Se==null?void 0:Se.readyState)===WebSocket.OPEN&&(Se.send(JSON.stringify(n)),console.log("[WS] Sent:",n.type))}function Wd(){Qi=0,jr&&clearTimeout(jr),rn.setReconnecting(!0),jr=setTimeout(()=>{const t=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws`;Se&&Se.close(),Se=new WebSocket(t),Se.onopen=()=>{console.log("[WS] Reconnected"),rn.setConnected(!0),Qi=0},Se.onclose=e=>{console.log("[WS] Disconnected",e.code),rn.setConnected(!1),rn.setReconnecting(!1)},Se.onerror=()=>{rn.setError("Failed to reconnect"),rn.setReconnecting(!1)},Se.onmessage=e=>{try{const i=JSON.parse(e.data);ir==null||ir(i)}catch(i){console.error("[WS] Parse error:",i)}}},500)}let on=Di([]),Xi=dn(null),Qo=dn(0),wr=dn(null);function Xd(n){return{id:ud(Qo),testName:n||`Test ${Rt(Qo)}`,events:[],expectations:[],currentIndex:-1,running:!0,allPassed:null,machine:{position:{X:0,Y:0,Z:0},unit:"mm",mode:"absolute",tool:null,feed:0,spindle:0,spindleOn:!1,spindleCW:!0}}}function qd(n){return n.map(t=>{var e,i,r,s,a,o,l,c;return{x:((i=(e=t.stateAfter)==null?void 0:e.Position)==null?void 0:i.X)??0,y:((s=(r=t.stateAfter)==null?void 0:r.Position)==null?void 0:s.Y)??0,z:((o=(a=t.stateAfter)==null?void 0:a.Position)==null?void 0:o.Z)??0,type:((l=t.event)==null?void 0:l.Type)??"unknown",index:t.index,isCut:["LinearCut","ArcCW","ArcCCW","DrillCycle"].includes((c=t.event)==null?void 0:c.Type)}})}function Yd(n){return{total:n.length,rapidMoves:n.filter(t=>{var e;return((e=t.event)==null?void 0:e.Type)==="RapidMove"}).length,linearCuts:n.filter(t=>{var e;return((e=t.event)==null?void 0:e.Type)==="LinearCut"}).length,arcs:n.filter(t=>{var e,i;return((e=t.event)==null?void 0:e.Type)==="ArcCW"||((i=t.event)==null?void 0:i.Type)==="ArcCCW"}).length}}const Lt={get list(){return on},get activeId(){return Rt(Xi)},get receivingId(){return Rt(wr)},get active(){return on.find(n=>n.id===Rt(Xi))||null},get receiving(){return on.find(n=>n.id===Rt(wr))||null},get count(){return on.length},get toolPath(){const n=this.active;return n?qd(n.events):[]},get stats(){const n=this.active;return n?Yd(n.events):{total:0,rapidMoves:0,linearCuts:0,arcs:0}},get machine(){const n=this.active;return n?n.machine:{position:{X:0,Y:0,Z:0},unit:"mm",mode:"absolute",tool:null,feed:0,spindle:0,spindleOn:!1,spindleCW:!0}},get events(){const n=this.active;return n?n.events:[]},get expectations(){const n=this.active;return n?n.expectations:[]},get currentIndex(){const n=this.active;return n?n.currentIndex:-1},create(n){const t=Xd(n);return on.push(t),ye(wr,t.id,!0),ye(Xi,t.id,!0),t.id},setActive(n){on.some(t=>t.id===n)&&ye(Xi,n,!0)},addEvent(n){const t=this.receiving;t&&(t.events=[...t.events,n],t.currentIndex=n.index)},addExpectation(n){const t=this.receiving;t&&(t.expectations=[...t.expectations,n])},updateMachine(n){const t=this.receiving;if(t&&n){const e={...t.machine};n.Position&&(e.position={...n.Position}),n.Unit&&(e.unit=n.Unit),n.Mode&&(e.mode=n.Mode),n.Tool!==void 0&&(e.tool=n.Tool),n.Feed!==void 0&&(e.feed=n.Feed),n.Spindle!==void 0&&(e.spindle=n.Spindle),n.SpindleOn!==void 0&&(e.spindleOn=n.SpindleOn),n.SpindleCW!==void 0&&(e.spindleCW=n.SpindleCW),t.machine=e}},endSession(n){const t=this.receiving;t&&(t.running=!1,t.allPassed=n)},setCurrentIndex(n){const t=this.active;if(t){t.currentIndex=n;const e=t.events.find(i=>i.index===n);if(e!=null&&e.stateAfter){const i={...t.machine};e.stateAfter.Position&&(i.position={...e.stateAfter.Position}),e.stateAfter.Unit&&(i.unit=e.stateAfter.Unit),e.stateAfter.Mode&&(i.mode=e.stateAfter.Mode),e.stateAfter.Tool!==void 0&&(i.tool=e.stateAfter.Tool),e.stateAfter.Feed!==void 0&&(i.feed=e.stateAfter.Feed),e.stateAfter.Spindle!==void 0&&(i.spindle=e.stateAfter.Spindle),e.stateAfter.SpindleOn!==void 0&&(i.spindleOn=e.stateAfter.SpindleOn),e.stateAfter.SpindleCW!==void 0&&(i.spindleCW=e.stateAfter.SpindleCW),t.machine=i}}},clear(){on.length=0,ye(Xi,null),ye(wr,null),ye(Qo,0)},remove(n){const t=on.findIndex(e=>e.id===n);if(t>=0&&(on.splice(t,1),Rt(Xi)===n&&ye(Xi,on.length>0?on[0].id:null,!0),Rt(wr)===n)){const e=on.find(i=>i.running);ye(wr,(e==null?void 0:e.id)||null,!0)}}};let zn=Di({state:"playing",speed:"normal"});const cn={get state(){return zn.state},get speed(){return zn.speed},get isPaused(){return zn.state==="paused"},get isPlaying(){return zn.state==="playing"},get isStepping(){return zn.state==="stepping"},setState(n){zn.state=n},setSpeed(n){zn.speed=n},pause(){zn.state="paused"},resume(){zn.state="playing"},step(){zn.state="stepping"}};Yf();var jd=ee('<span class="test-status running svelte-1elxaub">Running...</span>'),Zd=ee('<span class="test-status passed svelte-1elxaub">✓ Passed</span>'),Kd=ee('<span class="test-status failed svelte-1elxaub">✗ Failed</span>'),$d=ee('<span class="test-name svelte-1elxaub"> </span> <!>',1),Jd=ee('<span class="status connected svelte-1elxaub"><span class="dot svelte-1elxaub"></span> Connected</span>'),Qd=ee('<span class="status reconnecting svelte-1elxaub"><span class="dot svelte-1elxaub"></span> Reconnecting...</span>'),tp=ee('<button class="status disconnected svelte-1elxaub"><span class="dot svelte-1elxaub"></span> Disconnected - Click to reconnect</button>'),ep=ee('<header class="header svelte-1elxaub"><div class="logo svelte-1elxaub"><span class="logo-icon svelte-1elxaub">⚙️</span> <span class="logo-text svelte-1elxaub">gocode-check</span> <span class="logo-badge svelte-1elxaub">UI</span></div> <div class="test-info svelte-1elxaub"><!></div> <div class="connection-status svelte-1elxaub"><!></div></header>');function np(n,t){Gi(t,!1);function e(){Wd()}$a();var i=ep(),r=Ut(St(i),2),s=St(r);{var a=p=>{var h=$d(),m=Li(h),_=St(m),v=Ut(m,2);{var d=A=>{var T=jd();Dt(A,T)},f=A=>{var T=mr(),S=Li(T);{var N=b=>{var w=Zd();Dt(b,w)},C=b=>{var w=mr(),E=Li(w);{var x=R=>{var B=Kd();Dt(R,B)};Te(E,R=>{Lt.active.allPassed===!1&&R(x)},!0)}Dt(b,w)};Te(S,b=>{Lt.active.allPassed===!0?b(N):b(C,!1)},!0)}Dt(A,T)};Te(v,A=>{Lt.active.running?A(d):A(f,!1)})}gn(()=>_e(_,`🧪 ${Lt.active.testName??""}`)),Dt(p,h)};Te(s,p=>{Lt.active&&p(a)})}var o=Ut(r,2),l=St(o);{var c=p=>{var h=Jd();Dt(p,h)},u=p=>{var h=mr(),m=Li(h);{var _=d=>{var f=Qd();Dt(d,f)},v=d=>{var f=tp();f.__click=e,Dt(d,f)};Te(m,d=>{rn.reconnecting?d(_):d(v,!1)},!0)}Dt(p,h)};Te(l,p=>{rn.connected?p(c):p(u,!1)})}Dt(n,i),Vi()}Ks(["click"]);var ip=ee('<span class="dot running svelte-1wwzsr0"></span>'),rp=ee('<div role="tab" tabindex="0"><span class="tab-status svelte-1wwzsr0"><!></span> <span class="tab-name svelte-1wwzsr0"> </span> <span class="tab-close svelte-1wwzsr0" role="button" tabindex="0">×</span></div>'),sp=ee('<div class="tab-bar svelte-1wwzsr0"></div>');function ap(n,t){Gi(t,!1);function e(s){Lt.setActive(s)}function i(s,a){s.stopPropagation(),s.preventDefault(),Lt.remove(a)}$a();var r=sp();Ql(r,5,()=>Lt.list,Jl,(s,a)=>{var o=rp();let l;o.__click=()=>e(Rt(a).id),o.__keydown=d=>d.key==="Enter"&&e(Rt(a).id);var c=St(o),u=St(c);{var p=d=>{var f=ip();Dt(d,f)},h=d=>{var f=mr(),A=Li(f);{var T=N=>{var C=hs("✓");Dt(N,C)},S=N=>{var C=hs("✗");Dt(N,C)};Te(A,N=>{Rt(a).allPassed?N(T):N(S,!1)},!0)}Dt(d,f)};Te(u,d=>{Rt(a).running?d(p):d(h,!1)})}var m=Ut(c,2),_=St(m),v=Ut(m,2);v.__click=d=>i(d,Rt(a).id),v.__keydown=d=>d.key==="Enter"&&i(d,Rt(a).id),gn(()=>{l=Yr(o,1,"tab svelte-1wwzsr0",null,l,{active:Rt(a).id===Lt.activeId,passed:!Rt(a).running&&Rt(a).allPassed===!0,failed:!Rt(a).running&&Rt(a).allPassed===!1}),_e(_,Rt(a).testName)}),Dt(s,o)}),Dt(n,r),Vi()}Ks(["click","keydown"]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="170",Zr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},op=0,Nc=1,lp=2,Ih=1,Nh=2,si=3,ki=0,Ke=1,ci=2,Bi=0,Kr=1,Fc=2,Oc=3,Bc=4,cp=5,tr=100,up=101,hp=102,fp=103,dp=104,pp=200,mp=201,_p=202,gp=203,tl=204,el=205,vp=206,xp=207,Mp=208,Sp=209,Ep=210,yp=211,Tp=212,bp=213,Ap=214,nl=0,il=1,rl=2,fs=3,sl=4,al=5,ol=6,ll=7,Fh=0,wp=1,Rp=2,zi=0,Cp=1,Pp=2,Dp=3,Lp=4,Up=5,Ip=6,Np=7,Oh=300,ds=301,ps=302,cl=303,ul=304,Ja=306,hl=1e3,rr=1001,fl=1002,In=1003,Fp=1004,ra=1005,Xn=1006,ao=1007,sr=1008,mi=1009,Bh=1010,zh=1011,zs=1012,nc=1013,xr=1014,hi=1015,$s=1016,ic=1017,rc=1018,ms=1020,kh=35902,Hh=1021,Gh=1022,Un=1023,Vh=1024,Wh=1025,$r=1026,_s=1027,Xh=1028,sc=1029,qh=1030,ac=1031,oc=1033,Da=33776,La=33777,Ua=33778,Ia=33779,dl=35840,pl=35841,ml=35842,_l=35843,gl=36196,vl=37492,xl=37496,Ml=37808,Sl=37809,El=37810,yl=37811,Tl=37812,bl=37813,Al=37814,wl=37815,Rl=37816,Cl=37817,Pl=37818,Dl=37819,Ll=37820,Ul=37821,Na=36492,Il=36494,Nl=36495,Yh=36283,Fl=36284,Ol=36285,Bl=36286,Op=3200,Bp=3201,jh=0,zp=1,wi="",mn="srgb",xs="srgb-linear",Qa="linear",ae="srgb",Rr=7680,zc=519,kp=512,Hp=513,Gp=514,Zh=515,Vp=516,Wp=517,Xp=518,qp=519,kc=35044,Hc="300 es",fi=2e3,Va=2001;class Tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,zl=180/Math.PI;function Js(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Ve(n,t,e){return Math.max(t,Math.min(e,n))}function Yp(n,t){return(n%t+t)%t}function oo(n,t,e){return(1-e)*n+e*t}function bs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jp={DEG2RAD:Fa};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,r,s,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],p=i[7],h=i[2],m=i[5],_=i[8],v=r[0],d=r[3],f=r[6],A=r[1],T=r[4],S=r[7],N=r[2],C=r[5],b=r[8];return s[0]=a*v+o*A+l*N,s[3]=a*d+o*T+l*C,s[6]=a*f+o*S+l*b,s[1]=c*v+u*A+p*N,s[4]=c*d+u*T+p*C,s[7]=c*f+u*S+p*b,s[2]=h*v+m*A+_*N,s[5]=h*d+m*T+_*C,s[8]=h*f+m*S+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=e*p+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=p*v,t[1]=(r*c-u*i)*v,t[2]=(o*i-r*a)*v,t[3]=h*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new Ot;function Kh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zp(){const n=Wa("canvas");return n.style.display="block",n}const Gc={};function Is(n){n in Gc||(Gc[n]=!0,console.warn(n))}function Kp(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function $p(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(n.r=pi(n.r),n.g=pi(n.g),n.b=pi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(n.r=Jr(n.r),n.g=Jr(n.g),n.b=Jr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===wi?Qa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Vc=[.64,.33,.3,.6,.15,.06],Wc=[.2126,.7152,.0722],Xc=[.3127,.329],qc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[xs]:{primaries:Vc,whitePoint:Xc,transfer:Qa,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:Vc,whitePoint:Xc,transfer:ae,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let Cr;class Qp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cr===void 0&&(Cr=Wa("canvas")),Cr.width=t.width,Cr.height=t.height;const i=Cr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pi(e[i]/255)*255):e[i]=pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tm=0;class $h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(co(r[a].image)):s.push(co(r[a]))}else s=co(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function co(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let em=0;class $e extends Tr{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,i=rr,r=rr,s=Xn,a=sr,o=Un,l=mi,c=$e.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Js(),this.name="",this.source=new $h(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case rr:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case rr:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Oh;$e.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],p=l[8],h=l[1],m=l[5],_=l[9],v=l[2],d=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-v)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+v)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(m+1)/2,N=(f+1)/2,C=(u+h)/4,b=(p+v)/4,w=(_+d)/4;return T>S&&T>N?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=b/i):S>N?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=w/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=b/s,r=w/s),this.set(i,r,s,e),this}let A=Math.sqrt((d-_)*(d-_)+(p-v)*(p-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(d-_)/A,this.y=(p-v)/A,this.z=(h-u)/A,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nm extends Tr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $e(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $h(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends nm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Jh extends $e{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class im extends $e{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],p=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(p!==v||l!==h||c!==m||u!==_){let d=1-o;const f=l*h+c*m+u*_+p*v,A=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const N=Math.sqrt(T),C=Math.atan2(N,f*A);d=Math.sin(d*C)/N,o=Math.sin(o*C)/N}const S=o*A;if(l=l*d+h*S,c=c*d+m*S,u=u*d+_*S,p=p*d+v*S,d===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=N,c*=N,u*=N,p*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],p=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return t[e]=o*_+u*p+l*m-c*h,t[e+1]=l*_+u*h+c*p-o*m,t[e+2]=c*_+u*m+o*h-l*p,t[e+3]=u*_-o*p-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),p=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*p+c*m*_,this._y=c*m*p-h*u*_,this._z=c*u*_+h*m*p,this._w=c*u*p-h*m*_;break;case"YXZ":this._x=h*u*p+c*m*_,this._y=c*m*p-h*u*_,this._z=c*u*_-h*m*p,this._w=c*u*p+h*m*_;break;case"ZXY":this._x=h*u*p-c*m*_,this._y=c*m*p+h*u*_,this._z=c*u*_+h*m*p,this._w=c*u*p-h*m*_;break;case"ZYX":this._x=h*u*p-c*m*_,this._y=c*m*p+h*u*_,this._z=c*u*_-h*m*p,this._w=c*u*p+h*m*_;break;case"YZX":this._x=h*u*p+c*m*_,this._y=c*m*p+h*u*_,this._z=c*u*_-h*m*p,this._w=c*u*p-h*m*_;break;case"XZY":this._x=h*u*p-c*m*_,this._y=c*m*p-h*u*_,this._z=c*u*_+h*m*p,this._w=c*u*p+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],h=i+o+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),p=2*(s*i-a*e);return this.x=e+l*c+a*p-o*u,this.y=i+l*u+o*c-s*p,this.z=r+l*p+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new F,jc=new Sr;class Qs{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),aa.subVectors(this.max,As),Pr.subVectors(t.a,As),Dr.subVectors(t.b,As),Lr.subVectors(t.c,As),Mi.subVectors(Dr,Pr),Si.subVectors(Lr,Dr),qi.subVectors(Pr,Lr);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-qi.z,qi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,qi.z,0,-qi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-qi.y,qi.x,0];return!ho(e,Pr,Dr,Lr,aa)||(e=[1,0,0,0,1,0,0,0,1],!ho(e,Pr,Dr,Lr,aa))?!1:(oa.crossVectors(Mi,Si),e=[oa.x,oa.y,oa.z],ho(e,Pr,Dr,Lr,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new F,new F,new F,new F,new F,new F,new F,new F],Tn=new F,sa=new Qs,Pr=new F,Dr=new F,Lr=new F,Mi=new F,Si=new F,qi=new F,As=new F,aa=new F,oa=new F,Yi=new F;function ho(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Yi.fromArray(n,s);const o=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),l=t.dot(Yi),c=e.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rm=new Qs,ws=new F,fo=new F;class to{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):rm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(fo)),this.expandByPoint(ws.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new F,po=new F,la=new F,Ei=new F,mo=new F,ca=new F,_o=new F;class lc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){po.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(po);const s=t.distanceTo(e)*.5,a=-this.direction.dot(la),o=Ei.dot(this.direction),l=-Ei.dot(la),c=Ei.lengthSq(),u=Math.abs(1-a*a);let p,h,m,_;if(u>0)if(p=a*l-o,h=a*o-l,_=s*u,p>=0)if(h>=-_)if(h<=_){const v=1/u;p*=v,h*=v,m=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h<=-_?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(po).addScaledVector(la,h),m}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(t.min.z-h.z)*p,l=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,l=(t.min.z-h.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,r,s){mo.subVectors(e,t),ca.subVectors(i,t),_o.crossVectors(mo,ca);let a=this.direction.dot(_o),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,t);const l=o*this.direction.dot(ca.crossVectors(Ei,ca));if(l<0)return null;const c=o*this.direction.dot(mo.cross(Ei));if(c<0||l+c>a)return null;const u=-o*Ei.dot(_o);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,r,s,a,o,l,c,u,p,h,m,_,v,d){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,p,h,m,_,v,d)}set(t,e,i,r,s,a,o,l,c,u,p,h,m,_,v,d){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=h,f[3]=m,f[7]=_,f[11]=v,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ur.setFromMatrixColumn(t,0).length(),s=1/Ur.setFromMatrixColumn(t,1).length(),a=1/Ur.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const h=a*u,m=a*p,_=o*u,v=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=m+_*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,m=l*p,_=c*u,v=c*p;e[0]=h+v*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,m=l*p,_=c*u,v=c*p;e[0]=h-v*o,e[4]=-a*p,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,m=a*p,_=o*u,v=o*p;e[0]=l*u,e[4]=_*c-m,e[8]=h*c+v,e[1]=l*p,e[5]=v*c+h,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=v-h*p,e[8]=_*p+m,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*p+_,e[10]=h-v*p}else if(t.order==="XZY"){const h=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=h*p+v,e[5]=a*u,e[9]=m*p-_,e[2]=_*p-m,e[6]=o*u,e[10]=v*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,am)}lookAt(t,e,i){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),yi.crossVectors(i,Qe),yi.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),yi.crossVectors(i,Qe)),yi.normalize(),ua.crossVectors(Qe,yi),r[0]=yi.x,r[4]=ua.x,r[8]=Qe.x,r[1]=yi.y,r[5]=ua.y,r[9]=Qe.y,r[2]=yi.z,r[6]=ua.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],p=i[5],h=i[9],m=i[13],_=i[2],v=i[6],d=i[10],f=i[14],A=i[3],T=i[7],S=i[11],N=i[15],C=r[0],b=r[4],w=r[8],E=r[12],x=r[1],R=r[5],B=r[9],O=r[13],X=r[2],Y=r[6],q=r[10],J=r[14],H=r[3],nt=r[7],ht=r[11],yt=r[15];return s[0]=a*C+o*x+l*X+c*H,s[4]=a*b+o*R+l*Y+c*nt,s[8]=a*w+o*B+l*q+c*ht,s[12]=a*E+o*O+l*J+c*yt,s[1]=u*C+p*x+h*X+m*H,s[5]=u*b+p*R+h*Y+m*nt,s[9]=u*w+p*B+h*q+m*ht,s[13]=u*E+p*O+h*J+m*yt,s[2]=_*C+v*x+d*X+f*H,s[6]=_*b+v*R+d*Y+f*nt,s[10]=_*w+v*B+d*q+f*ht,s[14]=_*E+v*O+d*J+f*yt,s[3]=A*C+T*x+S*X+N*H,s[7]=A*b+T*R+S*Y+N*nt,s[11]=A*w+T*B+S*q+N*ht,s[15]=A*E+T*O+S*J+N*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],h=t[10],m=t[14],_=t[3],v=t[7],d=t[11],f=t[15];return _*(+s*l*p-r*c*p-s*o*h+i*c*h+r*o*m-i*l*m)+v*(+e*l*m-e*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+e*c*p-e*o*m-s*a*p+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-e*l*p+e*o*h+r*a*p-i*a*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],h=t[10],m=t[11],_=t[12],v=t[13],d=t[14],f=t[15],A=p*d*c-v*h*c+v*l*m-o*d*m-p*l*f+o*h*f,T=_*h*c-u*d*c-_*l*m+a*d*m+u*l*f-a*h*f,S=u*v*c-_*p*c+_*o*m-a*v*m-u*o*f+a*p*f,N=_*p*l-u*v*l-_*o*h+a*v*h+u*o*d-a*p*d,C=e*A+i*T+r*S+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=A*b,t[1]=(v*h*s-p*d*s-v*r*m+i*d*m+p*r*f-i*h*f)*b,t[2]=(o*d*s-v*l*s+v*r*c-i*d*c-o*r*f+i*l*f)*b,t[3]=(p*l*s-o*h*s-p*r*c+i*h*c+o*r*m-i*l*m)*b,t[4]=T*b,t[5]=(u*d*s-_*h*s+_*r*m-e*d*m-u*r*f+e*h*f)*b,t[6]=(_*l*s-a*d*s-_*r*c+e*d*c+a*r*f-e*l*f)*b,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*m+e*l*m)*b,t[8]=S*b,t[9]=(_*p*s-u*v*s-_*i*m+e*v*m+u*i*f-e*p*f)*b,t[10]=(a*v*s-_*o*s+_*i*c-e*v*c-a*i*f+e*o*f)*b,t[11]=(u*o*s-a*p*s-u*i*c+e*p*c+a*i*m-e*o*m)*b,t[12]=N*b,t[13]=(u*v*r-_*p*r+_*i*h-e*v*h-u*i*d+e*p*d)*b,t[14]=(_*o*r-a*v*r-_*i*l+e*v*l+a*i*d-e*o*d)*b,t[15]=(a*p*r-u*o*r+u*i*l-e*p*l-a*i*h+e*o*h)*b,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,p=o+o,h=s*c,m=s*u,_=s*p,v=a*u,d=a*p,f=o*p,A=l*c,T=l*u,S=l*p,N=i.x,C=i.y,b=i.z;return r[0]=(1-(v+f))*N,r[1]=(m+S)*N,r[2]=(_-T)*N,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(h+f))*C,r[6]=(d+A)*C,r[7]=0,r[8]=(_+T)*b,r[9]=(d-A)*b,r[10]=(1-(h+v))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const a=Ur.set(r[4],r[5],r[6]).length(),o=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],bn.copy(this);const c=1/s,u=1/a,p=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=p,bn.elements[9]*=p,bn.elements[10]*=p,e.setFromRotationMatrix(bn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=fi){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),p=(e+t)/(e-t),h=(i+r)/(i-r);let m,_;if(o===fi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Va)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=fi){const l=this.elements,c=1/(e-t),u=1/(i-r),p=1/(a-s),h=(e+t)*c,m=(i+r)*u;let _,v;if(o===fi)_=(a+s)*p,v=-2*p;else if(o===Va)_=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ur=new F,bn=new pe,sm=new F(0,0,0),am=new F(1,1,1),yi=new F,ua=new F,Qe=new F,Zc=new pe,Kc=new Sr;class jn{constructor(t=0,e=0,i=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],p=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let om=0;const $c=new F,Ir=new Sr,ni=new pe,ha=new F,Rs=new F,lm=new F,cm=new Sr,Jc=new F(1,0,0),Qc=new F(0,1,0),tu=new F(0,0,1),eu={type:"added"},um={type:"removed"},Nr={type:"childadded",child:null},go={type:"childremoved",child:null};class Ue extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new F,e=new jn,i=new Sr,r=new F(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ot}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(Jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ha.copy(t):ha.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Rs,ha,this.up):ni.lookAt(ha,Rs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(ni),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eu),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(um),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eu),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,lm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,cm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),h=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ue.DEFAULT_UP=new F(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new F,ii=new F,vo=new F,ri=new F,Fr=new F,Or=new F,nu=new F,xo=new F,Mo=new F,So=new F,Eo=new ge,yo=new ge,To=new ge;class Pn{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),An.subVectors(t,e),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){An.subVectors(r,e),ii.subVectors(i,e),vo.subVectors(t,e);const a=An.dot(An),o=An.dot(ii),l=An.dot(vo),c=ii.dot(ii),u=ii.dot(vo),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Eo.setScalar(0),yo.setScalar(0),To.setScalar(0),Eo.fromBufferAttribute(t,e),yo.fromBufferAttribute(t,i),To.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Eo,s.x),a.addScaledVector(yo,s.y),a.addScaledVector(To,s.z),a}static isFrontFacing(t,e,i,r){return An.subVectors(i,e),ii.subVectors(t,e),An.cross(ii).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),An.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Pn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Fr.subVectors(r,i),Or.subVectors(s,i),xo.subVectors(t,i);const l=Fr.dot(xo),c=Or.dot(xo);if(l<=0&&c<=0)return e.copy(i);Mo.subVectors(t,r);const u=Fr.dot(Mo),p=Or.dot(Mo);if(u>=0&&p<=u)return e.copy(r);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Fr,a);So.subVectors(t,s);const m=Fr.dot(So),_=Or.dot(So);if(_>=0&&m<=_)return e.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Or,o);const d=u*_-m*p;if(d<=0&&p-u>=0&&m-_>=0)return nu.subVectors(s,r),o=(p-u)/(p-u+(m-_)),e.copy(r).addScaledVector(nu,o);const f=1/(d+v+h);return a=v*f,o=h*f,e.copy(i).addScaledVector(Fr,a).addScaledVector(Or,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},fa={h:0,s:0,l:0};function bo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=$t.workingColorSpace){if(t=Yp(t,1),e=Ve(e,0,1),i=Ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=bo(a,s,t+1/3),this.g=bo(a,s,t),this.b=bo(a,s,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const i=tf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return $t.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ve(ke.r*255,0,255))*65536+Math.round(Ve(ke.g*255,0,255))*256+Math.round(Ve(ke.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,r=ke.g,s=ke.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=mn){$t.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,r=ke.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(fa);const i=oo(Ti.h,fa.h,e),r=oo(Ti.s,fa.s,e),s=oo(Ti.l,fa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Yt;Yt.NAMES=tf;let hm=0;class Ms extends Tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Js(),this.name="",this.blending=Kr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tl&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xa extends Ms{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new F,da=new It;class qn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=kc,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=bs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kc&&(t.usage=this.usage),t}}class ef extends qn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class nf extends qn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ie extends qn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let fm=0;const ln=new pe,Ao=new Ue,Br=new F,tn=new Qs,Cs=new Qs,we=new F;class Sn extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?nf:ef)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,i){return ln.makeTranslation(t,e,i),this.applyMatrix4(ln),this}scale(t,e,i){return ln.makeScale(t,e,i),this.applyMatrix4(ln),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(tn.min,Cs.min),tn.expandByPoint(we),we.addVectors(tn.max,Cs.max),tn.expandByPoint(we)):(tn.expandByPoint(Cs.min),tn.expandByPoint(Cs.max))}tn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)we.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(t,c),we.add(Br)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new F,l[w]=new F;const c=new F,u=new F,p=new F,h=new It,m=new It,_=new It,v=new F,d=new F;function f(w,E,x){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,E),p.fromBufferAttribute(i,x),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,x),u.sub(c),p.sub(c),m.sub(h),_.sub(h);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(R),d.copy(p).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(R),o[w].add(v),o[E].add(v),o[x].add(v),l[w].add(d),l[E].add(d),l[x].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let w=0,E=A.length;w<E;++w){const x=A[w],R=x.start,B=x.count;for(let O=R,X=R+B;O<X;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const T=new F,S=new F,N=new F,C=new F;function b(w){N.fromBufferAttribute(r,w),C.copy(N);const E=o[w];T.copy(E),T.sub(N.multiplyScalar(N.dot(E))).normalize(),S.crossVectors(C,E);const R=S.dot(l[w])<0?-1:1;a.setXYZW(w,T.x,T.y,T.z,R)}for(let w=0,E=A.length;w<E;++w){const x=A[w],R=x.start,B=x.count;for(let O=R,X=R+B;O<X;O+=3)b(t.getX(O+0)),b(t.getX(O+1)),b(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,p=new F;if(t)for(let h=0,m=t.count;h<m;h+=3){const _=t.getX(h+0),v=t.getX(h+1),d=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,d),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,p=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,d=l.length;v<d;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let f=0;f<u;f++)h[_++]=c[m++]}return new qn(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,p=c.length;u<p;u++){const h=c[u],m=t(h,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],p=s[c];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iu=new pe,ji=new lc,pa=new to,ru=new F,ma=new F,_a=new F,ga=new F,wo=new F,va=new F,su=new F,xa=new F;class De extends Ue{constructor(t=new Sn,e=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],p=s[l];u!==0&&(wo.fromBufferAttribute(p,t),a?va.addScaledVector(wo,u):va.addScaledVector(wo.sub(e),u))}e.add(va)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),ji.copy(t.ray).recast(t.near),!(pa.containsPoint(ji.origin)===!1&&(ji.intersectSphere(pa,ru)===null||ji.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(iu.copy(s).invert(),ji.copy(t.ray).applyMatrix4(iu),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const d=h[_],f=a[d.materialIndex],A=Math.max(d.start,m.start),T=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let S=A,N=T;S<N;S+=3){const C=o.getX(S),b=o.getX(S+1),w=o.getX(S+2);r=Ma(this,f,t,i,c,u,p,C,b,w),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let d=_,f=v;d<f;d+=3){const A=o.getX(d),T=o.getX(d+1),S=o.getX(d+2);r=Ma(this,a,t,i,c,u,p,A,T,S),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const d=h[_],f=a[d.materialIndex],A=Math.max(d.start,m.start),T=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let S=A,N=T;S<N;S+=3){const C=S,b=S+1,w=S+2;r=Ma(this,f,t,i,c,u,p,C,b,w),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let d=_,f=v;d<f;d+=3){const A=d,T=d+1,S=d+2;r=Ma(this,a,t,i,c,u,p,A,T,S),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function dm(n,t,e,i,r,s,a,o){let l;if(t.side===Ke?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===ki,o),l===null)return null;xa.copy(o),xa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(xa);return c<e.near||c>e.far?null:{distance:c,point:xa.clone(),object:n}}function Ma(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,ma),n.getVertexPosition(l,_a),n.getVertexPosition(c,ga);const u=dm(n,t,e,i,ma,_a,ga,su);if(u){const p=new F;Pn.getBarycoord(su,ma,_a,ga,p),r&&(u.uv=Pn.getInterpolatedAttribute(r,o,l,c,p,new It)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,o,l,c,p,new It)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,l,c,p,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};Pn.getNormal(ma,_a,ga,h.normal),u.face=h,u.barycoord=p}return u}class Er extends Sn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let h=0,m=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(p,2));function _(v,d,f,A,T,S,N,C,b,w,E){const x=S/b,R=N/w,B=S/2,O=N/2,X=C/2,Y=b+1,q=w+1;let J=0,H=0;const nt=new F;for(let ht=0;ht<q;ht++){const yt=ht*R-O;for(let Bt=0;Bt<Y;Bt++){const ne=Bt*x-B;nt[v]=ne*A,nt[d]=yt*T,nt[f]=X,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[d]=0,nt[f]=C>0?1:-1,u.push(nt.x,nt.y,nt.z),p.push(Bt/b),p.push(1-ht/w),J+=1}}for(let ht=0;ht<w;ht++)for(let yt=0;yt<b;yt++){const Bt=h+yt+Y*ht,ne=h+yt+Y*(ht+1),j=h+(yt+1)+Y*(ht+1),tt=h+(yt+1)+Y*ht;l.push(Bt,ne,tt),l.push(ne,j,tt),H+=6}o.addGroup(m,H,E),m+=H,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ge(n){const t={};for(let e=0;e<n.length;e++){const i=gs(n[e]);for(const r in i)t[r]=i[r]}return t}function pm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function rf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const mm={clone:gs,merge:Ge};var _m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Ms{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=pm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class sf extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new F,au=new It,ou=new It;class _n extends sf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,au,ou),e.subVectors(ou,au)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zr=-90,kr=1;class vm extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(zr,kr,t,e);r.layers=this.layers,this.add(r);const s=new _n(zr,kr,t,e);s.layers=this.layers,this.add(s);const a=new _n(zr,kr,t,e);a.layers=this.layers,this.add(a);const o=new _n(zr,kr,t,e);o.layers=this.layers,this.add(o);const l=new _n(zr,kr,t,e);l.layers=this.layers,this.add(l);const c=new _n(zr,kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(p,h,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class af extends $e{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xm extends Mr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new af(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Er(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:Bi});s.uniforms.tEquirect.value=e;const a=new De(r,s),o=e.minFilter;return e.minFilter===sr&&(e.minFilter=Xn),new vm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Ro=new F,Mm=new F,Sm=new Ot;class Ai{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ro.subVectors(i,e).cross(Mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Sm.getNormalMatrix(t),r=this.coplanarPoint(Ro).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new to,Sa=new F;class cc{constructor(t=new Ai,e=new Ai,i=new Ai,r=new Ai,s=new Ai,a=new Ai){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fi){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],p=r[6],h=r[7],m=r[8],_=r[9],v=r[10],d=r[11],f=r[12],A=r[13],T=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,d-m,S-f).normalize(),i[1].setComponents(l+s,h+c,d+m,S+f).normalize(),i[2].setComponents(l+a,h+u,d+_,S+A).normalize(),i[3].setComponents(l-a,h-u,d-_,S-A).normalize(),i[4].setComponents(l-o,h-p,d-v,S-T).normalize(),e===fi)i[5].setComponents(l+o,h+p,d+v,S+T).normalize();else if(e===Va)i[5].setComponents(o,p,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Sa.x=r.normal.x>0?t.max.x:t.min.x,Sa.y=r.normal.y>0?t.max.y:t.min.y,Sa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function of(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Em(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,p=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const u=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,u);else{p.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<p.length;m++){const _=p[h],v=p[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,p[h]=v)}p.length=h+1;for(let m=0,_=p.length;m<_;m++){const v=p[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class eo extends Sn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,p=t/o,h=e/l,m=[],_=[],v=[],d=[];for(let f=0;f<u;f++){const A=f*h-a;for(let T=0;T<c;T++){const S=T*p-s;_.push(S,-A,0),v.push(0,0,1),d.push(T/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const T=A+c*f,S=A+c*(f+1),N=A+1+c*(f+1),C=A+1+c*f;m.push(T,S,C),m.push(S,N,C)}this.setIndex(m),this.setAttribute("position",new Ie(_,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.widthSegments,t.heightSegments)}}var ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Om=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",t_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,__=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,S_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,H_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,J_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:ym,alphahash_pars_fragment:Tm,alphamap_fragment:bm,alphamap_pars_fragment:Am,alphatest_fragment:wm,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Dm,batching_vertex:Lm,begin_vertex:Um,beginnormal_vertex:Im,bsdfs:Nm,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Hm,color_fragment:Gm,color_pars_fragment:Vm,color_pars_vertex:Wm,color_vertex:Xm,common:qm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:jm,displacementmap_pars_vertex:Zm,displacementmap_vertex:Km,emissivemap_fragment:$m,emissivemap_pars_fragment:Jm,colorspace_fragment:Qm,colorspace_pars_fragment:t_,envmap_fragment:e_,envmap_common_pars_fragment:n_,envmap_pars_fragment:i_,envmap_pars_vertex:r_,envmap_physical_pars_fragment:m_,envmap_vertex:s_,fog_vertex:a_,fog_pars_vertex:o_,fog_fragment:l_,fog_pars_fragment:c_,gradientmap_pars_fragment:u_,lightmap_pars_fragment:h_,lights_lambert_fragment:f_,lights_lambert_pars_fragment:d_,lights_pars_begin:p_,lights_toon_fragment:__,lights_toon_pars_fragment:g_,lights_phong_fragment:v_,lights_phong_pars_fragment:x_,lights_physical_fragment:M_,lights_physical_pars_fragment:S_,lights_fragment_begin:E_,lights_fragment_maps:y_,lights_fragment_end:T_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:A_,logdepthbuf_pars_vertex:w_,logdepthbuf_vertex:R_,map_fragment:C_,map_pars_fragment:P_,map_particle_fragment:D_,map_particle_pars_fragment:L_,metalnessmap_fragment:U_,metalnessmap_pars_fragment:I_,morphinstance_vertex:N_,morphcolor_vertex:F_,morphnormal_vertex:O_,morphtarget_pars_vertex:B_,morphtarget_vertex:z_,normal_fragment_begin:k_,normal_fragment_maps:H_,normal_pars_fragment:G_,normal_pars_vertex:V_,normal_vertex:W_,normalmap_pars_fragment:X_,clearcoat_normal_fragment_begin:q_,clearcoat_normal_fragment_maps:Y_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Z_,opaque_fragment:K_,packing:$_,premultiplied_alpha_fragment:J_,project_vertex:Q_,dithering_fragment:tg,dithering_pars_fragment:eg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:sg,shadowmap_vertex:ag,shadowmask_pars_fragment:og,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:ug,skinnormal_vertex:hg,specularmap_fragment:fg,specularmap_pars_fragment:dg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:_g,transmission_pars_fragment:gg,uv_pars_fragment:vg,uv_pars_vertex:xg,uv_vertex:Mg,worldpos_vertex:Sg,background_vert:Eg,background_frag:yg,backgroundCube_vert:Tg,backgroundCube_frag:bg,cube_vert:Ag,cube_frag:wg,depth_vert:Rg,depth_frag:Cg,distanceRGBA_vert:Pg,distanceRGBA_frag:Dg,equirect_vert:Lg,equirect_frag:Ug,linedashed_vert:Ig,linedashed_frag:Ng,meshbasic_vert:Fg,meshbasic_frag:Og,meshlambert_vert:Bg,meshlambert_frag:zg,meshmatcap_vert:kg,meshmatcap_frag:Hg,meshnormal_vert:Gg,meshnormal_frag:Vg,meshphong_vert:Wg,meshphong_frag:Xg,meshphysical_vert:qg,meshphysical_frag:Yg,meshtoon_vert:jg,meshtoon_frag:Zg,points_vert:Kg,points_frag:$g,shadow_vert:Jg,shadow_frag:Qg,sprite_vert:tv,sprite_frag:ev},at={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Wn={basic:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Yt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ge([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ge([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Yt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ge([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ge([at.points,at.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ge([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ge([at.common,at.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ge([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ge([at.sprite,at.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ge([at.common,at.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ge([at.lights,at.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Wn.physical={uniforms:Ge([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Ea={r:0,b:0,g:0},Ki=new jn,nv=new pe;function iv(n,t,e,i,r,s,a){const o=new Yt(0);let l=s===!0?0:1,c,u,p=null,h=0,m=null;function _(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function v(A){let T=!1;const S=_(A);S===null?f(o,l):S&&S.isColor&&(f(S,1),T=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(A,T){const S=_(T);S&&(S.isCubeTexture||S.mapping===Ja)?(u===void 0&&(u=new De(new Er(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:gs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ki.copy(T.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nv.makeRotationFromEuler(Ki)),u.material.toneMapped=$t.getTransfer(S.colorSpace)!==ae,(p!==S||h!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,p=S,h=S.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new De(new eo(2,2),new Hi({name:"BackgroundMaterial",uniforms:gs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=$t.getTransfer(S.colorSpace)!==ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||h!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=S,h=S.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,T){A.getRGB(Ea,rf(n)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(o,l)},render:v,addToRenderList:d}}function rv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(x,R,B,O,X){let Y=!1;const q=p(O,B,R);s!==q&&(s=q,c(s.object)),Y=m(x,O,B,X),Y&&_(x,O,B,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(x,R,B,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function p(x,R,B){const O=B.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[R.id];Y===void 0&&(Y={},X[R.id]=Y);let q=Y[O];return q===void 0&&(q=h(l()),Y[O]=q),q}function h(x){const R=[],B=[],O=[];for(let X=0;X<e;X++)R[X]=0,B[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:O,object:x,attributes:{},index:null}}function m(x,R,B,O){const X=s.attributes,Y=R.attributes;let q=0;const J=B.getAttributes();for(const H in J)if(J[H].location>=0){const ht=X[H];let yt=Y[H];if(yt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;q++}return s.attributesNum!==q||s.index!==O}function _(x,R,B,O){const X={},Y=R.attributes;let q=0;const J=B.getAttributes();for(const H in J)if(J[H].location>=0){let ht=Y[H];ht===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),X[H]=yt,q++}s.attributes=X,s.attributesNum=q,s.index=O}function v(){const x=s.newAttributes;for(let R=0,B=x.length;R<B;R++)x[R]=0}function d(x){f(x,0)}function f(x,R){const B=s.newAttributes,O=s.enabledAttributes,X=s.attributeDivisors;B[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),X[x]!==R&&(n.vertexAttribDivisor(x,R),X[x]=R)}function A(){const x=s.newAttributes,R=s.enabledAttributes;for(let B=0,O=R.length;B<O;B++)R[B]!==x[B]&&(n.disableVertexAttribArray(B),R[B]=0)}function T(x,R,B,O,X,Y,q){q===!0?n.vertexAttribIPointer(x,R,B,X,Y):n.vertexAttribPointer(x,R,B,O,X,Y)}function S(x,R,B,O){v();const X=O.attributes,Y=B.getAttributes(),q=R.defaultAttributeValues;for(const J in Y){const H=Y[J];if(H.location>=0){let nt=X[J];if(nt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),nt!==void 0){const ht=nt.normalized,yt=nt.itemSize,Bt=t.get(nt);if(Bt===void 0)continue;const ne=Bt.buffer,j=Bt.type,tt=Bt.bytesPerElement,gt=j===n.INT||j===n.UNSIGNED_INT||nt.gpuType===nc;if(nt.isInterleavedBufferAttribute){const ot=nt.data,At=ot.stride,Ct=nt.offset;if(ot.isInstancedInterleavedBuffer){for(let Ht=0;Ht<H.locationSize;Ht++)f(H.location+Ht,ot.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ht=0;Ht<H.locationSize;Ht++)d(H.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Ht=0;Ht<H.locationSize;Ht++)T(H.location+Ht,yt/H.locationSize,j,ht,At*tt,(Ct+yt/H.locationSize*Ht)*tt,gt)}else{if(nt.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)f(H.location+ot,nt.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ot=0;ot<H.locationSize;ot++)d(H.location+ot);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let ot=0;ot<H.locationSize;ot++)T(H.location+ot,yt/H.locationSize,j,ht,yt*tt,yt/H.locationSize*ot*tt,gt)}}else if(q!==void 0){const ht=q[J];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(H.location,ht);break;case 3:n.vertexAttrib3fv(H.location,ht);break;case 4:n.vertexAttrib4fv(H.location,ht);break;default:n.vertexAttrib1fv(H.location,ht)}}}}A()}function N(){w();for(const x in i){const R=i[x];for(const B in R){const O=R[B];for(const X in O)u(O[X].object),delete O[X];delete R[B]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const B in R){const O=R[B];for(const X in O)u(O[X].object),delete O[X];delete R[B]}delete i[x.id]}function b(x){for(const R in i){const B=i[R];if(B[x.id]===void 0)continue;const O=B[x.id];for(const X in O)u(O[X].object),delete O[X];delete B[x.id]}}function w(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:d,disableUnusedAttributes:A}}function sv(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,p){p!==0&&(n.drawArraysInstanced(i,c,u,p),e.update(u,i,p))}function o(c,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let m=0;for(let _=0;_<p;_++)m+=u[_];e.update(m,i,1)}function l(c,u,p,h){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,p);let _=0;for(let v=0;v<p;v++)_+=u[v]*h[v];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function av(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Un&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const w=b===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==mi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==hi&&!w)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:N,maxSamples:C}}function ov(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Ai,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,m){const _=p.clippingPlanes,v=p.clipIntersection,d=p.clipShadows,f=n.get(p);if(!r||_===null||_.length===0||s&&!d)s?u(null):c();else{const A=s?0:i,T=A*4;let S=f.clippingState||null;l.value=S,S=u(_,h,T,m);for(let N=0;N!==T;++N)S[N]=e[N];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(p,h,m,_){const v=p!==null?p.length:0;let d=null;if(v!==0){if(d=l.value,_!==!0||d===null){const f=m+v*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(d===null||d.length<f)&&(d=new Float32Array(f));for(let T=0,S=m;T!==v;++T,S+=4)a.copy(p[T]).applyMatrix4(A,o),a.normal.toArray(d,S),d[S+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function lv(n){let t=new WeakMap;function e(a,o){return o===cl?a.mapping=ds:o===ul&&(a.mapping=ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===cl||o===ul)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xm(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class lf extends sf{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xr=4,lu=[.125,.215,.35,.446,.526,.582],er=20,Co=new lf,cu=new Yt;let Po=null,Do=0,Lo=0,Uo=!1;const Ji=(1+Math.sqrt(5))/2,Hr=1/Ji,uu=[new F(-Ji,Hr,0),new F(Ji,Hr,0),new F(-Hr,0,Ji),new F(Hr,0,Ji),new F(0,Ji,-Hr),new F(0,Ji,Hr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class hu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Po,Do,Lo),this._renderer.xr.enabled=Uo,t.scissorTest=!1,ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:$s,format:Un,colorSpace:xs,depthBuffer:!1},r=fu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cv(s)),this._blurMaterial=uv(s,t,e)}return r}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,i,r){const o=new _n(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(cu),u.toneMapping=zi,u.autoClear=!1;const m=new Xa({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),_=new De(new Er,m);let v=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,v=!0):(m.color.copy(cu),v=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):A===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const T=this._cubeSize;ya(r,A*T,f>2?T:0,T,T),u.setRenderTarget(r),v&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=p,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ds||t.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ya(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Co)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=uu[(r-s-1)%uu.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new De(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*er-1),v=s/_,d=isFinite(s)?1+Math.floor(u*v):er;d>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${er}`);const f=[];let A=0;for(let b=0;b<er;++b){const w=b/v,E=Math.exp(-w*w/2);f.push(E),b===0?A+=E:b<d&&(A+=2*E)}for(let b=0;b<f.length;b++)f[b]=f[b]/A;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-i;const S=this._sizeLods[r],N=3*S*(r>T-Xr?r-T+Xr:0),C=4*(this._cubeSize-S);ya(e,N,C,3*S,2*S),l.setRenderTarget(e),l.render(p,Co)}}function cv(n){const t=[],e=[],i=[];let r=n;const s=n-Xr+1+lu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Xr?l=lu[a-n+Xr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,_=6,v=3,d=2,f=1,A=new Float32Array(v*_*m),T=new Float32Array(d*_*m),S=new Float32Array(f*_*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,w=C>2?0:-1,E=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];A.set(E,v*_*C),T.set(h,d*_*C);const x=[C,C,C,C,C,C];S.set(x,f*_*C)}const N=new Sn;N.setAttribute("position",new qn(A,v)),N.setAttribute("uv",new qn(T,d)),N.setAttribute("faceIndex",new qn(S,f)),t.push(N),r>Xr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fu(n,t,e){const i=new Mr(n,t,e);return i.texture.mapping=Ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function uv(n,t,e){const i=new Float32Array(er),r=new F(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function du(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function pu(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hv(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===cl||l===ul,u=l===ds||l===ps;if(c||u){let p=t.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new hu(n)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new hu(n)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function fv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Is("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dv(n,t,e,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let d=0,f=v.length;d<f;d++)t.remove(v[d])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)t.update(h[_],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const v=m[_];for(let d=0,f=v.length;d<f;d++)t.update(v[d],n.ARRAY_BUFFER)}}function c(p){const h=[],m=p.index,_=p.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let T=0,S=A.length;T<S;T+=3){const N=A[T+0],C=A[T+1],b=A[T+2];h.push(N,C,C,b,b,N)}}else if(_!==void 0){const A=_.array;v=_.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const N=T+0,C=T+1,b=T+2;h.push(N,C,C,b,b,N)}}else return;const d=new(Kh(h)?nf:ef)(h,1);d.version=v;const f=s.get(p);f&&t.remove(f),s.set(p,d)}function u(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function pv(n,t,e){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*a),e.update(m,i,1)}function c(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,h*a,_),e.update(m,i,_))}function u(h,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let d=0;for(let f=0;f<_;f++)d+=m[f];e.update(d,i,1)}function p(h,m,_,v){if(_===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h.length;f++)c(h[f]/a,m[f],v[f]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,v,0,_);let f=0;for(let A=0;A<_;A++)f+=m[A]*v[A];e.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function mv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function _v(n,t,e){const i=new WeakMap,r=new ge;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let x=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var m=x;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),d===!0&&(S=3);let N=o.attributes.position.count*S,C=1;N>t.maxTextureSize&&(C=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const b=new Float32Array(N*C*4*p),w=new Jh(b,N,C,p);w.type=hi,w.needsUpdate=!0;const E=S*4;for(let R=0;R<p;R++){const B=f[R],O=A[R],X=T[R],Y=N*C*4*R;for(let q=0;q<B.count;q++){const J=q*E;_===!0&&(r.fromBufferAttribute(B,q),b[Y+J+0]=r.x,b[Y+J+1]=r.y,b[Y+J+2]=r.z,b[Y+J+3]=0),v===!0&&(r.fromBufferAttribute(O,q),b[Y+J+4]=r.x,b[Y+J+5]=r.y,b[Y+J+6]=r.z,b[Y+J+7]=0),d===!0&&(r.fromBufferAttribute(X,q),b[Y+J+8]=r.x,b[Y+J+9]=r.y,b[Y+J+10]=r.z,b[Y+J+11]=X.itemSize===4?r.w:1)}}h={count:p,texture:w,size:new It(N,C)},i.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function gv(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,p=t.get(l,u);if(r.get(p)!==c&&(t.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class cf extends $e{constructor(t,e,i,r,s,a,o,l,c,u=$r){if(u!==$r&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$r&&(i=xr),i===void 0&&u===_s&&(i=ms),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uf=new $e,mu=new cf(1,1),hf=new Jh,ff=new im,df=new af,_u=[],gu=[],vu=new Float32Array(16),xu=new Float32Array(9),Mu=new Float32Array(4);function Ss(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=_u[r];if(s===void 0&&(s=new Float32Array(r),_u[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function no(n,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function Mv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function Sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function Ev(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,i))return;Mu.set(i),n.uniformMatrix2fv(this.addr,!1,Mu),Ae(e,i)}}function yv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,i))return;xu.set(i),n.uniformMatrix3fv(this.addr,!1,xu),Ae(e,i)}}function Tv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,i))return;vu.set(i),n.uniformMatrix4fv(this.addr,!1,vu),Ae(e,i)}}function bv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Av(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function Rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function Cv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Pv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function Dv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function Lv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function Uv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mu.compareFunction=Zh,s=mu):s=uf,e.setTexture2D(t||s,r)}function Iv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ff,r)}function Nv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||df,r)}function Fv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||hf,r)}function Ov(n){switch(n){case 5126:return vv;case 35664:return xv;case 35665:return Mv;case 35666:return Sv;case 35674:return Ev;case 35675:return yv;case 35676:return Tv;case 5124:case 35670:return bv;case 35667:case 35671:return Av;case 35668:case 35672:return wv;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Pv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Fv}}function Bv(n,t){n.uniform1fv(this.addr,t)}function zv(n,t){const e=Ss(t,this.size,2);n.uniform2fv(this.addr,e)}function kv(n,t){const e=Ss(t,this.size,3);n.uniform3fv(this.addr,e)}function Hv(n,t){const e=Ss(t,this.size,4);n.uniform4fv(this.addr,e)}function Gv(n,t){const e=Ss(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Vv(n,t){const e=Ss(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Wv(n,t){const e=Ss(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Xv(n,t){n.uniform1iv(this.addr,t)}function qv(n,t){n.uniform2iv(this.addr,t)}function Yv(n,t){n.uniform3iv(this.addr,t)}function jv(n,t){n.uniform4iv(this.addr,t)}function Zv(n,t){n.uniform1uiv(this.addr,t)}function Kv(n,t){n.uniform2uiv(this.addr,t)}function $v(n,t){n.uniform3uiv(this.addr,t)}function Jv(n,t){n.uniform4uiv(this.addr,t)}function Qv(n,t,e){const i=this.cache,r=t.length,s=no(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||uf,s[a])}function t0(n,t,e){const i=this.cache,r=t.length,s=no(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ff,s[a])}function e0(n,t,e){const i=this.cache,r=t.length,s=no(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||df,s[a])}function n0(n,t,e){const i=this.cache,r=t.length,s=no(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||hf,s[a])}function i0(n){switch(n){case 5126:return Bv;case 35664:return zv;case 35665:return kv;case 35666:return Hv;case 35674:return Gv;case 35675:return Vv;case 35676:return Wv;case 5124:case 35670:return Xv;case 35667:case 35671:return qv;case 35668:case 35672:return Yv;case 35669:case 35673:return jv;case 5125:return Zv;case 36294:return Kv;case 36295:return $v;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}class r0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ov(e.type)}}class s0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i0(e.type)}}class a0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function Su(n,t){n.seq.push(t),n.map[t.id]=t}function o0(n,t,e){const i=n.name,r=i.length;for(Io.lastIndex=0;;){const s=Io.exec(i),a=Io.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Su(e,c===void 0?new r0(o,n,t):new s0(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new a0(o),Su(e,p)),e=p}}}class Oa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);o0(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Eu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const l0=37297;let c0=0;function u0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const yu=new Ot;function h0(n){$t._getMatrix(yu,$t.workingColorSpace,n);const t=`mat3( ${yu.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case Qa:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Tu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+u0(n.getShaderSource(t),a)}else return r}function f0(n,t){const e=h0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function d0(n,t){let e;switch(t){case Cp:e="Linear";break;case Pp:e="Reinhard";break;case Dp:e="Cineon";break;case Lp:e="ACESFilmic";break;case Ip:e="AgX";break;case Np:e="Neutral";break;case Up:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ta=new F;function p0(){$t.getLuminanceCoefficients(Ta);const n=Ta.x.toFixed(4),t=Ta.y.toFixed(4),e=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function _0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function g0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ns(n){return n!==""}function bu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Au(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(v0,M0)}const x0=new Map;function M0(n,t){let e=kt[t];if(e===void 0){const i=x0.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}const S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(n){return n.replace(S0,E0)}function E0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ru(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function y0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function T0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case ps:t="ENVMAP_TYPE_CUBE";break;case Ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function A0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fh:t="ENVMAP_BLENDING_MULTIPLY";break;case wp:t="ENVMAP_BLENDING_MIX";break;case Rp:t="ENVMAP_BLENDING_ADD";break}return t}function w0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function R0(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=y0(e),c=T0(e),u=b0(e),p=A0(e),h=w0(e),m=m0(e),_=_0(s),v=r.createProgram();let d,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ns).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ns).join(`
`),f.length>0&&(f+=`
`)):(d=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),f=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?kt.tonemapping_pars_fragment:"",e.toneMapping!==zi?d0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,f0("linearToOutputTexel",e.outputColorSpace),p0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=kl(a),a=bu(a,e),a=Au(a,e),o=kl(o),o=bu(o,e),o=Au(o,e),a=wu(a),o=wu(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=A+d+a,S=A+f+o,N=Eu(r,r.VERTEX_SHADER,T),C=Eu(r,r.FRAGMENT_SHADER,S);r.attachShader(v,N),r.attachShader(v,C),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(R){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(N).trim(),X=r.getShaderInfoLog(C).trim();let Y=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,N,C);else{const J=Tu(r,N,"vertex"),H=Tu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+J+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||X==="")&&(q=!1);q&&(R.diagnostics={runnable:Y,programLog:B,vertexShader:{log:O,prefix:d},fragmentShader:{log:X,prefix:f}})}r.deleteShader(N),r.deleteShader(C),w=new Oa(r,v),E=g0(r,v)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,l0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=C,this}let C0=0;class P0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new D0(t),e.set(t,i)),i}}class D0{constructor(t){this.id=C0++,this.code=t,this.usedTimes=0}}function L0(n,t,e,i,r,s,a){const o=new Qh,l=new P0,c=new Set,u=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function d(E,x,R,B,O){const X=B.fog,Y=O.geometry,q=E.isMeshStandardMaterial?B.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),H=J&&J.mapping===Ja?J.image.height:null,nt=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yt=ht!==void 0?ht.length:0;let Bt=0;Y.morphAttributes.position!==void 0&&(Bt=1),Y.morphAttributes.normal!==void 0&&(Bt=2),Y.morphAttributes.color!==void 0&&(Bt=3);let ne,j,tt,gt;if(nt){const ie=Wn[nt];ne=ie.vertexShader,j=ie.fragmentShader}else ne=E.vertexShader,j=E.fragmentShader,l.update(E),tt=l.getVertexShaderID(E),gt=l.getFragmentShaderID(E);const ot=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Ct=O.isInstancedMesh===!0,Ht=O.isBatchedMesh===!0,le=!!E.map,jt=!!E.matcap,de=!!J,U=!!E.aoMap,He=!!E.lightMap,Wt=!!E.bumpMap,Xt=!!E.normalMap,Tt=!!E.displacementMap,st=!!E.emissiveMap,it=!!E.metalnessMap,y=!!E.roughnessMap,g=E.anisotropy>0,I=E.clearcoat>0,K=E.dispersion>0,Z=E.iridescence>0,W=E.sheen>0,mt=E.transmission>0,rt=g&&!!E.anisotropyMap,dt=I&&!!E.clearcoatMap,Zt=I&&!!E.clearcoatNormalMap,Q=I&&!!E.clearcoatRoughnessMap,pt=Z&&!!E.iridescenceMap,bt=Z&&!!E.iridescenceThicknessMap,wt=W&&!!E.sheenColorMap,_t=W&&!!E.sheenRoughnessMap,Kt=!!E.specularMap,zt=!!E.specularColorMap,ce=!!E.specularIntensityMap,P=mt&&!!E.transmissionMap,lt=mt&&!!E.thicknessMap,V=!!E.gradientMap,$=!!E.alphaMap,ft=E.alphaTest>0,ct=!!E.alphaHash,Nt=!!E.extensions;let me=zi;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(me=n.toneMapping);const Oe={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:j,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ht,batchingColor:Ht&&O._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&O.instanceColor!==null,instancingMorph:Ct&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:xs,alphaToCoverage:!!E.alphaToCoverage,map:le,matcap:jt,envMap:de,envMapMode:de&&J.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:He,bumpMap:Wt,normalMap:Xt,displacementMap:h&&Tt,emissiveMap:st,normalMapObjectSpace:Xt&&E.normalMapType===zp,normalMapTangentSpace:Xt&&E.normalMapType===jh,metalnessMap:it,roughnessMap:y,anisotropy:g,anisotropyMap:rt,clearcoat:I,clearcoatMap:dt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:Z,iridescenceMap:pt,iridescenceThicknessMap:bt,sheen:W,sheenColorMap:wt,sheenRoughnessMap:_t,specularMap:Kt,specularColorMap:zt,specularIntensityMap:ce,transmission:mt,transmissionMap:P,thicknessMap:lt,gradientMap:V,opaque:E.transparent===!1&&E.blending===Kr&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:ft,alphaHash:ct,combine:E.combine,mapUv:le&&v(E.map.channel),aoMapUv:U&&v(E.aoMap.channel),lightMapUv:He&&v(E.lightMap.channel),bumpMapUv:Wt&&v(E.bumpMap.channel),normalMapUv:Xt&&v(E.normalMap.channel),displacementMapUv:Tt&&v(E.displacementMap.channel),emissiveMapUv:st&&v(E.emissiveMap.channel),metalnessMapUv:it&&v(E.metalnessMap.channel),roughnessMapUv:y&&v(E.roughnessMap.channel),anisotropyMapUv:rt&&v(E.anisotropyMap.channel),clearcoatMapUv:dt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:_t&&v(E.sheenRoughnessMap.channel),specularMapUv:Kt&&v(E.specularMap.channel),specularColorMapUv:zt&&v(E.specularColorMap.channel),specularIntensityMapUv:ce&&v(E.specularIntensityMap.channel),transmissionMapUv:P&&v(E.transmissionMap.channel),thicknessMapUv:lt&&v(E.thicknessMap.channel),alphaMapUv:$&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Xt||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(le||$),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:At,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Bt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:le&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===ae,decodeVideoTextureEmissive:st&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ci,flipSided:E.side===Ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Nt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&E.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function f(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)x.push(R),x.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(A(x,E),T(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function A(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function T(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const x=_[E.type];let R;if(x){const B=Wn[x];R=mm.clone(B.uniforms)}else R=E.uniforms;return R}function N(E,x){let R;for(let B=0,O=u.length;B<O;B++){const X=u[B];if(X.cacheKey===x){R=X,++R.usedTimes;break}}return R===void 0&&(R=new R0(n,x,E,s),u.push(R)),R}function C(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function b(E){l.remove(E)}function w(){l.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:S,acquireProgram:N,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:w}}function U0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function I0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(p,h,m,_,v,d){let f=n[t];return f===void 0?(f={id:p.id,object:p,geometry:h,material:m,groupOrder:_,renderOrder:p.renderOrder,z:v,group:d},n[t]=f):(f.id=p.id,f.object=p,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=p.renderOrder,f.z=v,f.group=d),t++,f}function o(p,h,m,_,v,d){const f=a(p,h,m,_,v,d);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):e.push(f)}function l(p,h,m,_,v,d){const f=a(p,h,m,_,v,d);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function c(p,h){e.length>1&&e.sort(p||I0),i.length>1&&i.sort(h||Cu),r.length>1&&r.sort(h||Cu)}function u(){for(let p=t,h=n.length;p<h;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function N0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Pu,n.set(i,[a])):r>=s.length?(a=new Pu,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function F0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Yt};break;case"SpotLight":e={position:new F,direction:new F,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function O0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let B0=0;function z0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function k0(n){const t=new F0,e=O0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new pe,a=new pe;function o(c){let u=0,p=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,v=0,d=0,f=0,A=0,T=0,S=0,N=0,C=0,b=0;c.sort(z0);for(let E=0,x=c.length;E<x;E++){const R=c[E],B=R.color,O=R.intensity,X=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*O,p+=B.g*O,h+=B.b*O;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],O);b++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,H=e.get(R);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=q,m++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(B).multiplyScalar(O),q.distance=X,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[v]=q;const J=R.shadow;if(R.map&&(i.spotLightMap[N]=R.map,N++,J.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[v]=J.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=Y,S++}v++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(B).multiplyScalar(O),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[d]=q,d++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const J=R.shadow,H=e.get(R);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=R.shadow.matrix,T++}i.point[_]=q,_++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(O),q.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[f]=q,f++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;const w=i.hash;(w.directionalLength!==m||w.pointLength!==_||w.spotLength!==v||w.rectAreaLength!==d||w.hemiLength!==f||w.numDirectionalShadows!==A||w.numPointShadows!==T||w.numSpotShadows!==S||w.numSpotMaps!==N||w.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=d,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+N-C,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,w.directionalLength=m,w.pointLength=_,w.spotLength=v,w.rectAreaLength=d,w.hemiLength=f,w.numDirectionalShadows=A,w.numPointShadows=T,w.numSpotShadows=S,w.numSpotMaps=N,w.numLightProbes=b,i.version=B0++)}function l(c,u){let p=0,h=0,m=0,_=0,v=0;const d=u.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){const T=c[f];if(T.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),p++}else if(T.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),m++}else if(T.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(d),a.identity(),s.copy(T.matrixWorld),s.premultiply(d),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(d),h++}else if(T.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(d),v++}}}return{setup:o,setupView:l,state:i}}function Du(n){const t=new k0(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function H0(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Du(n),t.set(r,[o])):s>=a.length?(o=new Du(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class G0 extends Ms{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V0 extends Ms{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function q0(n,t,e){let i=new cc;const r=new It,s=new It,a=new ge,o=new G0({depthPacking:Bp}),l=new V0,c={},u=e.maxTextureSize,p={[ki]:Ke,[Ke]:ki,[ci]:ci},h=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Sn;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new De(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih;let f=this.type;this.render=function(C,b,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Bi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=f!==si&&this.type===si,X=f===si&&this.type!==si;for(let Y=0,q=C.length;Y<q;Y++){const J=C[Y],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const nt=H.getFrameExtents();if(r.multiply(nt),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/nt.x),r.x=s.x*nt.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/nt.y),r.y=s.y*nt.y,H.mapSize.y=s.y)),H.map===null||O===!0||X===!0){const yt=this.type!==si?{minFilter:In,magFilter:In}:{};H.map!==null&&H.map.dispose(),H.map=new Mr(r.x,r.y,yt),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ht=H.getViewportCount();for(let yt=0;yt<ht;yt++){const Bt=H.getViewport(yt);a.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),B.viewport(a),H.updateMatrices(J,yt),i=H.getFrustum(),S(b,w,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===si&&A(H,w),H.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(E,x,R)};function A(C,b){const w=t.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Mr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,w,h,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,w,m,v,null)}function T(C,b,w,E){let x=null;const R=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=w.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=x.uuid,O=b.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let Y=X[O];Y===void 0&&(Y=x.clone(),X[O]=Y,b.addEventListener("dispose",N)),x=Y}if(x.visible=b.visible,x.wireframe=b.wireframe,E===si?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:p[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=n.properties.get(x);B.light=w}return x}function S(C,b,w,E,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const O=t.update(C),X=C.material;if(Array.isArray(X)){const Y=O.groups;for(let q=0,J=Y.length;q<J;q++){const H=Y[q],nt=X[H.materialIndex];if(nt&&nt.visible){const ht=T(C,nt,E,x);C.onBeforeShadow(n,C,b,w,O,ht,H),n.renderBufferDirect(w,null,O,ht,C,H),C.onAfterShadow(n,C,b,w,O,ht,H)}}}else if(X.visible){const Y=T(C,X,E,x);C.onBeforeShadow(n,C,b,w,O,Y,null),n.renderBufferDirect(w,null,O,Y,C,null),C.onAfterShadow(n,C,b,w,O,Y,null)}}const B=C.children;for(let O=0,X=B.length;O<X;O++)S(B[O],b,w,E,x)}function N(C){C.target.removeEventListener("dispose",N);for(const w in c){const E=c[w],x=C.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Y0={[nl]:il,[rl]:ol,[sl]:ll,[fs]:al,[il]:nl,[ol]:rl,[ll]:sl,[al]:fs};function j0(n,t){function e(){let P=!1;const lt=new ge;let V=null;const $=new ge(0,0,0,0);return{setMask:function(ft){V!==ft&&!P&&(n.colorMask(ft,ft,ft,ft),V=ft)},setLocked:function(ft){P=ft},setClear:function(ft,ct,Nt,me,Oe){Oe===!0&&(ft*=me,ct*=me,Nt*=me),lt.set(ft,ct,Nt,me),$.equals(lt)===!1&&(n.clearColor(ft,ct,Nt,me),$.copy(lt))},reset:function(){P=!1,V=null,$.set(-1,0,0,0)}}}function i(){let P=!1,lt=!1,V=null,$=null,ft=null;return{setReversed:function(ct){if(lt!==ct){const Nt=t.get("EXT_clip_control");lt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const me=ft;ft=null,this.setClear(me)}lt=ct},getReversed:function(){return lt},setTest:function(ct){ct?ot(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(ct){V!==ct&&!P&&(n.depthMask(ct),V=ct)},setFunc:function(ct){if(lt&&(ct=Y0[ct]),$!==ct){switch(ct){case nl:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case ol:n.depthFunc(n.GREATER);break;case ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ct}},setLocked:function(ct){P=ct},setClear:function(ct){ft!==ct&&(lt&&(ct=1-ct),n.clearDepth(ct),ft=ct)},reset:function(){P=!1,V=null,$=null,ft=null,lt=!1}}}function r(){let P=!1,lt=null,V=null,$=null,ft=null,ct=null,Nt=null,me=null,Oe=null;return{setTest:function(ie){P||(ie?ot(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(ie){lt!==ie&&!P&&(n.stencilMask(ie),lt=ie)},setFunc:function(ie,En,$n){(V!==ie||$!==En||ft!==$n)&&(n.stencilFunc(ie,En,$n),V=ie,$=En,ft=$n)},setOp:function(ie,En,$n){(ct!==ie||Nt!==En||me!==$n)&&(n.stencilOp(ie,En,$n),ct=ie,Nt=En,me=$n)},setLocked:function(ie){P=ie},setClear:function(ie){Oe!==ie&&(n.clearStencil(ie),Oe=ie)},reset:function(){P=!1,lt=null,V=null,$=null,ft=null,ct=null,Nt=null,me=null,Oe=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},p={},h=new WeakMap,m=[],_=null,v=!1,d=null,f=null,A=null,T=null,S=null,N=null,C=null,b=new Yt(0,0,0),w=0,E=!1,x=null,R=null,B=null,O=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=J>=2);let nt=null,ht={};const yt=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),ne=new ge().fromArray(yt),j=new ge().fromArray(Bt);function tt(P,lt,V,$){const ft=new Uint8Array(4),ct=n.createTexture();n.bindTexture(P,ct),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<V;Nt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(lt+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ct}const gt={};gt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(fs),Wt(!1),Xt(Nc),ot(n.CULL_FACE),U(Bi);function ot(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function At(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Ct(P,lt){return p[P]!==lt?(n.bindFramebuffer(P,lt),p[P]=lt,P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=lt),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function Ht(P,lt){let V=m,$=!1;if(P){V=h.get(lt),V===void 0&&(V=[],h.set(lt,V));const ft=P.textures;if(V.length!==ft.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Nt=ft.length;ct<Nt;ct++)V[ct]=n.COLOR_ATTACHMENT0+ct;V.length=ft.length,$=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,$=!0);$&&n.drawBuffers(V)}function le(P){return _!==P?(n.useProgram(P),_=P,!0):!1}const jt={[tr]:n.FUNC_ADD,[up]:n.FUNC_SUBTRACT,[hp]:n.FUNC_REVERSE_SUBTRACT};jt[fp]=n.MIN,jt[dp]=n.MAX;const de={[pp]:n.ZERO,[mp]:n.ONE,[_p]:n.SRC_COLOR,[tl]:n.SRC_ALPHA,[Ep]:n.SRC_ALPHA_SATURATE,[Mp]:n.DST_COLOR,[vp]:n.DST_ALPHA,[gp]:n.ONE_MINUS_SRC_COLOR,[el]:n.ONE_MINUS_SRC_ALPHA,[Sp]:n.ONE_MINUS_DST_COLOR,[xp]:n.ONE_MINUS_DST_ALPHA,[yp]:n.CONSTANT_COLOR,[Tp]:n.ONE_MINUS_CONSTANT_COLOR,[bp]:n.CONSTANT_ALPHA,[Ap]:n.ONE_MINUS_CONSTANT_ALPHA};function U(P,lt,V,$,ft,ct,Nt,me,Oe,ie){if(P===Bi){v===!0&&(At(n.BLEND),v=!1);return}if(v===!1&&(ot(n.BLEND),v=!0),P!==cp){if(P!==d||ie!==E){if((f!==tr||S!==tr)&&(n.blendEquation(n.FUNC_ADD),f=tr,S=tr),ie)switch(P){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFunc(n.ONE,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,T=null,N=null,C=null,b.set(0,0,0),w=0,d=P,E=ie}return}ft=ft||lt,ct=ct||V,Nt=Nt||$,(lt!==f||ft!==S)&&(n.blendEquationSeparate(jt[lt],jt[ft]),f=lt,S=ft),(V!==A||$!==T||ct!==N||Nt!==C)&&(n.blendFuncSeparate(de[V],de[$],de[ct],de[Nt]),A=V,T=$,N=ct,C=Nt),(me.equals(b)===!1||Oe!==w)&&(n.blendColor(me.r,me.g,me.b,Oe),b.copy(me),w=Oe),d=P,E=!1}function He(P,lt){P.side===ci?At(n.CULL_FACE):ot(n.CULL_FACE);let V=P.side===Ke;lt&&(V=!V),Wt(V),P.blending===Kr&&P.transparent===!1?U(Bi):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const $=P.stencilWrite;o.setTest($),$&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),st(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(P){x!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),x=P)}function Xt(P){P!==op?(ot(n.CULL_FACE),P!==R&&(P===Nc?n.cullFace(n.BACK):P===lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),R=P}function Tt(P){P!==B&&(q&&n.lineWidth(P),B=P)}function st(P,lt,V){P?(ot(n.POLYGON_OFFSET_FILL),(O!==lt||X!==V)&&(n.polygonOffset(lt,V),O=lt,X=V)):At(n.POLYGON_OFFSET_FILL)}function it(P){P?ot(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function y(P){P===void 0&&(P=n.TEXTURE0+Y-1),nt!==P&&(n.activeTexture(P),nt=P)}function g(P,lt,V){V===void 0&&(nt===null?V=n.TEXTURE0+Y-1:V=nt);let $=ht[V];$===void 0&&($={type:void 0,texture:void 0},ht[V]=$),($.type!==P||$.texture!==lt)&&(nt!==V&&(n.activeTexture(V),nt=V),n.bindTexture(P,lt||gt[P]),$.type=P,$.texture=lt)}function I(){const P=ht[nt];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(P){ne.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function _t(P){j.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),j.copy(P))}function Kt(P,lt){let V=c.get(lt);V===void 0&&(V=new WeakMap,c.set(lt,V));let $=V.get(P);$===void 0&&($=n.getUniformBlockIndex(lt,P.name),V.set(P,$))}function zt(P,lt){const $=c.get(lt).get(P);l.get(lt)!==$&&(n.uniformBlockBinding(lt,$,P.__bindingPointIndex),l.set(lt,$))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},nt=null,ht={},p={},h=new WeakMap,m=[],_=null,v=!1,d=null,f=null,A=null,T=null,S=null,N=null,C=null,b=new Yt(0,0,0),w=0,E=!1,x=null,R=null,B=null,O=null,X=null,ne.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ot,disable:At,bindFramebuffer:Ct,drawBuffers:Ht,useProgram:le,setBlending:U,setMaterial:He,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Tt,setPolygonOffset:st,setScissorTest:it,activeTexture:y,bindTexture:g,unbindTexture:I,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:pt,texImage3D:bt,updateUBOMapping:Kt,uniformBlockBinding:zt,texStorage2D:Zt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:mt,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:wt,viewport:_t,reset:ce}}function Lu(n,t,e,i){const r=Z0(i);switch(e){case Hh:return n*t;case Vh:return n*t;case Wh:return n*t*2;case Xh:return n*t/r.components*r.byteLength;case sc:return n*t/r.components*r.byteLength;case qh:return n*t*2/r.components*r.byteLength;case ac:return n*t*2/r.components*r.byteLength;case Gh:return n*t*3/r.components*r.byteLength;case Un:return n*t*4/r.components*r.byteLength;case oc:return n*t*4/r.components*r.byteLength;case Da:case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:case _l:return Math.max(n,16)*Math.max(t,8)/4;case dl:case ml:return Math.max(n,8)*Math.max(t,8)/2;case gl:case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Na:case Il:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Yh:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Z0(n){switch(n){case mi:case Bh:return{byteLength:1,components:1};case zs:case zh:case $s:return{byteLength:2,components:1};case ic:case rc:return{byteLength:2,components:4};case xr:case nc:case hi:return{byteLength:4,components:1};case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function K0(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):Wa("canvas")}function v(y,g,I){let K=1;const Z=it(y);if((Z.width>I||Z.height>I)&&(K=I/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const W=Math.floor(K*Z.width),mt=Math.floor(K*Z.height);p===void 0&&(p=_(W,mt));const rt=g?_(W,mt):p;return rt.width=W,rt.height=mt,rt.getContext("2d").drawImage(y,0,0,W,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+mt+")."),rt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function d(y){return y.generateMipmaps}function f(y){n.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,g,I,K,Z=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let W=g;if(g===n.RED&&(I===n.FLOAT&&(W=n.R32F),I===n.HALF_FLOAT&&(W=n.R16F),I===n.UNSIGNED_BYTE&&(W=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.R8UI),I===n.UNSIGNED_SHORT&&(W=n.R16UI),I===n.UNSIGNED_INT&&(W=n.R32UI),I===n.BYTE&&(W=n.R8I),I===n.SHORT&&(W=n.R16I),I===n.INT&&(W=n.R32I)),g===n.RG&&(I===n.FLOAT&&(W=n.RG32F),I===n.HALF_FLOAT&&(W=n.RG16F),I===n.UNSIGNED_BYTE&&(W=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.RG8UI),I===n.UNSIGNED_SHORT&&(W=n.RG16UI),I===n.UNSIGNED_INT&&(W=n.RG32UI),I===n.BYTE&&(W=n.RG8I),I===n.SHORT&&(W=n.RG16I),I===n.INT&&(W=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.RGB8UI),I===n.UNSIGNED_SHORT&&(W=n.RGB16UI),I===n.UNSIGNED_INT&&(W=n.RGB32UI),I===n.BYTE&&(W=n.RGB8I),I===n.SHORT&&(W=n.RGB16I),I===n.INT&&(W=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),I===n.UNSIGNED_INT&&(W=n.RGBA32UI),I===n.BYTE&&(W=n.RGBA8I),I===n.SHORT&&(W=n.RGBA16I),I===n.INT&&(W=n.RGBA32I)),g===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),g===n.RGBA){const mt=Z?Qa:$t.getTransfer(K);I===n.FLOAT&&(W=n.RGBA32F),I===n.HALF_FLOAT&&(W=n.RGBA16F),I===n.UNSIGNED_BYTE&&(W=mt===ae?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function S(y,g){let I;return y?g===null||g===xr||g===ms?I=n.DEPTH24_STENCIL8:g===hi?I=n.DEPTH32F_STENCIL8:g===zs&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xr||g===ms?I=n.DEPTH_COMPONENT24:g===hi?I=n.DEPTH_COMPONENT32F:g===zs&&(I=n.DEPTH_COMPONENT16),I}function N(y,g){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==In&&y.minFilter!==Xn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),w(g),g.isVideoTexture&&u.delete(g)}function b(y){const g=y.target;g.removeEventListener("dispose",b),x(g)}function w(y){const g=i.get(y);if(g.__webglInit===void 0)return;const I=y.source,K=h.get(I);if(K){const Z=K[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(y),Object.keys(K).length===0&&h.delete(I)}i.remove(y)}function E(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const I=y.source,K=h.get(I);delete K[g.__cacheKey],a.memory.textures--}function x(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let Z=0;Z<g.__webglFramebuffer[K].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[K][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)n.deleteFramebuffer(g.__webglFramebuffer[K]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=y.textures;for(let K=0,Z=I.length;K<Z;K++){const W=i.get(I[K]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(I[K])}i.remove(y)}let R=0;function B(){R=0}function O(){const y=R;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),R+=1,y}function X(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Y(y,g){const I=i.get(y);if(y.isVideoTexture&&Tt(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const K=y.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(I,y,g);return}}e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function q(y,g){const I=i.get(y);if(y.version>0&&I.__version!==y.version){j(I,y,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function J(y,g){const I=i.get(y);if(y.version>0&&I.__version!==y.version){j(I,y,g);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function H(y,g){const I=i.get(y);if(y.version>0&&I.__version!==y.version){tt(I,y,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const nt={[hl]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},ht={[In]:n.NEAREST,[Fp]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[ao]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR},yt={[kp]:n.NEVER,[qp]:n.ALWAYS,[Hp]:n.LESS,[Zh]:n.LEQUAL,[Gp]:n.EQUAL,[Xp]:n.GEQUAL,[Vp]:n.GREATER,[Wp]:n.NOTEQUAL};function Bt(y,g){if(g.type===hi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Xn||g.magFilter===ao||g.magFilter===ra||g.magFilter===sr||g.minFilter===Xn||g.minFilter===ao||g.minFilter===ra||g.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,nt[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,nt[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,nt[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ht[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ht[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,yt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===In||g.minFilter!==ra&&g.minFilter!==sr||g.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ne(y,g){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const K=g.source;let Z=h.get(K);Z===void 0&&(Z={},h.set(K,Z));const W=X(g);if(W!==y.__cacheKey){Z[W]===void 0&&(Z[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Z[W].usedTimes++;const mt=Z[y.__cacheKey];mt!==void 0&&(Z[y.__cacheKey].usedTimes--,mt.usedTimes===0&&E(g)),y.__cacheKey=W,y.__webglTexture=Z[W].texture}return I}function j(y,g,I){let K=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=n.TEXTURE_3D);const Z=ne(y,g),W=g.source;e.bindTexture(K,y.__webglTexture,n.TEXTURE0+I);const mt=i.get(W);if(W.version!==mt.__version||Z===!0){e.activeTexture(n.TEXTURE0+I);const rt=$t.getPrimaries($t.workingColorSpace),dt=g.colorSpace===wi?null:$t.getPrimaries(g.colorSpace),Zt=g.colorSpace===wi||rt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Q=v(g.image,!1,r.maxTextureSize);Q=st(g,Q);const pt=s.convert(g.format,g.colorSpace),bt=s.convert(g.type);let wt=T(g.internalFormat,pt,bt,g.colorSpace,g.isVideoTexture);Bt(K,g);let _t;const Kt=g.mipmaps,zt=g.isVideoTexture!==!0,ce=mt.__version===void 0||Z===!0,P=W.dataReady,lt=N(g,Q);if(g.isDepthTexture)wt=S(g.format===_s,g.type),ce&&(zt?e.texStorage2D(n.TEXTURE_2D,1,wt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,wt,Q.width,Q.height,0,pt,bt,null));else if(g.isDataTexture)if(Kt.length>0){zt&&ce&&e.texStorage2D(n.TEXTURE_2D,lt,wt,Kt[0].width,Kt[0].height);for(let V=0,$=Kt.length;V<$;V++)_t=Kt[V],zt?P&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,_t.width,_t.height,pt,bt,_t.data):e.texImage2D(n.TEXTURE_2D,V,wt,_t.width,_t.height,0,pt,bt,_t.data);g.generateMipmaps=!1}else zt?(ce&&e.texStorage2D(n.TEXTURE_2D,lt,wt,Q.width,Q.height),P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,bt,Q.data)):e.texImage2D(n.TEXTURE_2D,0,wt,Q.width,Q.height,0,pt,bt,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){zt&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,wt,Kt[0].width,Kt[0].height,Q.depth);for(let V=0,$=Kt.length;V<$;V++)if(_t=Kt[V],g.format!==Un)if(pt!==null)if(zt){if(P)if(g.layerUpdates.size>0){const ft=Lu(_t.width,_t.height,g.format,g.type);for(const ct of g.layerUpdates){const Nt=_t.data.subarray(ct*ft/_t.data.BYTES_PER_ELEMENT,(ct+1)*ft/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ct,_t.width,_t.height,1,pt,Nt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,Q.depth,pt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,wt,_t.width,_t.height,Q.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,Q.depth,pt,bt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,wt,_t.width,_t.height,Q.depth,0,pt,bt,_t.data)}else{zt&&ce&&e.texStorage2D(n.TEXTURE_2D,lt,wt,Kt[0].width,Kt[0].height);for(let V=0,$=Kt.length;V<$;V++)_t=Kt[V],g.format!==Un?pt!==null?zt?P&&e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,_t.width,_t.height,pt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,V,wt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?P&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,_t.width,_t.height,pt,bt,_t.data):e.texImage2D(n.TEXTURE_2D,V,wt,_t.width,_t.height,0,pt,bt,_t.data)}else if(g.isDataArrayTexture)if(zt){if(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,wt,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const V=Lu(Q.width,Q.height,g.format,g.type);for(const $ of g.layerUpdates){const ft=Q.data.subarray($*V/Q.data.BYTES_PER_ELEMENT,($+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,pt,bt,ft)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,bt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,Q.width,Q.height,Q.depth,0,pt,bt,Q.data);else if(g.isData3DTexture)zt?(ce&&e.texStorage3D(n.TEXTURE_3D,lt,wt,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,bt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,wt,Q.width,Q.height,Q.depth,0,pt,bt,Q.data);else if(g.isFramebufferTexture){if(ce)if(zt)e.texStorage2D(n.TEXTURE_2D,lt,wt,Q.width,Q.height);else{let V=Q.width,$=Q.height;for(let ft=0;ft<lt;ft++)e.texImage2D(n.TEXTURE_2D,ft,wt,V,$,0,pt,bt,null),V>>=1,$>>=1}}else if(Kt.length>0){if(zt&&ce){const V=it(Kt[0]);e.texStorage2D(n.TEXTURE_2D,lt,wt,V.width,V.height)}for(let V=0,$=Kt.length;V<$;V++)_t=Kt[V],zt?P&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,pt,bt,_t):e.texImage2D(n.TEXTURE_2D,V,wt,pt,bt,_t);g.generateMipmaps=!1}else if(zt){if(ce){const V=it(Q);e.texStorage2D(n.TEXTURE_2D,lt,wt,V.width,V.height)}P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,bt,Q)}else e.texImage2D(n.TEXTURE_2D,0,wt,pt,bt,Q);d(g)&&f(K),mt.__version=W.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function tt(y,g,I){if(g.image.length!==6)return;const K=ne(y,g),Z=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const W=i.get(Z);if(Z.version!==W.__version||K===!0){e.activeTexture(n.TEXTURE0+I);const mt=$t.getPrimaries($t.workingColorSpace),rt=g.colorSpace===wi?null:$t.getPrimaries(g.colorSpace),dt=g.colorSpace===wi||mt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Zt=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Zt&&!Q?pt[$]=v(g.image[$],!0,r.maxCubemapSize):pt[$]=Q?g.image[$].image:g.image[$],pt[$]=st(g,pt[$]);const bt=pt[0],wt=s.convert(g.format,g.colorSpace),_t=s.convert(g.type),Kt=T(g.internalFormat,wt,_t,g.colorSpace),zt=g.isVideoTexture!==!0,ce=W.__version===void 0||K===!0,P=Z.dataReady;let lt=N(g,bt);Bt(n.TEXTURE_CUBE_MAP,g);let V;if(Zt){zt&&ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Kt,bt.width,bt.height);for(let $=0;$<6;$++){V=pt[$].mipmaps;for(let ft=0;ft<V.length;ft++){const ct=V[ft];g.format!==Un?wt!==null?zt?P&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,ct.width,ct.height,wt,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Kt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,ct.width,ct.height,wt,_t,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Kt,ct.width,ct.height,0,wt,_t,ct.data)}}}else{if(V=g.mipmaps,zt&&ce){V.length>0&&lt++;const $=it(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Kt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){zt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,wt,_t,pt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Kt,pt[$].width,pt[$].height,0,wt,_t,pt[$].data);for(let ft=0;ft<V.length;ft++){const Nt=V[ft].image[$].image;zt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,Nt.width,Nt.height,wt,_t,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Kt,Nt.width,Nt.height,0,wt,_t,Nt.data)}}else{zt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,wt,_t,pt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Kt,wt,_t,pt[$]);for(let ft=0;ft<V.length;ft++){const ct=V[ft];zt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,wt,_t,ct.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Kt,wt,_t,ct.image[$])}}}d(g)&&f(n.TEXTURE_CUBE_MAP),W.__version=Z.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function gt(y,g,I,K,Z,W){const mt=s.convert(I.format,I.colorSpace),rt=s.convert(I.type),dt=T(I.internalFormat,mt,rt,I.colorSpace),Zt=i.get(g),Q=i.get(I);if(Q.__renderTarget=g,!Zt.__hasExternalTextures){const pt=Math.max(1,g.width>>W),bt=Math.max(1,g.height>>W);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,W,dt,pt,bt,g.depth,0,mt,rt,null):e.texImage2D(Z,W,dt,pt,bt,0,mt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),Xt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,Q.__webglTexture,0,Wt(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,Q.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(y,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const K=g.depthTexture,Z=K&&K.isDepthTexture?K.type:null,W=S(g.stencilBuffer,Z),mt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=Wt(g);Xt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,W,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,W,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,y)}else{const K=g.textures;for(let Z=0;Z<K.length;Z++){const W=K[Z],mt=s.convert(W.format,W.colorSpace),rt=s.convert(W.type),dt=T(W.internalFormat,mt,rt,W.colorSpace),Zt=Wt(g);I&&Xt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,dt,g.width,g.height):Xt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,dt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,dt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(g.depthTexture);K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const Z=K.__webglTexture,W=Wt(g);if(g.depthTexture.format===$r)Xt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(g.depthTexture.format===_s)Xt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ct(y){const g=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const K=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=K}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");At(g.__webglFramebuffer,y)}else if(I){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=n.createRenderbuffer(),ot(g.__webglDepthbuffer[K],y,!1);else{const Z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ot(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(y,g,I){const K=i.get(y);g!==void 0&&gt(K.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ct(y)}function le(y){const g=y.texture,I=i.get(y),K=i.get(g);y.addEventListener("dispose",b);const Z=y.textures,W=y.isWebGLCubeRenderTarget===!0,mt=Z.length>1;if(mt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=g.version,a.memory.textures++),W){I.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[rt]=[];for(let dt=0;dt<g.mipmaps.length;dt++)I.__webglFramebuffer[rt][dt]=n.createFramebuffer()}else I.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let rt=0;rt<g.mipmaps.length;rt++)I.__webglFramebuffer[rt]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(mt)for(let rt=0,dt=Z.length;rt<dt;rt++){const Zt=i.get(Z[rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&Xt(y)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const dt=Z[rt];I.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[rt]);const Zt=s.convert(dt.format,dt.colorSpace),Q=s.convert(dt.type),pt=T(dt.internalFormat,Zt,Q,dt.colorSpace,y.isXRRenderTarget===!0),bt=Wt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,pt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,I.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(I.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,g);for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0)for(let dt=0;dt<g.mipmaps.length;dt++)gt(I.__webglFramebuffer[rt][dt],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else gt(I.__webglFramebuffer[rt],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);d(g)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let rt=0,dt=Z.length;rt<dt;rt++){const Zt=Z[rt],Q=i.get(Zt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Bt(n.TEXTURE_2D,Zt),gt(I.__webglFramebuffer,y,Zt,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,0),d(Zt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(rt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),Bt(rt,g),g.mipmaps&&g.mipmaps.length>0)for(let dt=0;dt<g.mipmaps.length;dt++)gt(I.__webglFramebuffer[dt],y,g,n.COLOR_ATTACHMENT0,rt,dt);else gt(I.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,rt,0);d(g)&&f(rt),e.unbindTexture()}y.depthBuffer&&Ct(y)}function jt(y){const g=y.textures;for(let I=0,K=g.length;I<K;I++){const Z=g[I];if(d(Z)){const W=A(y),mt=i.get(Z).__webglTexture;e.bindTexture(W,mt),f(W),e.unbindTexture()}}}const de=[],U=[];function He(y){if(y.samples>0){if(Xt(y)===!1){const g=y.textures,I=y.width,K=y.height;let Z=n.COLOR_BUFFER_BIT;const W=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(y),rt=g.length>1;if(rt)for(let dt=0;dt<g.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<g.length;dt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);const Zt=i.get(g[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,I,K,0,0,I,K,Z,n.NEAREST),l===!0&&(de.length=0,U.length=0,de.push(n.COLOR_ATTACHMENT0+dt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(de.push(W),U.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let dt=0;dt<g.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);const Zt=i.get(g[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Wt(y){return Math.min(r.maxSamples,y.samples)}function Xt(y){const g=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Tt(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function st(y,g){const I=y.colorSpace,K=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==xs&&I!==wi&&($t.getTransfer(I)===ae?(K!==Un||Z!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function it(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Ht,this.setupRenderTarget=le,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Xt}function $0(n,t){function e(i,r=wi){let s;const a=$t.getTransfer(r);if(i===mi)return n.UNSIGNED_BYTE;if(i===ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return n.BYTE;if(i===zh)return n.SHORT;if(i===zs)return n.UNSIGNED_SHORT;if(i===nc)return n.INT;if(i===xr)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===$s)return n.HALF_FLOAT;if(i===Hh)return n.ALPHA;if(i===Gh)return n.RGB;if(i===Un)return n.RGBA;if(i===Vh)return n.LUMINANCE;if(i===Wh)return n.LUMINANCE_ALPHA;if(i===$r)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===Xh)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===qh)return n.RG;if(i===ac)return n.RG_INTEGER;if(i===oc)return n.RGBA_INTEGER;if(i===Da||i===La||i===Ua||i===Ia)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===pl||i===ml||i===_l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===vl||i===xl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gl||i===vl)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ml||i===Sl||i===El||i===yl||i===Tl||i===bl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Ul)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ml)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Al)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Na||i===Il||i===Nl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Na)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yh||i===Fl||i===Ol||i===Bl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Na)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class J0 extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ar extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q0={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,i),f=this._getHandJoint(c,v);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ar;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new $e,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Hi({vertexShader:tx,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ix extends Tr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,h=null,m=null,_=null;const v=new nx,d=e.getContextAttributes();let f=null,A=null;const T=[],S=[],N=new It;let C=null;const b=new _n;b.viewport=new ge;const w=new _n;w.viewport=new ge;const E=[b,w],x=new J0;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=T[j];return tt===void 0&&(tt=new No,T[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=T[j];return tt===void 0&&(tt=new No,T[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=T[j];return tt===void 0&&(tt=new No,T[j]=tt),tt.getHandSpace()};function O(j){const tt=S.indexOf(j.inputSource);if(tt===-1)return;const gt=T[tt];gt!==void 0&&(gt.update(j.inputSource,j.frame,c||a),gt.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let j=0;j<T.length;j++){const tt=S[j];tt!==null&&(S[j]=null,T[j].disconnect(tt))}R=null,B=null,v.reset(),t.setRenderTarget(f),m=null,h=null,p=null,r=null,A=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),d.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const tt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Mr(m.framebufferWidth,m.framebufferHeight,{format:Un,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let tt=null,gt=null,ot=null;d.depth&&(ot=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=d.stencil?_s:$r,gt=d.stencil?ms:xr);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};p=new XRWebGLBinding(r,e),h=p.createProjectionLayer(At),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),A=new Mr(h.textureWidth,h.textureHeight,{format:Un,type:mi,depthTexture:new cf(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(j){for(let tt=0;tt<j.removed.length;tt++){const gt=j.removed[tt],ot=S.indexOf(gt);ot>=0&&(S[ot]=null,T[ot].disconnect(gt))}for(let tt=0;tt<j.added.length;tt++){const gt=j.added[tt];let ot=S.indexOf(gt);if(ot===-1){for(let Ct=0;Ct<T.length;Ct++)if(Ct>=S.length){S.push(gt),ot=Ct;break}else if(S[Ct]===null){S[Ct]=gt,ot=Ct;break}if(ot===-1)break}const At=T[ot];At&&At.connect(gt)}}const q=new F,J=new F;function H(j,tt,gt){q.setFromMatrixPosition(tt.matrixWorld),J.setFromMatrixPosition(gt.matrixWorld);const ot=q.distanceTo(J),At=tt.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,Ht=At[14]/(At[10]-1),le=At[14]/(At[10]+1),jt=(At[9]+1)/At[5],de=(At[9]-1)/At[5],U=(At[8]-1)/At[0],He=(Ct[8]+1)/Ct[0],Wt=Ht*U,Xt=Ht*He,Tt=ot/(-U+He),st=Tt*-U;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(st),j.translateZ(Tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const it=Ht+Tt,y=le+Tt,g=Wt-st,I=Xt+(ot-st),K=jt*le/y*it,Z=de*le/y*it;j.projectionMatrix.makePerspective(g,I,K,Z,it,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function nt(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let tt=j.near,gt=j.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),x.near=w.near=b.near=tt,x.far=w.far=b.far=gt,(R!==x.near||B!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,B=x.far),b.layers.mask=j.layers.mask|2,w.layers.mask=j.layers.mask|4,x.layers.mask=b.layers.mask|w.layers.mask;const ot=j.parent,At=x.cameras;nt(x,ot);for(let Ct=0;Ct<At.length;Ct++)nt(At[Ct],ot);At.length===2?H(x,b,w):x.projectionMatrix.copy(b.projectionMatrix),ht(j,x,ot)};function ht(j,tt,gt){gt===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(gt.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let yt=null;function Bt(j,tt){if(u=tt.getViewerPose(c||a),_=tt,u!==null){const gt=u.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let ot=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let Ct=0;Ct<gt.length;Ct++){const Ht=gt[Ct];let le=null;if(m!==null)le=m.getViewport(Ht);else{const de=p.getViewSubImage(h,Ht);le=de.viewport,Ct===0&&(t.setRenderTargetTextures(A,de.colorTexture,h.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(A))}let jt=E[Ct];jt===void 0&&(jt=new _n,jt.layers.enable(Ct),jt.viewport=new ge,E[Ct]=jt),jt.matrix.fromArray(Ht.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Ht.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(x.matrix.copy(jt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(jt)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")){const Ct=p.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&v.init(t,Ct,r.renderState)}}for(let gt=0;gt<T.length;gt++){const ot=S[gt],At=T[gt];ot!==null&&At!==void 0&&At.update(ot,tt,c||a)}yt&&yt(j,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}const ne=new of;ne.setAnimationLoop(Bt),this.setAnimationLoop=function(j){yt=j},this.dispose=function(){}}}const $i=new jn,rx=new pe;function sx(n,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,rf(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,A,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(d,f):f.isMeshToonMaterial?(s(d,f),p(d,f)):f.isMeshPhongMaterial?(s(d,f),u(d,f)):f.isMeshStandardMaterial?(s(d,f),h(d,f),f.isMeshPhysicalMaterial&&m(d,f,S)):f.isMeshMatcapMaterial?(s(d,f),_(d,f)):f.isMeshDepthMaterial?s(d,f):f.isMeshDistanceMaterial?(s(d,f),v(d,f)):f.isMeshNormalMaterial?s(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,A,T):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Ke&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Ke&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const A=t.get(f),T=A.envMap,S=A.envMapRotation;T&&(d.envMap.value=T,$i.copy(S),$i.x*=-1,$i.y*=-1,$i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),d.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler($i)),d.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,A,T){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*A,d.scale.value=T*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function p(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,A){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ke&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,f){f.matcap&&(d.matcap.value=f.matcap)}function v(d,f){const A=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ax(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=r[A.id];S===void 0&&(_(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",d));const N=T.program;i.updateUBOMapping(A,N);const C=t.render.frame;s[A.id]!==C&&(h(A),s[A.id]=C)}function u(A){const T=p();A.__bindingPointIndex=T;const S=n.createBuffer(),N=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,N,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function p(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const T=r[A.id],S=A.uniforms,N=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,b=S.length;C<b;C++){const w=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,x=w.length;E<x;E++){const R=w[E];if(m(R,C,E,N)===!0){const B=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let Y=0;Y<O.length;Y++){const q=O[Y],J=v(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,B+X,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,T,S,N){const C=A.value,b=T+"_"+S;if(N[b]===void 0)return typeof C=="number"||typeof C=="boolean"?N[b]=C:N[b]=C.clone(),!0;{const w=N[b];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return N[b]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function _(A){const T=A.uniforms;let S=0;const N=16;for(let b=0,w=T.length;b<w;b++){const E=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,R=E.length;x<R;x++){const B=E[x],O=Array.isArray(B.value)?B.value:[B.value];for(let X=0,Y=O.length;X<Y;X++){const q=O[X],J=v(q),H=S%N,nt=H%J.boundary,ht=H+nt;S+=nt,ht!==0&&N-ht<J.storage&&(S+=N-ht),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=J.storage}}}const C=S%N;return C>0&&(S+=N-C),A.__size=S,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function d(A){const T=A.target;T.removeEventListener("dispose",d);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class ox{constructor(t={}){const{canvas:e=Zp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),v=new Int32Array(4);let d=null,f=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=zi,this.toneMappingExposure=1;const S=this;let N=!1,C=0,b=0,w=null,E=-1,x=null;const R=new ge,B=new ge;let O=null;const X=new Yt(0);let Y=0,q=e.width,J=e.height,H=1,nt=null,ht=null;const yt=new ge(0,0,q,J),Bt=new ge(0,0,q,J);let ne=!1;const j=new cc;let tt=!1,gt=!1;const ot=new pe,At=new pe,Ct=new F,Ht=new ge,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function de(){return w===null?H:1}let U=i;function He(M,D){return e.getContext(M,D)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ec}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){const D="webgl2";if(U=He(D,M),U===null)throw He(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Wt,Xt,Tt,st,it,y,g,I,K,Z,W,mt,rt,dt,Zt,Q,pt,bt,wt,_t,Kt,zt,ce,P;function lt(){Wt=new fv(U),Wt.init(),zt=new $0(U,Wt),Xt=new av(U,Wt,t,zt),Tt=new j0(U,Wt),Xt.reverseDepthBuffer&&h&&Tt.buffers.depth.setReversed(!0),st=new mv(U),it=new U0,y=new K0(U,Wt,Tt,it,Xt,zt,st),g=new lv(S),I=new hv(S),K=new Em(U),ce=new rv(U,K),Z=new dv(U,K,st,ce),W=new gv(U,Z,K,st),wt=new _v(U,Xt,y),Q=new ov(it),mt=new L0(S,g,I,Wt,Xt,ce,Q),rt=new sx(S,it),dt=new N0,Zt=new H0(Wt),bt=new iv(S,g,I,Tt,W,m,l),pt=new q0(S,W,Xt),P=new ax(U,st,Xt,Tt),_t=new sv(U,Wt,st),Kt=new pv(U,Wt,st),st.programs=mt.programs,S.capabilities=Xt,S.extensions=Wt,S.properties=it,S.renderLists=dt,S.shadowMap=pt,S.state=Tt,S.info=st}lt();const V=new ix(S,U);this.xr=V,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Wt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Wt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(q,J,!1))},this.getSize=function(M){return M.set(q,J)},this.setSize=function(M,D,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,J=D,e.width=Math.floor(M*H),e.height=Math.floor(D*H),z===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(q*H,J*H).floor()},this.setDrawingBufferSize=function(M,D,z){q=M,J=D,H=z,e.width=Math.floor(M*z),e.height=Math.floor(D*z),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,D,z,k){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,D,z,k),Tt.viewport(R.copy(yt).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Bt)},this.setScissor=function(M,D,z,k){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,D,z,k),Tt.scissor(B.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){Tt.setScissorTest(ne=M)},this.setOpaqueSort=function(M){nt=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(M=!0,D=!0,z=!0){let k=0;if(M){let L=!1;if(w!==null){const et=w.texture.format;L=et===oc||et===ac||et===sc}if(L){const et=w.texture.type,ut=et===mi||et===xr||et===zs||et===ms||et===ic||et===rc,vt=bt.getClearColor(),xt=bt.getClearAlpha(),Pt=vt.r,Ft=vt.g,Mt=vt.b;ut?(_[0]=Pt,_[1]=Ft,_[2]=Mt,_[3]=xt,U.clearBufferuiv(U.COLOR,0,_)):(v[0]=Pt,v[1]=Ft,v[2]=Mt,v[3]=xt,U.clearBufferiv(U.COLOR,0,v))}else k|=U.COLOR_BUFFER_BIT}D&&(k|=U.DEPTH_BUFFER_BIT),z&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Zt.dispose(),it.dispose(),g.dispose(),I.dispose(),W.dispose(),ce.dispose(),P.dispose(),mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",pc),V.removeEventListener("sessionend",mc),Wi.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=st.autoReset,D=pt.enabled,z=pt.autoUpdate,k=pt.needsUpdate,L=pt.type;lt(),st.autoReset=M,pt.enabled=D,pt.autoUpdate=z,pt.needsUpdate=k,pt.type=L}function ct(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Nt(M){const D=M.target;D.removeEventListener("dispose",Nt),me(D)}function me(M){Oe(M),it.remove(M)}function Oe(M){const D=it.get(M).programs;D!==void 0&&(D.forEach(function(z){mt.releaseProgram(z)}),M.isShaderMaterial&&mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,z,k,L,et){D===null&&(D=le);const ut=L.isMesh&&L.matrixWorld.determinant()<0,vt=vf(M,D,z,k,L);Tt.setMaterial(k,ut);let xt=z.index,Pt=1;if(k.wireframe===!0){if(xt=Z.getWireframeAttribute(z),xt===void 0)return;Pt=2}const Ft=z.drawRange,Mt=z.attributes.position;let Jt=Ft.start*Pt,ue=(Ft.start+Ft.count)*Pt;et!==null&&(Jt=Math.max(Jt,et.start*Pt),ue=Math.min(ue,(et.start+et.count)*Pt)),xt!==null?(Jt=Math.max(Jt,0),ue=Math.min(ue,xt.count)):Mt!=null&&(Jt=Math.max(Jt,0),ue=Math.min(ue,Mt.count));const he=ue-Jt;if(he<0||he===1/0)return;ce.setup(L,k,vt,z,xt);let We,Qt=_t;if(xt!==null&&(We=K.get(xt),Qt=Kt,Qt.setIndex(We)),L.isMesh)k.wireframe===!0?(Tt.setLineWidth(k.wireframeLinewidth*de()),Qt.setMode(U.LINES)):Qt.setMode(U.TRIANGLES);else if(L.isLine){let Et=k.linewidth;Et===void 0&&(Et=1),Tt.setLineWidth(Et*de()),L.isLineSegments?Qt.setMode(U.LINES):L.isLineLoop?Qt.setMode(U.LINE_LOOP):Qt.setMode(U.LINE_STRIP)}else L.isPoints?Qt.setMode(U.POINTS):L.isSprite&&Qt.setMode(U.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Qt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Et=L._multiDrawStarts,Jn=L._multiDrawCounts,te=L._multiDrawCount,yn=xt?K.get(xt).bytesPerElement:1,br=it.get(k).currentProgram.getUniforms();for(let Je=0;Je<te;Je++)br.setValue(U,"_gl_DrawID",Je),Qt.render(Et[Je]/yn,Jn[Je])}else if(L.isInstancedMesh)Qt.renderInstances(Jt,he,L.count);else if(z.isInstancedBufferGeometry){const Et=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Jn=Math.min(z.instanceCount,Et);Qt.renderInstances(Jt,he,Jn)}else Qt.render(Jt,he)};function ie(M,D,z){M.transparent===!0&&M.side===ci&&M.forceSinglePass===!1?(M.side=Ke,M.needsUpdate=!0,ea(M,D,z),M.side=ki,M.needsUpdate=!0,ea(M,D,z),M.side=ci):ea(M,D,z)}this.compile=function(M,D,z=null){z===null&&(z=M),f=Zt.get(z),f.init(D),T.push(f),z.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),M!==z&&M.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();const k=new Set;return M.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const et=L.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const vt=et[ut];ie(vt,z,L),k.add(vt)}else ie(et,z,L),k.add(et)}),T.pop(),f=null,k},this.compileAsync=function(M,D,z=null){const k=this.compile(M,D,z);return new Promise(L=>{function et(){if(k.forEach(function(ut){it.get(ut).currentProgram.isReady()&&k.delete(ut)}),k.size===0){L(M);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let En=null;function $n(M){En&&En(M)}function pc(){Wi.stop()}function mc(){Wi.start()}const Wi=new of;Wi.setAnimationLoop($n),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(M){En=M,V.setAnimationLoop(M),M===null?Wi.stop():Wi.start()},V.addEventListener("sessionstart",pc),V.addEventListener("sessionend",mc),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,D,w),f=Zt.get(M,T.length),f.init(D),T.push(f),At.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(At),gt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,gt),d=dt.get(M,A.length),d.init(),A.push(d),V.enabled===!0&&V.isPresenting===!0){const et=S.xr.getDepthSensingMesh();et!==null&&ro(et,D,-1/0,S.sortObjects)}ro(M,D,0,S.sortObjects),d.finish(),S.sortObjects===!0&&d.sort(nt,ht),jt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,jt&&bt.addToRenderList(d,M),this.info.render.frame++,tt===!0&&Q.beginShadows();const z=f.state.shadowsArray;pt.render(z,M,D),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=d.opaque,L=d.transmissive;if(f.setupLights(),D.isArrayCamera){const et=D.cameras;if(L.length>0)for(let ut=0,vt=et.length;ut<vt;ut++){const xt=et[ut];gc(k,L,M,xt)}jt&&bt.render(M);for(let ut=0,vt=et.length;ut<vt;ut++){const xt=et[ut];_c(d,M,xt,xt.viewport)}}else L.length>0&&gc(k,L,M,D),jt&&bt.render(M),_c(d,M,D);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(S,M,D),ce.resetDefaultState(),E=-1,x=null,T.pop(),T.length>0?(f=T[T.length-1],tt===!0&&Q.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?d=A[A.length-1]:d=null};function ro(M,D,z,k){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){k&&Ht.setFromMatrixPosition(M.matrixWorld).applyMatrix4(At);const ut=W.update(M),vt=M.material;vt.visible&&d.push(M,ut,vt,z,Ht.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){const ut=W.update(M),vt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ht.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ht.copy(ut.boundingSphere.center)),Ht.applyMatrix4(M.matrixWorld).applyMatrix4(At)),Array.isArray(vt)){const xt=ut.groups;for(let Pt=0,Ft=xt.length;Pt<Ft;Pt++){const Mt=xt[Pt],Jt=vt[Mt.materialIndex];Jt&&Jt.visible&&d.push(M,ut,Jt,z,Ht.z,Mt)}}else vt.visible&&d.push(M,ut,vt,z,Ht.z,null)}}const et=M.children;for(let ut=0,vt=et.length;ut<vt;ut++)ro(et[ut],D,z,k)}function _c(M,D,z,k){const L=M.opaque,et=M.transmissive,ut=M.transparent;f.setupLightsView(z),tt===!0&&Q.setGlobalState(S.clippingPlanes,z),k&&Tt.viewport(R.copy(k)),L.length>0&&ta(L,D,z),et.length>0&&ta(et,D,z),ut.length>0&&ta(ut,D,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function gc(M,D,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Mr(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?$s:mi,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const et=f.state.transmissionRenderTarget[k.id],ut=k.viewport||R;et.setSize(ut.z,ut.w);const vt=S.getRenderTarget();S.setRenderTarget(et),S.getClearColor(X),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),jt&&bt.render(z);const xt=S.toneMapping;S.toneMapping=zi;const Pt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),tt===!0&&Q.setGlobalState(S.clippingPlanes,k),ta(M,z,k),y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Mt=0,Jt=D.length;Mt<Jt;Mt++){const ue=D[Mt],he=ue.object,We=ue.geometry,Qt=ue.material,Et=ue.group;if(Qt.side===ci&&he.layers.test(k.layers)){const Jn=Qt.side;Qt.side=Ke,Qt.needsUpdate=!0,vc(he,z,k,We,Qt,Et),Qt.side=Jn,Qt.needsUpdate=!0,Ft=!0}}Ft===!0&&(y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et))}S.setRenderTarget(vt),S.setClearColor(X,Y),Pt!==void 0&&(k.viewport=Pt),S.toneMapping=xt}function ta(M,D,z){const k=D.isScene===!0?D.overrideMaterial:null;for(let L=0,et=M.length;L<et;L++){const ut=M[L],vt=ut.object,xt=ut.geometry,Pt=k===null?ut.material:k,Ft=ut.group;vt.layers.test(z.layers)&&vc(vt,D,z,xt,Pt,Ft)}}function vc(M,D,z,k,L,et){M.onBeforeRender(S,D,z,k,L,et),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),L.onBeforeRender(S,D,z,k,M,et),L.transparent===!0&&L.side===ci&&L.forceSinglePass===!1?(L.side=Ke,L.needsUpdate=!0,S.renderBufferDirect(z,D,k,L,M,et),L.side=ki,L.needsUpdate=!0,S.renderBufferDirect(z,D,k,L,M,et),L.side=ci):S.renderBufferDirect(z,D,k,L,M,et),M.onAfterRender(S,D,z,k,L,et)}function ea(M,D,z){D.isScene!==!0&&(D=le);const k=it.get(M),L=f.state.lights,et=f.state.shadowsArray,ut=L.state.version,vt=mt.getParameters(M,L.state,et,D,z),xt=mt.getProgramCacheKey(vt);let Pt=k.programs;k.environment=M.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(M.isMeshStandardMaterial?I:g).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",Nt),Pt=new Map,k.programs=Pt);let Ft=Pt.get(xt);if(Ft!==void 0){if(k.currentProgram===Ft&&k.lightsStateVersion===ut)return Mc(M,vt),Ft}else vt.uniforms=mt.getUniforms(M),M.onBeforeCompile(vt,S),Ft=mt.acquireProgram(vt,xt),Pt.set(xt,Ft),k.uniforms=vt.uniforms;const Mt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Mt.clippingPlanes=Q.uniform),Mc(M,vt),k.needsLights=Mf(M),k.lightsStateVersion=ut,k.needsLights&&(Mt.ambientLightColor.value=L.state.ambient,Mt.lightProbe.value=L.state.probe,Mt.directionalLights.value=L.state.directional,Mt.directionalLightShadows.value=L.state.directionalShadow,Mt.spotLights.value=L.state.spot,Mt.spotLightShadows.value=L.state.spotShadow,Mt.rectAreaLights.value=L.state.rectArea,Mt.ltc_1.value=L.state.rectAreaLTC1,Mt.ltc_2.value=L.state.rectAreaLTC2,Mt.pointLights.value=L.state.point,Mt.pointLightShadows.value=L.state.pointShadow,Mt.hemisphereLights.value=L.state.hemi,Mt.directionalShadowMap.value=L.state.directionalShadowMap,Mt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Mt.spotShadowMap.value=L.state.spotShadowMap,Mt.spotLightMatrix.value=L.state.spotLightMatrix,Mt.spotLightMap.value=L.state.spotLightMap,Mt.pointShadowMap.value=L.state.pointShadowMap,Mt.pointShadowMatrix.value=L.state.pointShadowMatrix),k.currentProgram=Ft,k.uniformsList=null,Ft}function xc(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Oa.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Mc(M,D){const z=it.get(M);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function vf(M,D,z,k,L){D.isScene!==!0&&(D=le),y.resetTextureUnits();const et=D.fog,ut=k.isMeshStandardMaterial?D.environment:null,vt=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xs,xt=(k.isMeshStandardMaterial?I:g).get(k.envMap||ut),Pt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Mt=!!z.morphAttributes.position,Jt=!!z.morphAttributes.normal,ue=!!z.morphAttributes.color;let he=zi;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(he=S.toneMapping);const We=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qt=We!==void 0?We.length:0,Et=it.get(k),Jn=f.state.lights;if(tt===!0&&(gt===!0||M!==x)){const an=M===x&&k.id===E;Q.setState(k,M,an)}let te=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Jn.state.version||Et.outputColorSpace!==vt||L.isBatchedMesh&&Et.batching===!1||!L.isBatchedMesh&&Et.batching===!0||L.isBatchedMesh&&Et.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Et.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Et.instancing===!1||!L.isInstancedMesh&&Et.instancing===!0||L.isSkinnedMesh&&Et.skinning===!1||!L.isSkinnedMesh&&Et.skinning===!0||L.isInstancedMesh&&Et.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Et.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Et.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Et.instancingMorph===!1&&L.morphTexture!==null||Et.envMap!==xt||k.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Q.numPlanes||Et.numIntersection!==Q.numIntersection)||Et.vertexAlphas!==Pt||Et.vertexTangents!==Ft||Et.morphTargets!==Mt||Et.morphNormals!==Jt||Et.morphColors!==ue||Et.toneMapping!==he||Et.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Et.__version=k.version);let yn=Et.currentProgram;te===!0&&(yn=ea(k,D,L));let br=!1,Je=!1,Es=!1;const fe=yn.getUniforms(),On=Et.uniforms;if(Tt.useProgram(yn.program)&&(br=!0,Je=!0,Es=!0),k.id!==E&&(E=k.id,Je=!0),br||x!==M){Tt.buffers.depth.getReversed()?(ot.copy(M.projectionMatrix),$p(ot),Jp(ot),fe.setValue(U,"projectionMatrix",ot)):fe.setValue(U,"projectionMatrix",M.projectionMatrix),fe.setValue(U,"viewMatrix",M.matrixWorldInverse);const gi=fe.map.cameraPosition;gi!==void 0&&gi.setValue(U,Ct.setFromMatrixPosition(M.matrixWorld)),Xt.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Je=!0,Es=!0)}if(L.isSkinnedMesh){fe.setOptional(U,L,"bindMatrix"),fe.setOptional(U,L,"bindMatrixInverse");const an=L.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),fe.setValue(U,"boneTexture",an.boneTexture,y))}L.isBatchedMesh&&(fe.setOptional(U,L,"batchingTexture"),fe.setValue(U,"batchingTexture",L._matricesTexture,y),fe.setOptional(U,L,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",L._indirectTexture,y),fe.setOptional(U,L,"batchingColorTexture"),L._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",L._colorsTexture,y));const ys=z.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&wt.update(L,z,yn),(Je||Et.receiveShadow!==L.receiveShadow)&&(Et.receiveShadow=L.receiveShadow,fe.setValue(U,"receiveShadow",L.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(On.envMap.value=xt,On.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(On.envMapIntensity.value=D.environmentIntensity),Je&&(fe.setValue(U,"toneMappingExposure",S.toneMappingExposure),Et.needsLights&&xf(On,Es),et&&k.fog===!0&&rt.refreshFogUniforms(On,et),rt.refreshMaterialUniforms(On,k,H,J,f.state.transmissionRenderTarget[M.id]),Oa.upload(U,xc(Et),On,y)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Oa.upload(U,xc(Et),On,y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(U,"center",L.center),fe.setValue(U,"modelViewMatrix",L.modelViewMatrix),fe.setValue(U,"normalMatrix",L.normalMatrix),fe.setValue(U,"modelMatrix",L.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const an=k.uniformsGroups;for(let gi=0,vi=an.length;gi<vi;gi++){const Sc=an[gi];P.update(Sc,yn),P.bind(Sc,yn)}}return yn}function xf(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Mf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,D,z){it.get(M.texture).__webglTexture=D,it.get(M.depthTexture).__webglTexture=z;const k=it.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const z=it.get(M);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,z=0){w=M,C=D,b=z;let k=!0,L=null,et=!1,ut=!1;if(M){const xt=it.get(M);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(xt.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(xt.__hasExternalTextures)y.rebindTextures(M,it.get(M.texture).__webglTexture,it.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Mt=M.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&it.has(Mt)&&(M.width!==Mt.image.width||M.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);const Ft=it.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[D])?L=Ft[D][z]:L=Ft[D],et=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?L=it.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?L=Ft[z]:L=Ft,R.copy(M.viewport),B.copy(M.scissor),O=M.scissorTest}else R.copy(yt).multiplyScalar(H).floor(),B.copy(Bt).multiplyScalar(H).floor(),O=ne;if(Tt.bindFramebuffer(U.FRAMEBUFFER,L)&&k&&Tt.drawBuffers(M,L),Tt.viewport(R),Tt.scissor(B),Tt.setScissorTest(O),et){const xt=it.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,z)}else if(ut){const xt=it.get(M.texture),Pt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,z||0,Pt)}E=-1},this.readRenderTargetPixels=function(M,D,z,k,L,et,ut){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=it.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){Tt.bindFramebuffer(U.FRAMEBUFFER,vt);try{const xt=M.texture,Pt=xt.format,Ft=xt.type;if(!Xt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-k&&z>=0&&z<=M.height-L&&U.readPixels(D,z,k,L,zt.convert(Pt),zt.convert(Ft),et)}finally{const xt=w!==null?it.get(w).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(M,D,z,k,L,et,ut){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=it.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){const xt=M.texture,Pt=xt.format,Ft=xt.type;if(!Xt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-k&&z>=0&&z<=M.height-L){Tt.bindFramebuffer(U.FRAMEBUFFER,vt);const Mt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Mt),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),U.readPixels(D,z,k,L,zt.convert(Pt),zt.convert(Ft),0);const Jt=w!==null?it.get(w).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Jt);const ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Kp(U,ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Mt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(Mt),U.deleteSync(ue),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,z=0){M.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-z),L=Math.floor(M.image.width*k),et=Math.floor(M.image.height*k),ut=D!==null?D.x:0,vt=D!==null?D.y:0;y.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,ut,vt,L,et),Tt.unbindTexture()},this.copyTextureToTexture=function(M,D,z=null,k=null,L=0){M.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],D=arguments[2],L=arguments[3]||0,z=null);let et,ut,vt,xt,Pt,Ft,Mt,Jt,ue;const he=M.isCompressedTexture?M.mipmaps[L]:M.image;z!==null?(et=z.max.x-z.min.x,ut=z.max.y-z.min.y,vt=z.isBox3?z.max.z-z.min.z:1,xt=z.min.x,Pt=z.min.y,Ft=z.isBox3?z.min.z:0):(et=he.width,ut=he.height,vt=he.depth||1,xt=0,Pt=0,Ft=0),k!==null?(Mt=k.x,Jt=k.y,ue=k.z):(Mt=0,Jt=0,ue=0);const We=zt.convert(D.format),Qt=zt.convert(D.type);let Et;D.isData3DTexture?(y.setTexture3D(D,0),Et=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(y.setTexture2DArray(D,0),Et=U.TEXTURE_2D_ARRAY):(y.setTexture2D(D,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Jn=U.getParameter(U.UNPACK_ROW_LENGTH),te=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=U.getParameter(U.UNPACK_SKIP_PIXELS),br=U.getParameter(U.UNPACK_SKIP_ROWS),Je=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);const Es=M.isDataArrayTexture||M.isData3DTexture,fe=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const On=it.get(M),ys=it.get(D),an=it.get(On.__renderTarget),gi=it.get(ys.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,an.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let vi=0;vi<vt;vi++)Es&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,it.get(M).__webglTexture,L,Ft+vi),M.isDepthTexture?(fe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,it.get(D).__webglTexture,L,ue+vi),U.blitFramebuffer(xt,Pt,et,ut,Mt,Jt,et,ut,U.DEPTH_BUFFER_BIT,U.NEAREST)):fe?U.copyTexSubImage3D(Et,L,Mt,Jt,ue+vi,xt,Pt,et,ut):U.copyTexSubImage2D(Et,L,Mt,Jt,ue+vi,xt,Pt,et,ut);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else fe?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Et,L,Mt,Jt,ue,et,ut,vt,We,Qt,he.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,L,Mt,Jt,ue,et,ut,vt,We,he.data):U.texSubImage3D(Et,L,Mt,Jt,ue,et,ut,vt,We,Qt,he):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,L,Mt,Jt,et,ut,We,Qt,he.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,L,Mt,Jt,he.width,he.height,We,he.data):U.texSubImage2D(U.TEXTURE_2D,L,Mt,Jt,et,ut,We,Qt,he);U.pixelStorei(U.UNPACK_ROW_LENGTH,Jn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,te),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),U.pixelStorei(U.UNPACK_SKIP_ROWS,br),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Je),L===0&&D.generateMipmaps&&U.generateMipmap(Et),Tt.unbindTexture()},this.copyTextureToTexture3D=function(M,D,z=null,k=null,L=0){return M.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,M=arguments[2],D=arguments[3],L=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,z,k,L)},this.initRenderTarget=function(M){it.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){C=0,b=0,w=null,Tt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class lx extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class io extends Ms{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qa=new F,Ya=new F,Uu=new pe,Ps=new lc,ba=new to,Fo=new F,Iu=new F;class pf extends Ue{constructor(t=new Sn,e=new io){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)qa.fromBufferAttribute(e,r-1),Ya.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=qa.distanceTo(Ya);t.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ba.radius+=s,t.ray.intersectsSphere(ba)===!1)return;Uu.copy(r).invert(),Ps.copy(t.ray).applyMatrix4(Uu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=m,d=_-1;v<d;v+=c){const f=u.getX(v),A=u.getX(v+1),T=Aa(this,t,Ps,l,f,A);T&&e.push(T)}if(this.isLineLoop){const v=u.getX(_-1),d=u.getX(m),f=Aa(this,t,Ps,l,v,d);f&&e.push(f)}}else{const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=m,d=_-1;v<d;v+=c){const f=Aa(this,t,Ps,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Aa(this,t,Ps,l,_-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Aa(n,t,e,i,r,s){const a=n.geometry.attributes.position;if(qa.fromBufferAttribute(a,r),Ya.fromBufferAttribute(a,s),e.distanceSqToSegment(qa,Ya,Fo,Iu)>i)return;Fo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Fo);if(!(l<t.near||l>t.far))return{distance:l,point:Iu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Nu=new F,Fu=new F;class mf extends pf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Nu.fromBufferAttribute(e,r),Fu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Nu.distanceTo(Fu);t.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ri extends Sn{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],h=[],m=[];let _=0;const v=[],d=i/2;let f=0;A(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(m,2));function A(){const S=new F,N=new F;let C=0;const b=(e-t)/i;for(let w=0;w<=s;w++){const E=[],x=w/s,R=x*(e-t)+t;for(let B=0;B<=r;B++){const O=B/r,X=O*l+o,Y=Math.sin(X),q=Math.cos(X);N.x=R*Y,N.y=-x*i+d,N.z=R*q,p.push(N.x,N.y,N.z),S.set(Y,b,q).normalize(),h.push(S.x,S.y,S.z),m.push(O,1-x),E.push(_++)}v.push(E)}for(let w=0;w<r;w++)for(let E=0;E<s;E++){const x=v[E][w],R=v[E+1][w],B=v[E+1][w+1],O=v[E][w+1];(t>0||E!==0)&&(u.push(x,R,O),C+=3),(e>0||E!==s-1)&&(u.push(R,B,O),C+=3)}c.addGroup(f,C,0),f+=C}function T(S){const N=_,C=new It,b=new F;let w=0;const E=S===!0?t:e,x=S===!0?1:-1;for(let B=1;B<=r;B++)p.push(0,d*x,0),h.push(0,x,0),m.push(.5,.5),_++;const R=_;for(let B=0;B<=r;B++){const X=B/r*l+o,Y=Math.cos(X),q=Math.sin(X);b.x=E*q,b.y=d*x,b.z=E*Y,p.push(b.x,b.y,b.z),h.push(0,x,0),C.x=Y*.5+.5,C.y=q*.5*x+.5,m.push(C.x,C.y),_++}for(let B=0;B<r;B++){const O=N+B,X=R+B;S===!0?u.push(X,X+1,O):u.push(X+1,X,O),w+=3}c.addGroup(f,w,S===!0?1:2),f+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hc extends Ri{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new hc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ds extends Ms{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _f extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Oo=new pe,Ou=new F,Bu=new F;class cx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cc,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),Bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bu),e.updateMatrixWorld(),Oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ux extends cx{constructor(){super(new lf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zu extends _f{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new ux}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hx extends _f{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ku{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fx extends mf{constructor(t=10,e=10,i=4473924,r=8947848){i=new Yt(i),r=new Yt(r);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let h=0,m=0,_=-o;h<=e;h++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const v=h===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Sn;u.setAttribute("position",new Ie(l,3)),u.setAttribute("color",new Ie(c,3));const p=new io({vertexColors:!0,toneMapped:!1});super(u,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class dx extends mf{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Sn;r.setAttribute("position",new Ie(e,3)),r.setAttribute("color",new Ie(i,3));const s=new io({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,i){const r=new Yt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class px extends Tr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);const Hu={type:"change"},fc={type:"start"},gf={type:"end"},wa=new lc,Gu=new Ai,mx=Math.cos(70*jp.DEG2RAD),Ee=new F,qe=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bo=1e-6;class _x extends px{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Sr,this._lastTargetPosition=new F,this._quat=new Sr().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ku,this._sphericalDelta=new ku,this._scale=1,this._panOffset=new F,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new F,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vx.bind(this),this._onPointerDown=gx.bind(this),this._onPointerUp=xx.bind(this),this._onContextMenu=Ax.bind(this),this._onMouseWheel=Ex.bind(this),this._onKeyDown=yx.bind(this),this._onTouchStart=Tx.bind(this),this._onTouchMove=bx.bind(this),this._onMouseDown=Mx.bind(this),this._onMouseMove=Sx.bind(this),this._interceptControlDown=wx.bind(this),this._interceptControlUp=Rx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),r<-Math.PI?r+=qe:r>Math.PI&&(r-=qe),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ee.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(wa.origin.copy(this.object.position),wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wa.direction))<mx?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),wa.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Bo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bo||this._lastTargetPosition.distanceToSquared(this.target)>Bo?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ee.copy(r).sub(this.target);let s=Ee.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function gx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function vx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function xx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gf),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Mx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case Zr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case Zr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(fc)}function Sx(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ex(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(fc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gf))}function yx(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Tx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case Wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(fc)}function bx(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function Ax(n){this.enabled!==!1&&n.preventDefault()}function wx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Cx=ee('<div class="spindle-indicator svelte-12o98vs"><span class="label svelte-12o98vs">🔄</span> <span class="value svelte-12o98vs"> </span></div>'),Px=ee('<div class="cnc-viewer svelte-12o98vs"><div class="position-display svelte-12o98vs"><div class="unit-badge svelte-12o98vs"> </div> <div class="axis svelte-12o98vs"><span class="label svelte-12o98vs">X</span> <span class="value svelte-12o98vs"> </span></div> <div class="axis svelte-12o98vs"><span class="label svelte-12o98vs">Y</span> <span class="value svelte-12o98vs"> </span></div> <div class="axis svelte-12o98vs"><span class="label svelte-12o98vs">Z</span> <span class="value svelte-12o98vs"> </span></div> <!></div> <div class="scale-ruler svelte-12o98vs"><div class="ruler-bar svelte-12o98vs"></div> <span class="ruler-label svelte-12o98vs">500mm</span></div> <div class="stats svelte-12o98vs"><span> </span> <span> </span> <span> </span> <span> </span></div> <div class="controls-hint svelte-12o98vs"><span>🖱️ Drag to rotate • Scroll to zoom • Shift+Drag to pan</span></div></div>');function Dx(n,t){Gi(t,!0);let e,i,r,s,a,o=null,l=null,c=null,u=null,p=null,h=null,m=[],_=null,v=0,d=0,f=null;const A=3e3,T=2e3,S=50;tc(()=>{N(),E(),window.addEventListener("resize",w)}),Uh(()=>{window.removeEventListener("resize",w),_&&cancelAnimationFrame(_),a&&a.dispose(),s&&s.dispose()});function N(){i=new lx,i.background=new Yt(657935);const st=e.clientWidth/e.clientHeight;r=new _n(45,st,.1,1e4),r.position.set(1500,-1500,1500),r.up.set(0,0,1),r.lookAt(0,0,0),s=new ox({antialias:!0}),s.setSize(e.clientWidth,e.clientHeight),s.setPixelRatio(window.devicePixelRatio),s.shadowMap.enabled=!0,s.shadowMap.type=Nh,e.appendChild(s.domElement),a=new _x(r,s.domElement),a.enableDamping=!0,a.dampingFactor=.05,a.screenSpacePanning=!1,a.minDistance=200,a.maxDistance=5e3,a.minPolarAngle=0,a.maxPolarAngle=Math.PI,a.target.set(0,0,0);const it=new hx(4210752,.5);i.add(it);const y=new zu(16777215,1);y.position.set(500,-500,1e3),y.castShadow=!0,y.shadow.mapSize.width=2048,y.shadow.mapSize.height=2048,i.add(y);const g=new zu(16777215,.5);g.position.set(-500,500,500),i.add(g),u=new fx(A,30,3816010,2763322),u.rotation.x=Math.PI/2,u.position.z=.5,i.add(u);const I=new dx(300);i.add(I),C(),b(),h=new ar,i.add(h),f=new Xa({color:4864554,transparent:!0,opacity:.9})}function C(){const st=new Ds({color:9139029,roughness:.8,metalness:.1}),it=new Er(T,T,S);p=new De(it,st),p.position.z=-S/2,p.receiveShadow=!0,i.add(p)}function b(){const st=new ar,it=new Ri(20,25,80,16),y=new Ds({color:6710886,metalness:.8,roughness:.3}),g=new De(it,y);g.position.z=60,st.add(g);const I=new Ri(12,15,20,16),K=new Ds({color:8947848,metalness:.9,roughness:.2}),Z=new De(I,K);Z.position.z=15,st.add(Z);const W=new ar,mt=new Ri(5,5,30,16),rt=new Ds({color:13421772,metalness:.9,roughness:.1}),dt=new De(mt,rt);dt.position.z=-10,W.add(dt);const Zt=new Ri(4,8,25,4),Q=new Ds({color:65416,metalness:.7,roughness:.2,emissive:17442}),pt=new De(Zt,Q);pt.position.z=-35,W.add(pt);const bt=new hc(8,10,8),wt=new De(bt,Q);wt.rotation.x=Math.PI,wt.position.z=-52,W.add(wt),c=W,st.add(W),l=st,l.castShadow=!0,i.add(l)}function w(){!e||!r||!s||(r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),s.setSize(e.clientWidth,e.clientHeight))}function E(){_=requestAnimationFrame(E),a&&a.update();const st=Lt.machine;if(l&&st.position&&(l.position.set(st.position.X??0,st.position.Y??0,(st.position.Z??0)+100),st.spindleOn&&c)){const it=st.spindleCW?1:-1;v+=.15*it,c.rotation.z=v}x(),R(),s.render(i,r)}function x(){const st=Lt.toolPath,it=Lt.currentIndex;if(o&&(st.length<d||st.length===0)&&(i.remove(o),o.geometry.dispose(),o.material.dispose(),o=null,d=0),st.length<2){d=st.length;return}if(st.length===d&&o)return;o&&(i.remove(o),o.geometry.dispose(),o.material.dispose());const y=st.map(Z=>new F(Z.x,Z.y,Z.z)),g=new Sn().setFromPoints(y),I=[];for(let Z=0;Z<st.length;Z++){const W=st[Z],rt=Z<=it?1:.4;W.isCut?I.push(0*rt,1*rt,.5*rt):I.push(.3*rt,.3*rt,.4*rt)}g.setAttribute("color",new Ie(I,3));const K=new io({vertexColors:!0,linewidth:2});o=new pf(g,K),i.add(o),d=st.length}function R(){const st=Lt.toolPath,it=Lt.currentIndex;if(st.length<h.children.length){for(;h.children.length>0;){const y=h.children[0];h.remove(y),y.geometry&&y.geometry.dispose()}m=[]}for(let y=h.children.length;y<st.length&&y<=it+1;y++){const g=st[y],I=st[y-1];g.isCut&&I&&g.z<=0&&(g.type==="LinearCut"?B(I,g):g.type==="DrillCycle"?O(g):(g.type==="ArcCW"||g.type==="ArcCCW")&&B(I,g))}}function B(st,it){const y=it.x-st.x,g=it.y-st.y,I=Math.sqrt(y*y+g*g);if(I<1)return;const K=8,Z=Math.min(Math.abs(it.z),S),W=new Er(I,K,Z+1),mt=new De(W,f);mt.position.set((st.x+it.x)/2,(st.y+it.y)/2,-Z/2),mt.rotation.z=Math.atan2(g,y),h.add(mt)}function O(st){const it=new Xa({color:1710618}),y=Math.min(Math.abs(st.z),S),g=new Ri(8,8,y+1,16),I=new De(g,it);I.position.set(st.x,st.y,-y/2),h.add(I),m.push(I)}function X(st,it="mm"){return`${(st==null?void 0:st.toFixed(3))??"0.000"}`}ka(()=>{if(Lt.activeId){for(;h&&h.children.length>0;){const it=h.children[0];h.remove(it),it.geometry&&it.geometry.dispose()}m=[],d=0}});var Y=Px(),q=St(Y),J=St(q),H=St(J),nt=Ut(J,2),ht=Ut(St(nt),2),yt=St(ht),Bt=Ut(nt,2),ne=Ut(St(Bt),2),j=St(ne),tt=Ut(Bt,2),gt=Ut(St(tt),2),ot=St(gt),At=Ut(tt,2);{var Ct=st=>{var it=Cx(),y=Ut(St(it),2),g=St(y);gn(()=>_e(g,`${Lt.machine.spindle??""} RPM`)),Dt(st,it)};Te(At,st=>{Lt.machine.spindleOn&&st(Ct)})}var Ht=Ut(q,4),le=St(Ht),jt=St(le),de=Ut(le,2),U=St(de),He=Ut(de,2),Wt=St(He),Xt=Ut(He,2),Tt=St(Xt);Bd(Y,st=>e=st,()=>e),gn((st,it,y)=>{_e(H,Lt.machine.unit),_e(yt,st),_e(j,it),_e(ot,y),_e(jt,`Events: ${Lt.stats.total??""}`),_e(U,`Rapid: ${Lt.stats.rapidMoves??""}`),_e(Wt,`Cuts: ${Lt.stats.linearCuts??""}`),_e(Tt,`Arcs: ${Lt.stats.arcs??""}`)},[()=>X(Lt.machine.position.X),()=>X(Lt.machine.position.Y),()=>X(Lt.machine.position.Z)]),Dt(n,Y),Vi()}var Lx=ee('<span class="status paused svelte-1o76r16">⏸ Paused</span>'),Ux=ee('<span class="status stepping svelte-1o76r16">⏭ Stepping</span>'),Ix=ee('<span class="status playing svelte-1o76r16">▶ Playing</span>'),Nx=ee('<span class="icon svelte-1o76r16">▶</span> Resume',1),Fx=ee('<span class="icon svelte-1o76r16">⏸</span> Pause',1),Ox=ee('<div class="control-bar svelte-1o76r16"><div class="speed-controls svelte-1o76r16"><span class="label svelte-1o76r16">Speed:</span> <button>Fast</button> <button>Normal</button> <button>Slow</button></div> <div class="flow-status svelte-1o76r16"><!></div> <div class="playback-controls svelte-1o76r16"><button class="control-btn svelte-1o76r16"><!></button> <button class="control-btn svelte-1o76r16"><span class="icon svelte-1o76r16">⏭</span> Step</button></div></div>');function Bx(n,t){Gi(t,!1);function e(b){cn.setSpeed(b),Us({type:"set_speed",data:b})}function i(){cn.isPaused?(cn.resume(),Us({type:"resume"})):(cn.pause(),Us({type:"pause"}))}function r(){cn.step(),Us({type:"step"})}$a();var s=Ox(),a=St(s),o=Ut(St(a),2);let l;o.__click=()=>e("fast");var c=Ut(o,2);let u;c.__click=()=>e("normal");var p=Ut(c,2);let h;p.__click=()=>e("slow");var m=Ut(a,2),_=St(m);{var v=b=>{var w=Lx();Dt(b,w)},d=b=>{var w=mr(),E=Li(w);{var x=B=>{var O=Ux();Dt(B,O)},R=B=>{var O=Ix();Dt(B,O)};Te(E,B=>{cn.isStepping?B(x):B(R,!1)},!0)}Dt(b,w)};Te(_,b=>{cn.isPaused?b(v):b(d,!1)})}var f=Ut(m,2),A=St(f);A.__click=i;var T=St(A);{var S=b=>{var w=Nx();Dt(b,w)},N=b=>{var w=Fx();Dt(b,w)};Te(T,b=>{cn.isPaused?b(S):b(N,!1)})}var C=Ut(A,2);C.__click=r,gn(()=>{l=Yr(o,1,"speed-btn svelte-1o76r16",null,l,{active:cn.speed==="fast"}),u=Yr(c,1,"speed-btn svelte-1o76r16",null,u,{active:cn.speed==="normal"}),h=Yr(p,1,"speed-btn svelte-1o76r16",null,h,{active:cn.speed==="slow"})}),Dt(n,s),Vi()}Ks(["click"]);var zx=ee('<span class="error svelte-ygix8g"> </span>'),kx=ee('<span class="error svelte-ygix8g"> </span>'),Hx=ee('<div><span class="icon svelte-ygix8g"> </span> <div class="content svelte-ygix8g"><span class="description svelte-ygix8g"> </span> <!></div></div>'),Gx=ee('<div class="empty svelte-ygix8g"><!></div>'),Vx=ee('<div class="expectation-panel svelte-ygix8g"><div class="panel-header svelte-ygix8g"><h3 class="svelte-ygix8g">Expectations</h3> <div class="stats svelte-ygix8g"><span class="passed svelte-ygix8g"> </span> <span class="failed svelte-ygix8g"> </span></div></div> <div class="expectation-list svelte-ygix8g"></div></div>');function Wx(n,t){Gi(t,!1);function e(){const p=Lt.expectations;return{passed:p.filter(h=>h.passed).length,failed:p.filter(h=>!h.passed).length}}$a();var i=Vx(),r=St(i),s=Ut(St(r),2),a=St(s),o=St(a),l=Ut(a,2),c=St(l),u=Ut(r,2);Ql(u,5,()=>Lt.expectations,Jl,(p,h)=>{var m=Hx();let _;var v=St(m),d=St(v),f=Ut(v,2),A=St(f),T=St(A),S=Ut(A,2);{var N=b=>{var w=zx(),E=St(w);gn(()=>_e(E,Rt(h).errorMessage)),Dt(b,w)},C=b=>{var w=mr(),E=Li(w);{var x=R=>{var B=kx(),O=St(B);gn((X,Y)=>_e(O,`Expected: ${X??""}, Got: ${Y??""}`),[()=>JSON.stringify(Rt(h).expected),()=>JSON.stringify(Rt(h).actual)]),Dt(R,B)};Te(E,R=>{Rt(h).passed||R(x)},!0)}Dt(b,w)};Te(S,b=>{!Rt(h).passed&&Rt(h).errorMessage?b(N):b(C,!1)})}gn(()=>{_=Yr(m,1,"expectation-item svelte-ygix8g",null,_,{passed:Rt(h).passed,failed:!Rt(h).passed}),_e(d,Rt(h).passed?"✓":"✗"),_e(T,Rt(h).description)}),Dt(p,m)},p=>{var h=Gx(),m=St(h);{var _=d=>{var f=hs("Waiting for test session...");Dt(d,f)},v=d=>{var f=hs("No expectations yet");Dt(d,f)};Te(m,d=>{Lt.count===0?d(_):d(v,!1)})}Dt(p,h)}),gn((p,h)=>{_e(o,`${p??""} ✓`),_e(c,`${h??""} ✗`)},[()=>e().passed,()=>e().failed]),Dt(n,i),Vi()}var Xx=ee('<span class="error-badge svelte-1v7jdqv">Error</span>'),qx=ee('<button><div class="event-index svelte-1v7jdqv"> </div> <div class="event-type svelte-1v7jdqv"> </div> <div class="event-instruction svelte-1v7jdqv"><code class="svelte-1v7jdqv"> </code></div> <!></button>'),Yx=ee('<div class="empty svelte-1v7jdqv"><!></div>'),jx=ee('<div class="event-timeline svelte-1v7jdqv"><div class="timeline-header svelte-1v7jdqv"><h3 class="svelte-1v7jdqv">Event Timeline</h3> <span class="counter svelte-1v7jdqv"> </span></div> <div class="timeline-list svelte-1v7jdqv"></div></div>');function Zx(n,t){Gi(t,!0);let e=Jo(t,"onEventClick",3,()=>{});function i(u){switch(u){case"RapidMove":return"var(--text-muted)";case"LinearCut":return"var(--accent-green)";case"ArcCW":case"ArcCCW":return"var(--accent-cyan)";case"SpindleStart":return"var(--accent-yellow)";case"SpindleStop":return"var(--accent-red)";case"ToolChange":return"var(--accent-purple)";case"DrillCycle":return"var(--accent-orange, #ff8800)";default:return"var(--text-secondary)"}}function r(u){e()(u)}var s=jx(),a=St(s),o=Ut(St(a),2),l=St(o),c=Ut(a,2);Ql(c,21,()=>Lt.events,Jl,(u,p,h)=>{var m=qx();let _;m.__click=()=>r(Rt(p).index);var v=St(m),d=St(v),f=Ut(v,2),A=St(f),T=Ut(f,2),S=St(T),N=St(S),C=Ut(T,2);{var b=w=>{var E=Xx();Dt(w,E)};Te(C,w=>{Rt(p).hasError&&w(b)})}gn(w=>{var E,x;_=Yr(m,1,"event-item svelte-1v7jdqv",null,_,{current:h===Lt.currentIndex,past:h<Lt.currentIndex}),_e(d,Rt(p).index),Od(f,`color: ${w??""}`),_e(A,((E=Rt(p).event)==null?void 0:E.Type)??"Unknown"),_e(N,((x=Rt(p).instruction)==null?void 0:x.RawLine)??"-")},[()=>{var w;return i((w=Rt(p).event)==null?void 0:w.Type)}]),Dt(u,m)},u=>{var p=Yx(),h=St(p);{var m=v=>{var d=hs("Waiting for test session...");Dt(v,d)},_=v=>{var d=hs("Waiting for events...");Dt(v,d)};Te(h,v=>{Lt.count===0?v(m):v(_,!1)})}Dt(u,p)}),gn(()=>_e(l,`${Lt.currentIndex+1} / ${Lt.stats.total??""}`)),Dt(n,s),Vi()}Ks(["click"]);var Kx=ee('<div class="error-display svelte-95fokg"><div class="error-icon svelte-95fokg">⚠️</div> <div class="error-content svelte-95fokg"><div class="error-title svelte-95fokg">Interpretation Error</div> <div class="error-message svelte-95fokg"> </div></div> <button class="dismiss-btn svelte-95fokg">×</button></div>');function $x(n,t){let e=Jo(t,"error",3,null),i=Jo(t,"onDismiss",3,()=>{});var r=mr(),s=Li(r);{var a=o=>{var l=Kx(),c=Ut(St(l),2),u=Ut(St(c),2),p=St(u),h=Ut(c,2);h.__click=function(...m){var _;(_=i())==null||_.apply(this,m)},gn(()=>_e(p,e())),Dt(o,l)};Te(s,o=>{e()&&o(a)})}Dt(n,r)}Ks(["click"]);var Jx=ee('<div class="app svelte-1n46o8q"><!> <!> <div class="main-content svelte-1n46o8q"><aside class="sidebar-left svelte-1n46o8q"><!></aside> <main class="viewer-area svelte-1n46o8q"><!></main> <aside class="sidebar-right svelte-1n46o8q"><!></aside></div> <!> <!></div>');function Qx(n,t){Gi(t,!0);let e=dn(null),i=null;tc(()=>{i=Vd(r)}),Uh(()=>{i==null||i()});function r(S){switch(S.type){case"connected":console.log("Connected:",S.data.message);break;case"interpret_start":ye(e,null);break;case"step":Lt.addEvent(S.data),Lt.updateMachine(S.data.stateAfter);break;case"interpret_end":Lt.updateMachine(S.data.finalState);break;case"interpret_error":ye(e,S.data.error,!0);break;case"session_start":Lt.create(S.data.testName);break;case"expectation":Lt.addExpectation(S.data);break;case"session_end":Lt.endSession(S.data.allPassed);break;case"flow_state":cn.setState(S.data.state);break}}function s(){ye(e,null)}function a(S){Us({type:"jump_to",data:{index:S}}),Lt.setCurrentIndex(S)}var o=Jx(),l=St(o);np(l,{});var c=Ut(l,2);{var u=S=>{ap(S,{})};Te(c,S=>{Lt.count>0&&S(u)})}var p=Ut(c,2),h=St(p),m=St(h);Zx(m,{onEventClick:a});var _=Ut(h,2),v=St(_);Dx(v,{});var d=Ut(_,2),f=St(d);Wx(f,{});var A=Ut(p,2);Bx(A,{});var T=Ut(A,2);$x(T,{get error(){return Rt(e)},onDismiss:s}),Dt(n,o),Vi()}Rd(Qx,{target:document.getElementById("app")});
