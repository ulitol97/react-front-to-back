(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(18),A=n.n(r),s=n(16),o=n(4),i=(n(47),n(15)),l=n(2),u=n(11),j=Object(a.createContext)(),d=Object(a.createContext)(),h=n(0),p=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(u.a)(t,2),c=n[0],r=n[1],A=c.email,s=c.password,o=Object(a.useContext)(j).setAlert,p=Object(a.useContext)(d),b=p.isAuthenticated,g=p.login,B=p.errors,E=p.clearErrors;function O(e){r(Object(l.a)(Object(l.a)({},c),{},Object(i.a)({},e.target.name,e.target.value.trim())))}return Object(a.useEffect)((function(){b&&e.history.replace("/"),B&&0!==B.length&&(o(B[0].msg,"danger"),E())}),[B,b]),Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("h1",{children:["Account ",Object(h.jsx)("span",{className:"text-primary",children:"login"})]}),Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(){if(""===A||""===s)return o("Fill in all the fields","danger"),!1;return!0}()&&g({email:A,password:s})},children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{required:!0,id:"email",type:"email",name:"email",value:A,onChange:O}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{required:!0,id:"password",type:"password",name:"password",value:s,onChange:O}),Object(h.jsx)("hr",{}),Object(h.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary btn-block"})]})})]})},b=function(e){var t=Object(a.useState)({name:"",surname:"",email:"",password:"",passwordRepeat:""}),n=Object(u.a)(t,2),c=n[0],r=n[1],A=c.name,s=c.surname,o=c.email,p=c.password,b=c.passwordRepeat,g=Object(a.useContext)(j).setAlert,B=Object(a.useContext)(d),E=B.isAuthenticated,O=B.registerUser,C=B.errors,x=B.clearErrors;function m(e){r(Object(l.a)(Object(l.a)({},c),{},Object(i.a)({},e.target.name,e.target.value.trim())))}return Object(a.useEffect)((function(){E&&e.history.replace("/"),C&&0!==C.length&&(g(C[0].msg,"danger"),x())}),[C,E]),Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("h1",{children:["Account ",Object(h.jsx)("span",{className:"text-primary",children:"register"})]}),Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(){if(""===A||""===s||""===o||""===p)return g("Fill in all the fields","danger"),!1;if(p!==b)return g("Passwords do not match","danger"),!1;return!0}()&&O({name:A,surname:s,email:o,password:p})},children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{required:!0,id:"name",type:"text",name:"name",value:A,onChange:m}),Object(h.jsx)("label",{htmlFor:"surname",children:"Surname"}),Object(h.jsx)("input",{required:!0,id:"surname",type:"text",name:"surname",value:s,onChange:m}),Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{required:!0,id:"email",type:"email",name:"email",value:o,onChange:m}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{required:!0,id:"password",type:"password",name:"password",value:p,onChange:m}),Object(h.jsx)("label",{htmlFor:"password-repeat",children:"Repeat password"}),Object(h.jsx)("input",{required:!0,id:"password-repeat",type:"password",name:"passwordRepeat",value:b,onChange:m}),Object(h.jsx)("hr",{}),Object(h.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary btn-block"})]})})]})},g=n(77),B=n(76),E=function(e){var t=e.alert,n=Object(a.useContext)(j).clearAlert;return Object(h.jsxs)("div",{className:"alert alert-flex alert-".concat(t.type," "),children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-info-circle"})," ",t.msg]}),Object(h.jsx)("button",{onClick:function(){n(t)},className:"btn btn-alert",children:Object(h.jsx)("i",{className:"fas fa-times"})})]})},O=function(){var e=Object(a.useContext)(j).alerts;return e.length>0&&Object(h.jsx)("div",{className:"alert-container",children:Object(h.jsx)(g.a,{children:e.length&&e.map((function(e){return Object(h.jsx)(B.a,{timeout:500,classNames:"alert",children:Object(h.jsx)(E,{alert:e})},e.id)}))})})},C=Object(a.createContext)(),x=function(e){var t=e.title,n=e.icon,c=Object(a.useContext)(d),r=c.isAuthenticated,A=c.logout,o=c.user,i=Object(a.useContext)(C).clearContacts;var l=Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)("li",{children:Object(h.jsxs)("b",{children:["Hello ",o&&o.name]})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{onClick:function(){A(),i()},href:"#!",children:[Object(h.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(h.jsx)("span",{className:"hide-sm",children:"Logout"})]})})]}),u=Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/register",children:"Sign up"})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/login",children:"Login"})})]});return Object(h.jsxs)("nav",{className:"navbar bg-primary",children:[Object(h.jsx)("h1",{children:Object(h.jsxs)(s.b,{to:"/",children:[Object(h.jsx)("i",{className:n})," ",t]})}),Object(h.jsx)("ul",{children:r?l:u})]})};x.defaultProps={title:"Contact Keeper",icon:"fas fa-id-card-alt"};var m=x,f=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"About this app"}),Object(h.jsx)("p",{children:"App to store your contacts thanks to our API (React client for a full stack app)."}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Version: "})," 1.0.0"]}),Object(h.jsxs)("p",{children:["\xa9",(new Date).getFullYear()]})]})},w="GET_CONTACTS",Q="ADD_CONTACT",F="UPDATE_CONTACT",I="DELETE_CONTACT",y="FILTER_CONTACTS",G="CLEAR_CONTACTS",D="CONTACT_ERROR",v="SET_FILTER",R="CLEAR_FILTER",U="SET_CURRENT",S="CLEAR_CURRENT",k="SET_ALERT",N="REMOVE_ALERT",Y="REGISTER_SUCCESS",M="REGISTER_FAILURE",H="USER_LOADED",L="AUTH_ERROR",K="LOGIN_SUCCESS",J="LOGIN_FAILURE",Z="LOGOUT",W="CLEAR_ERRORS",T=Object.freeze({personal:"personal",professional:"professional"}),q=function(){var e={name:"",surname:"",email:"",phone:"",type:T.personal},t=Object(a.useState)(e),n=Object(u.a)(t,2),c=n[0],r=n[1],A=c.name,s=c.surname,o=c.email,j=c.phone,d=c.type,p=Object(a.useContext)(C),b=p.errors,g=p.current,B=p.addContact,E=p.updateContact,O=p.setCurrent,x=p.clearCurrent;function m(e){var t=Object(l.a)(Object(l.a)({},c),{},Object(i.a)({},e.target.name,e.target.value));r(t)}return Object(a.useEffect)((function(){r(null!=g?Object(l.a)(Object(l.a)({},e),g):e)}),[C,g]),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(){for(var e in c)c[e]||delete c[e]}(),null===g?(B(c),b&&0!==b.length||r(e)):(E(c),b&&0!==b.length||O(c))},children:[Object(h.jsx)("h2",{className:"text-primary",children:null==g?"Add a contact":"Edit contact"}),Object(h.jsx)("label",{htmlFor:"form-name",children:"Name:"}),Object(h.jsx)("input",{id:"form-name",type:"text",name:"name",value:A,onChange:m}),Object(h.jsx)("label",{htmlFor:"form-surname",children:"Surname:"}),Object(h.jsx)("input",{id:"form-surname",type:"text",name:"surname",value:s,onChange:m}),Object(h.jsx)("label",{htmlFor:"form-email",children:"Email:"}),Object(h.jsx)("input",{id:"form-email",type:"text",name:"email",value:o,onChange:m}),Object(h.jsx)("label",{htmlFor:"form-phone",children:"Phone:"}),Object(h.jsx)("input",{id:"form-phone",type:"text",name:"phone",value:j,onChange:m}),Object(h.jsx)("label",{htmlFor:"form-type",children:"Type:"}),Object(h.jsx)("select",{id:"form-type",name:"type",value:d,onChange:m,children:Object.values(T).map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"submit",value:null==g?"Add contact":"Edit contact",className:"btn btn-primary btn-block"}),g&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-danger btn-block",onClick:function(){x()},children:"Clear"})})]})]})},P=function(){var e=Object(a.useContext)(C),t=e.filter,n=e.filterContacts,c=e.setFilter,r=e.clearFilter;return Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(h.jsx)("input",{value:t,type:"text",placeholder:"Filter...",autoFocus:!0,onChange:function(e){e&&c(e.target.value);var t=e.target.value.trim();t?n(t):r()}})})},V=function(){return Object(h.jsx)(a.Fragment,{children:Object(h.jsx)("img",{src:"data:image/gif;base64,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",alt:"Loading...",style:{width:"200px",display:"block",margin:"auto"}})})},z=function(e){var t=e.contact,n=t._id,c=t.name,r=t.surname,A=t.email,s=t.phone,o=t.type,i=Object(a.useContext)(C),l=i.current,u=i.deleteContact,j=i.setCurrent,d=i.clearCurrent;return Object(h.jsxs)("div",{className:"card bg-".concat(l===t?"selected":"light"),children:[Object(h.jsxs)("h3",{className:"text-primary text-left",children:["".concat(c," ").concat(r),Object(h.jsx)("span",{style:{float:"right"},className:"badge ".concat(o===T.personal?"badge-primary":"badge-success"),children:o})]}),Object(h.jsxs)("ul",{className:"list",children:[A&&Object(h.jsxs)("li",{children:[Object(h.jsx)("i",{className:"fas fa-envelope-open"})," ",A]}),s&&Object(h.jsxs)("li",{children:[Object(h.jsx)("i",{className:"fas fa-phone"})," ",s]})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){j(t)},children:"Edit"}),Object(h.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){u(n),l===t&&d()},children:"Delete"})]})]})},X=function(){var e=Object(a.useContext)(C),t=e.loading,n=e.errors,c=e.contacts,r=e.filtered,A=e.getContacts,s=Object(a.useContext)(j).setAlert;return Object(a.useEffect)((function(){A()}),[]),Object(a.useEffect)((function(){n&&n.length&&s(n[0].msg,"danger")}),[n]),0===(null===c||void 0===c?void 0:c.length)?Object(h.jsx)("h3",{children:"Please, add a contact."}):Object(h.jsx)(a.Fragment,{children:null===c||t?Object(h.jsx)(V,{}):Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(P,{}),Object(h.jsx)(g.a,{children:r?r.map((function(e){return Object(h.jsx)(B.a,{timeout:600,classNames:"item",children:Object(h.jsx)(z,{contact:e})},e._id)})):c.map((function(e){return Object(h.jsx)(B.a,{timeout:600,classNames:"item",children:Object(h.jsx)(z,{contact:e})},e._id)}))})]})})},_=function(){var e=Object(a.useContext)(d).loadUser;return Object(a.useEffect)((function(){e()}),[]),Object(h.jsxs)("div",{className:"grid-2",children:[Object(h.jsx)("div",{children:Object(h.jsx)(q,{})}),Object(h.jsx)("div",{children:Object(h.jsx)(X,{})})]})},$=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Not found"}),Object(h.jsx)("p",{className:"lead",children:"This ain't the page you're looking for."})]})},ee=n(40),te=function(e){var t=e.component,n=Object(ee.a)(e,["component"]),c=Object(a.useContext)(d),r=c.isAuthenticated,A=c.loading;return Object(h.jsx)(o.b,Object(l.a)(Object(l.a)({},n),{},{render:function(e){return r||A?Object(h.jsx)(t,Object(l.a)({},e)):Object(h.jsx)(o.a,{to:"/login"})}}))},ne=n(38),ae=n.n(ne),ce=n(21);function re(e,t){switch(t.type){case k:return[].concat(Object(ce.a)(e),[t.payload]).slice(-3);case N:return e.filter((function(e){return e.id!==t.payload}));default:return e}}var Ae=function(e){var t=Object(a.useReducer)(re,[]),n=Object(u.a)(t,2),c=n[0],r=n[1];return Object(h.jsx)(j.Provider,{value:{alerts:c,setAlert:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3600,a=ae.a.v4();r({type:k,payload:{id:a,msg:e,type:t}}),setTimeout((function(){return r({type:N,payload:a})}),n)},clearAlert:function(e){r({type:N,payload:e.id})}},children:e.children})},se=n(6),oe=n.n(se),ie=n(13),le=n(10),ue=n.n(le);function je(e,t){var n;switch(t.type){case Y:case K:return localStorage.setItem("token",t.payload.token),Object(l.a)(Object(l.a)({},e),{},{token:t.payload.token,isAuthenticated:!0,loading:!1});case M:case J:case L:case Z:return localStorage.removeItem("token"),Object(l.a)(Object(l.a)({},e),{},{user:null,token:null,isAuthenticated:!1,loading:!1,errors:(null===(n=t.payload)||void 0===n?void 0:n.errors)||[]});case H:return Object(l.a)(Object(l.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case W:return Object(l.a)(Object(l.a)({},e),{},{errors:[]});default:return e}}var de=function(e){var t={token:localStorage.getItem("token"),user:null,isAuthenticated:!1,loading:!0,errors:[]},n=Object(a.useReducer)(je,t),c=Object(u.a)(n,2),r=c[0],A=c[1];function s(){return o.apply(this,arguments)}function o(){return(o=Object(ie.a)(oe.a.mark((function e(){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.get("/api/auth");case 3:t=e.sent,A({type:H,payload:t.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),A({type:L,payload:e.t0.response.data});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function i(){return(i=Object(ie.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.post("/api/users",t);case 3:n=e.sent,A({type:Y,payload:n.data}),s(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),A({type:M,payload:e.t0.response.data});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(){return(l=Object(ie.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.post("/api/auth",t);case 3:n=e.sent,A({type:K,payload:n.data}),s(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),A({type:J,payload:e.t0.response.data});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(h.jsx)(d.Provider,{value:{token:r.token,user:r.user,isAuthenticated:r.isAuthenticated,loading:r.loading,errors:r.errors,loadUser:s,registerUser:function(e){return i.apply(this,arguments)},login:function(e){return l.apply(this,arguments)},logout:function(){A({type:Z})},clearErrors:function(){A({type:W})}},children:e.children})};function he(e,t){var n;switch(t.type){case w:return Object(l.a)(Object(l.a)({},e),{},{contacts:t.payload,loading:!1});case Q:return Object(l.a)(Object(l.a)({},e),{},{contacts:[t.payload].concat(Object(ce.a)(e.contacts)),loading:!1});case I:return Object(l.a)(Object(l.a)({},e),{},{filtered:e.filtered&&e.filtered.filter((function(e){return e._id!==t.payload})),contacts:e.contacts.filter((function(e){return e._id!==t.payload})),loading:!1});case F:return Object(l.a)(Object(l.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.payload._id?t.payload:e})),loading:!1});case U:return Object(l.a)(Object(l.a)({},e),{},{current:t.payload});case S:return Object(l.a)(Object(l.a)({},e),{},{current:null});case v:return Object(l.a)(Object(l.a)({},e),{},{filter:t.payload});case y:var a=t.payload.toLowerCase();return Object(l.a)(Object(l.a)({},e),{},{filtered:e.contacts.filter((function(e){var t,n,c;return e.name.toLowerCase().includes(a)||(null===(t=e.surname)||void 0===t?void 0:t.toLowerCase().includes(a))||(null===(n=e.email)||void 0===n?void 0:n.toLowerCase().includes(a))||(null===(c=e.phone)||void 0===c?void 0:c.toString().includes(a))}))});case G:return Object(l.a)(Object(l.a)({},e),{},{current:null,filtered:null,filter:"",contacts:null,errors:[]});case R:return Object(l.a)(Object(l.a)({},e),{},{filtered:null});case D:return Object(l.a)(Object(l.a)({},e),{},{errors:(null===(n=t.payload)||void 0===n?void 0:n.errors)||[]});default:return e}}var pe=function(e){var t=Object(a.useReducer)(he,{current:null,filtered:null,filter:"",contacts:null,errors:[]}),n=Object(u.a)(t,2),c=n[0],r=n[1];function A(){return(A=Object(ie.a)(oe.a.mark((function e(){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.get("/api/contacts");case 3:t=e.sent,r({type:w,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r({type:D,payload:e.t0.response.data});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function s(){return(s=Object(ie.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.post("/api/contacts",t);case 3:n=e.sent,r({type:Q,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r({type:D,payload:e.t0.response.data});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(){return(o=Object(ie.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.delete("/api/contacts/".concat(t));case 3:r({type:I,payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r({type:D,payload:e.t0.response.data});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function i(){return(i=Object(ie.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.put("/api/contacts/".concat(t._id),t);case 3:n=e.sent,r({type:F,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r({type:D,payload:e.t0.response.data});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(h.jsx)(C.Provider,{value:{current:c.current,contacts:c.contacts,filtered:c.filtered,filter:c.filter,errors:c.errors,getContacts:function(){return A.apply(this,arguments)},addContact:function(e){return s.apply(this,arguments)},deleteContact:function(e){return o.apply(this,arguments)},updateContact:function(e){return i.apply(this,arguments)},setCurrent:function(e){r({type:U,payload:e})},clearCurrent:function(){r({type:S})},filterContacts:function(e){r({type:y,payload:e})},setFilter:function(e){r({type:v,payload:e})},clearFilter:function(e){r({type:R})},clearContacts:function(){r({type:G})}},children:e.children})},be=n(39),ge=[function(e){return"get"===e.method&&e.url.includes("auth")},function(e){return e.url.includes("contacts")}];ue.a.defaults.headers.common["Content-Type"]="application/json",ue.a.defaults.headers.common.Accept="application/json",ue.a.interceptors.request.use((function(e){var t,n=Object(be.a)(ge);try{for(n.s();!(t=n.n()).done;)if((0,t.value)(e)){var a=localStorage.getItem("token");return a&&(e.headers["x-auth-token"]=a),e}}catch(c){n.e(c)}finally{n.f()}return e}),(function(e){return Promise.reject(e)}));var Be=function(){return Object(h.jsx)(de,{children:Object(h.jsx)(Ae,{children:Object(h.jsx)(pe,{children:Object(h.jsx)(s.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{}),Object(h.jsxs)(o.d,{children:[Object(h.jsx)(te,{exact:!0,path:"/",component:_}),Object(h.jsx)(o.b,{exact:!0,path:"/register",component:b}),Object(h.jsx)(o.b,{exact:!0,path:"/login",component:p}),Object(h.jsx)(o.b,{exact:!0,path:"/about",component:f}),Object(h.jsx)(o.b,{component:$})]})]})]})})})})})};A.a.render(Object(h.jsx)(c.a.Fragment,{children:Object(h.jsx)(Be,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.5b60f859.chunk.js.map