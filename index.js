!function(){"use strict";function E(){E=function(){return a};var a={},e=Object.prototype,s=e.hasOwnProperty,u=Object.defineProperty||function(e,t,r){e[t]=r.value},t="function"==typeof Symbol?Symbol:{},n=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",o=t.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o,i,a,c,t=t&&t.prototype instanceof p?t:p,t=Object.create(t.prototype),n=new b(n||[]);return u(t,"_invoke",{value:(o=e,i=r,a=n,c="suspendedStart",function(e,t){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===e)throw t;return L()}for(a.method=e,a.arg=t;;){var r=a.delegate;if(r){r=function e(t,r){var n=r.method,o=t.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=void 0,e(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=l(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=l(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),t}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}a.wrap=c;var f={};function p(){}function h(){}function d(){}var t={},m=(i(t,n,function(){return this}),Object.getPrototypeOf),m=m&&m(m(S([]))),g=(m&&m!==e&&s.call(m,n)&&(t=m),d.prototype=p.prototype=Object.create(t));function y(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function v(a,c){var t;u(this,"_invoke",{value:function(r,n){function e(){return new c(function(e,t){!function t(e,r,n,o){var i,e=l(a[e],a,r);if("throw"!==e.type)return(r=(i=e.arg).value)&&"object"==typeof r&&s.call(r,"__await")?c.resolve(r.__await).then(function(e){t("next",e,n,o)},function(e){t("throw",e,n,o)}):c.resolve(r).then(function(e){i.value=e,n(i)},function(e){return t("throw",e,n,o)});o(e.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}})}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(t){if(t){var r,e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(e=function e(){for(;++r<t.length;)if(s.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e}).next=e}return{next:L}}function L(){return{value:void 0,done:!0}}return u(g,"constructor",{value:h.prototype=d,configurable:!0}),u(d,"constructor",{value:h,configurable:!0}),h.displayName=i(d,o,"GeneratorFunction"),a.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},a.awrap=function(e){return{__await:e}},y(v.prototype),i(v.prototype,r,function(){return this}),a.AsyncIterator=v,a.async=function(e,t,r,n,o){void 0===o&&(o=Promise);var i=new v(c(e,t,r,n),o);return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),i(g,o,"Generator"),i(g,n,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),a.keys=function(e){var t,r=Object(e),n=[];for(t in r)n.push(t);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=S,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&s.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return i.type="throw",i.arg=r,n.next=e,t&&(n.method="next",n.arg=void 0),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc?null:o)?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r,n,o=this.tryEntries[t];if(o.tryLoc===e)return"throw"===(r=o.completion).type&&(n=r.arg,x(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},a}function s(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function r(c){return function(){var e=this,a=arguments;return new Promise(function(t,r){var n=c.apply(e,a);function o(e){s(n,t,r,o,i,"next",e)}function i(e){s(n,t,r,o,i,"throw",e)}o(void 0)})}}function a(e,t,r){(t=function(e){e=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"==typeof e?e:String(e)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function n(e){console.log(e)}var u=[],l=function(e){for(let i=0;i<u.length;i++)if(u[i].ws==e)return i;return-1};function f(){e.apply(this,arguments)}function e(){return(e=r(E().mark(function e(t,r){var n,o,i,a,c,s;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c=-1,"logout"==r.type&&-1!=(c=l(t))&&(u[c].user="",u[c].login="",u[c].nsf="",u[c].email="",r.user="",r.login="",r.nsf="",r.email=""),u=u.filter(function(e){return e.ws.readyState==x.OPEN}),s=r.user||"",n=r.login||"",o=r.nsf||"",i=r.email||"",a=r.maxRecords||"",-1!=(c=l(t))?(u[c].user=r.user||u[c].user,u[c].login=r.login||u[c].login,u[c].nsf=r.nsf||u[c].nsf,u[c].email=r.email||u[c].email,u[c].maxRecords=r.maxRecords||u[c].maxRecords):u.push({ws:t,user:s,login:n,nsf:o,email:i,maxRecords:a}),c=function(t){u.forEach(function(e){e.ws.readyState==x.OPEN&&e.ws.send(JSON.stringify(t))})},s=u.reduce(function(e,t){return e.push({user:t.user,nsf:t.nsf,email:t.email,maxRecords:a}),e},[]),c({type:"alive",users:s,numOfRecords:u.length});case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function c(){return(c=r(E().mark(function e(t){return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.forEach(function(){var t=r(E().mark(function e(t){return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t.ws,{maxRecords:t.maxRecords});case 2:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(e){return e.replace(/<b>/g,"**").replace(/<\/b>/g,"**").replace(/<i>/g,"*").replace(/<\/i>/g,"*").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}var t=require("mongodb"),o=t.MongoClient,h=(t.ObjectId,new o("mongodb+srv://doadmin:i04J9b2t1X853Cuy@db-mongodb-pml30-75e49c39.mongo.ondigitalocean.com/admin?tls=true&authSource=admin")),d="CGSGVG4";function m(){return(m=r(E().mark(function e(t,r,n){var o,i;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new FormData).append("todo","Login"),o.append("src","CGSG Messenger"),o.append("login",r),o.append("password",n),e.next=7,fetch("https://cgsg.pml30.ru/auth/get.php",{method:"POST",headers:{Accept:"application/json"},body:o});case 7:return o=e.sent,e.next=10,o.json();case 10:"ok"==(i=e.sent).result&&(t.send(JSON.stringify({result:"ok",type:"login",Name:i.user.Name,Login:i.user.Login,Surname:i.user.Surname,Middlename:i.user.Middlename,NSF:i.user.NSF,EMail:i.user.EMail})),f(t,{user:i.user.Surname+" "+i.user.Name,login:i.user.Login,nsf:i.user.NSF,email:i.user.EMail}));case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function g(){return(g=r(E().mark(function e(t,r){var n,o,i;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.connect();case 2:return n=e.sent,n=n.db(d),n=n.collection("messages"),e.prev=5,e.next=8,n.find({}).toArray();case 8:if(o=e.sent,"msg"==r.type)return a(o={no:o.length,timestamp:r.timestamp,nsf:p(r.nsf)},"nsf",p(r.nsf)),a(o,"user",p(r.user)),a(o,"email",p(r.email)),a(o,"msg",p(r.msg)),i=o,e.next=13,n.insertOne(i);e.next=16;break;case 13:return t.send(JSON.stringify({type:"newMsg",msgNo:i.no})),e.next=16,function(){return c.apply(this,arguments)}({});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),console.error(e.t0);case 21:case"end":return e.stop()}},e,null,[[5,18]])}))).apply(this,arguments)}function y(){return v.apply(this,arguments)}function v(){return(v=r(E().mark(function e(t,r){var n,o,i,a,c;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.connect();case 2:return n=e.sent,n=n.db(d),n=n.collection("messages"),e.prev=5,e.next=8,n.countDocuments();case 8:return e.t0=e.sent,o=e.t0-5,i=5,a={},c=-1,r.maxRecords?i=Number(r.maxRecords):-1!=(c=l(t))&&(i=Number(u[c].maxRecords)),"number"!=typeof i||i<0?i=5:200<i&&(i=200),r.filter&&"new"==r.filter&&r.no&&(a={no:{$gt:r.no-1}}),e.next=19,n.find(a).sort({timestamp:-1}).limit(i).toArray();case 19:c=e.sent,t.send(JSON.stringify({type:"msgs",msgs:c,numOfRecords:o})),f(t,{type:"live"}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(5),console.error(e.t1);case 27:case"end":return e.stop()}},e,null,[[5,24]])}))).apply(this,arguments)}var t=require("express"),o=t(),t=(o.use(t.static(__dirname+"/./")),require("morgan")),t=(o.use(t("combined")),require("http")),w=process.env.PORT||3001,t=t.createServer(o),x=(t.listen(w,function(){n("Server is running on http://".concat(w))}),require("ws"));new x.Server({server:t}).on("connection",function(r){n("Client connected"),f(r,{}),r.on("message",function(e){r.send(JSON.stringify({type:"info",msg:"Server received nessage"}));try{var t=JSON.parse(e);switch("inform"!=t.type&&(r.send(JSON.stringify({type:"getInfo"})),f(r,t)),t.type){case"info":n("APP: info: "+t.msg);break;case"login":!function(){m.apply(this,arguments)}(r,t.login,t.pwd);break;case"msg":!function(){g.apply(this,arguments)}(r,t);break;case"inform":f(r,t);break;case"getAllMsg":y(r,t);break;default:n("Unknown message received: ...")}}catch(e){n(e)}}),r.send("Server is connected, hello!")}),o.get("/cgsg",function(e,t){t.send("CGSG forever!!!")})}();
