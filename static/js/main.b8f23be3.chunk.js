(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),l=a.n(o),r=(a(9),a(1));var s=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(0),s=Object(r.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)(0),p=Object(r.a)(u,2),w=p[0],b=p[1],h=Object(n.useState)(0),v=Object(r.a)(h,2),f=v[0],d=v[1];return Object(n.useEffect)((function(){if(a){var e=setInterval((function(){59===w&&(d(f+1),b(0)),59===i?(b(w+1),m(0)):m(i+1)}),1e3);return function(){return clearInterval(e)}}}),[a,i,w,f]),c.a.createElement("div",{className:"stopwatch"},c.a.createElement("div",{className:"stopwatch-wrapper"},c.a.createElement("span",{className:"time"},f<10?"0"+f:f,":"),c.a.createElement("span",{className:"time"},w<10?"0"+w:w,"."),c.a.createElement("span",{className:"time"},i<10?"0"+i:i)),c.a.createElement("div",{className:"buttons-wrapper"},a?c.a.createElement("button",{type:"button",className:"button-action button-pause",onClick:function(){return o(!1)}},c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-pause icon-pause",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"}))):c.a.createElement("button",{type:"button",className:"button-action button-play",onClick:function(){return o(!0)}},c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-play-fill icon-play",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"}))),a||i>0||w>0||f>0?c.a.createElement("button",{type:"button",className:"button-action button-stop",onClick:function(){o(!1),m(0),b(0),d(0)}},c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-stop-fill icon-stop",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"}))):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.b8f23be3.chunk.js.map