(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},o={app:0},r=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-12f078a5":"cfc6865d","chunk-22f75cfe":"621d4b1c","chunk-3c0b0550":"8038f84f"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-12f078a5":1,"chunk-22f75cfe":1,"chunk-3c0b0550":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-12f078a5":"4b8c901c","chunk-22f75cfe":"b47e9cd4","chunk-3c0b0550":"0dd0bb33"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3a19":function(t,e,n){t.exports=n.p+"img/profile.030cc9c0.jpg"},"47e2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=(n("73ec"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"vs-theme":t.$vuetify.theme.dark?"dark":"light"}},[n("v-app",[n("div",{staticClass:"show-myprofile"},[n("ProfileBox")],1),n("ThemeChanger"),n("vue-page-transition",{attrs:{name:"fade-in-left"}},[n("router-view")],1)],1)],1)}),o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting-changer"},[n("v-btn",{staticClass:"button",class:t.showButton?"night":"day",attrs:{icon:"","x-large":!(t.windowWidth<=425)},on:{click:function(e){return t.clickButton()}}},[t.showButton?n("v-icon",{attrs:{"x-large":!(t.windowWidth<=425)}},[t._v(t._s(t.mdiWeatherSunny))]):n("v-icon",{attrs:{"x-large":!(t.windowWidth<=425)}},[t._v(t._s(t.mdiWeatherNight))])],1)],1)},s=[],c=n("94ed"),l={data:function(){return{showButton:this.$vuetify.theme.dark,mdiWeatherSunny:c["z"],mdiWeatherNight:c["y"],windowWidth:window.innerWidth}},methods:{clickButton:function(){this.showButton=!this.showButton,this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("theme-select",this.$vuetify.theme.dark)},onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},u=l,d=(n("d9a1"),n("2877")),f=n("6544"),v=n.n(f),h=n("8336"),p=n("132d"),m=Object(d["a"])(u,r,s,!1,null,null,null),b=m.exports;v()(m,{VBtn:h["a"],VIcon:p["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{staticClass:"button-show-overlay",class:t.$vuetify.theme.dark?"night":"day",attrs:{icon:"","x-large":!(t.windowWidth<=425)},on:{click:function(e){t.overlay=!t.overlay}}},[a("v-icon",{attrs:{"x-large":!(t.windowWidth<=425)}},[t._v(t._s(t.showIcon))])],1),a("div",{class:t.overlay?"show-overlay":"",on:{click:function(e){t.overlay=!t.overlay}}}),a("div",{staticClass:"profile-box-show",style:t.overlay?"margin-left:0px;":"margin-left: -500px;"},[a("v-card",{staticClass:"mx-auto profile-card"},[a("v-btn",{staticStyle:{float:"right"},attrs:{icon:""}},[a("v-icon",{on:{click:function(e){t.overlay=!t.overlay}}},[t._v(t._s(t.closeIcon))])],1),a("div",[a("v-card-text",{staticStyle:{"text-align":"center"}},[a("div",{staticClass:"profile-image"},[a("img",{attrs:{src:n("3a19")}})]),a("v-list-item-title",{staticClass:"headline mb-1 profile-name"},[t._v(t._s(t.name))]),a("v-list-item-title",{staticClass:"headline mb-1 profile-username"},[t._v(t._s(t.username))]),a("p",{staticClass:"profile-details"},[t._v(t._s(t.about))])],1),a("div",{staticClass:"profile-links"},t._l(t.links,(function(e,n){return a("span",{key:n},[a("v-icon",{staticClass:"icons",staticStyle:{display:"inline"},attrs:{small:"",color:e.icon_color}},[t._v(t._s(e.icon))]),a("a",{style:t.$vuetify.theme.dark?"color: white":"color: #2b2b2b",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))])],1)})),0)],1)],1)],1)],1)},_=[],w="Jenuel Ganawed",y="MisterJ",k="Hi! I live in Baguio Luzon, Philippines. I am a programmer. I eat rice and pay bills HiHi 👌😁👍😎",x=[{icon:c["r"],text:"La Trinidad, Benguet, Luzon, Philippines",link:"https://goo.gl/maps/t8KxqHTGDw7dfFvr8",icon_color:""},{icon:c["j"],text:"jenuelganawed936@gmail.com",link:"http://jenuelganawed936@gmail.com",icon_color:"#c71610"},{icon:c["p"],text:"jenuelganawed.ml",link:"http://jenuelganawed.ml",icon_color:""},{icon:c["x"],text:"BroJenuel",link:"https://twitter.com/BroJenuel",icon_color:"#1DA1F2"},{icon:c["q"],text:"jenuelganawed",link:"https://www.linkedin.com/in/jenuelganawed/",icon_color:"#0e76a8"},{icon:c["i"],text:"MisterJ936",link:"https://github.com/MisterJ936",icon_color:""}],C={name:"Home",data:function(){return{name:w,username:y,about:k,links:x,overlay:!1,showIcon:c["a"],closeIcon:c["g"],windowWidth:window.innerWidth}},methods:{onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},B=C,j=(n("eec0"),n("b0af")),E=n("99d9"),T=n("5d23"),O=Object(d["a"])(B,g,_,!1,null,null,null),S=O.exports;v()(O,{VBtn:h["a"],VCard:j["a"],VCardText:E["a"],VIcon:p["a"],VListItemTitle:T["a"]});var $={name:"App",components:{ThemeChanger:b,ProfileBox:S},beforeCreate:function(){var t=localStorage.getItem("theme-select");t&&(this.$vuetify.theme.dark="true"==t)},data:function(){return{}}},V=$,I=n("7496"),P=Object(d["a"])(V,i,o,!1,null,null,null),W=P.exports;v()(P,{VApp:I["a"]});n("d3b7");var L=n("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"profile-container"},[a("div",{staticClass:"profile-box"},[a("v-card",{staticClass:"mx-auto profile-card"},[a("div",[a("v-card-text",{staticStyle:{"text-align":"center"}},[a("div",{staticClass:"profile-image"},[a("img",{attrs:{src:n("3a19")}})]),a("v-list-item-title",{staticClass:"headline mb-1 profile-name"},[t._v(t._s(t.name))]),a("v-list-item-title",{staticClass:"headline mb-1 profile-username"},[t._v(t._s(t.username))]),a("p",{staticClass:"profile-details"},[t._v(t._s(t.about))])],1),a("div",{staticClass:"profile-links"},t._l(t.links,(function(e,n){return a("span",{key:n},[a("v-icon",{staticClass:"icons",staticStyle:{display:"inline"},attrs:{small:"",color:e.icon_color}},[t._v(t._s(e.icon))]),a("a",{style:t.$vuetify.theme.dark?"color: white":"color: #2b2b2b",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))])],1)})),0)],1)])],1),a("div",{staticClass:"info-box"},[a("v-tabs",{staticClass:"tab-wide"},t._l(t.tabs,(function(e){return a("v-tab",{key:e.text,attrs:{to:e.path}},[a("v-icon",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.text)+" ")],1)})),1),a("div",{staticClass:"info-box-page-view"},[a("v-card",{staticClass:"page",attrs:{loading:!1,disabled:!1}},[a("vue-page-transition",{attrs:{name:"fade-in-up"}},[a("router-view")],1)],1)],1)],1)]),a("div",{staticClass:"bottom-navigations"},[a("BottomNav")],1)])},A=[],N=[{path:"/",icon:c["t"],text:"Overview"},{path:"portfolio",icon:c["s"],text:"Portfolio"},{path:"/blog",icon:c["c"],text:"Blog"}],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{attrs:{fixed:!0,color:"primary"}},t._l(t.navs,(function(e){return n("v-btn",{key:e.text,attrs:{value:e.text,to:e.path}},[n("span",[t._v(t._s(e.text))]),n("v-icon",[t._v(t._s(e.icon))])],1)})),1)},R=[],J={data:function(){return{navs:N}}},D=J,M=n("b81c"),G=Object(d["a"])(D,H,R,!1,null,null,null),q=G.exports;v()(G,{VBottomNavigation:M["a"],VBtn:h["a"],VIcon:p["a"]});var F={name:"Home",components:{BottomNav:q},data:function(){return{name:w,username:y,about:k,links:x,tabs:N}},methods:{changeTheme:function(){console.log("button clickd"),this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},K=F,U=(n("d40d"),n("71a3")),Q=n("fe57"),X=Object(d["a"])(K,z,A,!1,null,null,null),Y=X.exports;v()(X,{VCard:j["a"],VCardText:E["a"],VIcon:p["a"],VListItemTitle:T["a"],VTab:U["a"],VTabs:Q["a"]});var Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not-found-body"},[n("div",{staticClass:"not-found-body"},[t._m(0),n("div",{staticClass:"desc"},[n("h2",[t._v("Ooops page not found!")]),n("v-btn",{attrs:{to:"/",color:"primary"}},[t._v("Go Back To Home Page")])],1)])])},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scene"},[n("div",{staticClass:"box"},[n("div",{staticClass:"box__face front"},[t._v("4")]),n("div",{staticClass:"box__face back"},[t._v("0")]),n("div",{staticClass:"box__face right"},[t._v("4")]),n("div",{staticClass:"box__face left"},[t._v("0")]),n("div",{staticClass:"box__face top"},[t._v("0")]),n("div",{staticClass:"box__face bottom"},[t._v("0")])]),n("div",{staticClass:"shadow"})])}],et=(n("acc0"),{}),nt=Object(d["a"])(et,Z,tt,!1,null,null,null),at=nt.exports;v()(nt,{VBtn:h["a"]}),a["default"].use(L["a"]);var it=[{path:"/",component:Y,children:[{path:"",name:"overview",component:function(){return n.e("chunk-12f078a5").then(n.bind(null,"7fa2"))}},{path:"portfolio",name:"Portfolio",component:function(){return n.e("chunk-3c0b0550").then(n.bind(null,"9a81"))}}]},{path:"/blog",name:"Blog",component:function(){return n.e("chunk-22f75cfe").then(n.bind(null,"66ba"))}},{path:"*",component:at}],ot=new L["a"]({routes:it}),rt=ot,st=n("2f62"),ct=n("bc3a"),lt=n.n(ct),ut=0x1dc30ffd10b3de0,dt="AIzaSyC82AKa4pOdwVYwiomQ6bXFyZN7BLfW9hU",ft="https://www.googleapis.com/blogger/v3/blogs/"+ut+"/posts/",vt={BLOG_GET:function(t,e){var n=t.dispatch,a=e.path,i=e.param;return new Promise((function(t,e){var o=function(){return lt.a.get(ft+a+"?key="+dt,{params:i})};o().then((function(a){var i={response:a,resolve:t,reject:e};n("VALIDATE_API",i)})).catch((function(t){n("CHECK_ERROR",{error:t,reject:e})}))}))}};a["default"].use(st["a"]);var ht=new st["a"].Store({state:{},mutations:{},actions:vt,modules:{}}),pt=n("f309");a["default"].use(pt["a"]);var mt=new pt["a"]({icons:{iconfont:"mdi"}}),bt=n("a7fe"),gt=n.n(bt),_t=n("b0d2"),wt=n.n(_t),yt=n("f0e7"),kt=n.n(yt),xt=(n("04f2"),n("f0eb"));a["default"].use(gt.a,lt.a),a["default"].use(xt["default"]),a["default"].use(wt.a),a["default"].use(kt.a),a["default"].config.productionTip=!1,new a["default"]({router:rt,store:ht,vuetify:mt,render:function(t){return t(W)}}).$mount("#app")},"6cf2":function(t,e,n){},"73ec":function(t,e,n){},acc0:function(t,e,n){"use strict";var a=n("f9f2"),i=n.n(a);i.a},d40d:function(t,e,n){"use strict";var a=n("47e2"),i=n.n(a);i.a},d9a1:function(t,e,n){"use strict";var a=n("e7c6"),i=n.n(a);i.a},e7c6:function(t,e,n){},eec0:function(t,e,n){"use strict";var a=n("6cf2"),i=n.n(a);i.a},f9f2:function(t,e,n){}});
//# sourceMappingURL=app.b9ce07cd.js.map