(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(3),c=a.n(l),s=(a(15),a(16),a(1)),o=a(4),r=a(5),u=a(7),m=a(6),d=a(8),h=(a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={title:"This is demo title",isInput:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"editHandler",value:function(){this.setState(Object(s.a)({},this.state,{isInput:!0}))}},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},this.state,{title:e.target.value}))}},{key:"render",value:function(){var e=this,t=null;return t=this.state.isInput?i.a.createElement("div",null,i.a.createElement("input",{className:"form-control",onChange:function(t){return e.inputChange(t)},type:"text",value:this.state.title})):i.a.createElement("div",{className:"d-flex Title"},i.a.createElement("h2",{className:"display-4"},this.state.title),i.a.createElement("span",{onClick:function(){return e.editHandler()},className:"ml-auto edit-icon"},i.a.createElement("i",{className:"fas fa-pencil-alt"}))),i.a.createElement("div",null,t)}}]),t}(n.Component));var f=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container py-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 offset-sm-2"},i.a.createElement(h,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.7ec4c32c.chunk.js.map