import{r as n,j as a,a as e}from"./index-9916eef7.js";const c=t=>{const{target:o}=t;o instanceof HTMLElement&&o.tagName==="SPAN"&&o.classList.add("span__active")},l=()=>{const t=document.querySelectorAll(".span__active");t==null||t.forEach(o=>o.classList.remove("span__active"))},r=(t,o)=>Math.floor(Math.random()*(o-t+1)+t);const h=[{text:"First, solve the problem. Then, write the code.",author:"John Johnson"},{text:"Experience is the name everyone gives to their mistakes.",author:"Oscar Wilde"},{text:" In order to be irreplaceable, one must always be different",author:"Coco Chanel"},{text:"Java is to JavaScript what car is to Carpet.",author:"Chris Heilmann"},{text:"Knowledge is power.",author:"Francis Bacon"},{text:"Ruby is rubbish! PHP is phpantastic!",author:"Nikita Popov"},{text:" Code is like humor. When you have to explain it, it’s bad.",author:"Cory House"}],u=()=>{const t=n.useMemo(()=>h[r(0,7)],[]),o=s=>s.split("").map(i=>e("span",{children:i},r(0,new Date().getTime())));return a("blockquote",{className:"Quote",onMouseMove:s=>c(s),onMouseLeave:()=>l(),children:[e("div",{className:"cursor"}),o(`"${t.text}" - `)," ",o(t.author),a("div",{className:"glitch",children:[o(`"${t.text}" - `)," ",o(t.author)]})]})};const m=()=>e("div",{className:"area",children:a("ul",{className:"circles",children:[e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{})]})}),p=()=>a("div",{className:"Home",children:[e(u,{}),e(m,{})]});export{p as default};
