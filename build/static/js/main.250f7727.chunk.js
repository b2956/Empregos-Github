(this["webpackJsonpempregos-github"]=this["webpackJsonpempregos-github"]||[]).push([[0],{162:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),o=t(23),m=t(7),s=t(13),u=t(165),i=t(14),p=t.n(i),g="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",E="make-request",b="get-data",d="error",h="update-has-next-page",j=function(e,a){switch(a.type){case E:return{loading:!0,jobs:[]};case b:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case d:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case h:return Object(m.a)(Object(m.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}};var f=t(19),y=t(34),v=t(53),k=t(56),N=t(33),O=t.n(N),C=function(e){var a=e.job,t=Object(n.useState)(!1),c=Object(s.a)(t,2),l=c[0],o=c[1];return r.a.createElement(f.a,{className:"mb-3"},r.a.createElement(f.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(f.a.Title,null,a.title," - ",r.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),r.a.createElement(f.a.Subtitle,{className:"text-mute mb-2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(y.a,{variant:"secondary",className:"mr-2"},a.type),r.a.createElement(y.a,{variant:"secondary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(O.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-sm-none d-md-block",alt:a.company,src:a.company_logo,height:"50"})),r.a.createElement(f.a.Text,null,r.a.createElement(v.a,{variant:"primary",onClick:function(){return o((function(e){return!e}))}},l?"Esconder Detalhes":"Ver Detalhes"),r.a.createElement(k.a,{in:l},r.a.createElement("div",{className:"mt-4"},r.a.createElement(O.a,{source:a.description}))))))},x=t(11),P=function(e){var a=e.page,t=e.setPage,n=e.hasNextPage,c=function(){t(a+1)};return r.a.createElement(x.a,null,a>1&&r.a.createElement(x.a.Prev,{onClick:function(){t(a-1)}}),a>1&&r.a.createElement(x.a.Item,{onClick:function(){return t(1)}},"1"),a>3&&r.a.createElement(x.a.Ellipsis,null),a>2&&r.a.createElement(x.a.Item,null,a-1),r.a.createElement(x.a.Item,{active:!0},a),n&&r.a.createElement(x.a.Item,{onClick:c},a+1),n&&r.a.createElement(x.a.Next,{onClick:c}))},w=t(9),T=t(18),_=function(e){var a=e.params,t=e.onParamChange;return r.a.createElement(w.a,{className:"mb-4"},r.a.createElement(w.a.Row,{className:"align-items-end"},r.a.createElement(w.a.Group,{as:T.a},r.a.createElement(w.a.Label,null,"Descri\xe7\xe3o"),r.a.createElement(w.a.Control,{onChange:t,value:a.description,name:"description"})),r.a.createElement(w.a.Group,{as:T.a},r.a.createElement(w.a.Label,null,"Lugar"),r.a.createElement(w.a.Control,{onChange:t,value:a.location,name:"location"})),r.a.createElement(w.a.Group,{as:T.a,xs:"auto",className:"ml-2"},r.a.createElement(w.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full_time",label:"Apenas Tempo Integral",type:"checkbox",className:"mb-2"}))))};var I=function(){var e=Object(n.useState)(1),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)({}),i=Object(s.a)(l,2),f=i[0],y=i[1],v=function(e,a){var t=Object(n.useReducer)(j,{jobs:[],loading:!0}),r=Object(s.a)(t,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=p.a.CancelToken.source();l({type:E}),p.a.get(g,{cancelToken:t.token,params:Object(m.a)({markdown:!0,page:a},e)}).then((function(e){l({type:b,payload:{jobs:e.data}})})).catch((function(e){p.a.isCancel(e)||l({type:d,payload:{error:e}})}));var n=p.a.CancelToken.source();return p.a.get(g,{cancelToken:n.token,params:Object(m.a)({markdown:!0,page:a+1},e)}).then((function(e){l({type:h,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){p.a.isCancel(e)||l({type:d,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(f,t),k=v.jobs,N=v.loading,O=v.error,x=v.hasNextPage;return r.a.createElement(u.a,{className:"my-4"},r.a.createElement("h1",{className:"mb-4"},"Empregos GitHub"),r.a.createElement(_,{params:f,onParamChange:function(e){var a=e.target.name,t=e.target.value;c(1),y((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(o.a)({},a,t))}))}}),r.a.createElement(P,{page:t,setPage:c,hasNextPage:x}),N&&r.a.createElement("h1",null,"Carregando ..."),O&&r.a.createElement("h1",null,"Erro. Tente recarregar a p\xe1gina."),k.map((function(e){return r.a.createElement(C,{key:e.id,job:e})})),r.a.createElement(P,{page:t,setPage:c,hasNextPage:x}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))},57:function(e,a,t){e.exports=t(162)}},[[57,1,2]]]);
//# sourceMappingURL=main.250f7727.chunk.js.map