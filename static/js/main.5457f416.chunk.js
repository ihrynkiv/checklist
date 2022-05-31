(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(13),c=a.n(r),o=a(9),i=a(16),s=a(17),m=a(4),d=a(2),u=a(8),v=function(e){var t,a,n=e.reviews,r=void 0===n?[]:n,c=e.active,o=void 0===c?0:c,i=(null===r||void 0===r||null===(t=r[o-1])||void 0===t?void 0:t.name)||"PR Review CheckList",s=(null===r||void 0===r||null===(a=r[o-1])||void 0===a?void 0:a.url)||"";return l.a.createElement("form",null,l.a.createElement("h2",{className:"label-wrapper"},l.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},s?l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:s},i):i)))};var g=function(e){var t=e.isPressed,a=e.name,n=e.setFilter;return l.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":t,onClick:function(){n(a),window.localStorage.setItem("tab",a)}},l.a.createElement("span",null,a))};function f(e){return l.a.createElement("li",{className:"todo"},l.a.createElement("div",{className:"stack-small"},l.a.createElement("div",{className:"c-cb"},l.a.createElement("input",{id:e.id,type:"checkbox",checked:!!e.completed,onChange:function(t){return e.toggleTaskCompleted(e.id,t)}}),l.a.createElement("label",{className:"todo-label",htmlFor:e.id,"data-completed":e.completed},e.name))))}var p="Style",h="Solution",E="Tests",b=[{id:"0",name:"Variables named by what they contain",completedId:0,type:p},{id:"1",name:"Functions are named by what they actually do",completedId:0,type:p},{id:"3",name:"There are no commented code and console logs",completedId:0,type:p},{id:"2",name:"Filename is consistent with the component name",completedId:0,type:p},{id:"4",name:"Do not use reserved names in naming other entities",completedId:0,type:p},{id:"9",name:"There is no unnecessary code duplication",completedId:0,type:h},{id:"6",name:"Edge cases: All edge cases are covered. Errors are handled",completedId:0,type:h},{id:"8",name:"Backward compatibility: New code should work with old functionality",completedId:0,type:h},{id:"7",name:"Dependencies: How written code can influence other parts of the project",completedId:0,type:h},{id:"5",name:"PR is relevant to the story. You should understand how it solves the problem",completedId:0,type:h},{id:"10",name:"Tests for utils",completedId:0,type:E},{id:"11",name:"Tests for hooks",completedId:0,type:E},{id:"12",name:"Tests for store items (reducers, selectors, thunks)",completedId:0,type:E}],S=["None","Success","Failed"],I=function(e){var t=e.tasks,a=e.onClear,n=t.filter((function(e){return e.completedId}));return l.a.createElement("div",{className:"counter"},l.a.createElement("div",null,n.length," / ",t.length),l.a.createElement("div",{className:"btn btn__clear",onClick:function(){return a()}},"Clear"))},y="dark",w="light",k=Object(n.createContext)({theme:w,changeTheme:function(){}}),N=a(14),O=a.n(N),T="dark",j="light",C={TOGGLE_THEME:["t"]},R=function(){var e=Object(n.useState)(localStorage.getItem("theme")===T),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(k).changeTheme,o={TOGGLE_THEME:function(){document.querySelector(".switch button").click()}};return l.a.createElement("div",{className:"switch"},l.a.createElement(u.GlobalHotKeys,{handlers:o,keyMap:C}),l.a.createElement(O.a,{onChange:function(e){r(e),localStorage.setItem("theme",e?T:j),setTimeout((function(){return c(a?w:y)}),350)},checked:a,size:80}))},J=a(49),_=a(50),x=function(e){var t=e.reviews,a=void 0===t?[]:t,n=e.active,r=e.onChange,c=e.onDelete;return l.a.createElement("div",{className:"navigation"},l.a.createElement("div",{className:n?"navigation-item":"navigation-item active",onClick:function(){return r(0)}},l.a.createElement(J.a,null)),a.map((function(e,t){var a=n===t+1?"navigation-item active":"navigation-item";return l.a.createElement("div",{key:e.name,className:a,onClick:function(){return r(t+1)}},t+1)})),!!n&&l.a.createElement("div",{className:"navigation-item delete",onClick:function(){return c()}},l.a.createElement(_.a,null)))},F=a(51),L=function(e){var t=e.reviews,a=e.active;if(!a)return l.a.createElement(l.a.Fragment,null);var n=t[a-1],r=n.author,c=n.repo;return c&&r?l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/".concat(r)},l.a.createElement(F.a,null)," ",r," ")),l.a.createElement("div",{className:"navbar-item"},l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/MackeyRMS/".concat(c,"/pulls")},l.a.createElement(J.b,null)," ",c," "))):l.a.createElement(l.a.Fragment,null)},G={Style:function(e){return e.type===p},Solution:function(e){return e.type===h},Tests:function(e){return e.type===E}},H=Object.keys(G),M={CLEAR_REVIEW:["del","backspace"],DELETE_REVIEW:["shift+del","shift+backspace"],NAVIGATION:["alt+1","alt+2","alt+3","alt+4","alt+5","alt+6","alt+7","alt+8","alt+9","alt+0"],RIGHT:["right","d","l"],LEFT:["left","a","h"],CHECK_ITEM:["1","2","3","4","5"]};var A=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("defaultState"))),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(localStorage.getItem("tab")||p),h=Object(m.a)(c,2),E=h[0],y=h[1],w=Object(d.d)(),k=Object(o.b)(),N=Object(m.a)(k,1)[0],O=N.get("name"),T=N.get("url"),j=N.get("author"),C=N.get("repo"),J=Object(n.useState)(JSON.parse(localStorage.getItem("reviews"))||[]),_=Object(m.a)(J,2),F=_[0],A=_[1],V=Object(n.useState)(+localStorage.getItem("activeReview")||0),D=Object(m.a)(V,2),P=D[0],K=D[1];function W(e,t){var n=a.map((function(t){return e===t.id?Object(s.a)({},t,{completedId:(t.completedId+1)%S.length}):t}));r(n);var l=JSON.parse(localStorage.getItem("reviews")),c=null===l||void 0===l?void 0:l[P-1];c?(c.state=n,localStorage.setItem("reviews",JSON.stringify(l)),A(l)):localStorage.setItem("defaultState",JSON.stringify(n)),t&&t.target&&t.target.blur()}Object(n.useEffect)((function(){if(O&&T){var e,t=localStorage.getItem("reviews")||JSON.stringify([]),a=JSON.parse(t),n=a.findIndex((function(e){return e.name===O&&(e.url.includes(T)||T.includes(e.url))}));-1===n&&(a.push({name:O,url:T,author:j,repo:C,state:b}),localStorage.setItem("reviews",JSON.stringify(a))),localStorage.setItem("activeReview",n+1||a.length),r(null===(e=JSON.parse(localStorage.getItem("reviews")))||void 0===e?void 0:e[n+1]),K(n+1||a.length),A(a)}}),[j,O,C,T]),Object(n.useEffect)((function(){var e,t=JSON.parse(localStorage.getItem("defaultState"));(null===F||void 0===F?void 0:F[P-1])?r((null===(e=F[P-1])||void 0===e?void 0:e.state)||b):0===P&&t&&r(t)}),[F,P,r]);var q=a.filter(G[E]).map((function(e){return l.a.createElement(f,{id:e.id,name:e.name,completed:e.completedId,key:"".concat(P,"-").concat(e.id),toggleTaskCompleted:W})})),z=H.map((function(e){return l.a.createElement(g,{key:e,name:e,isPressed:e===E,setFilter:y})})),B=q.filter((function(e){return!e.props.completed})),Y=1!==B.length?"items":"item",Q="".concat(B.length," ").concat(Y," remaining"),U=function(e){var t=JSON.parse(localStorage.getItem("reviews")),a=null===t||void 0===t?void 0:t[e||P-1];a?(a.state=b,localStorage.setItem("reviews",JSON.stringify(t)),A(t)):localStorage.setItem("defaultState",JSON.stringify(b)),r(b)};Object(n.useEffect)((function(){w("/checklist")}),[w]);var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F;if(e){var a=Object(i.a)(t);a.splice(e-1,1);var n=e<=a.length?e:a.length;localStorage.setItem("activeReview",n.toString()),localStorage.setItem("reviews",JSON.stringify(a)),K((function(){return n})),A((function(){return a}))}},Z={CLEAR_REVIEW:function(){return U(localStorage.getItem("activeReview")-1)},DELETE_REVIEW:function(){var e=+localStorage.getItem("activeReview")||0,t=JSON.parse(localStorage.getItem("reviews"))||F||[];X(e,t)},NAVIGATION:function(e){var t=+e.code.match(/\d+/g);if(isNaN(t))return null;var a=t<=(null===F||void 0===F?void 0:F.length)?t:(null===F||void 0===F?void 0:F.length)||0;localStorage.setItem("activeReview",a.toString()),K(a)},RIGHT:function(){var e=localStorage.getItem("tab")||E,t=H.indexOf(e),a=H[(t+1)%H.length];localStorage.setItem("tab",a),y(a)},LEFT:function(){var e=localStorage.getItem("tab")||E,t=H.indexOf(e),a=H[t-1<0?H.length-1:t-1];localStorage.setItem("tab",a),y(a)},CHECK_ITEM:function(e){var t,a,n=+e.code.match(/\d+/g);if(isNaN(n))return null;var l=null===(t=document.querySelectorAll(".todo"))||void 0===t||null===(a=t[n-1])||void 0===a?void 0:a.querySelector('input[type="checkbox"]');l&&l.click()}};return l.a.createElement("div",{className:"todoapp stack-large",key:window.location.href},l.a.createElement(u.GlobalHotKeys,{handlers:Z,keyMap:M}),l.a.createElement(v,{reviews:F,active:P}),l.a.createElement("div",{className:"filters btn-group stack-exception"},z),l.a.createElement("h2",{id:"list-heading",tabIndex:"-1"},Q),l.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},q),!!F.length&&l.a.createElement(x,{reviews:F,active:P,onDelete:X,onChange:function(e){K(e),localStorage.setItem("activeReview",e)}}),l.a.createElement(L,{reviews:F,active:P}),l.a.createElement(I,{tasks:a,onClear:U}),l.a.createElement(R,null))};function V(e){var t=Object(n.useState)(window.localStorage.getItem("theme")||w),a=Object(m.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){switch(r){case y:document.body.classList.add("dark-theme");break;case w:default:document.body.classList.remove("dark-theme")}}),[r]),l.a.createElement(k.Provider,{value:{theme:r,changeTheme:function(e){c(e)}}},e.children)}a(40),a(41),a(42),a(43),a(44),a(45),a(46),a(47);localStorage.getItem("defaultState")||localStorage.setItem("defaultState",JSON.stringify(b)),c.a.render(l.a.createElement(V,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(A,null)))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5457f416.chunk.js.map