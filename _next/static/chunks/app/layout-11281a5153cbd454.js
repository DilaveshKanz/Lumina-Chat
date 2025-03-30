(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1168:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>s});var n=r(8081),o=r(6174);function s(e){let{children:t,...r}=e;return(0,n.jsx)(o.N,{...r,children:t})}},5844:(e,t,r)=>{"use strict";r.d(t,{d:()=>c});var n=r(2149);let o=0,s=new Map,a=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,5)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?a(r):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=e=>{l=i(l,e),u.forEach(e=>{e(l)})},l={toasts:[]},u=[];function c(){let[e,t]=n.useState([]);return n.useEffect(()=>(u.push(t),()=>{let e=u.indexOf(t);e>-1&&u.splice(e,1)}),[]),{toasts:e,toast:e=>{let t=(o=(o+1)%Number.MAX_VALUE).toString(),r={...e,id:t,open:!0,onOpenChange:e=>{e||d({type:"DISMISS_TOAST",toastId:t})}};return d({type:"ADD_TOAST",toast:r}),t},dismiss:e=>d({type:"DISMISS_TOAST",toastId:e}),update:e=>{d({type:"UPDATE_TOAST",toast:e})}}}},6146:()=>{},7240:(e,t,r)=>{Promise.resolve().then(r.bind(r,1168)),Promise.resolve().then(r.bind(r,8700)),Promise.resolve().then(r.t.bind(r,8536,23)),Promise.resolve().then(r.t.bind(r,6146,23))},7687:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s,v:()=>a});var n=r(6522),o=r(4483);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,n.$)(t))}function a(e){return e<1024?e+" bytes":e<1048576?(e/1024).toFixed(1)+" KB":e<0x40000000?(e/1048576).toFixed(1)+" MB":(e/0x40000000).toFixed(1)+" GB"}},8536:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}},8700:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>ea});var n=r(8081),o=r(5844),s=r(2149),a=r(4632),i=r(493),d=r(1606),l=r(5732),u=r(7260),c=r(2275),p=r(2900),f=r(4146),v=r(3801),m=r(9284),w=r(5809),x=r(357),y=r(6050),g="ToastProvider",[h,E,T]=(0,l.N)("Toast"),[b,N]=(0,u.A)("Toast",[T]),[P,R]=b(g),j=e=>{let{__scopeToast:t,label:r="Notification",duration:o=5e3,swipeDirection:a="right",swipeThreshold:i=50,children:d}=e,[l,u]=s.useState(null),[c,p]=s.useState(0),f=s.useRef(!1),v=s.useRef(!1);return r.trim()||console.error("Invalid prop `label` supplied to `".concat(g,"`. Expected non-empty `string`.")),(0,n.jsx)(h.Provider,{scope:t,children:(0,n.jsx)(P,{scope:t,label:r,duration:o,swipeDirection:a,swipeThreshold:i,toastCount:c,viewport:l,onViewportChange:u,onToastAdd:s.useCallback(()=>p(e=>e+1),[]),onToastRemove:s.useCallback(()=>p(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:v,children:d})})};j.displayName=g;var C="ToastViewport",S=["F8"],k="toast.viewportPause",A="toast.viewportResume",D=s.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:o=S,label:a="Notifications ({hotkey})",...i}=e,l=R(C,r),u=E(r),p=s.useRef(null),f=s.useRef(null),m=s.useRef(null),w=s.useRef(null),x=(0,d.s)(t,w,l.onViewportChange),y=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=l.toastCount>0;s.useEffect(()=>{let e=e=>{var t;0!==o.length&&o.every(t=>e[t]||e.code===t)&&(null===(t=w.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[o]),s.useEffect(()=>{let e=p.current,t=w.current;if(g&&e&&t){let r=()=>{if(!l.isClosePausedRef.current){let e=new CustomEvent(k);t.dispatchEvent(e),l.isClosePausedRef.current=!0}},n=()=>{if(l.isClosePausedRef.current){let e=new CustomEvent(A);t.dispatchEvent(e),l.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||n()},s=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",o),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",s),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",s),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[g,l.isClosePausedRef]);let T=s.useCallback(e=>{let{tabbingDirection:t}=e,r=u().map(e=>{let r=e.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===t?n:n.reverse()});return("forwards"===t?r.reverse():r).flat()},[u]);return s.useEffect(()=>{let e=w.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,o,s;let r=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(n=f.current)||void 0===n||n.focus();return}let i=T({tabbingDirection:a?"backwards":"forwards"}),d=i.findIndex(e=>e===r);Q(i.slice(d+1))?t.preventDefault():a?null===(o=f.current)||void 0===o||o.focus():null===(s=m.current)||void 0===s||s.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[u,T]),(0,n.jsxs)(c.lg,{ref:p,role:"region","aria-label":a.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&(0,n.jsx)(F,{ref:f,onFocusFromOutsideViewport:()=>{Q(T({tabbingDirection:"forwards"}))}}),(0,n.jsx)(h.Slot,{scope:r,children:(0,n.jsx)(v.sG.ol,{tabIndex:-1,...i,ref:x})}),g&&(0,n.jsx)(F,{ref:m,onFocusFromOutsideViewport:()=>{Q(T({tabbingDirection:"backwards"}))}})]})});D.displayName=C;var I="ToastFocusProxy",F=s.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:o,...s}=e,a=R(I,r);return(0,n.jsx)(y.s,{"aria-hidden":!0,tabIndex:0,...s,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;(null===(t=a.viewport)||void 0===t?void 0:t.contains(r))||o()}})});F.displayName=I;var L="Toast",_=s.forwardRef((e,t)=>{let{forceMount:r,open:o,defaultOpen:s,onOpenChange:a,...d}=e,[l=!0,u]=(0,w.i)({prop:o,defaultProp:s,onChange:a});return(0,n.jsx)(f.C,{present:r||l,children:(0,n.jsx)(K,{open:l,...d,ref:t,onClose:()=>u(!1),onPause:(0,m.c)(e.onPause),onResume:(0,m.c)(e.onResume),onSwipeStart:(0,i.m)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,i.m)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(r,"px"))}),onSwipeCancel:(0,i.m)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,i.m)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(r,"px")),u(!1)})})})});_.displayName=L;var[M,O]=b(L,{onClose(){}}),K=s.forwardRef((e,t)=>{let{__scopeToast:r,type:o="foreground",duration:l,open:u,onClose:p,onEscapeKeyDown:f,onPause:w,onResume:x,onSwipeStart:y,onSwipeMove:g,onSwipeCancel:E,onSwipeEnd:T,...b}=e,N=R(L,r),[P,j]=s.useState(null),C=(0,d.s)(t,e=>j(e)),S=s.useRef(null),D=s.useRef(null),I=l||N.duration,F=s.useRef(0),_=s.useRef(I),O=s.useRef(0),{onToastAdd:K,onToastRemove:G}=N,U=(0,m.c)(()=>{var e;(null==P?void 0:P.contains(document.activeElement))&&(null===(e=N.viewport)||void 0===e||e.focus()),p()}),X=s.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(O.current),F.current=new Date().getTime(),O.current=window.setTimeout(U,e))},[U]);s.useEffect(()=>{let e=N.viewport;if(e){let t=()=>{X(_.current),null==x||x()},r=()=>{let e=new Date().getTime()-F.current;_.current=_.current-e,window.clearTimeout(O.current),null==w||w()};return e.addEventListener(k,r),e.addEventListener(A,t),()=>{e.removeEventListener(k,r),e.removeEventListener(A,t)}}},[N.viewport,I,w,x,X]),s.useEffect(()=>{u&&!N.isClosePausedRef.current&&X(I)},[u,I,N.isClosePausedRef,X]),s.useEffect(()=>(K(),()=>G()),[K,G]);let B=s.useMemo(()=>P?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{var n;if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),(n=t).nodeType===n.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!n){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(P):null,[P]);return N.viewport?(0,n.jsxs)(n.Fragment,{children:[B&&(0,n.jsx)(V,{__scopeToast:r,role:"status","aria-live":"foreground"===o?"assertive":"polite","aria-atomic":!0,children:B}),(0,n.jsx)(M,{scope:r,onClose:U,children:a.createPortal((0,n.jsx)(h.ItemSlot,{scope:r,children:(0,n.jsx)(c.bL,{asChild:!0,onEscapeKeyDown:(0,i.m)(f,()=>{N.isFocusedToastEscapeKeyDownRef.current||U(),N.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,n.jsx)(v.sG.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":N.swipeDirection,...b,ref:C,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,i.m)(e.onKeyDown,e=>{"Escape"!==e.key||(null==f||f(e.nativeEvent),e.nativeEvent.defaultPrevented||(N.isFocusedToastEscapeKeyDownRef.current=!0,U()))}),onPointerDown:(0,i.m)(e.onPointerDown,e=>{0===e.button&&(S.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,i.m)(e.onPointerMove,e=>{if(!S.current)return;let t=e.clientX-S.current.x,r=e.clientY-S.current.y,n=!!D.current,o=["left","right"].includes(N.swipeDirection),s=["left","up"].includes(N.swipeDirection)?Math.min:Math.max,a=o?s(0,t):0,i=o?0:s(0,r),d="touch"===e.pointerType?10:2,l={x:a,y:i},u={originalEvent:e,delta:l};n?(D.current=l,Y("toast.swipeMove",g,u,{discrete:!1})):z(l,N.swipeDirection,d)?(D.current=l,Y("toast.swipeStart",y,u,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>d||Math.abs(r)>d)&&(S.current=null)}),onPointerUp:(0,i.m)(e.onPointerUp,e=>{let t=D.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),D.current=null,S.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};z(t,N.swipeDirection,N.swipeThreshold)?Y("toast.swipeEnd",T,n,{discrete:!0}):Y("toast.swipeCancel",E,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),N.viewport)})]}):null}),V=e=>{let{__scopeToast:t,children:r,...o}=e,a=R(L,t),[i,d]=s.useState(!1),[l,u]=s.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,m.c)(e);(0,x.N)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>d(!0)),s.useEffect(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,n.jsx)(p.Z,{asChild:!0,children:(0,n.jsx)(y.s,{...o,children:i&&(0,n.jsxs)(n.Fragment,{children:[a.label," ",r]})})})},G=s.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e;return(0,n.jsx)(v.sG.div,{...o,ref:t})});G.displayName="ToastTitle";var U=s.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e;return(0,n.jsx)(v.sG.div,{...o,ref:t})});U.displayName="ToastDescription";var X="ToastAction",B=s.forwardRef((e,t)=>{let{altText:r,...o}=e;return r.trim()?(0,n.jsx)(W,{altText:r,asChild:!0,children:(0,n.jsx)(H,{...o,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(X,"`. Expected non-empty `string`.")),null)});B.displayName=X;var q="ToastClose",H=s.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e,s=O(q,r);return(0,n.jsx)(W,{asChild:!0,children:(0,n.jsx)(v.sG.button,{type:"button",...o,ref:t,onClick:(0,i.m)(e.onClick,s.onClose)})})});H.displayName=q;var W=s.forwardRef((e,t)=>{let{__scopeToast:r,altText:o,...s}=e;return(0,n.jsx)(v.sG.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...s,ref:t})});function Y(e,t,r,n){let{discrete:o}=n,s=r.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&s.addEventListener(e,t,{once:!0}),o?(0,v.hO)(s,a):s.dispatchEvent(a)}var z=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.abs(e.x),o=Math.abs(e.y),s=n>o;return"left"===t||"right"===t?s&&n>r:!s&&o>r};function Q(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var Z=r(3484),$=r(2522),J=r(7687);let ee=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(D,{ref:t,className:(0,J.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...o})});ee.displayName=D.displayName;let et=(0,Z.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground dark:bg-gray-800 dark:border-gray-700 dark:text-white",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground dark:border-red-900 dark:bg-red-950"}},defaultVariants:{variant:"default"}}),er=s.forwardRef((e,t)=>{let{className:r,variant:o,...s}=e;return(0,n.jsx)(_,{ref:t,className:(0,J.cn)(et({variant:o}),r),...s})});er.displayName=_.displayName,s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(B,{ref:t,className:(0,J.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive dark:border-gray-700 dark:hover:bg-gray-700",r),...o})}).displayName=B.displayName;let en=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(H,{ref:t,className:(0,J.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-gray-400 dark:hover:text-white",r),"toast-close":"",...o,children:(0,n.jsx)($.A,{className:"h-4 w-4"})})});en.displayName=H.displayName;let eo=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(G,{ref:t,className:(0,J.cn)("text-sm font-semibold",r),...o})});eo.displayName=G.displayName;let es=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(U,{ref:t,className:(0,J.cn)("text-sm opacity-90",r),...o})});function ea(){let{toasts:e}=(0,o.d)();return(0,n.jsxs)(j,{children:[e.map(function(e){let{id:t,title:r,description:o,action:s,...a}=e;return(0,n.jsxs)(er,{...a,children:[(0,n.jsxs)("div",{className:"grid gap-1",children:[r&&(0,n.jsx)(eo,{children:r}),o&&(0,n.jsx)(es,{children:o})]}),s,(0,n.jsx)(en,{})]},t)}),(0,n.jsx)(ee,{})]})}es.displayName=U.displayName}},e=>{var t=t=>e(e.s=t);e.O(0,[699,979,30,497,954,358],()=>t(7240)),_N_E=e.O()}]);