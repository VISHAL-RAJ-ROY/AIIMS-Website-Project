(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),o=a(12),s=a(13),c=a(15),u=a(14),p=a(16),h=(a(79),a(143)),m=a(147),d=a(160),g=a(145),f=a(146),b=a(52),E=Object(h.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:2}}});function v(e){var t=E();return r.a.createElement(g.a,{position:"sticky"},r.a.createElement(f.a,null,r.a.createElement(b.a,{variant:"h3",className:t.title},e.title)))}var C=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){console.log("Logging Out");var t=[];t.push(r.a.createElement(re,{logOut:!0,appContext:this.props.appContext,key:1})),this.props.appContext.setState({loginPage:t,downloadScreen:[]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v,{title:"Dashboard"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"Welcome to the #1 Medical Dataset!!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(t){return e.handleClick(t)}},"Log Out"))}}]),t}(n.Component),O=a(20),k=a(43),y=a(48),j=a(149),S=a(164),x=a(163),w=a(148),D=a(157),L=Object(h.a)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(0),minWidth:180},selectEmpty:{marginTop:e.spacing(2)}}});function R(e,t){var a=L(),n=r.a.useState({label:""}),l=Object(y.a)(n,2),i=l[0],o=l[1];return r.a.createElement("form",{autoComplete:"off"},r.a.createElement(w.a,{className:a.formControl},r.a.createElement(S.a,{htmlFor:"age-helper"},"Position"),r.a.createElement(D.a,{value:i.age,onChange:function(t){e.handlePosition(t.target.value),o(function(e){return Object(k.a)({},e,Object(O.a)({},t.target.name,t.target.value))})},input:r.a.createElement(j.a,{name:"age",id:"age-helper"})},r.a.createElement(x.a,{value:""},r.a.createElement("em",null,"Select Position")),r.a.createElement(x.a,{value:"Researcher"},"Researcher"),r.a.createElement(x.a,{value:"Student"},"Student"),r.a.createElement(x.a,{value:"Doctor"},"Doctor"))))}a(58);var N=a(161),P=a(153),W=a(151),G=a(152),M=a(150),I=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(N.a,{open:this.props.isOpen,onClose:function(){return e.props.handleClose()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(M.a,{id:"alert-dialog-title"},this.props.title),""!=this.props.content&&r.a.createElement(W.a,null,r.a.createElement(G.a,{id:"alert-dialog-description"},this.props.content)),r.a.createElement(P.a,null,r.a.createElement(m.a,{color:"primary",onClick:function(){return e.props.handleClose()}},this.props.buttonLabel)))}}]),t}(n.Component);I.defaultProps={isOpen:!1,content:"",buttonLabel:"OK",title:"All Fields are Required!"};var A=I,T=Object(h.a)(function(e){return{button:{margin:e.spacing(1)}}});function _(e){var t=T();return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",color:"primary",className:t.button,styles:F,onClick:function(){return e.func.handleClickLanding()}},"Landingpage"),r.a.createElement(m.a,{variant:"contained",color:"primary",className:t.button,styles:F,onClick:function(){return e.self.handleClick()}},"Submit"),r.a.createElement(m.a,{variant:"contained",color:"primary",className:t.button,styles:F,onClick:function(){return e.func.handleClickRegister()}},"Register"))}var B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isDialogOpen2:a.props.registrationSuccess,isDialogOpen:!1,username:"",position:"",password:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.state.username,this.state.position,this.state.password;if(console.log(this.state.position),""==this.state.username||""==this.state.position||""==this.state.password)this.setState({isDialogOpen:!0});else{console.log("Login successfull");var e=[];e.push(r.a.createElement(C,{appContext:this.props.appContext,key:1})),this.props.appContext.setState({loginPage:[],downloadScreen:e})}}},{key:"handleClose",value:function(){this.setState({isDialogOpen:!1})}},{key:"handleClose2",value:function(){this.setState({isDialogOpen2:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(A,{isOpen:this.state.isDialogOpen2,title:"Registration Successful!",handleClose:function(){return e.handleClose2()},content:"You can now LogIn with your credentials."}),r.a.createElement(A,{isOpen:this.state.isDialogOpen,handleClose:function(){return e.handleClose()}}),r.a.createElement(v,{title:"Login"}),r.a.createElement("br",null),r.a.createElement(d.a,{id:"standard-with-placeholder",label:"Username",placeholder:"Enter your Username",margin:"normal",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(R,{labelText:"Position",handlePosition:function(t){e.setState({position:t})}}),r.a.createElement("br",null),r.a.createElement(d.a,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",margin:"normal",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_,{func:this.props.parentContext,self:this}))}}]),t}(n.Component),F={margin:15,align:"center"},J=B,U=(a(84),Object(h.a)(function(e){return{button:{margin:e.spacing(1)}}}));function q(e){var t=U();return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.func.handleClickLanding()}},"Landingpage"),r.a.createElement(m.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.self.handleClick()}},"Submit"),r.a.createElement(m.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.refreshRegister()}},"Clear"))}var K=a(4),Y=a(154),$=a(155),z=a(156),H=a(159),Q=Object(K.a)({root:{color:Y.a[400],"&$checked":{color:Y.a[600]}},checked:{}})(function(e){return r.a.createElement(H.a,Object.assign({color:"default"},e))}),V=Object(h.a)(function(e){return{root:{maxWidth:"500px"}}});function X(e){var t,a=V(),n=r.a.useState({checkedG:!1}),l=Object(y.a)(n,2),i=l[0],o=l[1];return r.a.createElement(w.a,{component:"fieldset",className:a.root},r.a.createElement($.a,null,r.a.createElement(z.a,{control:r.a.createElement(Q,{checked:i.checkedG,onChange:(t="checkedG",function(a){e.handleChangeCheckbox(),o(Object(k.a)({},i,Object(O.a)({},t,a.target.checked)))}),value:"checkedG"}),labelPlacement:"bottom",label:e.text})))}var Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={first_name:""},a.simpleSelect=r.a.createRef(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"refreshRegister",value:function(){this.setState({email:"",name:"",affiliation:"",position:"",address:"",country:"",purpose:""})}},{key:"render",value:function(){var e,t,a=this;return r.a.createElement("div",null,r.a.createElement(d.a,{id:"standard-with-placeholder",label:"Name",placeholder:"Enter Name",margin:"normal",multiline:!0,value:this.state.name,onChange:function(e){a.setState({name:e.target.value}),a.props.parent.setState({name:e.target.value})}}),r.a.createElement("br",null),r.a.createElement(d.a,{id:"standard-with-placeholder",label:"Email",placeholder:"Enter your Email",margin:"normal",multiline:!0,value:this.state.email,onChange:function(e){a.setState({email:e.target.value}),a.props.parent.setState({email:e.target.value})}}),r.a.createElement("br",null),r.a.createElement(d.a,{id:"standard-with-placeholder",label:"Institute",placeholder:"Enter your Institute",margin:"normal",multiline:!0,value:this.state.affiliation,onChange:function(e){a.setState({affiliation:e.target.value}),a.props.parent.setState({affiliation:e.target.value})}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(R,{labelText:"Position",handlePosition:function(e){a.setState({position:e}),a.props.parent.setState({position:e})}}),r.a.createElement(d.a,(e={id:"standard-with-placeholder",label:"Address",placeholder:"Enter your Address",multiline:!0},Object(O.a)(e,"multiline",!0),Object(O.a)(e,"margin","normal"),Object(O.a)(e,"value",this.state.address),Object(O.a)(e,"onChange",function(e){a.setState({address:e.target.value}),a.props.parent.setState({address:e.target.value})}),e)),r.a.createElement("br",null),r.a.createElement(d.a,{id:"standard-with-placeholder",label:"Country",placeholder:"Enter your Country",margin:"normal",multiline:!0,value:this.state.country,onChange:function(e){a.setState({country:e.target.value}),a.props.parent.setState({country:e.target.value})}}),r.a.createElement("br",null),r.a.createElement(d.a,(t={id:"standard-with-placeholder",label:"Mission",multiline:!0,placeholder:"We would love to know why are you here?",margin:"normal"},Object(O.a)(t,"multiline",!0),Object(O.a)(t,"value",this.state.purpose),Object(O.a)(t,"onChange",function(e){a.setState({purpose:e.target.value}),a.props.parent.setState({purpose:e.target.value})}),t)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(X,{text:"I take oath to to treat the ill to the best of one's ability, to preserve a patient's privacy.",handleChangeCheckbox:function(){return a.props.parent.handleChangeCheckbox()}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(q,{func:this.props.parent.props.parentContext,self:this.props.parent,refreshRegister:function(){return a.refreshRegister()}}))}}]),t}(n.Component),ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isDialogOpen:!1,isDialogOpen2:!1,email:"",name:"",affiliation:"",position:"",address:"",country:"",purpose:"",isChecked:!1,formEntry:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=[];e.push(r.a.createElement(Z,{parent:this,key:1})),this.setState({formEntry:e})}},{key:"handleClick",value:function(){console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.role);this.state.name,this.state.position,this.state.affiliation,this.state.purpose,this.state.country,this.state.email,this.state.address;if(""==this.state.position||""==this.state.email||""==this.state.purpose||""==this.state.name||""==this.state.affiliation||""==this.state.country||""==this.state.address)this.setState({isDialogOpen:!0});else if(this.state.isChecked){var e=[];e.push(r.a.createElement(J,{registrationSuccess:!0,parentContext:this.props.parentContext,appContext:this.props.appContext,key:1}));this.props.parentContext.setState({loginscreen:e,loginmessage:"Not Registered yet, Go to registration.",buttonLabel:"Register",isLogin:!0})}else this.setState({isDialogOpen2:!0})}},{key:"handleClose",value:function(){this.setState({isDialogOpen:!1})}},{key:"handleClose2",value:function(){this.setState({isDialogOpen2:!1})}},{key:"handleChangeCheckbox",value:function(){this.setState({isChecked:!this.state.isChecked})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(A,{isOpen:this.state.isDialogOpen,handleClose:function(){return e.handleClose()}}),r.a.createElement(A,{isOpen:this.state.isDialogOpen2,handleClose:function(){return e.handleClose2()},content:"Please accept the terms and conditions :)"}),r.a.createElement(v,{title:"Register"}),this.state.formEntry)}}]),t}(n.Component),te=Object(h.a)(function(e){return{button:{margin:e.spacing(1)}}});function ae(e){var t=te();return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.func.handleClickLogin()}},"Login"),r.a.createElement(m.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.func.handleClickRegister()}},"Register"))}var ne=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Database!!"),r.a.createElement(ae,{func:this.props.parentContext}))}}]),t}(n.Component),re=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isDialogOpenLogOut:a.props.logOut,username:"",role:"",password:"",loginscreen:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleCloseLogOut",value:function(){this.setState({isDialogOpenLogOut:!1})}},{key:"handleClickLogin",value:function(){var e=[];e.push(r.a.createElement(J,{parentContext:this,appContext:this.props.appContext,key:1})),this.setState({loginscreen:e})}},{key:"handleClickRegister",value:function(){var e=[];console.log("in handle Click register"),e.push(r.a.createElement(ee,{parentContext:this,appContext:this.props.appContext,key:1})),this.setState({loginscreen:e})}},{key:"handleClickLanding",value:function(){var e=[];e.push(r.a.createElement(ne,{parentContext:this,key:1})),this.setState({loginscreen:e})}},{key:"componentWillMount",value:function(){var e=[];e.push(r.a.createElement(ne,{parentContext:this,key:1})),this.setState({loginscreen:e})}},{key:"render",value:function(){var e=this;return console.log(this.props.appContext),r.a.createElement("div",{className:"loginscreen"},r.a.createElement(A,{isOpen:this.state.isDialogOpenLogOut,title:"Successfully Logged Out!",handleClose:function(){return e.handleCloseLogOut()}}),this.state.loginscreen)}}]),t}(n.Component),le=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loginPage:[],downloadScreen:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=[];e.push(r.a.createElement(re,{logOut:!1,appContext:this,key:1})),this.setState({loginPage:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},this.state.loginPage,this.state.downloadScreen)}}]),t}(n.Component);i.a.render(r.a.createElement(le,null),document.getElementById("root"))},58:function(e,t,a){},74:function(e,t,a){e.exports=a(102)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.def6446e.chunk.js.map