(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,5,8,10],{292:function(t,e,n){var o=n(3);e.f=o},293:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("2b267f7d",content,!0,{sourceMap:!1})},294:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("196f605c",content,!0,{sourceMap:!1})},296:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("0cef3c6f",content,!0,{sourceMap:!1})},297:function(t,e,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("11d29f57",content,!0,{sourceMap:!1})},298:function(t,e,n){var o=n(33),r=n(120).f,l={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==l.call(t)?function(t){try{return r(t)}catch(t){return c.slice()}}(t):r(o(t))}},299:function(t,e,n){"use strict";var o=n(6),r=n(2),l=n(27),c=n(29),d=n(17),f=n(123),h=n(4),m=n(16),x=n(90),y=n(7),v=n(14),w=n(121),M=n(8),j=n(26),k=n(33),_=n(85),O=n(9),N=n(48),z=n(45),S=n(66),I=n(120),D=n(298),T=n(124),A=n(46),C=n(25),E=n(87),L=n(18),Q=n(88),U=n(89),P=n(86),R=n(122),Y=n(3),$=n(292),Z=n(300),B=n(47),W=n(30),J=n(65).forEach,F=U("hidden"),H="Symbol",G=Y("toPrimitive"),K=W.set,V=W.getterFor(H),X=Object.prototype,tt=r.Symbol,et=l("JSON","stringify"),it=A.f,nt=C.f,ot=D.f,at=E.f,lt=Q("symbols"),ct=Q("op-symbols"),gt=Q("string-to-symbol-registry"),st=Q("symbol-to-string-registry"),ut=Q("wks"),pt=r.QObject,ft=!pt||!pt.prototype||!pt.prototype.findChild,ht=d&&h((function(){return 7!=z(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=it(X,e);o&&delete X[e],nt(t,e,n),o&&t!==X&&nt(X,e,o)}:nt,bt=function(t,e){var symbol=lt[t]=z(tt.prototype);return K(symbol,{type:H,tag:t,description:e}),d||(symbol.description=e),symbol},mt=function(t,e,n){t===X&&mt(ct,e,n),M(t);var o=_(e);return M(n),m(lt,o)?(n.enumerable?(m(t,F)&&t[F][o]&&(t[F][o]=!1),n=z(n,{enumerable:N(0,!1)})):(m(t,F)||nt(t,F,N(1,{})),t[F][o]=!0),ht(t,o,n)):nt(t,o,n)},xt=function(t,e){M(t);var n=k(e),o=S(n).concat(Mt(n));return J(o,(function(e){d&&!yt.call(n,e)||mt(t,e,n[e])})),t},yt=function(t){var e=_(t),n=at.call(this,e);return!(this===X&&m(lt,e)&&!m(ct,e))&&(!(n||!m(this,e)||!m(lt,e)||m(this,F)&&this[F][e])||n)},vt=function(t,e){var n=k(t),o=_(e);if(n!==X||!m(lt,o)||m(ct,o)){var r=it(n,o);return!r||!m(lt,o)||m(n,F)&&n[F][o]||(r.enumerable=!0),r}},wt=function(t){var e=ot(k(t)),n=[];return J(e,(function(t){m(lt,t)||m(P,t)||n.push(t)})),n},Mt=function(t){var e=t===X,n=ot(e?ct:k(t)),o=[];return J(n,(function(t){!m(lt,t)||e&&!m(X,t)||o.push(lt[t])})),o};(f||(tt=function(){if(this instanceof tt)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,e=R(t),n=function(t){this===X&&n.call(ct,t),m(this,F)&&m(this[F],e)&&(this[F][e]=!1),ht(this,e,N(1,t))};return d&&ft&&ht(X,e,{configurable:!0,set:n}),bt(e,t)},L(tt.prototype,"toString",(function(){return V(this).tag})),L(tt,"withoutSetter",(function(t){return bt(R(t),t)})),E.f=yt,C.f=mt,A.f=vt,I.f=D.f=wt,T.f=Mt,$.f=function(t){return bt(Y(t),t)},d&&(nt(tt.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),c||L(X,"propertyIsEnumerable",yt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:tt}),J(S(ut),(function(t){Z(t)})),o({target:H,stat:!0,forced:!f},{for:function(t){var e=O(t);if(m(gt,e))return gt[e];var symbol=tt(e);return gt[e]=symbol,st[symbol]=e,symbol},keyFor:function(t){if(!w(t))throw TypeError(t+" is not a symbol");if(m(st,t))return st[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),o({target:"Object",stat:!0,forced:!f,sham:!d},{create:function(t,e){return void 0===e?z(t):xt(z(t),e)},defineProperty:mt,defineProperties:xt,getOwnPropertyDescriptor:vt}),o({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:wt,getOwnPropertySymbols:Mt}),o({target:"Object",stat:!0,forced:h((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(j(t))}}),et)&&o({target:"JSON",stat:!0,forced:!f||h((function(){var symbol=tt();return"[null]"!=et([symbol])||"{}"!=et({a:symbol})||"{}"!=et(Object(symbol))}))},{stringify:function(t,e,n){for(var o,r=[t],l=1;arguments.length>l;)r.push(arguments[l++]);if(o=e,(v(e)||void 0!==t)&&!w(t))return x(e)||(e=function(t,e){if(y(o)&&(e=o.call(this,t,e)),!w(e))return e}),r[1]=e,et.apply(null,r)}});if(!tt.prototype[G]){var jt=tt.prototype.valueOf;L(tt.prototype,G,(function(){return jt.apply(this,arguments)}))}B(tt,H),P[F]=!0},300:function(t,e,n){var path=n(301),o=n(16),r=n(292),l=n(25).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});o(e,t)||l(e,t,{value:r.f(t)})}},301:function(t,e,n){var o=n(2);t.exports=o},302:function(t,e,n){"use strict";var o=n(6),r=n(17),l=n(2),c=n(16),d=n(7),f=n(14),h=n(25).f,m=n(200),x=l.Symbol;if(r&&d(x)&&(!("description"in x.prototype)||void 0!==x().description)){var y={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof v?new x(t):void 0===t?x():x(t);return""===t&&(y[e]=!0),e};m(v,x);var w=v.prototype=x.prototype;w.constructor=v;var M=w.toString,j="Symbol(test)"==String(x("test")),k=/^Symbol\((.*)\)[^)]+$/;h(w,"description",{configurable:!0,get:function(){var symbol=f(this)?this.valueOf():this,t=M.call(symbol);if(c(y,symbol))return"";var desc=j?t.slice(7,-1):t.replace(k,"$1");return""===desc?void 0:desc}}),o({global:!0,forced:!0},{Symbol:v})}},303:function(t,e,n){"use strict";n(293)},304:function(t,e,n){var o=n(23)(!1);o.push([t.i,".titlepage[data-v-50cdf1b6]{align-items:center;min-height:30vh;width:100%;padding-top:120px;display:flex;justify-content:center;padding-left:50px;padding-right:50px;margin-bottom:15px}.titlepage h1[data-v-50cdf1b6]{color:#fff;font-weight:400;font-size:40px;text-align:center}@media screen and (max-width:850px){.titlepage[data-v-50cdf1b6]{padding-left:25px!important;padding-right:25px!important}}",""]),t.exports=o},305:function(t,e,n){"use strict";n(294)},306:function(t,e,n){var o=n(23)(!1);o.push([t.i,".button1[data-v-58214e18]{background:linear-gradient(96.41deg,#6525af,#8a5ebe)}",""]),t.exports=o},307:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:"Titre de la page"}}},r=(n(303),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"titlepage"},[n("h1",{attrs:{"data-aos":"fade","data-aos-duration":"1500","data-aos-easing":"ease-out-cubic"}},[t._v("\n    "+t._s(t.title)+"\n  ")])])}),[],!1,null,"50cdf1b6",null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:"BOUTON"}}},r=(n(305),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button1"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"58214e18",null);e.default=component.exports},309:function(t,e,n){"use strict";n(296)},310:function(t,e,n){var o=n(23)(!1);o.push([t.i,".button2[data-v-147b4cb2]{background:linear-gradient(96.41deg,#3d87e0,#70abf3)}",""]),t.exports=o},311:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:"BOUTON"}}},r=(n(309),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button2"},[t._v("\n    "+t._s(t.title)+"\n")])}),[],!1,null,"147b4cb2",null);e.default=component.exports},312:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjk5OTMgNS44NTc1MkMyMC45NzgzIDUuMzA1NjMgMjAuNTE0IDQuODc1MjIgMTkuOTYyMSA0Ljg5NjE2TDEwLjk2ODYgNS4yMzc0OEMxMC40MTY3IDUuMjU4NDIgOS45ODYyNSA1LjcyMjggMTAuMDA3MiA2LjI3NDY4QzEwLjAyODEgNi44MjY1NyAxMC40OTI1IDcuMjU2OTkgMTEuMDQ0NCA3LjIzNjA0TDE5LjAzODYgNi45MzI2NUwxOS4zNDIgMTQuOTI2OUMxOS4zNjMgMTUuNDc4OCAxOS44Mjc0IDE1LjkwOTIgMjAuMzc5MiAxNS44ODgzQzIwLjkzMTEgMTUuODY3MyAyMS4zNjE1IDE1LjQwMjkgMjEuMzQwNiAxNC44NTFMMjAuOTk5MyA1Ljg1NzUyWk02LjczMzQxIDIxLjY3OThMMjAuNzMzNCA2LjU3NTIzTDE5LjI2NjYgNS4yMTU2Nkw1LjI2NjU5IDIwLjMyMDJMNi43MzM0MSAyMS42Nzk4WiIgZmlsbD0iIzNEODdFMCIvPgo8L3N2Zz4K"},313:function(t,e,n){"use strict";n(297)},314:function(t,e,n){var o=n(23)(!1);o.push([t.i,'input[type=search],select:focus{font-size:16px}#inputsearch{width:100%;display:flex;justify-content:center;background:#1e1e1e;padding-left:50px;padding-right:50px}#inputsearch input{height:50px;width:390px;border-radius:5px!important;outline:none;border:0;padding:15px;font-family:"Manrope";color:#000;transition:background .4s ease;font-weight:400}#inputsearch input::-moz-placeholder{font-size:16px}#inputsearch input:-ms-input-placeholder{font-size:16px}#inputsearch input::placeholder{font-size:16px}#inputsearch input:focus{color:#fff;background:#000;transition:background .2s ease}#categorie{width:100%;padding-left:50px;padding-right:50px;display:flex;justify-content:center;align-items:center}#categorie button{margin-right:10px;margin-left:10px}#blog{min-height:70vh;height:auto;background:#1e1e1e;padding:50px 200px}#blog #blog-grid{display:grid;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(390px,auto));grid-column-gap:50px;-moz-column-gap:50px;column-gap:50px;grid-row-gap:50px;row-gap:50px;grid-auto-rows:minmax(390px,auto);max-width:1300px;height:auto;min-height:500px;margin-left:auto;margin-right:auto}#blog #blog-grid .blog-grid-block{width:390px;height:390px;color:#fff;margin-bottom:35px}#blog #blog-grid .blog-grid-block a{text-decoration:none;color:#fff}#blog #blog-grid .blog-grid-block a .blog-grid-block-img{border-radius:5px!important;width:100%;height:auto;margin-bottom:10px;transition:opacity .3s ease}#blog #blog-grid .blog-grid-block a .blog-grid-block-img:hover{opacity:.6;transition:opacity .3s ease}#blog #blog-grid .blog-grid-block a .date{font-size:14px}#blog #blog-grid .blog-grid-block a h3{font-weight:700;font-size:20px;margin-bottom:10px;margin-top:10px}#blog #blog-grid .blog-grid-block a p{font-size:14px;font-weight:400;margin-bottom:10px}#blog #seemore{margin-right:auto;margin-left:auto;display:flex;justify-content:center}#blog #result{width:100%;height:auto;display:flex;align-items:center;flex-direction:column}#blog #result h2{color:#fff;text-align:center}@media screen and (max-width:850px){#blog,#inputsearch{padding-left:25px!important;padding-right:25px!important}}@media screen and (max-width:749px){#categorie{flex-direction:column;margin-left:auto;margin-right:auto;max-width:490px;padding:0 50px}#categorie button{margin:10px 0;min-width:100%!important}#categorie a{width:100%;display:flex;justify-content:center;text-decoration:none}}@media screen and (max-width:499px){#inputsearch input{width:100%}#categorie{padding-left:25px!important;padding-right:25px!important;margin:0;width:100%;align-self:center}#categorie a{min-width:100%}#categorie button{min-width:100%!important}#blog #blog-grid{grid-template-columns:repeat(auto-fit,100%)}#blog #blog-grid .blog-grid-block{width:100%!important;height:auto;margin-bottom:0}#blog #blog-grid .blog-grid-block a .blog-grid-block-img{width:100%}}.link-article{color:#3d87e0;font-weight:700;text-decoration:underline;display:flex;align-items:flex-end;cursor:pointer;transition:opacity .3s ease}.link-article:hover{opacity:.6;transition:opacity .3s ease}.link-article img{height:20px}',""]),t.exports=o},315:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"link-article"},[t._v("OUVRIR L’ARTICLE\n  "),o("img",{attrs:{src:n(312)}})])}],r=(n(313),n(12)),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports},364:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("3c678304",content,!0,{sourceMap:!1})},460:function(t,e,n){"use strict";n(364)},461:function(t,e,n){var o=n(23)(!1);o.push([t.i,'input[type=search],select:focus{font-size:16px}#inputsearch{width:100%;display:flex;justify-content:center;background:#1e1e1e;padding-left:50px;padding-right:50px}#inputsearch input{height:50px;width:390px;border-radius:5px!important;outline:none;border:0;padding:15px;font-family:"Manrope";color:#000;transition:background .4s ease;font-weight:400}#inputsearch input::-moz-placeholder{font-size:16px}#inputsearch input:-ms-input-placeholder{font-size:16px}#inputsearch input::placeholder{font-size:16px}#inputsearch input:focus{color:#fff;background:#000;transition:background .2s ease}#categorie{width:100%;padding-left:50px;padding-right:50px;display:flex;justify-content:center;align-items:center}#categorie button{margin-right:10px;margin-left:10px}#blog{min-height:70vh;height:auto;background:#1e1e1e;padding:50px 200px}#blog #blog-grid{display:grid;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(390px,auto));grid-column-gap:50px;-moz-column-gap:50px;column-gap:50px;grid-row-gap:50px;row-gap:50px;grid-auto-rows:minmax(390px,auto);max-width:1300px;height:auto;min-height:500px;margin-left:auto;margin-right:auto}#blog #blog-grid .blog-grid-block{width:390px;height:390px;color:#fff;margin-bottom:35px}#blog #blog-grid .blog-grid-block a{text-decoration:none;color:#fff}#blog #blog-grid .blog-grid-block a .blog-grid-block-img{border-radius:5px!important;width:100%;height:auto;margin-bottom:10px;transition:opacity .3s ease}#blog #blog-grid .blog-grid-block a .blog-grid-block-img:hover{opacity:.6;transition:opacity .3s ease}#blog #blog-grid .blog-grid-block a .date{font-size:14px}#blog #blog-grid .blog-grid-block a h3{font-weight:700;font-size:20px;margin-bottom:10px;margin-top:10px}#blog #blog-grid .blog-grid-block a p{font-size:14px;font-weight:400;margin-bottom:10px}#blog #seemore{margin-right:auto;margin-left:auto;display:flex;justify-content:center}#blog #result{width:100%;height:auto;display:flex;align-items:center;flex-direction:column}#blog #result h2{color:#fff;text-align:center}@media screen and (max-width:850px){#blog,#inputsearch{padding-left:25px!important;padding-right:25px!important}}@media screen and (max-width:749px){#categorie{flex-direction:column;margin-left:auto;margin-right:auto;max-width:490px;padding:0 50px}#categorie button{margin:10px 0;min-width:100%!important}#categorie a{width:100%;display:flex;justify-content:center;text-decoration:none}}@media screen and (max-width:499px){#inputsearch input{width:100%}#categorie{padding-left:25px!important;padding-right:25px!important;margin:0;width:100%;align-self:center}#categorie a{min-width:100%}#categorie button{min-width:100%!important}#blog #blog-grid{grid-template-columns:repeat(auto-fit,100%)}#blog #blog-grid .blog-grid-block{width:100%!important;height:auto;margin-bottom:0}#blog #blog-grid .blog-grid-block a .blog-grid-block-img{width:100%}}',""]),t.exports=o},488:function(t,e,n){"use strict";n.r(e);n(299),n(302),n(38),n(126),n(34);var o=n(5),r={layout:"default",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("blog",o.slug).only(["title","date","extrait","slug","id","img","alt"]).where({categorie:"web"}).sortBy("id","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{blog:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{searchQuery:"",title:"Catégorie : web | Nathan Lagrange - Développeur front-end",description:"Ce blog regroupe mes productions en webdesign, musique et autres inclassables...",ogimage:"https://ucarecdn.com/aecefba6-372d-4a80-87c2-ee0c96bb54dc/ogimageblog.webp"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{property:"og:site_name",content:"Nathan Lagrange - Développeur front-end"},{hid:"og:type",property:"og:type",content:"page"},{hid:"og:url",property:"og:url",content:"https://nathanlagrange.dev/blog/web"},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.ogimage},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{name:"twitter:site",content:"@nathanlagrange"},{name:"twitter:card",content:"summary_large_image"},{hid:"twitter:url",name:"twitter:url",content:"https://nathanlagrange.dev"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.ogimage}],link:[{hid:"canonical",rel:"canonical",href:"https://nathanlagrange.dev"}]}},watch:{searchQuery:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$content("blog").search(t).where({categorie:"web"}).sortBy("id","desc").fetch();case 2:e.blog=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},methods:{reload:function(){location.reload()}}},l=(n(460),n(12)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("titlepage",{attrs:{title:"Catégorie : 'web'"}}),t._v(" "),n("div",{staticClass:"sep-20"}),t._v(" "),n("section",{attrs:{id:"inputsearch"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{id:"inputsearch__input",type:"search",autocomplete:"off",placeholder:"🔍  Rechercher un post"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sep-40"}),t._v(" "),n("div",{attrs:{id:"categorie"}},[n("nuxt-link",{attrs:{to:"/blog"}},[n("button1",{attrs:{title:"Tout"}})],1),t._v(" "),n("nuxt-link",{attrs:{to:"/blog/webdesign"}},[n("button1",{attrs:{title:"Web design"}})],1),t._v(" "),n("nuxt-link",{attrs:{to:"/blog/web"}},[n("button2",{attrs:{title:"Web"}})],1),t._v(" "),n("nuxt-link",{attrs:{to:"/blog/alternance"}},[n("button1",{attrs:{title:"Alternance"}})],1)],1),t._v(" "),n("section",{attrs:{id:"blog"}},[t.blog.length?t._e():n("div",{attrs:{id:"result"},on:{click:function(e){return t.reload()}}},[n("h2",[t._v("Aucun résultat pour cette recherche 😟")]),t._v(" "),n("div",{staticClass:"sep-20"}),t._v(" "),n("button2",{attrs:{title:"Retour"}})],1),t._v(" "),n("div",{attrs:{id:"blog-grid"}},t._l(t.blog,(function(article){return n("div",{key:article.slug,staticClass:"blog-grid-block",attrs:{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-easing":"ease-out-cubic"}},[n("nuxt-link",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("img",{staticClass:"blog-grid-block-img",attrs:{src:article.img,alt:article.alt}}),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(article.date))]),t._v(" "),n("h3",[t._v(t._s(article.title))]),t._v(" "),n("p",[t._v(t._s(article.extrait))]),t._v(" "),n("open-article")],1)],1)})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Titlepage:n(307).default,Button1:n(308).default,Button2:n(311).default,OpenArticle:n(315).default})}}]);