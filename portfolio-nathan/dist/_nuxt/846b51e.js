(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{273:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("1cf09105",content,!0,{sourceMap:!1})},275:function(t,e,n){"use strict";n(273)},276:function(t,e,n){var r=n(31)(!1);r.push([t.i,".button1[data-v-39863596]{background:linear-gradient(96.41deg,#6525af,#8a5ebe)}",""]),t.exports=r},278:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:"BOUTON"}}},c=(n(275),n(15)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button1"},[t._v("\n    "+t._s(t.title)+"\n")])}),[],!1,null,"39863596",null);e.default=component.exports},344:function(t,e,n){var content=n(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("528522da",content,!0,{sourceMap:!1})},425:function(t,e,n){"use strict";n(344)},426:function(t,e,n){var r=n(31)(!1);r.push([t.i,"#article-section{padding-left:50px;padding-right:50px;padding-top:70px;background-color:#1e1e1e;display:flex;justify-content:center;height:auto}#article-section article{margin-top:50px;margin-bottom:50px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff;width:80%;border-radius:5px;min-height:120vh;padding:50px;filter:drop-shadow(0 0 5px rgba(255,255,255,.3))}#article-section article h1{text-align:center}#article-section article #date{letter-spacing:6px;font-size:16px}#article-section article #description{font-size:20px;font-weight:400;max-width:750px}#article-section article .nuxt-content{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}#article-section article .nuxt-content img{max-width:750px;height:auto;border-radius:5px;margin-bottom:10px;margin-top:50px;filter:drop-shadow(0 0 9px rgba(0,0,0,.3))}#article-section article .nuxt-content p{max-width:750px}@media screen and (max-width:1199px){#article-section article .nuxt-content img{width:100%}}@media screen and (max-width:850px){#article-section,#article-section article{padding-left:25px;padding-right:25px}#article-section article{width:100%}}@media screen and (max-width:450px){#article-section{padding-left:0;padding-right:0}#article-section article{border-radius:0;width:100%}}",""]),t.exports=r},443:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(45),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),o=(n(425),n(15)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("TheHeader"),t._v(" "),n("section",{attrs:{id:"article-section"}},[n("article",[n("a",{attrs:{href:"javascript:history.back()"}},[n("button1",{attrs:{title:"Retour"}})],1),t._v(" "),n("div",{staticClass:"sep-30"}),t._v(" "),n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("div",{staticClass:"sep-20"}),t._v(" "),n("span",{attrs:{id:"date"}},[t._v(t._s(t.article.date))]),t._v(" "),n("div",{staticClass:"sep-40"}),t._v(" "),n("p",{attrs:{id:"description"}},[t._v("\n        "+t._s(t.article.description)+"\n      ")]),t._v(" "),n("nuxt-content",{staticClass:"nuxt-content",attrs:{document:t.article}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(209).default,Button1:n(278).default})}}]);