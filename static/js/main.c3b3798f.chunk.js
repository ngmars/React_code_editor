(this["webpackJsonpreact-code-editor"]=this["webpackJsonpreact-code-editor"]||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(25),r=n.n(a),s=(n(100),n(21)),o=n(14),i=n(29),l=n(65),d=(n(105),n(106),n(107),n(108),n(73),n(72),n(7));function u(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(null===e||void 0===e?void 0:e.html),o=Object(i.a)(s,2),l=o[0],u=o[1],j=Object(c.useState)(null===e||void 0===e?void 0:e.css),b=Object(i.a)(j,2),S=b[0],C=b[1],O=Object(c.useState)(null===e||void 0===e?void 0:e.js),p=Object(i.a)(O,2),v=p[0],h=p[1],E=Object(c.useRef)(null);Object(c.useEffect)((function(){u(e.html),C(e.css),h(e.js)}),[e]),Object(c.useEffect)((function(){!0===a&&_()}),[l,S,v]);var _=function(){var e,t=null===E||void 0===E||null===(e=E.current)||void 0===e?void 0:e.contentDocument,n='\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <meta http-equiv="X-UA-Compatible" content="ie=edge">\n          <title>Document</title>\n          \n          <style>\n            '.concat(S,"\n          </style>\n        </head>\n        <body>\n          ").concat(l,"\n          <script>\n            ").concat(v,"\n          <\/script>\n        </body>\n        </html>\n      ");null===t||void 0===t||t.open(),null===t||void 0===t||t.write(n),null===t||void 0===t||t.close()};return Object(d.jsx)("iframe",{title:"result",onLoad:function(){r(!0)},className:"iframe",id:"CodePresenter",ref:E})}var j={ADD_CODE_REQUEST:"ADD_CODE_REQUEST",ADD_HTML_SUCCESS:"ADD_HTML_SUCCESS",ADD_CSS_SUCCESS:"ADD_CSS_SUCCESS",ADD_JS_SUCCESS:"ADD_JS_SUCCESS",GET_CODE_REQUEST:"GET_CODE_REQUEST",GET_CODE_SUCCESS:"GET_CODE_SUCCESS",GET_CODE_ERROR:"GET_CODE_ERROR",changeSyntax:function(e,t){return{type:j.ADD_CODE_REQUEST,payload:{syntaxType:e,code:t}}},getCode:function(e){return{type:j.GET_CODE_REQUEST,payload:{link:e}}}},b=j,S=b.changeSyntax;function C(e){console.log(e);var t=Object(s.b)(),n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],j=a[1],b=Object(c.useState)(""),C=Object(i.a)(b,2),O=C[0],p=C[1],v=Object(c.useState)(""),h=Object(i.a)(v,2),E=h[0],_=h[1],x=Object(s.c)((function(e){var t;return null===e||void 0===e||null===(t=e.changeSyntax)||void 0===t?void 0:t.syntaxType})),f=Object(s.c)((function(e){var t;return null===e||void 0===e||null===(t=e.addCode)||void 0===t?void 0:t.gotHtmlCode})),m=Object(s.c)((function(e){var t;return null===e||void 0===e||null===(t=e.addCode)||void 0===t?void 0:t.gotCssCode})),y=Object(s.c)((function(e){var t;return null===e||void 0===e||null===(t=e.addCode)||void 0===t?void 0:t.gotJsCode}));Object(c.useEffect)((function(){null!=f&&j(f),null!=m&&p(m),null!=y&&_(y)}),[f,m,y]);var g,T={theme:"material",lineNumbers:!0,scrollbarStyle:null,lineWrapping:!0};return x&&"html"==x?g=Object(d.jsxs)("div",{className:"code-editor javascript-code",children:[Object(d.jsxs)("div",{className:"editor-header",children:["Index.",x]}),Object(d.jsx)(l.Controlled,{value:r,options:Object(o.a)({mode:"htmlmixed"},T),onBeforeChange:function(e,n,c){j(c),t(S("html",c))}})]}):"css"==x?g=Object(d.jsxs)("div",{className:"code-editor css-code",children:[Object(d.jsxs)("div",{className:"editor-header",children:["Index.",x]}),Object(d.jsx)(l.Controlled,{value:O,options:Object(o.a)({mode:"css"},T),onBeforeChange:function(e,n,c){p(c),t(S("css",c))}})]}):"js"==x&&(g=Object(d.jsxs)("div",{className:"code-editor javascript-code",children:[Object(d.jsxs)("div",{className:"editor-header",children:["Index.",x]}),Object(d.jsx)(l.Controlled,{value:E,options:Object(o.a)({mode:"javascript"},T),onBeforeChange:function(e,n,c){_(c),t(S("js",c))}})]})),Object(d.jsxs)("div",{className:"editor",children:[Object(d.jsx)("section",{className:"playground",children:g}),Object(d.jsx)("section",{className:"result",children:Object(d.jsx)(u,{html:r,css:O,js:E})})]})}var O=n(134),p=n(136),v=n(138),h=n(135),E={CHANGE_SYNTAX_REQUEST:"CHANGE_SYNTAX_REQUEST",CHANGE_SYNTAX_SUCCESS:"CHANGE_SYNTAX_SUCCESS",changeSyntax:function(e){return{type:E.CHANGE_SYNTAX_REQUEST,payload:{syntaxType:e}}}},_=E,x={SHARE_LINK_REQUEST:"SHARE_LINK_REQUEST",SHARE_LINK_SUCCESS:"SHARE_LINK_SUCCESS",SHARE_LINK_ERROR:"SHARE_LINK_ERROR",shareLink:function(e){return{type:x.SHARE_LINK_REQUEST,payload:{code:e}}}},f=x,m=n(70),y=n.p+"static/media/html.767bf80c.svg",g=n.p+"static/media/css3.c8c2aafe.svg",T=n.p+"static/media/js.b8e36063.svg",D={url:"https://icy-morning-bd31.majorshah19.workers.dev/",devToken:"iwDI22QNy7xCHU16l2o8NCTTzApF1T5T",wlen:42},A=_.changeSyntax,R=f.shareLink,w=O.a.Sider;function k(){var e=Object(s.b)();console.log("checking: ",window.location.href.substring(0,21));var t,n=Object(s.c)((function(e){var t;return null===e||void 0===e||null===(t=e.addCode)||void 0===t?void 0:t.htmlCode})),a=Object(s.c)((function(e){var t;return null===e||void 0===e||null===(t=e.addCode)||void 0===t?void 0:t.cssCode})),r=Object(s.c)((function(e){var t;return null===e||void 0===e||null===(t=e.addCode)||void 0===t?void 0:t.jsCode})),o=Object(c.useState)(!0),l=Object(i.a)(o,2),u=(l[0],l[1],Object(c.useState)(!1)),j=Object(i.a)(u,2),b=j[0],S=j[1],C=Object(s.c)((function(e){var t;return null===e||void 0===e||null===(t=e.shareableLink)||void 0===t?void 0:t.successLink})),O=Object(s.c)((function(e){var t;return null===e||void 0===e||null===(t=e.shareableLink)||void 0===t?void 0:t.loading}));return t=0==O?Object(d.jsx)("a",{href:window.location.href.substring(0,D.wlen)+C,children:Object(d.jsx)("div",{children:window.location.href.substring(0,22)+C})}):Object(d.jsx)(m.a,{style:{fontSize:24},spin:!0}),Object(d.jsxs)(w,{collapsed:!0,children:[Object(d.jsx)("div",{className:"logo"}),Object(d.jsxs)(p.a,{onClick:function(t){var n;1==(n=t.key)?e(A("html")):2==n?e(A("css")):3==n?e(A("js")):console.log("NOT A VALID CLICK")},theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[Object(d.jsx)(p.a.Item,{},"4"),Object(d.jsx)(p.a.Item,{icon:Object(d.jsx)("img",{src:y,style:{color:"gray"}}),children:"Index.html"},"1"),Object(d.jsx)(p.a.Item,{icon:Object(d.jsx)("img",{src:g,style:{color:"gray"}}),children:"Index.css"},"2"),Object(d.jsx)(p.a.Item,{icon:Object(d.jsx)("img",{src:T,style:{color:"gray"}}),children:"Index.js"},"3")]}),Object(d.jsx)(v.a,{placement:"right",title:"Your Shareable link!",trigger:"click",visible:b,onVisibleChange:function(){S(!b)},content:Object(d.jsxs)(d.Fragment,{children:[t,Object(d.jsx)("br",{}),Object(d.jsx)("a",{onClick:function(){navigator.clipboard.writeText("heh"),S(!1)},children:"Copy"})]}),children:Object(d.jsx)(h.a,{type:"primary",onClick:function(){e(R({htmlCode:n,cssCode:a,jsCode:r}))},style:{marginTop:"5vh",marginLeft:"5%"},children:"Share"})})]})}var N=n(137),U=O.a.Content,L=b.getCode;function H(){var e=Object(s.b)(),t=window.location.href.slice(D.wlen);return console.log(t),0==t.length?console.log(t):e(L(t)),Object(d.jsxs)(O.a,{style:{minHeight:"100vh"},children:[Object(d.jsx)(k,{}),Object(d.jsx)(U,{style:{margin:"0 0px"},children:Object(d.jsx)(N.a,{children:Object(d.jsx)(C,{})})})]})}var I=n(92),G=n(40),Q=n(90),K=n(93),M={loading:null,syntaxType:"html"};var Y={loading:null,codeLoad:null,htmlCode:null,cssCode:null,jsCode:null,gotHtmlCode:null,gotCssCode:null,gotJsCode:null};var J={loading:null,successLink:null,errorMessage:null};var X=Object(G.b)({addCode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.ADD_CODE_REQUEST:return Object(o.a)({loading:!0},e);case b.ADD_HTML_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,htmlCode:t.htmlCode});case b.ADD_CSS_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,cssCode:t.cssCode});case b.ADD_JS_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,jsCode:t.jsCode});case t.GET_CODE_REQUEST:return Object(o.a)(Object(o.a)({},e),{},{codeLoad:!0});case b.GET_CODE_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{codeLoad:!1,gotJsCode:t.jsCode,gotHtmlCode:t.htmlCode,gotCssCode:t.cssCode});default:return e}},changeSyntax:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.CHANGE_SYNTAX_REQUEST:return Object(o.a)({loading:!0},e);case _.CHANGE_SYNTAX_SUCCESS:return{loading:!1,syntaxType:t.syntaxType};default:return e}},shareableLink:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SHARE_LINK_REQUEST:return Object(o.a)({loading:!0},e);case f.SHARE_LINK_SUCCESS:return{loading:!1,successLink:t.successLink};case f.SHARE_LINK_ERROR:return{loading:!1,errorMessage:t.errorMessage};default:return e}}}),B=n(11),F=n.n(B),z=n(12),P=F.a.mark(W),V=F.a.mark(q);function W(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)("CHANGE_SYNTAX_REQUEST",F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,e.next=3,Object(z.d)({type:_.CHANGE_SYNTAX_SUCCESS,syntaxType:n.syntaxType});case 3:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),P)}function q(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(W)]);case 2:case"end":return e.stop()}}),V)}var Z=n(62),$=n.n(Z),ee=F.a.mark(ae),te=F.a.mark(re),ne=F.a.mark(se);function ce(e){var t=D.url+"?https://pastebin.com/raw/"+e.link;return $.a.get(t).then((function(e){return{data:e.data}})).catch((function(e){return{errorMessage:e}}))}function ae(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)("GET_CODE_REQUEST",F.a.mark((function e(t){var n,c,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,console.log("This is my payload: ",n),e.next=4,Object(z.b)(ce,n);case 4:if(c=e.sent,a=c.data,r=c.errorMessage){e.next=12;break}return e.next=10,Object(z.d)({type:b.GET_CODE_SUCCESS,htmlCode:a.htmlCode,cssCode:a.cssCode,jsCode:a.jsCode});case 10:e.next=14;break;case 12:return e.next=14,Object(z.d)({type:b.GET_CODE_ERROR,errorMessage:r});case 14:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),ee)}function re(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)("ADD_CODE_REQUEST",F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("html"!=(n=t.payload).syntaxType){e.next=6;break}return e.next=4,Object(z.d)({type:b.ADD_HTML_SUCCESS,syntaxType:n.syntaxType,htmlCode:n.code});case 4:e.next=14;break;case 6:if("css"!=n.syntaxType){e.next=11;break}return e.next=9,Object(z.d)({type:b.ADD_CSS_SUCCESS,syntaxType:n.syntaxType,cssCode:n.code});case 9:e.next=14;break;case 11:if("js"!=n.syntaxType){e.next=14;break}return e.next=14,Object(z.d)({type:b.ADD_JS_SUCCESS,syntaxType:n.syntaxType,jsCode:n.code});case 14:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),te)}function se(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(re),Object(z.c)(ae)]);case 2:case"end":return e.stop()}}),ne)}var oe=F.a.mark(de),ie=F.a.mark(ue);function le(e){var t=JSON.stringify(e.code),n=new FormData;n.set("api_dev_key",D.devToken),n.set("api_paste_code",t),n.set("api_paste_private","0"),n.set("api_paste_name","test.json"),n.set("api_paste_expire_date","1W"),n.set("api_paste_format","json"),n.set("api_option","paste");var c={method:"post",url:D.url+"?https://pastebin.com/api/api_post.php",headers:{Origin:"Access-Control-Allow-Origin"},data:n};return $()(c).then((function(e){var t;return console.log(e.data.slice(D.wlen)),{successLink:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.slice(D.wlen)}})).catch((function(e){return{errorMessage:e}}))}function de(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)("SHARE_LINK_REQUEST",F.a.mark((function e(t){var n,c,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,console.log("This is my payload: ",n),e.next=4,Object(z.b)(le,n);case 4:if(c=e.sent,a=c.successLink,r=c.errorMessage){e.next=12;break}return e.next=10,Object(z.d)({type:f.SHARE_LINK_SUCCESS,successLink:a});case 10:e.next=14;break;case 12:return e.next=14,Object(z.d)({type:f.SHARE_LINK_ERROR,errorMessage:r});case 14:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),oe)}function ue(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.c)(de)]);case 2:case"end":return e.stop()}}),ie)}var je=F.a.mark(be);function be(e){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([se(),q(),ue()]);case 2:case"end":return e.stop()}}),je)}var Se,Ce=Object(K.a)(),Oe=[Q.a,Ce],pe=Object(G.d)(X,(Se=Oe,G.a.apply(void 0,Object(I.a)(Se))));Ce.run(be,null);var ve=function(){return Object(d.jsx)(s.a,{store:pe,children:Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(H,{})})})};n(129);r.a.render(Object(d.jsx)(ve,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.c3b3798f.chunk.js.map