(window.webpackJsonp=window.webpackJsonp||[]).push([[20,10],{288:function(e,t,r){var o=r(3);t.f=o},289:function(e,t,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("60aa49de",content,!0,{sourceMap:!1})},294:function(e,t,r){var o=r(33),n=r(119).f,l={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return c&&"[object Window]"==l.call(e)?function(e){try{return n(e)}catch(e){return c.slice()}}(e):n(o(e))}},295:function(e,t,r){"use strict";var o=r(6),n=r(2),l=r(25),c=r(29),d=r(17),m=r(122),f=r(4),h=r(16),v=r(90),w=r(7),y=r(14),_=r(120),S=r(8),x=r(24),E=r(33),O=r(85),M=r(9),C=r(48),P=r(45),A=r(66),L=r(119),R=r(294),T=r(123),j=r(46),N=r(23),D=r(87),U=r(18),k=r(88),F=r(89),I=r(86),z=r(121),Q=r(3),W=r(288),B=r(296),G=r(47),J=r(30),V=r(65).forEach,X=F("hidden"),Y="Symbol",$=Q("toPrimitive"),H=J.set,K=J.getterFor(Y),Z=Object.prototype,ee=n.Symbol,te=l("JSON","stringify"),re=j.f,ie=N.f,oe=R.f,ne=D.f,ae=k("symbols"),se=k("op-symbols"),le=k("string-to-symbol-registry"),ue=k("symbol-to-string-registry"),pe=k("wks"),ce=n.QObject,de=!ce||!ce.prototype||!ce.prototype.findChild,me=d&&f((function(){return 7!=P(ie({},"a",{get:function(){return ie(this,"a",{value:7}).a}})).a}))?function(e,t,r){var o=re(Z,t);o&&delete Z[t],ie(e,t,r),o&&e!==Z&&ie(Z,t,o)}:ie,fe=function(e,t){var symbol=ae[e]=P(ee.prototype);return H(symbol,{type:Y,tag:e,description:t}),d||(symbol.description=t),symbol},he=function(e,t,r){e===Z&&he(se,t,r),S(e);var o=O(t);return S(r),h(ae,o)?(r.enumerable?(h(e,X)&&e[X][o]&&(e[X][o]=!1),r=P(r,{enumerable:C(0,!1)})):(h(e,X)||ie(e,X,C(1,{})),e[X][o]=!0),me(e,o,r)):ie(e,o,r)},ge=function(e,t){S(e);var r=E(t),o=A(r).concat(ye(r));return V(o,(function(t){d&&!ve.call(r,t)||he(e,t,r[t])})),e},ve=function(e){var t=O(e),r=ne.call(this,t);return!(this===Z&&h(ae,t)&&!h(se,t))&&(!(r||!h(this,t)||!h(ae,t)||h(this,X)&&this[X][t])||r)},we=function(e,t){var r=E(e),o=O(t);if(r!==Z||!h(ae,o)||h(se,o)){var n=re(r,o);return!n||!h(ae,o)||h(r,X)&&r[X][o]||(n.enumerable=!0),n}},be=function(e){var t=oe(E(e)),r=[];return V(t,(function(e){h(ae,e)||h(I,e)||r.push(e)})),r},ye=function(e){var t=e===Z,r=oe(t?se:E(e)),o=[];return V(r,(function(e){!h(ae,e)||t&&!h(Z,e)||o.push(ae[e])})),o};(m||(ee=function(){if(this instanceof ee)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?M(arguments[0]):void 0,t=z(e),r=function(e){this===Z&&r.call(se,e),h(this,X)&&h(this[X],t)&&(this[X][t]=!1),me(this,t,C(1,e))};return d&&de&&me(Z,t,{configurable:!0,set:r}),fe(t,e)},U(ee.prototype,"toString",(function(){return K(this).tag})),U(ee,"withoutSetter",(function(e){return fe(z(e),e)})),D.f=ve,N.f=he,j.f=we,L.f=R.f=be,T.f=ye,W.f=function(e){return fe(Q(e),e)},d&&(ie(ee.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),c||U(Z,"propertyIsEnumerable",ve,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!m,sham:!m},{Symbol:ee}),V(A(pe),(function(e){B(e)})),o({target:Y,stat:!0,forced:!m},{for:function(e){var t=M(e);if(h(le,t))return le[t];var symbol=ee(t);return le[t]=symbol,ue[symbol]=t,symbol},keyFor:function(e){if(!_(e))throw TypeError(e+" is not a symbol");if(h(ue,e))return ue[e]},useSetter:function(){de=!0},useSimple:function(){de=!1}}),o({target:"Object",stat:!0,forced:!m,sham:!d},{create:function(e,t){return void 0===t?P(e):ge(P(e),t)},defineProperty:he,defineProperties:ge,getOwnPropertyDescriptor:we}),o({target:"Object",stat:!0,forced:!m},{getOwnPropertyNames:be,getOwnPropertySymbols:ye}),o({target:"Object",stat:!0,forced:f((function(){T.f(1)}))},{getOwnPropertySymbols:function(e){return T.f(x(e))}}),te)&&o({target:"JSON",stat:!0,forced:!m||f((function(){var symbol=ee();return"[null]"!=te([symbol])||"{}"!=te({a:symbol})||"{}"!=te(Object(symbol))}))},{stringify:function(e,t,r){for(var o,n=[e],l=1;arguments.length>l;)n.push(arguments[l++]);if(o=t,(y(t)||void 0!==e)&&!_(e))return v(t)||(t=function(e,t){if(w(o)&&(t=o.call(this,e,t)),!_(t))return t}),n[1]=t,te.apply(null,n)}});if(!ee.prototype[$]){var _e=ee.prototype.valueOf;U(ee.prototype,$,(function(){return _e.apply(this,arguments)}))}G(ee,Y),I[X]=!0},296:function(e,t,r){var path=r(297),o=r(16),n=r(288),l=r(23).f;e.exports=function(e){var t=path.Symbol||(path.Symbol={});o(t,e)||l(t,e,{value:n.f(e)})}},297:function(e,t,r){var o=r(2);e.exports=o},298:function(e,t,r){"use strict";var o=r(6),n=r(17),l=r(2),c=r(16),d=r(7),m=r(14),f=r(23).f,h=r(198),v=l.Symbol;if(n&&d(v)&&(!("description"in v.prototype)||void 0!==v().description)){var w={},y=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof y?new v(e):void 0===e?v():v(e);return""===e&&(w[t]=!0),t};h(y,v);var _=y.prototype=v.prototype;_.constructor=y;var S=_.toString,x="Symbol(test)"==String(v("test")),E=/^Symbol\((.*)\)[^)]+$/;f(_,"description",{configurable:!0,get:function(){var symbol=m(this)?this.valueOf():this,e=S.call(symbol);if(c(w,symbol))return"";var desc=x?e.slice(7,-1):e.replace(E,"$1");return""===desc?void 0:desc}}),o({global:!0,forced:!0},{Symbol:y})}},299:function(e,t,r){"use strict";r(289)},300:function(e,t,r){var o=r(27)(!1);o.push([e.i,".titlepage[data-v-1a2310ba]{align-items:center;min-height:30vh;width:100%;padding-top:120px;display:flex;justify-content:center;padding-left:50px;padding-right:50px;margin-bottom:15px}.titlepage h1[data-v-1a2310ba]{color:#fff;font-weight:400;font-size:40px;text-align:center}@media screen and (max-width:850px){.titlepage[data-v-1a2310ba]{padding-left:25px!important;padding-right:25px!important}}",""]),e.exports=o},303:function(e,t,r){"use strict";r.r(t);var o={props:{title:{type:String,default:"Titre de la page"}}},n=(r(299),r(12)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"titlepage"},[r("h1",[e._v(e._s(e.title))])])}),[],!1,null,"1a2310ba",null);t.default=component.exports},347:function(e,t,r){var content=r(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("53b7b8d4",content,!0,{sourceMap:!1})},374:function(e,t,r){"use strict";r(347)},375:function(e,t,r){var o=r(27)(!1);o.push([e.i,"#filmographie[data-v-5e3e6215]{padding-left:50px;padding-right:50px;max-width:600px;margin-left:auto;margin-right:auto}#filmographie p[data-v-5e3e6215]{color:#fff;font-weight:300}#filmographie .loop-filmographie[data-v-5e3e6215]{display:flex;flex-direction:column;justify-content:center}#filmographie .loop-filmographie iframe[data-v-5e3e6215]{margin-left:auto;margin-right:auto;width:100%;min-height:280px;height:auto;border-radius:5px!important}#filmographie .loop-filmographie h2[data-v-5e3e6215]{font-size:20px;color:#fff}#filmographie .loop-filmographie span[data-v-5e3e6215]{color:#fff;font-size:14px;font-weight:300}#filmographie .loop-filmographie p[data-v-5e3e6215]{color:#c8c8c8;font-size:14px}@media screen and (max-width:850px){#filmographie[data-v-5e3e6215]{padding-left:25px!important;padding-right:25px!important}}",""]),e.exports=o},479:function(e,t,r){"use strict";r.r(t);r(295),r(298);var o={data:function(){return{filmo:[{title:"The Solace Comes & O'low - Rêverb",url:"https://www.youtube.com/embed/6jxo0qom5fw",date:"27.08.2021",description:"Rêverb, mon 2e single avec le groupe de rap Montpelliérain O'low"},{title:"helpnfiesta.fr | vidéo de présentation",url:"https://www.youtube.com/embed/nrcVLlnzq3E",date:"15.03.2021",description:"helpnfiesta.fr est un site que j’ai développé avec Lorenzo Tringali à l’occasion de ma 2e année d’IUT MMI à l’Université de Toulon"},{title:"Good Faith (french presentation)",url:"https://www.youtube.com/embed/tAsMTSQ2lz0",date:"22.12.2020",description:"Ma présentation personnelle de l’album de Madeon “Good Faith” réalisée pour un devoir d’animation vidéo."},{title:"The Solace Comes - Amorce",url:"https://www.youtube.com/embed/jXc3xgeQN6w",date:"01.11.2019",description:"La vidéo de Amorce, mon tout premier single avec la talentueuse Anaysa."},{title:"ORCHESTRE ULTIMA TEASER 2018",url:"https://www.youtube.com/embed/MqSDsEKgfpk",date:"11.09.2018",description:"Vidéo de promotion pour l’orchestre Ultima. Une production nextrek. En tant que cadreur/monteur."},{title:"PUB AUTO ECOLE O’PERMIS",url:"https://www.youtube.com/embed/EtweXG-Byh8",date:"04.09.2018",description:"Vidéo de promotion pour l’auto école O’PERMIS. Une production nextrek. En tant que cadreur/monteur."},{title:"Livraison dangereuse (48 HFP Montpellier)",url:"https://www.youtube.com/embed/nG0vaw06N1c",date:"15.10.2017",description:"Livraison Dangereuse a été réalisé pour le 48 HFP festival. J’ai participé en tant que chef opérateur."},{title:"BLÂKE - LES UNS CONTRE LES AUTRES",url:"https://www.youtube.com/embed/ZXWrgX56zec",date:"30.04.2017",description:"Les Uns Contre Les Autres est le dernier clip musical que j’ai réalisé. Une production nextrek."},{title:"Les Belles Paroles (court-métrage)",url:"https://www.youtube.com/embed/1DCb7hwzitM",date:"18.09.2016",description:"Les Belles paroles, un court-métrage de Chloé Mart et Alice Morin. Participation en tant que chef opérateur/monteur."},{title:"Maïcee - Follow Me",url:"https://www.youtube.com/embed/dIGR3bnqm_E",date:"26.07.2015",description:"Follow Me, le dernier clip réalisé pour l’artiste Maïcee durant l’été 2015, en tant que scénariste, réalisateur, cadreur et monteur. Une production Réalis'Arthur."},{title:"COST'ART - Tout ce qu'on a",url:"https://www.youtube.com/embed/hO9u5hQzZFU",date:"23.06.2015",description:"Une coproduction Réalis’Arthur et OTOURDEVOUS. En tant que cadreur/monteur."},{title:"Maïcee - I Don't Care",url:"https://www.youtube.com/embed/FSg4iTSMa-0",date:"27.05.2015",description:"Premier clip réalisé pour Maïcee, aux couleurs de l’Occitanie et de l’arrière pays Montpelliérain. En tant que réalisateur et monteur."},{title:"Chepercha freestyle 2 - Wazazat",url:"https://www.youtube.com/embed/i_Ft_wIy3mc",date:"24.04.2015",description:"Clip pris en one-shot aux alentours de la gare de Montpellier. Défi : ne pas tomber en filmant 😏"},{title:"Delta - Bang bang 3",url:"https://www.youtube.com/embed/ZrYVKcNQ4xc",date:"25.02.2015",description:"Clip musical pour Delta, en tant que cadreur/monteur."},{title:"Pakis - Cuck Norris",url:"https://www.youtube.com/embed/sq0W3pJ13fE",date:"01.01.2015",description:"Clip musical pour Pakis, ex-rappeur du MS CREW. En tant que cadreur. Produit par Réalis’Arthur."},{title:"Pakis - La Ride",url:"https://www.youtube.com/embed/OrlTIQDyFNc",date:"24.11.2014",description:"Projet audiovisuel expérimental réalisé à partir de différentes prises de vues. En tant que monteur."},{title:"Pakis - Prince de la Ville",url:"https://www.youtube.com/embed/DYYjY_UgrNE",date:"17.11.2014",description:"Clip de rap tourné dans la ville de Sète, en tant que cadreur/monteur."},{title:"LA Q8 - CONNEXION BILNAFRICANOTEAM",url:"https://www.youtube.com/embed/3h24oSDWuKA",date:"07.11.2014",description:"Première réalisation vidéo-musicale avec une trame scénaristique, sans doute l’un des clips les plus aboutis que j’ai pu réaliser."},{title:"LA Q8 - DANS LA PLACE",url:"https://www.youtube.com/embed/-XzRQaA9_fI",date:"26.09.2014",description:"En tant que cadreur/monteur."},{title:"MS CREW - Plus l'temps",url:"https://www.youtube.com/embed/DPx43dtwr6o",date:"19.12.2013",description:"Mon dernier clip réalisé pour le MS CREW."},{title:"Récidive (scène d'ouverture)",url:"https://www.youtube.com/embed/_kWmu8bcqNQ",date:"13.09.2013",description:"Récidive, un court-métrage d’Hayatt Carrier. Participation en tant que cadreur."},{title:"MS CREW - Montpell’Horizon",url:"https://www.youtube.com/embed/ze3koqp9AIc",date:"01.06.2012",description:"Mon tout premier clip réalisé dans les belles rues de Montpellier. Participation en tant que réalisateur, cadreur et monteur."},{title:"Le chemin de l’ermitage (bande annonce)",url:"https://www.youtube.com/embed/WJEPIZMYO8Q",date:"03.12.2011",description:"Deuxième court-métrage tourné dans le village de St Guilhem Le Désert. En tant que réalisateur. Produit par SO films ind."},{title:"Solo (court-métrage)",url:"https://www.youtube.com/embed/MGv67g9uoGA",date:"20.06.2011",description:"Premier court-métrage amateur. Produit par QDA et SO films ind."}],title:"Filmographie | Nathan Lagrange - Développeur front-end",description:"Voici différentes créations audiovisuelles réalisées par moi-même entre 2011 et 2018 pour différentes personnes (artistes, associations, entreprises,...)."}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{property:"og:site_name",content:"Nathan Lagrange - Développeur front-end"},{hid:"og:type",property:"og:type",content:"page"},{hid:"og:url",property:"og:url",content:"https://nathanlagrange.dev"},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:"https://ucarecdn.com/8f1d6f69-d3e4-41d1-b1d1-8f9e64322e49/ogimageindex.webp"},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{name:"twitter:site",content:"@nathanlagrange"},{name:"twitter:card",content:"summary_large_image"},{hid:"twitter:url",name:"twitter:url",content:"https://nathanlagrange.dev"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:"https://ucarecdn.com/8f1d6f69-d3e4-41d1-b1d1-8f9e64322e49/ogimageindex.webp"}],link:[{hid:"canonical",rel:"canonical",href:"https://nathanlagrange.dev"}]}}},n=(r(374),r(12)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("titlepage",{attrs:{title:"Filmographie"}}),e._v(" "),r("div",{attrs:{id:"filmographie"}},[r("div",{staticClass:"sep-10"}),e._v(" "),r("p",[e._v("\n      Cette page regroupe toute ma filmographie du début à la fin des années 2010.\n    ")]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("\n      J'ai cessé toute activité audiovisuelle depuis plusieurs années déjà mais je continue de\n      publier certaines vidéos pour mettre mon travail de développeur et compositeur en avant\n    ")]),e._v(" "),r("br"),e._v(" "),e._m(0),e._v(" "),r("br"),e._v(" "),e._m(1),e._v(" "),r("div",{staticClass:"sep-50"}),e._v(" "),e._l(e.filmo,(function(t){return r("div",{key:t,staticClass:"loop-filmographie"},[r("iframe",{attrs:{src:t.url,title:"YouTube video player",frameborder:"0",allow:"fullscreen"}}),e._v(" "),r("div",{staticClass:"sep-10"}),e._v(" "),r("div",{staticClass:"sep-5"}),e._v(" "),r("span",[e._v(e._s(t.date))]),e._v(" "),r("div",{staticClass:"sep-10"}),e._v(" "),r("h2",[e._v(e._s(t.title))]),e._v(" "),r("div",{staticClass:"sep-10"}),e._v(" "),r("p",[e._v("\n        "+e._s(t.description)+"\n      ")]),e._v(" "),r("div",{staticClass:"sep-50"})])}))],2)],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("i",{staticStyle:{color:"#3D87E0"}},[e._v("Fun fact : il m'arrive de les regarder par nostalgie ")]),e._v("😔\n    ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n      🍿 "),r("strong",[e._v("Bon visionnage !")])])}],!1,null,"5e3e6215",null);t.default=component.exports;installComponents(component,{Titlepage:r(303).default})}}]);