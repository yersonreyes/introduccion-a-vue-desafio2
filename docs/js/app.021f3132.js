(function(){"use strict";var t={6543:function(t,e,n){var a=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"text-center mt-3"},[t._v("Listado de tareas")]),n("div",{staticClass:"container mt-5 mb-5"},[n("div",{staticClass:"input-group m-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nuevaTarea,expression:"nuevaTarea"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nueva tarea"},domProps:{value:t.nuevaTarea},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.agregarNuevaTarea.apply(null,arguments)},input:function(e){e.target.composing||(t.nuevaTarea=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:t.agregarNuevaTarea}},[t._v("Button")])])])]),n("div",{staticClass:"container section2"},[n("ul",{staticClass:"list-group"},t._l(t.tareas,(function(e,a){return n("li",{key:a,staticClass:"list-group-item"},[t._v(" "+t._s(a+1)+": "+t._s(e)+" "),n("button",{staticClass:"btn btn-danger ml-auto",on:{click:function(e){return t.eliminarTarea(a)}}},[t._v(" eliminar")])])})),0)])])},i=[],o={name:"App",data:()=>({nuevaTarea:"",tareas:[]}),methods:{agregarNuevaTarea(){this.tareas.unshift(this.nuevaTarea),this.nuevaTarea=""},eliminarTarea(t){0==t?this.tareas.shift():this.tareas.splice(t,t)}}},u=o,s=n(1001),c=(0,s.Z)(u,r,i,!1,null,null,null),l=c.exports;a.Z.config.productionTip=!1,new a.Z({render:t=>t(l)}).$mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,i){if(!a){var o=1/0;for(l=0;l<t.length;l++){a=t[l][0],r=t[l][1],i=t[l][2];for(var u=!0,s=0;s<a.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[s])}))?a.splice(s--,1):(u=!1,i<o&&(o=i));if(u){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[a,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,o=a[0],u=a[1],s=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var l=s(n)}for(e&&e(a);c<o.length;c++)i=o[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},a=self["webpackChunkdesafio2"]=self["webpackChunkdesafio2"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6543)}));a=n.O(a)})();
//# sourceMappingURL=app.021f3132.js.map