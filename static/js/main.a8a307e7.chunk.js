(this["webpackJsonpuzbegim-app"]=this["webpackJsonpuzbegim-app"]||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/dessert-5.92ec4fe8.jpg"},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/bg_1.d804fab4.jpg"},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/restaurant.d3cf8822.jpg"},function(e,t,a){e.exports=a.p+"static/media/city-map-bw.e0e711e5.png"},,,,function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),l=a.n(o),c=a(20),r=a(21),s=a(27),m=a(25),d=a(8),u=a(2),h=(a(33),function(){Object(n.useEffect)((function(){return a(),t(),function(){a(),t()}}));var e=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("navbar");e>=100&&e<200&&t.classList.contains("fadeInDown")&&t.classList.remove("fadeInDown"),e>500&&!t.classList.contains("fixed")&&(t.classList.add("fadeInDown"),t.classList.add("fixed")),e<500&&t.classList.contains("fixed")&&(t.classList.add("fadeOutUp"),setTimeout((function(){t.classList.remove("fixed","fadeOutUp"),t.classList.add("fadeInDown")}),1e3))},t=function(){window.addEventListener("scroll",function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var i=this,o=arguments,l=function(){t=null,n||e.apply(i,o)},c=n&&!t;clearTimeout(t),t=setTimeout(l,a),c&&e.apply(i,o)}}(e))},a=function(){var e=window.location.pathname;Array.from(document.querySelectorAll(".navbar .nav-link a")).forEach((function(t){e===t.getAttribute("href")?t.classList.add("is-active"):t.classList.remove("is-active")}))};return i.a.createElement("nav",{id:"navbar",className:"navbar fadeInDown"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-mobile"},i.a.createElement("p",{className:"navbar-brand"},"UZBEGIM"),i.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:function(){var e=document.querySelector(".navbar-collapse"),t=document.querySelector(".navbar-burger");e.style.display="block",t.classList.toggle("is-active"),t.classList.contains("is-active")?setTimeout((function(){e.classList.add("is-active")}),0):(e.classList.remove("is-active"),setTimeout((function(){e.style.display="none"}),300))}},i.a.createElement("div",{className:"navbar-burger"},i.a.createElement("div",{className:"bar1"}),i.a.createElement("div",{className:"bar2"}),i.a.createElement("div",{className:"bar3"})),i.a.createElement("span",null,"Menu"))),i.a.createElement("div",{className:"navbar-collapse"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("p",{className:"nav-link"},i.a.createElement(d.b,{to:"/uzbegim-app"},"Home"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("p",{className:"nav-link"},i.a.createElement(d.b,{to:"/uzbegim-app/menu"},"Menu"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("p",{className:"nav-link"},i.a.createElement(d.b,{to:"/uzbegim-app/contact"},"Contact")))))))}),p=(a(39),function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/uzbegim-app"},"Homepage")),i.a.createElement("li",null,i.a.createElement("a",{href:"/uzbegim-app/uzbegim-app/menu"},"Menu")),i.a.createElement("li",null,i.a.createElement("a",{href:"/uzbegim-app/contact"},"Contact"))),i.a.createElement("p",{className:"legal-notice"},"Legal Notice")))}),b=(a(40),a(41),function(e){var t=e.bgImage,a=e.bannerText,n={backgroundImage:"url(".concat(t,")")};return i.a.createElement("div",{className:"hero-banner",style:n},i.a.createElement("h1",null,a.span?i.a.createElement("span",{className:"subheading"},a.span):null," ",a.text?a.text:null," ",a.button?i.a.createElement("button",{className:"banner-button"},a.button):null),i.a.createElement("div",{className:"overlay"}))}),f=(a(42),function(e){var t=e.buttonText,a=e.buttonLink,n=e.id,o=e.onClickAction,l=void 0===o?null:o;return i.a.createElement("div",{className:"button"},i.a.createElement(d.b,{to:a,"data-label":n,onClick:l},t))}),v=(a(43),function(e){var t=e.tiles,a=e.theme,o=e.tilesTitle;Object(n.useEffect)((function(){return l(),r(),function(){l(),r()}}));var l=function(){window.addEventListener("scroll",function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var i=this,o=arguments,l=function(){t=null,n||e.apply(i,o)},c=n&&!t;clearTimeout(t),t=setTimeout(l,a),c&&e.apply(i,o)}}(s))},c=function(e){var t=e.getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop;return t.top+a},r=function(){Array.from(document.querySelectorAll(".theme-2 .tile")).forEach((function(e){var t=c(e);window.innerHeight+window.scrollY>t&&e.classList.add("fadeInUp")}))},s=function(){Array.from(document.querySelectorAll(".theme-2 .tile")).forEach((function(e){var t=window.scrollY+window.innerHeight-e.offsetHeight/2,a=c(e);t>a&&t<a+e.offsetHeight&&e.classList.add("fadeInUp")}))},m=function(e){e.preventDefault();var t=null!=window.localStorage.getItem("chosen_food")?JSON.parse(window.localStorage.getItem("chosen_food")):[],a=e.target.getAttribute("data-label");t.push(a),window.localStorage.setItem("chosen_food",JSON.stringify(t))},d=t.map((function(e,t){var a=e.image,n=e.title,o=e.price,l=e.description,c=e.button,r=e.id,s=o?i.a.createElement("p",null,o):null,d=c?i.a.createElement(f,{buttonText:"Order",buttonLink:"#",id:r,onClickAction:m}):null;return i.a.createElement("div",{className:"tile",key:t},i.a.createElement("div",{className:"tile-image",style:{backgroundImage:"url(".concat(a,")")}}),i.a.createElement("div",{className:"tile-text"},i.a.createElement("div",null,i.a.createElement("span",{className:"tile-heading"},i.a.createElement("h3",null,n),s),i.a.createElement("p",null,l),d)))})),u=o?i.a.createElement("div",{className:"tiles-title"},i.a.createElement("h2",null,i.a.createElement("span",{className:"subheading"},o.subhead),o.title)):null;return i.a.createElement("div",{className:"tiles"},u,i.a.createElement("div",{className:a,onScroll:s},d))}),E=a(12),g=a.n(E),w=a(23),N=a.n(w),y=a(1),x=a.n(y),k=(a(44),function(e){var t=e.image,a="".concat(t);return i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement("h2",null,i.a.createElement("span",{className:"subheading"},"About"),"About Us"),i.a.createElement("div",{className:"content-about"},i.a.createElement("img",{src:a,alt:"restaurant interior"}),i.a.createElement("div",null,i.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",i.a.createElement("br",null),"OPEN HOURS: 10-10")))))}),I=function(){var e=[{title:"Food Name",image:x.a,description:"some text which describes the food and how delicios it is"},{title:"Food Name",image:x.a,description:"some text which describes the food and how delicios it is"},{title:"Food Name",image:x.a,description:"some text which describes the food and how delicios it is"},{title:"Food Name",image:x.a,description:"some text which describes the food and how delicios it is"}],t=[{title:"Food Name",image:x.a,description:"some text which describes the food and how delicios it is"},{title:"Food Name",image:x.a,description:"some text which describes the food and how delicios it is"},{title:"Food Name",image:x.a,description:"some text which describes the food and how delicios it is"},{title:"Food Name",image:x.a,description:"some text which describes the food and how delicios it is"}];return i.a.createElement("div",{className:"content home"},i.a.createElement("header",null,i.a.createElement(b,{bgImage:g.a,bannerText:{span:"UZBEGIM",text:"delicious middle east cuisine",button:""}})),i.a.createElement(v,{tiles:e,tilesTitle:"",theme:"theme-1"}),i.a.createElement(v,{tiles:t,tilesTitle:{subhead:"Specialties",title:"Our menu"},theme:"theme-2"}),i.a.createElement(f,{buttonText:"See Full Menu",buttonLink:"/uzbegim-app/menu"}),i.a.createElement(k,{image:N.a}))},L=(a(45),a(13)),C=function(){var e={name:"Uzbegim",location:{lat:50.0893161,lng:14.4625295}};return i.a.createElement(L.b,{googleMapsApiKey:"AIzaSyDrvWbnzo8Yf8FCtaCKvNzX5SPLHxDtIe0"},i.a.createElement(L.a,{mapContainerStyle:{height:"50vh",width:"100%"},zoom:18,center:{lat:50.0893161,lng:14.4625295}},i.a.createElement(L.c,{key:e.name,position:e.location})))},O=a(24),S=a.n(O),T=function(){return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement(b,{bgImage:S.a,bannerText:{span:"",text:"Contact Info",button:""}})),i.a.createElement("h1",null,"Contact Info"),i.a.createElement("div",{className:"container contact-info"},i.a.createElement("div",null,i.a.createElement(C,null)),i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("strong",null,"Address"),": Konevova 945/75, 130 00, Praha 3 - Zizkov",i.a.createElement("br",null),i.a.createElement("strong",null,"Telephone"),": 702 869 389 ",i.a.createElement("br",null),"If you would like to make an order please call, or check the bolt",i.a.createElement("br",null),"app on you phone: two buttons with app links ",i.a.createElement("br",null)))))},z=a(26),A=(a(46),function(e){var t=e.buttonName,a=e.buttonId,n=e.onTabchange,o="".concat(a,"-button");return i.a.createElement("button",{onClick:n,id:o},t)}),K=function(){var e=[{id:"soups",submenu:"Polevky",tiles:[{id:1,title:"Polevka 1",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"},{id:2,title:"Polevka 2",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"},{id:3,title:"Polevka 3",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"},{id:4,title:"Polevka 4",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"}]},{id:"main",submenu:"Hlavni Jidla",tiles:[{id:5,title:"Hlavni Jidlo 1",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"},{id:6,title:"Hlavni Jidlo 2",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"},{id:7,title:"Hlavni Jidlo 3",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"},{id:8,title:"Hlavni Jidlo 4",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"}]},{id:"other",submenu:"Other",tiles:[{id:9,title:"Other 1",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"},{id:10,title:"Other 2",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"},{id:11,title:"Other 3",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"},{id:12,title:"Other 4",image:x.a,description:"some text which describes the food and how delicios it is",button:!0,price:"150 KC"}]}],t=Object(n.useState)(e),a=Object(z.a)(t,2),o=a[0],l=a[1],c=function(t){var a=[],n=t.target.id,i=Array.from(document.querySelectorAll(".tabs-wrapper button")),o=e.find((function(e){return"".concat(e.id,"-button")===n}));i.forEach((function(e){return e.id===n?e.classList.add("is-active"):e.classList.remove("is-active")})),a.push(o),l(a)},r=e.map((function(e,t){return i.a.createElement(A,{onTabchange:c,key:t.toString(),buttonName:e.submenu,buttonId:e.id})})),s=o.map((function(e,t){var a=e.tiles,n=e.id;return i.a.createElement("div",{key:t.toString(),id:n},i.a.createElement(v,{tiles:a,theme:"theme-2"}))}));return i.a.createElement("div",null,i.a.createElement("div",{className:"tabs-wrapper"},r),s)},H=function(){return i.a.createElement(K,null)},j=(a(47),a(48),function(){return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement(b,{bgImage:g.a,bannerText:{span:"",text:"Menu",button:""}})),i.a.createElement("div",{className:"container"},i.a.createElement(H,null)))}),F=(a(49),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(h,null),i.a.createElement(u.a,{exact:!0,path:"/uzbegim-app",component:I}),i.a.createElement(u.a,{path:"/uzbegim-app/menu",component:j}),i.a.createElement(u.a,{path:"/uzbegim-app/contact",component:T})),i.a.createElement(p,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.a8a307e7.chunk.js.map