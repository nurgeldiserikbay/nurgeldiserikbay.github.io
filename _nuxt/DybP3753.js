import{q as b,r as n,v as y,D as I,o as l,c as e,a as o,t as i,F as f,x as u,y as h,u as _,E as x,P as k,p as m,f as F,_ as L}from"./CxfC4eT4.js";const g=a=>(m("data-v-5c9377b4"),a=a(),F(),a),O={id:"portfolio",class:"section portfolio"},S={class:"container"},T={class:"section__subtitle"},w={class:"row"},R={class:"col-lg-12 d-flex justify-content-center"},C={class:"portfolio__filters"},E=["onClick"],P={class:"portfolio__wrap"},D=["src","alt"],G={class:"portfolio__info"},$={class:"portfolio__links"},B=["href"],M=g(()=>o("i",{class:"bx bx-plus"},null,-1)),j=[M],q=["href"],z=g(()=>o("i",{class:"bx bx-link"},null,-1)),A=[z],N=b({__name:"portfolio",setup(a){const r=n(null),c=n(),p=n("*");y(()=>{r.value&&(I(()=>{setTimeout(()=>{c.value=new Isotope(r.value,{itemSelector:".portfolio__item",layoutMode:"fitRows"})},500)}),GLightbox({selector:".portfolio-lightbox"}),GLightbox({selector:".portfolio-details-lightbox",width:"90%",height:"90vh"}))});function v(s){c.value&&(p.value=s,c.value.arrange({filter:s}))}return(s,V)=>(l(),e("section",O,[o("div",S,[o("div",T,[o("h2",null,i(s.$t("pages.portfolio.title")),1),o("p",null,i(s.$t("pages.portfolio.subtitle")),1)]),o("div",w,[o("div",R,[o("ul",C,[(l(!0),e(f,null,u("FILTERS"in s?s.FILTERS:_(x),t=>(l(),e("li",{key:t.selector,class:h({"filter-active":_(p)===t.selector}),onClick:d=>v(t.selector)},i(s.$t(t.text)),11,E))),128))])])]),o("div",{ref_key:"portfolioContainer",ref:r,class:"row portfolio-container"},[(l(!0),e(f,null,u("PORTFOLIO"in s?s.PORTFOLIO:_(k),(t,d)=>(l(),e("div",{key:d,class:h(["col-lg-4 col-md-6 portfolio__item",t.class])},[o("div",P,[o("img",{src:t.img,class:"img-fluid",alt:t.alt},null,8,D),o("div",G,[o("h4",null,i(t.title),1),o("p",null,i(t.type),1),o("div",$,[o("a",{href:t.fullImg,"data-gallery":"portfolioGallery",class:"portfolio-lightbox",title:"App 1"},j,8,B),o("a",{href:t.ifame,"data-gallery":"portfolioDetailsGallery","data-glightbox":"type: external",class:"portfolio-details-lightbox",title:"Portfolio Details"},A,8,q)])])])],2))),128))],512)])]))}}),J=L(N,[["__scopeId","data-v-5c9377b4"]]);export{J as default};