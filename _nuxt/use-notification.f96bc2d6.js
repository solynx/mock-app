import{i as R,aH as H,cC as de,be as pe,p as I,M as P,O as L,P as _,j,R as K,cD as ue,aR as M,aM as he,q as s,a2 as me,I as ge,aO as ve,ab as T,cE as be,r as B,ag as xe,aS as ye,b8 as we,Q as Ce,S as ze,bg as A,X as Se,V as Re,$ as $e,a0 as Ae,Z as Ie,Y as Oe,af as je,aK as Be,T as He,B as Le,C as m,x as l,F as p,G as S,aj as N,cB as Te,bh as Ee,aq as Fe,b7 as Pe,bI as ke}from"./entry.7740f766.js";function Me(e,o="default",i=[]){const r=e.$slots[o];return r===void 0?i:r()}function at(){const e=R(de,null);return e===null&&H("use-dialog","No outer <n-dialog-provider /> founded."),e}const Ne={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},_e=()=>Ne,Ke={name:"Space",self:_e},Ge=Ke;let F;const qe=()=>{if(!pe)return!0;if(F===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const o=e.scrollHeight===1;return document.body.removeChild(e),F=o}return F},Ve=Object.assign(Object.assign({},L.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),st=I({name:"Space",props:Ve,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:i}=P(e),n=L("Space","-space",void 0,Ge,e,o),r=_("Space",i,o);return{useGap:qe(),rtlEnabled:r,mergedClsPrefix:o,margin:j(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[K("gap",a)]:u}}=n.value,{row:b,col:h}=ue(u);return{horizontal:M(h),vertical:M(b)}})}},render(){const{vertical:e,align:o,inline:i,justify:n,itemStyle:r,margin:a,wrap:u,mergedClsPrefix:b,rtlEnabled:h,useGap:g,wrapItem:C,internalUseGap:z}=this,y=he(Me(this));if(!y.length)return null;const c=`${a.horizontal}px`,t=`${a.horizontal/2}px`,f=`${a.vertical}px`,d=`${a.vertical/2}px`,v=y.length-1,w=n.startsWith("space-");return s("div",{role:"none",class:[`${b}-space`,h&&`${b}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!u||e?"nowrap":"wrap",marginTop:g||e?"":`-${d}`,marginBottom:g||e?"":`-${d}`,alignItems:o,gap:g?`${a.vertical}px ${a.horizontal}px`:""}},!C&&(g||z)?y:y.map(($,x)=>s("div",{role:"none",style:[r,{maxWidth:"100%"},g?"":e?{marginBottom:x!==v?f:""}:h?{marginLeft:w?n==="space-between"&&x===v?"":t:x!==v?c:"",marginRight:w?n==="space-between"&&x===0?"":t:"",paddingTop:d,paddingBottom:d}:{marginRight:w?n==="space-between"&&x===v?"":t:x!==v?c:"",marginLeft:w?n==="space-between"&&x===0?"":t:"",paddingTop:d,paddingBottom:d}]},$)))}}),We={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},De=e=>{const{textColor2:o,successColor:i,infoColor:n,warningColor:r,errorColor:a,popoverColor:u,closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:g,closeColorHover:C,closeColorPressed:z,textColor1:y,textColor3:c,borderRadius:t,fontWeightStrong:f,boxShadow2:d,lineHeight:v,fontSize:w}=e;return Object.assign(Object.assign({},We),{borderRadius:t,lineHeight:v,fontSize:w,headerFontWeight:f,iconColor:o,iconColorSuccess:i,iconColorInfo:n,iconColorWarning:r,iconColorError:a,color:u,textColor:o,closeIconColor:b,closeIconColorHover:h,closeIconColorPressed:g,closeBorderRadius:t,closeColorHover:C,closeColorPressed:z,headerTextColor:y,descriptionTextColor:c,actionTextColor:o,boxShadow:d})},Xe=me({name:"Notification",common:ge,peers:{Scrollbar:ve},self:De}),Ue=Xe,lt=T("n-loading-bar"),Qe=T("n-loading-bar-api");function ct(){const e=R(Qe,null);return e===null&&H("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}function ft(){const e=R(be,null);return e===null&&H("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const E=T("n-notification-provider"),Je=I({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:o,wipTransitionCountRef:i}=R(E),n=B(null);return xe(()=>{var r,a;i.value>0?(r=n==null?void 0:n.value)===null||r===void 0||r.classList.add("transitioning"):(a=n==null?void 0:n.value)===null||a===void 0||a.classList.remove("transitioning")}),{selfRef:n,mergedTheme:e,mergedClsPrefix:o,transitioning:i}},render(){const{$slots:e,scrollable:o,mergedClsPrefix:i,mergedTheme:n,placement:r}=this;return s("div",{ref:"selfRef",class:[`${i}-notification-container`,o&&`${i}-notification-container--scrollable`,`${i}-notification-container--${r}`]},o?s(ye,{theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},e):e)}}),Ye={info:()=>s($e,null),success:()=>s(Ae,null),warning:()=>s(Ie,null),error:()=>s(Oe,null),default:()=>null},k={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},Ze=we(k),et=I({name:"Notification",props:k,setup(e){const{mergedClsPrefixRef:o,mergedThemeRef:i,props:n}=R(E),{inlineThemeDisabled:r,mergedRtlRef:a}=P(),u=_("Notification",a,o),b=j(()=>{const{type:g}=e,{self:{color:C,textColor:z,closeIconColor:y,closeIconColorHover:c,closeIconColorPressed:t,headerTextColor:f,descriptionTextColor:d,actionTextColor:v,borderRadius:w,headerFontWeight:$,boxShadow:x,lineHeight:q,fontSize:V,closeMargin:W,closeSize:D,width:X,padding:U,closeIconSize:Q,closeBorderRadius:J,closeColorHover:Y,closeColorPressed:Z,titleFontSize:ee,metaFontSize:te,descriptionFontSize:oe,[K("iconColor",g)]:ne},common:{cubicBezierEaseOut:ie,cubicBezierEaseIn:re,cubicBezierEaseInOut:ae}}=i.value,{left:se,right:le,top:ce,bottom:fe}=Ce(U);return{"--n-color":C,"--n-font-size":V,"--n-text-color":z,"--n-description-text-color":d,"--n-action-text-color":v,"--n-title-text-color":f,"--n-title-font-weight":$,"--n-bezier":ae,"--n-bezier-ease-out":ie,"--n-bezier-ease-in":re,"--n-border-radius":w,"--n-box-shadow":x,"--n-close-border-radius":J,"--n-close-color-hover":Y,"--n-close-color-pressed":Z,"--n-close-icon-color":y,"--n-close-icon-color-hover":c,"--n-close-icon-color-pressed":t,"--n-line-height":q,"--n-icon-color":ne,"--n-close-margin":W,"--n-close-size":D,"--n-close-icon-size":Q,"--n-width":X,"--n-padding-left":se,"--n-padding-right":le,"--n-padding-top":ce,"--n-padding-bottom":fe,"--n-title-font-size":ee,"--n-meta-font-size":te,"--n-description-font-size":oe}}),h=r?ze("notification",j(()=>e.type[0]),b,n):void 0;return{mergedClsPrefix:o,showAvatar:j(()=>e.avatar||e.type!=="default"),handleCloseClick(){e.onClose()},rtlEnabled:u,cssVars:r?void 0:b,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{class:[`${o}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},s("div",{class:[`${o}-notification`,this.rtlEnabled&&`${o}-notification--rtl`,this.themeClass,{[`${o}-notification--closable`]:this.closable,[`${o}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?s("div",{class:`${o}-notification__avatar`},this.avatar?A(this.avatar):this.type!=="default"?s(Se,{clsPrefix:o},{default:()=>Ye[this.type]()}):null):null,this.closable?s(Re,{clsPrefix:o,class:`${o}-notification__close`,onClick:this.handleCloseClick}):null,s("div",{ref:"bodyRef",class:`${o}-notification-main`},this.title?s("div",{class:`${o}-notification-main__header`},A(this.title)):null,this.description?s("div",{class:`${o}-notification-main__description`},A(this.description)):null,this.content?s("pre",{class:`${o}-notification-main__content`},A(this.content)):null,this.meta||this.action?s("div",{class:`${o}-notification-main-footer`},this.meta?s("div",{class:`${o}-notification-main-footer__meta`},A(this.meta)):null,this.action?s("div",{class:`${o}-notification-main-footer__action`},A(this.action)):null):null)))}}),tt=Object.assign(Object.assign({},k),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),ot=I({name:"NotificationEnvironment",props:Object.assign(Object.assign({},tt),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const{wipTransitionCountRef:o}=R(E),i=B(!0);let n=null;function r(){i.value=!1,n&&window.clearTimeout(n)}function a(t){o.value++,Le(()=>{t.style.height=`${t.offsetHeight}px`,t.style.maxHeight="0",t.style.transition="none",t.offsetHeight,t.style.transition="",t.style.maxHeight=t.style.height})}function u(t){o.value--,t.style.height="",t.style.maxHeight="";const{onAfterEnter:f,onAfterShow:d}=e;f&&f(),d&&d()}function b(t){o.value++,t.style.maxHeight=`${t.offsetHeight}px`,t.style.height=`${t.offsetHeight}px`,t.offsetHeight}function h(t){const{onHide:f}=e;f&&f(),t.style.maxHeight="0",t.offsetHeight}function g(){o.value--;const{onAfterLeave:t,onInternalAfterLeave:f,onAfterHide:d,internalKey:v}=e;t&&t(),f(v),d&&d()}function C(){const{duration:t}=e;t&&(n=window.setTimeout(r,t))}function z(t){t.currentTarget===t.target&&n!==null&&(window.clearTimeout(n),n=null)}function y(t){t.currentTarget===t.target&&C()}function c(){const{onClose:t}=e;t?Promise.resolve(t()).then(f=>{f!==!1&&r()}):r()}return je(()=>{e.duration&&(n=window.setTimeout(r,e.duration))}),{show:i,hide:r,handleClose:c,handleAfterLeave:g,handleLeave:h,handleBeforeLeave:b,handleAfterEnter:u,handleBeforeEnter:a,handleMouseenter:z,handleMouseleave:y}},render(){return s(He,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?s(et,Object.assign({},Be(this.$props,Ze),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),nt=m([l("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[m(">",[l("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[m(">",[l("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[l("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),p("top, top-right, top-left",`
 top: 12px;
 `,[m("&.transitioning >",[l("scrollbar",[m(">",[l("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),p("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[m(">",[l("scrollbar",[m(">",[l("scrollbar-container",[l("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),l("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),p("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[l("notification-wrapper",[m("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),m("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),p("top",[l("notification-wrapper",`
 transform-origin: top center;
 `)]),p("bottom",[l("notification-wrapper",`
 transform-origin: bottom center;
 `)]),p("top-right, bottom-right",[l("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),p("top-left, bottom-left",[l("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),p("top-right",`
 right: 0;
 `,[O("top-right")]),p("top-left",`
 left: 0;
 `,[O("top-left")]),p("bottom-right",`
 right: 0;
 `,[O("bottom-right")]),p("bottom-left",`
 left: 0;
 `,[O("bottom-left")]),p("scrollable",[p("top-right",`
 top: 0;
 `),p("top-left",`
 top: 0;
 `),p("bottom-right",`
 bottom: 0;
 `),p("bottom-left",`
 bottom: 0;
 `)]),l("notification-wrapper",`
 margin-bottom: 12px;
 `,[m("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),m("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),m("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),m("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),l("notification",`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[S("avatar",[l("icon",{color:"var(--n-icon-color)"}),l("base-icon",{color:"var(--n-icon-color)"})]),p("show-avatar",[l("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),p("closable",[l("notification-main",[m("> *:first-child",{paddingRight:"20px"})]),S("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),S("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("icon","transition: color .3s var(--n-bezier);")]),l("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[l("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[S("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),S("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),S("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),S("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),S("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[m("&:first-child",{margin:0})])])])])]);function O(e){const i=e.split("-")[1]==="left"?"calc(-100%)":"calc(100%)",n="0";return l("notification-wrapper",[m("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${i}, 0);
 `),m("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(${n}, 0);
 `)])}const G=T("n-notification-api"),it=Object.assign(Object.assign({},L.props),{containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),dt=I({name:"NotificationProvider",props:it,setup(e){const{mergedClsPrefixRef:o}=P(e),i=B([]),n={},r=new Set;function a(c){const t=Pe(),f=()=>{r.add(t),n[t]&&n[t].hide()},d=ke(Object.assign(Object.assign({},c),{key:t,destroy:f,hide:f,deactivate:f})),{max:v}=e;if(v&&i.value.length-r.size>=v){let w=!1,$=0;for(const x of i.value){if(!r.has(x.key)){n[x.key]&&(x.destroy(),w=!0);break}$++}w||i.value.splice($,1)}return i.value.push(d),d}const u=["info","success","warning","error"].map(c=>t=>a(Object.assign(Object.assign({},t),{type:c})));function b(c){r.delete(c),i.value.splice(i.value.findIndex(t=>t.key===c),1)}const h=L("Notification","-notification",nt,Ue,e,o),g={create:a,info:u[0],success:u[1],warning:u[2],error:u[3],open:z,destroyAll:y},C=B(0);N(G,g),N(E,{props:e,mergedClsPrefixRef:o,mergedThemeRef:h,wipTransitionCountRef:C});function z(c){return a(c)}function y(){Object.values(i.value).forEach(c=>{c.hide()})}return Object.assign({mergedClsPrefix:o,notificationList:i,notificationRefs:n,handleAfterLeave:b},g)},render(){var e,o,i;const{placement:n}=this;return s(Fe,null,(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e),this.notificationList.length?s(Te,{to:(i=this.to)!==null&&i!==void 0?i:"body"},s(Je,{style:this.containerStyle,scrollable:this.scrollable&&n!=="top"&&n!=="bottom",placement:n},{default:()=>this.notificationList.map(r=>s(ot,Object.assign({ref:a=>{const u=r.key;a===null?delete this.notificationRefs[u]:this.notificationRefs[u]=a}},Ee(r,["destroy","hide","deactivate"]),{internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover})))})):null)}});function pt(){const e=R(G,null);return e===null&&H("use-notification","No outer `n-notification-provider` found."),e}export{dt as N,st as a,pt as b,at as c,ct as d,Qe as e,Me as g,lt as l,Ge as s,ft as u};
