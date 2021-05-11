(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(21),i=a.n(c),r=(a(53),a(30)),l=a(6),o=(a(54),a(8)),j=a(9),d=a(12),h=a(11),b=a(26),u=a(31),O=a.n(u),m={API_URL:"http://localhost:8000/api"},p=new function e(){Object(o.a)(this,e),this.register=function(e){var t=m.API_URL;return O.a.post("".concat(t,"/register"),e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return e.response}))},this.login=function(e){var t=m.API_URL;return O.a.post("".concat(t,"/login"),e,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return e.response}))}},x=a(88),v=a(87),g=a(85),f=a(89),w=a(86),N=a(15),y=a(14),T=a(19),C=(a(43),a(1)),S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(b.a)({},e.target.name,e.target.value))},s.showHidePwd=function(){s.setState({pwdType:"input"===s.state.pwdType?"password":"input"})},s.handleSubmit=function(e){e.preventDefault(),s.setState({loadingFlag:!0});var t={email:s.state.email,password:s.state.password};p.login(t).then((function(e){s.setState({loadingFlag:!1}),400===e.status?T.b.error(e.data.error,{position:T.b.POSITION.TOP_RIGHT}):(T.b.success("Login success",{position:T.b.POSITION.TOP_RIGHT,autoClose:3e3}),s.setState({email:"",password:"",showModal:!1}),localStorage.setItem("user",JSON.stringify(e.user)),setTimeout((function(){return localStorage.setItem("token",e.token)}),3001),setTimeout((function(){return s.props.history.push("/dashboard")}),3002))})).catch((function(e){console.log("Error:",e)}))},s.logOut=function(){localStorage.clear(),s.props.history.push("/")},s.state={showModal:!1,email:"",password:"",loadingFlag:!1,pwdType:"password"},s}return Object(j.a)(a,[{key:"render",value:function(){var e=this,t=localStorage.getItem("user"),a="";return null!==t&&(a=JSON.parse(t).name),Object(C.jsxs)("div",{children:[Object(C.jsx)("nav",{className:"navbar top-navbar col-lg-12 col-12 p-0",children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("div",{className:"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center",children:Object(C.jsx)("a",{className:"navbar-brand brand-logo",href:"/",children:Object(C.jsx)("img",{src:window.location.origin+"/assets/image/LogoPNG.png",alt:"logo"})})}),null===localStorage.getItem("token")?Object(C.jsx)("div",{style:{marginLeft:"auto"},children:Object(C.jsx)(x.a,{variant:"primary",onClick:function(){return e.setState({showModal:!0})},children:"LOG IN"})}):Object(C.jsxs)("div",{className:"d-flex",style:{marginLeft:"auto"},children:[Object(C.jsx)("h5",{className:"mt-auto mb-auto",style:{marginRight:"1rem"},children:a}),Object(C.jsx)("div",{children:Object(C.jsx)(x.a,{variant:"danger",onClick:this.logOut,children:"LOG OUT"})})]}),Object(C.jsx)("div",{className:"navbar-menu-wrapper d-flex align-items-center justify-content-end",children:Object(C.jsx)("button",{className:"navbar-toggler navbar-toggler-right d-lg-none align-self-center",type:"button","data-toggle":"horizontal-menu-toggle"})})]})}),Object(C.jsxs)(v.a,{show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})},backdrop:"static",children:[Object(C.jsx)(v.a.Header,{children:Object(C.jsx)(v.a.Title,{children:"Login"})}),Object(C.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(C.jsxs)(v.a.Body,{children:[Object(C.jsxs)("div",{className:"form-group mb-3",children:[Object(C.jsx)("label",{children:"Email"}),Object(C.jsxs)(g.a,{children:[Object(C.jsx)(g.a.Append,{children:Object(C.jsx)(g.a.Text,{className:"h-100",children:Object(C.jsx)(y.a,{icon:N.a})})}),Object(C.jsx)(f.a,{type:"email",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange,required:!0})]})]}),Object(C.jsxs)("div",{className:"form-group mb-3",children:[Object(C.jsx)("label",{htmlFor:"password",children:"Password"}),Object(C.jsxs)(g.a,{children:[Object(C.jsx)(g.a.Append,{children:Object(C.jsx)(g.a.Text,{className:"h-100",children:Object(C.jsx)(y.a,{icon:N.d})})}),Object(C.jsx)(f.a,{placeholder:"Create Password",type:this.state.pwdType,value:this.state.password,id:"password",name:"password",onChange:this.handleChange,required:!0}),Object(C.jsx)(g.a.Append,{onClick:this.showHidePwd,children:Object(C.jsx)(g.a.Text,{className:"h-100",children:"input"===this.state.pwdType?Object(C.jsx)(y.a,{icon:N.c}):Object(C.jsx)(y.a,{icon:N.b})})})]})]})]}),Object(C.jsxs)(v.a.Footer,{children:[Object(C.jsxs)(x.a,{type:"submit",variant:"primary",children:["Login",!0===this.state.loadingFlag?Object(C.jsx)(w.a,{animation:"border"}):""]}),Object(C.jsx)(x.a,{variant:"secondary",onClick:function(){return e.setState({showModal:!1})},children:"Close"})]})]})]}),Object(C.jsx)(T.a,{})]})}}]),a}(s.Component),k=Object(l.e)(S),I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(b.a)({},e.target.name,e.target.value))},s.showHidePwd=function(){s.setState({pwdType:"input"===s.state.pwdType?"password":"input"})},s.showHideConfirm=function(){s.setState({confirmType:"input"===s.state.confirmType?"password":"input"})},s.handleSubmit=function(e){e.preventDefault(),s.setState({loadingFlag:!0});var t={name:s.state.siteName,email:s.state.email,password:s.state.password,password_confirmation:s.state.cpassword};p.register(t).then((function(e){if(s.setState({loadingFlag:!1}),400===e.status)for(var t=JSON.parse(e.data),a=0;a<Object.keys(t).length;a++)T.b.error(Object.keys(t)[a]+" : "+Object.values(t)[a][0],{position:T.b.POSITION.TOP_RIGHT});else T.b.success("Registered Successfully",{position:T.b.POSITION.TOP_RIGHT}),s.setState({siteName:"",email:"",password:"",cpassword:""})})).catch((function(e){console.log("Error:",e)}))},s.state={pwdType:"password",confirmType:"password",password:"",cpassword:"",siteName:"",email:"",loadingFlag:!1},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"mt-5",children:[Object(C.jsx)("h3",{children:"Registration"}),Object(C.jsxs)("form",{onSubmit:this.handleSubmit,className:"col-md-6 mt-5",children:[Object(C.jsxs)("div",{className:"form-group mb-3",children:[Object(C.jsx)("label",{children:"Site Username (Not your IGN)"}),Object(C.jsxs)(g.a,{children:[Object(C.jsx)(g.a.Append,{children:Object(C.jsx)(g.a.Text,{className:"h-100",children:Object(C.jsx)(y.a,{icon:N.e})})}),Object(C.jsx)(f.a,{placeholder:"Site Name",value:this.state.siteName,name:"siteName",onChange:this.handleChange,required:!0})]})]}),Object(C.jsxs)("div",{className:"form-group mb-3",children:[Object(C.jsx)("label",{children:"Email"}),Object(C.jsxs)(g.a,{children:[Object(C.jsx)(g.a.Append,{children:Object(C.jsx)(g.a.Text,{className:"h-100",children:Object(C.jsx)(y.a,{icon:N.a})})}),Object(C.jsx)(f.a,{type:"email",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange,required:!0})]})]}),Object(C.jsxs)("div",{className:"form-group mb-3",children:[Object(C.jsx)("label",{htmlFor:"password",children:"Password"}),Object(C.jsxs)(g.a,{children:[Object(C.jsx)(g.a.Append,{children:Object(C.jsx)(g.a.Text,{className:"h-100",children:Object(C.jsx)(y.a,{icon:N.d})})}),Object(C.jsx)(f.a,{placeholder:"Create Password",type:this.state.pwdType,value:this.state.password,id:"password",name:"password",onChange:this.handleChange,required:!0}),Object(C.jsx)(g.a.Append,{onClick:this.showHidePwd,children:Object(C.jsx)(g.a.Text,{className:"h-100",children:"input"===this.state.pwdType?Object(C.jsx)(y.a,{icon:N.c}):Object(C.jsx)(y.a,{icon:N.b})})})]})]}),Object(C.jsxs)("div",{className:"form-group mb-3",children:[Object(C.jsx)("label",{htmlFor:"confirm-pwd",children:"Confirm Password"}),Object(C.jsxs)(g.a,{children:[Object(C.jsx)(g.a.Append,{children:Object(C.jsx)(g.a.Text,{className:"h-100",children:Object(C.jsx)(y.a,{icon:N.d})})}),Object(C.jsx)(f.a,{placeholder:"Confirm Password",type:this.state.confirmType,value:this.state.cpassword,id:"confirm-pwd",name:"cpassword",onChange:this.handleChange,required:!0}),Object(C.jsx)(g.a.Append,{onClick:this.showHideConfirm,children:Object(C.jsx)(g.a.Text,{className:"h-100",children:"input"===this.state.confirmType?Object(C.jsx)(y.a,{icon:N.c}):Object(C.jsx)(y.a,{icon:N.b})})})]})]}),Object(C.jsx)("div",{className:"text-right",children:Object(C.jsxs)(x.a,{variant:"success",type:"submit",children:["CREATE ACCOUNT",!0===this.state.loadingFlag?Object(C.jsx)(w.a,{animation:"border"}):""]})})]}),Object(C.jsx)(T.a,{})]})}}]),a}(s.Component),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("token")&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(k,{}),Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("div",{className:"mt-4 mb-5",children:Object(C.jsx)("h1",{children:"Welcome info"})}),Object(C.jsx)(I,{})]})]})}}]),a}(s.Component),F=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){var e=window.location.pathname.substr(1);return Object(C.jsx)("nav",{className:"bottom-navbar",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("ul",{className:"nav page-navigation",children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)("a",{className:"nav-link",href:"/dashboard",children:Object(C.jsx)("span",{className:"dashboard"===e?"menu-title text-primary":"menu-title",children:"Dashboard"})})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)("a",{className:"nav-link",href:"/sell",children:Object(C.jsx)("span",{className:"sell"===e?"menu-title text-primary":"menu-title",children:"Sell"})})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)("a",{href:"/buy",className:"nav-link",children:Object(C.jsx)("span",{className:"buy"===e?"menu-title text-primary":"menu-title",children:"Buy"})})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)("a",{href:"/security",className:"nav-link",children:Object(C.jsx)("span",{className:"security"===e?"menu-title text-primary":"menu-title",children:"Security"})})})]})})})}}]),a}(s.Component),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(k,{}),Object(C.jsx)(F,{}),Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"mt-4 mb-5",children:Object(C.jsx)("h1",{children:"Dashboard"})})})]})}}]),a}(s.Component),L=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(k,{}),Object(C.jsx)(F,{}),Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"mt-4 mb-5",children:Object(C.jsx)("h1",{children:"Sell"})})})]})}}]),a}(s.Component),H=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(k,{}),Object(C.jsx)(F,{}),Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"mt-4 mb-5",children:Object(C.jsx)("h1",{children:"Buy"})})})]})}}]),a}(s.Component),R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(k,{}),Object(C.jsx)(F,{}),Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"mt-4 mb-5",children:Object(C.jsx)("h1",{children:"Security"})})})]})}}]),a}(s.Component);var E=function(){return Object(C.jsxs)(r.a,{children:[Object(C.jsx)(l.a,{exact:!0,path:"/",component:P}),Object(C.jsx)(l.a,{exact:!0,path:"/dashboard",component:A}),Object(C.jsx)(l.a,{exact:!0,path:"/sell",component:L}),Object(C.jsx)(l.a,{exact:!0,path:"/buy",component:H}),Object(C.jsx)(l.a,{exact:!0,path:"/security",component:R})]})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};a(81),a(82);i.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(E,{})}),document.getElementById("root")),G()}},[[83,1,2]]]);
//# sourceMappingURL=main.e4e309f2.chunk.js.map