import{c as h,i as m,e as v,a as e,F as f,j as s,u as _,f as g,s as j,g as N,B as l,r as x,h as y,k as C}from"./index-617f2a9d.js";var c={},k=m;Object.defineProperty(c,"__esModule",{value:!0});var o=c.default=void 0,b=k(h()),q=v,S=(0,b.default)((0,q.jsx)("path",{d:"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}),"Laptop");o=c.default=S;function E(){return e(f,{children:s("div",{className:"scroll__bottom",onClick:()=>{const a=document.querySelector("main");a&&(a==null||a.scrollBy({top:a.scrollHeight,left:0,behavior:"smooth"}))},children:[e("span",{}),e("span",{}),e("span",{}),e("span",{})]})})}function L(){const r=_(),a=g(j),d=a.projects.slice(0,a.count).map((t,u)=>{var n;return s("div",{children:[s("span",{className:"projects__title",children:[e("a",{href:t.src||"",children:e(o,{})}),e("a",{href:t.github||"",children:e(N,{})}),e("span",{children:t.technologies})]}),e("iframe",{src:t.src||"",title:"External Website",className:"projects__iframe",style:{opacity:0,transition:"all 0.5s"},onLoad:p=>{const{target:i}=p;i&&(i.style.opacity="1")}}),e("div",{className:"projects__background",children:e(l,{onClick:()=>{document.location=t.src||""},children:(n=t.name)==null?void 0:n.toLocaleUpperCase()})})]},t.name||u)});return x.useEffect(()=>{},[a.count]),s("div",{className:"main__projects",children:[s("div",{className:"title",children:["Projects.",e("div",{className:"title__icon",children:e(y,{})})]}),e("div",{className:"projects",children:d}),a.count!==a.length?e(l,{className:"projects__more",onClick:()=>r(C()),children:"More"}):e("div",{}),e(E,{})]})}export{L as default};