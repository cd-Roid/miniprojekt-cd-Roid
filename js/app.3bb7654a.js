(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],u=0,_=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&_.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(_.length)_.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/miniprojekt-cd-Roid/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var s=n("2dad"),a=n.n(s);a.a},"2dad":function(t,e,n){},"334a":function(t,e,n){},"51ff":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home",{staticClass:"home"})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"header"},[n("p",{staticClass:"header__logo"},[t._v("CDA_")]),n("span",{staticClass:"material-icons material-icons__settings-menu",on:{click:t.openSettingModal}},[t._v("menu")]),n("span",{staticClass:"material-icons material-icons__collapse-all",on:{click:t.collapseAllItems}},[t._v("menu")])]),n("section",{staticClass:"content"},[n("Year",{staticClass:"content__year"})],1),!0===t.isVisible?n("ExtendedCard",{attrs:{article:t.toView}}):t._e(),!0===t.setttingsOpen?n("Settings"):t._e()],1)},r=[],c=n("5530"),l=n("2f62"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen"},[n("div",{staticClass:"background",on:{click:t.close}}),n("div",{staticClass:"modal"},[n("section",{staticClass:"modal__section__button",on:{click:t.close}},[t._m(0)]),n("section",{staticClass:"modal__section__imagebox"},[n("img",{staticClass:"modal__section__imagebox__img",attrs:{src:t.article.images.sizes.l.src,alt:t.article.title},on:{error:t.setPlaceholder}})]),n("section",{staticClass:"modal__section__description"},[n("section",{staticClass:"modal__section__description_sub"},[n("h2",{staticClass:"modal__section__description__sub__title"},[t._v(" "+t._s(t.article.title)+" ")]),n("p",{staticClass:"modal__section__description__sub__text"},[t._v(" "+t._s(t.article.description)+" ")])]),n("section",{staticClass:"modal__section__stats"},[n("p",{staticClass:"modal__section__stats__location"},[t._v(t._s(t.article.location))]),n("p",{staticClass:"modal__section__stats__repository"},[t._v(" "+t._s(t.article.repository)+" ")]),n("p",{staticClass:"modal__section__stats__dimensions"},[t._v(" "+t._s(t.article.dimensions.width)+"x"+t._s(t.article.dimensions.height)+"cm ")]),n("p",{staticClass:"modal__section__stats__inventoryNumber"},[t._v(" "+t._s(t.article.inventoryNumber)+" ")]),n("p",{staticClass:"modal__section__stats__dating"},[t._v(t._s(t.article.dating))])]),n("section",{staticClass:"modal__section__interaction"},[n("span",{staticClass:"material-icons",on:{click:t.prev}},[t._v("arrow_back")]),n("span",{staticClass:"material-icons",on:{click:t.like}},[t._v("favorite_border")]),n("span",{staticClass:"material-icons",on:{click:t.next}},[t._v("arrow_forward")])])])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",[n("span",{staticClass:"material-icons material-icons__close"},[t._v("close")])])}],_={name:"CardModal",props:{article:Object},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(l["c"])({viewed:function(t){return t.viewedArticle}})),Object(l["b"])(["closeModal","previousArticle","nextArticle","likeArticle"])),{},{close:function(){this.closeModal()},setPlaceholder:function(){var t="https://via.placeholder.com/300";event.target.src=t},prev:function(){this.previousArticle()},next:function(){this.nextArticle()},like:function(){this.likeArticle()}})},p=_,m=(n("64e1"),n("2877")),g=Object(m["a"])(p,d,u,!1,null,null,null),f=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.years,(function(e){return n("div",{key:e,staticClass:"yearSection"},[n("YearAccordion",{attrs:{year:e,count:t.orderByYear(e).count,articles:t.orderByYear(e).cardInput}})],1)})),0)},h=[],b=(n("7db0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"accordion",on:{click:t.toggle}},[n("p",{staticClass:"accordion__date"},[t._v(t._s(t.year))]),n("div",{staticClass:"accordion__line"}),n("span",{staticClass:"material-icons material-icons__img-icon"},[t._v("photo")]),n("p",{staticClass:"accordion__count"},[t._v(t._s(t.count))]),n("div",{staticClass:"accordion__line"}),n("span",{staticClass:"material-icons material-icons__arrowdown"},[t._v(t._s(t.arrowValue))])]),t.collapseAllItems?n("CardList",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"yearSection__cardList",attrs:{articles:t.articles}}):t._e()],1)}),w=[],C=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.articles,(function(t){return n("div",{key:t.objectId,staticClass:"card"},[n("Card",{attrs:{article:t}})],1)})),0)}),O=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"card__img",attrs:{src:t.article.images.sizes.s.src,alt:t.article.title},on:{error:t.setPlaceholder,click:function(e){return t.modalAction(t.article)}}})])},y=[],k={name:"Card",props:{article:Object},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["removeImg","openModal"])),{},{setPlaceholder:function(){var t="https://via.placeholder.com/300";event.target.src=t},modalAction:function(t){this.openModal(t)}})},x=k,A=(n("e60d"),Object(m["a"])(x,j,y,!1,null,null,null)),D=A.exports,M={name:"CardList",components:{Card:D},props:{articles:Array}},E=M,L=Object(m["a"])(E,C,O,!1,null,null,null),S=L.exports,I={name:"YearAccordion",components:{CardList:S},props:{year:Number,count:Number,articles:Array},data:function(){return{show:!0,arrowValue:"keyboard_arrow_up",arrowUp:"keyboard_arrow_up",arrowDown:"keyboard_arrow_down"}},methods:{toggle:function(){this.show=!this.show,1==this.show?this.arrowValue=this.arrowUp:this.arrowValue=this.arrowDown}},computed:Object(c["a"])({},Object(l["c"])({collapseAllItems:function(t){return t.collapsed}}))},$=I,P=(n("c9ba"),Object(m["a"])($,b,w,!1,null,null,null)),z=P.exports,V={name:"Year",components:{YearAccordion:z},computed:Object(c["a"])({},Object(l["c"])({years:function(t){return t.years},article:function(t){return t.filtered}})),methods:{orderByYear:function(t){var e={};e=this.article.find((function(e){return e[0].dating==t}));var n=e.length;return{cardInput:e,count:n}}}},Y=V,F=Object(m["a"])(Y,v,h,!1,null,null,null),N=F.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen"},[n("div",{staticClass:"background",on:{click:t.close}}),n("div",{staticClass:"settings-modal"},[n("span",{staticClass:"material-icons material-icons__close",on:{click:t.close}},[t._v("close")]),t._m(0),n("section",{staticClass:"settings-modal__settings"},[t._m(1),t._m(2),n("div",{staticClass:"settings-modal__settings__option"},[n("p",{staticClass:"settings-modal__settings__option__label"},[t._v(" Jahre ausblenden ")]),n("div",{staticClass:"settings-modal__settings__option__dropdown"},[n("p",{staticClass:"setttings-modal__settings__option__dropdown__value",on:{click:t.collapseAllItems}},[t._v(" ja / nein ")])])]),n("div",{staticClass:"settings-modal__settings__option"},[n("p",{staticClass:"settings-modal__settings__option__label"},[t._v("Sprache")]),n("Dropdown")],1),t._m(3)])])])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"settings-modal__about-us"},[n("p",{staticClass:"settings-modal__about-us__text"},[t._v(" Lucas Cranach der Ältere (1472 – 1553) gehört zu den bedeutendsten Malern und Grafikern der deutschen Renaissance. Bereits seine Zeitgenossen waren beeindruckt von der Geschwindigkeit mit der Cranach produzierte: Weltweit sind heute noch mehr als 1500 Gemälde aus der Cranach-Werkstatt erhalten, und diese repräsentieren nur einen Bruchteil des ursprünglichen Werkbestandes. Eine beträchtliche Anzahl der erhaltenen Gemälde wurde bisher nicht wissenschaftlich bearbeitet. ")]),n("p",{staticClass:"settings-modal__about-us__text"},[t._v(" Im Verbund mit 310 Partnern in 31 Ländern arbeiten der Kunstpalast in Düsseldorf und die Technischer Hochschule Köln seit Oktober 2009 gemeinsam an einem Forschungsprojekt zur digitalen Erschließung der Gemälde von Lucas Cranach dem Älteren, unterstützt von der Andrew W. Mellon Foundation. ")]),n("p",{staticClass:"settings-modal__about-us__text"},[t._v(" Das interdisziplinäre Projektteam konnte bislang Datensätze von über 1.900 Gemälden auf­bereiten, insgesamt mehr als 16.500 Abbildungen (u.a. hochaufgelöste Gesamt- und Detailaufnahmen, Infrarotreflektografien und Röntgenaufnahmen) sowie über 1.200 digitalisierte und transkribierte Archivdokumente. Die Daten werden stetig erweitert und den Aus­tausch über neueste Forschungsresultate zu Cranachs Bildern sichtbar erleichtern. ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-modal__settings__option"},[n("p",{staticClass:"settings-modal__settings__option__label"},[t._v("Darkmode")]),n("div",{staticClass:"settings-modal__settings__option__dropdown"},[n("p",{staticClass:"setttings-modal__settings__option__dropdown__value"},[t._v(" aus ")]),n("span",{staticClass:"material-icons material-icons__arrow"},[t._v("arrow_drop_down")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-modal__settings__option"},[n("p",{staticClass:"settings-modal__settings__option__label"},[t._v("Vorschaubilder")]),n("div",{staticClass:"settings-modal__settings__option__dropdown"},[n("p",{staticClass:"setttings-modal__settings__option__dropdown__value"},[t._v(" klein ")]),n("span",{staticClass:"material-icons material-icons__arrow"},[t._v("arrow_drop_down")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"settings-modal__settings__option__label"},[t._v("Login")]),n("div",[n("form",{staticClass:"settings-modal__settings__login-form",attrs:{action:"",method:"post"}},[n("input",{staticClass:"settings-modal__settings__login-form__name",attrs:{type:"text",placeholder:"Nutzername"}}),n("input",{staticClass:"settings-modal__settings__login-form__password",attrs:{type:"password"}}),n("input",{staticClass:"settings-modal__settings__login-form__login-button",attrs:{type:"submit",value:"Einloggen"}}),n("div",[n("input",{staticClass:"setttings-modal__settings__login-form__checkbox",attrs:{type:"checkbox",name:"eingeloggt bleiben",id:""}}),n("label",{staticClass:"settings-modal__settings__option__label"},[t._v("eingeloggt bleiben")])])])])])}],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown"},[n("div",{staticClass:"dropdown__selected",on:{click:t.toggle}},[t._v(" "+t._s(t.selected)+" "),n("span",{staticClass:"material-icons material-icons__dropdown__arrow"},[t._v("arrow_drop_down")])]),1==t.show?n("div",[n("ul",{staticClass:"dropdown__items"},t._l(t.languages,(function(e){return n("li",{key:e.id,attrs:{href:"#"},on:{click:function(n){return t.setLanguage(e.lang)}}},[t._v(" "+t._s(e.lang)+" ")])})),0)]):t._e()])},T=[],H={name:"Dropdown",data:function(){return{show:!1}},computed:Object(c["a"])({},Object(l["c"])({languages:function(t){return t.language},selected:function(t){return t.selectedLang}})),methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["setData","destructure","emptyFiltered"])),{},{toggle:function(){this.show=!this.show},setLanguage:function(t){this.show=!1,this.emptyFiltered(),this.setData(t),this.destructure()}})},W=H,J=(n("61e0"),Object(m["a"])(W,R,T,!1,null,null,null)),K=J.exports,U={name:"CardModal",components:{Dropdown:K},props:{article:Object},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(l["c"])({modalOpen:function(t){return t.setttingsModalOpen}})),Object(l["b"])(["closeSettings","collapseAll"])),{},{close:function(){this.closeSettings()},collapseAllItems:function(){this.collapseAll(),this.closeSettings()}})},Z=U,q=(n("ff64"),Object(m["a"])(Z,B,G,!1,null,null,null)),Q=q.exports,X={name:"Home",components:{Year:N,ExtendedCard:f,Settings:Q},computed:Object(c["a"])({},Object(l["c"])({articles:function(t){return t.data},selectedLang:function(t){return t.selectedLang},isVisible:function(t){return t.modalOpen},toView:function(t){return t.viewedArticle},setttingsOpen:function(t){return t.setttingsModalOpen}})),methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["setData","collapseAll","openSettings"])),{},{collapseAllItems:function(){this.collapseAll()},openSettingModal:function(){this.openSettings()}}),created:function(){var t=this.selectedLang;this.setData(t)}},tt=X,et=(n("21bb"),Object(m["a"])(tt,o,r,!1,null,null,null)),nt=et.exports,st={components:{Home:nt}},at=st,it=(n("5c0b"),Object(m["a"])(at,a,i,!1,null,null,null)),ot=it.exports,rt=n("8c4f");s["a"].use(rt["a"]);var ct=[{path:"/",name:"Home",component:nt}],lt=new rt["a"]({mode:"history",base:"/miniprojekt-cd-Roid/",routes:ct}),dt=lt,ut={filtered:[],data:[],years:[],liked:[],language:[{id:1,lang:"English"}],modalOpen:Boolean,setttingsModalOpen:!1,viewedArticle:null,selectedLang:"Deutsch",collapsed:!0},_t=(n("a4d3"),n("e01a"),n("4de4"),n("4160"),n("caad"),n("c975"),n("2532"),n("159b"),{mutateData:function(t,e){var n=e.data,s=e.lang;t.data=n,t.selectedLang=s},setLangList:function(t,e){t.language=e},destructure:function(t,e){var n=[];e.items.forEach((function(e){var s={dating:e.dating.begin,images:e.images,dimensions:e.structuredDimension,inventoryNumber:e.inventoryNumber,objectId:e.objectId,title:e.titles[0].title,repository:e.repository,location:e.locations[0].term,description:e.description};null!=s.images&&(n.push(s),!1===t.years.includes(s.dating)&&t.years.push(s.dating))})),t.years.sort(),t.data=n;var s=[];t.years.forEach((function(e){s=t.data.filter((function(t){return t.dating==e})),t.filtered.push(s)}))},previous:function(t){var e=t.viewedArticle,n=t.data.find((function(t){return t.objectId==e.objectId})),s=t.data.indexOf(n);0==s?(t.modalOpen=!0,s=t.data.length-1,t.viewedArticle=t.data[s]):(t.modalOpen=!0,t.viewedArticle=t.data[s-1])},next:function(t){var e=t.viewedArticle,n=t.data.find((function(t){return t.objectId==e.objectId})),s=t.data.indexOf(n);s==t.data.length-1?(t.modalOpen=!0,s=0,t.viewedArticle=t.data[s]):(t.modalOpen=!0,t.viewedArticle=t.data[s+1])},addToLiked:function(t){t.liked.push(t.viewedArticle)},openModal:function(t,e){t.modalOpen=!0,t.viewedArticle=e},closeModal:function(t,e){t.modalOpen=!1,t.viewedArticle=e},emptyFiltered:function(t){t.filtered=[]},collapse:function(t){t.collapsed=!t.collapsed},openSettings:function(t){t.setttingsModalOpen=!0},closeSettings:function(t){t.setttingsModalOpen=!1}}),pt=(n("d3b7"),n("96cf"),n("1da1")),mt={setData:function(t,e){return Object(pt["a"])(regeneratorRuntime.mark((function n(){var s,a,i,o,r,c,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=t.commit,"English"!==e){n.next=14;break}return n.next=4,fetch("./data/json/cda-paintings-v2.en.json");case 4:return a=n.sent,n.next=7,a.json();case 7:i=n.sent,o=[{id:1,lang:"Deutsch"}],s("mutateData",{data:i,lang:e}),s("destructure",i),s("setLangList",o),n.next=28;break;case 14:if("Deutsch"!==e){n.next=27;break}return n.next=17,fetch("./data/json/cda-paintings-v2.de.json");case 17:return r=n.sent,n.next=20,r.json();case 20:c=n.sent,l=[{id:1,lang:"English"}],s("mutateData",{data:c,lang:e}),s("destructure",c),s("setLangList",l),n.next=28;break;case 27:console.error("no language specified!");case 28:case"end":return n.stop()}}),n)})))()},destructure:function(t,e){var n=t.commit;n("destructure",e)},openModal:function(t,e){var n=t.commit;n("openModal",e)},closeModal:function(t,e){var n=t.commit;n("closeModal",e)},emptyFiltered:function(t){var e=t.commit;e("emptyFiltered")},previousArticle:function(t){var e=t.commit;e("previous")},nextArticle:function(t){var e=t.commit;e("next")},likeArticle:function(t){var e=t.commit;e("addToLiked")},collapseAll:function(t){var e=t.commit;e("collapse")},openSettings:function(t){var e=t.commit;e("openSettings")},closeSettings:function(t){var e=t.commit;e("closeSettings")}};s["a"].use(l["a"]);var gt=new l["a"].Store({state:ut,mutations:_t,actions:mt});s["a"].config.productionTip=!1,new s["a"]({router:dt,store:gt,render:function(t){return t(ot)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),a=n.n(s);a.a},"613c":function(t,e,n){},"61e0":function(t,e,n){"use strict";var s=n("334a"),a=n.n(s);a.a},"64e1":function(t,e,n){"use strict";var s=n("eebe"),a=n.n(s);a.a},"9c0c":function(t,e,n){},c9ba:function(t,e,n){"use strict";var s=n("51ff"),a=n.n(s);a.a},e60d:function(t,e,n){"use strict";var s=n("e9ec"),a=n.n(s);a.a},e9ec:function(t,e,n){},eebe:function(t,e,n){},ff64:function(t,e,n){"use strict";var s=n("613c"),a=n.n(s);a.a}});
//# sourceMappingURL=app.3bb7654a.js.map