(function(e){function t(t){for(var r,c,s=t[0],a=t[1],l=t[2],f=0,b=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(b.length)b.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Ninja-Reaction-Timer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f86":function(e,t,n){"use strict";n("536a")},"536a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("5af2"),i=n.n(o),c={class:"container"},s=Object(r["d"])("h1",null," Ninja Reaction Timer ",-1),a=Object(r["d"])("img",{style:{"margin-bottom":"2em"},src:i.a,width:"200"},null,-1),l={key:0,class:"instructions"},u=Object(r["d"])("p",null," Click on the box as soon as you see it ",-1);function f(e,t,n,o,i,f){var b=Object(r["f"])("Block"),d=Object(r["f"])("Result");return Object(r["e"])(),Object(r["b"])("div",c,[s,a,Object(r["d"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return f.start&&f.start.apply(f,arguments)}),disabled:i.isPlaying}," Play ",8,["disabled"]),i.isPlaying?Object(r["c"])("",!0):(Object(r["e"])(),Object(r["b"])("div",l,[u])),i.isPlaying?(Object(r["e"])(),Object(r["b"])(b,{key:1,delay:i.delay,onEnd:f.endGame},null,8,["delay","onEnd"])):Object(r["c"])("",!0),i.showResult?(Object(r["e"])(),Object(r["b"])(d,{key:2,score:i.score},null,8,["score"])):Object(r["c"])("",!0)])}var b=Object(r["d"])("h3",null," Click Me ",-1);function d(e,t,n,o,i,c){return i.showBlock?(Object(r["e"])(),Object(r["b"])("div",{key:0,class:"block",onClick:t[1]||(t[1]=function(){return c.stopTimer&&c.stopTimer.apply(c,arguments)})},[b])):Object(r["c"])("",!0)}var p={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var e=this;setInterval((function(){e.showBlock=!0,e.startTimer()}),this.delay)},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),this.$emit("end",this.reactionTime),console.log(this.reactionTime)}}};n("1f86");p.render=d;var h=p,j={class:"result"};function y(e,t,n,o,i,c){return Object(r["e"])(),Object(r["b"])("div",j,[Object(r["d"])("p",null," Reaction Time : "+Object(r["g"])(this.score)+" ms ",1),Object(r["d"])("p",null,Object(r["g"])(this.rank),1)])}var O={props:["score"],data:function(){return{rank:null}},mounted:function(){this.score<260?this.rank="Ninja Fingers":this.score<400?this.rank="Rapid Reflexes":this.rank="Snail Pace"}};n("b08b");O.render=y;var m=O,v={name:"App",components:{Block:h,Result:m},data:function(){return{isPlaying:!1,delay:null,score:0,showScore:!1,showResult:!1}},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showScore=!1,this.showResult=!1},endGame:function(e){this.score=e,this.showScore=!0,this.isPlaying=!1,this.showResult=!0}}};n("c5ce");v.render=f;var g=v;Object(r["a"])(g).mount("#app")},"5af2":function(e,t,n){e.exports=n.p+"img/ninja.c3c0ecb2.jpg"},a490:function(e,t,n){},af12:function(e,t,n){},b08b:function(e,t,n){"use strict";n("af12")},c5ce:function(e,t,n){"use strict";n("a490")}});
//# sourceMappingURL=app.5be398fe.js.map