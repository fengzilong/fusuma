(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{357:function(e,t,n){var r=n(358);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(50)(r,a);r.locals&&(e.exports=r.locals)},358:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t),n.d(t,"SidebarComponent",function(){return d});var r=n(6),a=n.n(r),o=n(348),i=n(356),c=n.n(i),s=n(347),l=n(131),u={sidebar:{minWidth:150,zIndex:1001},overlay:{backgroundColor:"rgba(0, 0, 0, .5)",zIndex:1e3}},p="https://slide.hiroppy.me",f=["twitter"],h=function(e){return"".concat(e).padStart(2,"0")},m=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"sidebar-social"},Array.isArray(f)&&f.map(function(e){return"twitter"===e?a.a.createElement("a",{key:"twitter",href:"https://twitter.com/intent/tweet?text=".concat("Fusuma"," ").concat(p)},a.a.createElement(s.f,null)):"hatena"===e?a.a.createElement("a",{key:"hatena",href:"http://b.hatena.ne.jp/entry/".concat(p),className:"fa fa-hatena"}):void 0})),a.a.createElement("div",{className:"sidebar-control"},a.a.createElement(l.b,{onClick:function(){return e.goTo(0)}}),a.a.createElement("span",null,"".concat(h(e.slideInfo.index+1)," / ").concat(h(e.slideInfo.total))),a.a.createElement(l.d,{onClick:function(){return e.goTo(e.slideInfo.total-1)}})),a.a.createElement("div",null,a.a.createElement(l.c,{onClick:function(){c.a.enabled&&c.a.toggle()}}),a.a.createElement(l.a,{onClick:function(){return e.runPresentationMode()},style:{width:18,height:18}}),a.a.createElement("a",{href:"https://github.com/hiroppy/fusuma"},a.a.createElement(s.a,{style:{width:18,height:18,marginTop:8}}))),a.a.createElement("div",{className:"sidebar-contents"},e.contents.map(function(e,t){return a.a.createElement("a",{href:"#slide=".concat(e.index),key:t},"- ",e.title)})))},d=function(e){return a.a.createElement(o.a,{sidebar:m(e),shadow:!1,open:e.opened,styles:u,sidebarClassName:"sidebar",onSetOpen:e.onSetOpen},""," ")}},362:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),o=n(347);function i(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.receiverQuery="?presenter=view",this.apiType="function"==typeof window.PresentationRequest?"presentation":"localStorage",this.windowId=null}var t,n,r;return t=e,(n=[{key:"openView",value:function(){var e=this;return new Promise(function(t,n){"presentation"===e.apiType?(e.presentationRequest=new PresentationRequest([e.receiverQuery]),navigator.presentation.defaultRequest=e.presentationRequest,e.presentationRequest.addEventListener("connectionavailable",function(n){e.presentationConnection=n.connection,t(n.connection.id)}),e.presentationRequest.start().catch(function(e){return n(e)})):(e.windowId=window.open(e.receiverQuery,"_blank","width=800,height=600"),t())})}},{key:"changePage",value:function(e){var t=JSON.stringify({date:Date.now(),page:e});"presentation"===this.apiType&&this.presentationConnection&&this.presentationConnection.send(t),"localStorage"===this.apiType&&window.localStorage.setItem("page",t)}},{key:"reconnect",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("presentation"!==this.apiType){e.next=2;break}return e.abrupt("return",this.presentationRequest.reconnect(t));case 2:return e.abrupt("return",Promise.resolve());case 3:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function c(e){i(o,r,a,c,s,"next",e)}function s(e){i(o,r,a,c,s,"throw",e)}c(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"terminate",value:function(){"presentation"===this.apiType&&this.presentationConnection?(this.presentationConnection.terminate(),this.presentationConnection.close(),this.presentationConnection=null):this.windowId&&(this.windowId.close(),this.windowId=null)}}])&&c(t.prototype,n),r&&c(t,r),e}();n(93),n(357);function l(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?v(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return E});var g=function(e){function t(e){var n;return p(this,t),b(v(n=m(this,d(t).call(this,e))),"changeTimerState",function(e){n.setState({isStop:e})}),b(v(n),"start",function(){n.timerId=setInterval(function(){return n.update()},1e3),n.changeTimerState(!1)}),b(v(n),"stop",function(){clearInterval(n.timerId),n.changeTimerState(!0)}),b(v(n),"reset",function(){n.stop(),n.current=0,n.setState({currentTimeStr:"00:00:00"})}),b(v(n),"update",function(){n.current+=1e3;parseInt(n.current%1e3/100);var e=Math.floor(n.current/1e3%60).toString().padStart(2,"0"),t=Math.floor(n.current/6e4%60).toString().padStart(2,"0"),r=Math.floor(n.current/36e5%24).toString().padStart(2,"0");n.setState({currentTimeStr:"".concat(r,":").concat(t,":").concat(e)})}),n.state={isStop:!0,currentTimeStr:"00:00:00"},n.current=0,n.timerId=null,n.presentationController=new s,n}return y(t,a.a.PureComponent),h(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"host-timer"},a.a.createElement(o.c,{onClick:this.reset}),this.state.isStop?a.a.createElement(o.b,{onClick:this.start}):a.a.createElement(o.d,{onClick:this.stop}),a.a.createElement("span",null,this.state.currentTimeStr))}}]),t}(),E=function(e){function t(e){var n;return p(this,t),b(v(n=m(this,d(t).call(this,e))),"terminate",function(){try{n.props.terminate(),n.presentationController&&n.presentationController.terminate(),n.presentationController=null}catch(e){console.error(e)}}),b(v(n),"changeCurrentSlide",function(e){n.setState({currentSlide:e}),n.presentationController.changePage(e)}),n.slides=e.slides,n.slideUrl="".concat(window.location.origin,"?sidebar=false#slide="),n.presentationController=new s,n.presentationApiId=null,n.state={currentSlide:0},document.onkeyup=function(e){"ArrowLeft"===e.key?n.changeCurrentSlide(Math.max(0,n.state.currentSlide-1)):"ArrowRight"===e.key&&n.changeCurrentSlide(Math.min(n.slides.length-1,n.state.currentSlide+1))},n}return y(t,a.a.PureComponent),h(t,[{key:"componentDidMount",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.presentationController.openView();case 3:this.presentationApiId=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}},e,this,[[0,6]])}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,c,"next",e)}function c(e){l(o,r,a,i,c,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){document.onkeyup=null,this.presentationController&&this.terminate()}},{key:"render",value:function(){var e=this.state.currentSlide;return a.a.createElement("div",{className:"host-container"},a.a.createElement("div",{className:"host-left-box"},a.a.createElement("div",{className:"host-note"},this.slides&&a.a.createElement("pre",null,this.slides[e].meta.note))),a.a.createElement("div",{className:"host-right-box"},a.a.createElement("div",{className:"host-slide-layer"},a.a.createElement("h2",null,"Current"),a.a.createElement("iframe",{src:"".concat(this.slideUrl).concat(e+1),width:"100%",height:"100%"})),a.a.createElement("div",{className:"host-slide-layer"},a.a.createElement("h2",null,"Next"),a.a.createElement("iframe",{src:"".concat(this.slideUrl).concat(e+2),width:"100%",height:"100%"}))),a.a.createElement("div",{className:"host-bottom-box"},a.a.createElement(o.e,{onClick:this.terminate,className:"terminate-button"}),a.a.createElement("div",{className:"host-bottom-box-info"},a.a.createElement(g,null),a.a.createElement("span",{className:"current-slide-num"},e+1," / ",this.slides.length))))}}]),t}()}}]);