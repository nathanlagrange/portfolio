(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9],{288:function(e,t,n){var r=n(3);t.f=r},291:function(e,t,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("60aa49de",content,!0,{sourceMap:!1})},294:function(e,t,n){var r=n(33),o=n(119).f,l={}.toString,d="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return d&&"[object Window]"==l.call(e)?function(e){try{return o(e)}catch(e){return d.slice()}}(e):o(r(e))}},295:function(e,t,n){"use strict";var r=n(6),o=n(2),l=n(25),d=n(29),c=n(17),v=n(122),m=n(4),f=n(16),h=n(90),_=n(7),y=n(14),C=n(120),x=n(8),w=n(24),P=n(33),I=n(85),S=n(9),D=n(48),L=n(45),j=n(66),N=n(119),O=n(294),k=n(123),G=n(46),U=n(23),R=n(87),E=n(18),T=n(88),F=n(89),M=n(86),J=n(121),V=n(3),$=n(288),z=n(296),B=n(47),W=n(30),A=n(65).forEach,H=F("hidden"),Q="Symbol",K=V("toPrimitive"),X=W.set,Y=W.getterFor(Q),Z=Object.prototype,ee=o.Symbol,te=l("JSON","stringify"),ne=G.f,se=U.f,ie=O.f,ae=R.f,re=T("symbols"),oe=T("op-symbols"),le=T("string-to-symbol-registry"),de=T("symbol-to-string-registry"),ue=T("wks"),ce=o.QObject,pe=!ce||!ce.prototype||!ce.prototype.findChild,ve=c&&m((function(){return 7!=L(se({},"a",{get:function(){return se(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=ne(Z,t);r&&delete Z[t],se(e,t,n),r&&e!==Z&&se(Z,t,r)}:se,ge=function(e,t){var symbol=re[e]=L(ee.prototype);return X(symbol,{type:Q,tag:e,description:t}),c||(symbol.description=t),symbol},me=function(e,t,n){e===Z&&me(oe,t,n),x(e);var r=I(t);return x(n),f(re,r)?(n.enumerable?(f(e,H)&&e[H][r]&&(e[H][r]=!1),n=L(n,{enumerable:D(0,!1)})):(f(e,H)||se(e,H,D(1,{})),e[H][r]=!0),ve(e,r,n)):se(e,r,n)},fe=function(e,t){x(e);var n=P(t),r=j(n).concat(ye(n));return A(r,(function(t){c&&!he.call(n,t)||me(e,t,n[t])})),e},he=function(e){var t=I(e),n=ae.call(this,t);return!(this===Z&&f(re,t)&&!f(oe,t))&&(!(n||!f(this,t)||!f(re,t)||f(this,H)&&this[H][t])||n)},_e=function(e,t){var n=P(e),r=I(t);if(n!==Z||!f(re,r)||f(oe,r)){var o=ne(n,r);return!o||!f(re,r)||f(n,H)&&n[H][r]||(o.enumerable=!0),o}},be=function(e){var t=ie(P(e)),n=[];return A(t,(function(e){f(re,e)||f(M,e)||n.push(e)})),n},ye=function(e){var t=e===Z,n=ie(t?oe:P(e)),r=[];return A(n,(function(e){!f(re,e)||t&&!f(Z,e)||r.push(re[e])})),r};(v||(ee=function(){if(this instanceof ee)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?S(arguments[0]):void 0,t=J(e),n=function(e){this===Z&&n.call(oe,e),f(this,H)&&f(this[H],t)&&(this[H][t]=!1),ve(this,t,D(1,e))};return c&&pe&&ve(Z,t,{configurable:!0,set:n}),ge(t,e)},E(ee.prototype,"toString",(function(){return Y(this).tag})),E(ee,"withoutSetter",(function(e){return ge(J(e),e)})),R.f=he,U.f=me,G.f=_e,N.f=O.f=be,k.f=ye,$.f=function(e){return ge(V(e),e)},c&&(se(ee.prototype,"description",{configurable:!0,get:function(){return Y(this).description}}),d||E(Z,"propertyIsEnumerable",he,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!v,sham:!v},{Symbol:ee}),A(j(ue),(function(e){z(e)})),r({target:Q,stat:!0,forced:!v},{for:function(e){var t=S(e);if(f(le,t))return le[t];var symbol=ee(t);return le[t]=symbol,de[symbol]=t,symbol},keyFor:function(e){if(!C(e))throw TypeError(e+" is not a symbol");if(f(de,e))return de[e]},useSetter:function(){pe=!0},useSimple:function(){pe=!1}}),r({target:"Object",stat:!0,forced:!v,sham:!c},{create:function(e,t){return void 0===t?L(e):fe(L(e),t)},defineProperty:me,defineProperties:fe,getOwnPropertyDescriptor:_e}),r({target:"Object",stat:!0,forced:!v},{getOwnPropertyNames:be,getOwnPropertySymbols:ye}),r({target:"Object",stat:!0,forced:m((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(w(e))}}),te)&&r({target:"JSON",stat:!0,forced:!v||m((function(){var symbol=ee();return"[null]"!=te([symbol])||"{}"!=te({a:symbol})||"{}"!=te(Object(symbol))}))},{stringify:function(e,t,n){for(var r,o=[e],l=1;arguments.length>l;)o.push(arguments[l++]);if(r=t,(y(t)||void 0!==e)&&!C(e))return h(t)||(t=function(e,t){if(_(r)&&(t=r.call(this,e,t)),!C(t))return t}),o[1]=t,te.apply(null,o)}});if(!ee.prototype[K]){var Ce=ee.prototype.valueOf;E(ee.prototype,K,(function(){return Ce.apply(this,arguments)}))}B(ee,Q),M[H]=!0},296:function(e,t,n){var path=n(297),r=n(16),o=n(288),l=n(23).f;e.exports=function(e){var t=path.Symbol||(path.Symbol={});r(t,e)||l(t,e,{value:o.f(e)})}},297:function(e,t,n){var r=n(2);e.exports=r},298:function(e,t,n){"use strict";var r=n(6),o=n(17),l=n(2),d=n(16),c=n(7),v=n(14),m=n(23).f,f=n(198),h=l.Symbol;if(o&&c(h)&&(!("description"in h.prototype)||void 0!==h().description)){var _={},y=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof y?new h(e):void 0===e?h():h(e);return""===e&&(_[t]=!0),t};f(y,h);var C=y.prototype=h.prototype;C.constructor=y;var x=C.toString,w="Symbol(test)"==String(h("test")),P=/^Symbol\((.*)\)[^)]+$/;m(C,"description",{configurable:!0,get:function(){var symbol=v(this)?this.valueOf():this,e=x.call(symbol);if(d(_,symbol))return"";var desc=w?e.slice(7,-1):e.replace(P,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:y})}},302:function(e,t,n){"use strict";n(291)},303:function(e,t,n){var r=n(27)(!1);r.push([e.i,".titlepage[data-v-1a2310ba]{align-items:center;min-height:30vh;width:100%;padding-top:120px;display:flex;justify-content:center;padding-left:50px;padding-right:50px;margin-bottom:15px}.titlepage h1[data-v-1a2310ba]{color:#fff;font-weight:400;font-size:40px;text-align:center}@media screen and (max-width:850px){.titlepage[data-v-1a2310ba]{padding-left:25px!important;padding-right:25px!important}}",""]),e.exports=r},307:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,default:"Titre de la page"}}},o=(n(302),n(12)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"titlepage"},[n("h1",[e._v(e._s(e.title))])])}),[],!1,null,"1a2310ba",null);t.default=component.exports},343:function(e,t,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("67f29cfe",content,!0,{sourceMap:!1})},368:function(e,t,n){"use strict";n(343)},369:function(e,t,n){var r=n(27)(!1);r.push([e.i,"#titre[data-v-7d84f11b]{padding-left:50px;padding-right:50px}#mention[data-v-7d84f11b]{display:flex;justify-content:center}#mention #mention-block[data-v-7d84f11b]{margin-bottom:50px;margin-top:50px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background-color:#fff;max-width:1000px;border-radius:5px;min-height:120vh;padding:50px;filter:drop-shadow(0 0 5px rgba(255,255,255,.3))}#mention #mention-block h2[data-v-7d84f11b]{text-align:left;font-size:35px;width:100%}#mention #mention-block h3[data-v-7d84f11b]{text-align:left;width:100%}#mention #mention-block p[data-v-7d84f11b]{width:100%}#mention #mention-block li[data-v-7d84f11b]{list-style-type:none;color:#3d87e0}@media screen and (max-width:850px){#titre[data-v-7d84f11b]{padding-left:25px!important;padding-right:25px!important}#mention #mention-block[data-v-7d84f11b]{border-radius:0;width:100%}#mention #mention-block h2[data-v-7d84f11b]{font-size:25px}#mention #mention-block h3[data-v-7d84f11b]{font-size:20px}}",""]),e.exports=r},471:function(e,t,n){"use strict";n.r(t);n(295),n(298);var r={data:function(){return{title:"Mentions légales | Nathan Lagrange - Développeur front-end",description:"nathanlagrange.dev, page mentions légales",ogimage:"https://ucarecdn.com/8f1d6f69-d3e4-41d1-b1d1-8f9e64322e49/ogimageindex.webp"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{property:"og:site_name",content:"Nathan Lagrange - Développeur front-end"},{hid:"og:type",property:"og:type",content:"page"},{hid:"og:url",property:"og:url",content:"https://nathanlagrange.dev/blog/musique"},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.ogimage},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{name:"twitter:site",content:"@nathanlagrange"},{name:"twitter:card",content:"summary_large_image"},{hid:"twitter:url",name:"twitter:url",content:"https://nathanlagrange.dev"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.ogimage}],link:[{hid:"canonical",rel:"canonical",href:"https://nathanlagrange.dev"}]}}},o=(n(368),n(12)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{attrs:{id:"titre"}},[n("titlepage",{attrs:{title:"Mentions légales 🧾"}})],1),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"mention"}},[n("div",{attrs:{id:"mention-block"}},[n("h2",[e._v("I. Présentation du site internet")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique,\n        il est précisé aux utilisateurs du site internet nathanlagrange.dev, l'identité des différents intervenants\n        dans le cadre de sa réalisation et de son suivi:\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[n("strong",[e._v("Propriétaire")]),e._v(" : Nathan Lagrange – 80 rue de Redon 35580 Guichen\n        "),n("br"),e._v(" "),n("strong",[e._v("Responsable publication")]),e._v(" : Nathan Lagrange – nathanlagrange98@gmail.com"),n("br")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Le responsable publication est une personne physique.\n        "),n("br"),n("br"),e._v(" "),n("strong",[e._v("Webmaster")]),e._v(" : Nathan Lagrange – nathanlagrange98@gmail.com"),n("br"),e._v(" "),n("strong",[e._v("Hébergeur")]),e._v(" : Netlify – 2325 3rd Street, Suite 296 San Francisco "),n("br"),e._v(" "),n("strong",[e._v("Délégué à la protection des données")]),e._v(" : Nathan Lagrange – nathanlagrange98@gmail.com"),n("br")]),e._v(" "),n("div",{staticClass:"sep-50"}),e._v(" "),n("h2",[e._v("II. Conditions générales d’utilisation du site et des services proposés")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Le site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle\n        et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder\n        ou exploiter pour son propre compte tout ou partie des éléments ou travaux du site.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        L’utilisation du site nathanlagrange.dev implique l’acceptation pleine et entière des\n        conditions générales d’utilisation ci-après décrites.\n        Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment,\n        les utilisateurs du site nathanlagrange.dev sont donc invités à les consulter de manière régulière.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Ce site internet est normalement accessible à tout moment aux utilisateurs.\n        Une interruption pour raison de maintenance technique peut être toutefois décidée par\n        nathanlagrange.dev, qui s’efforcera alors de communiquer préalablement aux\n        utilisateurs les dates et heures de l’intervention.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Le site web nathanlagrange.dev est mis à jour régulièrement par nathanlagrange.dev responsable.\n        De la même façon, les mentions légales peuvent être modifiées à tout moment :\n        elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le\n        plus souvent possible afin d’en prendre connaissance.\n      ")]),e._v(" "),n("div",{staticClass:"sep-50"}),e._v(" "),n("h2",[e._v("III. Description des services fournis")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Le site internet nathanlagrange.dev a pour objet de fournir une information concernant\n        l’ensemble des activités du développeur (site vitrine).\n        nathanlagrange.dev s’efforce de fournir sur le site nathanlagrange.dev des informations aussi précises que possible.\n        Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour,\n        qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Toutes les informations indiquées sur le site nathanlagrange.dev sont données à titre indicatif,\n        et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site nathanlagrange.dev ne sont pas exhaustifs.\n        Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.\n      ")]),e._v(" "),n("div",{staticClass:"sep-50"}),e._v(" "),n("h2",[e._v("IV. Limitations contractuelles sur les données techniques")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("Le site internet utilise la technologie VueJS / Nuxt (Javascript)")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site.\n        De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent\n        avec un navigateur de dernière génération mis-à-jour\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        L’objectif est d’apporter une prestation qui assure le meilleur\n        taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24,\n        tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service\n        d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance,\n        d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations\n        et Services génèrent un trafic réputé anormal.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Nathan Lagrange et l’hébergeur ne pourront être tenus responsables en cas\n        de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel\n        informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.\n      ")]),e._v(" "),n("div",{staticClass:"sep-50"}),e._v(" "),n("h2",[e._v("V. Propriété intellectuelle et contrefaçons")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        nathanlagrange.dev est propriétaire des droits de propriété intellectuelle et détient les droits\n        d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images,\n        graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication,\n        adaptation de tout ou partie des éléments du site, quel que soit le moyen\n        ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : nathanlagrange.dev\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera\n        considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des\n        articles L.335-2 et suivants du Code de la Propriété Intellectuelle.\n      ")]),e._v(" "),n("div",{staticClass:"sep-50"}),e._v(" "),n("h2",[e._v("VI. Limitations de responsabilité")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        nathanlagrange.dev agit en tant qu’éditeur du site. nathanlagrange.dev\n        est responsable de la qualité et de la véracité du Contenu qu’il publie.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        nathanlagrange.dev ne pourra être tenu responsable des dommages directs et indirects causés au\n        matériel de l’utilisateur, lors de l’accès au site internet nathanlagrange.dev\n        et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4,\n        soit de l’apparition d’un bug ou d’une incompatibilité.\n      ")]),e._v(" "),n("p",[e._v("\n        nathanlagrange.dev ne pourra également être tenu responsable des dommages indirects\n        (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation\n        du site nathanlagrange.dev.\n      ")]),e._v(" "),n("div",{staticClass:"sep-50"}),e._v(" "),n("h2",[e._v("VII. Gestion des données personnelles")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Le Client est informé des réglementations concernant la communication marketing,\n        la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi\n        Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la\n        Protection des Données (RGPD : n° 2016-679).\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("h3",[e._v("A. Responsables de la collecte des données personnelles")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur\n        et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Nathan Lagrange.\n        nathanlagrange.dev est représenté par Nathan Lagrange, son représentant légal.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        En tant que responsable du traitement des données qu’il collecte,\n        nathanlagrange.dev s’engage à respecter le cadre des dispositions légales en vigueur.\n        Il lui appartient notamment au client d’établir les finalités de ses traitements de données,\n        de fournir à ses prospects et clients, à partir de la collecte de leurs consentements,\n        une information complète sur le traitement de leurs données personnelles et de maintenir\n        un registre des traitements conforme à la réalité.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Chaque fois que nathanlagrange.dev traite des Données Personnelles, nathanlagrange.dev\n        prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des\n        Données Personnelles au regard des finalités pour lesquelles nathanlagrange.dev les traite.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("h3",[e._v("B. Finalité des données collectées")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        nathanlagrange.dev est susceptible de traiter tout ou partie des données :\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("ul",[n("li",[e._v("\n          - pour prévenir et lutter contre la fraude informatique (spamming, hacking…) :\n          matériel informatique utilisé pour la navigation, l’adresse IP, le mot de passe (hashé)\n        ")]),e._v(" "),n("div",{staticClass:"sep-10"}),e._v(" "),n("li",[e._v("\n          - pour améliorer la navigation sur le Site : données de connexion et d’utilisation\n        ")]),e._v(" "),n("div",{staticClass:"sep-10"}),e._v(" "),n("li",[e._v("\n          - pour mener des enquêtes de satisfaction facultatives sur nathanlagrange.dev : adresse email, nom, prénom\n        ")])]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        nathanlagrange.dev ne commercialise pas vos données personnelles qui sont donc uniquement\n        utilisées par nécessité ou à des fins statistiques et d’analyses.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("h3",[e._v("C. Droit d’accès, de rectification et d’opposition")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Conformément à la réglementation européenne en vigueur, les Utilisateurs de nathanlagrange.dev disposent des droits suivants :\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("ul",[n("li",[e._v("\n          - droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour,\n          de complétude des données des Utilisateurs droit de verrouillage ou d’effacement des données\n          des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes,\n          incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou\n          la conservation est interdite.\n        ")]),e._v(" "),n("div",{staticClass:"sep-10"}),e._v(" "),n("li",[e._v("\n          - droit de retirer à tout moment un consentement (article 13-2c RGPD)\n        ")]),e._v(" "),n("div",{staticClass:"sep-10"}),e._v(" "),n("li",[e._v("\n          - droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD)\n        ")]),e._v(" "),n("div",{staticClass:"sep-10"}),e._v(" "),n("li",[e._v("\n          - droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD)\n        ")]),e._v(" "),n("div",{staticClass:"sep-10"}),e._v(" "),n("li",[e._v("\n          - droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données\n          font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD)\n        ")]),e._v(" "),n("div",{staticClass:"sep-10"}),e._v(" "),n("li",[e._v("\n          - droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui\n          nathanlagrange.dev devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement désigné\n        ")])]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Dès que nathanlagrange.dev a connaissance du décès d’un Utilisateur et à défaut\n        d’instructions de sa part, nathanlagrange.dev s’engage à détruire ses données, sauf si leur\n        conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Si l’Utilisateur souhaite savoir comment nathanlagrange.dev\n        utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement,\n        l’Utilisateur peut contacter nathanlagrange.dev par écrit à l’adresse suivante :\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Nathan Lagrange – DPO, Nathan Lagrange "),n("br"),e._v("\n        2595 Boulevard Paul Valéry 34070 Montpellier.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que\n        nathanlagrange.dev corrige, mette à jour ou supprime, en\n        s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport).\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à\n        nathanlagrange.dev par la loi, notamment en matière de conservation ou d’archivage des documents.\n        Enfin, les Utilisateurs de nathanlagrange.dev peuvent déposer une réclamation auprès des autorités\n        de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("h3",[e._v("D. Non-communication des données personnelles")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        nathanlagrange.dev s’interdit de traiter, héberger ou transférer les Informations collectées\n        sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme « non adéquat »\n        par la Commission européenne sans en informer préalablement le client. Pour autant, nathanlagrange.dev\n        reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’ils\n        présentent les garanties suffisantes au regard des exigences du Règlement Général sur la\n        Protection des Données (RGPD : n° 2016-679).\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        nathanlagrange.dev s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité\n        des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées.\n        Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du Client est portée\n        à la connaissance de nathanlagrange.dev, celle-ci devra dans les meilleurs délais informer le Client\n        et lui communiquer les mesures de corrections prises. Par ailleurs nathanlagrange.dev ne collecte\n        aucune « données sensibles ».\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("h2",[e._v("VIII. Balises (“tags”) internet")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        nathanlagrange.dev peut employer occasionnellement des balises Internet (également appelées « tags »,\n        ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer\n        par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver\n        (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur)\n        dans un pays étranger.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Cette technologie permet à nathanlagrange.dev d’évaluer les réponses des visiteurs face\n        au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte\n        et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur.\n        Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs\n        du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité\n        du Site à l’attention de nathanlagrange.dev, et fournir d’autres services relatifs à l’utilisation\n        de celui-ci et d’Internet.\n      ")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("h2",[e._v("Droit applicable et attribution de juridiction")]),e._v(" "),n("div",{staticClass:"sep-30"}),e._v(" "),n("p",[e._v("\n        Tout litige en relation avec l’utilisation du site nathanlagrange.dev est soumis au droit français.\n        En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction\n        aux tribunaux compétents de Montpellier.\n      ")])])])}],!1,null,"7d84f11b",null);t.default=component.exports;installComponents(component,{Titlepage:n(307).default})}}]);