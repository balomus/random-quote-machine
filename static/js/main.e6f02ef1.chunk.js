(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(4),a=n.n(r),s=(n(12),n(3)),u=n.n(s),i=n(7),l=n(5),d=n(6),b=n(0),h=["statusCode","statusMessage"];var j=function(){var t=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],e=Object(o.useState)(null),n=Object(d.a)(e,2),c=n[0],r=n[1];function a(){return s.apply(this,arguments)}function s(){return(s=Object(l.a)(u.a.mark((function e(){var n,o,c,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.quotable.io/random");case 3:return n=e.sent,e.next=6,n.json();case 6:if(o=e.sent,c=o.statusCode,a=o.statusMessage,s=Object(i.a)(o,h),n.ok){e.next=12;break}throw new Error("".concat(c," ").concat(a));case 12:r(s),document.body.style.backgroundColor=document.body.style.color=document.getElementById("new-quote").style.backgroundColor=document.getElementById("twitter-button").style.backgroundColor=t[j(0,t.length-1)],e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0),r({content:"Oops... Something went wrong"});case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}var j=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)};return Object(o.useEffect)((function(){console.log("use effect ran"),a()}),[]),c?Object(b.jsxs)("div",{id:"quote-box",children:[Object(b.jsx)("div",{id:"text",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-quote-left"})," ",c.content]})}),Object(b.jsx)("div",{id:"author",children:Object(b.jsxs)("p",{children:["- ",c.author]})}),Object(b.jsxs)("div",{id:"buttons",children:[Object(b.jsx)("a",{href:'https://twitter.com/intent/tweet?text="'.concat(c.content,'" - ').concat(c.author),className:"button",id:"twitter-button",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{className:"fab fa-twitter"})}),Object(b.jsx)("button",{id:"new-quote",onClick:a,children:"New Quote"})]})]}):null},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),r(t),a(t)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.e6f02ef1.chunk.js.map