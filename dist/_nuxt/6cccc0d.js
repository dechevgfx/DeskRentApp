(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{287:function(e,t,l){e.exports=l.p+"img/sign-up.9ebf48b.jpeg"},291:function(e,t,l){"use strict";l.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-image"},[t("img",{attrs:{src:l(287),alt:""}})])}],n={data:function(){return{fullName:"",email:"",password:""}},methods:{handleRegister:function(e){e.preventDefault(),this.$store.commit("register",[fullName.value,email.value,password.value]),this.$router.push("/rooms")}},computed:{error:function(){return this.$store.state.error}}},o=l(36),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"login container"},[l("div",{staticClass:"login-container"},[l("h2",[e._v("Welcome , Let's get started")]),e._v(" "),l("p",[e._v("Already have account "),l("nuxt-link",{staticClass:"container-line",attrs:{to:"/login"}},[e._v("Log In")])],1),e._v(" "),l("form",[l("span",[e._v("Enter Your Email")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",name:"email",id:"email",placeholder:"yourmail@gmail.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),l("span",{attrs:{for:"fullName"}},[e._v("Full Name")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],attrs:{type:"text",name:"fullName",id:"fullName",placeholder:"Full Name"},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}}),e._v(" "),l("span",[e._v("Enter Your Password")]),e._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),l("button",{staticClass:"btn",on:{click:e.handleRegister}},[e._v("\n                Register\n            ")])])]),e._v(" "),e._m(0)])}),r,!1,null,null,null);t.default=component.exports}}]);