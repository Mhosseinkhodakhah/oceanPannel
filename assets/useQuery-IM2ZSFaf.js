var ut=e=>{throw TypeError(e)};var Y=(e,t,r)=>t.has(e)||ut("Cannot "+r);var s=(e,t,r)=>(Y(e,t,"read from private field"),r?r.call(e):t.get(e)),f=(e,t,r)=>t.has(e)?ut("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),o=(e,t,r,i)=>(Y(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),l=(e,t,r)=>(Y(e,t,"access private method"),r);import{aR as Ct,aS as lt,aT as S,aU as Z,aV as N,aW as Ot,aX as q,aY as dt,aZ as St,a_ as Et,a$ as It,b0 as ft,b1 as gt,r as Q,aC as Qt}from"./index-CWfFKzvx.js";import{s as wt,n as xt}from"./client-DRsTmFvH.js";var g,a,V,v,U,L,x,O,W,j,k,D,_,T,B,n,H,G,J,tt,et,st,rt,it,yt,Rt,Tt=(Rt=class extends Ct{constructor(t,r){super();f(this,n);f(this,g);f(this,a);f(this,V);f(this,v);f(this,U);f(this,L);f(this,x);f(this,O);f(this,W);f(this,j);f(this,k);f(this,D);f(this,_);f(this,T);f(this,B,new Set);this.options=r,o(this,g,t),o(this,O,null),o(this,x,lt()),this.options.experimental_prefetchInRender||s(this,x).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,a).addObserver(this),pt(s(this,a),this.options)?l(this,n,H).call(this):this.updateResult(),l(this,n,et).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(s(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(s(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,n,st).call(this),l(this,n,rt).call(this),s(this,a).removeObserver(this)}setOptions(t,r){const i=this.options,d=s(this,a);if(this.options=s(this,g).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof S(this.options.enabled,s(this,a))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");l(this,n,it).call(this),s(this,a).setOptions(this.options),i._defaulted&&!Z(this.options,i)&&s(this,g).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,a),observer:this});const c=this.hasListeners();c&&bt(s(this,a),d,this.options,i)&&l(this,n,H).call(this),this.updateResult(r),c&&(s(this,a)!==d||S(this.options.enabled,s(this,a))!==S(i.enabled,s(this,a))||N(this.options.staleTime,s(this,a))!==N(i.staleTime,s(this,a)))&&l(this,n,G).call(this);const h=l(this,n,J).call(this);c&&(s(this,a)!==d||S(this.options.enabled,s(this,a))!==S(i.enabled,s(this,a))||h!==s(this,T))&&l(this,n,tt).call(this,h)}getOptimisticResult(t){const r=s(this,g).getQueryCache().build(s(this,g),t),i=this.createResult(r,t);return Ut(this,i)&&(o(this,v,i),o(this,L,this.options),o(this,U,s(this,a).state)),i}getCurrentResult(){return s(this,v)}trackResult(t,r){const i={};return Object.keys(t).forEach(d=>{Object.defineProperty(i,d,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(d),r==null||r(d),t[d])})}),i}trackProp(t){s(this,B).add(t)}getCurrentQuery(){return s(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const r=s(this,g).defaultQueryOptions(t),i=s(this,g).getQueryCache().build(s(this,g),r);return i.fetch().then(()=>this.createResult(i,r))}fetch(t){return l(this,n,H).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,v)))}createResult(t,r){var ct;const i=s(this,a),d=this.options,c=s(this,v),h=s(this,U),E=s(this,L),y=t!==i?t.state:s(this,V),{state:m}=t;let u={...m},F=!1,R;if(r._optimisticResults){const b=this.hasListeners(),P=!b&&pt(t,r),M=b&&bt(t,i,r,d);(P||M)&&(u={...u,...It(m.data,t.options)}),r._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:A,errorUpdatedAt:w,status:I}=u;if(r.select&&u.data!==void 0)if(c&&u.data===(h==null?void 0:h.data)&&r.select===s(this,W))R=s(this,j);else try{o(this,W,r.select),R=r.select(u.data),R=ft(c==null?void 0:c.data,R,r),o(this,j,R),o(this,O,null)}catch(b){o(this,O,b)}else R=u.data;if(r.placeholderData!==void 0&&R===void 0&&I==="pending"){let b;if(c!=null&&c.isPlaceholderData&&r.placeholderData===(E==null?void 0:E.placeholderData))b=c.data;else if(b=typeof r.placeholderData=="function"?r.placeholderData((ct=s(this,k))==null?void 0:ct.state.data,s(this,k)):r.placeholderData,r.select&&b!==void 0)try{b=r.select(b),o(this,O,null)}catch(P){o(this,O,P)}b!==void 0&&(I="success",R=ft(c==null?void 0:c.data,b,r),F=!0)}s(this,O)&&(A=s(this,O),R=s(this,j),w=Date.now(),I="error");const $=u.fetchStatus==="fetching",K=I==="pending",X=I==="error",ht=K&&$,ot=R!==void 0,C={status:I,fetchStatus:u.fetchStatus,isPending:K,isSuccess:I==="success",isError:X,isInitialLoading:ht,isLoading:ht,data:R,dataUpdatedAt:u.dataUpdatedAt,error:A,errorUpdatedAt:w,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>y.dataUpdateCount||u.errorUpdateCount>y.errorUpdateCount,isFetching:$,isRefetching:$&&!K,isLoadingError:X&&!ot,isPaused:u.fetchStatus==="paused",isPlaceholderData:F,isRefetchError:X&&ot,isStale:nt(t,r),refetch:this.refetch,promise:s(this,x)};if(this.options.experimental_prefetchInRender){const b=z=>{C.status==="error"?z.reject(C.error):C.data!==void 0&&z.resolve(C.data)},P=()=>{const z=o(this,x,C.promise=lt());b(z)},M=s(this,x);switch(M.status){case"pending":t.queryHash===i.queryHash&&b(M);break;case"fulfilled":(C.status==="error"||C.data!==M.value)&&P();break;case"rejected":(C.status!=="error"||C.error!==M.reason)&&P();break}}return C}updateResult(t){const r=s(this,v),i=this.createResult(s(this,a),this.options);if(o(this,U,s(this,a).state),o(this,L,this.options),s(this,U).data!==void 0&&o(this,k,s(this,a)),Z(i,r))return;o(this,v,i);const d={},c=()=>{if(!r)return!0;const{notifyOnChangeProps:h}=this.options,E=typeof h=="function"?h():h;if(E==="all"||!E&&!s(this,B).size)return!0;const p=new Set(E??s(this,B));return this.options.throwOnError&&p.add("error"),Object.keys(s(this,v)).some(y=>{const m=y;return s(this,v)[m]!==r[m]&&p.has(m)})};(t==null?void 0:t.listeners)!==!1&&c()&&(d.listeners=!0),l(this,n,yt).call(this,{...d,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,n,et).call(this)}},g=new WeakMap,a=new WeakMap,V=new WeakMap,v=new WeakMap,U=new WeakMap,L=new WeakMap,x=new WeakMap,O=new WeakMap,W=new WeakMap,j=new WeakMap,k=new WeakMap,D=new WeakMap,_=new WeakMap,T=new WeakMap,B=new WeakMap,n=new WeakSet,H=function(t){l(this,n,it).call(this);let r=s(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(Ot)),r},G=function(){l(this,n,st).call(this);const t=N(this.options.staleTime,s(this,a));if(q||s(this,v).isStale||!dt(t))return;const i=St(s(this,v).dataUpdatedAt,t)+1;o(this,D,setTimeout(()=>{s(this,v).isStale||this.updateResult()},i))},J=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,a)):this.options.refetchInterval)??!1},tt=function(t){l(this,n,rt).call(this),o(this,T,t),!(q||S(this.options.enabled,s(this,a))===!1||!dt(s(this,T))||s(this,T)===0)&&o(this,_,setInterval(()=>{(this.options.refetchIntervalInBackground||Et.isFocused())&&l(this,n,H).call(this)},s(this,T)))},et=function(){l(this,n,G).call(this),l(this,n,tt).call(this,l(this,n,J).call(this))},st=function(){s(this,D)&&(clearTimeout(s(this,D)),o(this,D,void 0))},rt=function(){s(this,_)&&(clearInterval(s(this,_)),o(this,_,void 0))},it=function(){const t=s(this,g).getQueryCache().build(s(this,g),this.options);if(t===s(this,a))return;const r=s(this,a);o(this,a,t),o(this,V,t.state),this.hasListeners()&&(r==null||r.removeObserver(this),t.addObserver(this))},yt=function(t){gt.batch(()=>{t.listeners&&this.listeners.forEach(r=>{r(s(this,v))}),s(this,g).getQueryCache().notify({query:s(this,a),type:"observerResultsUpdated"})})},Rt);function Ft(e,t){return S(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function pt(e,t){return Ft(e,t)||e.state.data!==void 0&&at(e,t,t.refetchOnMount)}function at(e,t,r){if(S(t.enabled,e)!==!1){const i=typeof r=="function"?r(e):r;return i==="always"||i!==!1&&nt(e,t)}return!1}function bt(e,t,r,i){return(e!==t||S(i.enabled,e)===!1)&&(!r.suspense||e.state.status!=="error")&&nt(e,r)}function nt(e,t){return S(t.enabled,e)!==!1&&e.isStaleByTime(N(t.staleTime,e))}function Ut(e,t){return!Z(e.getCurrentResult(),t)}var mt=Q.createContext(!1),Dt=()=>Q.useContext(mt);mt.Provider;function _t(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Pt=Q.createContext(_t()),Mt=()=>Q.useContext(Pt),Lt=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},jt=e=>{Q.useEffect(()=>{e.clearReset()},[e])},kt=({result:e,errorResetBoundary:t,throwOnError:r,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&wt(r,[e.error,i]),Bt=e=>{e.suspense&&(e.staleTime===void 0&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},At=(e,t)=>e.isLoading&&e.isFetching&&!t,Ht=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,vt=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});function Vt(e,t,r){var m,u,F,R,A;const i=Qt(),d=Dt(),c=Mt(),h=i.defaultQueryOptions(e);(u=(m=i.getDefaultOptions().queries)==null?void 0:m._experimental_beforeQuery)==null||u.call(m,h),h._optimisticResults=d?"isRestoring":"optimistic",Bt(h),Lt(h,c),jt(c);const E=!i.getQueryCache().get(h.queryHash),[p]=Q.useState(()=>new t(i,h)),y=p.getOptimisticResult(h);if(Q.useSyncExternalStore(Q.useCallback(w=>{const I=d?()=>{}:p.subscribe(gt.batchCalls(w));return p.updateResult(),I},[p,d]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),Q.useEffect(()=>{p.setOptions(h,{listeners:!1})},[h,p]),Ht(h,y))throw vt(h,p,c);if(kt({result:y,errorResetBoundary:c,throwOnError:h.throwOnError,query:i.getQueryCache().get(h.queryHash)}))throw y.error;if((R=(F=i.getDefaultOptions().queries)==null?void 0:F._experimental_afterQuery)==null||R.call(F,h,y),h.experimental_prefetchInRender&&!q&&At(y,d)){const w=E?vt(h,p,c):(A=i.getQueryCache().get(h.queryHash))==null?void 0:A.promise;w==null||w.catch(xt).finally(()=>{p.updateResult()})}return h.notifyOnChangeProps?y:p.trackResult(y)}function Kt(e,t){return Vt(e,Tt)}export{Kt as u};