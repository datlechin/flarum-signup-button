(()=>{var o={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},d:(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t)};(()=>{"use strict";const t=flarum.core.compat["forum/app"];var n=o.n(t);const e=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/IndexPage"];var r=o.n(a);const s=flarum.core.compat["common/components/Button"];var c=o.n(s);const u=flarum.core.compat["common/utils/classList"];var m=o.n(u);const i=flarum.core.compat["forum/components/SignUpModal"];var l=o.n(i);n().initializers.add("datlechin/flarum-signup-button",(function(){(0,e.extend)(r().prototype,"sidebarItems",(function(o){var t=m()("Button","Button--primary","SignUpButton"),e=document.querySelector(".fas.fa-edit");null===n().session.user&&(e&&e.classList.remove(".IndexPage-newDiscussion>fa-edit"),e&&e.classList.add("fa-sign-in-alt"),o.add("signupButton",c().component({className:t,onclick:function(){return n().modal.show(l())}},n().translator.trans("datlechin-signup-button.forum.sign_up")),100))}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map