(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,4,5,7,9],{288:function(t,e,n){var r=n(3);e.f=r},289:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("196f605c",content,!0,{sourceMap:!1})},292:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("0cef3c6f",content,!0,{sourceMap:!1})},293:function(t,e,n){var r=n(33),o=n(119).f,c={}.toString,d="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return d&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return d.slice()}}(t):o(r(t))}},295:function(t,e,n){"use strict";var r=n(6),o=n(2),c=n(25),d=n(29),l=n(17),f=n(122),v=n(4),m=n(16),h=n(90),x=n(7),_=n(14),w=n(120),A=n(8),y=n(24),N=n(33),D=n(85),j=n(9),C=n(48),M=n(45),k=n(66),S=n(119),I=n(293),O=n(123),z=n(46),T=n(23),L=n(87),B=n(18),U=n(88),Q=n(89),J=n(86),E=n(121),P=n(3),G=n(288),W=n(296),Y=n(47),R=n(30),F=n(65).forEach,V=Q("hidden"),H="Symbol",Z=P("toPrimitive"),K=R.set,X=R.getterFor(H),$=Object.prototype,tt=o.Symbol,et=c("JSON","stringify"),it=z.f,at=T.f,nt=I.f,ot=L.f,st=U("symbols"),ct=U("op-symbols"),pt=U("string-to-symbol-registry"),lt=U("symbol-to-string-registry"),ft=U("wks"),ut=o.QObject,gt=!ut||!ut.prototype||!ut.prototype.findChild,vt=l&&v((function(){return 7!=M(at({},"a",{get:function(){return at(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=it($,e);r&&delete $[e],at(t,e,n),r&&t!==$&&at($,e,r)}:at,bt=function(t,e){var symbol=st[t]=M(tt.prototype);return K(symbol,{type:H,tag:t,description:e}),l||(symbol.description=e),symbol},mt=function(t,e,n){t===$&&mt(ct,e,n),A(t);var r=D(e);return A(n),m(st,r)?(n.enumerable?(m(t,V)&&t[V][r]&&(t[V][r]=!1),n=M(n,{enumerable:C(0,!1)})):(m(t,V)||at(t,V,C(1,{})),t[V][r]=!0),vt(t,r,n)):at(t,r,n)},ht=function(t,e){A(t);var n=N(e),r=k(n).concat(At(n));return F(r,(function(e){l&&!xt.call(n,e)||mt(t,e,n[e])})),t},xt=function(t){var e=D(t),n=ot.call(this,e);return!(this===$&&m(st,e)&&!m(ct,e))&&(!(n||!m(this,e)||!m(st,e)||m(this,V)&&this[V][e])||n)},_t=function(t,e){var n=N(t),r=D(e);if(n!==$||!m(st,r)||m(ct,r)){var o=it(n,r);return!o||!m(st,r)||m(n,V)&&n[V][r]||(o.enumerable=!0),o}},wt=function(t){var e=nt(N(t)),n=[];return F(e,(function(t){m(st,t)||m(J,t)||n.push(t)})),n},At=function(t){var e=t===$,n=nt(e?ct:N(t)),r=[];return F(n,(function(t){!m(st,t)||e&&!m($,t)||r.push(st[t])})),r};(f||(tt=function(){if(this instanceof tt)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?j(arguments[0]):void 0,e=E(t),n=function(t){this===$&&n.call(ct,t),m(this,V)&&m(this[V],e)&&(this[V][e]=!1),vt(this,e,C(1,t))};return l&&gt&&vt($,e,{configurable:!0,set:n}),bt(e,t)},B(tt.prototype,"toString",(function(){return X(this).tag})),B(tt,"withoutSetter",(function(t){return bt(E(t),t)})),L.f=xt,T.f=mt,z.f=_t,S.f=I.f=wt,O.f=At,G.f=function(t){return bt(P(t),t)},l&&(at(tt.prototype,"description",{configurable:!0,get:function(){return X(this).description}}),d||B($,"propertyIsEnumerable",xt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:tt}),F(k(ft),(function(t){W(t)})),r({target:H,stat:!0,forced:!f},{for:function(t){var e=j(t);if(m(pt,e))return pt[e];var symbol=tt(e);return pt[e]=symbol,lt[symbol]=e,symbol},keyFor:function(t){if(!w(t))throw TypeError(t+" is not a symbol");if(m(lt,t))return lt[t]},useSetter:function(){gt=!0},useSimple:function(){gt=!1}}),r({target:"Object",stat:!0,forced:!f,sham:!l},{create:function(t,e){return void 0===e?M(t):ht(M(t),e)},defineProperty:mt,defineProperties:ht,getOwnPropertyDescriptor:_t}),r({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:wt,getOwnPropertySymbols:At}),r({target:"Object",stat:!0,forced:v((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(y(t))}}),et)&&r({target:"JSON",stat:!0,forced:!f||v((function(){var symbol=tt();return"[null]"!=et([symbol])||"{}"!=et({a:symbol})||"{}"!=et(Object(symbol))}))},{stringify:function(t,e,n){for(var r,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(r=e,(_(e)||void 0!==t)&&!w(t))return h(e)||(e=function(t,e){if(x(r)&&(e=r.call(this,t,e)),!w(e))return e}),o[1]=e,et.apply(null,o)}});if(!tt.prototype[Z]){var yt=tt.prototype.valueOf;B(tt.prototype,Z,(function(){return yt.apply(this,arguments)}))}Y(tt,H),J[V]=!0},296:function(t,e,n){var path=n(297),r=n(16),o=n(288),c=n(23).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});r(e,t)||c(e,t,{value:o.f(t)})}},297:function(t,e,n){var r=n(2);t.exports=r},298:function(t,e,n){"use strict";var r=n(6),o=n(17),c=n(2),d=n(16),l=n(7),f=n(14),v=n(23).f,m=n(198),h=c.Symbol;if(o&&l(h)&&(!("description"in h.prototype)||void 0!==h().description)){var x={},_=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof _?new h(t):void 0===t?h():h(t);return""===t&&(x[e]=!0),e};m(_,h);var w=_.prototype=h.prototype;w.constructor=_;var A=w.toString,y="Symbol(test)"==String(h("test")),N=/^Symbol\((.*)\)[^)]+$/;v(w,"description",{configurable:!0,get:function(){var symbol=f(this)?this.valueOf():this,t=A.call(symbol);if(d(x,symbol))return"";var desc=y?t.slice(7,-1):t.replace(N,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:_})}},299:function(t,e,n){"use strict";n(289)},300:function(t,e,n){var r=n(27)(!1);r.push([t.i,".button1[data-v-58214e18]{background:linear-gradient(96.41deg,#6525af,#8a5ebe)}",""]),t.exports=r},301:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:"BOUTON"}}},o=(n(299),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button1"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"58214e18",null);e.default=component.exports},304:function(t,e,n){"use strict";n(292)},305:function(t,e,n){var r=n(27)(!1);r.push([t.i,".button2[data-v-147b4cb2]{background:linear-gradient(96.41deg,#3d87e0,#70abf3)}",""]),t.exports=r},306:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:"BOUTON"}}},o=(n(304),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button2"},[t._v("\n    "+t._s(t.title)+"\n")])}),[],!1,null,"147b4cb2",null);e.default=component.exports},313:function(t,e,n){t.exports=n.p+"img/eye.dda5ce6.webp"},314:function(t,e,n){t.exports=n.p+"img/spotify.33e6e51.webp"},315:function(t,e,n){t.exports=n.p+"img/apple-music.0a99e22.webp"},316:function(t,e,n){t.exports=n.p+"img/deezer.1c73ebb.webp"},317:function(t,e,n){t.exports=n.p+"img/soundcloud.b591871.webp"},318:function(t,e,n){t.exports=n.p+"img/youtube.ca7945d.webp"},319:function(t,e,n){t.exports=n.p+"img/amazon-music.7095783.webp"},320:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("30aac723",content,!0,{sourceMap:!1})},321:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("43cf7c25",content,!0,{sourceMap:!1})},322:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("6db39d1d",content,!0,{sourceMap:!1})},325:function(t,e,n){"use strict";n(320)},326:function(t,e,n){var r=n(27),o=n(124),c=n(327),d=n(328),l=n(329),f=r(!1),v=o(c),m=o(d),h=o(l);f.push([t.i,"#prev-site[data-v-3fe767fa]{display:flex;max-width:100%}#prev-site .prev-site__box[data-v-3fe767fa]{width:33.34%;height:380px;padding:5%;color:#fff}#prev-site .prev-site__box h3[data-v-3fe767fa]{font-size:30px;font-weight:700}#prev-site #prev-site-box__1[data-v-3fe767fa]{background:linear-gradient(0deg,rgba(61,135,224,.9),rgba(61,135,224,.9)),url("+v+");background-size:cover;background-repeat:no-repeat}#prev-site #prev-site-box__2[data-v-3fe767fa]{background:linear-gradient(0deg,rgba(30,30,30,.9),rgba(30,30,30,.9)),url("+m+");background-size:cover;background-repeat:no-repeat}#prev-site #prev-site-box__3[data-v-3fe767fa]{background:linear-gradient(0deg,rgba(101,37,175,.9),rgba(101,37,175,.9)),url("+h+");background-size:cover;background-repeat:no-repeat}@media screen and (max-width:850px){#prev-site[data-v-3fe767fa]{flex-direction:column}#prev-site .prev-site__box[data-v-3fe767fa]{width:100%;padding:25px;height:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}#prev-site .prev-site__box .sep-40[data-v-3fe767fa]{display:none}}",""]),t.exports=f},327:function(t,e,n){t.exports=n.p+"img/hnf-screen-miniature.cde6eee.webp"},328:function(t,e,n){t.exports=n.p+"img/flouvaps-screen-miniature.181bca5.webp"},329:function(t,e,n){t.exports=n.p+"img/hb-screen-miniature.6a7fe0e.webp"},330:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM5IiBoZWlnaHQ9IjEzOSIgdmlld0JveD0iMCAwIDEzOSAxMzkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY5LjUiIGN5PSI2OS41IiByPSI2OC43NSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxwYXRoIGQ9Ik02OC4yNTU0IDY5LjI5NjJDNjguMjU1NCA2OS4wNDQ4IDY4LjE1NTIgNjguODAzMiA2Ny45NzczIDY4LjYyNTNMNTIuNDMwMyA1My4wNzk2QzUyLjA1OTcgNTIuNzA5IDUxLjQ1OSA1Mi43MDkgNTEuMDg4NCA1My4wNzk2TDQ3LjI3ODEgNTYuODg5NUM0Ny4xMDAxIDU3LjA2NyA0NyA1Ny4zMDkgNDcgNTcuNTZDNDcgNTcuODExNSA0Ny4xMDAxIDU4LjA1MyA0Ny4yNzgxIDU4LjIzMUw1OC4zNDMyIDY5LjI5NjJMNDcuMjc4MSA4MC4zNjJDNDcuMTAwMSA4MC41NCA0NyA4MC43ODE1IDQ3IDgxLjAzM0M0NyA4MS4yODQ1IDQ3LjEwMDEgODEuNTI2IDQ3LjI3ODEgODEuNzA0TDUxLjA4ODQgODUuNTEzOUM1MS4yNzM5IDg1LjY5OTQgNTEuNTE2NCA4NS43OTE5IDUxLjc1OTQgODUuNzkxOUM1Mi4wMDIzIDg1Ljc5MTkgNTIuMjQ0OCA4NS42OTk0IDUyLjQzMDMgODUuNTEzOUw2Ny45NzczIDY5Ljk2NjdDNjguMTU1MiA2OS43ODkzIDY4LjI1NTQgNjkuNTQ4NyA2OC4yNTU0IDY5LjI5NjJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOTEuMDUxIDgwLjEyNjdINjYuOTIwMUM2Ni4zOTYyIDgwLjEyNjcgNjUuOTcxIDgwLjU1MTkgNjUuOTcxIDgxLjA3NTdWODUuMjUwMUM2NS45NzEgODUuNzc0IDY2LjM5NjIgODYuMTk5MSA2Ni45MjAxIDg2LjE5OTFIOTEuMDUxQzkxLjU3NDggODYuMTk5MSA5MiA4NS43NzQgOTIgODUuMjUwMVY4MS4wNzU3QzkyIDgwLjU1MTkgOTEuNTc0OCA4MC4xMjY3IDkxLjA1MSA4MC4xMjY3WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},331:function(t,e){t.exports="data:image/webp;base64,UklGRsQDAABXRUJQVlA4ILgDAABQFwCdASpsAGwAPpFCnkmlo6MhKxWowLASCWIA1qVs/sGs2dr+UDqtOefA3DIH17AeYDtJ/bd6lvSK8xH7GfrN7yXSAf2D/M9Zn6Dvlw+yX+2/7aYiB/Vez/GPzwA1iwIMyVfDJ/G+9pLU2/FqojlBb8WqiOUAOdDYNG+HkGEytdTeAU6jDqh1RX4B01IY50cyvT16vDcHZjWbHfPRuxtKf1pmVvy3cuLUdoEth3JL8cczK9B4HoqXfaAgFewBC/1RxgAA/vQ1H9xje877LuCDREOQMQActiChbKMAAAZq/9HMFk4eFVQ4jvpmm1L189memQgj4e48hv0KT57l0Z+bFlkHYnjFn+kKWi/QdgjvZE8spNpTPQVM/1C/F0v6n+sP82Wmtfebn/EANq7oM0Sr4e3fILHhvts2rOrRb8a9++BeYJEfWLaxAtOvqohFctd4k47OBP/9N+LSY1KJbuZKhCar/0h6oL+WGwVVzuLarB0n7Xj6D5i4lWanQfbeleLP5m3RdQoQA6H7gIce02XVrwgiMzWjObrrbwyTJnUGp/btxniY+eCw5YBVhcssGg+hg5J1DszbMsgqzOIbD5CAIgxdQxvb2pN9JhpAUhYcAJ8KFIRXsz1R/Z60zJTbkA0bcU103EN0h4eOjEwTrTGtTVL2uv4OYfpxcGw9F5v5P5JM18c7Smd9Bak1WMHB08HhhnLL/hsmqquaUMtmmvq/TCdNmb3km85lgCJLBg8PGIAKsYAtUIbWnpXCMA72tvoKjaXtFh7ZjQUdk/rNmG6Gvpx+HL4HlWJHtemLobF9+UGb0RV45xIHDsMLSDh40PIFU3ZRScf6tW7WBLzxBfYmPEzROCASSMvG20353rU76iSN4GHf+TvA8SpOQKVTH8daPz3usrUHcMdSzKOnJMjCOiz6pJAL1ukYYIa9VzB9Xe3Hcyv48BW0Q633ZNZiTrDXTxoUMkauvr5zGINBoQrF7Tb0GZGp4oj7OmGCNxGLP9vORbgtdAZFY1LIklVh+XzeTWjWrurK0P0gyWbzZzZPdtyzeUa2nU8nrPc7hq7SGnmS1XW/Tef1jpB3CZ+P+v/cZd4bxn/lzGxPLTPriM55vZ8aU2f22e0cDrUPw10SEytXlF9j51H6cNQaXUpKf27b5OPX2xn0mFmF+d+q9C5roke1MecpqdSmGI0ImXoK0jQ2vFCm5SfNsH8DYfNc7/AJ3iGGARF4NM3hNp5NLCuvCH8wqrU6c15pnI8XiWGr55cB5zkwAAAA"},332:function(t,e,n){t.exports=n.p+"img/wordpress.11313d4.webp"},333:function(t,e,n){t.exports=n.p+"img/vue.cfb3905.webp"},334:function(t,e,n){t.exports=n.p+"img/visualstudio.398c4c8.webp"},335:function(t,e,n){t.exports=n.p+"img/node.4b7aabe.webp"},336:function(t,e,n){t.exports=n.p+"img/sass.aaeb03e.webp"},337:function(t,e){t.exports="data:image/webp;base64,UklGRnwDAABXRUJQVlA4IHADAAAwFACdASpsAGwAPpFAnEmlo6KhJzLryLASCWkAFeYf3TrD49nvx+l4TZQPAbSWTLv2P8+/0rwFDWiT2u+IRAbVnBfhGGdqjX/+njkiYfBv1mH0xeVGMebMavKqD6al7tJaMdSYfms5JRArW/SwbtvM7BQAdfx8/ysQSZRQEmOKON8m/WoBojsjI6zleYjuiLzQhvqfIevjlXgQl6JL4p8/9yKAtfR4VFenAAD++yGGW1x+1y0014/2owek0fRgbhjdTjzFf10v9b4/zMAQWXsP+fSn03v+wbb1aRDJNZKCzUx74toL0rvlt+mtnl1+myeHx/Q97ogygZHQAHFXgmsu/p+/+Qj3XHFX5WUNlsbopzNvsfBXbCiW7cYnLfUxfo7b7Sni8+aO+BotiXCnVgS+dYa44YQgzAFJA/N2XB8DeIrHBtX74ZQf74byf5NrDL7/Imr1HtSoymwt/yiBvEejUGri4A0a+WvpKlVqIi1Roxny4lnPS2DSRs+373yRXQo2CKaC+6osnz35hf+zgwyrab7oijb+HKBbKS57GtNL+P9xNIdFT8xf8VjgVL5dSN/r34N2YnZGy2905+g2ISRBOuGN1pSj/VK82sL7LesNrfoNYVFdGaAjSmajq4WG4s+XNBrCtaMaNeiLeU6I6CNmpgQn/PddBrT154W/NL34BzfEaQurA6/e7ZBI9QmbY4Uvny09jNRYTDs8Ch1I8wlgSpuOkJ1fpP33+pvLkJBUVv4skkCCmF/B5390Dja2yn+bS97xlMbNE/8ro6uw8ccxtWh/I1UUG0ijxP2hBqFhupfly/+GLdh5clLHowYJqgiV3KImV/6Luc/PnPTYFQX2BQJ9EKtoY+JXGB3I+9tSQDYnmXvJe4Nmoqlx40X+6csxoAFFb5/VbGLqn1M1TgS4DMDOcR06ah88c1lwxYj/ZuJTk5etrgupPxwUhr9gkiOU/P7rTKJN+4UE6SmhIphAe8nVV9dXRqSugK50TGNdFo5jjm9WkqUMMUvMiKwVV8g3Pdug3s8B9p8i3TpuVJKAKbWd/hWrY4hCIopZAh6ZXNPpjp4G7IpPs/cnx+wuiEhW3jfY6/JoctDp013yqM6H0OKrcrTfeL1CKOr4RKRqj3m08C19X5Lc4JdQijI9BHRVKzNFq6x1DrfTt5JBIAAA"},338:function(t,e,n){t.exports=n.p+"img/oxygen.e65140b.webp"},339:function(t,e){t.exports="data:image/webp;base64,UklGRpQCAABXRUJQVlA4IIgCAABQEQCdASpsAGwAPpFEn0klpCMhKnj4+LASCUB2CM/7Q+CCeed3sX9WGZAZKfTwPTnBANONmO3PHaLCEAIwiFTUtS0fVVbEMCjxpk+PIx/Wbt8d6iXQob0062ZvlDuNJygt7gWlzALD2eJXxIBMA3AY7l7y6J+RrZupK6BAs+2Y/tgrQSKvCywkobNMdvm0WDlikZgA/D4m9zkjs+ufplepa+rLKf8nAa9MPJ2NCD13NKsycE7AJ0AXhR0U4t/T8ayiUTJyodMxZfHtd5tTqpTeSisSh+c4U5+G/JyaYVRWi5rifFLhPMWXtFVvFM5OFwoBUOXAevdeh9AkKiIpE9Lcmyu1SUp0vQRiY4gRrbLcytjfwbtdjkk2D4GtpIfG3WOWee0O2+7unmBHdip55T+ccwdNBt6C/LDagHH8PDeQD/12YZUwORh4j7PPilf/1BxrGQ13u2apbbB1QcdA6MN3rvtlab7wWHhVhj3OktOF3d+pHpDAEWGkhVMu7uMLXdC/gDOI1kkPw+sAvMmCKgt5TRcHSxyYVDzTiaJltZ+bmHtn4lpTBjjjRvyzpm3q3XqQHQyBX09AliJHvsXtdeK/Oo9jhcAvMyq2WURgo+d1SIlfrLWn5F7G0thJivAZf7fQ36SYje7VRkY8oCTZz96I52RApwmybOaSRKTgQJnK2Z8W3Fj+wrDZHu2iy//ikroiuafXb3D+yf28DAOTORvHgewqVmjQlQMTWWUQ0pOd0DRqgJtu07HaSgrXKUmOfWOWpmjeQZzY+aOaJz8pscLnEcahfaocUiqjPDbP4s6uFJUkht+8+SgANUCnscW1KZPDsE3ZdH06LG1Lmg6c8cQLpqJhdzUAAAA="},340:function(t,e,n){t.exports=n.p+"img/webdesign.8dd8633.svg"},341:function(t,e,n){t.exports=n.p+"img/xd.9ccdea7.webp"},342:function(t,e,n){t.exports=n.p+"img/photoshop.9ec8174.webp"},343:function(t,e,n){t.exports=n.p+"img/illustrator.2ea8d3e.webp"},344:function(t,e,n){t.exports=n.p+"img/figma.90fc71f.webp"},345:function(t,e,n){t.exports=n.p+"img/videoaudio.d67c5c7.svg"},346:function(t,e){t.exports="data:image/webp;base64,UklGRtQCAABXRUJQVlA4WAoAAAAQAAAAawAAawAAQUxQSPsAAAABgGtb2zHnjW10tlnNlLF9Aelso0xt2zdhp7Jt28nYnvnetdIlIiYApHZNH1i6Y/CIyXxY7knzAvlaVy988ghMWyy1kc0g54hH7KtMfRmcJ3hEn/aQKvaZR/jXVCmyaDzi07IkJNJ4CNKTxFA+eSh++AOA2SYPyR0rgDYemq1A/cHjK6CWh2jLNSY3PEy5qPz7/9//f9YsVE4w2a/BpNLxCY93DyjDowDAYBSLCX0AsLvB4cYJRINeMXgOAvFhD+R7CgPJgcek2/UCac06aSRjNZqB9OrBi2xSceao6iCzblTfFZM89MuRKB2QrzE1s3/rmxxfa0P5FD2QGgBWUDggsgEAAFANAJ0BKmwAbAA+kUKeSiWjoyGr0riAsBIJZwDWLgBfFe8OI1ea4BkKtR8dJh14ij/HyGQw2C2MK2VCKcXdemiFAdSbIUMPc3plH5+Zyts0KztEhTtN3yYaDVF9YPWRbAY7z/SbiRUc/R2qs7LncqiD6AAA/vfknuFko1tMf3M/Ot3z2okQkCMe2m3+f/NyuVzMksRuLe/mi9FMsZ13sgrTWiGjfzXzCQbOvbtndkWbtNwUoP7Yv2oPAAQ+9s0eP1TtTUCmJKsJMbxJYUxENOzJu3vA1mVbP01Ya/qYHUxR/qKLtcE2Kv8Ljdv7YVKLWggCNb934cMDIA81JnEmPsq5gEF8f/cw9WZHvnb40mJ2wtSq48pUrBoBf3oi860TCam9Ol4xrfDociXZGzvAu9bcrWQS7Zx3b0fcwAr00Ily92c6q9Uk2NRCOERGDU0Di11fF9OGpKcr80/hw7s7pM8tM+nMfuspTP7QaV5B5tEBrsNvgE8WHgeFdl1IdnqCDL+qS4WCwPCQIdfVFIA8o6T/nO6RM14lWAsBPWhvPIt2MCkA/e6TF3Sep8QW2ZLwAAAA"},347:function(t,e){t.exports="data:image/webp;base64,UklGRq4DAABXRUJQVlA4WAoAAAAQAAAAawAAawAAQUxQSPwAAAABgLpt2/Hnnm00JbvZSDtWGe1kRcZ1M63tT7CTbdt+f/bzHMfaLyImAOqaBFWNzl99Scj8ul4aLA63hFadq2ZfJQR/zlbZamaety0hey3XXIOoSQnpU5FqlX1KiP/Mt1BhWf8qIV80qCiScPhWoyTzlwXJbwYA+yMJk4cOQJuEzVb43fDx4jsgYXTshpMbCaeCFaP/jf7/t/5l5YiTo25Oujwv+DjwQCEfBYDFAhcrFgAinnl4DoJi1h0H7xlQnv1M3222iQrEXlB3ngh13Xp+KPvs8YKGgRO/VInxcGhuktx78kPP92lfnBW065xQ3bP+IqgQL6v9tQn2UBtWUDggjAIAABARAJ0BKmwAbAA+kUSeSSWkIyEqdwlwsBIJZwDWagxOk2AZ9lNeTvgyn+CumbaICjamukG/O9enlNRv3BE/fpL1E/zqWNH9rqvJunujQaFLyy/a32ZPhDNGtdNXCBh7ZPNGV3cLK444/jwLm28obguLDxWHgaYKJ6Jql/tAvRl5xxGWEqcTKi9hPlS+cIaM+gAA/vfknwmyiTzSu/xB+oMD7EQQBXiRxpQFG+f+vj7ETGVYQ9HkwKuG2e1/b4TkrwVf+ysS/hWHeBpQ4qhAGxBpdn5YE0OSV4T3x3chotvV2fBUJ+qgjJqV42ypZ6P+SQC8IUDm+PwLdSIpVf3JJcqESRxVrMTdkOJUnxGZOxRE7CZncl/J28cNG8WHmUFW1btgTBpxfbvs4EjyDNo4lK4S2ZmNnq93FOiy08Hwyi52YcdE7c3G2cHonJGEVzPLL8SBi3YB9NraBujtYVbfN9wNZa12iqAtXTCzMQlrFUC1ZGFZzvNctXED3/D6k6IGH58tJBlqcjaSGLCSOG5H8Y8sCAwTLHpyoAiwofVrtX8VX4JS50kY9sgdM9QW3eWcesRWulDIjTMVf7kyMedTBZrBlnRFT459D0CLcd2GNcNSkMUnG6T14B4LVTQa5JSNTuZj6wSv4X3xShghBXrH1DkLnPePc4KlGn7bu+pC6ty6KqNpeoY2pE0cTIrTHeGmCrMp9lknDKLPNDjUxB6V9MDj2Bus+tOaRi+2O5OVxDDoStAMnFg5i4IvwFKcqvRxj3jsp8btryrsov3xqFqp6DvAxd5J2FfoPdtpduS1HCqJGDwMyaP91gfzdhNSeLm9KRRIBgwvIXulh+v/H366s4f91tRNmN78zisAAAA="},348:function(t,e,n){t.exports=n.p+"img/davinci.6c5d03c.webp"},349:function(t,e,n){t.exports=n.p+"img/flstudio.9e622a4.webp"},350:function(t,e,n){"use strict";n(321)},351:function(t,e,n){var r=n(27),o=n(124),c=n(202),d=r(!1),l=o(c);d.push([t.i,"section[data-v-5389b88f]{height:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background:linear-gradient(180deg,rgba(30,30,30,0),#000),url("+l+");background-position:50%;background-size:cover;padding:50px}section h2[data-v-5389b88f]{color:#fff;text-align:center}section #assets[data-v-5389b88f]{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;width:850px;height:auto;min-height:420px;background:#fff;box-shadow:0 -4px 14px rgba(0,0,0,.2);border-radius:5px;padding:20px 10%}section #assets .assets__box[data-v-5389b88f]{width:120px;text-align:center;display:flex;flex-direction:column;align-items:center;margin:20px}section #assets .assets__box h3[data-v-5389b88f]{font-weight:400;font-size:20px}section #assets .assets__box img[data-v-5389b88f]{height:120px;width:120px}section #assets .assets__box .assets__icon[data-v-5389b88f]{width:100%;display:flex;align-content:space-between;justify-content:space-between;flex-wrap:wrap}section #assets .assets__box .assets__icon img[data-v-5389b88f]{height:36px;padding:4px;width:auto}@media screen and (max-width:999px){section #assets[data-v-5389b88f]{width:100%}}@media screen and (max-width:850px){section[data-v-5389b88f]{padding-left:25px!important;padding-right:25px!important}}@media screen and (max-width:496px){#assets[data-v-5389b88f]{justify-content:center!important}}",""]),t.exports=d},352:function(t,e,n){t.exports=n.p+"img/tsc.ea7e047.webp"},353:function(t,e,n){t.exports=n.p+"img/amorce.28f6bd5.webp"},354:function(t,e,n){t.exports=n.p+"img/reverb.00bec09.webp"},355:function(t,e,n){"use strict";n(322)},356:function(t,e,n){var r=n(27),o=n(124),c=n(357),d=r(!1),l=o(c);d.push([t.i,"section[data-v-7eabcb4a]{padding:50px;width:100%;min-height:800px;background:linear-gradient(180deg,#000,rgba(0,0,0,.5) 50%,rgba(61,135,224,.1)),url("+l+');background-repeat:no-repeat;background-size:cover;background-position:bottom;margin-top:-1px;display:flex;flex-direction:column;align-items:center}section #tsc-profil[data-v-7eabcb4a]{height:248px;width:248px}section h2[data-v-7eabcb4a]{font-size:30px;font-weight:700}section h2[data-v-7eabcb4a],section h3[data-v-7eabcb4a]{color:#fff;text-align:center}section h3[data-v-7eabcb4a]{font-weight:400;font-size:26px}section span[data-v-7eabcb4a]{color:#fff;font-weight:400;font-size:20px}section #platforms[data-v-7eabcb4a]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}section #platforms img[data-v-7eabcb4a]{height:35px;width:auto;margin:5px 10px;cursor:pointer;transition:opacity .3s ease}section #platforms img[data-v-7eabcb4a]:hover{opacity:.6;transition:opacity .3s ease}section button[data-v-7eabcb4a]{font-family:"Manrope";border-radius:5px!important;width:auto;min-height:45px;max-height:45px;outline:none;border:none;cursor:pointer;min-width:154px;max-width:154px;font-size:16px;color:#fff;font-weight:600;transition:all .2s ease;background:linear-gradient(100deg,#000,#1e1e1e);display:flex;align-items:center;justify-content:center}section button:hover img[data-v-7eabcb4a]{transform:scale(1.2) rotate(5deg);transition:transform .3s ease-out}section button img[data-v-7eabcb4a]{height:20px;width:auto;transition:transform .3s ease-out}section #container-music[data-v-7eabcb4a]{display:flex;flex-direction:row;justify-content:center;width:100%}section #container-music a[data-v-7eabcb4a]{text-decoration:none}section #container-music a .box-music[data-v-7eabcb4a]{text-align:center;margin-left:20px;margin-right:20px;transition:transform .5s ease}section #container-music a .box-music[data-v-7eabcb4a]:hover{transform:scale(1.02);transition:transform .3s ease}section #container-music a .box-music img[data-v-7eabcb4a]{height:233px;width:233px;box-shadow:0 0 10px 2px rgba(0,0,0,.5);border-radius:5px!important}section #container-music a .box-music h4[data-v-7eabcb4a]{text-align:center;color:#fff;font-weight:700;font-size:20px;text-shadow:0 0 14px rgba(0,0,0,.8)}section #container-music a .box-music span[data-v-7eabcb4a]{text-align:center;color:#fff;font-weight:400;font-size:20px;text-shadow:0 0 14px rgba(0,0,0,.8)}@media screen and (max-width:850px){section[data-v-7eabcb4a]{padding-left:25px!important;padding-right:25px!important}section #platforms img[data-v-7eabcb4a]{height:30px!important;margin-left:5px;margin-right:5px}}@media screen and (max-width:599px){section #tsc-profil[data-v-7eabcb4a]{height:200px;max-width:200px}section #container-music[data-v-7eabcb4a]{flex-direction:column}section #container-music .box-music[data-v-7eabcb4a]{margin-top:30px;margin-bottom:30px}section #container-music .box-music img[data-v-7eabcb4a]{max-width:100%!important;height:auto!important}}',""]),t.exports=d},357:function(t,e,n){t.exports=n.p+"img/background-shelter.483911d.webp"},376:function(t,e,n){t.exports=n.p+"img/rednate.e6b7e67.webp"},377:function(t,e,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("14c0deac",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";n.r(e);n(325);var r=n(12),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"prev-site"}},[n("div",{staticClass:"prev-site__box",attrs:{id:"prev-site-box__1"}},[n("h3",[t._v("helpnfiesta.fr")]),t._v(" "),n("div",{staticClass:"sep-10"}),t._v(" "),n("span",[t._v("dev. front-end et web designer")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("2021")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"sep-40"}),t._v(" "),n("a",{attrs:{href:"https://helpnfiesta.fr",target:"_blank"}},[n("button1",{attrs:{title:"Découvrir"}})],1)]),t._v(" "),n("div",{staticClass:"prev-site__box",attrs:{id:"prev-site-box__2"}},[n("h3",[t._v("flouvaps.fr")]),t._v(" "),n("div",{staticClass:"sep-10"}),t._v(" "),n("span",[t._v("intégrateur  et web designer")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("2021")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"sep-40"}),t._v(" "),n("a",{attrs:{href:"https://flouvaps.fr",target:"_blank"}},[n("button2",{attrs:{title:"Découvrir"}})],1)]),t._v(" "),n("div",{staticClass:"prev-site__box",attrs:{id:"prev-site-box__3"}},[n("h3",[t._v("helene-boyer.com")]),t._v(" "),n("div",{staticClass:"sep-10"}),t._v(" "),n("span",[t._v("dev. front-end Vue JS")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("2021")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"sep-40"}),t._v(" "),n("a",{attrs:{href:"https://helene-boyer.com",target:"_blank"}},[n("button3",{attrs:{title:"Découvrir"}})],1)])])}),[],!1,null,"3fe767fa",null);e.default=component.exports;installComponents(component,{Button1:n(301).default,Button2:n(306).default,Button3:n(199).default})},379:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"assets"}},[r("div",{staticClass:"assets__box"},[r("img",{attrs:{src:n(330),alt:"front end"}}),t._v(" "),r("div",{staticClass:"sep-20"}),t._v(" "),r("h3",[t._v("Développement")]),t._v(" "),r("div",{staticClass:"sep-20"}),t._v(" "),r("div",{staticClass:"assets__icon"},[r("img",{attrs:{src:n(331),alt:"javascript"}}),t._v(" "),r("img",{attrs:{src:n(332),alt:"wordpress"}}),t._v(" "),r("img",{attrs:{src:n(333),alt:"vue"}}),t._v(" "),r("img",{attrs:{src:n(334),alt:"Visual Studio Code"}}),t._v(" "),r("img",{attrs:{src:n(335),alt:"Node JS"}}),t._v(" "),r("img",{attrs:{src:n(336),alt:"Sass"}}),t._v(" "),r("img",{attrs:{src:n(337),alt:"Github"}}),t._v(" "),r("img",{attrs:{src:n(338),alt:"Oxygen Builder"}}),t._v(" "),r("img",{attrs:{src:n(339),alt:"Elementor"}})])]),t._v(" "),r("div",{staticClass:"assets__box"},[r("img",{attrs:{src:n(340),alt:"Web design"}}),t._v(" "),r("div",{staticClass:"sep-20"}),t._v(" "),r("h3",[t._v("Web design")]),t._v(" "),r("div",{staticClass:"sep-20"}),t._v(" "),r("div",{staticClass:"assets__icon"},[r("img",{attrs:{src:n(341),alt:"Adobe XD"}}),t._v(" "),r("img",{attrs:{src:n(342),alt:"Indesign"}}),t._v(" "),r("img",{attrs:{src:n(343),alt:"Illustrator"}}),t._v(" "),r("img",{attrs:{src:n(344),alt:"Figma"}})])]),t._v(" "),r("div",{staticClass:"assets__box"},[r("img",{attrs:{src:n(345),alt:"vidéo et audio"}}),t._v(" "),r("div",{staticClass:"sep-20"}),t._v(" "),r("h3",[t._v("Vidéo / audio")]),t._v(" "),r("div",{staticClass:"sep-20"}),t._v(" "),r("div",{staticClass:"assets__icon"},[r("img",{attrs:{src:n(346),alt:"Premiere Pro"}}),t._v(" "),r("img",{attrs:{src:n(347),alt:"After Effect"}}),t._v(" "),r("img",{attrs:{src:n(348),alt:"DaVinci Resolve"}}),t._v(" "),r("img",{attrs:{src:n(349),alt:"FL Studio"}})])])])}],o=(n(350),n(12)),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("nuxt-link",{attrs:{to:"/blog/web"}},[n("button3",{attrs:{title:"Voir plus"}})],1),t._v(" "),n("div",{staticClass:"sep-50"}),t._v(" "),n("h2",[t._v("Mes compétences à votre service")]),t._v(" "),n("div",{staticClass:"sep-50"}),t._v(" "),t._m(0)],1)}),r,!1,null,"5389b88f",null);e.default=component.exports;installComponents(component,{Button3:n(199).default})},380:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"platforms"}},[r("a",{attrs:{href:"https://open.spotify.com/artist/6aLE276JCRs6kclrdEeaGk",target:"_blank"}},[r("img",{attrs:{src:n(314),alt:"spotify"}})]),t._v(" "),r("a",{attrs:{href:"https://music.apple.com/fr/artist/the-solace-comes/1486098277",target:"_blank"}},[r("img",{attrs:{src:n(315),alt:"apple music"}})]),t._v(" "),r("a",{attrs:{href:"https://www.deezer.com/fr/artist/77913822",target:"_blank"}},[r("img",{attrs:{src:n(316),alt:"deezer"}})]),t._v(" "),r("a",{attrs:{href:"https://soundcloud.com/thesolacecomes",target:"_blank"}},[r("img",{attrs:{src:n(317),alt:"soundcloud"}})]),t._v(" "),r("a",{attrs:{href:"https://www.youtube.com/channel/UCOl7NnwEt98cbrshNtCcxdw",target:"_blank"}},[r("img",{attrs:{src:n(318),alt:"youtube"}})]),t._v(" "),r("a",{attrs:{href:"https://music.amazon.fr/artists/B0812B91FS/the-solace-comes?marketplaceId=A13V1IB3VIYZZH",target:"_blank"}},[r("img",{attrs:{src:n(319),alt:"amazon music"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"container-music"}},[r("a",{attrs:{href:"https://li.sten.to/amorce",target:"_blank"}},[r("div",{staticClass:"box-music"},[r("img",{attrs:{src:n(353),alt:"The Solace Comes - Amorce"}}),t._v(" "),r("div",{staticClass:"sep-10"}),t._v(" "),r("h4",[t._v("Amorce (ft. Gecko)")]),t._v(" "),r("span",[t._v("2019")])])]),t._v(" "),r("a",{attrs:{href:"http://smarturl.it/reverb-release/",target:"_blank"}},[r("div",{staticClass:"box-music"},[r("img",{attrs:{src:n(354),alt:"The Solace Comes / O'low - Rêverb"}}),t._v(" "),r("div",{staticClass:"sep-10"}),t._v(" "),r("h4",[t._v("Rêverb")]),t._v(" "),r("span",[t._v("2021")])])])])}],o=(n(355),n(12)),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("Créations musicales")]),t._v(" "),r("div",{staticClass:"sep-50"}),t._v(" "),r("img",{attrs:{id:"tsc-profil",src:n(352),alt:"the solace comes"}}),t._v(" "),r("div",{staticClass:"sep-30"}),t._v(" "),r("h3",[t._v("The Solace Comes")]),t._v(" "),r("div",{staticClass:"sep-10"}),t._v(" "),r("span",[t._v("écouter sur :")]),t._v(" "),r("div",{staticClass:"sep-20"}),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"sep-50"}),t._v(" "),r("nuxt-link",{attrs:{to:"/musique"}},[r("button",[r("img",{attrs:{src:n(313),alt:"eye"}})])]),t._v(" "),r("div",{staticClass:"sep-40"}),t._v(" "),t._m(1)],1)}),r,!1,null,"7eabcb4a",null);e.default=component.exports},470:function(t,e,n){t.exports=n.p+"img/download.9058a3d.svg"},471:function(t,e,n){"use strict";n(377)},472:function(t,e,n){var r=n(27),o=n(124),c=n(202),d=n(376),l=r(!1),f=o(c),v=o(d);l.push([t.i,"#landing[data-v-0fcb41c3]{width:100%;min-height:100vh;display:flex;flex-direction:row}#landing #description[data-v-0fcb41c3]{min-height:100vh;width:60%;background:#1e1e1e;padding:100px 50px 5px;box-sizing:border-box}#landing #description #description__text[data-v-0fcb41c3]{box-sizing:border-box;display:flex;flex-direction:column;align-content:center;justify-content:center;width:100%;height:100%}#landing #description #description__text blockquote[data-v-0fcb41c3]{color:#fff;font-weight:400;font-style:italic}#landing #description #description__text blockquote span[data-v-0fcb41c3]{color:#c7cf00}#landing #description #description__text #nate-mobile[data-v-0fcb41c3]{display:none;height:100px;width:100px;border-radius:5px;margin-bottom:20px;filter:drop-shadow(0 0 4px rgba(0,0,0,.3))}#landing #description #description__text h1[data-v-0fcb41c3]{color:#fff;font-weight:400;letter-spacing:.18em}#landing #description #description__text h2[data-v-0fcb41c3]{color:#fff;font-size:20px;font-weight:300;background-color:#3d87e0;border-radius:5px!important;max-width:420px;padding:15px}#landing #description #description__text h2 a[data-v-0fcb41c3]{color:inherit;text-decoration:none;font-weight:700}#landing #description #description__text p[data-v-0fcb41c3]{color:#fff;font-size:20px;font-weight:300;text-align:left;line-height:30px}#landing #description #description__text #cv-dl[data-v-0fcb41c3]{width:220px}#landing #description #description__text #cv-dl a[data-v-0fcb41c3]{display:flex;align-items:center;color:#fff}#landing #description #description__text #cv-dl img[data-v-0fcb41c3]{margin-right:5px;height:19px;cursor:pointer}#landing #profil[data-v-0fcb41c3]{min-height:100vh;width:40%;background-image:url("+f+");background-position:50%;background-repeat:repeat;background-size:cover;display:flex;justify-content:center;align-items:center;box-sizing:border-box;padding-left:50px;padding-right:50px}#landing #profil #profil__pic[data-v-0fcb41c3]{background-image:url("+v+");background-position:50%;background-size:cover;width:200px;height:200px;border-radius:5px;filter:drop-shadow(0 0 9px rgba(0,0,0,.3));opacity:1;transition:transform .3s ease-out;transform:rotate(4deg)}@media screen and (max-width:850px){#landing #description[data-v-0fcb41c3]{width:100%;background-image:url("+f+");padding-left:25px!important;padding-right:25px!important}#landing #description #nate-mobile[data-v-0fcb41c3]{display:block!important}#landing #description h1[data-v-0fcb41c3]{font-size:30px}#landing #description p[data-v-0fcb41c3]{font-size:18px!important}#landing #description blockquote[data-v-0fcb41c3]{font-size:16px}#landing #description #cv-dl[data-v-0fcb41c3]{display:none!important}#landing #profil[data-v-0fcb41c3]{display:none}}@media screen and (max-width:350px){#landing #description #nate-mobile[data-v-0fcb41c3]{height:75px!important;width:75px!important}#landing #description h1[data-v-0fcb41c3]{font-size:20px}#landing #description h2[data-v-0fcb41c3]{font-size:16px!important}#landing #description p[data-v-0fcb41c3]{font-size:14px!important}}#miniblog[data-v-0fcb41c3]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;height:auto;background:linear-gradient(180deg,#000,#000);padding:40px 50px;margin-top:-1px}#miniblog h2[data-v-0fcb41c3]{color:#fff}#miniblog #container-article[data-v-0fcb41c3]{width:auto;height:auto}#miniblog #container-article .article-preview[data-v-0fcb41c3]{padding-left:20px;padding-right:20px;height:100px;width:750px;background-image:url("+f+");background-position:50%;background-size:cover;background-repeat:no-repeat;border-radius:5px;margin-bottom:25px}#miniblog #container-article .article-preview a[data-v-0fcb41c3]{height:100%;width:100%;text-decoration:none;color:#fff;display:flex;flex-direction:row;justify-content:space-between;align-items:center;transition:opacity .3s ease}#miniblog #container-article .article-preview a[data-v-0fcb41c3]:hover{opacity:.6;transition:opacity .3s ease}#miniblog #container-article .article-preview a h3[data-v-0fcb41c3]{font-size:24px}#miniblog #container-article .article-preview a span[data-v-0fcb41c3]{font-size:16px;right:0}@media screen and (max-width:850px){#miniblog[data-v-0fcb41c3]{padding-left:25px!important;padding-right:25px!important}#miniblog #container-article[data-v-0fcb41c3],#miniblog #container-article .article-preview[data-v-0fcb41c3]{width:100%}}@media screen and (max-width:420px){#miniblog[data-v-0fcb41c3]{padding-left:25px!important;padding-right:25px!important}#miniblog #container-article[data-v-0fcb41c3],#miniblog #container-article .article-preview[data-v-0fcb41c3]{width:100%}#miniblog #container-article .article-preview a[data-v-0fcb41c3]{flex-direction:column;justify-content:center}#miniblog #container-article .article-preview a h3[data-v-0fcb41c3]{text-align:center;font-size:20px}}",""]),t.exports=l},494:function(t,e,n){"use strict";n.r(e);n(295),n(298),n(34);var r=n(5),o={layout:"default",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).only(["title","date","slug","id"]).sortBy("id","desc").limit(3).fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"Nathan Lagrange - Développeur front-end",description:"Je m'appelle Nathan Lagrange et je vous souhaite la bienvenue sur mon portfolio (dev, web design et musique)."}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{property:"og:site_name",content:"Nathan Lagrange - Développeur front-end"},{hid:"og:type",property:"og:type",content:"page"},{hid:"og:url",property:"og:url",content:"https://nathanlagrange.dev"},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:"https://ucarecdn.com/8f1d6f69-d3e4-41d1-b1d1-8f9e64322e49/ogimageindex.webp"},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{name:"twitter:site",content:"@nathanlagrange"},{name:"twitter:card",content:"summary_large_image"},{hid:"twitter:url",name:"twitter:url",content:"https://nathanlagrange.dev"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:"https://ucarecdn.com/8f1d6f69-d3e4-41d1-b1d1-8f9e64322e49/ogimageindex.webp"}],link:[{hid:"canonical",rel:"canonical",href:"https://nathanlagrange.dev"}]}},mounted:function(){this.rotateprofil()},methods:{rotateprofil:function(){document.getElementById("profil__pic").addEventListener("mouseover",(function(){document.getElementById("profil__pic").style.transform="rotate(0deg)"}))}}},c=(n(471),n(12)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{attrs:{id:"landing"}},[r("div",{attrs:{id:"description"}},[r("div",{attrs:{id:"description__text"}},[r("img",{attrs:{id:"nate-mobile",src:n(376),alt:"nathan lagrange"}}),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"sep-30"}),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"sep-30"}),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"sep-30"}),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"sep-20"}),t._v(" "),r("p",[t._v("\n          Ce support web est dédié à la présentation de mes compétences en développement front-end, web design et production musicale.\n          Ce site a été entièrement pensé et développé par moi-même avec le framework Nuxt (basé sur Vue).\n        ")]),t._v(" "),r("div",{staticClass:"sep-20"}),t._v(" "),r("p",{attrs:{id:"cv-dl"}},[r("nuxt-link",{attrs:{to:"/cv"}},[r("img",{attrs:{src:n(470),alt:"télécharger"}}),r("u",[r("b",[t._v("Afficher mon CV")])])])],1)])]),t._v(" "),t._m(4)]),t._v(" "),r("prev-site"),t._v(" "),r("competences"),t._v(" "),r("section",{attrs:{id:"miniblog"}},[r("h2",[t._v("Blog de web design")]),t._v(" "),r("div",{staticClass:"sep-50"}),t._v(" "),r("div",{attrs:{id:"container-article"}},t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("nuxt-link",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("h3",[t._v(t._s(article.title))]),t._v(" "),r("span",[t._v(t._s(article.date))])])],1)})),0),t._v(" "),r("div",{staticClass:"sep-10"}),t._v(" "),r("nuxt-link",{attrs:{to:"/blog"}},[r("button2",{attrs:{title:"En voir plus"}})],1)],1),t._v(" "),r("tschome")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("nathan"),n("b",[t._v("lagrange")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("\n          { Développeur front-end (VueJS)\n          "),n("br"),t._v("\n          Webmaster "),n("a",{attrs:{href:"https://hermione.co",target:"_blank"}},[t._v("@hermione.co")]),t._v(" "),n("br"),t._v("\n          Bachelor 3 Web Design @MyDigitalSchool }\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("blockquote",[n("span",[n("b",[t._v("“When opportunity knocks, it’s too late to prepare.”")])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"sep-10"}),t._v("\n          J. Wooden\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("Bienvenue sur mon portfolio 👋")]),t._v(" "),n("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"profil"}},[e("div",{attrs:{id:"profil__pic"}})])}],!1,null,"0fcb41c3",null);e.default=component.exports;installComponents(component,{PrevSite:n(378).default,Competences:n(379).default,Button2:n(306).default,Tschome:n(380).default})}}]);