var r_=Object.defineProperty;var lh=n=>{throw TypeError(n)};var o_=(n,t,e)=>t in n?r_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var fi=(n,t,e)=>o_(n,typeof t!="symbol"?t+"":t,e),uc=(n,t,e)=>t.has(n)||lh("Cannot "+e);var j=(n,t,e)=>(uc(n,t,"read from private field"),e?e.call(n):t.get(n)),$t=(n,t,e)=>t.has(n)?lh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Xt=(n,t,e,i)=>(uc(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),Ke=(n,t,e)=>(uc(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const hu=!1;var gp=Array.isArray,a_=Array.prototype.indexOf,fo=Array.prototype.includes,tc=Array.from,l_=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,c_=Object.getOwnPropertyDescriptors,u_=Object.prototype,f_=Array.prototype,vp=Object.getPrototypeOf,ch=Object.isExtensible;function h_(n){return n()}function du(n){for(var t=0;t<n.length;t++)n[t]()}function xp(){var n,t,e=new Promise((i,s)=>{n=i,t=s});return{promise:e,resolve:n,reject:t}}const je=2,zl=4,ha=8,yp=1<<24,Qi=16,ci=32,vr=64,Tf=128,Vn=512,Ge=1024,Ze=2048,li=4096,Cn=8192,Ss=16384,bf=32768,ho=65536,uh=1<<17,Mp=1<<18,To=1<<19,Sp=1<<20,Xi=1<<25,hr=32768,pu=1<<21,Af=1<<22,Es=1<<23,Zr=Symbol("$state"),Xr=new class extends Error{constructor(){super(...arguments);fi(this,"name","StaleReactionError");fi(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Ep(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function d_(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function p_(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function m_(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function __(n){throw new Error("https://svelte.dev/e/effect_orphan")}function g_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function v_(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function x_(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function y_(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function M_(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const S_=1,E_=2,Tp=4,T_=8,b_=16,A_=1,w_=2,Xe=Symbol();function R_(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function bp(n){return n===this.v}function C_(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Ap(n){return!C_(n,this.v)}let da=!1,P_=!1;function D_(){da=!0}let we=null;function po(n){we=n}function ts(n,t=!1,e){we={p:we,i:!1,c:null,e:null,s:n,x:null,l:da&&!t?{s:null,u:null,$:[]}:null}}function es(n){var t=we,e=t.e;if(e!==null){t.e=null;for(var i of e)Wp(i)}return t.i=!0,we=t.p,{}}function pa(){return!da||we!==null&&we.l===null}let qr=[];function L_(){var n=qr;qr=[],du(n)}function Ts(n){if(qr.length===0){var t=qr;queueMicrotask(()=>{t===qr&&L_()})}qr.push(n)}function wp(n){var t=le;if(t===null)return Jt.f|=Es,n;if(t.f&bf)mo(n,t);else{if(!(t.f&Tf))throw n;t.b.error(n)}}function mo(n,t){for(;t!==null;){if(t.f&Tf)try{t.b.error(n);return}catch(e){n=e}t=t.parent}throw n}const I_=-7169;function Pe(n,t){n.f=n.f&I_|t}function wf(n){n.f&Vn||n.deps===null?Pe(n,Ge):Pe(n,li)}function Rp(n){if(n!==null)for(const t of n)!(t.f&je)||!(t.f&hr)||(t.f^=hr,Rp(t.deps))}function Cp(n,t,e){n.f&Ze?t.add(n):n.f&li&&e.add(n),Rp(n.deps),Pe(n,Ge)}const Ta=new Set;let oe=null,qe=null,ti=[],Rf=null,mu=!1;var so,ro,nr,oo,la,ca,ir,Vi,ao,Ai,_u,gu,Pp;const eh=class eh{constructor(){$t(this,Ai);fi(this,"committed",!1);fi(this,"current",new Map);fi(this,"previous",new Map);$t(this,so,new Set);$t(this,ro,new Set);$t(this,nr,0);$t(this,oo,0);$t(this,la,null);$t(this,ca,new Set);$t(this,ir,new Set);$t(this,Vi,new Map);fi(this,"is_fork",!1);$t(this,ao,!1)}is_deferred(){return this.is_fork||j(this,oo)>0}skip_effect(t){j(this,Vi).has(t)||j(this,Vi).set(t,{d:[],m:[]})}unskip_effect(t){var e=j(this,Vi).get(t);if(e){j(this,Vi).delete(t);for(var i of e.d)Pe(i,Ze),si(i);for(i of e.m)Pe(i,li),si(i)}}process(t){var s;ti=[],this.apply();var e=[],i=[];for(const r of t)Ke(this,Ai,_u).call(this,r,e,i);if(this.is_deferred()){Ke(this,Ai,gu).call(this,i),Ke(this,Ai,gu).call(this,e);for(const[r,o]of j(this,Vi))Ip(r,o)}else{for(const r of j(this,so))r();j(this,so).clear(),j(this,nr)===0&&Ke(this,Ai,Pp).call(this),oe=null,fh(i),fh(e),(s=j(this,la))==null||s.resolve()}qe=null}capture(t,e){e!==Xe&&!this.previous.has(t)&&this.previous.set(t,e),t.f&Es||(this.current.set(t,t.v),qe==null||qe.set(t,t.v))}activate(){oe=this,this.apply()}deactivate(){oe===this&&(oe=null,qe=null)}flush(){if(this.activate(),ti.length>0){if(U_(),oe!==null&&oe!==this)return}else j(this,nr)===0&&this.process([]);this.deactivate()}discard(){for(const t of j(this,ro))t(this);j(this,ro).clear()}increment(t){Xt(this,nr,j(this,nr)+1),t&&Xt(this,oo,j(this,oo)+1)}decrement(t){Xt(this,nr,j(this,nr)-1),t&&Xt(this,oo,j(this,oo)-1),!j(this,ao)&&(Xt(this,ao,!0),Ts(()=>{Xt(this,ao,!1),this.is_deferred()?ti.length>0&&this.flush():this.revive()}))}revive(){for(const t of j(this,ca))j(this,ir).delete(t),Pe(t,Ze),si(t);for(const t of j(this,ir))Pe(t,li),si(t);this.flush()}oncommit(t){j(this,so).add(t)}ondiscard(t){j(this,ro).add(t)}settled(){return(j(this,la)??Xt(this,la,xp())).promise}static ensure(){if(oe===null){const t=oe=new eh;Ta.add(oe),Ts(()=>{oe===t&&t.flush()})}return oe}apply(){}};so=new WeakMap,ro=new WeakMap,nr=new WeakMap,oo=new WeakMap,la=new WeakMap,ca=new WeakMap,ir=new WeakMap,Vi=new WeakMap,ao=new WeakMap,Ai=new WeakSet,_u=function(t,e,i){t.f^=Ge;for(var s=t.first,r=null;s!==null;){var o=s.f,a=(o&(ci|vr))!==0,l=a&&(o&Ge)!==0,c=l||(o&Cn)!==0||j(this,Vi).has(s);if(!c&&s.fn!==null){a?s.f^=Ge:r!==null&&o&(zl|ha|yp)?r.b.defer_effect(s):o&zl?e.push(s):_a(s)&&(o&Qi&&j(this,ir).add(s),na(s));var u=s.first;if(u!==null){s=u;continue}}var h=s.parent;for(s=s.next;s===null&&h!==null;)h===r&&(r=null),s=h.next,h=h.parent}},gu=function(t){for(var e=0;e<t.length;e+=1)Cp(t[e],j(this,ca),j(this,ir))},Pp=function(){var s;if(Ta.size>1){this.previous.clear();var t=qe,e=!0;for(const r of Ta){if(r===this){e=!1;continue}const o=[];for(const[l,c]of this.current){if(r.current.has(l))if(e&&c!==r.current.get(l))r.current.set(l,c);else continue;o.push(l)}if(o.length===0)continue;const a=[...r.current.keys()].filter(l=>!this.current.has(l));if(a.length>0){var i=ti;ti=[];const l=new Set,c=new Map;for(const u of o)Dp(u,a,l,c);if(ti.length>0){oe=r,r.apply();for(const u of ti)Ke(s=r,Ai,_u).call(s,u,[],[]);r.deactivate()}ti=i}}oe=null,qe=t}this.committed=!0,Ta.delete(this)};let bs=eh;function U_(){mu=!0;var n=null;try{for(var t=0;ti.length>0;){var e=bs.ensure();if(t++>1e3){var i,s;N_()}e.process(ti),As.clear()}}finally{mu=!1,Rf=null}}function N_(){try{g_()}catch(n){mo(n,Rf)}}let Qn=null;function fh(n){var t=n.length;if(t!==0){for(var e=0;e<t;){var i=n[e++];if(!(i.f&(Ss|Cn))&&_a(i)&&(Qn=new Set,na(i),i.deps===null&&i.first===null&&i.nodes===null&&(i.teardown===null&&i.ac===null?$p(i):i.fn=null),(Qn==null?void 0:Qn.size)>0)){As.clear();for(const s of Qn){if(s.f&(Ss|Cn))continue;const r=[s];let o=s.parent;for(;o!==null;)Qn.has(o)&&(Qn.delete(o),r.push(o)),o=o.parent;for(let a=r.length-1;a>=0;a--){const l=r[a];l.f&(Ss|Cn)||na(l)}}Qn.clear()}}Qn=null}}function Dp(n,t,e,i){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const s of n.reactions){const r=s.f;r&je?Dp(s,t,e,i):r&(Af|Qi)&&!(r&Ze)&&Lp(s,t,i)&&(Pe(s,Ze),si(s))}}function Lp(n,t,e){const i=e.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const s of n.deps){if(fo.call(t,s))return!0;if(s.f&je&&Lp(s,t,e))return e.set(s,!0),!0}return e.set(n,!1),!1}function si(n){for(var t=Rf=n;t.parent!==null;){t=t.parent;var e=t.f;if(mu&&t===le&&e&Qi&&!(e&Mp))return;if(e&(vr|ci)){if(!(e&Ge))return;t.f^=Ge}}ti.push(t)}function Ip(n,t){if(!(n.f&ci&&n.f&Ge)){n.f&Ze?t.d.push(n):n.f&li&&t.m.push(n),Pe(n,Ge);for(var e=n.first;e!==null;)Ip(e,t),e=e.next}}function F_(n){let t=0,e=dr(0),i;return()=>{Df()&&(mt(e),Xp(()=>(t===0&&(i=ga(()=>n(()=>Ko(e)))),t+=1,()=>{Ts(()=>{t-=1,t===0&&(i==null||i(),i=void 0,Ko(e))})})))}}var O_=ho|To|Tf;function B_(n,t,e){new z_(n,t,e)}var Un,Ef,mi,sr,_i,Nn,mn,gi,Gi,_s,rr,gs,lo,or,co,uo,Wi,Jl,We,k_,H_,vu,Tl,bl,xu;class z_{constructor(t,e,i){$t(this,We);fi(this,"parent");fi(this,"is_pending",!1);$t(this,Un);$t(this,Ef,null);$t(this,mi);$t(this,sr);$t(this,_i);$t(this,Nn,null);$t(this,mn,null);$t(this,gi,null);$t(this,Gi,null);$t(this,_s,null);$t(this,rr,0);$t(this,gs,0);$t(this,lo,!1);$t(this,or,!1);$t(this,co,new Set);$t(this,uo,new Set);$t(this,Wi,null);$t(this,Jl,F_(()=>(Xt(this,Wi,dr(j(this,rr))),()=>{Xt(this,Wi,null)})));Xt(this,Un,t),Xt(this,mi,e),Xt(this,sr,i),this.parent=le.b,this.is_pending=!!j(this,mi).pending,Xt(this,_i,Lf(()=>{le.b=this;{var s=Ke(this,We,vu).call(this);try{Xt(this,Nn,On(()=>i(s)))}catch(r){this.error(r)}j(this,gs)>0?Ke(this,We,bl).call(this):this.is_pending=!1}return()=>{var r;(r=j(this,_s))==null||r.remove()}},O_))}defer_effect(t){Cp(t,j(this,co),j(this,uo))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!j(this,mi).pending}update_pending_count(t){Ke(this,We,xu).call(this,t),Xt(this,rr,j(this,rr)+t),!(!j(this,Wi)||j(this,lo))&&(Xt(this,lo,!0),Ts(()=>{Xt(this,lo,!1),j(this,Wi)&&_o(j(this,Wi),j(this,rr))}))}get_effect_pending(){return j(this,Jl).call(this),mt(j(this,Wi))}error(t){var e=j(this,mi).onerror;let i=j(this,mi).failed;if(j(this,or)||!e&&!i)throw t;j(this,Nn)&&(vn(j(this,Nn)),Xt(this,Nn,null)),j(this,mn)&&(vn(j(this,mn)),Xt(this,mn,null)),j(this,gi)&&(vn(j(this,gi)),Xt(this,gi,null));var s=!1,r=!1;const o=()=>{if(s){R_();return}s=!0,r&&M_(),bs.ensure(),Xt(this,rr,0),j(this,gi)!==null&&lr(j(this,gi),()=>{Xt(this,gi,null)}),this.is_pending=this.has_pending_snippet(),Xt(this,Nn,Ke(this,We,Tl).call(this,()=>(Xt(this,or,!1),On(()=>j(this,sr).call(this,j(this,Un)))))),j(this,gs)>0?Ke(this,We,bl).call(this):this.is_pending=!1};Ts(()=>{try{r=!0,e==null||e(t,o),r=!1}catch(a){mo(a,j(this,_i)&&j(this,_i).parent)}i&&Xt(this,gi,Ke(this,We,Tl).call(this,()=>{bs.ensure(),Xt(this,or,!0);try{return On(()=>{i(j(this,Un),()=>t,()=>o)})}catch(a){return mo(a,j(this,_i).parent),null}finally{Xt(this,or,!1)}}))})}}Un=new WeakMap,Ef=new WeakMap,mi=new WeakMap,sr=new WeakMap,_i=new WeakMap,Nn=new WeakMap,mn=new WeakMap,gi=new WeakMap,Gi=new WeakMap,_s=new WeakMap,rr=new WeakMap,gs=new WeakMap,lo=new WeakMap,or=new WeakMap,co=new WeakMap,uo=new WeakMap,Wi=new WeakMap,Jl=new WeakMap,We=new WeakSet,k_=function(){try{Xt(this,Nn,On(()=>j(this,sr).call(this,j(this,Un))))}catch(t){this.error(t)}},H_=function(){const t=j(this,mi).pending;t&&(Xt(this,mn,On(()=>t(j(this,Un)))),Ts(()=>{var e=Ke(this,We,vu).call(this);Xt(this,Nn,Ke(this,We,Tl).call(this,()=>(bs.ensure(),On(()=>j(this,sr).call(this,e))))),j(this,gs)>0?Ke(this,We,bl).call(this):(lr(j(this,mn),()=>{Xt(this,mn,null)}),this.is_pending=!1)}))},vu=function(){var t=j(this,Un);return this.is_pending&&(Xt(this,_s,ji()),j(this,Un).before(j(this,_s)),t=j(this,_s)),t},Tl=function(t){var e=le,i=Jt,s=we;Ei(j(this,_i)),Wn(j(this,_i)),po(j(this,_i).ctx);try{return t()}catch(r){return wp(r),null}finally{Ei(e),Wn(i),po(s)}},bl=function(){const t=j(this,mi).pending;j(this,Nn)!==null&&(Xt(this,Gi,document.createDocumentFragment()),j(this,Gi).append(j(this,_s)),Kp(j(this,Nn),j(this,Gi))),j(this,mn)===null&&Xt(this,mn,On(()=>t(j(this,Un))))},xu=function(t){var e;if(!this.has_pending_snippet()){this.parent&&Ke(e=this.parent,We,xu).call(e,t);return}if(Xt(this,gs,j(this,gs)+t),j(this,gs)===0){this.is_pending=!1;for(const i of j(this,co))Pe(i,Ze),si(i);for(const i of j(this,uo))Pe(i,li),si(i);j(this,co).clear(),j(this,uo).clear(),j(this,mn)&&lr(j(this,mn),()=>{Xt(this,mn,null)}),j(this,Gi)&&(j(this,Un).before(j(this,Gi)),Xt(this,Gi,null))}};function V_(n,t,e,i){const s=pa()?ec:Cf;var r=n.filter(f=>!f.settled);if(e.length===0&&r.length===0){i(t.map(s));return}var o=oe,a=le,l=G_(),c=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(f=>f.promise)):null;function u(f){l();try{i(f)}catch(d){a.f&Ss||mo(d,a)}o==null||o.deactivate(),yu()}if(e.length===0){c.then(()=>u(t.map(s)));return}function h(){l(),Promise.all(e.map(f=>W_(f))).then(f=>u([...t.map(s),...f])).catch(f=>mo(f,a))}c?c.then(h):h()}function G_(){var n=le,t=Jt,e=we,i=oe;return function(r=!0){Ei(n),Wn(t),po(e),r&&(i==null||i.activate())}}function yu(){Ei(null),Wn(null),po(null)}function ec(n){var t=je|Ze,e=Jt!==null&&Jt.f&je?Jt:null;return le!==null&&(le.f|=To),{ctx:we,deps:null,effects:null,equals:bp,f:t,fn:n,reactions:null,rv:0,v:Xe,wv:0,parent:e??le,ac:null}}function W_(n,t,e){let i=le;i===null&&d_();var s=i.b,r=void 0,o=dr(Xe),a=!Jt,l=new Map;return ig(()=>{var d;var c=xp();r=c.promise;try{Promise.resolve(n()).then(c.resolve,c.reject).then(()=>{u===oe&&u.committed&&u.deactivate(),yu()})}catch(_){c.reject(_),yu()}var u=oe;if(a){var h=s.is_rendered();s.update_pending_count(1),u.increment(h),(d=l.get(u))==null||d.reject(Xr),l.delete(u),l.set(u,c)}const f=(_,v=void 0)=>{if(u.activate(),v)v!==Xr&&(o.f|=Es,_o(o,v));else{o.f&Es&&(o.f^=Es),_o(o,_);for(const[m,p]of l){if(l.delete(m),m===u)break;p.reject(Xr)}}a&&(s.update_pending_count(-1),u.decrement(h))};c.promise.then(f,_=>f(null,_||"unknown"))}),Q_(()=>{for(const c of l.values())c.reject(Xr)}),new Promise(c=>{function u(h){function f(){h===r?c(o):u(r)}h.then(f,f)}u(r)})}function X_(n){const t=ec(n);return Jp(t),t}function Cf(n){const t=ec(n);return t.equals=Ap,t}function Up(n){var t=n.effects;if(t!==null){n.effects=null;for(var e=0;e<t.length;e+=1)vn(t[e])}}function q_(n){for(var t=n.parent;t!==null;){if(!(t.f&je))return t.f&Ss?null:t;t=t.parent}return null}function Pf(n){var t,e=le;Ei(q_(n));try{n.f&=~hr,Up(n),t=nm(n)}finally{Ei(e)}return t}function Np(n){var t=Pf(n);if(!n.equals(t)&&(n.wv=tm(),(!(oe!=null&&oe.is_fork)||n.deps===null)&&(n.v=t,n.deps===null))){Pe(n,Ge);return}pr||(qe!==null?(Df()||oe!=null&&oe.is_fork)&&qe.set(n,t):wf(n))}let Mu=new Set;const As=new Map;let Fp=!1;function dr(n,t){var e={f:0,v:n,reactions:null,equals:bp,rv:0,wv:0};return e}function ke(n,t){const e=dr(n);return Jp(e),e}function Y_(n,t=!1,e=!0){var s;const i=dr(n);return t||(i.equals=Ap),da&&e&&we!==null&&we.l!==null&&((s=we.l).s??(s.s=[])).push(i),i}function Nt(n,t,e=!1){Jt!==null&&(!ri||Jt.f&uh)&&pa()&&Jt.f&(je|Qi|Af|uh)&&(Gn===null||!fo.call(Gn,n))&&y_();let i=e?vs(t):t;return _o(n,i)}function _o(n,t){if(!n.equals(t)){var e=n.v;pr?As.set(n,t):As.set(n,e),n.v=t;var i=bs.ensure();if(i.capture(n,e),n.f&je){const s=n;n.f&Ze&&Pf(s),wf(s)}n.wv=tm(),Op(n,Ze),pa()&&le!==null&&le.f&Ge&&!(le.f&(ci|vr))&&(In===null?og([n]):In.push(n)),!i.is_fork&&Mu.size>0&&!Fp&&$_()}return t}function $_(){Fp=!1;for(const n of Mu)n.f&Ge&&Pe(n,li),_a(n)&&na(n);Mu.clear()}function j_(n,t=1){var e=mt(n);return Nt(n,t===1?++e:--e)}function Ko(n){Nt(n,n.v+1)}function Op(n,t){var e=n.reactions;if(e!==null)for(var i=pa(),s=e.length,r=0;r<s;r++){var o=e[r],a=o.f;if(!(!i&&o===le)){var l=(a&Ze)===0;if(l&&Pe(o,t),a&je){var c=o;qe==null||qe.delete(c),a&hr||(a&Vn&&(o.f|=hr),Op(c,li))}else l&&(a&Qi&&Qn!==null&&Qn.add(o),si(o))}}}function vs(n){if(typeof n!="object"||n===null||Zr in n)return n;const t=vp(n);if(t!==u_&&t!==f_)return n;var e=new Map,i=gp(n),s=ke(0),r=cr,o=a=>{if(cr===r)return a();var l=Jt,c=cr;Wn(null),ph(r);var u=a();return Wn(l),ph(c),u};return i&&e.set("length",ke(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&v_();var u=e.get(l);return u===void 0?u=o(()=>{var h=ke(c.value);return e.set(l,h),h}):Nt(u,c.value,!0),!0},deleteProperty(a,l){var c=e.get(l);if(c===void 0){if(l in a){const u=o(()=>ke(Xe));e.set(l,u),Ko(s)}}else Nt(c,Xe),Ko(s);return!0},get(a,l,c){var d;if(l===Zr)return n;var u=e.get(l),h=l in a;if(u===void 0&&(!h||(d=Zo(a,l))!=null&&d.writable)&&(u=o(()=>{var _=vs(h?a[l]:Xe),v=ke(_);return v}),e.set(l,u)),u!==void 0){var f=mt(u);return f===Xe?void 0:f}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var u=e.get(l);u&&(c.value=mt(u))}else if(c===void 0){var h=e.get(l),f=h==null?void 0:h.v;if(h!==void 0&&f!==Xe)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(a,l){var f;if(l===Zr)return!0;var c=e.get(l),u=c!==void 0&&c.v!==Xe||Reflect.has(a,l);if(c!==void 0||le!==null&&(!u||(f=Zo(a,l))!=null&&f.writable)){c===void 0&&(c=o(()=>{var d=u?vs(a[l]):Xe,_=ke(d);return _}),e.set(l,c));var h=mt(c);if(h===Xe)return!1}return u},set(a,l,c,u){var y;var h=e.get(l),f=l in a;if(i&&l==="length")for(var d=c;d<h.v;d+=1){var _=e.get(d+"");_!==void 0?Nt(_,Xe):d in a&&(_=o(()=>ke(Xe)),e.set(d+"",_))}if(h===void 0)(!f||(y=Zo(a,l))!=null&&y.writable)&&(h=o(()=>ke(void 0)),Nt(h,vs(c)),e.set(l,h));else{f=h.v!==Xe;var v=o(()=>vs(c));Nt(h,v)}var m=Reflect.getOwnPropertyDescriptor(a,l);if(m!=null&&m.set&&m.set.call(u,c),!f){if(i&&typeof l=="string"){var p=e.get("length"),x=Number(l);Number.isInteger(x)&&x>=p.v&&Nt(p,x+1)}Ko(s)}return!0},ownKeys(a){mt(s);var l=Reflect.ownKeys(a).filter(h=>{var f=e.get(h);return f===void 0||f.v!==Xe});for(var[c,u]of e)u.v!==Xe&&!(c in a)&&l.push(c);return l},setPrototypeOf(){x_()}})}var hh,Bp,zp,kp;function Z_(){if(hh===void 0){hh=window,Bp=/Firefox/.test(navigator.userAgent);var n=Element.prototype,t=Node.prototype,e=Text.prototype;zp=Zo(t,"firstChild").get,kp=Zo(t,"nextSibling").get,ch(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),ch(e)&&(e.__t=void 0)}}function ji(n=""){return document.createTextNode(n)}function kl(n){return zp.call(n)}function ma(n){return kp.call(n)}function Mt(n,t){return kl(n)}function yi(n,t=!1){{var e=kl(n);return e instanceof Comment&&e.data===""?ma(e):e}}function Ft(n,t=1,e=!1){let i=n;for(;t--;)i=ma(i);return i}function K_(n){n.textContent=""}function Hp(){return!1}function Vp(n){var t=Jt,e=le;Wn(null),Ei(null);try{return n()}finally{Wn(t),Ei(e)}}function Gp(n){le===null&&(Jt===null&&__(),m_()),pr&&p_()}function J_(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function wi(n,t,e){var i=le;i!==null&&i.f&Cn&&(n|=Cn);var s={ctx:we,deps:null,nodes:null,f:n|Ze|Vn,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,wv:0,ac:null};if(e)try{na(s),s.f|=bf}catch(a){throw vn(s),a}else t!==null&&si(s);var r=s;if(e&&r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&!(r.f&To)&&(r=r.first,n&Qi&&n&ho&&r!==null&&(r.f|=ho)),r!==null&&(r.parent=i,i!==null&&J_(r,i),Jt!==null&&Jt.f&je&&!(n&vr))){var o=Jt;(o.effects??(o.effects=[])).push(r)}return s}function Df(){return Jt!==null&&!ri}function Q_(n){const t=wi(ha,null,!1);return Pe(t,Ge),t.teardown=n,t}function go(n){Gp();var t=le.f,e=!Jt&&(t&ci)!==0&&(t&bf)===0;if(e){var i=we;(i.e??(i.e=[])).push(n)}else return Wp(n)}function Wp(n){return wi(zl|Sp,n,!1)}function tg(n){return Gp(),wi(ha|Sp,n,!0)}function eg(n){bs.ensure();const t=wi(vr|To,n,!0);return(e={})=>new Promise(i=>{e.outro?lr(t,()=>{vn(t),i(void 0)}):(vn(t),i(void 0))})}function ng(n){return wi(zl,n,!1)}function ig(n){return wi(Af|To,n,!0)}function Xp(n,t=0){return wi(ha|t,n,!0)}function gn(n,t=[],e=[],i=[]){V_(i,t,e,s=>{wi(ha,()=>n(...s.map(mt)),!0)})}function Lf(n,t=0){var e=wi(Qi|t,n,!0);return e}function On(n){return wi(ci|To,n,!0)}function qp(n){var t=n.teardown;if(t!==null){const e=pr,i=Jt;dh(!0),Wn(null);try{t.call(null)}finally{dh(e),Wn(i)}}}function Yp(n,t=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const s=e.ac;s!==null&&Vp(()=>{s.abort(Xr)});var i=e.next;e.f&vr?e.parent=null:vn(e,t),e=i}}function sg(n){for(var t=n.first;t!==null;){var e=t.next;t.f&ci||vn(t),t=e}}function vn(n,t=!0){var e=!1;(t||n.f&Mp)&&n.nodes!==null&&n.nodes.end!==null&&(rg(n.nodes.start,n.nodes.end),e=!0),Yp(n,t&&!e),Hl(n,0),Pe(n,Ss);var i=n.nodes&&n.nodes.t;if(i!==null)for(const r of i)r.stop();qp(n);var s=n.parent;s!==null&&s.first!==null&&$p(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function rg(n,t){for(;n!==null;){var e=n===t?null:ma(n);n.remove(),n=e}}function $p(n){var t=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===n&&(t.first=i),t.last===n&&(t.last=e))}function lr(n,t,e=!0){var i=[];jp(n,i,!0);var s=()=>{e&&vn(n),t&&t()},r=i.length;if(r>0){var o=()=>--r||s();for(var a of i)a.out(o)}else s()}function jp(n,t,e){if(!(n.f&Cn)){n.f^=Cn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)(a.is_global||e)&&t.push(a);for(var s=n.first;s!==null;){var r=s.next,o=(s.f&ho)!==0||(s.f&ci)!==0&&(n.f&Qi)!==0;jp(s,t,o?e:!1),s=r}}}function If(n){Zp(n,!0)}function Zp(n,t){if(n.f&Cn){n.f^=Cn,n.f&Ge||(Pe(n,Ze),si(n));for(var e=n.first;e!==null;){var i=e.next,s=(e.f&ho)!==0||(e.f&ci)!==0;Zp(e,s?t:!1),e=i}var r=n.nodes&&n.nodes.t;if(r!==null)for(const o of r)(o.is_global||t)&&o.in()}}function Kp(n,t){if(n.nodes)for(var e=n.nodes.start,i=n.nodes.end;e!==null;){var s=e===i?null:ma(e);t.append(e),e=s}}let Al=!1,pr=!1;function dh(n){pr=n}let Jt=null,ri=!1;function Wn(n){Jt=n}let le=null;function Ei(n){le=n}let Gn=null;function Jp(n){Jt!==null&&(Gn===null?Gn=[n]:Gn.push(n))}let _n=null,An=0,In=null;function og(n){In=n}let Qp=1,Js=0,cr=Js;function ph(n){cr=n}function tm(){return++Qp}function _a(n){var t=n.f;if(t&Ze)return!0;if(t&je&&(n.f&=~hr),t&li){for(var e=n.deps,i=e.length,s=0;s<i;s++){var r=e[s];if(_a(r)&&Np(r),r.wv>n.wv)return!0}t&Vn&&qe===null&&Pe(n,Ge)}return!1}function em(n,t,e=!0){var i=n.reactions;if(i!==null&&!(Gn!==null&&fo.call(Gn,n)))for(var s=0;s<i.length;s++){var r=i[s];r.f&je?em(r,t,!1):t===r&&(e?Pe(r,Ze):r.f&Ge&&Pe(r,li),si(r))}}function nm(n){var v;var t=_n,e=An,i=In,s=Jt,r=Gn,o=we,a=ri,l=cr,c=n.f;_n=null,An=0,In=null,Jt=c&(ci|vr)?null:n,Gn=null,po(n.ctx),ri=!1,cr=++Js,n.ac!==null&&(Vp(()=>{n.ac.abort(Xr)}),n.ac=null);try{n.f|=pu;var u=n.fn,h=u(),f=n.deps,d=oe==null?void 0:oe.is_fork;if(_n!==null){var _;if(d||Hl(n,An),f!==null&&An>0)for(f.length=An+_n.length,_=0;_<_n.length;_++)f[An+_]=_n[_];else n.deps=f=_n;if(Df()&&n.f&Vn)for(_=An;_<f.length;_++)((v=f[_]).reactions??(v.reactions=[])).push(n)}else!d&&f!==null&&An<f.length&&(Hl(n,An),f.length=An);if(pa()&&In!==null&&!ri&&f!==null&&!(n.f&(je|li|Ze)))for(_=0;_<In.length;_++)em(In[_],n);if(s!==null&&s!==n){if(Js++,s.deps!==null)for(let m=0;m<e;m+=1)s.deps[m].rv=Js;if(t!==null)for(const m of t)m.rv=Js;In!==null&&(i===null?i=In:i.push(...In))}return n.f&Es&&(n.f^=Es),h}catch(m){return wp(m)}finally{n.f^=pu,_n=t,An=e,In=i,Jt=s,Gn=r,po(o),ri=a,cr=l}}function ag(n,t){let e=t.reactions;if(e!==null){var i=a_.call(e,n);if(i!==-1){var s=e.length-1;s===0?e=t.reactions=null:(e[i]=e[s],e.pop())}}if(e===null&&t.f&je&&(_n===null||!fo.call(_n,t))){var r=t;r.f&Vn&&(r.f^=Vn,r.f&=~hr),wf(r),Up(r),Hl(r,0)}}function Hl(n,t){var e=n.deps;if(e!==null)for(var i=t;i<e.length;i++)ag(n,e[i])}function na(n){var t=n.f;if(!(t&Ss)){Pe(n,Ge);var e=le,i=Al;le=n,Al=!0;try{t&(Qi|yp)?sg(n):Yp(n),qp(n);var s=nm(n);n.teardown=typeof s=="function"?s:null,n.wv=Qp;var r;hu&&P_&&n.f&Ze&&n.deps}finally{Al=i,le=e}}}function mt(n){var t=n.f,e=(t&je)!==0;if(Jt!==null&&!ri){var i=le!==null&&(le.f&Ss)!==0;if(!i&&(Gn===null||!fo.call(Gn,n))){var s=Jt.deps;if(Jt.f&pu)n.rv<Js&&(n.rv=Js,_n===null&&s!==null&&s[An]===n?An++:_n===null?_n=[n]:_n.push(n));else{(Jt.deps??(Jt.deps=[])).push(n);var r=n.reactions;r===null?n.reactions=[Jt]:fo.call(r,Jt)||r.push(Jt)}}}if(pr&&As.has(n))return As.get(n);if(e){var o=n;if(pr){var a=o.v;return(!(o.f&Ge)&&o.reactions!==null||sm(o))&&(a=Pf(o)),As.set(o,a),a}var l=(o.f&Vn)===0&&!ri&&Jt!==null&&(Al||(Jt.f&Vn)!==0),c=o.deps===null;_a(o)&&(l&&(o.f|=Vn),Np(o)),l&&!c&&im(o)}if(qe!=null&&qe.has(n))return qe.get(n);if(n.f&Es)throw n.v;return n.v}function im(n){if(n.deps!==null){n.f|=Vn;for(const t of n.deps)(t.reactions??(t.reactions=[])).push(n),t.f&je&&!(t.f&Vn)&&im(t)}}function sm(n){if(n.v===Xe)return!0;if(n.deps===null)return!1;for(const t of n.deps)if(As.has(t)||t.f&je&&sm(t))return!0;return!1}function ga(n){var t=ri;try{return ri=!0,n()}finally{ri=t}}function lg(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Zr in n)Su(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&Zr in e&&Su(e)}}}function Su(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let i in n)try{Su(n[i],t)}catch{}const e=vp(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const i=c_(e);for(let s in i){const r=i[s].get;if(r)try{r.call(n)}catch{}}}}}const cg=["touchstart","touchmove"];function ug(n){return cg.includes(n)}const rm=new Set,Eu=new Set;function bo(n){for(var t=0;t<n.length;t++)rm.add(n[t]);for(var e of Eu)e(n)}let mh=null;function ba(n){var m;var t=this,e=t.ownerDocument,i=n.type,s=((m=n.composedPath)==null?void 0:m.call(n))||[],r=s[0]||n.target;mh=n;var o=0,a=mh===n&&n.__root;if(a){var l=s.indexOf(a);if(l!==-1&&(t===document||t===window)){n.__root=t;return}var c=s.indexOf(t);if(c===-1)return;l<=c&&(o=l)}if(r=s[o]||n.target,r!==t){l_(n,"currentTarget",{configurable:!0,get(){return r||e}});var u=Jt,h=le;Wn(null),Ei(null);try{for(var f,d=[];r!==null;){var _=r.assignedSlot||r.parentNode||r.host||null;try{var v=r["__"+i];v!=null&&(!r.disabled||n.target===r)&&v.call(r,n)}catch(p){f?d.push(p):f=p}if(n.cancelBubble||_===t||_===null)break;r=_}if(f){for(let p of d)queueMicrotask(()=>{throw p});throw f}}finally{n.__root=t,delete n.currentTarget,Wn(u),Ei(h)}}}function fg(n){var t=document.createElement("template");return t.innerHTML=n.replaceAll("<!>","<!---->"),t.content}function Vl(n,t){var e=le;e.nodes===null&&(e.nodes={start:n,end:t,a:null,t:null})}function jt(n,t){var e=(t&A_)!==0,i=(t&w_)!==0,s,r=!n.startsWith("<!>");return()=>{s===void 0&&(s=fg(r?n:"<!>"+n),e||(s=kl(s)));var o=i||Bp?document.importNode(s,!0):s.cloneNode(!0);if(e){var a=kl(o),l=o.lastChild;Vl(a,l)}else Vl(o,o);return o}}function Ps(n=""){{var t=ji(n+"");return Vl(t,t),t}}function ws(){var n=document.createDocumentFragment(),t=document.createComment(""),e=ji();return n.append(t,e),Vl(t,e),n}function Ct(n,t){n!==null&&n.before(t)}function Ee(n,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=e,n.nodeValue=e+"")}function hg(n,t){return dg(n,t)}const Mr=new Map;function dg(n,{target:t,anchor:e,props:i={},events:s,context:r,intro:o=!0}){Z_();var a=new Set,l=h=>{for(var f=0;f<h.length;f++){var d=h[f];if(!a.has(d)){a.add(d);var _=ug(d);t.addEventListener(d,ba,{passive:_});var v=Mr.get(d);v===void 0?(document.addEventListener(d,ba,{passive:_}),Mr.set(d,1)):Mr.set(d,v+1)}}};l(tc(rm)),Eu.add(l);var c=void 0,u=eg(()=>{var h=e??t.appendChild(ji());return B_(h,{pending:()=>{}},f=>{if(r){ts({});var d=we;d.c=r}s&&(i.$$events=s),c=n(f,i)||{},r&&es()}),()=>{var _;for(var f of a){t.removeEventListener(f,ba);var d=Mr.get(f);--d===0?(document.removeEventListener(f,ba),Mr.delete(f)):Mr.set(f,d)}Eu.delete(l),h!==e&&((_=h.parentNode)==null||_.removeChild(h))}});return pg.set(c,u),c}let pg=new WeakMap;var ei,vi,wn,ar,ua,fa,Ql;class mg{constructor(t,e=!0){fi(this,"anchor");$t(this,ei,new Map);$t(this,vi,new Map);$t(this,wn,new Map);$t(this,ar,new Set);$t(this,ua,!0);$t(this,fa,()=>{var t=oe;if(j(this,ei).has(t)){var e=j(this,ei).get(t),i=j(this,vi).get(e);if(i)If(i),j(this,ar).delete(e);else{var s=j(this,wn).get(e);s&&(j(this,vi).set(e,s.effect),j(this,wn).delete(e),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),i=s.effect)}for(const[r,o]of j(this,ei)){if(j(this,ei).delete(r),r===t)break;const a=j(this,wn).get(o);a&&(vn(a.effect),j(this,wn).delete(o))}for(const[r,o]of j(this,vi)){if(r===e||j(this,ar).has(r))continue;const a=()=>{if(Array.from(j(this,ei).values()).includes(r)){var c=document.createDocumentFragment();Kp(o,c),c.append(ji()),j(this,wn).set(r,{effect:o,fragment:c})}else vn(o);j(this,ar).delete(r),j(this,vi).delete(r)};j(this,ua)||!i?(j(this,ar).add(r),lr(o,a,!1)):a()}}});$t(this,Ql,t=>{j(this,ei).delete(t);const e=Array.from(j(this,ei).values());for(const[i,s]of j(this,wn))e.includes(i)||(vn(s.effect),j(this,wn).delete(i))});this.anchor=t,Xt(this,ua,e)}ensure(t,e){var i=oe,s=Hp();if(e&&!j(this,vi).has(t)&&!j(this,wn).has(t))if(s){var r=document.createDocumentFragment(),o=ji();r.append(o),j(this,wn).set(t,{effect:On(()=>e(o)),fragment:r})}else j(this,vi).set(t,On(()=>e(this.anchor)));if(j(this,ei).set(i,t),s){for(const[a,l]of j(this,vi))a===t?i.unskip_effect(l):i.skip_effect(l);for(const[a,l]of j(this,wn))a===t?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(j(this,fa)),i.ondiscard(j(this,Ql))}else j(this,fa).call(this)}}ei=new WeakMap,vi=new WeakMap,wn=new WeakMap,ar=new WeakMap,ua=new WeakMap,fa=new WeakMap,Ql=new WeakMap;function Te(n,t,e=!1){var i=new mg(n),s=e?ho:0;function r(o,a){i.ensure(o,a)}Lf(()=>{var o=!1;t((a,l=!0)=>{o=!0,r(l,a)}),o||r(!1,null)},s)}function ia(n,t){return t}function _g(n,t,e){for(var i=[],s=t.length,r,o=t.length,a=0;a<s;a++){let h=t[a];lr(h,()=>{if(r){if(r.pending.delete(h),r.done.add(h),r.pending.size===0){var f=n.outrogroups;Tu(tc(r.done)),f.delete(r),f.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&e!==null;if(l){var c=e,u=c.parentNode;K_(u),u.append(c),n.items.clear()}Tu(t,!l)}else r={pending:new Set(t),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(r)}function Tu(n,t=!0){for(var e=0;e<n.length;e++)vn(n[e],t)}var _h;function sa(n,t,e,i,s,r=null){var o=n,a=new Map,l=(t&Tp)!==0;if(l){var c=n;o=c.appendChild(ji())}var u=null,h=Cf(()=>{var p=e();return gp(p)?p:p==null?[]:tc(p)}),f,d=!0;function _(){m.fallback=u,gg(m,f,o,t,i),u!==null&&(f.length===0?u.f&Xi?(u.f^=Xi,Yo(u,null,o)):If(u):lr(u,()=>{u=null}))}var v=Lf(()=>{f=mt(h);for(var p=f.length,x=new Set,y=oe,g=Hp(),T=0;T<p;T+=1){var b=f[T],E=i(b,T),A=d?null:a.get(E);A?(A.v&&_o(A.v,b),A.i&&_o(A.i,T),g&&y.unskip_effect(A.e)):(A=vg(a,d?o:_h??(_h=ji()),b,E,T,s,t,e),d||(A.e.f|=Xi),a.set(E,A)),x.add(E)}if(p===0&&r&&!u&&(d?u=On(()=>r(o)):(u=On(()=>r(_h??(_h=ji()))),u.f|=Xi)),!d)if(g){for(const[S,M]of a)x.has(S)||y.skip_effect(M.e);y.oncommit(_),y.ondiscard(()=>{})}else _();mt(h)}),m={effect:v,items:a,outrogroups:null,fallback:u};d=!1}function Io(n){for(;n!==null&&!(n.f&ci);)n=n.next;return n}function gg(n,t,e,i,s){var M,R,P,L,U,F,k,Z,Y;var r=(i&T_)!==0,o=t.length,a=n.items,l=Io(n.effect.first),c,u=null,h,f=[],d=[],_,v,m,p;if(r)for(p=0;p<o;p+=1)_=t[p],v=s(_,p),m=a.get(v).e,m.f&Xi||((R=(M=m.nodes)==null?void 0:M.a)==null||R.measure(),(h??(h=new Set)).add(m));for(p=0;p<o;p+=1){if(_=t[p],v=s(_,p),m=a.get(v).e,n.outrogroups!==null)for(const ot of n.outrogroups)ot.pending.delete(m),ot.done.delete(m);if(m.f&Xi)if(m.f^=Xi,m===l)Yo(m,null,e);else{var x=u?u.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),ss(n,u,m),ss(n,m,x),Yo(m,x,e),u=m,f=[],d=[],l=Io(u.next);continue}if(m.f&Cn&&(If(m),r&&((L=(P=m.nodes)==null?void 0:P.a)==null||L.unfix(),(h??(h=new Set)).delete(m))),m!==l){if(c!==void 0&&c.has(m)){if(f.length<d.length){var y=d[0],g;u=y.prev;var T=f[0],b=f[f.length-1];for(g=0;g<f.length;g+=1)Yo(f[g],y,e);for(g=0;g<d.length;g+=1)c.delete(d[g]);ss(n,T.prev,b.next),ss(n,u,T),ss(n,b,y),l=y,u=b,p-=1,f=[],d=[]}else c.delete(m),Yo(m,l,e),ss(n,m.prev,m.next),ss(n,m,u===null?n.effect.first:u.next),ss(n,u,m),u=m;continue}for(f=[],d=[];l!==null&&l!==m;)(c??(c=new Set)).add(l),d.push(l),l=Io(l.next);if(l===null)continue}m.f&Xi||f.push(m),u=m,l=Io(m.next)}if(n.outrogroups!==null){for(const ot of n.outrogroups)ot.pending.size===0&&(Tu(tc(ot.done)),(U=n.outrogroups)==null||U.delete(ot));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var E=[];if(c!==void 0)for(m of c)m.f&Cn||E.push(m);for(;l!==null;)!(l.f&Cn)&&l!==n.fallback&&E.push(l),l=Io(l.next);var A=E.length;if(A>0){var S=i&Tp&&o===0?e:null;if(r){for(p=0;p<A;p+=1)(k=(F=E[p].nodes)==null?void 0:F.a)==null||k.measure();for(p=0;p<A;p+=1)(Y=(Z=E[p].nodes)==null?void 0:Z.a)==null||Y.fix()}_g(n,E,S)}}r&&Ts(()=>{var ot,ht;if(h!==void 0)for(m of h)(ht=(ot=m.nodes)==null?void 0:ot.a)==null||ht.apply()})}function vg(n,t,e,i,s,r,o,a){var l=o&S_?o&b_?dr(e):Y_(e,!1,!1):null,c=o&E_?dr(s):null;return{v:l,i:c,e:On(()=>(r(t,l??e,c??s,a),()=>{n.delete(i)}))}}function Yo(n,t,e){if(n.nodes)for(var i=n.nodes.start,s=n.nodes.end,r=t&&!(t.f&Xi)?t.nodes.start:e;i!==null;){var o=ma(i);if(r.before(i),i===s)return;i=o}}function ss(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}const gh=[...` 	
\r\f \v\uFEFF`];function xg(n,t,e){var i=n==null?"":""+n;if(e){for(var s in e)if(e[s])i=i?i+" "+s:s;else if(i.length)for(var r=s.length,o=0;(o=i.indexOf(s,o))>=0;){var a=o+r;(o===0||gh.includes(i[o-1]))&&(a===i.length||gh.includes(i[a]))?i=(o===0?"":i.substring(0,o))+i.substring(a+1):o=a}}return i===""?null:i}function yg(n,t){return n==null?null:String(n)}function ur(n,t,e,i,s,r){var o=n.__className;if(o!==e||o===void 0){var a=xg(e,i,r);a==null?n.removeAttribute("class"):n.className=a,n.__className=e}else if(r&&s!==r)for(var l in r){var c=!!r[l];(s==null||c!==!!s[l])&&n.classList.toggle(l,c)}return r}function Mg(n,t,e,i){var s=n.__style;if(s!==t){var r=yg(t);r==null?n.removeAttribute("style"):n.style.cssText=r,n.__style=t}return i}function vh(n,t){return n===t||(n==null?void 0:n[Zr])===t}function om(n={},t,e,i){return ng(()=>{var s,r;return Xp(()=>{s=r,r=[],ga(()=>{n!==e(...r)&&(t(n,...r),s&&vh(e(...s),n)&&t(null,...s))})}),()=>{Ts(()=>{r&&vh(e(...r),n)&&t(null,...r)})}}),n}function Uf(n=!1){const t=we,e=t.l.u;if(!e)return;let i=()=>lg(t.s);if(n){let s=0,r={};const o=ec(()=>{let a=!1;const l=t.s;for(const c in l)l[c]!==r[c]&&(r[c]=l[c],a=!0);return a&&s++,s});i=()=>mt(o)}e.b.length&&tg(()=>{xh(t,i),du(e.b)}),go(()=>{const s=ga(()=>e.m.map(h_));return()=>{for(const r of s)typeof r=="function"&&r()}}),e.a.length&&go(()=>{xh(t,i),du(e.a)})}function xh(n,t){if(n.l.s)for(const e of n.l.s)mt(e);t()}function ra(n,t,e,i){var s=i,r=!0,o=()=>(r&&(r=!1,s=i),s),a;a=n[t],a===void 0&&i!==void 0&&(a=o());var l;return l=()=>{var c=n[t];return c===void 0?o():(r=!0,c)},l}function Nf(n){we===null&&Ep(),da&&we.l!==null?Sg(we).m.push(n):go(()=>{const t=ga(n);if(typeof t=="function")return t})}function am(n){we===null&&Ep(),Nf(()=>()=>ga(n))}function Sg(n){var t=n.l;return t.u??(t.u={a:[],b:[],m:[]})}const Eg="5";var _p;typeof window<"u"&&((_p=window.__svelte??(window.__svelte={})).v??(_p.v=new Set)).add(Eg);let Pi=vs({connected:!1,error:null,reconnecting:!1});const Rn={get connected(){return Pi.connected},get error(){return Pi.error},get reconnecting(){return Pi.reconnecting},setConnected(n){Pi.connected=n,Pi.error=null,Pi.reconnecting=!1},setError(n){Pi.error=n,Pi.connected=!1},setReconnecting(n){Pi.reconnecting=n}};let Le=null,Kr=null,Qs=null,qs=0;const yh=10,Tg=1e3,bg=3e4;function Ag(n){Qs=n;const e=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws`;function i(){Le&&Le.readyState===WebSocket.OPEN||(Le=new WebSocket(e),Le.onopen=()=>{console.log("[WS] Connected"),Rn.setConnected(!0),qs=0},Le.onclose=s=>{if(console.log("[WS] Disconnected",s.code,s.reason),Rn.setConnected(!1),qs<yh){Rn.setReconnecting(!0),qs++;const r=Math.min(Tg*Math.pow(2,qs-1)+Math.random()*1e3,bg);console.log(`[WS] Reconnecting in ${Math.round(r)}ms (attempt ${qs}/${yh})...`),Kr=setTimeout(()=>{i()},r)}else console.log("[WS] Max reconnection attempts reached. Click to reconnect."),Rn.setError("Connection lost. Server may have stopped."),Rn.setReconnecting(!1)},Le.onerror=s=>{console.error("[WS] Error:",s)},Le.onmessage=s=>{try{const r=JSON.parse(s.data);console.log("[WS] Received:",r.type),Qs==null||Qs(r)}catch(r){console.error("[WS] Parse error:",r)}})}return i(),()=>{Kr&&clearTimeout(Kr),Le&&Le.close(1e3,"Cleanup")}}function wg(n){(Le==null?void 0:Le.readyState)===WebSocket.OPEN&&(Le.send(JSON.stringify(n)),console.log("[WS] Sent:",n.type))}function Rg(){qs=0,Kr&&clearTimeout(Kr),Rn.setReconnecting(!0),Kr=setTimeout(()=>{const t=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws`;Le&&Le.close(),Le=new WebSocket(t),Le.onopen=()=>{console.log("[WS] Reconnected"),Rn.setConnected(!0),qs=0},Le.onclose=e=>{console.log("[WS] Disconnected",e.code),Rn.setConnected(!1),Rn.setReconnecting(!1)},Le.onerror=()=>{Rn.setError("Failed to reconnect"),Rn.setReconnecting(!1)},Le.onmessage=e=>{try{const i=JSON.parse(e.data);Qs==null||Qs(i)}catch(i){console.error("[WS] Parse error:",i)}}},500)}let be=vs([]),dn=ke(null),hi=ke(null),bu=ke(0),di=ke(!0),Is=ke(null),Aa=ke(!1),wa=ke(!1),Ra=ke(!1);function Cg(n,t,e,i=null,s=null){const r=e||t||"default",o=t||r;return{id:j_(bu),suiteId:r,suiteName:o,testName:n||`Test ${mt(bu)}`,events:[],expectations:[],currentIndex:-1,running:!0,allPassed:null,stock:i,tools:s||{},machine:{position:{X:0,Y:0,Z:0},unit:"mm",mode:"absolute",tool:null,feed:0,spindle:0,spindleOn:!1,spindleCW:!0}}}function Pg(n){return n.map(t=>{var e,i,s,r,o,a,l,c;return{x:((i=(e=t.stateAfter)==null?void 0:e.Position)==null?void 0:i.X)??0,y:((r=(s=t.stateAfter)==null?void 0:s.Position)==null?void 0:r.Y)??0,z:((a=(o=t.stateAfter)==null?void 0:o.Position)==null?void 0:a.Z)??0,type:((l=t.event)==null?void 0:l.Type)??"unknown",index:t.index,isCut:["LinearCut","ArcCW","ArcCCW","DrillCycle"].includes((c=t.event)==null?void 0:c.Type)}})}function Dg(n){return{total:n.length,rapidMoves:n.filter(t=>{var e;return((e=t.event)==null?void 0:e.Type)==="RapidMove"}).length,linearCuts:n.filter(t=>{var e;return((e=t.event)==null?void 0:e.Type)==="LinearCut"}).length,arcs:n.filter(t=>{var e,i;return((e=t.event)==null?void 0:e.Type)==="ArcCW"||((i=t.event)==null?void 0:i.Type)==="ArcCCW"}).length}}const xt={get list(){return be},get activeId(){return mt(dn)},get activeSuiteId(){return mt(hi)},get followLive(){return mt(di)},get receivingId(){return mt(Is)},get testsRunning(){return mt(Ra)},get isReceiving(){const n=be.find(t=>t.id===mt(Is));return(n==null?void 0:n.running)===!0},get active(){return be.find(n=>n.id===mt(dn))||null},get suites(){const n=new Map;for(const t of be){const e=t.suiteId||"default";n.has(e)||n.set(e,{id:e,name:t.suiteName||e,tests:[],running:!1,allPassed:!0});const i=n.get(e);i.tests.push(t),t.running&&(i.running=!0),t.allPassed===!1&&(i.allPassed=!1)}return Array.from(n.values())},get tests(){return mt(hi)?be.filter(n=>n.suiteId===mt(hi)):[]},get receiving(){return be.find(n=>n.id===mt(Is))||null},get count(){return be.length},get stock(){const n=this.active;return n?n.stock:null},get tools(){const n=this.active;return n?n.tools||{}:{}},get currentTool(){var e;const n=this.active;if(!n||!n.machine.tool)return null;const t=n.machine.tool;return((e=n.tools)==null?void 0:e[t])||{number:t,diameter:6,fluteLength:25,type:"EndMill"}},get toolPath(){const n=this.active;return n?Pg(n.events):[]},get stats(){const n=this.active;return n?Dg(n.events):{total:0,rapidMoves:0,linearCuts:0,arcs:0}},get machine(){const n=this.active;return n?n.machine:{position:{X:0,Y:0,Z:0},unit:"mm",mode:"absolute",tool:null,feed:0,spindle:0,spindleOn:!1,spindleCW:!0}},get events(){const n=this.active??this.receiving;return n?n.events:[]},get expectations(){const n=this.active;return n?n.expectations:[]},get currentIndex(){const n=this.active??this.receiving;return n?n.currentIndex:-1},create(n,t,e,i=null,s=null){const r=Cg(n,t,e,i,s);return be.push(r),Nt(Is,r.id,!0),Nt(Ra,!0),mt(di)&&(Nt(dn,r.id,!0),Nt(hi,r.suiteId,!0)),r.id},setFollowLive(n){Nt(di,n,!0)},resumeLive(){Nt(di,!0),Nt(Aa,!1),Nt(wa,!1);const n=this.receiving;if(n&&(Nt(dn,n.id,!0),Nt(hi,n.suiteId,!0),n.events.length>0)){const t=n.events[n.events.length-1];if(n.currentIndex=t.index,t.stateAfter){const e={...n.machine};t.stateAfter.Position&&(e.position={...t.stateAfter.Position}),t.stateAfter.Unit&&(e.unit=t.stateAfter.Unit),t.stateAfter.Mode&&(e.mode=t.stateAfter.Mode),t.stateAfter.Tool!==void 0&&(e.tool=t.stateAfter.Tool),t.stateAfter.Feed!==void 0&&(e.feed=t.stateAfter.Feed),t.stateAfter.Spindle!==void 0&&(e.spindle=t.stateAfter.Spindle),t.stateAfter.SpindleOn!==void 0&&(e.spindleOn=t.stateAfter.SpindleOn),t.stateAfter.SpindleCW!==void 0&&(e.spindleCW=t.stateAfter.SpindleCW),n.machine=e}}},setActiveSuite(n){if(!be.find(i=>i.suiteId===n))return;Nt(hi,n,!0),Nt(wa,!0),Nt(di,!1);const e=be.filter(i=>i.suiteId===n);e.length>0&&(Nt(dn,e[e.length-1].id,!0),Nt(Aa,!0))},setActive(n){const t=be.find(e=>e.id===n);if(t&&(Nt(dn,n,!0),Nt(hi,t.suiteId,!0),Nt(Aa,!0),Nt(wa,!0),Nt(di,!1),t.events.length>0&&t.currentIndex>=0)){const e=t.events.find(i=>i.index===t.currentIndex);if(e!=null&&e.stateAfter){const i={...t.machine};e.stateAfter.Position&&(i.position={...e.stateAfter.Position}),e.stateAfter.Unit&&(i.unit=e.stateAfter.Unit),e.stateAfter.Mode&&(i.mode=e.stateAfter.Mode),e.stateAfter.Tool!==void 0&&(i.tool=e.stateAfter.Tool),e.stateAfter.Feed!==void 0&&(i.feed=e.stateAfter.Feed),e.stateAfter.Spindle!==void 0&&(i.spindle=e.stateAfter.Spindle),e.stateAfter.SpindleOn!==void 0&&(i.spindleOn=e.stateAfter.SpindleOn),e.stateAfter.SpindleCW!==void 0&&(i.spindleCW=e.stateAfter.SpindleCW),t.machine=i}}},addEvent(n){const t=this.receiving;t&&(mt(dn)||(Nt(dn,t.id,!0),Nt(hi,t.suiteId,!0)),t.events.push(n),(t.id!==mt(dn)||mt(di))&&(t.currentIndex=n.index))},addExpectation(n){const t=this.receiving;t&&t.expectations.push(n)},updateMachine(n){const t=this.receiving;if(t&&n){if(t.id===mt(dn)&&!mt(di))return;const e={...t.machine};n.Position&&(e.position={...n.Position}),n.Unit&&(e.unit=n.Unit),n.Mode&&(e.mode=n.Mode),n.Tool!==void 0&&(e.tool=n.Tool),n.Feed!==void 0&&(e.feed=n.Feed),n.Spindle!==void 0&&(e.spindle=n.Spindle),n.SpindleOn!==void 0&&(e.spindleOn=n.SpindleOn),n.SpindleCW!==void 0&&(e.spindleCW=n.SpindleCW),t.machine=e}},endSession(n){const t=this.receiving;t&&(t.running=!1,t.allPassed=n),Nt(Ra,be.some(e=>e.running),!0)},setCurrentIndex(n,t=!0){const e=this.active;if(e){t&&Nt(di,!1),e.currentIndex=n;const i=e.events.find(s=>s.index===n);if(i!=null&&i.stateAfter){const s={...e.machine};i.stateAfter.Position&&(s.position={...i.stateAfter.Position}),i.stateAfter.Unit&&(s.unit=i.stateAfter.Unit),i.stateAfter.Mode&&(s.mode=i.stateAfter.Mode),i.stateAfter.Tool!==void 0&&(s.tool=i.stateAfter.Tool),i.stateAfter.Feed!==void 0&&(s.feed=i.stateAfter.Feed),i.stateAfter.Spindle!==void 0&&(s.spindle=i.stateAfter.Spindle),i.stateAfter.SpindleOn!==void 0&&(s.spindleOn=i.stateAfter.SpindleOn),i.stateAfter.SpindleCW!==void 0&&(s.spindleCW=i.stateAfter.SpindleCW),e.machine=s}}},clear(){be.length=0,Nt(dn,null),Nt(hi,null),Nt(Is,null),Nt(bu,0),Nt(Aa,!1),Nt(wa,!1),Nt(di,!0),Nt(Ra,!1)},remove(n){const t=be.findIndex(e=>e.id===n);if(t>=0){const e=be[t];if(be.splice(t,1),mt(dn)===n){const i=be.filter(s=>s.suiteId===e.suiteId);i.length>0?Nt(dn,i[i.length-1].id,!0):(Nt(dn,be.length>0?be[0].id:null,!0),Nt(hi,be.length>0?be[0].suiteId:null,!0))}if(mt(Is)===n){const i=be.find(s=>s.running);Nt(Is,(i==null?void 0:i.id)||null,!0)}}}};let $n=vs({state:"playing",speed:"normal"});const Lg={fast:50,normal:200,slow:500},pe={get state(){return $n.state},get speed(){return $n.speed},get isPaused(){return $n.state==="paused"},get isPlaying(){return $n.state==="playing"},get isStepping(){return $n.state==="stepping"},getDelayMs(){return Lg[$n.speed]??200},setState(n){$n.state=n},setSpeed(n){$n.speed=n},pause(){$n.state="paused"},resume(){$n.state="playing"},step(){$n.state="stepping"}};D_();var Ig=jt('<span class="test-status running svelte-1elxaub">Running...</span>'),Ug=jt('<span class="test-status passed svelte-1elxaub">✓ Passed</span>'),Ng=jt('<span class="test-status failed svelte-1elxaub">✗ Failed</span>'),Fg=jt('<span class="test-name svelte-1elxaub"> </span> <!>',1),Og=jt('<span class="status connected svelte-1elxaub"><span class="dot svelte-1elxaub"></span> Connected</span>'),Bg=jt('<span class="status reconnecting svelte-1elxaub"><span class="dot svelte-1elxaub"></span> Reconnecting...</span>'),zg=jt('<button class="status disconnected svelte-1elxaub"><span class="dot svelte-1elxaub"></span> Disconnected - Click to reconnect</button>'),kg=jt('<header class="header svelte-1elxaub"><div class="logo svelte-1elxaub"><span class="logo-icon svelte-1elxaub">⚙️</span> <span class="logo-text svelte-1elxaub">gocode-check</span> <span class="logo-badge svelte-1elxaub">UI</span></div> <div class="test-info svelte-1elxaub"><!></div> <div class="connection-status svelte-1elxaub"><!></div></header>');function Hg(n,t){ts(t,!1);function e(){Rg()}Uf();var i=kg(),s=Ft(Mt(i),2),r=Mt(s);{var o=h=>{var f=Fg(),d=yi(f),_=Mt(d),v=Ft(d,2);{var m=x=>{var y=Ig();Ct(x,y)},p=x=>{var y=ws(),g=yi(y);{var T=E=>{var A=Ug();Ct(E,A)},b=E=>{var A=ws(),S=yi(A);{var M=R=>{var P=Ng();Ct(R,P)};Te(S,R=>{xt.active.allPassed===!1&&R(M)},!0)}Ct(E,A)};Te(g,E=>{xt.active.allPassed===!0?E(T):E(b,!1)},!0)}Ct(x,y)};Te(v,x=>{xt.active.running?x(m):x(p,!1)})}gn(()=>Ee(_,`🧪 ${xt.active.testName??""}`)),Ct(h,f)};Te(r,h=>{xt.active&&h(o)})}var a=Ft(s,2),l=Mt(a);{var c=h=>{var f=Og();Ct(h,f)},u=h=>{var f=ws(),d=yi(f);{var _=m=>{var p=Bg();Ct(m,p)},v=m=>{var p=zg();p.__click=e,Ct(m,p)};Te(d,m=>{Rn.reconnecting?m(_):m(v,!1)},!0)}Ct(h,f)};Te(l,h=>{Rn.connected?h(c):h(u,!1)})}Ct(n,i),es()}bo(["click"]);var Vg=jt('<span class="dot running svelte-1gmx54b"></span>'),Gg=jt('<div role="tab" tabindex="0"><span class="suite-status svelte-1gmx54b"><!></span> <span class="suite-name svelte-1gmx54b"> </span></div>'),Wg=jt('<div class="suite-bar svelte-1gmx54b"></div>');function Xg(n,t){ts(t,!0);let e=ra(t,"onSuiteSwitch",3,()=>{});function i(r){e()(r)}var s=Wg();sa(s,21,()=>xt.suites,ia,(r,o)=>{var a=Gg();let l;a.__click=()=>i(mt(o).id),a.__keydown=v=>v.key==="Enter"&&i(mt(o).id);var c=Mt(a),u=Mt(c);{var h=v=>{var m=Vg();Ct(v,m)},f=v=>{var m=ws(),p=yi(m);{var x=g=>{var T=Ps("✓");Ct(g,T)},y=g=>{var T=Ps("✗");Ct(g,T)};Te(p,g=>{mt(o).allPassed?g(x):g(y,!1)},!0)}Ct(v,m)};Te(u,v=>{mt(o).running?v(h):v(f,!1)})}var d=Ft(c,2),_=Mt(d);gn(()=>{l=ur(a,1,"suite-tab svelte-1gmx54b",null,l,{active:mt(o).id===xt.activeSuiteId,passed:!mt(o).running&&mt(o).allPassed,failed:!mt(o).running&&!mt(o).allPassed}),Ee(_,mt(o).name)}),Ct(r,a)}),Ct(n,s),es()}bo(["click","keydown"]);var qg=jt('<span class="dot running svelte-1wwzsr0"></span>'),Yg=jt('<div role="tab" tabindex="0"><span class="tab-status svelte-1wwzsr0"><!></span> <span class="tab-name svelte-1wwzsr0"> </span> <span class="tab-close svelte-1wwzsr0" role="button" tabindex="0">×</span></div>'),$g=jt('<div class="tab-bar svelte-1wwzsr0"></div>');function jg(n,t){ts(t,!0);let e=ra(t,"onTabSwitch",3,()=>{});function i(o){e()(o)}function s(o,a){o.stopPropagation(),o.preventDefault(),xt.remove(a)}var r=$g();sa(r,21,()=>xt.tests,ia,(o,a)=>{var l=Yg();let c;l.__click=()=>i(mt(a).id),l.__keydown=p=>p.key==="Enter"&&i(mt(a).id);var u=Mt(l),h=Mt(u);{var f=p=>{var x=qg();Ct(p,x)},d=p=>{var x=ws(),y=yi(x);{var g=b=>{var E=Ps("✓");Ct(b,E)},T=b=>{var E=Ps("✗");Ct(b,E)};Te(y,b=>{mt(a).allPassed?b(g):b(T,!1)},!0)}Ct(p,x)};Te(h,p=>{mt(a).running?p(f):p(d,!1)})}var _=Ft(u,2),v=Mt(_),m=Ft(_,2);m.__click=p=>s(p,mt(a).id),m.__keydown=p=>p.key==="Enter"&&s(p,mt(a).id),gn(()=>{c=ur(l,1,"tab svelte-1wwzsr0",null,c,{active:mt(a).id===xt.activeId,passed:!mt(a).running&&mt(a).allPassed===!0,failed:!mt(a).running&&mt(a).allPassed===!1}),Ee(v,mt(a).testName)}),Ct(o,l)}),Ct(n,r),es()}bo(["click","keydown"]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="170",Jr={ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zg=0,Mh=1,Kg=2,lm=1,cm=2,zi=3,Ti=0,ln=1,kn=2,Rs=0,Qr=1,Sh=2,Eh=3,Th=4,Jg=5,Ys=100,Qg=101,tv=102,ev=103,nv=104,iv=200,sv=201,rv=202,ov=203,Au=204,wu=205,av=206,lv=207,cv=208,uv=209,fv=210,hv=211,dv=212,pv=213,mv=214,Ru=0,Cu=1,Pu=2,vo=3,Du=4,Lu=5,Iu=6,Uu=7,um=0,_v=1,gv=2,Cs=0,vv=1,xv=2,yv=3,Mv=4,Sv=5,Ev=6,Tv=7,fm=300,xo=301,yo=302,Nu=303,Fu=304,nc=306,Ou=1e3,tr=1001,Bu=1002,ai=1003,bv=1004,Ca=1005,Mi=1006,fc=1007,er=1008,Ki=1009,hm=1010,dm=1011,oa=1012,Ff=1013,mr=1014,qi=1015,xa=1016,Of=1017,Bf=1018,Mo=1020,pm=35902,mm=1021,_m=1022,oi=1023,gm=1024,vm=1025,to=1026,So=1027,xm=1028,zf=1029,ym=1030,kf=1031,Hf=1033,wl=33776,Rl=33777,Cl=33778,Pl=33779,zu=35840,ku=35841,Hu=35842,Vu=35843,Gu=36196,Wu=37492,Xu=37496,qu=37808,Yu=37809,$u=37810,ju=37811,Zu=37812,Ku=37813,Ju=37814,Qu=37815,tf=37816,ef=37817,nf=37818,sf=37819,rf=37820,of=37821,Dl=36492,af=36494,lf=36495,Mm=36283,cf=36284,uf=36285,ff=36286,Av=3200,wv=3201,Sm=0,Rv=1,ps="",Bn="srgb",Ao="srgb-linear",ic="linear",fe="srgb",Sr=7680,bh=519,Cv=512,Pv=513,Dv=514,Em=515,Lv=516,Iv=517,Uv=518,Nv=519,Ah=35044,wh="300 es",Yi=2e3,Gl=2001;class xr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rh=1234567;const eo=Math.PI/180,aa=180/Math.PI;function wo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function Ye(n,t,e){return Math.max(t,Math.min(e,n))}function Vf(n,t){return(n%t+t)%t}function Fv(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ov(n,t,e){return n!==t?(e-n)/(t-n):0}function Jo(n,t,e){return(1-e)*n+e*t}function Bv(n,t,e,i){return Jo(n,t,1-Math.exp(-e*i))}function zv(n,t=1){return t-Math.abs(Vf(n,t*2)-t)}function kv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Hv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Vv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Gv(n,t){return n+Math.random()*(t-n)}function Wv(n){return n*(.5-Math.random())}function Xv(n){n!==void 0&&(Rh=n);let t=Rh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qv(n){return n*eo}function Yv(n){return n*aa}function $v(n){return(n&n-1)===0&&n!==0}function jv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kv(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ll={DEG2RAD:eo,RAD2DEG:aa,generateUUID:wo,clamp:Ye,euclideanModulo:Vf,mapLinear:Fv,inverseLerp:Ov,lerp:Jo,damp:Bv,pingpong:zv,smoothstep:kv,smootherstep:Hv,randInt:Vv,randFloat:Gv,randFloatSpread:Wv,seededRandom:Xv,degToRad:qv,radToDeg:Yv,isPowerOfTwo:$v,ceilPowerOfTwo:jv,floorPowerOfTwo:Zv,setQuaternionFromProperEuler:Kv,normalize:rn,denormalize:Wr};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,s,r,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],v=s[0],m=s[3],p=s[6],x=s[1],y=s[4],g=s[7],T=s[2],b=s[5],E=s[8];return r[0]=o*v+a*x+l*T,r[3]=o*m+a*y+l*b,r[6]=o*p+a*g+l*E,r[1]=c*v+u*x+h*T,r[4]=c*m+u*y+h*b,r[7]=c*p+u*g+h*E,r[2]=f*v+d*x+_*T,r[5]=f*m+d*y+_*b,r[8]=f*p+d*g+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=e*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hc.makeScale(t,e)),this}rotate(t){return this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new Ht;function Tm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jv(){const n=Wl("canvas");return n.style.display="block",n}const Ch={};function $o(n){n in Ch||(Ch[n]=!0,console.warn(n))}function Qv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function t0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function e0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Ao,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(n.r=no(n.r),n.g=no(n.g),n.b=no(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ps?ic:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function no(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ph=[.64,.33,.3,.6,.15,.06],Dh=[.2126,.7152,.0722],Lh=[.3127,.329],Ih=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Ao]:{primaries:Ph,whitePoint:Lh,transfer:ic,toXYZ:Ih,fromXYZ:Uh,luminanceCoefficients:Dh,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:Ph,whitePoint:Lh,transfer:fe,toXYZ:Ih,fromXYZ:Uh,luminanceCoefficients:Dh,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}});let Er;class n0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Er===void 0&&(Er=Wl("canvas")),Er.width=t.width,Er.height=t.height;const i=Er.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Er}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zi(e[i]/255)*255):e[i]=Zi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let i0=0;class bm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=wo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dc(s[o].image)):r.push(dc(s[o]))}else r=dc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?n0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let s0=0;class xn extends xr{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,i=tr,s=tr,r=Mi,o=er,a=oi,l=Ki,c=xn.DEFAULT_ANISOTROPY,u=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=wo(),this.name="",this.source=new bm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ou:t.x=t.x-Math.floor(t.x);break;case tr:t.x=t.x<0?0:1;break;case Bu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ou:t.y=t.y-Math.floor(t.y);break;case tr:t.y=t.y<0?0:1;break;case Bu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=fm;xn.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,i=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,g=(d+1)/2,T=(p+1)/2,b=(u+f)/4,E=(h+v)/4,A=(_+m)/4;return y>g&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=b/i,r=E/i):g>T?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=b/s,r=A/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=E/r,s=A/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-v)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r0 extends xr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends r0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Am extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=v;return}if(h!==v||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),b=Math.atan2(T,p*x);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const g=a*x;if(l=l*m+f*g,c=c*m+d*g,u=u*m+_*g,h=h*m+v*g,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-a*d,t[e+2]=c*_+u*d+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new I,Nh=new gr;class cn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),Da.subVectors(this.max,Uo),Tr.subVectors(t.a,Uo),br.subVectors(t.b,Uo),Ar.subVectors(t.c,Uo),rs.subVectors(br,Tr),os.subVectors(Ar,br),Us.subVectors(Tr,Ar);let e=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Us.z,Us.y,rs.z,0,-rs.x,os.z,0,-os.x,Us.z,0,-Us.x,-rs.y,rs.x,0,-os.y,os.x,0,-Us.y,Us.x,0];return!mc(e,Tr,br,Ar,Da)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,Tr,br,Ar,Da))?!1:(La.crossVectors(rs,os),e=[La.x,La.y,La.z],mc(e,Tr,br,Ar,Da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Di=[new I,new I,new I,new I,new I,new I,new I,new I],jn=new I,Pa=new cn,Tr=new I,br=new I,Ar=new I,rs=new I,os=new I,Us=new I,Uo=new I,Da=new I,La=new I,Ns=new I;function mc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ns.fromArray(n,r);const a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),l=t.dot(Ns),c=e.dot(Ns),u=i.dot(Ns);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const a0=new cn,No=new I,_c=new I;class sc{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):a0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const e=No.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(No,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(_c)),this.expandByPoint(No.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new I,gc=new I,Ia=new I,as=new I,vc=new I,Ua=new I,xc=new I;class Ro{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){gc.copy(t).add(e).multiplyScalar(.5),Ia.copy(e).sub(t).normalize(),as.copy(this.origin).sub(gc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ia),a=as.dot(this.direction),l=-as.dot(Ia),c=as.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gc).addScaledVector(Ia,f),d}intersectSphere(t,e){Li.subVectors(t.center,this.origin);const i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,s,r){vc.subVectors(e,t),Ua.subVectors(i,t),xc.crossVectors(vc,Ua);let o=this.direction.dot(xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,t);const l=a*this.direction.dot(Ua.crossVectors(as,Ua));if(l<0)return null;const c=a*this.direction.dot(vc.cross(as));if(c<0||l+c>o)return null;const u=-a*as.dot(xc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,_,v,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,_,v,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/wr.setFromMatrixColumn(t,0).length(),r=1/wr.setFromMatrixColumn(t,1).length(),o=1/wr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,v=c*h;e[0]=f+v*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,v=c*h;e[0]=f-v*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,v=a*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(l0,t,c0)}lookAt(t,e,i){const s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ls.crossVectors(i,Tn),ls.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ls.crossVectors(i,Tn)),ls.normalize(),Na.crossVectors(Tn,ls),s[0]=ls.x,s[4]=Na.x,s[8]=Tn.x,s[1]=ls.y,s[5]=Na.y,s[9]=Tn.y,s[2]=ls.z,s[6]=Na.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],v=i[6],m=i[10],p=i[14],x=i[3],y=i[7],g=i[11],T=i[15],b=s[0],E=s[4],A=s[8],S=s[12],M=s[1],R=s[5],P=s[9],L=s[13],U=s[2],F=s[6],k=s[10],Z=s[14],Y=s[3],ot=s[7],ht=s[11],yt=s[15];return r[0]=o*b+a*M+l*U+c*Y,r[4]=o*E+a*R+l*F+c*ot,r[8]=o*A+a*P+l*k+c*ht,r[12]=o*S+a*L+l*Z+c*yt,r[1]=u*b+h*M+f*U+d*Y,r[5]=u*E+h*R+f*F+d*ot,r[9]=u*A+h*P+f*k+d*ht,r[13]=u*S+h*L+f*Z+d*yt,r[2]=_*b+v*M+m*U+p*Y,r[6]=_*E+v*R+m*F+p*ot,r[10]=_*A+v*P+m*k+p*ht,r[14]=_*S+v*L+m*Z+p*yt,r[3]=x*b+y*M+g*U+T*Y,r[7]=x*E+y*R+g*F+T*ot,r[11]=x*A+y*P+g*k+T*ht,r[15]=x*S+y*L+g*Z+T*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],v=t[13],m=t[14],p=t[15],x=h*m*c-v*f*c+v*l*d-a*m*d-h*l*p+a*f*p,y=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,g=u*v*c-_*h*c+_*a*d-o*v*d-u*a*p+o*h*p,T=_*h*l-u*v*l-_*a*f+o*v*f+u*a*m-o*h*m,b=e*x+i*y+s*g+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=x*E,t[1]=(v*f*r-h*m*r-v*s*d+i*m*d+h*s*p-i*f*p)*E,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*E,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*E,t[4]=y*E,t[5]=(u*m*r-_*f*r+_*s*d-e*m*d-u*s*p+e*f*p)*E,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*p-e*l*p)*E,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*E,t[8]=g*E,t[9]=(_*h*r-u*v*r-_*i*d+e*v*d+u*i*p-e*h*p)*E,t[10]=(o*v*r-_*a*r+_*i*c-e*v*c-o*i*p+e*a*p)*E,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*E,t[12]=T*E,t[13]=(u*v*s-_*h*s+_*i*f-e*v*f-u*i*m+e*h*m)*E,t[14]=(_*a*s-o*v*s-_*i*l+e*v*l+o*i*m-e*a*m)*E,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,v=o*u,m=o*h,p=a*h,x=l*c,y=l*u,g=l*h,T=i.x,b=i.y,E=i.z;return s[0]=(1-(v+p))*T,s[1]=(d+g)*T,s[2]=(_-y)*T,s[3]=0,s[4]=(d-g)*b,s[5]=(1-(f+p))*b,s[6]=(m+x)*b,s[7]=0,s[8]=(_+y)*E,s[9]=(m-x)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=wr.set(s[0],s[1],s[2]).length();const o=wr.set(s[4],s[5],s[6]).length(),a=wr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Zn.copy(this);const c=1/r,u=1/o,h=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,e.setFromRotationMatrix(Zn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Yi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,_;if(a===Yi)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Gl)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Yi){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let _,v;if(a===Yi)_=(o+r)*h,v=-2*h;else if(a===Gl)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const wr=new I,Zn=new ee,l0=new I(0,0,0),c0=new I(1,1,1),ls=new I,Na=new I,Tn=new I,Fh=new ee,Oh=new gr;class bi{constructor(t=0,e=0,i=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class wm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let u0=0;const Bh=new I,Rr=new gr,Ii=new ee,Fa=new I,Fo=new I,f0=new I,h0=new gr,zh=new I(1,0,0),kh=new I(0,1,0),Hh=new I(0,0,1),Vh={type:"added"},d0={type:"removed"},Cr={type:"childadded",child:null},yc={type:"childremoved",child:null};class $e extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new I,e=new bi,i=new gr,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ht}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(zh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return Bh.copy(t).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fa.copy(t):Fa.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Fo,Fa,this.up):Ii.lookAt(Fa,Fo,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(Ii),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vh),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(d0),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vh),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,f0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,h0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}$e.DEFAULT_UP=new I(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new I,Ui=new I,Mc=new I,Ni=new I,Pr=new I,Dr=new I,Gh=new I,Sc=new I,Ec=new I,Tc=new I,bc=new ae,Ac=new ae,wc=new ae;class _e{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Kn.subVectors(t,e),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Kn.subVectors(s,e),Ui.subVectors(i,e),Mc.subVectors(t,e);const o=Kn.dot(Kn),a=Kn.dot(Ui),l=Kn.dot(Mc),c=Ui.dot(Ui),u=Ui.dot(Mc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return bc.setScalar(0),Ac.setScalar(0),wc.setScalar(0),bc.fromBufferAttribute(t,e),Ac.fromBufferAttribute(t,i),wc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bc,r.x),o.addScaledVector(Ac,r.y),o.addScaledVector(wc,r.z),o}static isFrontFacing(t,e,i,s){return Kn.subVectors(i,e),Ui.subVectors(t,e),Kn.cross(Ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Kn.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return _e.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return _e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Pr.subVectors(s,i),Dr.subVectors(r,i),Sc.subVectors(t,i);const l=Pr.dot(Sc),c=Dr.dot(Sc);if(l<=0&&c<=0)return e.copy(i);Ec.subVectors(t,s);const u=Pr.dot(Ec),h=Dr.dot(Ec);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Pr,o);Tc.subVectors(t,r);const d=Pr.dot(Tc),_=Dr.dot(Tc);if(_>=0&&d<=_)return e.copy(r);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Dr,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Gh.subVectors(r,s),a=(h-u)/(h-u+(d-_)),e.copy(s).addScaledVector(Gh,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(i).addScaledVector(Pr,o).addScaledVector(Dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=Vf(t,1),e=Ye(e,0,1),i=Ye(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Rc(o,r,t+1/3),this.g=Rc(o,r,t),this.b=Rc(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Bn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){const i=Rm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return ne.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Ye(Qe.r*255,0,255))*65536+Math.round(Ye(Qe.g*255,0,255))*256+Math.round(Ye(Qe.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Qe.copy(this),e);const i=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Bn){ne.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,i=Qe.g,s=Qe.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(Oa);const i=Jo(cs.h,Oa.h,e),s=Jo(cs.s,Oa.s,e),r=Jo(cs.l,Oa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new Qt;Qt.NAMES=Rm;let p0=0;class Co extends xr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=wo(),this.name="",this.blending=Qr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=wu,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Au&&(i.blendSrc=this.blendSrc),this.blendDst!==wu&&(i.blendDst=this.blendDst),this.blendEquation!==Ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gf extends Co{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new I,Ba=new Lt;class yn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ah,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Wr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ah&&(t.usage=this.usage),t}}class Cm extends yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Pm extends yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ye extends yn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let m0=0;const Dn=new ee,Cc=new $e,Lr=new I,bn=new cn,Oo=new cn,ze=new I;class nn extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tm(t)?Pm:Cm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(bn.min,Oo.min),bn.expandByPoint(ze),ze.addVectors(bn.max,Oo.max),bn.expandByPoint(ze)):(bn.expandByPoint(Oo.min),bn.expandByPoint(Oo.max))}bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(t,c),ze.add(Lr)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new I,l[A]=new I;const c=new I,u=new I,h=new I,f=new Lt,d=new Lt,_=new Lt,v=new I,m=new I;function p(A,S,M){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const R=1/(d.x*_.y-_.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(R),a[A].add(v),a[S].add(v),a[M].add(v),l[A].add(m),l[S].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let A=0,S=x.length;A<S;++A){const M=x[A],R=M.start,P=M.count;for(let L=R,U=R+P;L<U;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new I,g=new I,T=new I,b=new I;function E(A){T.fromBufferAttribute(s,A),b.copy(T);const S=a[A];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),g.crossVectors(b,S);const R=g.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,R)}for(let A=0,S=x.length;A<S;++A){const M=x[A],R=M.start,P=M.count;for(let L=R,U=R+P;L<U;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new yn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wh=new ee,Fs=new Ro,za=new sc,Xh=new I,ka=new I,Ha=new I,Va=new I,Pc=new I,Ga=new I,qh=new I,Wa=new I;class Ce extends $e{constructor(t=new nn,e=new Gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Pc.fromBufferAttribute(h,t),o?Ga.addScaledVector(Pc,u):Ga.addScaledVector(Pc.sub(e),u))}e.add(Ga)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(za.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(za,Xh)===null||Fs.origin.distanceToSquared(Xh)>(t.far-t.near)**2))&&(Wh.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(Wh),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let g=x,T=y;g<T;g+=3){const b=a.getX(g),E=a.getX(g+1),A=a.getX(g+2);s=Xa(this,p,t,i,c,u,h,b,E,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),g=a.getX(m+2);s=Xa(this,o,t,i,c,u,h,x,y,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=x,T=y;g<T;g+=3){const b=g,E=g+1,A=g+2;s=Xa(this,p,t,i,c,u,h,b,E,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const x=m,y=m+1,g=m+2;s=Xa(this,o,t,i,c,u,h,x,y,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _0(n,t,e,i,s,r,o,a){let l;if(t.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ti,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Wa);return c<e.near||c>e.far?null:{distance:c,point:Wa.clone(),object:n}}function Xa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ka),n.getVertexPosition(l,Ha),n.getVertexPosition(c,Va);const u=_0(n,t,e,i,ka,Ha,Va,qh);if(u){const h=new I;_e.getBarycoord(qh,ka,Ha,Va,h),s&&(u.uv=_e.getInterpolatedAttribute(s,a,l,c,h,new Lt)),r&&(u.uv1=_e.getInterpolatedAttribute(r,a,l,c,h,new Lt)),o&&(u.normal=_e.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};_e.getNormal(ka,Ha,Va,f.normal),u.face=f,u.barycoord=h}return u}class $i extends nn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(h,2));function _(v,m,p,x,y,g,T,b,E,A,S){const M=g/E,R=T/A,P=g/2,L=T/2,U=b/2,F=E+1,k=A+1;let Z=0,Y=0;const ot=new I;for(let ht=0;ht<k;ht++){const yt=ht*R-L;for(let zt=0;zt<F;zt++){const te=zt*M-P;ot[v]=te*x,ot[m]=yt*y,ot[p]=U,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[m]=0,ot[p]=b>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(zt/E),h.push(1-ht/A),Z+=1}}for(let ht=0;ht<A;ht++)for(let yt=0;yt<E;yt++){const zt=f+yt+F*ht,te=f+yt+F*(ht+1),J=f+(yt+1)+F*(ht+1),st=f+(yt+1)+F*ht;l.push(zt,te,st),l.push(te,J,st),Y+=6}a.addGroup(d,Y,S),d+=Y,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Eo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function on(n){const t={};for(let e=0;e<n.length;e++){const i=Eo(n[e]);for(const s in i)t[s]=i[s]}return t}function g0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const v0={clone:Eo,merge:on};var x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ds extends Co{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=g0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Lm extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new I,Yh=new Lt,$h=new Lt;class zn extends Lm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,Yh,$h),e.subVectors($h,Yh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(eo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ir=-90,Ur=1;class M0 extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zn(Ir,Ur,t,e);s.layers=this.layers,this.add(s);const r=new zn(Ir,Ur,t,e);r.layers=this.layers,this.add(r);const o=new zn(Ir,Ur,t,e);o.layers=this.layers,this.add(o);const a=new zn(Ir,Ur,t,e);a.layers=this.layers,this.add(a);const l=new zn(Ir,Ur,t,e);l.layers=this.layers,this.add(l);const c=new zn(Ir,Ur,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Im extends xn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:xo,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class S0 extends _r{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Im(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $i(5,5,5),r=new Ds({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Rs});r.uniforms.tEquirect.value=e;const o=new Ce(s,r),a=e.minFilter;return e.minFilter===er&&(e.minFilter=Mi),new M0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Dc=new I,E0=new I,T0=new Ht;class ni{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Dc.subVectors(i,e).cross(E0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Dc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||T0.getNormalMatrix(t),s=this.coplanarPoint(Dc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new sc,qa=new I;class Wf{constructor(t=new ni,e=new ni,i=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],_=s[9],v=s[10],m=s[11],p=s[12],x=s[13],y=s[14],g=s[15];if(i[0].setComponents(l-r,f-c,m-d,g-p).normalize(),i[1].setComponents(l+r,f+c,m+d,g+p).normalize(),i[2].setComponents(l+o,f+u,m+_,g+x).normalize(),i[3].setComponents(l-o,f-u,m-_,g-x).normalize(),i[4].setComponents(l-a,f-h,m-v,g-y).normalize(),e===Yi)i[5].setComponents(l+a,f+h,m+v,g+y).normalize();else if(e===Gl)i[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(qa.x=s.normal.x>0?t.max.x:t.min.x,qa.y=s.normal.y>0?t.max.y:t.min.y,qa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Um(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function b0(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],v=h[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class rc extends nn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const x=p*f-o;for(let y=0;y<c;y++){const g=y*h-r;_.push(g,-x,0),v.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,g=x+c*(p+1),T=x+1+c*(p+1),b=x+1+c*p;d.push(y,g,b),d.push(g,T,b)}this.setIndex(d),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.width,t.height,t.widthSegments,t.heightSegments)}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z0=`#ifdef USE_IRIDESCENCE
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
#endif`,k0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
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
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Tx=`struct PhysicalMaterial {
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
}`,bx=`
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uy=`float getShadowMask() {
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
}`,fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,py=`#ifdef USE_SKINNING
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
#endif`,my=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xy=`#ifdef USE_TRANSMISSION
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
#endif`,yy=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const by=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`#include <common>
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
}`,Ly=`#if DEPTH_PACKING == 3200
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
}`,Iy=`#define DISTANCE
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
}`,Uy=`#define DISTANCE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`uniform float scale;
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
}`,By=`uniform vec3 diffuse;
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
}`,zy=`#include <common>
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
}`,ky=`uniform vec3 diffuse;
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
}`,Hy=`#define LAMBERT
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
}`,Vy=`#define LAMBERT
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
}`,Gy=`#define MATCAP
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
}`,Wy=`#define MATCAP
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
}`,Xy=`#define NORMAL
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
}`,qy=`#define NORMAL
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
}`,Yy=`#define PHONG
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
}`,$y=`#define PHONG
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
}`,jy=`#define STANDARD
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
}`,Zy=`#define STANDARD
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
}`,Ky=`#define TOON
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
}`,Jy=`#define TOON
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
}`,Qy=`uniform float size;
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
}`,tM=`uniform vec3 diffuse;
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
}`,eM=`#include <common>
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
}`,nM=`uniform vec3 color;
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
}`,iM=`uniform float rotation;
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
}`,sM=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:A0,alphahash_pars_fragment:w0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:P0,alphatest_pars_fragment:D0,aomap_fragment:L0,aomap_pars_fragment:I0,batching_pars_vertex:U0,batching_vertex:N0,begin_vertex:F0,beginnormal_vertex:O0,bsdfs:B0,iridescence_fragment:z0,bumpmap_pars_fragment:k0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:$0,common:j0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:K0,displacementmap_pars_vertex:J0,displacementmap_vertex:Q0,emissivemap_fragment:tx,emissivemap_pars_fragment:ex,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:sx,envmap_common_pars_fragment:rx,envmap_pars_fragment:ox,envmap_pars_vertex:ax,envmap_physical_pars_fragment:vx,envmap_vertex:lx,fog_vertex:cx,fog_pars_vertex:ux,fog_fragment:fx,fog_pars_fragment:hx,gradientmap_pars_fragment:dx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:_x,lights_pars_begin:gx,lights_toon_fragment:xx,lights_toon_pars_fragment:yx,lights_phong_fragment:Mx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Tx,lights_fragment_begin:bx,lights_fragment_maps:Ax,lights_fragment_end:wx,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Dx,map_fragment:Lx,map_pars_fragment:Ix,map_particle_fragment:Ux,map_particle_pars_fragment:Nx,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Ox,morphinstance_vertex:Bx,morphcolor_vertex:zx,morphnormal_vertex:kx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Vx,normal_fragment_begin:Gx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:Jx,opaque_fragment:Qx,packing:ty,premultiplied_alpha_fragment:ey,project_vertex:ny,dithering_fragment:iy,dithering_pars_fragment:sy,roughnessmap_fragment:ry,roughnessmap_pars_fragment:oy,shadowmap_pars_fragment:ay,shadowmap_pars_vertex:ly,shadowmap_vertex:cy,shadowmask_pars_fragment:uy,skinbase_vertex:fy,skinning_pars_vertex:hy,skinning_vertex:dy,skinnormal_vertex:py,specularmap_fragment:my,specularmap_pars_fragment:_y,tonemapping_fragment:gy,tonemapping_pars_fragment:vy,transmission_fragment:xy,transmission_pars_fragment:yy,uv_pars_fragment:My,uv_pars_vertex:Sy,uv_vertex:Ey,worldpos_vertex:Ty,background_vert:by,background_frag:Ay,backgroundCube_vert:wy,backgroundCube_frag:Ry,cube_vert:Cy,cube_frag:Py,depth_vert:Dy,depth_frag:Ly,distanceRGBA_vert:Iy,distanceRGBA_frag:Uy,equirect_vert:Ny,equirect_frag:Fy,linedashed_vert:Oy,linedashed_frag:By,meshbasic_vert:zy,meshbasic_frag:ky,meshlambert_vert:Hy,meshlambert_frag:Vy,meshmatcap_vert:Gy,meshmatcap_frag:Wy,meshnormal_vert:Xy,meshnormal_frag:qy,meshphong_vert:Yy,meshphong_frag:$y,meshphysical_vert:jy,meshphysical_frag:Zy,meshtoon_vert:Ky,meshtoon_frag:Jy,points_vert:Qy,points_frag:tM,shadow_vert:eM,shadow_frag:nM,sprite_vert:iM,sprite_frag:sM},gt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},xi={basic:{uniforms:on([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:on([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:on([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:on([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:on([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:on([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:on([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:on([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:on([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:on([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:on([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:on([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:on([gt.lights,gt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};xi.physical={uniforms:on([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ya={r:0,b:0,g:0},Bs=new bi,rM=new ee;function oM(n,t,e,i,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function v(x){let y=!1;const g=_(x);g===null?p(a,l):g&&g.isColor&&(p(g,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const g=_(y);g&&(g.isCubeTexture||g.mapping===nc)?(u===void 0&&(u=new Ce(new $i(1,1,1),new Ds({name:"BackgroundCubeMaterial",uniforms:Eo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bs.copy(y.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rM.makeRotationFromEuler(Bs)),u.material.toneMapped=ne.getTransfer(g.colorSpace)!==fe,(h!==g||f!==g.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ce(new rc(2,2),new Ds({name:"BackgroundMaterial",uniforms:Eo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ne.getTransfer(g.colorSpace)!==fe,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Ya,Dm(n)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:v,addToRenderList:m}}function aM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,R,P,L,U){let F=!1;const k=h(L,P,R);r!==k&&(r=k,c(r.object)),F=d(M,L,P,U),F&&_(M,L,P,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,g(M,R,P,L),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,R,P){const L=P.wireframe===!0;let U=i[M.id];U===void 0&&(U={},i[M.id]=U);let F=U[R.id];F===void 0&&(F={},U[R.id]=F);let k=F[L];return k===void 0&&(k=f(l()),F[L]=k),k}function f(M){const R=[],P=[],L=[];for(let U=0;U<e;U++)R[U]=0,P[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,R,P,L){const U=r.attributes,F=R.attributes;let k=0;const Z=P.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const ht=U[Y];let yt=F[Y];if(yt===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function _(M,R,P,L){const U={},F=R.attributes;let k=0;const Z=P.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let ht=F[Y];ht===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),U[Y]=yt,k++}r.attributes=U,r.attributesNum=k,r.index=L}function v(){const M=r.newAttributes;for(let R=0,P=M.length;R<P;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const P=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;P[M]=1,L[M]===0&&(n.enableVertexAttribArray(M),L[M]=1),U[M]!==R&&(n.vertexAttribDivisor(M,R),U[M]=R)}function x(){const M=r.newAttributes,R=r.enabledAttributes;for(let P=0,L=R.length;P<L;P++)R[P]!==M[P]&&(n.disableVertexAttribArray(P),R[P]=0)}function y(M,R,P,L,U,F,k){k===!0?n.vertexAttribIPointer(M,R,P,U,F):n.vertexAttribPointer(M,R,P,L,U,F)}function g(M,R,P,L){v();const U=L.attributes,F=P.getAttributes(),k=R.defaultAttributeValues;for(const Z in F){const Y=F[Z];if(Y.location>=0){let ot=U[Z];if(ot===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const ht=ot.normalized,yt=ot.itemSize,zt=t.get(ot);if(zt===void 0)continue;const te=zt.buffer,J=zt.type,st=zt.bytesPerElement,St=J===n.INT||J===n.UNSIGNED_INT||ot.gpuType===Ff;if(ot.isInterleavedBufferAttribute){const _t=ot.data,It=_t.stride,Ot=ot.offset;if(_t.isInstancedInterleavedBuffer){for(let kt=0;kt<Y.locationSize;kt++)p(Y.location+kt,_t.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let kt=0;kt<Y.locationSize;kt++)m(Y.location+kt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let kt=0;kt<Y.locationSize;kt++)y(Y.location+kt,yt/Y.locationSize,J,ht,It*st,(Ot+yt/Y.locationSize*kt)*st,St)}else{if(ot.isInstancedBufferAttribute){for(let _t=0;_t<Y.locationSize;_t++)p(Y.location+_t,ot.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let _t=0;_t<Y.locationSize;_t++)m(Y.location+_t);n.bindBuffer(n.ARRAY_BUFFER,te);for(let _t=0;_t<Y.locationSize;_t++)y(Y.location+_t,yt/Y.locationSize,J,ht,yt*st,yt/Y.locationSize*_t*st,St)}}else if(k!==void 0){const ht=k[Z];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(Y.location,ht);break;case 3:n.vertexAttrib3fv(Y.location,ht);break;case 4:n.vertexAttrib4fv(Y.location,ht);break;default:n.vertexAttrib1fv(Y.location,ht)}}}}x()}function T(){A();for(const M in i){const R=i[M];for(const P in R){const L=R[P];for(const U in L)u(L[U].object),delete L[U];delete R[P]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const P in R){const L=R[P];for(const U in L)u(L[U].object),delete L[U];delete R[P]}delete i[M.id]}function E(M){for(const R in i){const P=i[R];if(P[M.id]===void 0)continue;const L=P[M.id];for(const U in L)u(L[U].object),delete L[U];delete P[M.id]}}function A(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function lM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==oi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ki&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==qi&&!A)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:T,maxSamples:b}}function uM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ni,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,y=x*4;let g=p.clippingState||null;l.value=g,g=u(_,f,y,d);for(let T=0;T!==y;++T)g[T]=e[T];p.clippingState=g,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,g=d;y!==v;++y,g+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function fM(n){let t=new WeakMap;function e(o,a){return a===Nu?o.mapping=xo:a===Fu&&(o.mapping=yo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nu||a===Fu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new S0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Nm extends Lm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $r=4,jh=[.125,.215,.35,.446,.526,.582],$s=20,Lc=new Nm,Zh=new Qt;let Ic=null,Uc=0,Nc=0,Fc=!1;const Xs=(1+Math.sqrt(5))/2,Nr=1/Xs,Kh=[new I(-Xs,Nr,0),new I(Xs,Nr,0),new I(-Nr,0,Xs),new I(Nr,0,Xs),new I(0,Xs,-Nr),new I(0,Xs,Nr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Jh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ic=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Uc,Nc),this._renderer.xr.enabled=Fc,t.scissorTest=!1,$a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xo||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ic=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:xa,format:oi,colorSpace:Ao,depthBuffer:!1},s=Qh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hM(r)),this._blurMaterial=dM(r,t,e)}return s}_compileMaterial(t){const e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,Lc)}_sceneToCubeUV(t,e,i,s){const a=new zn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zh),u.toneMapping=Cs,u.autoClear=!1;const d=new Gf({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Ce(new $i,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Zh),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;$a(s,x*y,p>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===xo||t.mapping===yo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;$a(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Lc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kh[(s-r-1)%Kh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ce(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$s-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):$s;m>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$s}`);const p=[];let x=0;for(let E=0;E<$s;++E){const A=E/v,S=Math.exp(-A*A/2);p.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const g=this._sizeLods[s],T=3*g*(s>y-$r?s-y+$r:0),b=4*(this._cubeSize-g);$a(e,T,b,3*g,2*g),l.setRenderTarget(e),l.render(h,Lc)}}function hM(n){const t=[],e=[],i=[];let s=n;const r=n-$r+1+jh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-$r?l=jh[o-n+$r-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,v=3,m=2,p=1,x=new Float32Array(v*_*d),y=new Float32Array(m*_*d),g=new Float32Array(p*_*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,A=b>2?0:-1,S=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];x.set(S,v*_*b),y.set(f,m*_*b);const M=[b,b,b,b,b,b];g.set(M,p*_*b)}const T=new nn;T.setAttribute("position",new yn(x,v)),T.setAttribute("uv",new yn(y,m)),T.setAttribute("faceIndex",new yn(g,p)),t.push(T),s>$r&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Qh(n,t,e){const i=new _r(n,t,e);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function dM(n,t,e){const i=new Float32Array($s),s=new I(0,1,0);return new Ds({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function td(){return new Ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function ed(){return new Ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Xf(){return`

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
	`}function pM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nu||l===Fu,u=l===xo||l===yo;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Jh(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Jh(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function mM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&$o("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _M(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const v=d[_];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let y=0,g=x.length;y<g;y+=3){const T=x[y+0],b=x[y+1],E=x[y+2];f.push(T,b,b,E,E,T)}}else if(_!==void 0){const x=_.array;v=_.version;for(let y=0,g=x.length/3-1;y<g;y+=3){const T=y+0,b=y+1,E=y+2;f.push(T,b,b,E,E,T)}}else return;const m=new(Tm(f)?Pm:Cm)(f,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function gM(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function h(f,d,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,_);let p=0;for(let x=0;x<_;x++)p+=d[x]*v[x];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xM(n,t,e){const i=new WeakMap,s=new ae;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let g=0;_===!0&&(g=1),v===!0&&(g=2),m===!0&&(g=3);let T=a.attributes.position.count*g,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const E=new Float32Array(T*b*4*h),A=new Am(E,T,b,h);A.type=qi,A.needsUpdate=!0;const S=g*4;for(let R=0;R<h;R++){const P=p[R],L=x[R],U=y[R],F=T*b*4*R;for(let k=0;k<P.count;k++){const Z=k*S;_===!0&&(s.fromBufferAttribute(P,k),E[F+Z+0]=s.x,E[F+Z+1]=s.y,E[F+Z+2]=s.z,E[F+Z+3]=0),v===!0&&(s.fromBufferAttribute(L,k),E[F+Z+4]=s.x,E[F+Z+5]=s.y,E[F+Z+6]=s.z,E[F+Z+7]=0),m===!0&&(s.fromBufferAttribute(U,k),E[F+Z+8]=s.x,E[F+Z+9]=s.y,E[F+Z+10]=s.z,E[F+Z+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Lt(T,b)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function yM(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Fm extends xn{constructor(t,e,i,s,r,o,a,l,c,u=to){if(u!==to&&u!==So)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===to&&(i=mr),i===void 0&&u===So&&(i=Mo),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Om=new xn,nd=new Fm(1,1),Bm=new Am,zm=new o0,km=new Im,id=[],sd=[],rd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function Po(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=id[s];if(r===void 0&&(r=new Float32Array(s),id[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function oc(n,t){let e=sd[t];e===void 0&&(e=new Int32Array(t),sd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function MM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function SM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function EM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function TM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function bM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;ad.set(i),n.uniformMatrix2fv(this.addr,!1,ad),Be(e,i)}}function AM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;od.set(i),n.uniformMatrix3fv(this.addr,!1,od),Be(e,i)}}function wM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;rd.set(i),n.uniformMatrix4fv(this.addr,!1,rd),Be(e,i)}}function RM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function CM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function PM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function DM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function LM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function IM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function UM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function NM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function FM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nd.compareFunction=Em,r=nd):r=Om,e.setTexture2D(t||r,s)}function OM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||zm,s)}function BM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||km,s)}function zM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Bm,s)}function kM(n){switch(n){case 5126:return MM;case 35664:return SM;case 35665:return EM;case 35666:return TM;case 35674:return bM;case 35675:return AM;case 35676:return wM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return PM;case 35669:case 35673:return DM;case 5125:return LM;case 36294:return IM;case 36295:return UM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return zM}}function HM(n,t){n.uniform1fv(this.addr,t)}function VM(n,t){const e=Po(t,this.size,2);n.uniform2fv(this.addr,e)}function GM(n,t){const e=Po(t,this.size,3);n.uniform3fv(this.addr,e)}function WM(n,t){const e=Po(t,this.size,4);n.uniform4fv(this.addr,e)}function XM(n,t){const e=Po(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qM(n,t){const e=Po(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function YM(n,t){const e=Po(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $M(n,t){n.uniform1iv(this.addr,t)}function jM(n,t){n.uniform2iv(this.addr,t)}function ZM(n,t){n.uniform3iv(this.addr,t)}function KM(n,t){n.uniform4iv(this.addr,t)}function JM(n,t){n.uniform1uiv(this.addr,t)}function QM(n,t){n.uniform2uiv(this.addr,t)}function tS(n,t){n.uniform3uiv(this.addr,t)}function eS(n,t){n.uniform4uiv(this.addr,t)}function nS(n,t,e){const i=this.cache,s=t.length,r=oc(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Om,r[o])}function iS(n,t,e){const i=this.cache,s=t.length,r=oc(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zm,r[o])}function sS(n,t,e){const i=this.cache,s=t.length,r=oc(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||km,r[o])}function rS(n,t,e){const i=this.cache,s=t.length,r=oc(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bm,r[o])}function oS(n){switch(n){case 5126:return HM;case 35664:return VM;case 35665:return GM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return $M;case 35667:case 35671:return jM;case 35668:case 35672:return ZM;case 35669:case 35673:return KM;case 5125:return JM;case 36294:return QM;case 36295:return tS;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return rS}}class aS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kM(e.type)}}class lS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=oS(e.type)}}class cS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Oc=/(\w+)(\])?(\[|\.)?/g;function ld(n,t){n.seq.push(t),n.map[t.id]=t}function uS(n,t,e){const i=n.name,s=i.length;for(Oc.lastIndex=0;;){const r=Oc.exec(i),o=Oc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ld(e,c===void 0?new aS(a,n,t):new lS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new cS(a),ld(e,h)),e=h}}}class Il{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);uS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function cd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const fS=37297;let hS=0;function dS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const ud=new Ht;function pS(n){ne._getMatrix(ud,ne.workingColorSpace,n);const t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case ic:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function fd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dS(n.getShaderSource(t),o)}else return s}function mS(n,t){const e=pS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _S(n,t){let e;switch(t){case vv:e="Linear";break;case xv:e="Reinhard";break;case yv:e="Cineon";break;case Mv:e="ACESFilmic";break;case Ev:e="AgX";break;case Tv:e="Neutral";break;case Sv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ja=new I;function gS(){ne.getLuminanceCoefficients(ja);const n=ja.x.toFixed(4),t=ja.y.toFixed(4),e=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function xS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function jo(n){return n!==""}function hd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MS=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(n){return n.replace(MS,ES)}const SS=new Map;function ES(n,t){let e=Gt[t];if(e===void 0){const i=SS.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return hf(e)}const TS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(n){return n.replace(TS,bS)}function bS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function AS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===cm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function wS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xo:case yo:t="ENVMAP_TYPE_CUBE";break;case nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yo:t="ENVMAP_MODE_REFRACTION";break}return t}function CS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case um:t="ENVMAP_BLENDING_MULTIPLY";break;case _v:t="ENVMAP_BLENDING_MIX";break;case gv:t="ENVMAP_BLENDING_ADD";break}return t}function PS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function DS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=AS(e),c=wS(e),u=RS(e),h=CS(e),f=PS(e),d=vS(e),_=xS(r),v=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(jo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(jo).join(`
`),p.length>0&&(p+=`
`)):(m=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),p=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cs?"#define TONE_MAPPING":"",e.toneMapping!==Cs?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Cs?_S("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,mS("linearToOutputTexel",e.outputColorSpace),gS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jo).join(`
`)),o=hf(o),o=hd(o,e),o=dd(o,e),a=hf(a),a=hd(a,e),a=dd(a,e),o=pd(o),a=pd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,g=x+p+a,T=cd(s,s.VERTEX_SHADER,y),b=cd(s,s.FRAGMENT_SHADER,g);s.attachShader(v,T),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(R){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(v).trim(),L=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(b).trim();let F=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,T,b);else{const Z=fd(s,T,"vertex"),Y=fd(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+Z+`
`+Y)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||U==="")&&(k=!1);k&&(R.diagnostics={runnable:F,programLog:P,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(T),s.deleteShader(b),A=new Il(s,v),S=yS(s,v)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,fS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hS++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}let LS=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new US(t),e.set(t,i)),i}}class US{constructor(t){this.id=LS++,this.code=t,this.usedTimes=0}}function NS(n,t,e,i,s,r,o){const a=new wm,l=new IS,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,P,L){const U=P.fog,F=L.geometry,k=S.isMeshStandardMaterial?P.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),Y=Z&&Z.mapping===nc?Z.image.height:null,ot=_[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ht=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,yt=ht!==void 0?ht.length:0;let zt=0;F.morphAttributes.position!==void 0&&(zt=1),F.morphAttributes.normal!==void 0&&(zt=2),F.morphAttributes.color!==void 0&&(zt=3);let te,J,st,St;if(ot){const Yt=xi[ot];te=Yt.vertexShader,J=Yt.fragmentShader}else te=S.vertexShader,J=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),St=l.getFragmentShaderID(S);const _t=n.getRenderTarget(),It=n.state.buffers.depth.getReversed(),Ot=L.isInstancedMesh===!0,kt=L.isBatchedMesh===!0,de=!!S.map,Wt=!!S.matcap,Se=!!Z,z=!!S.aoMap,fn=!!S.lightMap,Zt=!!S.bumpMap,Kt=!!S.normalMap,Ut=!!S.displacementMap,ce=!!S.emissiveMap,Pt=!!S.metalnessMap,D=!!S.roughnessMap,w=S.anisotropy>0,H=S.clearcoat>0,et=S.dispersion>0,nt=S.iridescence>0,tt=S.sheen>0,V=S.transmission>0,$=w&&!!S.anisotropyMap,Q=H&&!!S.clearcoatMap,rt=H&&!!S.clearcoatNormalMap,X=H&&!!S.clearcoatRoughnessMap,it=nt&&!!S.iridescenceMap,at=nt&&!!S.iridescenceThicknessMap,ft=tt&&!!S.sheenColorMap,ut=tt&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,At=!!S.specularColorMap,qt=!!S.specularIntensityMap,N=V&&!!S.transmissionMap,lt=V&&!!S.thicknessMap,q=!!S.gradientMap,K=!!S.alphaMap,pt=S.alphaTest>0,dt=!!S.alphaHash,Rt=!!S.extensions;let ue=Cs;S.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ue=n.toneMapping);const ge={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:J,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:St,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:kt,batchingColor:kt&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ao,alphaToCoverage:!!S.alphaToCoverage,map:de,matcap:Wt,envMap:Se,envMapMode:Se&&Z.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:fn,bumpMap:Zt,normalMap:Kt,displacementMap:f&&Ut,emissiveMap:ce,normalMapObjectSpace:Kt&&S.normalMapType===Rv,normalMapTangentSpace:Kt&&S.normalMapType===Sm,metalnessMap:Pt,roughnessMap:D,anisotropy:w,anisotropyMap:$,clearcoat:H,clearcoatMap:Q,clearcoatNormalMap:rt,clearcoatRoughnessMap:X,dispersion:et,iridescence:nt,iridescenceMap:it,iridescenceThicknessMap:at,sheen:tt,sheenColorMap:ft,sheenRoughnessMap:ut,specularMap:Dt,specularColorMap:At,specularIntensityMap:qt,transmission:V,transmissionMap:N,thicknessMap:lt,gradientMap:q,opaque:S.transparent===!1&&S.blending===Qr&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:pt,alphaHash:dt,combine:S.combine,mapUv:de&&v(S.map.channel),aoMapUv:z&&v(S.aoMap.channel),lightMapUv:fn&&v(S.lightMap.channel),bumpMapUv:Zt&&v(S.bumpMap.channel),normalMapUv:Kt&&v(S.normalMap.channel),displacementMapUv:Ut&&v(S.displacementMap.channel),emissiveMapUv:ce&&v(S.emissiveMap.channel),metalnessMapUv:Pt&&v(S.metalnessMap.channel),roughnessMapUv:D&&v(S.roughnessMap.channel),anisotropyMapUv:$&&v(S.anisotropyMap.channel),clearcoatMapUv:Q&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:rt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:at&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(S.sheenRoughnessMap.channel),specularMapUv:Dt&&v(S.specularMap.channel),specularColorMapUv:At&&v(S.specularColorMap.channel),specularIntensityMapUv:qt&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:lt&&v(S.thicknessMap.channel),alphaMapUv:K&&v(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Kt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(de||K),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:It,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:de&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&ne.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===kn,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Rt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&S.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function g(S){const M=_[S.type];let R;if(M){const P=xi[M];R=v0.clone(P.uniforms)}else R=S.uniforms;return R}function T(S,M){let R;for(let P=0,L=u.length;P<L;P++){const U=u[P];if(U.cacheKey===M){R=U,++R.usedTimes;break}}return R===void 0&&(R=new DS(n,M,S,r),u.push(R)),R}function b(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:g,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:A}}function FS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function OS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,_,v,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function a(h,f,d,_,v,m){const p=o(h,f,d,_,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,_,v,m){const p=o(h,f,d,_,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||OS),i.length>1&&i.sort(f||_d),s.length>1&&s.sort(f||_d)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function BS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new gd,n.set(i,[o])):s>=r.length?(o=new gd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function zS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Qt};break;case"SpotLight":e={position:new I,direction:new I,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function kS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let HS=0;function VS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function GS(n){const t=new zS,e=kS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new ee,o=new ee;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,_=0,v=0,m=0,p=0,x=0,y=0,g=0,T=0,b=0,E=0;c.sort(VS);for(let S=0,M=c.length;S<M;S++){const R=c[S],P=R.color,L=R.intensity,U=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=P.r*L,h+=P.g*L,f+=P.b*L;else if(R.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],L);E++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,Y=e.get(R);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=R.shadow.matrix,x++}i.directional[d]=k,d++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(P).multiplyScalar(L),k.distance=U,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[v]=k;const Z=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,Z.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[v]=Z.matrix,R.castShadow){const Y=e.get(R);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=F,g++}v++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(P).multiplyScalar(L),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=k,m++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const Z=R.shadow,Y=e.get(R);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=F,i.pointShadowMatrix[_]=R.shadow.matrix,y++}i.point[_]=k,_++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(L),k.groundColor.copy(R.groundColor).multiplyScalar(L),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==d||A.pointLength!==_||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==g||A.numSpotMaps!==T||A.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=g+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=E,A.directionalLength=d,A.pointLength=_,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=g,A.numSpotMaps=T,A.numLightProbes=E,i.version=HS++)}function l(c,u){let h=0,f=0,d=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const g=i.directional[h];g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(y.isSpotLight){const g=i.spot[d];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),g.halfWidth.set(y.width*.5,0,0),g.halfHeight.set(0,y.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const g=i.point[f];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const g=i.hemi[v];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function vd(n){const t=new GS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function WS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new vd(n),t.set(s,[a])):r>=o.length?(a=new vd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class XS extends Co{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qS extends Co{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const YS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
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
}`;function jS(n,t,e){let i=new Wf;const s=new Lt,r=new Lt,o=new ae,a=new XS({depthPacking:wv}),l=new qS,c={},u=e.maxTextureSize,h={[Ti]:ln,[ln]:Ti,[kn]:kn},f=new Ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:YS,fragmentShader:$S}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ce(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lm;let p=this.type;this.render=function(b,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Rs),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=p!==zi&&this.type===zi,U=p===zi&&this.type!==zi;for(let F=0,k=b.length;F<k;F++){const Z=b[F],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ot=Y.getFrameExtents();if(s.multiply(ot),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,Y.mapSize.y=r.y)),Y.map===null||L===!0||U===!0){const yt=this.type!==zi?{minFilter:ai,magFilter:ai}:{};Y.map!==null&&Y.map.dispose(),Y.map=new _r(s.x,s.y,yt),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const ht=Y.getViewportCount();for(let yt=0;yt<ht;yt++){const zt=Y.getViewport(yt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),P.viewport(o),Y.updateMatrices(Z,yt),i=Y.getFrustum(),g(E,A,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===zi&&x(Y,A),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,R)};function x(b,E){const A=t.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _r(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,A,f,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,A,d,v,null)}function y(b,E,A,S){let M=null;const R=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)M=R;else if(M=A.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const P=M.uuid,L=E.uuid;let U=c[P];U===void 0&&(U={},c[P]=U);let F=U[L];F===void 0&&(F=M.clone(),U[L]=F,E.addEventListener("dispose",T)),M=F}if(M.visible=E.visible,M.wireframe=E.wireframe,S===zi?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=n.properties.get(M);P.light=A}return M}function g(b,E,A,S,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===zi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const L=t.update(b),U=b.material;if(Array.isArray(U)){const F=L.groups;for(let k=0,Z=F.length;k<Z;k++){const Y=F[k],ot=U[Y.materialIndex];if(ot&&ot.visible){const ht=y(b,ot,S,M);b.onBeforeShadow(n,b,E,A,L,ht,Y),n.renderBufferDirect(A,null,L,ht,b,Y),b.onAfterShadow(n,b,E,A,L,ht,Y)}}}else if(U.visible){const F=y(b,U,S,M);b.onBeforeShadow(n,b,E,A,L,F,null),n.renderBufferDirect(A,null,L,F,b,null),b.onAfterShadow(n,b,E,A,L,F,null)}}const P=b.children;for(let L=0,U=P.length;L<U;L++)g(P[L],E,A,S,M)}function T(b){b.target.removeEventListener("dispose",T);for(const A in c){const S=c[A],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const ZS={[Ru]:Cu,[Pu]:Iu,[Du]:Uu,[vo]:Lu,[Cu]:Ru,[Iu]:Pu,[Uu]:Du,[Lu]:vo};function KS(n,t){function e(){let N=!1;const lt=new ae;let q=null;const K=new ae(0,0,0,0);return{setMask:function(pt){q!==pt&&!N&&(n.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){N=pt},setClear:function(pt,dt,Rt,ue,ge){ge===!0&&(pt*=ue,dt*=ue,Rt*=ue),lt.set(pt,dt,Rt,ue),K.equals(lt)===!1&&(n.clearColor(pt,dt,Rt,ue),K.copy(lt))},reset:function(){N=!1,q=null,K.set(-1,0,0,0)}}}function i(){let N=!1,lt=!1,q=null,K=null,pt=null;return{setReversed:function(dt){if(lt!==dt){const Rt=t.get("EXT_clip_control");lt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);const ue=pt;pt=null,this.setClear(ue)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?_t(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(dt){q!==dt&&!N&&(n.depthMask(dt),q=dt)},setFunc:function(dt){if(lt&&(dt=ZS[dt]),K!==dt){switch(dt){case Ru:n.depthFunc(n.NEVER);break;case Cu:n.depthFunc(n.ALWAYS);break;case Pu:n.depthFunc(n.LESS);break;case vo:n.depthFunc(n.LEQUAL);break;case Du:n.depthFunc(n.EQUAL);break;case Lu:n.depthFunc(n.GEQUAL);break;case Iu:n.depthFunc(n.GREATER);break;case Uu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=dt}},setLocked:function(dt){N=dt},setClear:function(dt){pt!==dt&&(lt&&(dt=1-dt),n.clearDepth(dt),pt=dt)},reset:function(){N=!1,q=null,K=null,pt=null,lt=!1}}}function s(){let N=!1,lt=null,q=null,K=null,pt=null,dt=null,Rt=null,ue=null,ge=null;return{setTest:function(Yt){N||(Yt?_t(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(Yt){lt!==Yt&&!N&&(n.stencilMask(Yt),lt=Yt)},setFunc:function(Yt,Mn,Sn){(q!==Yt||K!==Mn||pt!==Sn)&&(n.stencilFunc(Yt,Mn,Sn),q=Yt,K=Mn,pt=Sn)},setOp:function(Yt,Mn,Sn){(dt!==Yt||Rt!==Mn||ue!==Sn)&&(n.stencilOp(Yt,Mn,Sn),dt=Yt,Rt=Mn,ue=Sn)},setLocked:function(Yt){N=Yt},setClear:function(Yt){ge!==Yt&&(n.clearStencil(Yt),ge=Yt)},reset:function(){N=!1,lt=null,q=null,K=null,pt=null,dt=null,Rt=null,ue=null,ge=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,v=!1,m=null,p=null,x=null,y=null,g=null,T=null,b=null,E=new Qt(0,0,0),A=0,S=!1,M=null,R=null,P=null,L=null,U=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=Z>=2);let ot=null,ht={};const yt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),te=new ae().fromArray(yt),J=new ae().fromArray(zt);function st(N,lt,q,K){const pt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(N,dt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<q;Rt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(lt+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return dt}const St={};St[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(n.DEPTH_TEST),o.setFunc(vo),Zt(!1),Kt(Mh),_t(n.CULL_FACE),z(Rs);function _t(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function It(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ot(N,lt){return h[N]!==lt?(n.bindFramebuffer(N,lt),h[N]=lt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=lt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function kt(N,lt){let q=d,K=!1;if(N){q=f.get(lt),q===void 0&&(q=[],f.set(lt,q));const pt=N.textures;if(q.length!==pt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Rt=pt.length;dt<Rt;dt++)q[dt]=n.COLOR_ATTACHMENT0+dt;q.length=pt.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function de(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const Wt={[Ys]:n.FUNC_ADD,[Qg]:n.FUNC_SUBTRACT,[tv]:n.FUNC_REVERSE_SUBTRACT};Wt[ev]=n.MIN,Wt[nv]=n.MAX;const Se={[iv]:n.ZERO,[sv]:n.ONE,[rv]:n.SRC_COLOR,[Au]:n.SRC_ALPHA,[fv]:n.SRC_ALPHA_SATURATE,[cv]:n.DST_COLOR,[av]:n.DST_ALPHA,[ov]:n.ONE_MINUS_SRC_COLOR,[wu]:n.ONE_MINUS_SRC_ALPHA,[uv]:n.ONE_MINUS_DST_COLOR,[lv]:n.ONE_MINUS_DST_ALPHA,[hv]:n.CONSTANT_COLOR,[dv]:n.ONE_MINUS_CONSTANT_COLOR,[pv]:n.CONSTANT_ALPHA,[mv]:n.ONE_MINUS_CONSTANT_ALPHA};function z(N,lt,q,K,pt,dt,Rt,ue,ge,Yt){if(N===Rs){v===!0&&(It(n.BLEND),v=!1);return}if(v===!1&&(_t(n.BLEND),v=!0),N!==Jg){if(N!==m||Yt!==S){if((p!==Ys||g!==Ys)&&(n.blendEquation(n.FUNC_ADD),p=Ys,g=Ys),Yt)switch(N){case Qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFunc(n.ONE,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,y=null,T=null,b=null,E.set(0,0,0),A=0,m=N,S=Yt}return}pt=pt||lt,dt=dt||q,Rt=Rt||K,(lt!==p||pt!==g)&&(n.blendEquationSeparate(Wt[lt],Wt[pt]),p=lt,g=pt),(q!==x||K!==y||dt!==T||Rt!==b)&&(n.blendFuncSeparate(Se[q],Se[K],Se[dt],Se[Rt]),x=q,y=K,T=dt,b=Rt),(ue.equals(E)===!1||ge!==A)&&(n.blendColor(ue.r,ue.g,ue.b,ge),E.copy(ue),A=ge),m=N,S=!1}function fn(N,lt){N.side===kn?It(n.CULL_FACE):_t(n.CULL_FACE);let q=N.side===ln;lt&&(q=!q),Zt(q),N.blending===Qr&&N.transparent===!1?z(Rs):z(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const K=N.stencilWrite;a.setTest(K),K&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function Kt(N){N!==Zg?(_t(n.CULL_FACE),N!==R&&(N===Mh?n.cullFace(n.BACK):N===Kg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),R=N}function Ut(N){N!==P&&(k&&n.lineWidth(N),P=N)}function ce(N,lt,q){N?(_t(n.POLYGON_OFFSET_FILL),(L!==lt||U!==q)&&(n.polygonOffset(lt,q),L=lt,U=q)):It(n.POLYGON_OFFSET_FILL)}function Pt(N){N?_t(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function D(N){N===void 0&&(N=n.TEXTURE0+F-1),ot!==N&&(n.activeTexture(N),ot=N)}function w(N,lt,q){q===void 0&&(ot===null?q=n.TEXTURE0+F-1:q=ot);let K=ht[q];K===void 0&&(K={type:void 0,texture:void 0},ht[q]=K),(K.type!==N||K.texture!==lt)&&(ot!==q&&(n.activeTexture(q),ot=q),n.bindTexture(N,lt||St[N]),K.type=N,K.texture=lt)}function H(){const N=ht[ot];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(N){te.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),te.copy(N))}function ut(N){J.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function Dt(N,lt){let q=c.get(lt);q===void 0&&(q=new WeakMap,c.set(lt,q));let K=q.get(N);K===void 0&&(K=n.getUniformBlockIndex(lt,N.name),q.set(N,K))}function At(N,lt){const K=c.get(lt).get(N);l.get(lt)!==K&&(n.uniformBlockBinding(lt,K,N.__bindingPointIndex),l.set(lt,K))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ot=null,ht={},h={},f=new WeakMap,d=[],_=null,v=!1,m=null,p=null,x=null,y=null,g=null,T=null,b=null,E=new Qt(0,0,0),A=0,S=!1,M=null,R=null,P=null,L=null,U=null,te.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:It,bindFramebuffer:Ot,drawBuffers:kt,useProgram:de,setBlending:z,setMaterial:fn,setFlipSided:Zt,setCullFace:Kt,setLineWidth:Ut,setPolygonOffset:ce,setScissorTest:Pt,activeTexture:D,bindTexture:w,unbindTexture:H,compressedTexImage2D:et,compressedTexImage3D:nt,texImage2D:it,texImage3D:at,updateUBOMapping:Dt,uniformBlockBinding:At,texStorage2D:rt,texStorage3D:X,texSubImage2D:tt,texSubImage3D:V,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:ft,viewport:ut,reset:qt}}function xd(n,t,e,i){const s=JS(i);switch(e){case mm:return n*t;case gm:return n*t;case vm:return n*t*2;case xm:return n*t/s.components*s.byteLength;case zf:return n*t/s.components*s.byteLength;case ym:return n*t*2/s.components*s.byteLength;case kf:return n*t*2/s.components*s.byteLength;case _m:return n*t*3/s.components*s.byteLength;case oi:return n*t*4/s.components*s.byteLength;case Hf:return n*t*4/s.components*s.byteLength;case wl:case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ku:case Vu:return Math.max(n,16)*Math.max(t,8)/4;case zu:case Hu:return Math.max(n,8)*Math.max(t,8)/2;case Gu:case Wu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $u:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ju:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ju:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tf:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ef:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nf:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sf:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case rf:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case of:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Dl:case af:case lf:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mm:case cf:return Math.ceil(n/4)*Math.ceil(t/4)*8;case uf:case ff:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function JS(n){switch(n){case Ki:case hm:return{byteLength:1,components:1};case oa:case dm:case xa:return{byteLength:2,components:1};case Of:case Bf:return{byteLength:2,components:4};case mr:case Ff:case qi:return{byteLength:4,components:1};case pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function QS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,w){return d?new OffscreenCanvas(D,w):Wl("canvas")}function v(D,w,H){let et=1;const nt=Pt(D);if((nt.width>H||nt.height>H)&&(et=H/Math.max(nt.width,nt.height)),et<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const tt=Math.floor(et*nt.width),V=Math.floor(et*nt.height);h===void 0&&(h=_(tt,V));const $=w?_(tt,V):h;return $.width=tt,$.height=V,$.getContext("2d").drawImage(D,0,0,tt,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+tt+"x"+V+")."),$}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,w,H,et,nt=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let tt=w;if(w===n.RED&&(H===n.FLOAT&&(tt=n.R32F),H===n.HALF_FLOAT&&(tt=n.R16F),H===n.UNSIGNED_BYTE&&(tt=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(tt=n.R8UI),H===n.UNSIGNED_SHORT&&(tt=n.R16UI),H===n.UNSIGNED_INT&&(tt=n.R32UI),H===n.BYTE&&(tt=n.R8I),H===n.SHORT&&(tt=n.R16I),H===n.INT&&(tt=n.R32I)),w===n.RG&&(H===n.FLOAT&&(tt=n.RG32F),H===n.HALF_FLOAT&&(tt=n.RG16F),H===n.UNSIGNED_BYTE&&(tt=n.RG8)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(tt=n.RG8UI),H===n.UNSIGNED_SHORT&&(tt=n.RG16UI),H===n.UNSIGNED_INT&&(tt=n.RG32UI),H===n.BYTE&&(tt=n.RG8I),H===n.SHORT&&(tt=n.RG16I),H===n.INT&&(tt=n.RG32I)),w===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),H===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),H===n.UNSIGNED_INT&&(tt=n.RGB32UI),H===n.BYTE&&(tt=n.RGB8I),H===n.SHORT&&(tt=n.RGB16I),H===n.INT&&(tt=n.RGB32I)),w===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),H===n.UNSIGNED_INT&&(tt=n.RGBA32UI),H===n.BYTE&&(tt=n.RGBA8I),H===n.SHORT&&(tt=n.RGBA16I),H===n.INT&&(tt=n.RGBA32I)),w===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),w===n.RGBA){const V=nt?ic:ne.getTransfer(et);H===n.FLOAT&&(tt=n.RGBA32F),H===n.HALF_FLOAT&&(tt=n.RGBA16F),H===n.UNSIGNED_BYTE&&(tt=V===fe?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function g(D,w){let H;return D?w===null||w===mr||w===Mo?H=n.DEPTH24_STENCIL8:w===qi?H=n.DEPTH32F_STENCIL8:w===oa&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===mr||w===Mo?H=n.DEPTH_COMPONENT24:w===qi?H=n.DEPTH_COMPONENT32F:w===oa&&(H=n.DEPTH_COMPONENT16),H}function T(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==ai&&D.minFilter!==Mi?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function b(D){const w=D.target;w.removeEventListener("dispose",b),A(w),w.isVideoTexture&&u.delete(w)}function E(D){const w=D.target;w.removeEventListener("dispose",E),M(w)}function A(D){const w=i.get(D);if(w.__webglInit===void 0)return;const H=D.source,et=f.get(H);if(et){const nt=et[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(D),Object.keys(et).length===0&&f.delete(H)}i.remove(D)}function S(D){const w=i.get(D);n.deleteTexture(w.__webglTexture);const H=D.source,et=f.get(H);delete et[w.__cacheKey],o.memory.textures--}function M(D){const w=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let nt=0;nt<w.__webglFramebuffer[et].length;nt++)n.deleteFramebuffer(w.__webglFramebuffer[et][nt]);else n.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)n.deleteFramebuffer(w.__webglFramebuffer[et]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=D.textures;for(let et=0,nt=H.length;et<nt;et++){const tt=i.get(H[et]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(H[et])}i.remove(D)}let R=0;function P(){R=0}function L(){const D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function U(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function F(D,w){const H=i.get(D);if(D.isVideoTexture&&Ut(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const et=D.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,D,w);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function k(D,w){const H=i.get(D);if(D.version>0&&H.__version!==D.version){J(H,D,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function Z(D,w){const H=i.get(D);if(D.version>0&&H.__version!==D.version){J(H,D,w);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function Y(D,w){const H=i.get(D);if(D.version>0&&H.__version!==D.version){st(H,D,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}const ot={[Ou]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[Bu]:n.MIRRORED_REPEAT},ht={[ai]:n.NEAREST,[bv]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[Mi]:n.LINEAR,[fc]:n.LINEAR_MIPMAP_NEAREST,[er]:n.LINEAR_MIPMAP_LINEAR},yt={[Cv]:n.NEVER,[Nv]:n.ALWAYS,[Pv]:n.LESS,[Em]:n.LEQUAL,[Dv]:n.EQUAL,[Uv]:n.GEQUAL,[Lv]:n.GREATER,[Iv]:n.NOTEQUAL};function zt(D,w){if(w.type===qi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Mi||w.magFilter===fc||w.magFilter===Ca||w.magFilter===er||w.minFilter===Mi||w.minFilter===fc||w.minFilter===Ca||w.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ot[w.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ot[w.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ot[w.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ht[w.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ht[w.minFilter]),w.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,yt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ai||w.minFilter!==Ca&&w.minFilter!==er||w.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function te(D,w){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",b));const et=w.source;let nt=f.get(et);nt===void 0&&(nt={},f.set(et,nt));const tt=U(w);if(tt!==D.__cacheKey){nt[tt]===void 0&&(nt[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),nt[tt].usedTimes++;const V=nt[D.__cacheKey];V!==void 0&&(nt[D.__cacheKey].usedTimes--,V.usedTimes===0&&S(w)),D.__cacheKey=tt,D.__webglTexture=nt[tt].texture}return H}function J(D,w,H){let et=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=n.TEXTURE_3D);const nt=te(D,w),tt=w.source;e.bindTexture(et,D.__webglTexture,n.TEXTURE0+H);const V=i.get(tt);if(tt.version!==V.__version||nt===!0){e.activeTexture(n.TEXTURE0+H);const $=ne.getPrimaries(ne.workingColorSpace),Q=w.colorSpace===ps?null:ne.getPrimaries(w.colorSpace),rt=w.colorSpace===ps||$===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let X=v(w.image,!1,s.maxTextureSize);X=ce(w,X);const it=r.convert(w.format,w.colorSpace),at=r.convert(w.type);let ft=y(w.internalFormat,it,at,w.colorSpace,w.isVideoTexture);zt(et,w);let ut;const Dt=w.mipmaps,At=w.isVideoTexture!==!0,qt=V.__version===void 0||nt===!0,N=tt.dataReady,lt=T(w,X);if(w.isDepthTexture)ft=g(w.format===So,w.type),qt&&(At?e.texStorage2D(n.TEXTURE_2D,1,ft,X.width,X.height):e.texImage2D(n.TEXTURE_2D,0,ft,X.width,X.height,0,it,at,null));else if(w.isDataTexture)if(Dt.length>0){At&&qt&&e.texStorage2D(n.TEXTURE_2D,lt,ft,Dt[0].width,Dt[0].height);for(let q=0,K=Dt.length;q<K;q++)ut=Dt[q],At?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,ut.width,ut.height,it,at,ut.data):e.texImage2D(n.TEXTURE_2D,q,ft,ut.width,ut.height,0,it,at,ut.data);w.generateMipmaps=!1}else At?(qt&&e.texStorage2D(n.TEXTURE_2D,lt,ft,X.width,X.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,it,at,X.data)):e.texImage2D(n.TEXTURE_2D,0,ft,X.width,X.height,0,it,at,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){At&&qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ft,Dt[0].width,Dt[0].height,X.depth);for(let q=0,K=Dt.length;q<K;q++)if(ut=Dt[q],w.format!==oi)if(it!==null)if(At){if(N)if(w.layerUpdates.size>0){const pt=xd(ut.width,ut.height,w.format,w.type);for(const dt of w.layerUpdates){const Rt=ut.data.subarray(dt*pt/ut.data.BYTES_PER_ELEMENT,(dt+1)*pt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,dt,ut.width,ut.height,1,it,Rt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ut.width,ut.height,X.depth,it,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ft,ut.width,ut.height,X.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ut.width,ut.height,X.depth,it,at,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,ft,ut.width,ut.height,X.depth,0,it,at,ut.data)}else{At&&qt&&e.texStorage2D(n.TEXTURE_2D,lt,ft,Dt[0].width,Dt[0].height);for(let q=0,K=Dt.length;q<K;q++)ut=Dt[q],w.format!==oi?it!==null?At?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ut.width,ut.height,it,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,q,ft,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,ut.width,ut.height,it,at,ut.data):e.texImage2D(n.TEXTURE_2D,q,ft,ut.width,ut.height,0,it,at,ut.data)}else if(w.isDataArrayTexture)if(At){if(qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ft,X.width,X.height,X.depth),N)if(w.layerUpdates.size>0){const q=xd(X.width,X.height,w.format,w.type);for(const K of w.layerUpdates){const pt=X.data.subarray(K*q/X.data.BYTES_PER_ELEMENT,(K+1)*q/X.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,X.width,X.height,1,it,at,pt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,it,at,X.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ft,X.width,X.height,X.depth,0,it,at,X.data);else if(w.isData3DTexture)At?(qt&&e.texStorage3D(n.TEXTURE_3D,lt,ft,X.width,X.height,X.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,it,at,X.data)):e.texImage3D(n.TEXTURE_3D,0,ft,X.width,X.height,X.depth,0,it,at,X.data);else if(w.isFramebufferTexture){if(qt)if(At)e.texStorage2D(n.TEXTURE_2D,lt,ft,X.width,X.height);else{let q=X.width,K=X.height;for(let pt=0;pt<lt;pt++)e.texImage2D(n.TEXTURE_2D,pt,ft,q,K,0,it,at,null),q>>=1,K>>=1}}else if(Dt.length>0){if(At&&qt){const q=Pt(Dt[0]);e.texStorage2D(n.TEXTURE_2D,lt,ft,q.width,q.height)}for(let q=0,K=Dt.length;q<K;q++)ut=Dt[q],At?N&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,it,at,ut):e.texImage2D(n.TEXTURE_2D,q,ft,it,at,ut);w.generateMipmaps=!1}else if(At){if(qt){const q=Pt(X);e.texStorage2D(n.TEXTURE_2D,lt,ft,q.width,q.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it,at,X)}else e.texImage2D(n.TEXTURE_2D,0,ft,it,at,X);m(w)&&p(et),V.__version=tt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function st(D,w,H){if(w.image.length!==6)return;const et=te(D,w),nt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+H);const tt=i.get(nt);if(nt.version!==tt.__version||et===!0){e.activeTexture(n.TEXTURE0+H);const V=ne.getPrimaries(ne.workingColorSpace),$=w.colorSpace===ps?null:ne.getPrimaries(w.colorSpace),Q=w.colorSpace===ps||V===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,X=w.image[0]&&w.image[0].isDataTexture,it=[];for(let K=0;K<6;K++)!rt&&!X?it[K]=v(w.image[K],!0,s.maxCubemapSize):it[K]=X?w.image[K].image:w.image[K],it[K]=ce(w,it[K]);const at=it[0],ft=r.convert(w.format,w.colorSpace),ut=r.convert(w.type),Dt=y(w.internalFormat,ft,ut,w.colorSpace),At=w.isVideoTexture!==!0,qt=tt.__version===void 0||et===!0,N=nt.dataReady;let lt=T(w,at);zt(n.TEXTURE_CUBE_MAP,w);let q;if(rt){At&&qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Dt,at.width,at.height);for(let K=0;K<6;K++){q=it[K].mipmaps;for(let pt=0;pt<q.length;pt++){const dt=q[pt];w.format!==oi?ft!==null?At?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Dt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,dt.width,dt.height,ft,ut,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Dt,dt.width,dt.height,0,ft,ut,dt.data)}}}else{if(q=w.mipmaps,At&&qt){q.length>0&&lt++;const K=Pt(it[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Dt,K.width,K.height)}for(let K=0;K<6;K++)if(X){At?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,it[K].width,it[K].height,ft,ut,it[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Dt,it[K].width,it[K].height,0,ft,ut,it[K].data);for(let pt=0;pt<q.length;pt++){const Rt=q[pt].image[K].image;At?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Rt.width,Rt.height,ft,ut,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Dt,Rt.width,Rt.height,0,ft,ut,Rt.data)}}else{At?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft,ut,it[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Dt,ft,ut,it[K]);for(let pt=0;pt<q.length;pt++){const dt=q[pt];At?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,ft,ut,dt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Dt,ft,ut,dt.image[K])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),tt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function St(D,w,H,et,nt,tt){const V=r.convert(H.format,H.colorSpace),$=r.convert(H.type),Q=y(H.internalFormat,V,$,H.colorSpace),rt=i.get(w),X=i.get(H);if(X.__renderTarget=w,!rt.__hasExternalTextures){const it=Math.max(1,w.width>>tt),at=Math.max(1,w.height>>tt);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,tt,Q,it,at,w.depth,0,V,$,null):e.texImage2D(nt,tt,Q,it,at,0,V,$,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),Kt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,nt,X.__webglTexture,0,Zt(w)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,nt,X.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(D,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,D),w.depthBuffer){const et=w.depthTexture,nt=et&&et.isDepthTexture?et.type:null,tt=g(w.stencilBuffer,nt),V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=Zt(w);Kt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,tt,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,$,tt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,tt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,D)}else{const et=w.textures;for(let nt=0;nt<et.length;nt++){const tt=et[nt],V=r.convert(tt.format,tt.colorSpace),$=r.convert(tt.type),Q=y(tt.internalFormat,V,$,tt.colorSpace),rt=Zt(w);H&&Kt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Q,w.width,w.height):Kt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,Q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Q,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(w.depthTexture);et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const nt=et.__webglTexture,tt=Zt(w);if(w.depthTexture.format===to)Kt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(w.depthTexture.format===So)Kt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ot(D){const w=i.get(D),H=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const et=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){const nt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",nt)};et.addEventListener("dispose",nt),w.__depthDisposeCallback=nt}w.__boundDepthTexture=et}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");It(w.__webglFramebuffer,D)}else if(H){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=n.createRenderbuffer(),_t(w.__webglDepthbuffer[et],D,!1);else{const nt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),_t(w.__webglDepthbuffer,D,!1);else{const et=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(D,w,H){const et=i.get(D);w!==void 0&&St(et.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ot(D)}function de(D){const w=D.texture,H=i.get(D),et=i.get(w);D.addEventListener("dispose",E);const nt=D.textures,tt=D.isWebGLCubeRenderTarget===!0,V=nt.length>1;if(V||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=w.version,o.memory.textures++),tt){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let Q=0;Q<w.mipmaps.length;Q++)H.__webglFramebuffer[$][Q]=n.createFramebuffer()}else H.__webglFramebuffer[$]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<w.mipmaps.length;$++)H.__webglFramebuffer[$]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(V)for(let $=0,Q=nt.length;$<Q;$++){const rt=i.get(nt[$]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Kt(D)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<nt.length;$++){const Q=nt[$];H.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[$]);const rt=r.convert(Q.format,Q.colorSpace),X=r.convert(Q.type),it=y(Q.internalFormat,rt,X,Q.colorSpace,D.isXRRenderTarget===!0),at=Zt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,at,it,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,H.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(H.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),zt(n.TEXTURE_CUBE_MAP,w);for(let $=0;$<6;$++)if(w.mipmaps&&w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)St(H.__webglFramebuffer[$][Q],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else St(H.__webglFramebuffer[$],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(w)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(V){for(let $=0,Q=nt.length;$<Q;$++){const rt=nt[$],X=i.get(rt);e.bindTexture(n.TEXTURE_2D,X.__webglTexture),zt(n.TEXTURE_2D,rt),St(H.__webglFramebuffer,D,rt,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,0),m(rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let $=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&($=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($,et.__webglTexture),zt($,w),w.mipmaps&&w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)St(H.__webglFramebuffer[Q],D,w,n.COLOR_ATTACHMENT0,$,Q);else St(H.__webglFramebuffer,D,w,n.COLOR_ATTACHMENT0,$,0);m(w)&&p($),e.unbindTexture()}D.depthBuffer&&Ot(D)}function Wt(D){const w=D.textures;for(let H=0,et=w.length;H<et;H++){const nt=w[H];if(m(nt)){const tt=x(D),V=i.get(nt).__webglTexture;e.bindTexture(tt,V),p(tt),e.unbindTexture()}}}const Se=[],z=[];function fn(D){if(D.samples>0){if(Kt(D)===!1){const w=D.textures,H=D.width,et=D.height;let nt=n.COLOR_BUFFER_BIT;const tt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=i.get(D),$=w.length>1;if($)for(let Q=0;Q<w.length;Q++)e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,V.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,V.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let Q=0;Q<w.length;Q++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);const rt=i.get(w[Q]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,H,et,0,0,H,et,nt,n.NEAREST),l===!0&&(Se.length=0,z.length=0,Se.push(n.COLOR_ATTACHMENT0+Q),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Se.push(tt),z.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let Q=0;Q<w.length;Q++){e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);const rt=i.get(w[Q]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,V.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,V.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Zt(D){return Math.min(s.maxSamples,D.samples)}function Kt(D){const w=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ut(D){const w=o.render.frame;u.get(D)!==w&&(u.set(D,w),D.update())}function ce(D,w){const H=D.colorSpace,et=D.format,nt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==Ao&&H!==ps&&(ne.getTransfer(H)===fe?(et!==oi||nt!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=kt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Kt}function tE(n,t){function e(i,s=ps){let r;const o=ne.getTransfer(s);if(i===Ki)return n.UNSIGNED_BYTE;if(i===Of)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hm)return n.BYTE;if(i===dm)return n.SHORT;if(i===oa)return n.UNSIGNED_SHORT;if(i===Ff)return n.INT;if(i===mr)return n.UNSIGNED_INT;if(i===qi)return n.FLOAT;if(i===xa)return n.HALF_FLOAT;if(i===mm)return n.ALPHA;if(i===_m)return n.RGB;if(i===oi)return n.RGBA;if(i===gm)return n.LUMINANCE;if(i===vm)return n.LUMINANCE_ALPHA;if(i===to)return n.DEPTH_COMPONENT;if(i===So)return n.DEPTH_STENCIL;if(i===xm)return n.RED;if(i===zf)return n.RED_INTEGER;if(i===ym)return n.RG;if(i===kf)return n.RG_INTEGER;if(i===Hf)return n.RGBA_INTEGER;if(i===wl||i===Rl||i===Cl||i===Pl)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zu||i===ku||i===Hu||i===Vu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ku)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gu||i===Wu||i===Xu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gu||i===Wu)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xu)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qu||i===Yu||i===$u||i===ju||i===Zu||i===Ku||i===Ju||i===Qu||i===tf||i===ef||i===nf||i===sf||i===rf||i===of)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qu)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yu)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$u)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ju)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zu)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ku)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ju)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qu)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tf)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ef)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nf)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sf)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rf)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===of)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===af||i===lf)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Dl)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===af)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mm||i===cf||i===uf||i===ff)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ff)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class eE extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xs extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nE={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const iE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sE=`
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

}`;class rE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new xn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ds({vertexShader:iE,fragmentShader:sE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oE extends xr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const v=new rE,m=e.getContextAttributes();let p=null,x=null;const y=[],g=[],T=new Lt;let b=null;const E=new zn;E.viewport=new ae;const A=new zn;A.viewport=new ae;const S=[E,A],M=new eE;let R=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=y[J];return st===void 0&&(st=new Bc,y[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=y[J];return st===void 0&&(st=new Bc,y[J]=st),st.getGripSpace()},this.getHand=function(J){let st=y[J];return st===void 0&&(st=new Bc,y[J]=st),st.getHandSpace()};function L(J){const st=g.indexOf(J.inputSource);if(st===-1)return;const St=y[st];St!==void 0&&(St.update(J.inputSource,J.frame,c||o),St.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",F);for(let J=0;J<y.length;J++){const st=g[J];st!==null&&(g[J]=null,y[J].disconnect(st))}R=null,P=null,v.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,x=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new _r(d.framebufferWidth,d.framebufferHeight,{format:oi,type:Ki,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,St=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?So:to,St=m.stencil?Mo:mr);const It={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new _r(f.textureWidth,f.textureHeight,{format:oi,type:Ki,depthTexture:new Fm(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(J){for(let st=0;st<J.removed.length;st++){const St=J.removed[st],_t=g.indexOf(St);_t>=0&&(g[_t]=null,y[_t].disconnect(St))}for(let st=0;st<J.added.length;st++){const St=J.added[st];let _t=g.indexOf(St);if(_t===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=g.length){g.push(St),_t=Ot;break}else if(g[Ot]===null){g[Ot]=St,_t=Ot;break}if(_t===-1)break}const It=y[_t];It&&It.connect(St)}}const k=new I,Z=new I;function Y(J,st,St){k.setFromMatrixPosition(st.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const _t=k.distanceTo(Z),It=st.projectionMatrix.elements,Ot=St.projectionMatrix.elements,kt=It[14]/(It[10]-1),de=It[14]/(It[10]+1),Wt=(It[9]+1)/It[5],Se=(It[9]-1)/It[5],z=(It[8]-1)/It[0],fn=(Ot[8]+1)/Ot[0],Zt=kt*z,Kt=kt*fn,Ut=_t/(-z+fn),ce=Ut*-z;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ce),J.translateZ(Ut),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),It[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Pt=kt+Ut,D=de+Ut,w=Zt-ce,H=Kt+(_t-ce),et=Wt*de/D*Pt,nt=Se*de/D*Pt;J.projectionMatrix.makePerspective(w,H,et,nt,Pt,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ot(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let st=J.near,St=J.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(St=v.depthFar)),M.near=A.near=E.near=st,M.far=A.far=E.far=St,(R!==M.near||P!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,P=M.far),E.layers.mask=J.layers.mask|2,A.layers.mask=J.layers.mask|4,M.layers.mask=E.layers.mask|A.layers.mask;const _t=J.parent,It=M.cameras;ot(M,_t);for(let Ot=0;Ot<It.length;Ot++)ot(It[Ot],_t);It.length===2?Y(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),ht(J,M,_t)};function ht(J,st,St){St===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=aa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let yt=null;function zt(J,st){if(u=st.getViewerPose(c||o),_=st,u!==null){const St=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let _t=!1;St.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let Ot=0;Ot<St.length;Ot++){const kt=St[Ot];let de=null;if(d!==null)de=d.getViewport(kt);else{const Se=h.getViewSubImage(f,kt);de=Se.viewport,Ot===0&&(t.setRenderTargetTextures(x,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(x))}let Wt=S[Ot];Wt===void 0&&(Wt=new zn,Wt.layers.enable(Ot),Wt.viewport=new ae,S[Ot]=Wt),Wt.matrix.fromArray(kt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(kt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(de.x,de.y,de.width,de.height),Ot===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(Wt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Ot=h.getDepthInformation(St[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,s.renderState)}}for(let St=0;St<y.length;St++){const _t=g[St],It=y[St];_t!==null&&It!==void 0&&It.update(_t,st,c||o)}yt&&yt(J,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),_=null}const te=new Um;te.setAnimationLoop(zt),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}}const zs=new bi,aE=new ee;function lE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,g)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,g=x.envMapRotation;y&&(m.envMap.value=y,zs.copy(g),zs.x*=-1,zs.y*=-1,zs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),m.envMapRotation.value.setFromMatrix4(aE.makeRotationFromEuler(zs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cE(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const g=y.program;i.uniformBlockBinding(x,g)}function c(x,y){let g=s[x.id];g===void 0&&(_(x),g=u(x),s[x.id]=g,x.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(x,T);const b=t.render.frame;r[x.id]!==b&&(f(x),r[x.id]=b)}function u(x){const y=h();x.__bindingPointIndex=y;const g=n.createBuffer(),T=x.__size,b=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,g),g}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=s[x.id],g=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let b=0,E=g.length;b<E;b++){const A=Array.isArray(g[b])?g[b]:[g[b]];for(let S=0,M=A.length;S<M;S++){const R=A[S];if(d(R,b,S,T)===!0){const P=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let F=0;F<L.length;F++){const k=L[F],Z=v(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,P+U,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,y,g,T){const b=x.value,E=y+"_"+g;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const A=T[E];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return T[E]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function _(x){const y=x.uniforms;let g=0;const T=16;for(let E=0,A=y.length;E<A;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,R=S.length;M<R;M++){const P=S[M],L=Array.isArray(P.value)?P.value:[P.value];for(let U=0,F=L.length;U<F;U++){const k=L[U],Z=v(k),Y=g%T,ot=Y%Z.boundary,ht=Y+ot;g+=ot,ht!==0&&T-ht<Z.storage&&(g+=T-ht),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=g,g+=Z.storage}}}const b=g%T;return b>0&&(g+=T-b),x.__size=g,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const g=o.indexOf(y.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class uE{constructor(t={}){const{canvas:e=Jv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Cs,this.toneMappingExposure=1;const g=this;let T=!1,b=0,E=0,A=null,S=-1,M=null;const R=new ae,P=new ae;let L=null;const U=new Qt(0);let F=0,k=e.width,Z=e.height,Y=1,ot=null,ht=null;const yt=new ae(0,0,k,Z),zt=new ae(0,0,k,Z);let te=!1;const J=new Wf;let st=!1,St=!1;const _t=new ee,It=new ee,Ot=new I,kt=new ae,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Se(){return A===null?Y:1}let z=i;function fn(C,O){return e.getContext(C,O)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),z===null){const O="webgl2";if(z=fn(O,C),z===null)throw fn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Zt,Kt,Ut,ce,Pt,D,w,H,et,nt,tt,V,$,Q,rt,X,it,at,ft,ut,Dt,At,qt,N;function lt(){Zt=new mM(z),Zt.init(),At=new tE(z,Zt),Kt=new cM(z,Zt,t,At),Ut=new KS(z,Zt),Kt.reverseDepthBuffer&&f&&Ut.buffers.depth.setReversed(!0),ce=new vM(z),Pt=new FS,D=new QS(z,Zt,Ut,Pt,Kt,At,ce),w=new fM(g),H=new pM(g),et=new b0(z),qt=new aM(z,et),nt=new _M(z,et,ce,qt),tt=new yM(z,nt,et,ce),ft=new xM(z,Kt,D),X=new uM(Pt),V=new NS(g,w,H,Zt,Kt,qt,X),$=new lE(g,Pt),Q=new BS,rt=new WS(Zt),at=new oM(g,w,H,Ut,tt,d,l),it=new jS(g,tt,Kt),N=new cE(z,ce,Kt,Ut),ut=new lM(z,Zt,ce),Dt=new gM(z,Zt,ce),ce.programs=V.programs,g.capabilities=Kt,g.extensions=Zt,g.properties=Pt,g.renderLists=Q,g.shadowMap=it,g.state=Ut,g.info=ce}lt();const q=new oE(g,z);this.xr=q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Zt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Zt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(k,Z,!1))},this.getSize=function(C){return C.set(k,Z)},this.setSize=function(C,O,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,Z=O,e.width=Math.floor(C*Y),e.height=Math.floor(O*Y),G===!0&&(e.style.width=C+"px",e.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(k*Y,Z*Y).floor()},this.setDrawingBufferSize=function(C,O,G){k=C,Z=O,Y=G,e.width=Math.floor(C*G),e.height=Math.floor(O*G),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(yt)},this.setViewport=function(C,O,G,W){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,O,G,W),Ut.viewport(R.copy(yt).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(zt)},this.setScissor=function(C,O,G,W){C.isVector4?zt.set(C.x,C.y,C.z,C.w):zt.set(C,O,G,W),Ut.scissor(P.copy(zt).multiplyScalar(Y).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(C){Ut.setScissorTest(te=C)},this.setOpaqueSort=function(C){ot=C},this.setTransparentSort=function(C){ht=C},this.getClearColor=function(C){return C.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(C=!0,O=!0,G=!0){let W=0;if(C){let B=!1;if(A!==null){const ct=A.texture.format;B=ct===Hf||ct===kf||ct===zf}if(B){const ct=A.texture.type,vt=ct===Ki||ct===mr||ct===oa||ct===Mo||ct===Of||ct===Bf,Et=at.getClearColor(),Tt=at.getClearAlpha(),Bt=Et.r,Vt=Et.g,bt=Et.b;vt?(_[0]=Bt,_[1]=Vt,_[2]=bt,_[3]=Tt,z.clearBufferuiv(z.COLOR,0,_)):(v[0]=Bt,v[1]=Vt,v[2]=bt,v[3]=Tt,z.clearBufferiv(z.COLOR,0,v))}else W|=z.COLOR_BUFFER_BIT}O&&(W|=z.DEPTH_BUFFER_BIT),G&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Q.dispose(),rt.dispose(),Pt.dispose(),w.dispose(),H.dispose(),tt.dispose(),qt.dispose(),N.dispose(),V.dispose(),q.dispose(),q.removeEventListener("sessionstart",ya),q.removeEventListener("sessionend",Ma),Ri.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=ce.autoReset,O=it.enabled,G=it.autoUpdate,W=it.needsUpdate,B=it.type;lt(),ce.autoReset=C,it.enabled=O,it.autoUpdate=G,it.needsUpdate=W,it.type=B}function dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Rt(C){const O=C.target;O.removeEventListener("dispose",Rt),ue(O)}function ue(C){ge(C),Pt.remove(C)}function ge(C){const O=Pt.get(C).programs;O!==void 0&&(O.forEach(function(G){V.releaseProgram(G)}),C.isShaderMaterial&&V.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,G,W,B,ct){O===null&&(O=de);const vt=B.isMesh&&B.matrixWorld.determinant()<0,Et=n_(C,O,G,W,B);Ut.setMaterial(W,vt);let Tt=G.index,Bt=1;if(W.wireframe===!0){if(Tt=nt.getWireframeAttribute(G),Tt===void 0)return;Bt=2}const Vt=G.drawRange,bt=G.attributes.position;let ie=Vt.start*Bt,me=(Vt.start+Vt.count)*Bt;ct!==null&&(ie=Math.max(ie,ct.start*Bt),me=Math.min(me,(ct.start+ct.count)*Bt)),Tt!==null?(ie=Math.max(ie,0),me=Math.min(me,Tt.count)):bt!=null&&(ie=Math.max(ie,0),me=Math.min(me,bt.count));const ve=me-ie;if(ve<0||ve===1/0)return;qt.setup(B,W,Et,G,Tt);let hn,se=ut;if(Tt!==null&&(hn=et.get(Tt),se=Dt,se.setIndex(hn)),B.isMesh)W.wireframe===!0?(Ut.setLineWidth(W.wireframeLinewidth*Se()),se.setMode(z.LINES)):se.setMode(z.TRIANGLES);else if(B.isLine){let wt=W.linewidth;wt===void 0&&(wt=1),Ut.setLineWidth(wt*Se()),B.isLineSegments?se.setMode(z.LINES):B.isLineLoop?se.setMode(z.LINE_LOOP):se.setMode(z.LINE_STRIP)}else B.isPoints?se.setMode(z.POINTS):B.isSprite&&se.setMode(z.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)se.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const wt=B._multiDrawStarts,Ci=B._multiDrawCounts,re=B._multiDrawCount,Yn=Tt?et.get(Tt).bytesPerElement:1,yr=Pt.get(W).currentProgram.getUniforms();for(let En=0;En<re;En++)yr.setValue(z,"_gl_DrawID",En),se.render(wt[En]/Yn,Ci[En])}else if(B.isInstancedMesh)se.renderInstances(ie,ve,B.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ci=Math.min(G.instanceCount,wt);se.renderInstances(ie,ve,Ci)}else se.render(ie,ve)};function Yt(C,O,G){C.transparent===!0&&C.side===kn&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,Ea(C,O,G),C.side=Ti,C.needsUpdate=!0,Ea(C,O,G),C.side=kn):Ea(C,O,G)}this.compile=function(C,O,G=null){G===null&&(G=C),p=rt.get(G),p.init(O),y.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),C!==G&&C.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ct=B.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){const Et=ct[vt];Yt(Et,G,B),W.add(Et)}else Yt(ct,G,B),W.add(ct)}),y.pop(),p=null,W},this.compileAsync=function(C,O,G=null){const W=this.compile(C,O,G);return new Promise(B=>{function ct(){if(W.forEach(function(vt){Pt.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){B(C);return}setTimeout(ct,10)}Zt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Mn=null;function Sn(C){Mn&&Mn(C)}function ya(){Ri.stop()}function Ma(){Ri.start()}const Ri=new Um;Ri.setAnimationLoop(Sn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(C){Mn=C,q.setAnimationLoop(C),C===null?Ri.stop():Ri.start()},q.addEventListener("sessionstart",ya),q.addEventListener("sessionend",Ma),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,O,A),p=rt.get(C,y.length),p.init(O),y.push(p),It.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(It),St=this.localClippingEnabled,st=X.init(this.clippingPlanes,St),m=Q.get(C,x.length),m.init(),x.push(m),q.enabled===!0&&q.isPresenting===!0){const ct=g.xr.getDepthSensingMesh();ct!==null&&cc(ct,O,-1/0,g.sortObjects)}cc(C,O,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(ot,ht),Wt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Wt&&at.addToRenderList(m,C),this.info.render.frame++,st===!0&&X.beginShadows();const G=p.state.shadowsArray;it.render(G,C,O),st===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){const ct=O.cameras;if(B.length>0)for(let vt=0,Et=ct.length;vt<Et;vt++){const Tt=ct[vt];ih(W,B,C,Tt)}Wt&&at.render(C);for(let vt=0,Et=ct.length;vt<Et;vt++){const Tt=ct[vt];nh(m,C,Tt,Tt.viewport)}}else B.length>0&&ih(W,B,C,O),Wt&&at.render(C),nh(m,C,O);A!==null&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(g,C,O),qt.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],st===!0&&X.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function cc(C,O,G,W){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){W&&kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(It);const vt=tt.update(C),Et=C.material;Et.visible&&m.push(C,vt,Et,G,kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const vt=tt.update(C),Et=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),kt.copy(C.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),kt.copy(vt.boundingSphere.center)),kt.applyMatrix4(C.matrixWorld).applyMatrix4(It)),Array.isArray(Et)){const Tt=vt.groups;for(let Bt=0,Vt=Tt.length;Bt<Vt;Bt++){const bt=Tt[Bt],ie=Et[bt.materialIndex];ie&&ie.visible&&m.push(C,vt,ie,G,kt.z,bt)}}else Et.visible&&m.push(C,vt,Et,G,kt.z,null)}}const ct=C.children;for(let vt=0,Et=ct.length;vt<Et;vt++)cc(ct[vt],O,G,W)}function nh(C,O,G,W){const B=C.opaque,ct=C.transmissive,vt=C.transparent;p.setupLightsView(G),st===!0&&X.setGlobalState(g.clippingPlanes,G),W&&Ut.viewport(R.copy(W)),B.length>0&&Sa(B,O,G),ct.length>0&&Sa(ct,O,G),vt.length>0&&Sa(vt,O,G),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function ih(C,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new _r(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?xa:Ki,minFilter:er,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ct=p.state.transmissionRenderTarget[W.id],vt=W.viewport||R;ct.setSize(vt.z,vt.w);const Et=g.getRenderTarget();g.setRenderTarget(ct),g.getClearColor(U),F=g.getClearAlpha(),F<1&&g.setClearColor(16777215,.5),g.clear(),Wt&&at.render(G);const Tt=g.toneMapping;g.toneMapping=Cs;const Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),st===!0&&X.setGlobalState(g.clippingPlanes,W),Sa(C,G,W),D.updateMultisampleRenderTarget(ct),D.updateRenderTargetMipmap(ct),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let bt=0,ie=O.length;bt<ie;bt++){const me=O[bt],ve=me.object,hn=me.geometry,se=me.material,wt=me.group;if(se.side===kn&&ve.layers.test(W.layers)){const Ci=se.side;se.side=ln,se.needsUpdate=!0,sh(ve,G,W,hn,se,wt),se.side=Ci,se.needsUpdate=!0,Vt=!0}}Vt===!0&&(D.updateMultisampleRenderTarget(ct),D.updateRenderTargetMipmap(ct))}g.setRenderTarget(Et),g.setClearColor(U,F),Bt!==void 0&&(W.viewport=Bt),g.toneMapping=Tt}function Sa(C,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ct=C.length;B<ct;B++){const vt=C[B],Et=vt.object,Tt=vt.geometry,Bt=W===null?vt.material:W,Vt=vt.group;Et.layers.test(G.layers)&&sh(Et,O,G,Tt,Bt,Vt)}}function sh(C,O,G,W,B,ct){C.onBeforeRender(g,O,G,W,B,ct),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(g,O,G,W,C,ct),B.transparent===!0&&B.side===kn&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,g.renderBufferDirect(G,O,W,B,C,ct),B.side=Ti,B.needsUpdate=!0,g.renderBufferDirect(G,O,W,B,C,ct),B.side=kn):g.renderBufferDirect(G,O,W,B,C,ct),C.onAfterRender(g,O,G,W,B,ct)}function Ea(C,O,G){O.isScene!==!0&&(O=de);const W=Pt.get(C),B=p.state.lights,ct=p.state.shadowsArray,vt=B.state.version,Et=V.getParameters(C,B.state,ct,O,G),Tt=V.getProgramCacheKey(Et);let Bt=W.programs;W.environment=C.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(C.isMeshStandardMaterial?H:w).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,Bt===void 0&&(C.addEventListener("dispose",Rt),Bt=new Map,W.programs=Bt);let Vt=Bt.get(Tt);if(Vt!==void 0){if(W.currentProgram===Vt&&W.lightsStateVersion===vt)return oh(C,Et),Vt}else Et.uniforms=V.getUniforms(C),C.onBeforeCompile(Et,g),Vt=V.acquireProgram(Et,Tt),Bt.set(Tt,Vt),W.uniforms=Et.uniforms;const bt=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(bt.clippingPlanes=X.uniform),oh(C,Et),W.needsLights=s_(C),W.lightsStateVersion=vt,W.needsLights&&(bt.ambientLightColor.value=B.state.ambient,bt.lightProbe.value=B.state.probe,bt.directionalLights.value=B.state.directional,bt.directionalLightShadows.value=B.state.directionalShadow,bt.spotLights.value=B.state.spot,bt.spotLightShadows.value=B.state.spotShadow,bt.rectAreaLights.value=B.state.rectArea,bt.ltc_1.value=B.state.rectAreaLTC1,bt.ltc_2.value=B.state.rectAreaLTC2,bt.pointLights.value=B.state.point,bt.pointLightShadows.value=B.state.pointShadow,bt.hemisphereLights.value=B.state.hemi,bt.directionalShadowMap.value=B.state.directionalShadowMap,bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,bt.spotShadowMap.value=B.state.spotShadowMap,bt.spotLightMatrix.value=B.state.spotLightMatrix,bt.spotLightMap.value=B.state.spotLightMap,bt.pointShadowMap.value=B.state.pointShadowMap,bt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Vt,W.uniformsList=null,Vt}function rh(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=Il.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function oh(C,O){const G=Pt.get(C);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function n_(C,O,G,W,B){O.isScene!==!0&&(O=de),D.resetTextureUnits();const ct=O.fog,vt=W.isMeshStandardMaterial?O.environment:null,Et=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ao,Tt=(W.isMeshStandardMaterial?H:w).get(W.envMap||vt),Bt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),bt=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,me=!!G.morphAttributes.color;let ve=Cs;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ve=g.toneMapping);const hn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=hn!==void 0?hn.length:0,wt=Pt.get(W),Ci=p.state.lights;if(st===!0&&(St===!0||C!==M)){const Pn=C===M&&W.id===S;X.setState(W,C,Pn)}let re=!1;W.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ci.state.version||wt.outputColorSpace!==Et||B.isBatchedMesh&&wt.batching===!1||!B.isBatchedMesh&&wt.batching===!0||B.isBatchedMesh&&wt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&wt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&wt.instancing===!1||!B.isInstancedMesh&&wt.instancing===!0||B.isSkinnedMesh&&wt.skinning===!1||!B.isSkinnedMesh&&wt.skinning===!0||B.isInstancedMesh&&wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&wt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&wt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&wt.instancingMorph===!1&&B.morphTexture!==null||wt.envMap!==Tt||W.fog===!0&&wt.fog!==ct||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==X.numPlanes||wt.numIntersection!==X.numIntersection)||wt.vertexAlphas!==Bt||wt.vertexTangents!==Vt||wt.morphTargets!==bt||wt.morphNormals!==ie||wt.morphColors!==me||wt.toneMapping!==ve||wt.morphTargetsCount!==se)&&(re=!0):(re=!0,wt.__version=W.version);let Yn=wt.currentProgram;re===!0&&(Yn=Ea(W,O,B));let yr=!1,En=!1,Do=!1;const xe=Yn.getUniforms(),ui=wt.uniforms;if(Ut.useProgram(Yn.program)&&(yr=!0,En=!0,Do=!0),W.id!==S&&(S=W.id,En=!0),yr||M!==C){Ut.buffers.depth.getReversed()?(_t.copy(C.projectionMatrix),t0(_t),e0(_t),xe.setValue(z,"projectionMatrix",_t)):xe.setValue(z,"projectionMatrix",C.projectionMatrix),xe.setValue(z,"viewMatrix",C.matrixWorldInverse);const ns=xe.map.cameraPosition;ns!==void 0&&ns.setValue(z,Ot.setFromMatrixPosition(C.matrixWorld)),Kt.logarithmicDepthBuffer&&xe.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,En=!0,Do=!0)}if(B.isSkinnedMesh){xe.setOptional(z,B,"bindMatrix"),xe.setOptional(z,B,"bindMatrixInverse");const Pn=B.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),xe.setValue(z,"boneTexture",Pn.boneTexture,D))}B.isBatchedMesh&&(xe.setOptional(z,B,"batchingTexture"),xe.setValue(z,"batchingTexture",B._matricesTexture,D),xe.setOptional(z,B,"batchingIdTexture"),xe.setValue(z,"batchingIdTexture",B._indirectTexture,D),xe.setOptional(z,B,"batchingColorTexture"),B._colorsTexture!==null&&xe.setValue(z,"batchingColorTexture",B._colorsTexture,D));const Lo=G.morphAttributes;if((Lo.position!==void 0||Lo.normal!==void 0||Lo.color!==void 0)&&ft.update(B,G,Yn),(En||wt.receiveShadow!==B.receiveShadow)&&(wt.receiveShadow=B.receiveShadow,xe.setValue(z,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ui.envMap.value=Tt,ui.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(ui.envMapIntensity.value=O.environmentIntensity),En&&(xe.setValue(z,"toneMappingExposure",g.toneMappingExposure),wt.needsLights&&i_(ui,Do),ct&&W.fog===!0&&$.refreshFogUniforms(ui,ct),$.refreshMaterialUniforms(ui,W,Y,Z,p.state.transmissionRenderTarget[C.id]),Il.upload(z,rh(wt),ui,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Il.upload(z,rh(wt),ui,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(z,"center",B.center),xe.setValue(z,"modelViewMatrix",B.modelViewMatrix),xe.setValue(z,"normalMatrix",B.normalMatrix),xe.setValue(z,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pn=W.uniformsGroups;for(let ns=0,is=Pn.length;ns<is;ns++){const ah=Pn[ns];N.update(ah,Yn),N.bind(ah,Yn)}}return Yn}function i_(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function s_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,O,G){Pt.get(C.texture).__webglTexture=O,Pt.get(C.depthTexture).__webglTexture=G;const W=Pt.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,O){const G=Pt.get(C);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,G=0){A=C,b=O,E=G;let W=!0,B=null,ct=!1,vt=!1;if(C){const Tt=Pt.get(C);if(Tt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(z.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Tt.__hasExternalTextures)D.rebindTextures(C,Pt.get(C.texture).__webglTexture,Pt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const bt=C.depthTexture;if(Tt.__boundDepthTexture!==bt){if(bt!==null&&Pt.has(bt)&&(C.width!==bt.image.width||C.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(vt=!0);const Vt=Pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?B=Vt[O][G]:B=Vt[O],ct=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?B=Pt.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?B=Vt[G]:B=Vt,R.copy(C.viewport),P.copy(C.scissor),L=C.scissorTest}else R.copy(yt).multiplyScalar(Y).floor(),P.copy(zt).multiplyScalar(Y).floor(),L=te;if(Ut.bindFramebuffer(z.FRAMEBUFFER,B)&&W&&Ut.drawBuffers(C,B),Ut.viewport(R),Ut.scissor(P),Ut.setScissorTest(L),ct){const Tt=Pt.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Tt.__webglTexture,G)}else if(vt){const Tt=Pt.get(C.texture),Bt=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Tt.__webglTexture,G||0,Bt)}S=-1},this.readRenderTargetPixels=function(C,O,G,W,B,ct,vt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){Ut.bindFramebuffer(z.FRAMEBUFFER,Et);try{const Tt=C.texture,Bt=Tt.format,Vt=Tt.type;if(!Kt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-W&&G>=0&&G<=C.height-B&&z.readPixels(O,G,W,B,At.convert(Bt),At.convert(Vt),ct)}finally{const Tt=A!==null?Pt.get(A).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(C,O,G,W,B,ct,vt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){const Tt=C.texture,Bt=Tt.format,Vt=Tt.type;if(!Kt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=C.width-W&&G>=0&&G<=C.height-B){Ut.bindFramebuffer(z.FRAMEBUFFER,Et);const bt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,bt),z.bufferData(z.PIXEL_PACK_BUFFER,ct.byteLength,z.STREAM_READ),z.readPixels(O,G,W,B,At.convert(Bt),At.convert(Vt),0);const ie=A!==null?Pt.get(A).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,ie);const me=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Qv(z,me,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,bt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ct),z.deleteBuffer(bt),z.deleteSync(me),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,O=null,G=0){C.isTexture!==!0&&($o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,C=arguments[1]);const W=Math.pow(2,-G),B=Math.floor(C.image.width*W),ct=Math.floor(C.image.height*W),vt=O!==null?O.x:0,Et=O!==null?O.y:0;D.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,vt,Et,B,ct),Ut.unbindTexture()},this.copyTextureToTexture=function(C,O,G=null,W=null,B=0){C.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],O=arguments[2],B=arguments[3]||0,G=null);let ct,vt,Et,Tt,Bt,Vt,bt,ie,me;const ve=C.isCompressedTexture?C.mipmaps[B]:C.image;G!==null?(ct=G.max.x-G.min.x,vt=G.max.y-G.min.y,Et=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Bt=G.min.y,Vt=G.isBox3?G.min.z:0):(ct=ve.width,vt=ve.height,Et=ve.depth||1,Tt=0,Bt=0,Vt=0),W!==null?(bt=W.x,ie=W.y,me=W.z):(bt=0,ie=0,me=0);const hn=At.convert(O.format),se=At.convert(O.type);let wt;O.isData3DTexture?(D.setTexture3D(O,0),wt=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),wt=z.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),wt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const Ci=z.getParameter(z.UNPACK_ROW_LENGTH),re=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Yn=z.getParameter(z.UNPACK_SKIP_PIXELS),yr=z.getParameter(z.UNPACK_SKIP_ROWS),En=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ve.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ve.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Tt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Bt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Vt);const Do=C.isDataArrayTexture||C.isData3DTexture,xe=O.isDataArrayTexture||O.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const ui=Pt.get(C),Lo=Pt.get(O),Pn=Pt.get(ui.__renderTarget),ns=Pt.get(Lo.__renderTarget);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let is=0;is<Et;is++)Do&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pt.get(C).__webglTexture,B,Vt+is),C.isDepthTexture?(xe&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pt.get(O).__webglTexture,B,me+is),z.blitFramebuffer(Tt,Bt,ct,vt,bt,ie,ct,vt,z.DEPTH_BUFFER_BIT,z.NEAREST)):xe?z.copyTexSubImage3D(wt,B,bt,ie,me+is,Tt,Bt,ct,vt):z.copyTexSubImage2D(wt,B,bt,ie,me+is,Tt,Bt,ct,vt);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else xe?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(wt,B,bt,ie,me,ct,vt,Et,hn,se,ve.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(wt,B,bt,ie,me,ct,vt,Et,hn,ve.data):z.texSubImage3D(wt,B,bt,ie,me,ct,vt,Et,hn,se,ve):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,B,bt,ie,ct,vt,hn,se,ve.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,B,bt,ie,ve.width,ve.height,hn,ve.data):z.texSubImage2D(z.TEXTURE_2D,B,bt,ie,ct,vt,hn,se,ve);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ci),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,re),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Yn),z.pixelStorei(z.UNPACK_SKIP_ROWS,yr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,En),B===0&&O.generateMipmaps&&z.generateMipmap(wt),Ut.unbindTexture()},this.copyTextureToTexture3D=function(C,O,G=null,W=null,B=0){return C.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,C=arguments[2],O=arguments[3],B=arguments[4]||0),$o('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,O,G,W,B)},this.initRenderTarget=function(C){Pt.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),Ut.unbindTexture()},this.resetState=function(){b=0,E=0,A=null,Ut.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class fE extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class io extends Co{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xl=new I,ql=new I,yd=new ee,Bo=new Ro,Za=new sc,zc=new I,Md=new I;class hE extends $e{constructor(t=new nn,e=new io){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Xl.fromBufferAttribute(e,s-1),ql.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Xl.distanceTo(ql);t.setAttribute("lineDistance",new ye(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,t.ray.intersectsSphere(Za)===!1)return;yd.copy(s).invert(),Bo.copy(t.ray).applyMatrix4(yd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=d,m=_-1;v<m;v+=c){const p=u.getX(v),x=u.getX(v+1),y=Ka(this,t,Bo,l,p,x);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(d),p=Ka(this,t,Bo,l,v,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=d,m=_-1;v<m;v+=c){const p=Ka(this,t,Bo,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Ka(this,t,Bo,l,_-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ka(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(Xl.fromBufferAttribute(o,s),ql.fromBufferAttribute(o,r),e.distanceSqToSegment(Xl,ql,zc,Md)>i)return;zc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(zc);if(!(l<t.near||l>t.far))return{distance:l,point:Md.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Sd=new I,Ed=new I;class Qo extends hE{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Sd.fromBufferAttribute(e,s),Ed.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sd.distanceTo(Ed);t.setAttribute("lineDistance",new ye(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qf extends nn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,u=new Lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class js extends nn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const v=[],m=i/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(d,2));function x(){const g=new I,T=new I;let b=0;const E=(e-t)/i;for(let A=0;A<=r;A++){const S=[],M=A/r,R=M*(e-t)+t;for(let P=0;P<=s;P++){const L=P/s,U=L*l+a,F=Math.sin(U),k=Math.cos(U);T.x=R*F,T.y=-M*i+m,T.z=R*k,h.push(T.x,T.y,T.z),g.set(F,E,k).normalize(),f.push(g.x,g.y,g.z),d.push(L,1-M),S.push(_++)}v.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const M=v[S][A],R=v[S+1][A],P=v[S+1][A+1],L=v[S][A+1];(t>0||S!==0)&&(u.push(M,R,L),b+=3),(e>0||S!==r-1)&&(u.push(R,P,L),b+=3)}c.addGroup(p,b,0),p+=b}function y(g){const T=_,b=new Lt,E=new I;let A=0;const S=g===!0?t:e,M=g===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),_++;const R=_;for(let P=0;P<=s;P++){const U=P/s*l+a,F=Math.cos(U),k=Math.sin(U);E.x=S*k,E.y=m*M,E.z=S*F,h.push(E.x,E.y,E.z),f.push(0,M,0),b.x=F*.5+.5,b.y=k*.5*M+.5,d.push(b.x,b.y),_++}for(let P=0;P<s;P++){const L=T+P,U=R+P;g===!0?u.push(U,U+1,L):u.push(U+1,U,L),A+=3}c.addGroup(p,A,g===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Ja=new I,Qa=new I,kc=new I,tl=new _e;class dE extends nn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(eo*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:m,c:p}=tl;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),tl.getNormal(kc),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const y=(x+1)%3,g=h[x],T=h[y],b=tl[u[x]],E=tl[u[y]],A=`${g}_${T}`,S=`${T}_${g}`;S in f&&f[S]?(kc.dot(f[S].normal)<=r&&(d.push(b.x,b.y,b.z),d.push(E.x,E.y,E.z)),f[S]=null):A in f||(f[A]={index0:c[x],index1:c[y],normal:kc.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:m}=f[_];Ja.fromBufferAttribute(a,v),Qa.fromBufferAttribute(a,m),d.push(Ja.x,Ja.y,Ja.z),d.push(Qa.x,Qa.y,Qa.z)}this.setAttribute("position",new ye(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Yl extends nn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,d=[],_=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],y=p/i;let g=0;p===0&&o===0?g=.5/e:p===i&&l===Math.PI&&(g=-.5/e);for(let T=0;T<=e;T++){const b=T/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+y*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(b+g,1-y),x.push(c++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){const y=u[p][x+1],g=u[p][x],T=u[p+1][x],b=u[p+1][x+1];(p!==0||o>0)&&d.push(y,g,b),(p!==i-1||l<Math.PI)&&d.push(g,T,b)}this.setIndex(d),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pi extends Co{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sm,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hm extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Hc=new ee,Td=new I,bd=new I;class pE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Td.setFromMatrixPosition(t.matrixWorld),e.position.copy(Td),bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bd),e.updateMatrixWorld(),Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mE extends pE{constructor(){super(new Nm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ad extends Hm{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new mE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _E extends Hm{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class wd{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Rd=new I,el=new I;class Xn{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Rd.subVectors(t,this.start),el.subVectors(this.end,this.start);const i=el.dot(el);let r=el.dot(Rd)/i;return e&&(r=Ye(r,0,1)),r}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class gE extends Qo{constructor(t=10,e=10,i=4473924,s=8947848){i=new Qt(i),s=new Qt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,_=-a;f<=e;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=f===r?i:s;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new nn;u.setAttribute("position",new ye(l,3)),u.setAttribute("color",new ye(c,3));const h=new io({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class vE extends Qo{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new nn;s.setAttribute("position",new ye(e,3)),s.setAttribute("color",new ye(i,3));const r=new io({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,i){const s=new Qt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class xE extends xr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);const Cd={type:"change"},Yf={type:"start"},Vm={type:"end"},nl=new Ro,Pd=new ni,yE=Math.cos(70*Ll.DEG2RAD),Ue=new I,pn=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vc=1e-6;class ME extends xE{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new gr,this._lastTargetPosition=new I,this._quat=new gr().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wd,this._sphericalDelta=new wd,this._scale=1,this._panOffset=new I,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new I,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=EE.bind(this),this._onPointerDown=SE.bind(this),this._onPointerUp=TE.bind(this),this._onContextMenu=DE.bind(this),this._onMouseWheel=wE.bind(this),this._onKeyDown=RE.bind(this),this._onTouchStart=CE.bind(this),this._onTouchMove=PE.bind(this),this._onMouseDown=bE.bind(this),this._onMouseMove=AE.bind(this),this._interceptControlDown=LE.bind(this),this._interceptControlUp=IE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cd),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ue.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(nl.origin.copy(this.object.position),nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nl.direction))<yE?this.object.lookAt(this.target):(Pd.setFromNormalAndCoplanarPoint(this.object.up,this.target),nl.intersectPlane(Pd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vc||this._lastTargetPosition.distanceToSquared(this.target)>Vc?(this.dispatchEvent(Cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function SE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function EE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function TE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vm),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case Jr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case Jr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Yf)}function AE(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function wE(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(Yf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Vm))}function RE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function CE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Yf)}function PE(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function DE(n){this.enabled!==!1&&n.preventDefault()}function LE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Gm=0,UE=1,NE=2,Dd=2,Gc=1.25,Ld=1,tn=6*4+4+4,Ne=tn/4,Wm=65535,Ul=Math.pow(2,-24),$f=Symbol("SKIP_GENERATION"),Xm={strategy:Gm,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[$f]:!1};function Ae(n,t,e){return e.min.x=t[n],e.min.y=t[n+1],e.min.z=t[n+2],e.max.x=t[n+3],e.max.y=t[n+4],e.max.z=t[n+5],e}function Id(n){let t=-1,e=-1/0;for(let i=0;i<3;i++){const s=n[i+3]-n[i];s>e&&(e=s,t=i)}return t}function Ud(n,t){t.set(n)}function Nd(n,t,e){let i,s;for(let r=0;r<3;r++){const o=r+3;i=n[r],s=t[r],e[r]=i<s?i:s,i=n[o],s=t[o],e[o]=i>s?i:s}}function il(n,t,e){for(let i=0;i<3;i++){const s=t[n+2*i],r=t[n+2*i+1],o=s-r,a=s+r;o<e[i]&&(e[i]=o),a>e[i+3]&&(e[i+3]=a)}}function zo(n){const t=n[3]-n[0],e=n[4]-n[1],i=n[5]-n[2];return 2*(t*e+e*i+i*t)}function Fe(n,t){return t[n+15]===Wm}function en(n,t){return t[n+6]}function an(n,t){return t[n+14]}function He(n){return n+Ne}function Ve(n,t){const e=t[n+6];return n+e*Ne}function jf(n,t){return t[n+7]}function Wc(n,t,e,i,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,_=-1/0,v=-1/0,m=-1/0;const p=n.offset||0;for(let x=(t-p)*6,y=(t+e-p)*6;x<y;x+=6){const g=n[x+0],T=n[x+1],b=g-T,E=g+T;b<r&&(r=b),E>l&&(l=E),g<h&&(h=g),g>_&&(_=g);const A=n[x+2],S=n[x+3],M=A-S,R=A+S;M<o&&(o=M),R>c&&(c=R),A<f&&(f=A),A>v&&(v=A);const P=n[x+4],L=n[x+5],U=P-L,F=P+L;U<a&&(a=U),F>u&&(u=F),P<d&&(d=P),P>m&&(m=P)}i[0]=r,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=u,s[0]=h,s[1]=f,s[2]=d,s[3]=_,s[4]=v,s[5]=m}const ki=32,FE=(n,t)=>n.candidate-t.candidate,fs=new Array(ki).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),sl=new Float32Array(6);function OE(n,t,e,i,s,r){let o=-1,a=0;if(r===Gm)o=Id(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===UE)o=Id(n),o!==-1&&(a=BE(e,i,s,o));else if(r===NE){const l=zo(n);let c=Gc*s;const u=e.offset||0,h=(i-u)*6,f=(i+s-u)*6;for(let d=0;d<3;d++){const _=t[d],p=(t[d+3]-_)/ki;if(s<ki/4){const x=[...fs];x.length=s;let y=0;for(let T=h;T<f;T+=6,y++){const b=x[y];b.candidate=e[T+2*d],b.count=0;const{bounds:E,leftCacheBounds:A,rightCacheBounds:S}=b;for(let M=0;M<3;M++)S[M]=1/0,S[M+3]=-1/0,A[M]=1/0,A[M+3]=-1/0,E[M]=1/0,E[M+3]=-1/0;il(T,e,E)}x.sort(FE);let g=s;for(let T=0;T<g;T++){const b=x[T];for(;T+1<g&&x[T+1].candidate===b.candidate;)x.splice(T+1,1),g--}for(let T=h;T<f;T+=6){const b=e[T+2*d];for(let E=0;E<g;E++){const A=x[E];b>=A.candidate?il(T,e,A.rightCacheBounds):(il(T,e,A.leftCacheBounds),A.count++)}}for(let T=0;T<g;T++){const b=x[T],E=b.count,A=s-b.count,S=b.leftCacheBounds,M=b.rightCacheBounds;let R=0;E!==0&&(R=zo(S)/l);let P=0;A!==0&&(P=zo(M)/l);const L=Ld+Gc*(R*E+P*A);L<c&&(o=d,c=L,a=b.candidate)}}else{for(let g=0;g<ki;g++){const T=fs[g];T.count=0,T.candidate=_+p+g*p;const b=T.bounds;for(let E=0;E<3;E++)b[E]=1/0,b[E+3]=-1/0}for(let g=h;g<f;g+=6){let E=~~((e[g+2*d]-_)/p);E>=ki&&(E=ki-1);const A=fs[E];A.count++,il(g,e,A.bounds)}const x=fs[ki-1];Ud(x.bounds,x.rightCacheBounds);for(let g=ki-2;g>=0;g--){const T=fs[g],b=fs[g+1];Nd(T.bounds,b.rightCacheBounds,T.rightCacheBounds)}let y=0;for(let g=0;g<ki-1;g++){const T=fs[g],b=T.count,E=T.bounds,S=fs[g+1].rightCacheBounds;b!==0&&(y===0?Ud(E,sl):Nd(E,sl,sl)),y+=b;let M=0,R=0;y!==0&&(M=zo(sl)/l);const P=s-y;P!==0&&(R=zo(S)/l);const L=Ld+Gc*(M*y+R*P);L<c&&(o=d,c=L,a=T.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function BE(n,t,e,i){let s=0;const r=n.offset;for(let o=t,a=t+e;o<a;o++)s+=n[(o-r)*6+i*2];return s/e}class Xc{constructor(){this.boundingData=new Float32Array(6)}}function zE(n,t,e,i,s,r){let o=i,a=i+s-1;const l=r.pos,c=r.axis*2,u=e.offset||0;for(;;){for(;o<=a&&e[(o-u)*6+c]<l;)o++;for(;o<=a&&e[(a-u)*6+c]>=l;)a--;if(o<a){for(let h=0;h<t;h++){let f=n[o*t+h];n[o*t+h]=n[a*t+h],n[a*t+h]=f}for(let h=0;h<6;h++){const f=o-u,d=a-u,_=e[f*6+h];e[f*6+h]=e[d*6+h],e[d*6+h]=_}o++,a--}else return o}}let qm,Nl,df,Ym;const kE=Math.pow(2,32);function pf(n){return"count"in n?1:1+pf(n.left)+pf(n.right)}function HE(n,t,e){return qm=new Float32Array(e),Nl=new Uint32Array(e),df=new Uint16Array(e),Ym=new Uint8Array(e),mf(n,t)}function mf(n,t){const e=n/4,i=n/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)qm[e+o]=r[o];if(s)return t.buffer?(Ym.set(new Uint8Array(t.buffer),n),n+t.buffer.byteLength):(Nl[e+6]=t.offset,df[i+14]=t.count,df[i+15]=Wm,n+tn);{const{left:o,right:a,splitAxis:l}=t,c=n+tn;let u=mf(c,o);const h=n/tn,d=u/tn-h;if(d>kE)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Nl[e+6]=d,Nl[e+7]=l,mf(u,a)}}function VE(n,t,e,i,s,r){const{maxDepth:o,verbose:a,maxLeafSize:l,strategy:c,onProgress:u}=s,h=n.primitiveBuffer,f=n.primitiveBufferStride,d=new Float32Array(6);let _=!1;const v=new Xc;return Wc(t,e,i,v.boundingData,d),p(v,e,i,d),v;function m(x){u&&u((x-r.offset)/r.count)}function p(x,y,g,T=null,b=0){if(!_&&b>=o&&(_=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),g<=l||b>=o)return m(y+g),x.offset=y,x.count=g,x;const E=OE(x.boundingData,T,t,y,g,c);if(E.axis===-1)return m(y+g),x.offset=y,x.count=g,x;const A=zE(h,f,t,y,g,E);if(A===y||A===y+g)m(y+g),x.offset=y,x.count=g;else{x.splitAxis=E.axis;const S=new Xc,M=y,R=A-y;x.left=S,Wc(t,M,R,S.boundingData,d),p(S,M,R,d,b+1);const P=new Xc,L=A,U=g-R;x.right=P,Wc(t,L,U,P.boundingData,d),p(P,L,U,d,b+1)}return x}}function GE(n,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=n.getRootRanges(t.range),s=i[0],r=i[i.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,n.computePrimitiveBounds(o.offset,o.count,a),n._roots=i.map(l=>{const c=VE(n,a,l.offset,l.count,t,o),u=pf(c),h=new e(tn*u);return HE(0,c,h),h})}class Zf{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class WE{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=i=>{e&&t.push(e),e=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const Me=new WE;let ys,jr;const Fr=[],rl=new Zf(()=>new cn);function XE(n,t,e,i,s,r){ys=rl.getPrimitive(),jr=rl.getPrimitive(),Fr.push(ys,jr),Me.setBuffer(n._roots[t]);const o=_f(0,n.geometry,e,i,s,r);Me.clearBuffer(),rl.releasePrimitive(ys),rl.releasePrimitive(jr),Fr.pop(),Fr.pop();const a=Fr.length;return a>0&&(jr=Fr[a-1],ys=Fr[a-2]),o}function _f(n,t,e,i,s=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=Me;let u=n*2;if(Fe(u,l)){const _=en(n,c),v=an(u,l);return Ae(n,a,ys),i(_,v,!1,o,r+n/Ne,ys)}else{let P=function(U){const{uint16Array:F,uint32Array:k}=Me;let Z=U*2;for(;!Fe(Z,F);)U=He(U),Z=U*2;return en(U,k)},L=function(U){const{uint16Array:F,uint32Array:k}=Me;let Z=U*2;for(;!Fe(Z,F);)U=Ve(U,k),Z=U*2;return en(U,k)+an(Z,F)};var f=P,d=L;const _=He(n),v=Ve(n,c);let m=_,p=v,x,y,g,T;if(s&&(g=ys,T=jr,Ae(m,a,g),Ae(p,a,T),x=s(g),y=s(T),y<x)){m=v,p=_;const U=x;x=y,y=U,g=T}g||(g=ys,Ae(m,a,g));const b=Fe(m*2,l),E=e(g,b,x,o+1,r+m/Ne);let A;if(E===Dd){const U=P(m),k=L(m)-U;A=i(U,k,!0,o+1,r+m/Ne,g)}else A=E&&_f(m,t,e,i,s,r,o+1);if(A)return!0;T=jr,Ae(p,a,T);const S=Fe(p*2,l),M=e(T,S,y,o+1,r+p/Ne);let R;if(M===Dd){const U=P(p),k=L(p)-U;R=i(U,k,!0,o+1,r+p/Ne,T)}else R=M&&_f(p,t,e,i,s,r,o+1);return!!R}}const ta=new Me.constructor,$l=new Me.constructor,ds=new Zf(()=>new cn),Or=new cn,Br=new cn,qc=new cn,Yc=new cn;let $c=!1;function qE(n,t,e,i){if($c)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");$c=!0;const s=n._roots,r=t._roots;let o,a=0,l=0;const c=new ee().copy(e).invert();for(let u=0,h=s.length;u<h;u++){ta.setBuffer(s[u]),l=0;const f=ds.getPrimitive();Ae(0,ta.float32Array,f),f.applyMatrix4(c);for(let d=0,_=r.length;d<_&&($l.setBuffer(r[d]),o=Jn(0,0,e,c,i,a,l,0,0,f),$l.clearBuffer(),l+=r[d].byteLength/tn,!o);d++);if(ds.releasePrimitive(f),ta.clearBuffer(),a+=s[u].byteLength/tn,o)break}return $c=!1,o}function Jn(n,t,e,i,s,r=0,o=0,a=0,l=0,c=null,u=!1){let h,f;u?(h=$l,f=ta):(h=ta,f=$l);const d=h.float32Array,_=h.uint32Array,v=h.uint16Array,m=f.float32Array,p=f.uint32Array,x=f.uint16Array,y=n*2,g=t*2,T=Fe(y,v),b=Fe(g,x);let E=!1;if(b&&T)u?E=s(en(t,p),an(t*2,x),en(n,_),an(n*2,v),l,o+t/Ne,a,r+n/Ne):E=s(en(n,_),an(n*2,v),en(t,p),an(t*2,x),a,r+n/Ne,l,o+t/Ne);else if(b){const A=ds.getPrimitive();Ae(t,m,A),A.applyMatrix4(e);const S=He(n),M=Ve(n,_);Ae(S,d,Or),Ae(M,d,Br);const R=A.intersectsBox(Or),P=A.intersectsBox(Br);E=R&&Jn(t,S,i,e,s,o,r,l,a+1,A,!u)||P&&Jn(t,M,i,e,s,o,r,l,a+1,A,!u),ds.releasePrimitive(A)}else{const A=He(t),S=Ve(t,p);Ae(A,m,qc),Ae(S,m,Yc);const M=c.intersectsBox(qc),R=c.intersectsBox(Yc);if(M&&R)E=Jn(n,A,e,i,s,r,o,a,l+1,c,u)||Jn(n,S,e,i,s,r,o,a,l+1,c,u);else if(M)if(T)E=Jn(n,A,e,i,s,r,o,a,l+1,c,u);else{const P=ds.getPrimitive();P.copy(qc).applyMatrix4(e);const L=He(n),U=Ve(n,_);Ae(L,d,Or),Ae(U,d,Br);const F=P.intersectsBox(Or),k=P.intersectsBox(Br);E=F&&Jn(A,L,i,e,s,o,r,l,a+1,P,!u)||k&&Jn(A,U,i,e,s,o,r,l,a+1,P,!u),ds.releasePrimitive(P)}else if(R)if(T)E=Jn(n,S,e,i,s,r,o,a,l+1,c,u);else{const P=ds.getPrimitive();P.copy(Yc).applyMatrix4(e);const L=He(n),U=Ve(n,_);Ae(L,d,Or),Ae(U,d,Br);const F=P.intersectsBox(Or),k=P.intersectsBox(Br);E=F&&Jn(S,L,i,e,s,o,r,l,a+1,P,!u)||k&&Jn(S,U,i,e,s,o,r,l,a+1,P,!u),ds.releasePrimitive(P)}}return E}const Fd=new cn,zr=new Float32Array(6);class YE{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Xm,...t},GE(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,i,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let h=t,f=t+e;h<f;h++){this.writePrimitiveBounds(h,zr,0);const[d,_,v,m,p,x]=zr;d<r&&(r=d),m>l&&(l=m),_<o&&(o=_),p>c&&(c=p),v<a&&(a=v),x>u&&(u=x)}return i[s+0]=r,i[s+1]=o,i[s+2]=a,i[s+3]=l,i[s+4]=c,i[s+5]=u,i}computePrimitiveBounds(t,e,i){const s=i.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,zr,0);const[a,l,c,u,h,f]=zr,d=(a+u)/2,_=(l+h)/2,v=(c+f)/2,m=(u-a)/2,p=(h-l)/2,x=(f-c)/2,y=(r-s)*6;i[y+0]=d,i[y+1]=m+(Math.abs(d)+m)*Ul,i[y+2]=_,i[y+3]=p+(Math.abs(_)+p)*Ul,i[y+4]=v,i[y+5]=x+(Math.abs(v)+x)*Ul}return i}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let i=0,s=e.length;i<s;i++)e[i]+=t;else{const i=this._roots;for(let s=0;s<i.length;s++){const r=i[s],o=new Uint32Array(r),a=new Uint16Array(r),l=r.byteLength/tn;for(let c=0;c<l;c++){const u=Ne*c,h=2*u;Fe(h,a)&&(o[u+6]+=t)}}}}traverse(t,e=0){const i=this._roots[e],s=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,l=0){const c=a*2,u=Fe(c,r);if(u){const h=s[a+6],f=r[c+14];t(l,u,new Float32Array(i,a*4,6),h,f)}else{const h=He(a),f=Ve(a,s),d=jf(a,s);t(l,u,new Float32Array(i,a*4,6),d)||(o(h,l+1),o(f,l+1))}}}refit(){const t=this._roots;for(let e=0,i=t.length;e<i;e++){const s=t[e],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),l=s.byteLength/tn;for(let c=l-1;c>=0;c--){const u=c*Ne,h=u*2;if(Fe(h,o)){const d=en(u,r),_=an(h,o);this.writePrimitiveRangeBounds(d,_,zr,0),a.set(zr,u)}else{const d=He(u),_=Ve(u,r);for(let v=0;v<3;v++){const m=a[d+v],p=a[d+v+3],x=a[_+v],y=a[_+v+3];a[u+v]=m<x?m:x,a[u+v+3]=p>y?p:y}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{Ae(0,new Float32Array(i),Fd),t.union(Fd)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:i,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(s&&r){const h=s;s=(f,d,_,v,m)=>h(f,d,_,v,m)?!0:a(f,d,this,r,_,v,o)}else s||(r?s=(h,f,d,_)=>a(h,f,this,r,d,_,o):s=(h,f,d)=>d);let l=!1,c=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(l=XE(this,h,i,s,e,c),l)break;c+=d.byteLength/tn}return l}bvhcast(t,e,i){let{intersectsRanges:s}=i;return qE(this,t,e,s)}}function $E(){return typeof SharedArrayBuffer<"u"}function Kf(n){return n.index?n.index.count:n.attributes.position.count}function ac(n){return Kf(n)/3}function jE(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function ZE(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=jE(e,i);n.setIndex(new yn(s,1));for(let r=0;r<e;r++)s[r]=r}}function KE(n,t,e){const i=Kf(n)/e,s=t||n.drawRange,r=s.start/e,o=(s.start+s.count)/e,a=Math.max(0,r),l=Math.min(i,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function JE(n,t){return n.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Od(n,t,e){const i=KE(n,t,e),s=JE(n,e);if(!s.length)return[i];const r=[],o=i.offset,a=i.offset+i.count,l=Kf(n)/e,c=[];for(const f of s){const{offset:d,count:_}=f,v=d,m=isFinite(_)?_:l-d,p=d+m;v<a&&p>o&&(c.push({pos:Math.max(o,v),isStart:!0}),c.push({pos:Math.min(a,p),isStart:!1}))}c.sort((f,d)=>f.pos!==d.pos?f.pos-d.pos:f.type==="end"?-1:1);let u=0,h=null;for(const f of c){const d=f.pos;u!==0&&d!==h&&r.push({offset:h,count:d-h}),u+=f.isStart?1:-1,h=d}return r}function QE(n,t){const e=n[n.length-1],i=e.offset+e.count>2**16,s=n.reduce((c,u)=>c+u.count,0),r=i?4:2,o=t?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=i?new Uint32Array(o):new Uint16Array(o);let l=0;for(let c=0;c<n.length;c++){const{offset:u,count:h}=n[c];for(let f=0;f<h;f++)a[l+f]=u+f;l+=h}return a}class tT extends YE{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!$E())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?i=>this._indirectBuffer[i]:i=>i,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Xm,...e},e[$f]||this.init(e)}init(t){const{geometry:e,primitiveStride:i}=this;if(t.indirect){const s=Od(e,t.range,i),r=QE(s,t.useSharedArrayBuffer);this._indirectBuffer=r}else ZE(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new cn))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Od(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Ji{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r][e];i=l<i?l:i,s=l>s?l:s}this.min=i,this.max=s}setFromPoints(t,e){let i=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],l=t.dot(a);i=l<i?l:i,s=l>s?l:s}this.min=i,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}Ji.prototype.setFromBox=function(){const n=new I;return function(e,i){const s=i.min,r=i.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){n.x=s.x*l+r.x*(1-l),n.y=s.y*c+r.y*(1-c),n.z=s.z*u+r.z*(1-u);const h=e.dot(n);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();const eT=function(){const n=new I,t=new I,e=new I;return function(s,r,o){const a=s.start,l=n,c=r.start,u=t;e.subVectors(a,c),n.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(u),f=u.dot(l),d=u.dot(u),_=e.dot(l),m=l.dot(l)*d-f*f;let p,x;m!==0?p=(h*f-_*d)/m:p=0,x=(h+p*f)/d,o.x=p,o.y=x}}(),Jf=function(){const n=new Lt,t=new I,e=new I;return function(s,r,o,a){eT(s,r,n);let l=n.x,c=n.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=s.start:u=s.end;let h;c<0?h=r.start:h=r.end;const f=t,d=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}}(),nT=function(){const n=new I,t=new I,e=new ni,i=new Xn;return function(r,o){const{radius:a,center:l}=r,{a:c,b:u,c:h}=o;if(i.start=c,i.end=u,i.closestPointToPoint(l,!0,n).distanceTo(l)<=a||(i.start=c,i.end=h,i.closestPointToPoint(l,!0,n).distanceTo(l)<=a)||(i.start=u,i.end=h,i.closestPointToPoint(l,!0,n).distanceTo(l)<=a))return!0;const v=o.getPlane(e);if(Math.abs(v.distanceToPoint(l))<=a){const p=v.projectPoint(l,t);if(o.containsPoint(p))return!0}return!1}}(),iT=["x","y","z"],Hi=1e-15,Bd=Hi*Hi;function Ln(n){return Math.abs(n)<Hi}class qn extends _e{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new Ji),this.points=[this.a,this.b,this.c],this.plane=new ni,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Xn,this.needsUpdate=!0}intersectsSphere(t){return nT(t,this)}update(){const t=this.a,e=this.b,i=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);const c=r[1],u=o[1];c.subVectors(t,e),u.setFromPoints(c,s);const h=r[2],f=o[2];h.subVectors(e,i),f.setFromPoints(h,s);const d=r[3],_=o[3];d.subVectors(i,t),_.setFromPoints(d,s);const v=c.length(),m=h.length(),p=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<Hi?m<Hi||p<Hi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(i)):m<Hi?p<Hi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<Hi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(i),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}qn.prototype.closestPointToSegment=function(){const n=new I,t=new I,e=new Xn;return function(s,r=null,o=null){const{start:a,end:l}=s,c=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;e.start.copy(c[f]),e.end.copy(c[d]),Jf(e,s,n,t),u=n.distanceToSquared(t),u<h&&(h=u,r&&r.copy(n),o&&o.copy(t))}return this.closestPointToPoint(a,n),u=a.distanceToSquared(n),u<h&&(h=u,r&&r.copy(n),o&&o.copy(a)),this.closestPointToPoint(l,n),u=l.distanceToSquared(n),u<h&&(h=u,r&&r.copy(n),o&&o.copy(l)),Math.sqrt(h)}}();qn.prototype.intersectsTriangle=function(){const n=new qn,t=new Ji,e=new Ji,i=new I,s=new I,r=new I,o=new I,a=new Xn,l=new Xn,c=new I,u=new Lt,h=new Lt;function f(y,g,T,b){const E=i;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?E.copy(y.plane.normal):E.copy(g.plane.normal);const A=y.satBounds,S=y.satAxes;for(let P=1;P<4;P++){const L=A[P],U=S[P];if(t.setFromPoints(U,g.points),L.isSeparated(t)||(o.copy(E).cross(U),t.setFromPoints(o,y.points),e.setFromPoints(o,g.points),t.isSeparated(e)))return!1}const M=g.satBounds,R=g.satAxes;for(let P=1;P<4;P++){const L=M[P],U=R[P];if(t.setFromPoints(U,y.points),L.isSeparated(t)||(o.crossVectors(E,U),t.setFromPoints(o,y.points),e.setFromPoints(o,g.points),t.isSeparated(e)))return!1}return T&&(b||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),T.start.set(0,0,0),T.end.set(0,0,0)),!0}function d(y,g,T,b,E,A,S,M,R,P,L){let U=S/(S-M);P.x=b+(E-b)*U,L.start.subVectors(g,y).multiplyScalar(U).add(y),U=S/(S-R),P.y=b+(A-b)*U,L.end.subVectors(T,y).multiplyScalar(U).add(y)}function _(y,g,T,b,E,A,S,M,R,P,L){if(E>0)d(y.c,y.a,y.b,b,g,T,R,S,M,P,L);else if(A>0)d(y.b,y.a,y.c,T,g,b,M,S,R,P,L);else if(M*R>0||S!=0)d(y.a,y.b,y.c,g,T,b,S,M,R,P,L);else if(M!=0)d(y.b,y.a,y.c,T,g,b,M,S,R,P,L);else if(R!=0)d(y.c,y.a,y.b,b,g,T,R,S,M,P,L);else return!0;return!1}function v(y,g,T,b){const E=g.degenerateSegment,A=y.plane.distanceToPoint(E.start),S=y.plane.distanceToPoint(E.end);return Ln(A)?Ln(S)?f(y,g,T,b):(T&&(T.start.copy(E.start),T.end.copy(E.start)),y.containsPoint(E.start)):Ln(S)?(T&&(T.start.copy(E.end),T.end.copy(E.end)),y.containsPoint(E.end)):y.plane.intersectLine(E,i)!=null?(T&&(T.start.copy(i),T.end.copy(i)),y.containsPoint(i)):!1}function m(y,g,T){const b=g.a;return Ln(y.plane.distanceToPoint(b))&&y.containsPoint(b)?(T&&(T.start.copy(b),T.end.copy(b)),!0):!1}function p(y,g,T){const b=y.degenerateSegment,E=g.a;return b.closestPointToPoint(E,!0,i),E.distanceToSquared(i)<Bd?(T&&(T.start.copy(E),T.end.copy(E)),!0):!1}function x(y,g,T,b){if(y.isDegenerateIntoSegment)if(g.isDegenerateIntoSegment){const E=y.degenerateSegment,A=g.degenerateSegment,S=s,M=r;E.delta(S),A.delta(M);const R=i.subVectors(A.start,E.start),P=S.x*M.y-S.y*M.x;if(Ln(P))return!1;const L=(R.x*M.y-R.y*M.x)/P,U=-(S.x*R.y-S.y*R.x)/P;if(L<0||L>1||U<0||U>1)return!1;const F=E.start.z+S.z*L,k=A.start.z+M.z*U;return Ln(F-k)?(T&&(T.start.copy(E.start).addScaledVector(S,L),T.end.copy(E.start).addScaledVector(S,L)),!0):!1}else return g.isDegenerateIntoPoint?p(y,g,T):v(g,y,T,b);else{if(y.isDegenerateIntoPoint)return g.isDegenerateIntoPoint?g.a.distanceToSquared(y.a)<Bd?(T&&(T.start.copy(y.a),T.end.copy(y.a)),!0):!1:g.isDegenerateIntoSegment?p(g,y,T):m(g,y,T);if(g.isDegenerateIntoPoint)return m(y,g,T);if(g.isDegenerateIntoSegment)return v(y,g,T,b)}}return function(g,T=null,b=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(n.copy(g),n.update(),g=n);const E=x(this,g,T,b);if(E!==void 0)return E;const A=this.plane,S=g.plane;let M=S.distanceToPoint(this.a),R=S.distanceToPoint(this.b),P=S.distanceToPoint(this.c);Ln(M)&&(M=0),Ln(R)&&(R=0),Ln(P)&&(P=0);const L=M*R,U=M*P;if(L>0&&U>0)return!1;let F=A.distanceToPoint(g.a),k=A.distanceToPoint(g.b),Z=A.distanceToPoint(g.c);Ln(F)&&(F=0),Ln(k)&&(k=0),Ln(Z)&&(Z=0);const Y=F*k,ot=F*Z;if(Y>0&&ot>0)return!1;s.copy(A.normal),r.copy(S.normal);const ht=s.cross(r);let yt=0,zt=Math.abs(ht.x);const te=Math.abs(ht.y);te>zt&&(zt=te,yt=1),Math.abs(ht.z)>zt&&(yt=2);const st=iT[yt],St=this.a[st],_t=this.b[st],It=this.c[st],Ot=g.a[st],kt=g.b[st],de=g.c[st];if(_(this,St,_t,It,L,U,M,R,P,u,a))return f(this,g,T,b);if(_(g,Ot,kt,de,Y,ot,F,k,Z,h,l))return f(this,g,T,b);if(u.y<u.x){const Wt=u.y;u.y=u.x,u.x=Wt,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(h.y<h.x){const Wt=h.y;h.y=h.x,h.x=Wt,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return u.y<h.x||h.y<u.x?!1:(T&&(h.x>u.x?T.start.copy(l.start):T.start.copy(a.start),h.y<u.y?T.end.copy(l.end):T.end.copy(a.end)),!0)}}();qn.prototype.distanceToPoint=function(){const n=new I;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}}();qn.prototype.distanceToTriangle=function(){const n=new I,t=new I,e=["a","b","c"],i=new Xn,s=new Xn;return function(o,a=null,l=null){const c=a||l?i:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=e[h],_=o[d];this.closestPointToPoint(_,n),f=_.distanceToSquared(n),f<u&&(u=f,a&&a.copy(n),l&&l.copy(_));const v=this[d];o.closestPointToPoint(v,n),f=v.distanceToSquared(n),f<u&&(u=f,a&&a.copy(v),l&&l.copy(n))}for(let h=0;h<3;h++){const f=e[h],d=e[(h+1)%3];i.set(this[f],this[d]);for(let _=0;_<3;_++){const v=e[_],m=e[(_+1)%3];s.set(o[v],o[m]),Jf(i,s,n,t);const p=n.distanceToSquared(t);p<u&&(u=p,a&&a.copy(n),l&&l.copy(t))}}return Math.sqrt(u)}}();class un{constructor(t,e,i){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new ee,this.invMatrix=new ee,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new Ji),this.alignedSatBounds=new Array(3).fill().map(()=>new Ji),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}un.prototype.update=function(){return function(){const t=this.matrix,e=this.min,i=this.max,s=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*c|2*u|4*h,d=s[f];d.x=c?i.x:e.x,d.y=u?i.y:e.y,d.z=h?i.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){const u=o[c],h=r[c],f=1<<c,d=s[f];u.subVectors(a,d),h.setFromPoints(u,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();un.prototype.intersectsBox=function(){const n=new Ji;return function(e){this.needsUpdate&&this.update();const i=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(n.min=i.x,n.max=s.x,a[0].isSeparated(n)||(n.min=i.y,n.max=s.y,a[1].isSeparated(n))||(n.min=i.z,n.max=s.z,a[2].isSeparated(n)))return!1;for(let l=0;l<3;l++){const c=o[l],u=r[l];if(n.setFromBox(c,e),u.isSeparated(n))return!1}return!0}}();un.prototype.intersectsTriangle=function(){const n=new qn,t=new Array(3),e=new Ji,i=new Ji,s=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(n.copy(o),n.update(),o=n);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){const d=a[f],_=l[f];if(e.setFromPoints(_,t),d.isSeparated(e))return!1}const c=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){const d=c[f],_=u[f];if(e.setFromPoints(_,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){const d=l[f];for(let _=0;_<4;_++){const v=u[_];if(s.crossVectors(d,v),e.setFromPoints(s,t),i.setFromPoints(s,h),e.isSeparated(i))return!1}}return!0}}();un.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();un.prototype.distanceToPoint=function(){const n=new I;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}}();un.prototype.distanceToBox=function(){const n=["x","y","z"],t=new Array(12).fill().map(()=>new Xn),e=new Array(12).fill().map(()=>new Xn),i=new I,s=new I;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,i),o.closestPointToPoint(i,s),l&&l.copy(i),c&&c.copy(s)),0;const u=a*a,h=o.min,f=o.max,d=this.points;let _=1/0;for(let m=0;m<8;m++){const p=d[m];s.copy(p).clamp(h,f);const x=p.distanceToSquared(s);if(x<_&&(_=x,l&&l.copy(p),c&&c.copy(s),x<u))return Math.sqrt(x)}let v=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const y=(m+1)%3,g=(m+2)%3,T=p<<y|x<<g,b=1<<m|p<<y|x<<g,E=d[T],A=d[b];t[v].set(E,A);const M=n[m],R=n[y],P=n[g],L=e[v],U=L.start,F=L.end;U[M]=h[M],U[R]=p?h[R]:f[R],U[P]=x?h[P]:f[R],F[M]=f[M],F[R]=p?h[R]:f[R],F[P]=x?h[P]:f[R],v++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){s.x=m?f.x:h.x,s.y=p?f.y:h.y,s.z=x?f.z:h.z,this.closestPointToPoint(s,i);const y=s.distanceToSquared(i);if(y<_&&(_=y,l&&l.copy(i),c&&c.copy(s),y<u))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=t[m];for(let x=0;x<12;x++){const y=e[x];Jf(p,y,i,s);const g=i.distanceToSquared(s);if(g<_&&(_=g,l&&l.copy(i),c&&c.copy(s),g<u))return Math.sqrt(g)}}return Math.sqrt(_)}}();class sT extends Zf{constructor(){super(()=>new qn)}}const Hn=new sT,ko=new I,jc=new I;function rT(n,t,e={},i=0,s=1/0){const r=i*i,o=s*s;let a=1/0,l=null;if(n.shapecast({boundsTraverseOrder:u=>(ko.copy(t).clamp(u.min,u.max),ko.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,ko);const f=t.distanceToSquared(ko);return f<a&&(jc.copy(ko),a=f,l=h),f<r}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(jc):e.point=jc.clone(),e.distance=c,e.faceIndex=l,e}const ol=parseInt(va)>=169,oT=parseInt(va)<=161,ks=new I,Hs=new I,Vs=new I,al=new Lt,ll=new Lt,cl=new Lt,zd=new I,kd=new I,Hd=new I,Ho=new I;function aT(n,t,e,i,s,r,o,a){let l;if(r===ln?l=n.intersectTriangle(i,e,t,!0,s):l=n.intersectTriangle(t,e,i,r!==kn,s),l===null)return null;const c=n.origin.distanceTo(s);return c<o||c>a?null:{distance:c,point:s.clone()}}function Vd(n,t,e,i,s,r,o,a,l,c,u){ks.fromBufferAttribute(t,r),Hs.fromBufferAttribute(t,o),Vs.fromBufferAttribute(t,a);const h=aT(n,ks,Hs,Vs,Ho,l,c,u);if(h){if(i){al.fromBufferAttribute(i,r),ll.fromBufferAttribute(i,o),cl.fromBufferAttribute(i,a),h.uv=new Lt;const d=_e.getInterpolation(Ho,ks,Hs,Vs,al,ll,cl,h.uv);ol||(h.uv=d)}if(s){al.fromBufferAttribute(s,r),ll.fromBufferAttribute(s,o),cl.fromBufferAttribute(s,a),h.uv1=new Lt;const d=_e.getInterpolation(Ho,ks,Hs,Vs,al,ll,cl,h.uv1);ol||(h.uv1=d),oT&&(h.uv2=h.uv1)}if(e){zd.fromBufferAttribute(e,r),kd.fromBufferAttribute(e,o),Hd.fromBufferAttribute(e,a),h.normal=new I;const d=_e.getInterpolation(Ho,ks,Hs,Vs,zd,kd,Hd,h.normal);h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1),ol||(h.normal=d)}const f={a:r,b:o,c:a,normal:new I,materialIndex:0};if(_e.getNormal(ks,Hs,Vs,f.normal),h.face=f,h.faceIndex=r,ol){const d=new I;_e.getBarycoord(Ho,ks,Hs,Vs,d),h.barycoord=d}}return h}function Gd(n){return n&&n.isMaterial?n.side:n}function lc(n,t,e,i,s,r,o){const a=i*3;let l=a+0,c=a+1,u=a+2;const{index:h,groups:f}=n;n.index&&(l=h.getX(l),c=h.getX(c),u=h.getX(u));const{position:d,normal:_,uv:v,uv1:m}=n.attributes;if(Array.isArray(t)){const p=i*3;for(let x=0,y=f.length;x<y;x++){const{start:g,count:T,materialIndex:b}=f[x];if(p>=g&&p<g+T){const E=Gd(t[b]),A=Vd(e,d,_,v,m,l,c,u,E,r,o);if(A)if(A.faceIndex=i,A.face.materialIndex=b,s)s.push(A);else return A}}}else{const p=Gd(t),x=Vd(e,d,_,v,m,l,c,u,p,r,o);if(x)if(x.faceIndex=i,x.face.materialIndex=0,s)s.push(x);else return x}return null}function Ie(n,t,e,i){const s=n.a,r=n.b,o=n.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),s.x=i.getX(a),s.y=i.getY(a),s.z=i.getZ(a),r.x=i.getX(l),r.y=i.getY(l),r.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function lT(n,t,e,i,s,r,o,a){const{geometry:l,_indirectBuffer:c}=n;for(let u=i,h=i+s;u<h;u++)lc(l,t,e,u,r,o,a)}function cT(n,t,e,i,s,r,o){const{geometry:a,_indirectBuffer:l}=n;let c=1/0,u=null;for(let h=i,f=i+s;h<f;h++){let d;d=lc(a,t,e,h,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function uT(n,t,e,i,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=n,h=t+n;u<h;u++){let f;if(f=u,Ie(o,f*3,l,c),o.needsUpdate=!0,i(o,f,s,r))return!0}return!1}function fT(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=n._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(f,d,_=!1){const v=f*2;if(Fe(v,a)){const m=en(f,o),p=an(v,a);let x=1/0,y=1/0,g=1/0,T=-1/0,b=-1/0,E=-1/0;for(let A=3*m,S=3*(m+p);A<S;A++){let M=i[A];const R=s.getX(M),P=s.getY(M),L=s.getZ(M);R<x&&(x=R),R>T&&(T=R),P<y&&(y=P),P>b&&(b=P),L<g&&(g=L),L>E&&(E=L)}return l[f+0]!==x||l[f+1]!==y||l[f+2]!==g||l[f+3]!==T||l[f+4]!==b||l[f+5]!==E?(l[f+0]=x,l[f+1]=y,l[f+2]=g,l[f+3]=T,l[f+4]=b,l[f+5]=E,!0):!1}else{const m=He(f),p=Ve(f,o);let x=_,y=!1,g=!1;if(t){if(!x){const M=m/Ne+d/tn,R=p/Ne+d/tn;y=t.has(M),g=t.has(R),x=!y&&!g}}else y=!0,g=!0;const T=x||y,b=x||g;let E=!1;T&&(E=h(m,d,x));let A=!1;b&&(A=h(p,d,x));const S=E||A;if(S)for(let M=0;M<3;M++){const R=m+M,P=p+M,L=l[R],U=l[R+3],F=l[P],k=l[P+3];l[f+M]=L<F?L:F,l[f+M+3]=U>k?U:k}return S}}}function Ls(n,t,e,i,s){let r,o,a,l,c,u;const h=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,_=e.origin.x,v=e.origin.y,m=e.origin.z;let p=t[n],x=t[n+3],y=t[n+1],g=t[n+3+1],T=t[n+2],b=t[n+3+2];return h>=0?(r=(p-_)*h,o=(x-_)*h):(r=(x-_)*h,o=(p-_)*h),f>=0?(a=(y-v)*f,l=(g-v)*f):(a=(g-v)*f,l=(y-v)*f),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),d>=0?(c=(T-m)*d,u=(b-m)*d):(c=(b-m)*d,u=(T-m)*d),r>u||c>o)?!1:((c>r||r!==r)&&(r=c),(u<o||o!==o)&&(o=u),r<=s&&o>=i)}function hT(n,t,e,i,s,r,o,a){const{geometry:l,_indirectBuffer:c}=n;for(let u=i,h=i+s;u<h;u++){let f=c?c[u]:u;lc(l,t,e,f,r,o,a)}}function dT(n,t,e,i,s,r,o){const{geometry:a,_indirectBuffer:l}=n;let c=1/0,u=null;for(let h=i,f=i+s;h<f;h++){let d;d=lc(a,t,e,l?l[h]:h,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function pT(n,t,e,i,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=n,h=t+n;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),Ie(o,f*3,l,c),o.needsUpdate=!0,i(o,f,s,r))return!0}return!1}function mT(n,t,e,i,s,r,o){Me.setBuffer(n._roots[t]),gf(0,n,e,i,s,r,o),Me.clearBuffer()}function gf(n,t,e,i,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=Me,u=n*2;if(Fe(u,l)){const f=en(n,c),d=an(u,l);lT(t,e,i,f,d,s,r,o)}else{const f=He(n);Ls(f,a,i,r,o)&&gf(f,t,e,i,s,r,o);const d=Ve(n,c);Ls(d,a,i,r,o)&&gf(d,t,e,i,s,r,o)}}const _T=["x","y","z"];function gT(n,t,e,i,s,r){Me.setBuffer(n._roots[t]);const o=vf(0,n,e,i,s,r);return Me.clearBuffer(),o}function vf(n,t,e,i,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=Me;let c=n*2;if(Fe(c,a)){const h=en(n,l),f=an(c,a);return cT(t,e,i,h,f,s,r)}else{const h=jf(n,l),f=_T[h],_=i.direction[f]>=0;let v,m;_?(v=He(n),m=Ve(n,l)):(v=Ve(n,l),m=He(n));const x=Ls(v,o,i,s,r)?vf(v,t,e,i,s,r):null;if(x){const T=x.point[f];if(_?T<=o[m+h]:T>=o[m+h+3])return x}const g=Ls(m,o,i,s,r)?vf(m,t,e,i,s,r):null;return x&&g?x.distance<=g.distance?x:g:x||g||null}}const ul=new cn,kr=new qn,Hr=new qn,Vo=new ee,Wd=new un,fl=new un;function vT(n,t,e,i){Me.setBuffer(n._roots[t]);const s=xf(0,n,e,i);return Me.clearBuffer(),s}function xf(n,t,e,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=Me;let l=n*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Wd.set(e.boundingBox.min,e.boundingBox.max,i),s=Wd),Fe(l,o)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,_=e.attributes.position,v=en(n,a),m=an(l,o);if(Vo.copy(i).invert(),e.boundsTree)return Ae(n,r,fl),fl.matrix.copy(Vo),fl.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>fl.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(i),x.b.applyMatrix4(i),x.c.applyMatrix4(i),x.needsUpdate=!0;for(let y=v*3,g=(m+v)*3;y<g;y+=3)if(Ie(Hr,y,h,f),Hr.needsUpdate=!0,x.intersectsTriangle(Hr))return!0;return!1}});{const p=ac(e);for(let x=v*3,y=(m+v)*3;x<y;x+=3){Ie(kr,x,h,f),kr.a.applyMatrix4(Vo),kr.b.applyMatrix4(Vo),kr.c.applyMatrix4(Vo),kr.needsUpdate=!0;for(let g=0,T=p*3;g<T;g+=3)if(Ie(Hr,g,d,_),Hr.needsUpdate=!0,kr.intersectsTriangle(Hr))return!0}}}else{const u=He(n),h=Ve(n,a);return Ae(u,r,ul),!!(s.intersectsBox(ul)&&xf(u,t,e,i,s)||(Ae(h,r,ul),s.intersectsBox(ul)&&xf(h,t,e,i,s)))}}const hl=new ee,Zc=new un,Go=new un,xT=new I,yT=new I,MT=new I,ST=new I;function ET(n,t,e,i={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Zc.set(t.boundingBox.min,t.boundingBox.max,e),Zc.needsUpdate=!0;const a=n.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,h=t.index,f=Hn.getPrimitive(),d=Hn.getPrimitive();let _=xT,v=yT,m=null,p=null;s&&(m=MT,p=ST);let x=1/0,y=null,g=null;return hl.copy(e).invert(),Go.matrix.copy(hl),n.shapecast({boundsTraverseOrder:T=>Zc.distanceToBox(T),intersectsBounds:(T,b,E)=>E<x&&E<o?(b&&(Go.min.copy(T.min),Go.max.copy(T.max),Go.needsUpdate=!0),!0):!1,intersectsRange:(T,b)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>Go.distanceToBox(A),intersectsBounds:(A,S,M)=>M<x&&M<o,intersectsRange:(A,S)=>{for(let M=A,R=A+S;M<R;M++){Ie(d,3*M,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let P=T,L=T+b;P<L;P++){Ie(f,3*P,c,l),f.needsUpdate=!0;const U=f.distanceToTriangle(d,_,m);if(U<x&&(v.copy(_),p&&p.copy(m),x=U,y=P,g=M),U<r)return!0}}}});{const E=ac(t);for(let A=0,S=E;A<S;A++){Ie(d,3*A,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=T,R=T+b;M<R;M++){Ie(f,3*M,c,l),f.needsUpdate=!0;const P=f.distanceToTriangle(d,_,m);if(P<x&&(v.copy(_),p&&p.copy(m),x=P,y=M,g=A),P<r)return!0}}}}}),Hn.releasePrimitive(f),Hn.releasePrimitive(d),x===1/0?null:(i.point?i.point.copy(v):i.point=v.clone(),i.distance=x,i.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(hl),v.applyMatrix4(hl),s.distance=v.sub(s.point).length(),s.faceIndex=g),i)}function TT(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=n._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(f,d,_=!1){const v=f*2;if(Fe(v,a)){const m=en(f,o),p=an(v,a);let x=1/0,y=1/0,g=1/0,T=-1/0,b=-1/0,E=-1/0;for(let A=m,S=m+p;A<S;A++){const M=3*n.resolveTriangleIndex(A);for(let R=0;R<3;R++){let P=M+R;P=i?i[P]:P;const L=s.getX(P),U=s.getY(P),F=s.getZ(P);L<x&&(x=L),L>T&&(T=L),U<y&&(y=U),U>b&&(b=U),F<g&&(g=F),F>E&&(E=F)}}return l[f+0]!==x||l[f+1]!==y||l[f+2]!==g||l[f+3]!==T||l[f+4]!==b||l[f+5]!==E?(l[f+0]=x,l[f+1]=y,l[f+2]=g,l[f+3]=T,l[f+4]=b,l[f+5]=E,!0):!1}else{const m=He(f),p=Ve(f,o);let x=_,y=!1,g=!1;if(t){if(!x){const M=m/Ne+d/tn,R=p/Ne+d/tn;y=t.has(M),g=t.has(R),x=!y&&!g}}else y=!0,g=!0;const T=x||y,b=x||g;let E=!1;T&&(E=h(m,d,x));let A=!1;b&&(A=h(p,d,x));const S=E||A;if(S)for(let M=0;M<3;M++){const R=m+M,P=p+M,L=l[R],U=l[R+3],F=l[P],k=l[P+3];l[f+M]=L<F?L:F,l[f+M+3]=U>k?U:k}return S}}}function bT(n,t,e,i,s,r,o){Me.setBuffer(n._roots[t]),yf(0,n,e,i,s,r,o),Me.clearBuffer()}function yf(n,t,e,i,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=Me,u=n*2;if(Fe(u,l)){const f=en(n,c),d=an(u,l);hT(t,e,i,f,d,s,r,o)}else{const f=He(n);Ls(f,a,i,r,o)&&yf(f,t,e,i,s,r,o);const d=Ve(n,c);Ls(d,a,i,r,o)&&yf(d,t,e,i,s,r,o)}}const AT=["x","y","z"];function wT(n,t,e,i,s,r){Me.setBuffer(n._roots[t]);const o=Mf(0,n,e,i,s,r);return Me.clearBuffer(),o}function Mf(n,t,e,i,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=Me;let c=n*2;if(Fe(c,a)){const h=en(n,l),f=an(c,a);return dT(t,e,i,h,f,s,r)}else{const h=jf(n,l),f=AT[h],_=i.direction[f]>=0;let v,m;_?(v=He(n),m=Ve(n,l)):(v=Ve(n,l),m=He(n));const x=Ls(v,o,i,s,r)?Mf(v,t,e,i,s,r):null;if(x){const T=x.point[f];if(_?T<=o[m+h]:T>=o[m+h+3])return x}const g=Ls(m,o,i,s,r)?Mf(m,t,e,i,s,r):null;return x&&g?x.distance<=g.distance?x:g:x||g||null}}const dl=new cn,Vr=new qn,Gr=new qn,Wo=new ee,Xd=new un,pl=new un;function RT(n,t,e,i){Me.setBuffer(n._roots[t]);const s=Sf(0,n,e,i);return Me.clearBuffer(),s}function Sf(n,t,e,i,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=Me;let l=n*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Xd.set(e.boundingBox.min,e.boundingBox.max,i),s=Xd),Fe(l,o)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,_=e.attributes.position,v=en(n,a),m=an(l,o);if(Wo.copy(i).invert(),e.boundsTree)return Ae(n,r,pl),pl.matrix.copy(Wo),pl.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>pl.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(i),x.b.applyMatrix4(i),x.c.applyMatrix4(i),x.needsUpdate=!0;for(let y=v,g=m+v;y<g;y++)if(Ie(Gr,3*t.resolveTriangleIndex(y),h,f),Gr.needsUpdate=!0,x.intersectsTriangle(Gr))return!0;return!1}});{const p=ac(e);for(let x=v,y=m+v;x<y;x++){const g=t.resolveTriangleIndex(x);Ie(Vr,3*g,h,f),Vr.a.applyMatrix4(Wo),Vr.b.applyMatrix4(Wo),Vr.c.applyMatrix4(Wo),Vr.needsUpdate=!0;for(let T=0,b=p*3;T<b;T+=3)if(Ie(Gr,T,d,_),Gr.needsUpdate=!0,Vr.intersectsTriangle(Gr))return!0}}}else{const u=He(n),h=Ve(n,a);return Ae(u,r,dl),!!(s.intersectsBox(dl)&&Sf(u,t,e,i,s)||(Ae(h,r,dl),s.intersectsBox(dl)&&Sf(h,t,e,i,s)))}}const ml=new ee,Kc=new un,Xo=new un,CT=new I,PT=new I,DT=new I,LT=new I;function IT(n,t,e,i={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Kc.set(t.boundingBox.min,t.boundingBox.max,e),Kc.needsUpdate=!0;const a=n.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,h=t.index,f=Hn.getPrimitive(),d=Hn.getPrimitive();let _=CT,v=PT,m=null,p=null;s&&(m=DT,p=LT);let x=1/0,y=null,g=null;return ml.copy(e).invert(),Xo.matrix.copy(ml),n.shapecast({boundsTraverseOrder:T=>Kc.distanceToBox(T),intersectsBounds:(T,b,E)=>E<x&&E<o?(b&&(Xo.min.copy(T.min),Xo.max.copy(T.max),Xo.needsUpdate=!0),!0):!1,intersectsRange:(T,b)=>{if(t.boundsTree){const E=t.boundsTree;return E.shapecast({boundsTraverseOrder:A=>Xo.distanceToBox(A),intersectsBounds:(A,S,M)=>M<x&&M<o,intersectsRange:(A,S)=>{for(let M=A,R=A+S;M<R;M++){const P=E.resolveTriangleIndex(M);Ie(d,3*P,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let L=T,U=T+b;L<U;L++){const F=n.resolveTriangleIndex(L);Ie(f,3*F,c,l),f.needsUpdate=!0;const k=f.distanceToTriangle(d,_,m);if(k<x&&(v.copy(_),p&&p.copy(m),x=k,y=L,g=M),k<r)return!0}}}})}else{const E=ac(t);for(let A=0,S=E;A<S;A++){Ie(d,3*A,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=T,R=T+b;M<R;M++){const P=n.resolveTriangleIndex(M);Ie(f,3*P,c,l),f.needsUpdate=!0;const L=f.distanceToTriangle(d,_,m);if(L<x&&(v.copy(_),p&&p.copy(m),x=L,y=M,g=A),L<r)return!0}}}}}),Hn.releasePrimitive(f),Hn.releasePrimitive(d),x===1/0?null:(i.point?i.point.copy(v):i.point=v.clone(),i.distance=x,i.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(ml),v.applyMatrix4(ml),s.distance=v.sub(s.point).length(),s.faceIndex=g),i)}function qd(n,t,e){return n===null?null:(n.point.applyMatrix4(t.matrixWorld),n.distance=n.point.distanceTo(e.ray.origin),n.object=t,n)}const _l=new un,gl=new Ro,Yd=new I,$d=new ee,jd=new I,Jc=["getX","getY","getZ"];class jl extends tT{static serialize(t,e={}){e={cloneBuffers:!0,...e};const i=t.geometry,s=t._roots,r=t._indirectBuffer,o=i.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=s.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:s,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));const a=new jl(e,{...i,[$f]:!0});if(a._roots=r,a._indirectBuffer=o||null,i.setIndex){const c=e.getIndex();if(c===null){const u=new yn(t.index,1,!1);e.setIndex(u)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a;function l(c){for(let u=0;u<c.length;u++){const h=c[u],f=new Uint32Array(h),d=new Uint16Array(h);for(let _=0,v=h.byteLength/tn;_<v;_++){const m=Ne*_,p=2*m;Fe(p,d)||(f[m+6]=f[m+6]/Ne-_)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,i){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=(r?r[t]:t)*3;let u=c+0,h=c+1,f=c+2;a&&(u=a[u],h=a[h],f=a[f]);for(let d=0;d<3;d++){const _=o[Jc[d]](u),v=o[Jc[d]](h),m=o[Jc[d]](f);let p=_;v<p&&(p=v),m<p&&(p=m);let x=_;v>x&&(x=v),m>x&&(x=m),e[i+d]=p,e[i+d+3]=x}return e}computePrimitiveBounds(t,e,i){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,l=o.normalized;if(t<0||e+t-i.offset>i.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const c=o.array,u=o.offset||0;let h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);const f=["getX","getY","getZ"],d=i.offset;for(let _=t,v=t+e;_<v;_++){const p=(r?r[_]:_)*3,x=(_-d)*6;let y=p+0,g=p+1,T=p+2;a&&(y=a[y],g=a[g],T=a[T]),l||(y=y*h+u,g=g*h+u,T=T*h+u);for(let b=0;b<3;b++){let E,A,S;l?(E=o[f[b]](y),A=o[f[b]](g),S=o[f[b]](T)):(E=c[y+b],A=c[g+b],S=c[T+b]);let M=E;A<M&&(M=A),S<M&&(M=S);let R=E;A>R&&(R=A),S>R&&(R=S);const P=(R-M)/2,L=b*2;i[x+L+0]=M+P,i[x+L+1]=P+(Math.abs(M)+P)*Ul}}return i}raycastObject3D(t,e,i=[]){const{material:s}=t;if(s===void 0)return;$d.copy(t.matrixWorld).invert(),gl.copy(e.ray).applyMatrix4($d),jd.setFromMatrixScale(t.matrixWorld),Yd.copy(gl.direction).multiply(jd);const r=Yd.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let l=this.raycastFirst(gl,s,o,a);l=qd(l,t,e),l&&i.push(l)}else{const l=this.raycast(gl,s,o,a);for(let c=0,u=l.length;c<u;c++){const h=qd(l[c],t,e);h&&i.push(h)}}return i}refit(t=null){return(this.indirect?TT:fT)(this,t)}raycast(t,e=Ti,i=0,s=1/0){const r=this._roots,o=[],a=this.indirect?bT:mT;for(let l=0,c=r.length;l<c;l++)a(this,l,e,t,o,i,s);return o}raycastFirst(t,e=Ti,i=0,s=1/0){const r=this._roots;let o=null;const a=this.indirect?wT:gT;for(let l=0,c=r.length;l<c;l++){const u=a(this,l,e,t,i,s);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(t,e){let i=!1;const s=this._roots,r=this.indirect?RT:vT;for(let o=0,a=s.length;o<a&&(i=r(this,o,t,e),!i);o++);return i}shapecast(t){const e=Hn.getPrimitive(),i=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?pT:uT});return Hn.releasePrimitive(e),i}bvhcast(t,e,i){let{intersectsRanges:s,intersectsTriangles:r}=i;const o=Hn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?_=>{const v=this.resolveTriangleIndex(_);Ie(o,v*3,a,l)}:_=>{Ie(o,_*3,a,l)},u=Hn.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?_=>{const v=t.resolveTriangleIndex(_);Ie(u,v*3,h,f)}:_=>{Ie(u,_*3,h,f)};if(r){if(!(t instanceof jl))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const _=(v,m,p,x,y,g,T,b)=>{for(let E=p,A=p+x;E<A;E++){d(E),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let S=v,M=v+m;S<M;S++)if(c(S),o.needsUpdate=!0,r(o,u,S,E,y,g,T,b))return!0}return!1};if(s){const v=s;s=function(m,p,x,y,g,T,b,E){return v(m,p,x,y,g,T,b,E)?!0:_(m,p,x,y,g,T,b,E)}}else s=_}return super.bvhcast(t,e,{intersectsRanges:s})}intersectsBox(t,e){return _l.set(t.min,t.max,e),_l.needsUpdate=!0,this.shapecast({intersectsBounds:i=>_l.intersectsBox(i),intersectsTriangle:i=>_l.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},s={},r=0,o=1/0){return(this.indirect?IT:ET)(this,t,e,i,s,r,o)}closestPointToPoint(t,e={},i=0,s=1/0){return rT(this,t,e,i,s)}}const $m=1e-6,UT=$m*.5,jm=Math.pow(10,-Math.log10($m)),NT=UT*jm;function Si(n){return~~(n*jm+NT)}function FT(n){return`${Si(n.x)},${Si(n.y)}`}function Zd(n){return`${Si(n.x)},${Si(n.y)},${Si(n.z)}`}function OT(n){return`${Si(n.x)},${Si(n.y)},${Si(n.z)},${Si(n.w)}`}function BT(n,t,e){e.direction.subVectors(t,n).normalize();const i=n.dot(e.direction);return e.origin.copy(n).addScaledVector(e.direction,-i),e}function Zm(){return typeof SharedArrayBuffer<"u"}function zT(n){if(n.buffer instanceof SharedArrayBuffer)return n;const t=n.constructor,e=n.buffer,i=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(i).set(s,0),new t(i)}function kT(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function HT(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=kT(e,i);n.setIndex(new yn(s,1));for(let r=0;r<e;r++)s[r]=r}}function VT(n){return n.index?n.index.count:n.attributes.position.count}function Qf(n){return VT(n)/3}const GT=1e-8,WT=new I;function XT(n){return~~(n/3)}function qT(n){return n%3}function Kd(n,t){return n.start-t.start}function Jd(n,t){return WT.subVectors(t,n.origin).dot(n.direction)}function YT(n,t,e,i=GT){n.sort(Kd),t.sort(Kd);for(let a=0;a<n.length;a++){const l=n[a];for(let c=0;c<t.length;c++){const u=t[c];if(!(u.start>l.end)){if(l.end<u.start||u.end<l.start)continue;if(l.start<=u.start&&l.end>=u.end)r(u.end,l.end)||n.splice(a+1,0,{start:u.end,end:l.end,index:l.index}),l.end=u.start,u.start=0,u.end=0;else if(l.start>=u.start&&l.end<=u.end)r(l.end,u.end)||t.splice(c+1,0,{start:l.end,end:u.end,index:u.index}),u.end=l.start,l.start=0,l.end=0;else if(l.start<=u.start&&l.end<=u.end){const h=l.end;l.end=u.start,u.start=h}else if(l.start>=u.start&&l.end>=u.end){const h=u.end;u.end=l.start,l.start=h}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(l.index).push(u.index),e.get(u.index).push(l.index),o(u)&&(t.splice(c,1),c--),o(l)){n.splice(a,1),a--;break}}}s(n),s(t);function s(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function r(a,l){return Math.abs(l-a)<i}function o(a){return Math.abs(a.end-a.start)<i}}const Qd=1e-5,tp=1e-4;class $T{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,i=t.clone();i.direction.multiplyScalar(-1);let s=1/0,r=null;for(let l=0,c=e.length;l<c;l++){const u=e[l];if(o(u,t)&&o(u,i))continue;const h=a(u,t),f=a(u,i),d=Math.min(h,f);d<s&&(s=d,r=u)}return r;function o(l,c){const u=l.origin.distanceTo(c.origin)>Qd;return l.direction.angleTo(c.direction)>tp||u}function a(l,c){const u=l.origin.distanceTo(c.origin),h=l.direction.angleTo(c.direction);return u/Qd+h/tp}}}const Qc=new I,tu=new I,vl=new Ro;function jT(n,t,e){const i=n.attributes,s=n.index,r=i.position,o=new Map,a=new Map,l=Array.from(t),c=new $T;for(let u=0,h=l.length;u<h;u++){const f=l[u],d=XT(f),_=qT(f);let v=3*d+_,m=3*d+(_+1)%3;s&&(v=s.getX(v),m=s.getX(m)),Qc.fromBufferAttribute(r,v),tu.fromBufferAttribute(r,m),BT(Qc,tu,vl);let p,x=c.findClosestRay(vl);x===null&&(x=vl.clone(),c.addRay(x)),a.has(x)||a.set(x,{forward:[],reverse:[],ray:x}),p=a.get(x);let y=Jd(x,Qc),g=Jd(x,tu);y>g&&([y,g]=[g,y]),vl.direction.dot(x.direction)<0?p.reverse.push({start:y,end:g,index:f}):p.forward.push({start:y,end:g,index:f})}return a.forEach(({forward:u,reverse:h},f)=>{YT(u,h,o,e),u.length===0&&h.length===0&&a.delete(f)}),{disjointConnectivityMap:o,fragmentMap:a}}const ZT=new Lt,eu=new I,KT=new ae,nu=["","",""];class JT{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:~~(i/3)}getSiblingEdgeIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:i%3}getDisjointSiblingTriangleIndices(t,e){const i=t*3+e,s=this.disjointConnections.get(i);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const i=t*3+e,s=this.disjointConnections.get(i);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:i,matchDisjointEdges:s,degenerateEpsilon:r}=this,o=e?y:x,a=new Map,{attributes:l}=t,c=e?Object.keys(l):null,u=t.index,h=l.position;let f=Qf(t);const d=f;let _=0;i&&(_=t.drawRange.start,t.drawRange.count!==1/0&&(f=~~(t.drawRange.count/3)));let v=this.data;(!v||v.length<3*d)&&(v=new Int32Array(3*d)),v.fill(-1);let m=0,p=new Set;for(let g=_,T=f*3+_;g<T;g+=3){const b=g;for(let E=0;E<3;E++){let A=b+E;u&&(A=u.getX(A)),nu[E]=o(A)}for(let E=0;E<3;E++){const A=(E+1)%3,S=nu[E],M=nu[A],R=`${M}_${S}`;if(a.has(R)){const P=b+E,L=a.get(R);v[P]=L,v[L]=P,a.delete(R),m+=2,p.delete(L)}else{const P=`${S}_${M}`,L=b+E;a.set(P,L),p.add(L)}}}if(s){const{fragmentMap:g,disjointConnectivityMap:T}=jT(t,p,r);p.clear(),g.forEach(({forward:b,reverse:E})=>{b.forEach(({index:A})=>p.add(A)),E.forEach(({index:A})=>p.add(A))}),this.unmatchedDisjointEdges=g,this.disjointConnections=T,m=f*3-p.size}this.matchedEdges=m,this.unmatchedEdges=p.size,this.data=v;function x(g){return eu.fromBufferAttribute(h,g),Zd(eu)}function y(g){let T="";for(let b=0,E=c.length;b<E;b++){const A=l[c[b]];let S;switch(A.itemSize){case 1:S=Si(A.getX(g));break;case 2:S=FT(ZT.fromBufferAttribute(A,g));break;case 3:S=Zd(eu.fromBufferAttribute(A,g));break;case 4:S=OT(KT.fromBufferAttribute(A,g));break}T!==""&&(T+="|"),T+=S}return T}}}class Zl extends Ce{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new ee,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,i=t.elements,s=e.elements;for(let r=0;r<16;r++)if(i[r]!==s[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,i=Zm();if(i)for(const s in e){const r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=zT(r.array)}if(t.boundsTree||(HT(t,{useSharedArrayBuffer:i}),t.boundsTree=new jl(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:i})),t.halfEdges||(t.halfEdges=new JT(t)),!t.groupIndices){const s=Qf(t),r=new Uint16Array(s),o=t.groups;for(let a=0,l=o.length;a<l;a++){const{start:c,count:u}=o[a];for(let h=c/3,f=(c+u)/3;h<f;h++)r[h]=a}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const QT=1e-14,iu=new I,ep=new I,np=new I;function ms(n,t=QT){iu.subVectors(n.b,n.a),ep.subVectors(n.c,n.a),np.subVectors(n.b,n.c);const e=iu.angleTo(ep),i=iu.angleTo(np),s=Math.PI-e-i;return Math.abs(e)<t||Math.abs(i)<t||Math.abs(s)<t||n.a.distanceToSquared(n.b)<t||n.a.distanceToSquared(n.c)<t||n.b.distanceToSquared(n.c)<t}const su=1e-10,qo=1e-10,tb=1e-10,Fi=new Xn,Re=new Xn,Oi=new I,ru=new I,ip=new I,xl=new ni,ou=new qn;class eb{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new _e),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class nb{constructor(){this.trianglePool=new eb,this.triangles=[],this.normal=new I,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:i,normal:s}=this;if(Array.isArray(t))for(let r=0,o=t.length;r<o;r++){const a=t[r];if(r===0)a.getNormal(s);else if(Math.abs(1-a.getNormal(Oi).dot(s))>su)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const l=i.getTriangle();l.copy(a),e.push(l)}else{t.getNormal(s);const r=i.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:i}=this;if(t.getNormal(ru).normalize(),Math.abs(1-Math.abs(ru.dot(e)))<tb){this.coplanarTriangleUsed=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.coplanarCount=0}const s=[t.a,t.b,t.c];for(let r=0;r<3;r++){const o=(r+1)%3,a=s[r],l=s[o];Oi.subVectors(l,a).normalize(),ip.crossVectors(ru,Oi),xl.setFromNormalAndCoplanarPoint(ip,a),this.splitByPlane(xl,t)}}else t.getPlane(xl),this.splitByPlane(xl,t)}splitByPlane(t,e){const{triangles:i,trianglePool:s}=this;ou.copy(e),ou.needsUpdate=!0;for(let r=0,o=i.length;r<o;r++){const a=i[r];if(!ou.intersectsTriangle(a,Fi,!0))continue;const{a:l,b:c,c:u}=a;let h=0,f=-1,d=!1,_=[],v=[];const m=[l,c,u];for(let p=0;p<3;p++){const x=(p+1)%3;Fi.start.copy(m[p]),Fi.end.copy(m[x]);const y=t.distanceToPoint(Fi.start),g=t.distanceToPoint(Fi.end);if(Math.abs(y)<qo&&Math.abs(g)<qo){d=!0;break}if(y>0?_.push(p):v.push(p),Math.abs(y)<qo)continue;let T=!!t.intersectLine(Fi,Oi);!T&&Math.abs(g)<qo&&(Oi.copy(Fi.end),T=!0),T&&!(Oi.distanceTo(Fi.start)<su)&&(Oi.distanceTo(Fi.end)<su&&(f=p),h===0?Re.start.copy(Oi):Re.end.copy(Oi),h++)}if(!d&&h===2&&Re.distance()>qo)if(f!==-1){f=(f+1)%3;let p=0;p===f&&(p=(p+1)%3);let x=p+1;x===f&&(x=(x+1)%3);const y=s.getTriangle();y.a.copy(m[x]),y.b.copy(Re.end),y.c.copy(Re.start),ms(y)||i.push(y),a.a.copy(m[p]),a.b.copy(Re.start),a.c.copy(Re.end),ms(a)&&(i.splice(r,1),r--,o--)}else{const p=_.length>=2?v[0]:_[0];if(p===0){let b=Re.start;Re.start=Re.end,Re.end=b}const x=(p+1)%3,y=(p+2)%3,g=s.getTriangle(),T=s.getTriangle();m[x].distanceToSquared(Re.start)<m[y].distanceToSquared(Re.end)?(g.a.copy(m[x]),g.b.copy(Re.start),g.c.copy(Re.end),T.a.copy(m[x]),T.b.copy(m[y]),T.c.copy(Re.start)):(g.a.copy(m[y]),g.b.copy(Re.start),g.c.copy(Re.end),T.a.copy(m[x]),T.b.copy(m[y]),T.c.copy(Re.end)),a.a.copy(m[p]),a.b.copy(Re.end),a.c.copy(Re.start),ms(g)||i.push(g),ms(T)||i.push(T),ms(a)&&(i.splice(r,1),r--,o--)}else h===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function ib(n){return n=~~n,n+4-n%4}class sp{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,i=Zm()?SharedArrayBuffer:ArrayBuffer,s=new e(new i(ib(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:i}=this;i+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[i+s]=t[s];this.length+=t.length}clear(){this.length=0}}class sb{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:i}=this;let s=0;for(let r=0;r<e;r++){const o=i[r];s+=o[t].length}return s}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const i=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const s={};e.push(s);for(const r in i){const o=i[r],a=new sp(o.type);a.itemSize=o.itemSize,a.normalized=o.normalized,s[r]=a}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:i}=this;if(!i[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,i,s){const{groupAttributes:r}=this,a=r[0][t];if(a){if(a.type!==e)for(let l=0,c=r.length;l<c;l++){const u=r[l][t];u.setType(e),u.itemSize=i,u.normalized=s}}else for(let l=0,c=r.length;l<c;l++){const u=new sp(e);u.itemSize=i,u.normalized=s,r[l][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const i in e)e[i].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class rp{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:i,ids:s}=this;i[t]||(i[t]=[],s.push(t)),i[t].push(e)}}const rb=0,Km=1,ob=2,ab=3,lb=4,Jm=5,Qm=6,Fn=new Ro,op=new ee,sn=new _e,Bi=new I,ap=new ae,lp=new ae,cp=new ae,au=new ae,yl=new ae,Ml=new ae,up=new Xn,lu=new I,cu=1e-8,cb=1e-15,Zs=-1,Ks=1,Fl=-2,Ol=2,ea=0,Gs=1,th=2,ub=1e-14;let Bl=null;function fp(n){Bl=n}function t_(n,t){n.getMidpoint(Fn.origin),n.getNormal(Fn.direction);const e=t.raycastFirst(Fn,kn);return!!(e&&Fn.direction.dot(e.face.normal)>0)?Zs:Ks}function fb(n,t){function e(){return Math.random()-.5}n.getNormal(lu),Fn.direction.copy(lu),n.getMidpoint(Fn.origin);const i=3;let s=0,r=1/0;for(let o=0;o<i;o++){Fn.direction.x+=e()*cu,Fn.direction.y+=e()*cu,Fn.direction.z+=e()*cu,Fn.direction.multiplyScalar(-1);const a=t.raycastFirst(Fn,kn);if(!!(a&&Fn.direction.dot(a.face.normal)>0)&&s++,a!==null&&(r=Math.min(r,a.distance)),r<=cb)return a.face.normal.dot(lu)>0?Ol:Fl;if(s/i>.5||(o-s+1)/i>.5)break}return s/i>.5?Zs:Ks}function hb(n,t){const e=new rp,i=new rp;return op.copy(n.matrixWorld).invert().multiply(t.matrixWorld),n.geometry.boundsTree.bvhcast(t.geometry.boundsTree,op,{intersectsTriangles(s,r,o,a){if(!ms(s)&&!ms(r)){let l=s.intersectsTriangle(r,up,!0);if(!l){const c=s.plane,u=r.plane,h=c.normal,f=u.normal;h.dot(f)===1&&Math.abs(c.constant-u.constant)<ub&&(l=!0)}if(l){let c=n.geometry.boundsTree.resolveTriangleIndex(o),u=t.geometry.boundsTree.resolveTriangleIndex(a);e.add(c,u),i.add(u,c),Bl&&(Bl.addEdge(up),Bl.addIntersectingTriangles(o,s,a,r))}}return!1}}),{aIntersections:e,bIntersections:i}}function db(n,t,e,i,s,r,o=!1){const a=e.attributes,l=e.index,c=n*3,u=l.getX(c+0),h=l.getX(c+1),f=l.getX(c+2);for(const d in r){const _=a[d],v=r[d];if(!(d in a))throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);const m=_.itemSize;d==="position"?(sn.a.fromBufferAttribute(_,u).applyMatrix4(i),sn.b.fromBufferAttribute(_,h).applyMatrix4(i),sn.c.fromBufferAttribute(_,f).applyMatrix4(i),uu(sn.a,sn.b,sn.c,t,3,v,o)):d==="normal"?(sn.a.fromBufferAttribute(_,u).applyNormalMatrix(s),sn.b.fromBufferAttribute(_,h).applyNormalMatrix(s),sn.c.fromBufferAttribute(_,f).applyNormalMatrix(s),o&&(sn.a.multiplyScalar(-1),sn.b.multiplyScalar(-1),sn.c.multiplyScalar(-1)),uu(sn.a,sn.b,sn.c,t,3,v,o,!0)):(ap.fromBufferAttribute(_,u),lp.fromBufferAttribute(_,h),cp.fromBufferAttribute(_,f),uu(ap,lp,cp,t,m,v,o))}}function pb(n,t,e,i,s,r,o,a=!1){fu(n,i,s,r,o,a),fu(a?e:t,i,s,r,o,a),fu(a?t:e,i,s,r,o,a)}function e_(n,t,e=!1){switch(n){case rb:if(t===Ks||t===Ol&&!e)return Gs;break;case Km:if(e){if(t===Zs)return ea}else if(t===Ks||t===Fl)return Gs;break;case ob:if(e){if(t===Ks||t===Fl)return Gs}else if(t===Zs)return ea;break;case lb:if(t===Zs)return ea;if(t===Ks)return Gs;break;case ab:if(t===Zs||t===Ol&&!e)return Gs;break;case Jm:if(!e&&(t===Ks||t===Fl))return Gs;break;case Qm:if(!e&&(t===Zs||t===Ol))return Gs;break;default:throw new Error(`Unrecognized CSG operation enum "${n}".`)}return th}function uu(n,t,e,i,s,r,o=!1,a=!1){const l=c=>{r.push(c.x),s>1&&r.push(c.y),s>2&&r.push(c.z),s>3&&r.push(c.w)};au.set(0,0,0,0).addScaledVector(n,i.a.x).addScaledVector(t,i.a.y).addScaledVector(e,i.a.z),yl.set(0,0,0,0).addScaledVector(n,i.b.x).addScaledVector(t,i.b.y).addScaledVector(e,i.b.z),Ml.set(0,0,0,0).addScaledVector(n,i.c.x).addScaledVector(t,i.c.y).addScaledVector(e,i.c.z),a&&(au.normalize(),yl.normalize(),Ml.normalize()),l(au),o?(l(Ml),l(yl)):(l(yl),l(Ml))}function fu(n,t,e,i,s,r=!1){for(const o in s){const a=t[o],l=s[o];if(!(o in t))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);const c=a.itemSize;o==="position"?(Bi.fromBufferAttribute(a,n).applyMatrix4(e),l.push(Bi.x,Bi.y,Bi.z)):o==="normal"?(Bi.fromBufferAttribute(a,n).applyNormalMatrix(i),r&&Bi.multiplyScalar(-1),l.push(Bi.x,Bi.y,Bi.z)):(l.push(a.getX(n)),c>1&&l.push(a.getY(n)),c>2&&l.push(a.getZ(n)),c>3&&l.push(a.getW(n)))}}class mb{constructor(t){this.triangle=new _e().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new _e().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const i in e)t.push(e[i]);return t}}class hp{constructor(){this.data={}}addTriangleIntersection(t,e,i,s){const{data:r}=this;r[t]||(r[t]=new mb(e)),r[t].addTriangle(i,s)}getTrianglesAsArray(t=null){const{data:e}=this,i=[];if(t!==null)t in e&&i.push(e[t].triangle);else for(const s in e)i.push(e[s].triangle);return i}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(i=>parseInt(i)):[]}getIntersectionsAsArray(t=null,e=null){const{data:i}=this,s=new Set,r=[],o=a=>{if(i[a])if(e!==null)i[a].intersects[e]&&r.push(i[a].intersects[e]);else{const l=i[a].intersects;for(const c in l)s.has(c)||(s.add(c),r.push(l[c]))}};if(t!==null)o(t);else for(const a in i)o(a);return r}reset(){this.data={}}}class _b{constructor(){this.enabled=!1,this.triangleIntersectsA=new hp,this.triangleIntersectsB=new hp,this.intersectionEdges=[]}addIntersectingTriangles(t,e,i,s){const{triangleIntersectsA:r,triangleIntersectsB:o}=this;r.addTriangleIntersection(t,e,i,s),o.addTriangleIntersection(i,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),fp(this))}complete(){this.enabled&&fp(null)}}const Ms=new ee,Kl=new Ht,Ws=new _e,Sl=new _e,hs=new _e,El=new _e,ii=[],fr=[];function gb(n){for(const t of n)return t}function vb(n,t,e,i,s,r={}){const{useGroups:o=!0}=r,{aIntersections:a,bIntersections:l}=hb(n,t),c=[];let u=null,h;return h=o?0:-1,dp(n,t,a,e,!1,i,s,h),pp(n,t,a,e,!1,s,h),e.findIndex(d=>d!==Qm&&d!==Jm)!==-1&&(h=o?n.geometry.groups.length||1:-1,dp(t,n,l,e,!0,i,s,h),pp(t,n,l,e,!0,s,h)),ii.length=0,fr.length=0,{groups:c,materials:u}}function dp(n,t,e,i,s,r,o,a=0){const l=n.matrixWorld.determinant()<0;Ms.copy(t.matrixWorld).invert().multiply(n.matrixWorld),Kl.getNormalMatrix(n.matrixWorld).multiplyScalar(l?-1:1);const c=n.geometry.groupIndices,u=n.geometry.index,h=n.geometry.attributes.position,f=t.geometry.boundsTree,d=t.geometry.index,_=t.geometry.attributes.position,v=e.ids,m=e.intersectionSet;for(let p=0,x=v.length;p<x;p++){const y=v[p],g=a===-1?0:c[y]+a,T=3*y,b=u.getX(T+0),E=u.getX(T+1),A=u.getX(T+2);Ws.a.fromBufferAttribute(h,b).applyMatrix4(Ms),Ws.b.fromBufferAttribute(h,E).applyMatrix4(Ms),Ws.c.fromBufferAttribute(h,A).applyMatrix4(Ms),r.reset(),r.initialize(Ws);const S=m[y];for(let R=0,P=S.length;R<P;R++){const L=3*S[R],U=d.getX(L+0),F=d.getX(L+1),k=d.getX(L+2);Sl.a.fromBufferAttribute(_,U),Sl.b.fromBufferAttribute(_,F),Sl.c.fromBufferAttribute(_,k),r.splitByTriangle(Sl)}const M=r.triangles;for(let R=0,P=M.length;R<P;R++){const L=M[R],U=r.coplanarTriangleUsed?fb(L,f):t_(L,f);ii.length=0,fr.length=0;for(let F=0,k=i.length;F<k;F++){const Z=e_(i[F],U,s);Z!==th&&(fr.push(Z),ii.push(o[F].getGroupAttrSet(g)))}if(ii.length!==0){Ws.getBarycoord(L.a,El.a),Ws.getBarycoord(L.b,El.b),Ws.getBarycoord(L.c,El.c);for(let F=0,k=ii.length;F<k;F++){const Z=ii[F],ot=fr[F]===ea;db(y,El,n.geometry,n.matrixWorld,Kl,Z,l!==ot)}}}}return v.length}function pp(n,t,e,i,s,r,o=0){const a=n.matrixWorld.determinant()<0;Ms.copy(t.matrixWorld).invert().multiply(n.matrixWorld),Kl.getNormalMatrix(n.matrixWorld).multiplyScalar(a?-1:1);const l=t.geometry.boundsTree,c=n.geometry.groupIndices,u=n.geometry.index,h=n.geometry.attributes,f=h.position,d=[],_=n.geometry.halfEdges,v=new Set,m=Qf(n.geometry);for(let p=0,x=m;p<x;p++)p in e.intersectionSet||v.add(p);for(;v.size>0;){const p=gb(v);v.delete(p),d.push(p);const x=3*p,y=u.getX(x+0),g=u.getX(x+1),T=u.getX(x+2);hs.a.fromBufferAttribute(f,y).applyMatrix4(Ms),hs.b.fromBufferAttribute(f,g).applyMatrix4(Ms),hs.c.fromBufferAttribute(f,T).applyMatrix4(Ms);const b=t_(hs,l);fr.length=0,ii.length=0;for(let E=0,A=i.length;E<A;E++){const S=e_(i[E],b,s);S!==th&&(fr.push(S),ii.push(r[E]))}for(;d.length>0;){const E=d.pop();for(let A=0;A<3;A++){const S=_.getSiblingTriangleIndex(E,A);S!==-1&&v.has(S)&&(d.push(S),v.delete(S))}if(ii.length!==0){const A=3*E,S=u.getX(A+0),M=u.getX(A+1),R=u.getX(A+2),P=o===-1?0:c[E]+o;if(hs.a.fromBufferAttribute(f,S),hs.b.fromBufferAttribute(f,M),hs.c.fromBufferAttribute(f,R),!ms(hs))for(let L=0,U=ii.length;L<U;L++){const F=fr[L],k=ii[L].getGroupAttrSet(P),Z=F===ea;pb(S,M,R,h,n.matrixWorld,Kl,k,Z!==a)}}}}}function xb(n){for(let t=0;t<n.length-1;t++){const e=n[t],i=n[t+1];if(e.materialIndex===i.materialIndex){const s=e.start,r=i.start+i.count;i.start=s,i.count=r-s,n.splice(t,1),t--}}}function yb(n,t,e,i){e.clear();const s=n.attributes;for(let r=0,o=i.length;r<o;r++){const a=i[r],l=s[a];e.initializeArray(a,l.array.constructor,l.itemSize,l.normalized)}for(const r in e.attributes)i.includes(r)||e.delete(r);for(const r in t.attributes)i.includes(r)||(t.deleteAttribute(r),t.dispose())}function Mb(n,t,e){let i=!1,s=-1;const r=n.attributes,o=t.groupAttributes[0];for(const l in o){const c=t.getTotalLength(l),u=t.getType(l),h=t.getItemSize(l),f=t.getNormalized(l);let d=r[l];(!d||d.array.length<c)&&(d=new yn(new u(c),h,f),n.setAttribute(l,d),i=!0);let _=0;for(let v=0,m=Math.min(e.length,t.groupCount);v<m;v++){const p=e[v].index,{array:x,type:y,length:g}=t.groupAttributes[p][l],T=new y(x.buffer,0,g);d.array.set(T,_),_+=T.length}d.needsUpdate=!0,s=c/d.itemSize}if(n.index){const l=n.index.array;if(l.length<s)n.index=null,i=!0;else for(let c=0,u=l.length;c<u;c++)l[c]=c}let a=0;n.clearGroups();for(let l=0,c=Math.min(e.length,t.groupCount);l<c;l++){const{index:u,materialIndex:h}=e[l],f=t.getCount(u);f!==0&&(n.addGroup(a,f,h),a+=f)}n.setDrawRange(0,s),n.boundsTree=null,i&&n.dispose()}function mp(n,t){let e=t;return Array.isArray(t)||(e=[],n.forEach(i=>{e[i.materialIndex]=t})),e}class Sb{constructor(){this.triangleSplitter=new nb,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new _b}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,i,s=new Zl){let r=!0;if(Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s],r=!1),s.length!==i.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,attributeData:a,attributes:l,useGroups:c,consolidateGroups:u,debug:h}=this;for(;a.length<s.length;)a.push(new sb);s.forEach((p,x)=>{yb(t.geometry,p.geometry,a[x],l)}),h.init(),vb(t,e,i,o,a,{useGroups:c}),h.complete();const f=this.getGroupRanges(t.geometry),d=mp(f,t.material),_=this.getGroupRanges(e.geometry),v=mp(_,e.material);_.forEach(p=>p.materialIndex+=d.length);let m=[...f,..._].map((p,x)=>({...p,index:x}));if(c){const p=[...d,...v];u&&(m=m.map(y=>{const g=p[y.materialIndex];return y.materialIndex=p.indexOf(g),y}).sort((y,g)=>y.materialIndex-g.materialIndex));const x=[];for(let y=0,g=p.length;y<g;y++){let T=!1;for(let b=0,E=m.length;b<E;b++){const A=m[b];A.materialIndex===y&&(T=!0,A.materialIndex=x.length)}T&&x.push(p[y])}s.forEach(y=>{y.material=x})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(p=>{p.material=d[0]});return s.forEach((p,x)=>{const y=p.geometry;Mb(y,a[x],m),u&&xb(y.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new Zl){t.updateMatrixWorld(!0);const i=(r,o)=>{const a=r.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];u.isOperationGroup?i(u,o):o(u)}},s=r=>{const o=r.children;let a=!1;for(let c=0,u=o.length;c<u;c++){const h=o[c];a=s(h)||a}const l=r.isDirty();if(l&&r.markUpdated(),a&&!r.isOperationGroup){let c;return i(r,u=>{c?c=this.evaluate(c,u,u.operation):c=this.evaluate(r,u,u.operation)}),r._cachedGeometry=c.geometry,r._cachedMaterials=c.material,!0}else return a||l};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}var Eb=jt('<div class="spindle-indicator svelte-12o98vs"><span class="label svelte-12o98vs">🔄</span> <span class="value svelte-12o98vs"> </span></div>'),Tb=jt('<div class="cnc-viewer svelte-12o98vs"><div class="position-display svelte-12o98vs"><div class="unit-badge svelte-12o98vs"> </div> <div class="axis svelte-12o98vs"><span class="label svelte-12o98vs">X</span> <span class="value svelte-12o98vs"> </span></div> <div class="axis svelte-12o98vs"><span class="label svelte-12o98vs">Y</span> <span class="value svelte-12o98vs"> </span></div> <div class="axis svelte-12o98vs"><span class="label svelte-12o98vs">Z</span> <span class="value svelte-12o98vs"> </span></div> <!></div> <div class="scale-ruler svelte-12o98vs"><div class="ruler-bar svelte-12o98vs"></div> <span class="ruler-label svelte-12o98vs">500mm</span></div> <div class="path-legend svelte-12o98vs"><div class="legend-item svelte-12o98vs"><span class="legend-color working svelte-12o98vs"></span> <span class="legend-text svelte-12o98vs">Cutting (Z ↓)</span></div> <div class="legend-item svelte-12o98vs"><span class="legend-color moving svelte-12o98vs"></span> <span class="legend-text svelte-12o98vs">Rapid (Z ↑)</span></div></div> <div class="stats svelte-12o98vs"><span> </span> <span> </span> <span> </span> <span> </span></div> <div class="controls-hint svelte-12o98vs"><span>🖱️ Drag to rotate • Scroll to zoom • Shift+Drag to pan</span></div></div>');function bb(n,t){ts(t,!0);let e,i,s,r,o,a=null,l=null,c=null,u=null,h=null,f=null,d=null,_=null,v=0,m=0;const p=new Sb;let x=new Map,y=-1;const g=3e3,T=2e3,b=50,E=3;let A=null;Nf(()=>{S(),F(),window.addEventListener("resize",U)}),am(()=>{window.removeEventListener("resize",U),_&&cancelAnimationFrame(_),o&&o.dispose();for(const[V,$]of x)$!=null&&$.geometry&&$.geometry.dispose();x.clear(),r&&r.dispose()});function S(){i=new fE,i.background=new Qt(16777215);const V=e.clientWidth/e.clientHeight;s=new zn(45,V,.1,1e4),s.position.set(1500,-1500,1500),s.up.set(0,0,1),s.lookAt(0,0,0),r=new uE({antialias:!0}),r.setSize(e.clientWidth,e.clientHeight),r.setPixelRatio(window.devicePixelRatio),r.shadowMap.enabled=!0,r.shadowMap.type=cm,e.appendChild(r.domElement),o=new ME(s,r.domElement),o.enableDamping=!0,o.dampingFactor=.05,o.screenSpacePanning=!1,o.minDistance=200,o.maxDistance=5e3,o.minPolarAngle=0,o.maxPolarAngle=Math.PI,o.target.set(0,0,0);const $=new _E(6316128,.8);i.add($);const Q=new Ad(16777215,1);Q.position.set(500,-500,1e3),Q.castShadow=!0,Q.shadow.mapSize.width=2048,Q.shadow.mapSize.height=2048,i.add(Q);const rt=new Ad(16777215,.5);rt.position.set(-500,500,500),i.add(rt),f=new gE(g,30,13421772,14737632),f.rotation.x=Math.PI/2,f.position.z=.5,i.add(f);const X=new vE(300);i.add(X),M(),R()}function M(V=null){var At,qt,N;d&&(i.remove(d),d.geometry&&d.geometry.dispose(),d.material&&d.material.dispose(),d=null);const $=(V==null?void 0:V.width)??T,Q=(V==null?void 0:V.height)??T,rt=(V==null?void 0:V.depth)??b,X=((At=V==null?void 0:V.position)==null?void 0:At.X)??0,it=((qt=V==null?void 0:V.position)==null?void 0:qt.Y)??0,at=((N=V==null?void 0:V.position)==null?void 0:N.Z)??-rt;A=V;const ft=!!V,ut=new pi({color:ft?14596231:1710618,roughness:ft?.8:.6,metalness:ft?.1:.2,transparent:ft,opacity:ft?.85:1}),Dt=new $i($,Q,rt);if(d=new Ce(Dt,ut),d.position.set(X+$/2,it+Q/2,at+rt/2),d.receiveShadow=!0,i.add(d),ft){const lt=new io({color:9127187,linewidth:2}),q=new dE(Dt),K=new Qo(q,lt);K.position.copy(d.position),d.userData.wireframe=K,i.add(K)}}function R(){const V=xt.currentTool,$=(V==null?void 0:V.diameter)??6,Q=(V==null?void 0:V.fluteLength)??25,rt=(V==null?void 0:V.type)??"EndMill",X=new xs,it=40,at=60,ft=new $i(it,it,at),ut=new pi({color:4473924,metalness:.7,roughness:.4}),Dt=new Ce(ft,ut);Dt.position.z=70,X.add(Dt);const At=new $i(it+10,it+10,5),qt=new pi({color:5592405,metalness:.6,roughness:.5}),N=new Ce(At,qt);N.position.z=38,X.add(N);const lt=Math.max(10,$/2+4),q=Math.max(8,$/2+2),K=new js(q,lt,15,16),pt=new pi({color:8947848,metalness:.9,roughness:.2}),dt=new Ce(K,pt);dt.rotation.x=Math.PI/2,dt.position.z=28,X.add(dt);const Rt=new xs,ue=$/2,ge=20,Yt=new js(ue,ue,ge,16),Mn=new pi({color:13421772,metalness:.9,roughness:.1}),Sn=new Ce(Yt,Mn);Sn.rotation.x=Math.PI/2,Sn.position.z=10,Rt.add(Sn),P(Rt,$,Q,rt);const ya=$*1.5,Ma=new Yl(ya,16,16),Ri=new Gf({color:65535,transparent:!0,opacity:.6});h=new Ce(Ma,Ri),h.position.z=-(ge/2+Q+2),Rt.add(h),u=Rt,X.add(Rt),c=X,c.castShadow=!0,i.add(c)}function P(V,$,Q,rt){const X=$/2,it=4,at=X*.15;if(rt==="EndMill"){const ft=new xs,ut=new js(X,X,Q,32),Dt=new pi({color:14540253,metalness:.9,roughness:.15}),At=new Ce(ut,Dt);At.rotation.x=Math.PI/2,ft.add(At);for(let q=0;q<it;q++){const K=Math.PI*2*q/it,pt=L(X,Q,at,K),dt=new pi({color:10066329,metalness:.8,roughness:.3}),Rt=new Ce(pt,dt);Rt.rotation.x=Math.PI/2,ft.add(Rt)}const qt=new qf(X,32),N=new pi({color:12303291,metalness:.85,roughness:.2}),lt=new Ce(qt,N);lt.rotation.x=-Math.PI/2,lt.position.z=-Q/2,ft.add(lt),ft.position.z=-(10+Q/2),V.add(ft)}else if(rt==="BallNose"){const ft=new xs,ut=new js(X,X,Q-X,32),Dt=new pi({color:14540253,metalness:.9,roughness:.15}),At=new Ce(ut,Dt);At.rotation.x=Math.PI/2,At.position.z=X/2,ft.add(At);const qt=new Yl(X,32,16,0,Math.PI*2,0,Math.PI/2),N=new pi({color:12303291,metalness:.85,roughness:.2}),lt=new Ce(qt,N);lt.rotation.x=Math.PI,lt.position.z=-(Q-X)/2,ft.add(lt),ft.position.z=-(10+Q/2),V.add(ft)}}function L(V,$,Q,rt){const X=V*.3,at=new $i(X,Q,$).clone();return at.translate(V-Q/2,0,0),at.rotateZ(rt),at}function U(){!e||!s||!r||(s.aspect=e.clientWidth/e.clientHeight,s.updateProjectionMatrix(),r.setSize(e.clientWidth,e.clientHeight))}function F(){_=requestAnimationFrame(F),o&&o.update();const V=xt.machine;if(c&&V.position){if(c.position.set(V.position.X??0,V.position.Y??0,(V.position.Z??0)+100),V.spindleOn&&u&&!pe.isPaused){const $=V.spindleCW?1:-1;v+=.15*$,u.rotation.z=v}if(h){const $=Date.now()*.003;h.material.opacity=.4+Math.sin($)*.2,h.scale.setScalar(1+Math.sin($*2)*.1)}}k(),Z(),r.render(i,s)}function k(){const V=xt.toolPath,$=xt.currentIndex;if((a||l)&&(V.length<m||V.length===0)&&(a&&(i.remove(a),a.geometry.dispose(),a.material.dispose(),a=null),l&&(i.remove(l),l.geometry.dispose(),l.material.dispose(),l=null),m=0),V.length<2){m=V.length;return}if(V.length===m)return;a&&(i.remove(a),a.geometry.dispose(),a.material.dispose(),a=null),l&&(i.remove(l),l.geometry.dispose(),l.material.dispose(),l=null);const Q=[],rt=[];for(let X=1;X<V.length;X++){const it=V[X-1],at=V[X],ft=X<=$,ut={points:[new I(it.x,it.y,it.z),new I(at.x,at.y,at.z)],isPast:ft};at.isCut?Q.push(ut):rt.push(ut)}if(Q.length>0){const X=[],it=[];for(const ut of Q){X.push(...ut.points);const Dt=.8*(ut.isPast?1:.3);it.push(0,Dt,0),it.push(0,Dt,0)}const at=new nn().setFromPoints(X);at.setAttribute("color",new ye(it,3));const ft=new io({vertexColors:!0,linewidth:E});a=new Qo(at,ft),i.add(a)}if(rt.length>0){const X=[],it=[];for(const ut of rt){X.push(...ut.points);const Dt=.8*(ut.isPast?1:.3);it.push(Dt,0,0),it.push(Dt,0,0)}const at=new nn().setFromPoints(X);at.setAttribute("color",new ye(it,3));const ft=new io({vertexColors:!0,linewidth:E});l=new Qo(at,ft),i.add(l)}m=V.length}function Z(){var Q;if(!d)return;const V=xt.currentIndex,$=xt.events;if(V!==y){if(V<y){ht(V),y=V;return}for(let rt=y+1;rt<=V;rt++){if(rt<0||rt>=$.length)continue;const X=$[rt],it=X.stateAfter;if(!(it!=null&&it.SpindleOn))continue;const at=(Q=X.event)==null?void 0:Q.Type;at&&(at==="LinearCut"||at==="ArcCW"||at==="ArcCCW"||at==="DrillCycle")&&Y(X,rt)}y=V}}function Y(V,$){var qt;const Q=V.stateAfter,rt=Q==null?void 0:Q.Position;if(!rt)return;const X=xt.events,it=$>0?X[$-1]:null,at=(qt=it==null?void 0:it.stateAfter)==null?void 0:qt.Position,ft=xt.currentTool,ut=((ft==null?void 0:ft.diameter)??6)/2,Dt=(ft==null?void 0:ft.fluteLength)??25;if(rt.Z>0)return;Math.abs(rt.Z);const At=at?Math.max(2,Math.ceil(Math.sqrt(Math.pow(rt.X-at.X,2)+Math.pow(rt.Y-at.Y,2)+Math.pow(rt.Z-at.Z,2))/(ut*2))):1;for(let N=0;N<At;N++){const lt=At>1?N/(At-1):1,q=at?Ll.lerp(at.X,rt.X,lt):rt.X,K=at?Ll.lerp(at.Y,rt.Y,lt):rt.Y,pt=at?Ll.lerp(at.Z,rt.Z,lt):rt.Z;if(pt>0)continue;const dt=Math.min(Math.abs(pt),Dt),Rt=new js(ut,ut,dt,16);Rt.rotateX(Math.PI/2),Rt.translate(q,K,pt/2);const ue=new Zl(Rt);ue.updateMatrixWorld();const ge=new Zl(d.geometry,d.material);ge.position.copy(d.position),ge.rotation.copy(d.rotation),ge.scale.copy(d.scale),ge.updateMatrixWorld();try{const Yt=p.evaluate(ge,ue,Km);Yt&&Yt.geometry&&(d.geometry&&d.geometry.dispose(),d.geometry=Yt.geometry,d.geometry.computeBoundingBox(),d.geometry.computeBoundingSphere())}catch(Yt){console.warn("[CSG] Subtraction failed:",Yt)}Rt.dispose()}ot($)}function ot(V){if(d&&d.geometry){const $=d.geometry.clone();if(x.set(V,{geometry:$,position:d.position.clone(),rotation:d.rotation.clone(),scale:d.scale.clone()}),x.size>100){const Q=x.keys().next().value,rt=x.get(Q);rt!=null&&rt.geometry&&rt.geometry.dispose(),x.delete(Q)}}}function ht(V){var Q;let $=-1;for(const[rt,X]of x)rt<=V&&rt>$&&($=rt);if($>=0&&x.has($)){const rt=x.get($);d.geometry&&d.geometry.dispose(),d.geometry=rt.geometry.clone(),d.position.copy(rt.position),d.rotation.copy(rt.rotation),d.scale.copy(rt.scale),$<V&&(y=$)}else{const rt=xt.stock;(Q=d==null?void 0:d.userData)!=null&&Q.wireframe&&(i.remove(d.userData.wireframe),d.userData.wireframe.geometry.dispose(),d.userData.wireframe.material.dispose()),M(rt),y=-1,x.clear()}}function yt(V,$="mm"){return`${(V==null?void 0:V.toFixed(3))??"0.000"}`}function zt(V,$){var Q,rt,X,it,at,ft;return!V&&!$?!1:!V||!$?!0:V.width!==$.width||V.height!==$.height||V.depth!==$.depth||((Q=V.position)==null?void 0:Q.X)!==((rt=$.position)==null?void 0:rt.X)||((X=V.position)==null?void 0:X.Y)!==((it=$.position)==null?void 0:it.Y)||((at=V.position)==null?void 0:at.Z)!==((ft=$.position)==null?void 0:ft.Z)}go(()=>{var Q;const V=xt.activeId,$=xt.stock;if(V&&i&&(m=0,y=-1,zt(A,$))){(Q=d==null?void 0:d.userData)!=null&&Q.wireframe&&(i.remove(d.userData.wireframe),d.userData.wireframe.geometry.dispose(),d.userData.wireframe.material.dispose());for(const[rt,X]of x)X!=null&&X.geometry&&X.geometry.dispose();x.clear(),M($)}});var te=Tb(),J=Mt(te),st=Mt(J),St=Mt(st),_t=Ft(st,2),It=Ft(Mt(_t),2),Ot=Mt(It),kt=Ft(_t,2),de=Ft(Mt(kt),2),Wt=Mt(de),Se=Ft(kt,2),z=Ft(Mt(Se),2),fn=Mt(z),Zt=Ft(Se,2);{var Kt=V=>{var $=Eb(),Q=Ft(Mt($),2),rt=Mt(Q);gn(()=>Ee(rt,`${xt.machine.spindle??""} RPM`)),Ct(V,$)};Te(Zt,V=>{xt.machine.spindleOn&&V(Kt)})}var Ut=Ft(J,6),ce=Mt(Ut),Pt=Mt(ce),D=Ft(ce,2),w=Mt(D),H=Ft(D,2),et=Mt(H),nt=Ft(H,2),tt=Mt(nt);om(te,V=>e=V,()=>e),gn((V,$,Q)=>{Ee(St,xt.machine.unit),Ee(Ot,V),Ee(Wt,$),Ee(fn,Q),Ee(Pt,`Events: ${xt.stats.total??""}`),Ee(w,`Rapid: ${xt.stats.rapidMoves??""}`),Ee(et,`Cuts: ${xt.stats.linearCuts??""}`),Ee(tt,`Arcs: ${xt.stats.arcs??""}`)},[()=>yt(xt.machine.position.X),()=>yt(xt.machine.position.Y),()=>yt(xt.machine.position.Z)]),Ct(n,te),es()}var Ab=jt('<span class="status live svelte-1o76r16"><span class="live-dot svelte-1o76r16"></span> Live</span>'),wb=jt('<span class="status paused svelte-1o76r16">⏸ Paused</span>'),Rb=jt('<span class="status stepping svelte-1o76r16">⏭ Stepping</span>'),Cb=jt('<span class="status playing svelte-1o76r16">▶ Playing</span>'),Pb=jt('<span class="icon svelte-1o76r16">▶</span> Resume',1),Db=jt('<span class="icon svelte-1o76r16">⏸</span> Pause',1),Lb=jt('<button class="control-btn live-btn svelte-1o76r16"><span class="live-dot svelte-1o76r16"></span> Resume Live</button>'),Ib=jt('<div class="control-bar svelte-1o76r16"><div class="speed-controls svelte-1o76r16"><span class="label svelte-1o76r16">Speed:</span> <button>Fast</button> <button>Normal</button> <button>Slow</button></div> <div class="flow-status svelte-1o76r16"><!></div> <div class="playback-controls svelte-1o76r16"><button class="control-btn svelte-1o76r16"><!></button> <button class="control-btn svelte-1o76r16"><span class="icon svelte-1o76r16">⏭</span> Step</button> <!></div></div>');function Ub(n,t){ts(t,!1);function e(M){pe.setSpeed(M),wg({type:"set_speed",data:M})}function i(){pe.isPaused?pe.resume():pe.pause()}function s(){pe.step()}function r(){xt.resumeLive(),pe.resume()}Uf();var o=Ib(),a=Mt(o),l=Ft(Mt(a),2);let c;l.__click=()=>e("fast");var u=Ft(l,2);let h;u.__click=()=>e("normal");var f=Ft(u,2);let d;f.__click=()=>e("slow");var _=Ft(a,2),v=Mt(_);{var m=M=>{var R=Ab();Ct(M,R)},p=M=>{var R=ws(),P=yi(R);{var L=F=>{var k=wb();Ct(F,k)},U=F=>{var k=ws(),Z=yi(k);{var Y=ht=>{var yt=Rb();Ct(ht,yt)},ot=ht=>{var yt=Cb();Ct(ht,yt)};Te(Z,ht=>{pe.isStepping?ht(Y):ht(ot,!1)},!0)}Ct(F,k)};Te(P,F=>{pe.isPaused?F(L):F(U,!1)},!0)}Ct(M,R)};Te(v,M=>{xt.followLive&&xt.isReceiving?M(m):M(p,!1)})}var x=Ft(_,2),y=Mt(x);y.__click=i;var g=Mt(y);{var T=M=>{var R=Pb();Ct(M,R)},b=M=>{var R=Db();Ct(M,R)};Te(g,M=>{pe.isPaused?M(T):M(b,!1)})}var E=Ft(y,2);E.__click=s;var A=Ft(E,2);{var S=M=>{var R=Lb();R.__click=r,Ct(M,R)};Te(A,M=>{!xt.followLive&&xt.isReceiving&&M(S)})}gn(()=>{c=ur(l,1,"speed-btn svelte-1o76r16",null,c,{active:pe.speed==="fast"}),h=ur(u,1,"speed-btn svelte-1o76r16",null,h,{active:pe.speed==="normal"}),d=ur(f,1,"speed-btn svelte-1o76r16",null,d,{active:pe.speed==="slow"})}),Ct(n,o),es()}bo(["click"]);var Nb=jt('<div class="detail svelte-ygix8g"> </div>'),Fb=jt('<div class="error-message svelte-ygix8g"> </div>'),Ob=jt('<div><div class="expectation-header svelte-ygix8g"><span class="type-icon svelte-ygix8g"> </span> <span class="type-title svelte-ygix8g"> </span> <span class="status-icon svelte-ygix8g"> </span></div> <div class="content svelte-ygix8g"><!> <!></div></div>'),Bb=jt('<div class="empty svelte-ygix8g"><!></div>'),zb=jt('<div class="expectation-panel svelte-ygix8g"><div class="panel-header svelte-ygix8g"><h3 class="svelte-ygix8g">Expectations</h3> <div class="stats svelte-ygix8g"><span class="passed svelte-ygix8g"> </span> <span class="failed svelte-ygix8g"> </span></div></div> <div class="expectation-list svelte-ygix8g"></div></div>');function kb(n,t){ts(t,!1);function e(){const d=xt.expectations;return{passed:d.filter(_=>_.passed).length,failed:d.filter(_=>!_.passed).length}}function i(d){if(!d)return{icon:"❓",title:"Unknown",details:[]};const _=d.match(/HasHole\(([-\d.]+),\s*([-\d.]+)\)(.*)/);if(_){const T=parseFloat(_[1]).toFixed(1),b=parseFloat(_[2]).toFixed(1),E=_[3]||"",A=[];A.push(`Position: (${T}, ${b})`);const S=E.match(/\.WithDepth\(([-\d.]+)\)/);S&&A.push(`Depth: ${parseFloat(S[1]).toFixed(1)}mm`);const M=E.match(/\.WithDiameter\(([-\d.]+)\)/);M&&A.push(`Diameter: ${parseFloat(M[1]).toFixed(1)}mm`);const R=E.match(/\.WithTool\((\d+)\)/);return R&&A.push(`Tool: T${R[1]}`),{icon:"🕳️",title:"Hole",details:A}}const v=d.match(/HasHoleCount\((\d+)\)/);if(v)return{icon:"🔢",title:"Hole Count",details:[`Expected: ${v[1]} holes`]};const m=d.match(/HasSlot\(\(([-\d.]+),\s*([-\d.]+)\)\s*->\s*\(([-\d.]+),\s*([-\d.]+)\)\)(.*)/);if(m){const T=parseFloat(m[1]).toFixed(1),b=parseFloat(m[2]).toFixed(1),E=parseFloat(m[3]).toFixed(1),A=parseFloat(m[4]).toFixed(1),S=m[5]||"",M=[];M.push(`From: (${T}, ${b})`),M.push(`To: (${E}, ${A})`);const R=S.match(/\.WithWidth\(([-\d.]+)\)/);R&&M.push(`Width: ${parseFloat(R[1]).toFixed(1)}mm`);const P=S.match(/\.WithSlotDepth\(([-\d.]+)\)/);return P&&M.push(`Depth: ${parseFloat(P[1]).toFixed(1)}mm`),{icon:"📏",title:"Slot",details:M}}const p=d.match(/HasSlotCount\((\d+)\)/);if(p)return{icon:"🔢",title:"Slot Count",details:[`Expected: ${p[1]} slots`]};const x=d.match(/HasContour\(\)(.*)/);if(x){const T=x[1]||"",b=[];T.includes(".IsClosed()")?b.push("Type: Closed loop"):T.includes(".IsOpen()")&&b.push("Type: Open path");const E=T.match(/\.HasSegmentCount\((\d+)\)/);return E&&b.push(`Segments: ${E[1]}`),{icon:"🔲",title:"Contour",details:b}}const y=d.match(/HasContourCount\((\d+)\)/);return y?{icon:"🔢",title:"Contour Count",details:[`Expected: ${y[1]} contours`]}:d.match(/NoOperationOutside/)?{icon:"📐",title:"Boundary Check",details:["All operations within bounds"]}:{icon:"✓",title:"Assertion",details:[d]}}function s(d){const _=i(d.description);return!d.passed&&d.errorMessage?{..._,error:d.errorMessage}:_}Uf();var r=zb(),o=Mt(r),a=Ft(Mt(o),2),l=Mt(a),c=Mt(l),u=Ft(l,2),h=Mt(u),f=Ft(o,2);sa(f,5,()=>xt.expectations,ia,(d,_)=>{const v=Cf(()=>s(mt(_)));var m=Ob();let p;var x=Mt(m),y=Mt(x),g=Mt(y),T=Ft(y,2),b=Mt(T),E=Ft(T,2),A=Mt(E),S=Ft(x,2),M=Mt(S);sa(M,1,()=>mt(v).details,ia,(L,U)=>{var F=Nb(),k=Mt(F);gn(()=>Ee(k,mt(U))),Ct(L,F)});var R=Ft(M,2);{var P=L=>{var U=Fb(),F=Mt(U);gn(()=>Ee(F,mt(v).error)),Ct(L,U)};Te(R,L=>{mt(v).error&&L(P)})}gn(()=>{p=ur(m,1,"expectation-item svelte-ygix8g",null,p,{passed:mt(_).passed,failed:!mt(_).passed}),Ee(g,mt(v).icon),Ee(b,mt(v).title),Ee(A,mt(_).passed?"✓":"✗")}),Ct(d,m)},d=>{var _=Bb(),v=Mt(_);{var m=x=>{var y=Ps("Waiting for test session...");Ct(x,y)},p=x=>{var y=Ps("No expectations yet");Ct(x,y)};Te(v,x=>{xt.count===0?x(m):x(p,!1)})}Ct(d,_)}),gn((d,_)=>{Ee(c,`${d??""} ✓`),Ee(h,`${_??""} ✗`)},[()=>e().passed,()=>e().failed]),Ct(n,r),es()}var Hb=jt('<div class="event-instruction svelte-1v7jdqv"><code class="svelte-1v7jdqv"> </code></div>'),Vb=jt('<span class="error-badge svelte-1v7jdqv">Error</span>'),Gb=jt('<button><div class="event-index svelte-1v7jdqv"> </div> <div class="event-info svelte-1v7jdqv"><div class="event-type-badge svelte-1v7jdqv"> </div> <!></div> <!></button>'),Wb=jt('<div class="empty svelte-1v7jdqv"><!></div>'),Xb=jt('<div class="event-timeline svelte-1v7jdqv"><div class="timeline-header svelte-1v7jdqv"><h3 class="svelte-1v7jdqv">Event Timeline</h3> <span class="counter svelte-1v7jdqv"> </span></div> <div class="timeline-list svelte-1v7jdqv"></div></div>');function qb(n,t){ts(t,!0);let e=ra(t,"onEventClick",3,()=>{}),i=ke(null);go(()=>{if(!xt.followLive||!mt(i))return;xt.currentIndex;const d=mt(i).querySelector(".event-item.current");d&&d.scrollIntoView({block:"nearest",behavior:"smooth"})});function s(d){switch(d){case"RapidMove":return"var(--accent-red)";case"LinearCut":return"var(--accent-green)";case"ArcCW":case"ArcCCW":return"var(--accent-cyan)";case"SpindleStart":return"var(--accent-yellow)";case"SpindleStop":return"var(--accent-orange, #ff8800)";case"ToolChange":return"var(--accent-purple)";case"DrillCycle":return"var(--accent-blue)";case"UnitChange":return"var(--accent-cyan)";case"ModeChange":return"var(--accent-cyan)";default:return"var(--text-secondary)"}}function r(d){switch(d){case"RapidMove":return"Rapid positioning";case"LinearCut":return"Linear cutting";case"ArcCW":return"Clockwise arc";case"ArcCCW":return"Counter-clockwise arc";case"SpindleStart":return"Spindle on";case"SpindleStop":return"Spindle off";case"ToolChange":return"Tool change";case"DrillCycle":return"Drill cycle";case"UnitChange":return"Set units";case"ModeChange":return"Set mode";default:return"Unknown"}}function o(d){e()(d)}const a=X_(()=>[...xt.events].reverse());var l=Xb(),c=Mt(l),u=Ft(Mt(c),2),h=Mt(u),f=Ft(c,2);sa(f,21,()=>mt(a),ia,(d,_)=>{var v=Gb();let m;v.__click=()=>o(mt(_).index);var p=Mt(v),x=Mt(p),y=Ft(p,2),g=Mt(y),T=Mt(g),b=Ft(g,2);{var E=M=>{var R=Hb(),P=Mt(R),L=Mt(P);gn(()=>Ee(L,mt(_).instruction.RawLine)),Ct(M,R)};Te(b,M=>{var R;(R=mt(_).instruction)!=null&&R.RawLine&&M(E)})}var A=Ft(y,2);{var S=M=>{var R=Vb();Ct(M,R)};Te(A,M=>{mt(_).hasError&&M(S)})}gn((M,R)=>{m=ur(v,1,"event-item svelte-1v7jdqv",null,m,{current:mt(_).index===xt.currentIndex,past:mt(_).index<xt.currentIndex}),Ee(x,mt(_).index),Mg(g,`background: ${M??""}; color: white;`),Ee(T,R)},[()=>{var M;return s((M=mt(_).event)==null?void 0:M.Type)},()=>{var M;return r((M=mt(_).event)==null?void 0:M.Type)}]),Ct(d,v)},d=>{var _=Wb(),v=Mt(_);{var m=x=>{var y=Ps("Waiting for test session...");Ct(x,y)},p=x=>{var y=Ps("Waiting for events...");Ct(x,y)};Te(v,x=>{xt.count===0?x(m):x(p,!1)})}Ct(d,_)}),om(f,d=>Nt(i,d),()=>mt(i)),gn(()=>Ee(h,`${xt.currentIndex+1} / ${xt.stats.total??""}`)),Ct(n,l),es()}bo(["click"]);var Yb=jt('<div class="error-display svelte-95fokg"><div class="error-icon svelte-95fokg">⚠️</div> <div class="error-content svelte-95fokg"><div class="error-title svelte-95fokg">Interpretation Error</div> <div class="error-message svelte-95fokg"> </div></div> <button class="dismiss-btn svelte-95fokg">×</button></div>');function $b(n,t){let e=ra(t,"error",3,null),i=ra(t,"onDismiss",3,()=>{});var s=ws(),r=yi(s);{var o=a=>{var l=Yb(),c=Ft(Mt(l),2),u=Ft(Mt(c),2),h=Mt(u),f=Ft(c,2);f.__click=function(...d){var _;(_=i())==null||_.apply(this,d)},gn(()=>Ee(h,e())),Ct(a,l)};Te(r,a=>{e()&&a(o)})}Ct(n,s)}bo(["click"]);var jb=jt("<!> <!>",1),Zb=jt('<div class="app svelte-1n46o8q"><!> <!> <div class="main-content svelte-1n46o8q"><aside class="sidebar-left svelte-1n46o8q"><!></aside> <main class="viewer-area svelte-1n46o8q"><!></main> <aside class="sidebar-right svelte-1n46o8q"><!></aside></div> <!> <!></div>');function Kb(n,t){ts(t,!0);let e=ke(null),i=null,s=null;Nf(()=>{i=Ag(a)}),am(()=>{i==null||i(),s&&clearTimeout(s)});function r(){const S=xt.active;if(!S)return;const M=S.events.length;if(M===0)return;const R=S.currentIndex,P=R<0?0:Math.min(R+1,M-1);P!==R&&xt.setCurrentIndex(P,!1),pe.isStepping&&pe.pause()}function o(){s&&clearTimeout(s),!(!pe.isPlaying&&!pe.isStepping)&&(s=setTimeout(()=>{r(),o()},pe.getDelayMs()))}go(()=>(pe.state,pe.speed,xt.activeId,xt.events.length,pe.isPaused&&xt.setFollowLive(!1),o(),()=>{s&&clearTimeout(s)}));function a(S){switch(S.type){case"connected":console.log("Connected:",S.data.message);break;case"interpret_start":Nt(e,null);break;case"step":xt.addEvent(S.data),xt.updateMachine(S.data.stateAfter);break;case"interpret_end":xt.updateMachine(S.data.finalState);break;case"interpret_error":Nt(e,S.data.error,!0);break;case"session_start":xt.create(S.data.testName,S.data.suiteName,S.data.suiteId,S.data.stock,S.data.tools);break;case"expectation":xt.addExpectation(S.data);break;case"session_end":xt.endSession(S.data.allPassed);break}}function l(){Nt(e,null)}function c(S){pe.isPlaying&&pe.pause(),xt.setFollowLive(!1),xt.setCurrentIndex(S)}function u(S){xt.activeSuiteId!==S&&pe.isPlaying&&pe.pause(),xt.setFollowLive(!1),xt.setActiveSuite(S)}function h(S){xt.activeId!==S&&pe.isPlaying&&pe.pause(),xt.setFollowLive(!1),xt.setActive(S)}var f=Zb(),d=Mt(f);Hg(d,{});var _=Ft(d,2);{var v=S=>{var M=jb(),R=yi(M);Xg(R,{onSuiteSwitch:u});var P=Ft(R,2);jg(P,{onTabSwitch:h}),Ct(S,M)};Te(_,S=>{xt.count>0&&S(v)})}var m=Ft(_,2),p=Mt(m),x=Mt(p);qb(x,{onEventClick:c});var y=Ft(p,2),g=Mt(y);bb(g,{});var T=Ft(y,2),b=Mt(T);kb(b,{});var E=Ft(m,2);Ub(E,{});var A=Ft(E,2);$b(A,{get error(){return mt(e)},onDismiss:l}),Ct(n,f),es()}hg(Kb,{target:document.getElementById("app")});
