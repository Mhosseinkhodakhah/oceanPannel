import{j as e,B as o,az as B,o as $,r as L,aF as H,D as V,T as E,C as T,_ as m,H as N}from"./index-CFDJsxbo.js";import{C as G}from"./config-global-BiiB0tPS.js";import{c as K,k as U,F as n,d,T as a,f as p,S as W}from"./validation-YmoSo9rv.js";import{u as J}from"./useQuery-DjibWgfw.js";import{u as z}from"./useMutation-C-DXEvAT.js";import{t as X,v as Y,w as Z,x as q}from"./index-ByPUjCuX.js";import{M as O}from"./MenuItem-C_-rYzuD.js";import{D as ee}from"./Divider-qOzcLBQy.js";import"./client-D8o3KTYh.js";function te({initialValues:b,onSubmit:u,id:y,setConfirmDel:h}){var F,x,l,v,c,g,j;const r=K({initialValues:b,enableReinitialize:!0,validationSchema:U,onSubmit:u});return e.jsxs("form",{style:{backgroundColor:"#253A51",borderRadius:5},onSubmit:r.handleSubmit,children:[e.jsxs(o,{sx:{display:"flex",justifyContent:"space-around",my:2,width:"100%",py:2},children:[e.jsxs(o,{style:{flexFlow:"column"},children:[e.jsxs(n,{children:[e.jsx(d,{sx:{fontSize:"small"},children:"سوال فارسی"}),e.jsx(a,{type:"text",InputLabelProps:{shrink:!0,sx:{right:0,left:"unset",transformOrigin:"right","&.MuiInputLabel-shrink":{transform:"translate(-5px, 10px) scale(0.75)"},color:"#fff"}},sx:{mb:3,"& .MuiOutlinedInput-notchedOutline":{textAlign:"right",paddingRight:0},"& .MuiInputLabel-root":{position:"relative",transform:"none",padding:0},input:{color:"#ffffff",width:"100%"}},...r.getFieldProps("questionForm")})]}),r.errors.questionForm&&e.jsx(p,{sx:{textAlign:"right",mb:2,color:"red"},children:r.errors.questionForm}),(x=(F=r.values)==null?void 0:F.options)==null?void 0:x.map((f,s)=>e.jsx(o,{sx:{display:"flex",alignItems:"center"},children:e.jsxs(n,{sx:{display:"flex"},children:[e.jsx(a,{type:"text",size:"small",sx:{mb:1,input:{color:"#ffffff"}},...r.getFieldProps(`options[${s}]`)}),r.touched.options&&r.errors.options&&Array.isArray(r.errors.options)&&r.errors.options[s]&&e.jsx(o,{sx:{display:"flex",flexFlow:"column"},children:e.jsx(p,{sx:{textAlign:"right",mb:2,color:"red",display:"flex"},children:r.errors.options[s]})})]})},s))]}),e.jsxs(o,{sx:{display:"flex",flexFlow:"column"},children:[e.jsxs(n,{children:[e.jsx(d,{sx:{fontSize:"small"},children:"سوال عربی"}),e.jsx(a,{type:"text",...r.getFieldProps("aQuestionForm"),InputLabelProps:{shrink:!0,sx:{right:0,left:"unset",transformOrigin:"right","&.MuiInputLabel-shrink":{transform:"translate(-5px, 10px) scale(0.75)"},color:"#fff"}},sx:{mb:3,"& .MuiOutlinedInput-notchedOutline":{textAlign:"right",paddingRight:0},"& .MuiInputLabel-root":{position:"relative",transform:"none",padding:0},input:{color:"#ffffff"}}})]}),r.errors.aQuestionForm&&e.jsx(p,{sx:{textAlign:"right",mb:2,color:"red"},children:r.errors.aQuestionForm}),(v=(l=r.values)==null?void 0:l.aOptions)==null?void 0:v.map((f,s)=>e.jsx(o,{sx:{display:"flex",alignItems:"center"},children:e.jsxs(n,{sx:{display:"flex"},children:[e.jsx(a,{type:"text",...r.getFieldProps(`aOptions[${s}]`),size:"small",sx:{mb:1,input:{color:"#ffffff"}}}),r.touched.aOptions&&r.errors.aOptions&&Array.isArray(r.errors.aOptions)&&r.errors.aOptions[s]&&e.jsx(o,{sx:{display:"flex",flexFlow:"column"},children:e.jsx(p,{sx:{textAlign:"right",mb:2,color:"red",display:"flex"},children:r.errors.aOptions[s]})})]})},s))]}),e.jsxs(o,{sx:{display:"flex",flexFlow:"column"},children:[e.jsxs(n,{children:[e.jsx(d,{sx:{fontSize:"small"},children:"سوال انگلیسی"}),e.jsx(a,{type:"text",...r.getFieldProps("eQuestionForm"),InputLabelProps:{shrink:!0,sx:{right:0,left:"unset",transformOrigin:"right","&.MuiInputLabel-shrink":{transform:"translate(-5px, 10px) scale(0.75)"},color:"#fff"}},sx:{mb:3,"& .MuiOutlinedInput-notchedOutline":{textAlign:"right",paddingRight:0},"& .MuiInputLabel-root":{position:"relative",transform:"none",padding:0},input:{color:"#ffffff"}}})]}),r.errors.questionForm&&e.jsx(p,{sx:{textAlign:"right",mb:2,color:"red"},children:r.errors.questionForm}),(g=(c=r.values)==null?void 0:c.eOptions)==null?void 0:g.map((f,s)=>e.jsx(o,{sx:{display:"flex",alignItems:"center"},children:e.jsxs(n,{sx:{display:"flex"},children:[e.jsx(a,{type:"text",...r.getFieldProps(`eOptions[${s}]`),size:"small",sx:{mb:1,input:{color:"#ffffff"}}}),r.touched.eOptions&&r.errors.eOptions&&Array.isArray(r.errors.eOptions)&&r.errors.eOptions[s]&&e.jsx(o,{sx:{display:"flex",flexFlow:"column"},children:e.jsx(p,{sx:{textAlign:"right",mb:2,color:"red",display:"flex"},children:r.errors.eOptions[s]})})]})},s))]})]}),e.jsxs(o,{sx:{display:"flex",mt:2,gap:2,mx:6},children:[e.jsxs(n,{fullWidth:!0,sx:{flex:1},children:[e.jsx(d,{id:"demo-simple-select-label",sx:{fontSize:12},children:"گزینه صحیح"}),e.jsxs(W,{labelId:"demo-simple-select-label",id:"demo-simple-select",size:"small",value:(j=r.values.trueOption)==null?void 0:j.toString(),onChange:f=>{const s=f.target.value;r.setFieldValue("trueOption",+s)},sx:{color:"#ffffff"},children:[e.jsx(O,{value:1,children:"گزینه اول"}),e.jsx(O,{value:2,children:"گزینه دوم"}),e.jsx(O,{value:3,children:"گزینه سوم"}),e.jsx(O,{value:4,children:"گزینه چهارم"})]})]}),e.jsxs(n,{sx:{display:"flex",flex:1},children:[e.jsx(d,{sx:{fontSize:"14px"},children:"زمان (ثانیه)"}),e.jsx(a,{type:"number",size:"small",sx:{mb:1,input:{color:"#ffffff"}},...r.getFieldProps("time")}),r.errors.time&&e.jsx(p,{sx:{textAlign:"right",mb:2,color:"red"},children:r.errors.time})]})]}),e.jsxs(o,{sx:{display:"flex",gap:2,mx:2},children:[e.jsx(B,{variant:"contained",color:"warning",type:"submit",sx:{my:2,mr:4},children:"به روزرسانی"}),e.jsx($,{variant:"contained",color:"error",sx:{my:2},onClick:()=>h(y),children:"حذف"})]})]})}function re(){var M,w,A,P,Q,k,C,D,R;const[b,u]=L.useState(""),[y,h]=L.useState(""),[r,F]=L.useState({}),x=H(),{data:l,isLoading:v,refetch:c}=J({queryKey:["getQuizeSpecific"],queryFn:()=>q(x==null?void 0:x.state)}),g=z({mutationKey:["deleteQuestion"],mutationFn:()=>X(b),onSuccess:t=>{var i;(i=t==null?void 0:t.data)!=null&&i.success?(m.success("سوال با موفقیت حذف شد",{position:"top-left"}),c()):m.error("سوال حذف نشد ، لطفا دوباره امتحان کنید",{position:"top-left"}),u("")}}),j=z({mutationKey:["updateQuize"],mutationFn:t=>Y(t,y),onSuccess:t=>{var i;(i=t==null?void 0:t.data)!=null&&i.success?(m.success("سوال با موفقیت به روزرسانی شد",{position:"top-left"}),c()):m.error("سوال به روزرسانی نشد ، لطفا دوباره امتحان کنید",{position:"top-left"}),h("")}}),f=(t,i)=>{h(i),F(t)},s=z({mutationKey:["updateLevel"],mutationFn:t=>{var i,S,_;return Z(t,(_=(S=(i=l==null?void 0:l.data)==null?void 0:i.data)==null?void 0:S.level)==null?void 0:_._id)},onSuccess:t=>{var i;(i=t==null?void 0:t.data)!=null&&i.success?(m.success("پاداش با موفقیت به روزرسانی شد",{position:"top-left"}),c()):m.error("پاداش به روزرسانی نشد ، لطفا دوباره امتحان کنید",{position:"top-left"})}}),I=K({initialValues:{reward:(A=(w=(M=l==null?void 0:l.data)==null?void 0:M.data)==null?void 0:w.level)==null?void 0:A.reward,number:(k=(Q=(P=l==null?void 0:l.data)==null?void 0:P.data)==null?void 0:Q.level)==null?void 0:k.number},enableReinitialize:!0,onSubmit:t=>{const{reward:i,...S}=t;s.mutate({reward:i})}});return e.jsxs(V,{children:[e.jsx(E,{variant:"h4",children:"سوالات"}),e.jsx(ee,{sx:{my:3}}),e.jsxs("form",{onSubmit:I.handleSubmit,children:[e.jsxs(o,{sx:{display:"flex",gap:2},children:[e.jsxs(n,{children:[e.jsx(d,{sx:{color:"white"},children:"پاداش"}),e.jsx(a,{...I.getFieldProps("reward"),type:"number",size:"small",InputLabelProps:{shrink:!0,sx:{right:0,left:"unset",color:"#ffffff",transformOrigin:"right","&.MuiInputLabel-shrink":{transform:"translate(-5px, 10px) scale(0.75)"}}},sx:{mb:3,"& .MuiOutlinedInput-notchedOutline":{textAlign:"right",paddingRight:0},"& .MuiInputLabel-root":{position:"relative",transform:"none",padding:0},input:{color:"white"}}})]}),e.jsxs(n,{children:[e.jsx(d,{sx:{color:"white"},children:"شماره آزمون"}),e.jsx(a,{...I.getFieldProps("number"),type:"number",size:"small",disabled:!0,InputLabelProps:{shrink:!0,sx:{right:0,left:"unset",color:"#ffffff",transformOrigin:"right","&.MuiInputLabel-shrink":{transform:"translate(-5px, 10px) scale(0.75)"}}},sx:{mb:3,"& .MuiOutlinedInput-notchedOutline":{textAlign:"right",paddingRight:0},"& .MuiInputLabel-root":{position:"relative",transform:"none",padding:0},input:{color:"white"}}})]})]}),e.jsx(B,{variant:"contained",color:"warning",type:"submit",loading:s.isPending,children:"به روزرسانی"})]}),e.jsx(o,{children:(R=(D=(C=l==null?void 0:l.data)==null?void 0:C.data)==null?void 0:D.questions)==null?void 0:R.map(t=>e.jsx("div",{children:e.jsx(te,{initialValues:{questionForm:(t==null?void 0:t.questionForm)||"",aQuestionForm:(t==null?void 0:t.aQuestionForm)||"",eQuestionForm:(t==null?void 0:t.aQuestionForm)||"",options:(t==null?void 0:t.options)||["","","",""],aOptions:(t==null?void 0:t.aOptions)||["","","",""],eOptions:(t==null?void 0:t.eOptions)||["","","",""],trueOption:(t==null?void 0:t.trueOption)||1,time:(t==null?void 0:t.time)||15},id:t==null?void 0:t._id,onSubmit:i=>f(i,t==null?void 0:t._id),setConfirmDel:u})},t==null?void 0:t._id))}),e.jsx(T,{title:"حذف سوال",description:"آیا میخواهید این سوال را حذف کنید؟",handleClose:()=>u(""),isLoading:g.isPending,onSubmit:()=>g.mutate(),open:!!b}),e.jsx(T,{title:"به روزرسانی سوال",description:"آیا میخواهید این سوال را به روزرسانی کنید؟",handleClose:()=>h(""),isLoading:j.isPending,onSubmit:()=>j.mutate(r),open:!!y})]})}function ce(){return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsxs("title",{children:[" ",`سوالات - ${G.appName}`]})}),e.jsx(re,{})]})}export{ce as default};