(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{17:function(e,t,a){e.exports=a(46)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(11),r=a.n(c),o=(a(22),a(23),a(24),a(25),a(26),a(27),a(28),a(29),a(14)),i=a(15),s=a(3),m=a(2),d=a(7),u=function(e){var t,a,n=e.reviews,c=void 0===n?[]:n,r=e.active,o=void 0===r?0:r,i=(null===c||void 0===c||null===(t=c[o-1])||void 0===t?void 0:t.name)||"PR Review CheckList",s=(null===c||void 0===c||null===(a=c[o-1])||void 0===a?void 0:a.url)||"";return l.a.createElement("form",null,l.a.createElement("h2",{className:"label-wrapper"},l.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},s?l.a.createElement("a",{target:"_blank",href:s},i):i)))};var v=function(e){var t=e.isPressed,a=e.name,n=e.setFilter;return l.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":t,onClick:function(){n(a),window.localStorage.setItem("tab",a)}},l.a.createElement("span",null,a))};function g(e){return l.a.createElement("li",{className:"todo"},l.a.createElement("div",{className:"stack-small"},l.a.createElement("div",{className:"c-cb"},l.a.createElement("input",{id:e.id,type:"checkbox",checked:!!e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),l.a.createElement("label",{className:"todo-label",htmlFor:e.id,"data-completed":e.completed},e.name))))}var f="Style",p="Solution",h="Tests",b=[{id:"0",name:"Variables named by what they contain",completedId:0,type:f},{id:"1",name:"Functions are named by what they actually do",completedId:0,type:f},{id:"3",name:"There are no commented code and console logs",completedId:0,type:f},{id:"2",name:"Filename is consistent with the component name",completedId:0,type:f},{id:"4",name:"Do not use reserved names in naming other entities",completedId:0,type:f},{id:"9",name:"There is no unnecessary code duplication",completedId:0,type:p},{id:"6",name:"Edge cases: All edge cases are covered. Errors are handled",completedId:0,type:p},{id:"8",name:"Backward compatibility: New code should work with old functionality",completedId:0,type:p},{id:"7",name:"Dependencies: How written code can influence other parts of the project",completedId:0,type:p},{id:"5",name:"PR is relevant to the story. You should understand how it solves the problem",completedId:0,type:p},{id:"10",name:"Tests for utils",completedId:0,type:h},{id:"11",name:"Tests for hooks",completedId:0,type:h},{id:"12",name:"Tests for store items (reducers, selectors, thunks)",completedId:0,type:h}],E=["None","Success","Failed"],S=function(e){var t=e.tasks,a=e.onClear,n=t.filter((function(e){return e.completedId}));return l.a.createElement("div",{className:"counter"},l.a.createElement("div",null,n.length," / ",t.length),l.a.createElement("div",{className:"btn btn__clear",onClick:a},"Clear"))},w="dark",y="light",I=Object(n.createContext)({theme:y,changeTheme:function(){}}),O=a(12),k=a.n(O),N="dark",j="light",C=function(){var e=Object(n.useState)(window.localStorage.getItem("theme")===N),t=Object(s.a)(e,2),a=t[0],c=t[1];return l.a.createElement(I.Consumer,null,(function(e){var t=e.changeTheme;e.theme;return l.a.createElement("div",{className:"switch"},l.a.createElement(k.a,{onChange:function(e){var n;c(n=e),window.localStorage.setItem("theme",n?N:j),setTimeout((function(){return t(a?y:w)}),350)},checked:a,size:80}))}))},J=a(47),T=a(48),R=function(e){var t=e.reviews,a=void 0===t?[]:t,n=e.active,c=e.onChange,r=e.onDelete;return l.a.createElement("div",{className:"navigation"},l.a.createElement("div",{className:n?"navigation-item":"navigation-item active",onClick:function(){return c(0)}},l.a.createElement(J.a,null)),a.map((function(e,t){var a=n===t+1?"navigation-item active":"navigation-item";return l.a.createElement("div",{key:e.name,className:a,onClick:function(){return c(t+1)}},t+1)})),!!n&&l.a.createElement("div",{className:"navigation-item delete",onClick:r},l.a.createElement(T.a,null)))},F=a(49),_=function(e){var t=e.reviews,a=e.active;if(!a)return l.a.createElement(l.a.Fragment,null);var n=t[a-1],c=n.author,r=n.repo;return r&&c?l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("a",{target:"_blank",href:"https://github.com/".concat(c)},l.a.createElement(F.a,null)," ",c," ")),l.a.createElement("div",{className:"navbar-item"},l.a.createElement("a",{target:"_blank",href:"https://github.com/MackeyRMS/".concat(r,"/pulls")},l.a.createElement(J.b,null)," ",r," "))):l.a.createElement(l.a.Fragment,null)};var x={Style:function(e){return e.type===f},Solution:function(e){return e.type===p},Tests:function(e){return e.type===h}},P=Object.keys(x);var D=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("defaultState"))),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(window.localStorage.getItem("tab")||f),p=Object(s.a)(r,2),h=p[0],w=p[1],y=Object(m.d)(),I=Object(d.b)(),O=Object(s.a)(I,1)[0],k=O.get("name"),N=O.get("url"),j=O.get("author"),J=O.get("repo"),T=Object(n.useState)(JSON.parse(localStorage.getItem("reviews"))||[]),F=Object(s.a)(T,2),D=F[0],L=F[1],z=Object(n.useState)(+localStorage.getItem("activeReview")||0),M=Object(s.a)(z,2),B=M[0],H=M[1];if(k&&N){var A=localStorage.getItem("reviews")||JSON.stringify([]),K=JSON.parse(A),V=K.findIndex((function(e){return e.name===k&&(e.url.includes(N)||N.includes(e.url))}));-1===V&&(K.push({name:k,url:N,author:j,repo:J,state:b}),localStorage.setItem("reviews",JSON.stringify(K))),localStorage.setItem("activeReview",V+1||K.length),window.location.reload(),console.log("reload"),console.log("test2")}function Y(e){var t=a.map((function(t){return e===t.id?Object(i.a)({},t,{completedId:(t.completedId+1)%E.length}):t}));c(t);var n=JSON.parse(localStorage.getItem("reviews")),l=null===n||void 0===n?void 0:n[B-1];l?(l.state=t,localStorage.setItem("reviews",JSON.stringify(n)),L(n)):localStorage.setItem("defaultState",JSON.stringify(t))}console.log("test"),Object(n.useEffect)((function(){var e,t=JSON.parse(localStorage.getItem("defaultState"));(null===D||void 0===D?void 0:D[B-1])?c((null===(e=D[B-1])||void 0===e?void 0:e.state)||b):0===B&&t&&c(t)}),[D,B,c]);var q=a.filter(x[h]).map((function(e){return l.a.createElement(g,{id:e.id,name:e.name,completed:e.completedId,key:"".concat(B,"-").concat(e.id),toggleTaskCompleted:Y})})),G=P.map((function(e){return l.a.createElement(v,{key:e,name:e,isPressed:e===h,setFilter:w})})),Q=q.filter((function(e){return!e.props.completed})),U=1!==Q.length?"items":"item",W="".concat(Q.length," ").concat(U," remaining"),X=Object(n.useRef)(null),Z=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(a.length);return Object(n.useEffect)((function(){a.length-Z===-1&&X.current.focus()}),[a.length,Z]),Object(n.useEffect)((function(){y("/checklist")}),[y]),l.a.createElement("div",{className:"todoapp stack-large"},l.a.createElement(u,{reviews:D,active:B}),l.a.createElement("div",{className:"filters btn-group stack-exception"},G),l.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:X},W),l.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},q),!!D.length&&l.a.createElement(R,{reviews:D,active:B,onDelete:function(){var e=Object(o.a)(D);e.splice(B-1,1),localStorage.setItem("activeReview","0"),localStorage.setItem("reviews",JSON.stringify(e)),H((function(){return 0})),L((function(){return e}))},onChange:function(e){localStorage.setItem("activeReview",e),H(e)}}),l.a.createElement(_,{reviews:D,active:B}),l.a.createElement(S,{tasks:a,onClear:function(){var e=JSON.parse(localStorage.getItem("reviews")),t=null===e||void 0===e?void 0:e[B-1];t?(t.state=b,localStorage.setItem("reviews",JSON.stringify(e)),L(e)):localStorage.setItem("defaultState",JSON.stringify({CHECK_LIST:b})),c(b)}}),l.a.createElement(C,null))};function L(e){var t=Object(n.useState)(window.localStorage.getItem("theme")||y),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){switch(c){case w:document.body.classList.add("dark-theme");break;case y:default:document.body.classList.remove("dark-theme")}}),[c]),l.a.createElement(I.Provider,{value:{theme:c,changeTheme:function(e){r(e)}}},e.children)}localStorage.getItem("defaultState")||localStorage.setItem("defaultState",JSON.stringify(b)),r.a.render(l.a.createElement(L,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.a,null,l.a.createElement(D,null)))),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d0c8423e.chunk.js.map