(this.webpackJsonpmemory_css=this.webpackJsonpmemory_css||[]).push([[0],[,,function(e,t,n){e.exports={card:"GameSetting_card__1JmRV","card--inverted":"GameSetting_card--inverted__1L5Vb","card--accent":"GameSetting_card--accent__24MpF",h2Space:"GameSetting_h2Space__C-yGS","l-design-width":"GameSetting_l-design-width__3fKhP",input:"GameSetting_input__1nRK-",input__label:"GameSetting_input__label__14Mig",input__field:"GameSetting_input__field__1djPe","button-group":"GameSetting_button-group__2Oeij",icon:"GameSetting_icon__3l5Mq",hidden:"GameSetting_hidden__kdgU5",form:"GameSetting_form__2LS-s"}},,,,,,function(e,t,n){e.exports={card:"Card_card__3YReZ",faceup:"Card_faceup__3IWZH",textCenter:"Card_textCenter__1Wo6n"}},,,,function(e,t,n){e.exports={answerCard:"AnswerCard_answerCard__KHAWf",textCenter:"AnswerCard_textCenter__2L0Yt"}},,function(e,t,n){e.exports={header:"Header_header__3OWFP"}},function(e,t,n){e.exports={boardContainer:"Board_boardContainer__3D6TJ"}},function(e,t,n){},function(e,t,n){e.exports={button:"Button_button__1X4LN"}},,,,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=(n(22),n(5)),s=n(6),l=n(14),d=n.n(l),u=n(1);var h=function(){return Object(u.jsx)("h1",{className:d.a.header,children:"Memory"})},j=n(30),g=n(7);function b(e){return(e+" "+e).split(" ")}var _=Object(g.b)({name:"arrayMatching",initialState:{stringSetting:"",cardStringArray:"",arrayDetail:"",matchingArray:[],completed:0,answer:""},reducers:{Match:function(e,t){e.matchingArray.push(t.payload),2===e.matchingArray.length&&(e.matchingArray[0].content===e.matchingArray[1].content?(e.arrayDetail[e.matchingArray[0].id].isMatched=!0,e.arrayDetail[e.matchingArray[1].id].isMatched=!0,e.completed+=2,e.completed===e.cardStringArray.length&&(e.answer=e.stringSetting,console.log("finish"),console.log(e.answer)),console.log("ok")):(e.arrayDetail[e.matchingArray[0].id].isMatched=!1,e.arrayDetail[e.matchingArray[1].id].isMatched=!1,console.log("removeBoth")),e.matchingArray=[])},assignNewString:function(e,t){e.stringSetting=t.payload,e.cardStringArray=b(t.payload),e.arrayDetail=function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}for(var r=[],c=0;c<e.length;c++)r.push({content:e[c],id:c,isMatched:!1});return r}(b(t.payload))}}}),f=_.actions,m=_.reducer,x=n(8),p=n.n(x);var O=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],i="".concat(p.a.card," ").concat(e.isMatched||r?p.a.faceup:""),l=e.isMatched||r?e.text:"",d=Object(o.b)();return e.FreezeCounter>=2&&setTimeout((function(){e.onResetFreezeCounterHandler(),c(!1),console.log("readytorest")}),2e3),Object(u.jsx)("div",{className:i,onClick:function(){console.log("".concat(e.FreezeCounter,"before click")),e.isMatched||r||e.FreezeCounter>1||(e.onFreezeCounterHandler(),c(!0),d(f.Match({content:e.text,id:e.id})))},children:Object(u.jsx)(j.a,{in:e.isMatched||r,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0,children:function(e){return Object(u.jsx)("span",{className:p.a.textCenter,style:{opacity:"entered"===e?1:0},children:l})}})})},y=n(15),C=n.n(y);var v=function(e){return Object(u.jsx)("div",{className:C.a.boardContainer,children:e.children})},S=n(12),w=n.n(S);var M=function(e){return Object(u.jsx)("div",{className:w.a.answerCard,children:Object(u.jsx)("span",{className:w.a.textCenter,children:e.answer})})},N=n(2),A=n.n(N);n(16);var F=n(17),G=n.n(F);var k=function(e){return Object(u.jsx)("button",{className:G.a.button,type:e.type,onClick:function(){e.onClick()},children:e.children})};var z=function(e){var t=Object(a.useRef)(),n=Object(o.b)();return Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)("form",{className:"".concat(A.a.form),children:[Object(u.jsx)("article",{className:"".concat(A.a["l-design-width"]),children:Object(u.jsxs)("div",{className:"".concat(A.a.card," ").concat(A.a["card--accent"]),children:[Object(u.jsxs)("h2",{className:"".concat(A.a.h2Space),children:[Object(u.jsx)("svg",{className:"".concat(A.a.icon),"aria-hidden":"true",children:Object(u.jsx)("use",{xlinkHref:"#icon-coffee",href:"#icon-coffee"})}),"Caf\xe9 con leche"]}),Object(u.jsxs)("label",{className:"".concat(A.a.input),children:[Object(u.jsx)("input",{className:"".concat(A.a.input__field),type:"text",placeholder:" ",ref:t}),Object(u.jsx)("span",{className:"".concat(A.a.input__label),children:"Watermelon sugar high !!"})]}),Object(u.jsxs)("div",{className:"".concat(A.a["button-group"]),children:[Object(u.jsx)(k,{onClick:function(){""!==t.current.value&&(n(f.assignNewString(t.current.value)),e.onStartGame())},children:"Send"}),Object(u.jsx)(k,{type:"reset",onClick:function(){},children:"Reset"})]})]})}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"".concat(A.a.hidden),children:Object(u.jsxs)("symbol",{id:"icon-coffee",viewBox:"0 0 20 20",children:[Object(u.jsx)("title",{children:"icon-coffee"}),Object(u.jsx)("path",{fill:"currentColor",d:"M15,17H14V9h3a3,3,0,0,1,3,3h0A5,5,0,0,1,15,17Zm1-6v3.83A3,3,0,0,0,18,12a1,1,0,0,0-1-1Z"}),Object(u.jsx)("rect",{fill:"currentColor",x:"1",y:"7",width:"15",height:"12",rx:"3",ry:"3"}),Object(u.jsx)("path",{fill:"var(--color-accent)",d:"M7.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,0,1-1.79.89Z"}),Object(u.jsx)("path",{fill:"var(--color-accent)",d:"M3.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"}),Object(u.jsx)("path",{fill:"var(--color-accent)",d:"M11.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"})]})})]})})};var H=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),c=n[0],i=n[1],o=function(){i(++c),console.log("FreezeCounterHandler++")};console.log(c);var l=function(){i(0),console.log("ResetFreezeCounter=0")},d=Object(a.useState)(!1),j=Object(s.a)(d,2),g=j[0],b=j[1];return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)(h,{}),!g&&Object(u.jsx)(v,{children:Object(u.jsx)(z,{onStartGame:function(){b(!0)},stringSetting:e.array.stringSetting})}),g&&Object(u.jsxs)(v,{children:[e.array.arrayDetail.map((function(e){return Object(u.jsx)(O,{text:e.content,id:e.id,isMatched:e.isMatched,onFreezeCounterHandler:o,FreezeCounter:c,onResetFreezeCounterHandler:l},e.id)})),!!e.array.answer&&Object(u.jsx)(M,{answer:e.array.answer})]})]})};var D=function(){var e=Object(o.c)((function(e){return e.array}));return Object(u.jsx)(H,{array:e})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},Z=Object(g.a)({reducer:{array:m}});i.a.render(Object(u.jsx)(o.a,{store:Z,children:Object(u.jsx)(D,{})}),document.getElementById("root")),R()}],[[27,1,2]]]);
//# sourceMappingURL=main.7e711f50.chunk.js.map