(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(t,e,n){var r=n(4),o=n(143).trim,i=n(144),c=r.parseFloat,u=1/c(i+"-0")!=-1/0;t.exports=u?function(t){var e=o(String(t)),n=c(e);return 0===n&&"-"==e.charAt(0)?-0:n}:c},142:function(t,e,n){"use strict";var r=n(99),o=n(41).getWeakData,i=n(9),c=n(5),u=n(63),s=n(62),a=n(20),f=n(6),l=n(19),d=l.set,v=l.getterFor,h=a.find,p=a.findIndex,x=0,m=function(t){return t.frozen||(t.frozen=new b)},b=function(){this.entries=[]},g=function(t,e){return h(t.entries,(function(t){return t[0]===e}))};b.prototype={get:function(t){var e=g(this,t);if(e)return e[1]},has:function(t){return!!g(this,t)},set:function(t,e){var n=g(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=p(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,a){var l=t((function(t,r){u(t,l,e),d(t,{type:e,id:x++,frozen:void 0}),null!=r&&s(r,t[a],t,n)})),h=v(e),p=function(t,e,n){var r=h(t),c=o(i(e),!0);return!0===c?m(r).set(e,n):c[r.id]=n,t};return r(l.prototype,{delete:function(t){var e=h(this);if(!c(t))return!1;var n=o(t);return!0===n?m(e).delete(t):n&&f(n,e.id)&&delete n[e.id]},has:function(t){var e=h(this);if(!c(t))return!1;var n=o(t);return!0===n?m(e).has(t):n&&f(n,e.id)}}),r(l.prototype,n?{get:function(t){var e=h(this);if(c(t)){var n=o(t);return!0===n?m(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return p(this,t,e)}}:{add:function(t){return p(this,t,!0)}}),l}}},146:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},149:function(t,e,n){n(97)("asyncIterator")},150:function(t,e,n){n(97)("iterator")},151:function(t,e,n){"use strict";var r=n(98),o=n(103);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},153:function(t,e,n){n(1)({target:"Object",stat:!0},{setPrototypeOf:n(61)})},154:function(t,e,n){var r=n(1),o=n(152).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},155:function(t,e,n){var r=n(1),o=n(141);r({global:!0,forced:parseFloat!=o},{parseFloat:o})},156:function(t,e,n){"use strict";var r,o=n(4),i=n(99),c=n(41),u=n(98),s=n(142),a=n(5),f=n(19).enforce,l=n(101),d=!o.ActiveXObject&&"ActiveXObject"in o,v=Object.isExtensible,h=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},p=t.exports=u("WeakMap",h,s);if(l&&d){r=s.getConstructor(h,"WeakMap",!0),c.REQUIRED=!0;var x=p.prototype,m=x.delete,b=x.has,g=x.get,O=x.set;i(x,{delete:function(t){if(a(t)&&!v(t)){var e=f(this);return e.frozen||(e.frozen=new r),m.call(this,t)||e.frozen.delete(t)}return m.call(this,t)},has:function(t){if(a(t)&&!v(t)){var e=f(this);return e.frozen||(e.frozen=new r),b.call(this,t)||e.frozen.has(t)}return b.call(this,t)},get:function(t){if(a(t)&&!v(t)){var e=f(this);return e.frozen||(e.frozen=new r),b.call(this,t)?g.call(this,t):e.frozen.get(t)}return g.call(this,t)},set:function(t,e){if(a(t)&&!v(t)){var n=f(this);n.frozen||(n.frozen=new r),b.call(this,t)?O.call(this,t,e):n.frozen.set(t,e)}else O.call(this,t,e);return this}})}},159:function(t,e,n){var r=n(1),o=n(3),i=n(102).f;r({target:"Object",stat:!0,forced:o((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:i})},160:function(t,e,n){var r=n(1),o=n(3),i=n(5),c=Object.isFrozen;r({target:"Object",stat:!0,forced:o((function(){c(1)}))},{isFrozen:function(t){return!i(t)||!!c&&c(t)}})},301:function(t,e,n){"use strict";var r=n(146);e.__esModule=!0,e.default=function(t){var e=void 0===t?{}:t,n=e.name,r=void 0===n?"todo-list":n,u=e.icon,s=void 0===u?"v-md-icon-checkbox":u,a=e.text,f=e.title,l=void 0===f?"任务列表":f,d=e.color,v=void 0===d?"#3eaf7c":d,h=(0,o.default)({commandName:r,title:l,text:a,icon:s}),p="border-color: "+v,x="background-color: "+v,m=function(t){t&&t.use(c.default,{renderCheckbox:function(t){return'<span class="v-md-editor__todo-list-checkbox'+("todo"===t?"":" v-md-editor__todo-list-checkbox--checked")+'" style="'+("todo"===t?""+p:p+";"+x)+'"></span>'}})};return{extendMarkdown:m,install:function(t){t.command&&t.command(r,i.default),t.toolbar&&t.toolbar(r,h),t.extendMarkdown(m)}}};var o=r(n(302)),i=r(n(303)),c=r(n(305));n(306)},302:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=t.commandName,n=t.text,r=t.title,o=t.icon;return{title:r,icon:o,text:n,action:function(t){t.execCommand(e,{type:"todo"})}}}},303:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n=e.type,o=void 0===n?"todo":n;t.insert((function(t){var e="todo"===o?" ":"x",n=function(t){return t||"任务列表"},i=(0,r.generatorText)({selected:t,InsertGetter:function(t){return"- ["+e+"] "+n(t)},selectedGetter:n});return{text:i.insertContent,selected:i.newSelected}}))};var r=n(304)},304:function(t,e,n){"use strict";n(64),n(100),n(161),n(42),n(65),n(14),n(29),n(163),n(43),n(162),n(66),n(47),e.__esModule=!0,e.arraytoObject=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&o(e,t[n]);return e},e.importAll=function(t,e){e.keys().forEach((function(n){t[n]=e(n)}))},e.generatorText=function(t){var e,n,r=t.selected,o=t.InsertGetter,i=t.selectedGetter,c=void 0===i?function(t){return t}:i,u=t.ignoreEmptyLine,s=void 0===u||u;r?(n=c(r),e=o(r,1),-1!==r.indexOf("\n")&&(e=r.split("\n").map((function(t,e){return s&&!t?"":o(t,e+1).replace(c(null),"")})).join("\n"),n=e)):(e=o(null,1),n=c(r));return{insertContent:e,newSelected:n}},e.isObject=void 0;var r=Object.prototype.toString;function o(t,e){return Object.keys(e).forEach((function(n){t[n]=e[n]})),t}e.isObject=function(t){return"[object Object]"===r.call(t)}},305:function(t,e,n){"use strict";n(100),n(30),t.exports=function(t,e){void 0===e&&(e={});var n=e,r=n.listClass,o=void 0===r?"v-md-editor__todo-list":r,i=n.listItemClass,c=void 0===i?"v-md-editor__todo-list-item":i,u=n.renderCheckbox,s=void 0===u?function(t){return'<input class="v-md-editor__todo-list-checkbox" type="checkbox" '+("todo"===t?"":"checked")+">"}:u;function a(t,e,n){var r=t.attrIndex(e),o=[e,n];r<0?t.attrPush(o):t.attrs[r]=o}function f(t,e){for(var n=t[e].level-1,r=e-1;r>=0;r--)if(t[r].level===n)return r;return-1}function l(t,e){return"inline"===t[e].type&&function(t){return"paragraph_open"===t.type}(t[e-1])&&function(t){return"list_item_open"===t.type}(t[e-2])&&function(t){return 0===t.content.indexOf("[ ] ")||0===t.content.indexOf("[x] ")||0===t.content.indexOf("[X] ")}(t[e])}function d(t,e){t.children.unshift(function(t,e){var n=new e("html_inline","",0);0===t.content.indexOf("[ ] ")?n.content=s("todo"):0!==t.content.indexOf("[x] ")&&0!==t.content.indexOf("[X] ")||(n.content=s("completed"));return n}(t,e)),t.children[1].content=t.children[1].content.slice(3),t.content=t.content.slice(3)}t.core.ruler.after("inline","v-md-task-lists",(function(t){for(var e=t.tokens,n=2;n<e.length;n++)l(e,n)&&(d(e[n],t.Token),a(e[n-2],"class",c),a(e[f(e,n-2)],"class",o))}))}},306:function(t,e,n){},320:function(t,e,n){"use strict";n.r(e);var r=n(145),o=n(148),i=n.n(o),c=(n(157),n(158)),u=n.n(c),s=n(301),a=n.n(s);i.a.use(a()());var f={components:Object(r.a)({},i.a.name,i.a),data:function(){return this.theme=u.a,{text:"- [x] 任务列表"}}},l=n(28),d=Object(l.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-md-editor",{attrs:{"left-toolbar":"undo redo | todo-list",theme:t.theme,height:"500px"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})}),[],!1,null,null,null);e.default=d.exports}}]);