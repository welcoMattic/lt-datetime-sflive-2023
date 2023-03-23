import{h as d,j as _,k as p,aj as h,c as m,ak as u,m as n,al as t,am as o,z as s,F as f,an as g,ao as v,ap as x,q as l,aq as y,ar as k,n as b,as as N,at as w,_ as P}from"./nav-6a03076a.js";import{N as j}from"./NoteDisplay-0684adf9.js";import{u as S}from"./index-0600a1cd.js";const V={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),q={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),S({title:`Notes - ${m.title}`});const r=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,i)=>(l(),n("div",{id:"page-root",style:v(s(w))},[t("div",V,[t("div",L,[t("h1",T,o(s(m).title),1),t("div",z,o(new Date().toLocaleString()),1)]),(l(!0),n(f,null,g(s(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,o(e==null?void 0:e.no)+"/"+o(s(y)),1),k(" "+o(e==null?void 0:e.title)+" ",1),H])]),b(j,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(r).length-1?(l(),n("hr",q)):N("v-if",!0)]))),128))])],4))}}),W=P(F,[["__file","/home/welcomattic/workspace/talks/lt-datetime-sflive-2023/slides/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
