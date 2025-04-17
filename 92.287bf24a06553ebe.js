"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[92],{9092:(K,M,c)=>{c.r(M),c.d(M,{AuthModule:()=>W});var l=c(177),i=c(9417),u=c(6215),t=c(4438),g=c(6627),b=c(8005),f=c(509),m=c(1923),h=c(229),d=c(8018);const O=()=>["/auth/forget-password"];function P(o,p){if(1&o&&(t.j41(0,"div",28),t.EFF(1),t.k0s()),2&o){const e=t.XpG();t.R7$(),t.SpI(" ",e.errorMessage," ")}}let k=(()=>{class o{constructor(e,n,r,a,s){this.router=e,this.route=n,this.injector=r,this.alertService=a,this.authService=s,this.errorMessage=null,this.isLogin=!0,this.loginForm=new i.gE({phone:new i.MJ(null,[i.k0.required]),password:new i.MJ(null)})}ngOnInit(){this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}onLoggedin(e){e.preventDefault(),localStorage.setItem("isLoggedin","true"),localStorage.getItem("isLoggedin")&&this.router.navigate([this.returnUrl])}onSubmit(e){this.injector.get(u.u).login(this.loginForm.value).subscribe({next:r=>{this.alertService.toast({severity:"success",summary:"",detail:r.message}),this.onLoggedin(e),this.loginForm.reset(),localStorage.setItem("token",r.data.token),localStorage.setItem("userInfo",JSON.stringify(r.data)),this.authService.hasToken(),this.authService.authState.next(!0),this.router.navigate("client"!=r.data.role?["/admin"]:["/user/userdashboard/welcome"])},error:r=>this.errorMessage=r.error.errors})}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(g.Ix),t.rXU(g.nX),t.rXU(t.zZn),t.rXU(b.n),t.rXU(u.u))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-login"]],decls:51,vars:35,consts:[[3,"isLogin"],[1,"contact"],[1,"container"],[1,"row"],[1,"col-lg-6","mt-5","px-5"],[1,"text-box","mb-5","text-center"],["src","../../../../assets/logo/logo.png","alt","we print logo",1,"img-fluid","mb-5"],[1,"h4"],[1,"contact-main-p","mb-5"],[1,"forms-sample",3,"formGroup"],[1,"col-md-12","mb-2"],[1,"mb-3"],["for","phone",1,"form-label"],[1,"text-danger","d-inline-block"],["dir","rtl","type","tel","id","phone","required","","formControlName","phone",1,"form-control",3,"placeholder"],["for","password",1,"form-label"],["id","password","formControlName","password",3,"placeholder","feedback","toggleMask"],[1,"fw-bolder","forget-password",3,"routerLink"],[1,"col-md-12","w-100"],["type","submit",1,"main-btn","mt-5","w-100",3,"click","disabled"],["class","error-message text-danger",4,"ngIf"],[1,"social-p","my-5","text-center"],[1,"social-box","text-center"],[1,"fa-brands","fa-facebook-f"],[1,"fa-brands","fa-apple"],[1,"fa-brands","fa-google"],[1,"col-lg-6","justify-content-end","d-none","d-lg-flex"],["src","../../../../assets/images/login.png","alt","login image",1,"img-fluid"],[1,"error-message","text-danger"]],template:function(n,r){1&n&&(t.nrm(0,"app-navbar",0),t.j41(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.nrm(6,"img",6),t.j41(7,"h2",7),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"p",8),t.EFF(11),t.nI1(12,"translate"),t.k0s()(),t.j41(13,"form",9)(14,"div",3)(15,"div",10)(16,"div",11)(17,"label",12),t.EFF(18),t.nI1(19,"translate"),t.j41(20,"span",13),t.EFF(21,"*"),t.k0s()(),t.nrm(22,"input",14),t.nI1(23,"translate"),t.k0s()(),t.j41(24,"div",10)(25,"div",11)(26,"label",15),t.EFF(27),t.nI1(28,"translate"),t.j41(29,"span",13),t.EFF(30,"*"),t.k0s()(),t.nrm(31,"p-password",16),t.nI1(32,"translate"),t.k0s()(),t.j41(33,"span",17),t.EFF(34),t.nI1(35,"translate"),t.k0s(),t.j41(36,"div",18)(37,"button",19),t.bIt("click",function(s){return r.onSubmit(s)}),t.EFF(38),t.nI1(39,"translate"),t.k0s()(),t.DNE(40,P,2,1,"div",20),t.k0s()(),t.j41(41,"p",21),t.EFF(42),t.nI1(43,"translate"),t.k0s(),t.j41(44,"div",22),t.nrm(45,"i",23)(46,"i",24)(47,"i",25),t.k0s()(),t.j41(48,"div",26),t.nrm(49,"img",27),t.k0s()()()(),t.nrm(50,"app-footer")),2&n&&(t.Y8G("isLogin",r.isLogin),t.R7$(8),t.JRh(t.bMT(9,16,"Welcome back")),t.R7$(3),t.SpI(" ",t.bMT(12,18,"login-main-p")," "),t.R7$(2),t.Y8G("formGroup",r.loginForm),t.R7$(5),t.SpI("",t.bMT(19,20,"phone")," "),t.R7$(4),t.Y8G("placeholder",t.bMT(23,22,"phone")),t.R7$(5),t.SpI("",t.bMT(28,24,"Password")," "),t.R7$(4),t.Y8G("placeholder",t.bMT(32,26,"Password"))("feedback",!1)("toggleMask",!0),t.R7$(2),t.Y8G("routerLink",t.lJ4(34,O)),t.R7$(),t.JRh(t.bMT(35,28,"Do yo forget password")),t.R7$(3),t.Y8G("disabled",r.loginForm.invalid),t.R7$(),t.SpI(" ",t.bMT(39,30,"Login")," "),t.R7$(2),t.Y8G("ngIf",r.errorMessage),t.R7$(2),t.JRh(t.bMT(43,32,"social-p")))},dependencies:[l.bT,g.Wk,i.qT,i.me,i.BC,i.cb,i.YS,i.j4,i.JD,f.n,m._,h._2,d.D9],styles:[".contact[_ngcontent-%COMP%]{min-height:70vh}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{color:#31363f;font-size:32px;font-weight:bolder;line-height:51.2px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .contact-main-p[_ngcontent-%COMP%]{font-size:24px;font-weight:400;color:#555874;line-height:38.4px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-weight:400}.contact[_ngcontent-%COMP%]   .social-p[_ngcontent-%COMP%]{font-size:20px;line-height:24.2px;font-weight:500}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;width:40px;height:40px;line-height:40px;border-radius:50%;border:1px solid;margin-left:5px;margin-right:5px;cursor:pointer;font-size:14px;color:#fff}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-facebook-f[_ngcontent-%COMP%]{background-color:#006ffd}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-apple[_ngcontent-%COMP%]{background-color:#1f2024}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-google[_ngcontent-%COMP%]{background-color:#ed3241}.forget-password[_ngcontent-%COMP%]{color:#31363f;font-size:12px;cursor:pointer}"]})}}return o})();var I=c(467);function w(o,p){1&o&&(t.j41(0,"a",27),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&o&&(t.R7$(),t.JRh(t.bMT(2,1,"Login")))}function F(o,p){if(1&o&&(t.j41(0,"div",25),t.EFF(1),t.DNE(2,w,3,3,"a",26),t.k0s()),2&o){const e=t.XpG();t.R7$(),t.SpI(" ",e.errorMessage," "),t.R7$(),t.Y8G("ngIf","\u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0648\u062c\u0648\u062f \u0628\u0627\u0644\u0641\u0639\u0644"==e.errorMessage)}}let T=(()=>{class o{constructor(e,n){this.router=e,this.injector=n,this.isSignup=!0,this.errorMessage=null,this.registerForm=new i.gE({verifiable:new i.MJ(null,[i.k0.required])})}ngOnInit(){}onLoggedin(e){e.preventDefault(),localStorage.setItem("isLoggedin","true"),localStorage.getItem("isLoggedin")&&this.router.navigate(["/"])}onRegister(e){let n={sending_type:"phone",continue_process:!0,...this.registerForm.value};this.injector.get(u.u).register(n).subscribe({next:a=>{console.log("res",a),localStorage.setItem("sending_type","phone"),localStorage.setItem("verifiable",this.registerForm.value.verifiable),localStorage.setItem("otp_secret",a.data.code),this.clearAllIndexedDB(),this.router.navigate(["auth/activate-account"])},error:a=>this.errorMessage=a.error.errors})}clearAllIndexedDB(){return(0,I.A)(function*(){if(!indexedDB.databases)return void console.warn("This browser does not support indexedDB.databases API; manual database names needed.");const e=yield indexedDB.databases();for(const n of e)n.name&&indexedDB.deleteDatabase(n.name);console.log("All IndexedDB databases cleared.")})()}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(g.Ix),t.rXU(t.zZn))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-register"]],decls:39,vars:22,consts:[[3,"isSignup"],[1,"contact"],[1,"container"],[1,"row"],[1,"col-lg-6","mt-5","px-5"],[1,"text-box","mb-5","text-center"],["src","../../../../assets/logo/logo.png","alt","we print logo",1,"img-fluid","mb-5"],[1,"h4"],[1,"contact-main-p","mb-5"],[1,"forms-sample",3,"formGroup"],[1,"col-md-12","mb-2"],[1,"mb-3"],["for","phone",1,"form-label"],[1,"text-danger","d-inline-block"],["dir","rtl","type","tel","id","phone","required","","formControlName","verifiable",1,"form-control",3,"placeholder"],["class","error-message text-danger",4,"ngIf"],[1,"col-md-12","w-100"],["type","submit",1,"main-btn","mt-5","w-100",3,"click","disabled"],[1,"social-p","my-5","text-center"],[1,"social-box","text-center"],[1,"fa-brands","fa-facebook-f"],[1,"fa-brands","fa-apple"],[1,"fa-brands","fa-google"],[1,"col-lg-6","d-flex","justify-content-end","d-none","d-lg-flex"],["src","../../../../assets/images/Sign up-cuate 1.png","alt","Sign up image",1,"img-fluid"],[1,"error-message","text-danger"],["routerLink","/auth/login","class","d-inline-block mx-2",4,"ngIf"],["routerLink","/auth/login",1,"d-inline-block","mx-2"]],template:function(n,r){1&n&&(t.nrm(0,"app-navbar",0),t.j41(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.nrm(6,"img",6),t.j41(7,"h2",7),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"p",8),t.EFF(11),t.nI1(12,"translate"),t.k0s()(),t.j41(13,"form",9)(14,"div",3)(15,"div",10)(16,"div",11)(17,"label",12),t.EFF(18),t.nI1(19,"translate"),t.j41(20,"span",13),t.EFF(21,"*"),t.k0s()(),t.nrm(22,"input",14),t.nI1(23,"translate"),t.DNE(24,F,3,2,"div",15),t.k0s()(),t.j41(25,"div",16)(26,"button",17),t.bIt("click",function(s){return r.onRegister(s)}),t.EFF(27),t.nI1(28,"translate"),t.k0s()()()(),t.j41(29,"p",18),t.EFF(30),t.nI1(31,"translate"),t.k0s(),t.j41(32,"div",19),t.nrm(33,"i",20)(34,"i",21)(35,"i",22),t.k0s()(),t.j41(36,"div",23),t.nrm(37,"img",24),t.k0s()()()(),t.nrm(38,"app-footer")),2&n&&(t.Y8G("isSignup",r.isSignup),t.R7$(8),t.JRh(t.bMT(9,10,"Create account")),t.R7$(3),t.SpI(" ",t.bMT(12,12,"signup-main-p")," "),t.R7$(2),t.Y8G("formGroup",r.registerForm),t.R7$(5),t.SpI("",t.bMT(19,14,"phone")," "),t.R7$(4),t.Y8G("placeholder",t.bMT(23,16,"phone")),t.R7$(2),t.Y8G("ngIf",r.errorMessage),t.R7$(2),t.Y8G("disabled",r.registerForm.invalid),t.R7$(),t.SpI(" ",t.bMT(28,18,"Send code")," "),t.R7$(3),t.JRh(t.bMT(31,20,"social-p")))},dependencies:[l.bT,g.Wk,i.qT,i.me,i.BC,i.cb,i.YS,i.j4,i.JD,f.n,m._,d.D9],styles:[".contact[_ngcontent-%COMP%]{min-height:70vh}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{color:#31363f;font-size:32px;font-weight:bolder;line-height:51.2px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .contact-main-p[_ngcontent-%COMP%]{font-size:24px;font-weight:400;color:#555874;line-height:38.4px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-weight:400}.contact[_ngcontent-%COMP%]   .social-p[_ngcontent-%COMP%]{font-size:20px;line-height:24.2px;font-weight:500}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;width:40px;height:40px;line-height:40px;border-radius:50%;border:1px solid;margin-left:5px;margin-right:5px;cursor:pointer;font-size:14px;color:#fff}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-facebook-f[_ngcontent-%COMP%]{background-color:#006ffd}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-apple[_ngcontent-%COMP%]{background-color:#1f2024}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-google[_ngcontent-%COMP%]{background-color:#ed3241}.error-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1f2024}.error-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline!important}"]})}}return o})();function y(o,p){if(1&o&&(t.j41(0,"div",20),t.EFF(1),t.k0s()),2&o){const e=t.XpG();t.R7$(),t.SpI(" ",e.errorMessage," ")}}let j=(()=>{class o{constructor(e,n){this.router=e,this.injector=n,this.isLogin=!0,this.errorMessage=null,this.forgePasswordForm=new i.gE({phone:new i.MJ(null,[i.k0.required])})}ngOnInit(){}onSubmit(){let e={};e=this.forgePasswordForm.value.phone?.includes("@")?{sending_type:"email",verifiable:this.forgePasswordForm.value.phone}:{sending_type:"phone",verifiable:this.forgePasswordForm.value.phone},this.injector.get(u.u).register(e).subscribe({next:r=>{localStorage.setItem("verifiable",e.verifiable),this.router.navigate(["auth/activate-account"])},error:r=>this.errorMessage=r.error.message})}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(g.Ix),t.rXU(t.zZn))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-forget-password"]],decls:32,vars:19,consts:[[3,"isLogin"],[1,"contact"],[1,"container"],[1,"row"],[1,"col-md-6","mt-5","px-5"],[1,"text-box","mb-5","text-center"],["src","../../../../assets/logo/logo.png","alt","we print logo",1,"img-fluid","mb-5"],[1,"h4"],[1,"contact-main-p","mb-5"],[1,"forms-sample",3,"formGroup"],[1,"col-md-12","mb-2"],[1,"mb-3"],["for","phone",1,"form-label"],[1,"text-danger","d-inline-block"],["dir","rtl","type","tel","id","phone","required","","formControlName","phone",1,"form-control",3,"placeholder"],[1,"col-md-12","w-100"],["type","submit",1,"main-btn","mt-5","w-100",3,"click","disabled"],["class","error-message text-danger",4,"ngIf"],[1,"col-md-6","d-flex","justify-content-end"],["src","../../../../assets/images/Forgot password-cuate 1.png","alt","Forgot password image",1,"img-fluid"],[1,"error-message","text-danger"]],template:function(n,r){1&n&&(t.nrm(0,"app-navbar",0),t.j41(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.nrm(6,"img",6),t.j41(7,"h2",7),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"p",8),t.EFF(11),t.nI1(12,"translate"),t.k0s()(),t.j41(13,"form",9)(14,"div",3)(15,"div",10)(16,"div",11)(17,"label",12),t.EFF(18),t.nI1(19,"translate"),t.j41(20,"span",13),t.EFF(21,"*"),t.k0s()(),t.nrm(22,"input",14),t.nI1(23,"translate"),t.k0s()(),t.j41(24,"div",15)(25,"button",16),t.bIt("click",function(){return r.onSubmit()}),t.EFF(26),t.nI1(27,"translate"),t.k0s()(),t.DNE(28,y,2,1,"div",17),t.k0s()()(),t.j41(29,"div",18),t.nrm(30,"img",19),t.k0s()()()(),t.nrm(31,"app-footer")),2&n&&(t.Y8G("isLogin",r.isLogin),t.R7$(8),t.JRh(t.bMT(9,9,"Forget Password ?")),t.R7$(3),t.SpI(" ",t.bMT(12,11,"forget-password-p")," "),t.R7$(2),t.Y8G("formGroup",r.forgePasswordForm),t.R7$(5),t.SpI("",t.bMT(19,13,"phone")," "),t.R7$(4),t.Y8G("placeholder",t.bMT(23,15,"phone")),t.R7$(3),t.Y8G("disabled",r.forgePasswordForm.invalid),t.R7$(),t.SpI(" ",t.bMT(27,17,"Send code")," "),t.R7$(2),t.Y8G("ngIf",r.errorMessage))},dependencies:[l.bT,i.qT,i.me,i.BC,i.cb,i.YS,i.j4,i.JD,f.n,m._,d.D9],styles:[".contact[_ngcontent-%COMP%]{min-height:70vh}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{color:#31363f;font-size:32px;font-weight:bolder;line-height:51.2px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .contact-main-p[_ngcontent-%COMP%]{font-size:24px;font-weight:400;color:#555874;line-height:38.4px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-weight:400}.contact[_ngcontent-%COMP%]   .social-p[_ngcontent-%COMP%]{font-size:20px;line-height:24.2px;font-weight:500}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;width:40px;height:40px;line-height:40px;border-radius:50%;border:1px solid;margin-left:5px;margin-right:5px;cursor:pointer;font-size:14px;color:#fff}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-facebook-f[_ngcontent-%COMP%]{background-color:#006ffd}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-apple[_ngcontent-%COMP%]{background-color:#1f2024}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-google[_ngcontent-%COMP%]{background-color:#ed3241}.forget-password[_ngcontent-%COMP%]{color:#31363f;font-size:12px;cursor:pointer}"]})}}return o})();var _=c(5779),x=c(2242),C=c(1880);const S=(o,p,e)=>({$implicit:o,events:p,index:e});function R(o,p){if(1&o){const e=t.RV6();t.qex(0),t.j41(1,"input",2),t.bIt("input",function(r){t.eBV(e);const a=t.XpG().$implicit,s=t.XpG();return t.Njj(s.onInput(r,a-1))})("focus",function(r){t.eBV(e);const a=t.XpG(2);return t.Njj(a.onInputFocus(r))})("blur",function(r){t.eBV(e);const a=t.XpG(2);return t.Njj(a.onInputBlur(r))})("paste",function(r){t.eBV(e);const a=t.XpG(2);return t.Njj(a.onPaste(r))})("keydown",function(r){t.eBV(e);const a=t.XpG(2);return t.Njj(a.onKeyDown(r))}),t.k0s(),t.bVm()}if(2&o){const e=t.XpG().$implicit,n=t.XpG();t.R7$(),t.Y8G("value",n.getModelValue(e))("maxLength",1)("type",n.inputType)("inputmode",n.inputMode)("variant",n.variant)("readonly",n.readonly)("disabled",n.disabled)("invalid",n.invalid)("tabindex",n.tabindex)("unstyled",n.unstyled)("autofocus",n.getAutofocus(e))}}function E(o,p){1&o&&t.eu8(0)}function $(o,p){if(1&o&&(t.qex(0),t.DNE(1,E,1,0,"ng-container",3),t.bVm()),2&o){const e=t.XpG().$implicit,n=t.XpG();t.R7$(),t.Y8G("ngTemplateOutlet",n.inputTemplate)("ngTemplateOutletContext",t.sMw(2,S,n.getToken(e-1),n.getTemplateEvents(e-1),e))}}function G(o,p){if(1&o&&(t.qex(0),t.DNE(1,R,2,11,"ng-container",1)(2,$,2,6,"ng-container",1),t.bVm()),2&o){const e=t.XpG();t.R7$(),t.Y8G("ngIf",!e.inputTemplate),t.R7$(),t.Y8G("ngIf",e.inputTemplate)}}const D={provide:i.kq,useExisting:(0,t.Rfq)(()=>v),multi:!0};let v=(()=>{class o{cd;invalid=!1;disabled=!1;readonly=!1;variant="outlined";tabindex=null;length=4;mask=!1;integerOnly=!1;autofocus;onChange=new t.bkB;onFocus=new t.bkB;onBlur=new t.bkB;templates;inputTemplate;tokens=[];onModelChange=()=>{};onModelTouched=()=>{};value;get inputMode(){return this.integerOnly?"numeric":"text"}get inputType(){return this.mask?"password":"text"}constructor(e){this.cd=e}ngAfterContentInit(){this.templates.forEach(e=>{e.getType(),this.inputTemplate=e.template})}getToken(e){return this.tokens[e]}getTemplateEvents(e){return{input:n=>this.onInput(n,e),keydown:n=>this.onKeyDown(n),focus:n=>this.onFocus.emit(n),blur:n=>this.onBlur.emit(n),paste:n=>this.onPaste(n)}}onInput(e,n){this.tokens[n]=e.target.value,this.updateModel(e),"deleteContentBackward"===e.inputType?this.moveToPrev(e):("insertText"===e.inputType||"deleteContentForward"===e.inputType)&&this.moveToNext(e)}updateModel(e){const n=this.tokens.join("");this.onModelChange(n),this.onChange.emit({originalEvent:e,value:n})}writeValue(e){this.value=e?Array.isArray(e)&&e.length>0?e.slice(0,this.length):e.toString().split("").slice(0,this.length):e,this.updateTokens(),this.cd.markForCheck()}updateTokens(){this.tokens=null!=this.value?Array.isArray(this.value)?[...this.value]:this.value.toString().split(""):[]}getModelValue(e){return this.tokens[e-1]||""}getAutofocus(e){return 1===e&&this.autofocus}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}moveToPrev(e){let n=this.findPrevInput(e.target);n&&(n.focus(),n.select())}moveToNext(e){let n=this.findNextInput(e.target);n&&(n.focus(),n.select())}findNextInput(e){let n=e.nextElementSibling;if(n)return"INPUT"===n.nodeName?n:this.findNextInput(n)}findPrevInput(e){let n=e.previousElementSibling;if(n)return"INPUT"===n.nodeName?n:this.findPrevInput(n)}onInputFocus(e){e.target.select(),this.onFocus.emit(e)}onInputBlur(e){this.onBlur.emit(e)}onKeyDown(e){if(!(e.altKey||e.ctrlKey||e.metaKey))switch(e.key){case"ArrowLeft":this.moveToPrev(e),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Backspace":0===e.target.value.length&&(this.moveToPrev(e),e.preventDefault());break;case"ArrowRight":this.moveToNext(e),e.preventDefault();break;case"Tab":break;default:(this.integerOnly&&!((e.code.startsWith("Digit")||e.code.startsWith("Numpad"))&&Number(e.key)>=0&&Number(e.key)<=9)||this.tokens.join("").length>=this.length&&"Delete"!==e.code)&&e.preventDefault()}}onPaste(e){if(!this.disabled&&!this.readonly){let n=e.clipboardData.getData("text");if(n.length){let r=n.substring(0,this.length);(!this.integerOnly||!isNaN(r))&&(this.tokens=r.split(""),this.updateModel(e))}e.preventDefault()}}getRange(e){return Array.from({length:e},(n,r)=>r+1)}trackByFn(e){return e}static \u0275fac=function(n){return new(n||o)(t.rXU(t.gRc))};static \u0275cmp=t.VBU({type:o,selectors:[["p-inputOtp"]],contentQueries:function(n,r,a){if(1&n&&t.wni(a,_.Ei,4),2&n){let s;t.mGM(s=t.lsd())&&(r.templates=s)}},hostAttrs:[1,"p-inputotp","p-component"],inputs:{invalid:"invalid",disabled:"disabled",readonly:"readonly",variant:"variant",tabindex:"tabindex",length:"length",mask:"mask",integerOnly:"integerOnly",autofocus:[t.Mj6.HasDecoratorInputTransform,"autofocus","autofocus",t.L39]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[t.Jv_([D]),t.GFd],decls:1,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],["type","text","pInputText","","pAutoFocus","",1,"p-inputotp-input",3,"input","focus","blur","paste","keydown","value","maxLength","type","inputmode","variant","readonly","disabled","invalid","tabindex","unstyled","autofocus"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,r){1&n&&t.DNE(0,G,3,2,"ng-container",0),2&n&&t.Y8G("ngForOf",r.getRange(r.length))("ngForTrackBy",r.trackByFn)},dependencies:[l.Sq,l.bT,l.T3,x.S,C.q],encapsulation:2,changeDetection:0})}return o})(),N=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=t.$C({type:o});static \u0275inj=t.G2t({imports:[l.MD,_.Gg,x.u,C.u,_.Gg]})}return o})();const Y=()=>({standalone:!0});function U(o,p){1&o&&(t.j41(0,"p",21),t.EFF(1),t.k0s()),2&o&&(t.R7$(),t.JRh("Please enter a valid email"))}function L(o,p){if(1&o&&(t.j41(0,"div",22),t.EFF(1),t.k0s()),2&o){const e=t.XpG();t.R7$(),t.SpI(" ",e.errorMessage," ")}}let X=(()=>{class o{constructor(e,n,r){this.router=e,this.injector=n,this.authService=r,this.errorMessage=null,this.actigationCodeForm=new i.gE({otp_secret:new i.MJ(null,[i.k0.required])})}ngOnInit(){}onSubmit(){let e=localStorage.getItem("verifiable");console.log("verifiable",e);try{e=e.startsWith("{")||e.startsWith("[")?JSON.parse(e):e}catch(a){console.error("Error parsing 'verifiable' from localStorage:",a),e=null}let n={};n="email"===localStorage.getItem("sending_type")?{otp_secret:this.secretCode,email:e}:{otp_secret:this.secretCode,phone:e},this.injector.get(u.u).verify(n).subscribe({next:a=>{localStorage.setItem("token",a.data.token),localStorage.setItem("userInfo",JSON.stringify(a.data)),this.authService.hasToken(),this.authService.authState.next(!0),this.router.navigate(["auth/complete-profile"])},error:a=>{this.errorMessage=a.error.message}})}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(g.Ix),t.rXU(t.zZn),t.rXU(u.u))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-activation-code"]],standalone:!0,features:[t.aNF],decls:34,vars:23,consts:[[3,"isLogin","isSignup"],[1,"contact"],[1,"container"],[1,"row"],[1,"col-lg-6","mt-5","px-5","activation-code-otp"],[1,"text-box","mb-5","text-center"],["src","../../../../assets/logo/logo.png","alt","we print logo",1,"img-fluid","mb-5"],[1,"h4"],[1,"contact-main-p","mb-5"],[1,"forms-sample"],[1,"col-md-12","mb-2"],[1,"mb-3","text-center"],[3,"ngModelChange","ngModelOptions","ngModel","integerOnly"],["class","text-danger",4,"ngIf"],[1,"col-md-12","w-100"],["type","submit",1,"main-btn","mt-5","w-100",3,"click"],["class","error-message text-danger",4,"ngIf"],[1,"social-p","my-5","text-center"],[1,"otp-p-2","mx-1"],[1,"col-lg-6","justify-content-end","d-none","d-lg-flex"],["src","../../../../assets/images/OTP.png","alt","OTP image",1,"img-fluid"],[1,"text-danger"],[1,"error-message","text-danger"]],template:function(n,r){if(1&n&&(t.nrm(0,"app-navbar",0),t.j41(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.nrm(6,"img",6),t.j41(7,"h2",7),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"p",8),t.EFF(11),t.nI1(12,"translate"),t.k0s()(),t.j41(13,"form",9)(14,"div",3)(15,"div",10)(16,"div",11)(17,"p-inputOtp",12),t.mxI("ngModelChange",function(s){return t.DH7(r.secretCode,s)||(r.secretCode=s),s}),t.k0s(),t.DNE(18,U,2,1,"p",13),t.k0s()(),t.j41(19,"div",14)(20,"button",15),t.bIt("click",function(){return r.onSubmit()}),t.EFF(21),t.nI1(22,"translate"),t.k0s()(),t.DNE(23,L,2,1,"div",16),t.k0s()(),t.j41(24,"p",17)(25,"span"),t.EFF(26),t.nI1(27,"translate"),t.k0s(),t.j41(28,"span",18),t.EFF(29),t.nI1(30,"translate"),t.k0s()()(),t.j41(31,"div",19),t.nrm(32,"img",20),t.k0s()()()(),t.nrm(33,"app-footer")),2&n){let a;t.Y8G("isLogin",!0)("isSignup",!0),t.R7$(8),t.JRh(t.bMT(9,12,"Enter verification code")),t.R7$(3),t.SpI(" ",t.bMT(12,14,"otp-p")," "),t.R7$(6),t.Y8G("ngModelOptions",t.lJ4(22,Y)),t.R50("ngModel",r.secretCode),t.Y8G("integerOnly",!0),t.R7$(),t.Y8G("ngIf",null!=(null==(a=r.actigationCodeForm.get("otp_secret"))?null:a.errors)&&(null==(a=r.actigationCodeForm.get("otp_secret"))?null:a.touched)),t.R7$(3),t.SpI(" ",t.bMT(22,16,"Done")," "),t.R7$(2),t.Y8G("ngIf",r.errorMessage),t.R7$(3),t.JRh(t.bMT(27,18,"otp-p-1")),t.R7$(3),t.JRh(t.bMT(30,20,"otp-p-2"))}},dependencies:[i.YN,i.qT,i.BC,i.cb,i.vS,i.cV,N,v,d.h,d.D9,i.X1,m._,f.n,l.MD,l.bT],styles:[".contact[_ngcontent-%COMP%]{min-height:70vh}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{color:#31363f;font-size:32px;font-weight:bolder;line-height:51.2px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .contact-main-p[_ngcontent-%COMP%]{font-size:24px;font-weight:400;color:#555874;line-height:38.4px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-weight:400}.contact[_ngcontent-%COMP%]   .social-p[_ngcontent-%COMP%]{font-size:20px;line-height:24.2px;font-weight:500}.contact[_ngcontent-%COMP%]   .social-p[_ngcontent-%COMP%]   .otp-p-2[_ngcontent-%COMP%]{display:inline-block;color:var(--primary-color)}"]})}}return o})();function B(o,p){if(1&o&&(t.j41(0,"div",26),t.EFF(1),t.k0s()),2&o){const e=t.XpG();t.R7$(),t.SpI(" ",e.errorMessage," ")}}let J=(()=>{class o{constructor(e,n,r,a){this.router=e,this.route=n,this.injector=r,this.alertService=a,this.errorMessage=null,this.isLogin=!0,this.loginForm=new i.gE({password:new i.MJ(null,[i.k0.required,i.k0.minLength(6)]),password_confirmation:new i.MJ(null,[i.k0.required,i.k0.minLength(6)])})}ngOnInit(){this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}onSubmit(e){let n={...this.loginForm.value,phone:localStorage.getItem("verifiable"),otp_secret:localStorage.getItem("otp_secret")};this.injector.get(u.u).newPasswork(n).subscribe({next:a=>{this.alertService.toast({severity:"success",summary:"",detail:a.message}),this.router.navigate(["/user/userdashboard/welcome"])},error:a=>this.errorMessage=a.error.errors})}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(g.Ix),t.rXU(g.nX),t.rXU(t.zZn),t.rXU(b.n))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-new-password"]],decls:45,vars:25,consts:[[3,"isLogin"],[1,"contact"],[1,"container"],[1,"row"],[1,"col-lg-6","mt-5","px-5"],[1,"text-box","mb-5","text-center"],["src","../../../../assets/logo/logo.png","alt","we print logo",1,"img-fluid","mb-5"],[1,"h4"],[1,"forms-sample",3,"formGroup"],[1,"col-md-12","mb-2"],[1,"mb-3"],["for","password",1,"form-label"],[1,"text-danger","d-inline-block"],["type","password","id","password","required","","formControlName","password",1,"form-control",3,"placeholder"],["for","password_confirmation",1,"form-label"],["type","password","id","password_confirmation","required","","formControlName","password_confirmation",1,"form-control",3,"placeholder"],[1,"col-md-12","w-100"],["type","submit",1,"main-btn","mt-5","w-100",3,"click","disabled"],["class","error-message text-danger",4,"ngIf"],[1,"social-p","my-5","text-center"],[1,"social-box","text-center"],[1,"fa-brands","fa-facebook-f"],[1,"fa-brands","fa-apple"],[1,"fa-brands","fa-google"],[1,"col-lg-6","d-flex","justify-content-end","d-none","d-lg-flex"],["src","../../../../assets/images/Security-cuate 1.png","alt","Security",1,"img-fluid"],[1,"error-message","text-danger"]],template:function(n,r){1&n&&(t.nrm(0,"app-navbar",0),t.j41(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.nrm(6,"img",6),t.j41(7,"h2",7),t.EFF(8),t.nI1(9,"translate"),t.k0s()(),t.j41(10,"form",8)(11,"div",3)(12,"div",9)(13,"div",10)(14,"label",11),t.EFF(15),t.nI1(16,"translate"),t.j41(17,"span",12),t.EFF(18,"*"),t.k0s()(),t.nrm(19,"input",13),t.nI1(20,"translate"),t.k0s()(),t.j41(21,"div",9)(22,"div",10)(23,"label",14),t.EFF(24),t.nI1(25,"translate"),t.j41(26,"span",12),t.EFF(27,"*"),t.k0s()(),t.nrm(28,"input",15),t.nI1(29,"translate"),t.k0s()(),t.j41(30,"div",16)(31,"button",17),t.bIt("click",function(s){return r.onSubmit(s)}),t.EFF(32),t.nI1(33,"translate"),t.k0s()(),t.DNE(34,B,2,1,"div",18),t.k0s()(),t.j41(35,"p",19),t.EFF(36),t.nI1(37,"translate"),t.k0s(),t.j41(38,"div",20),t.nrm(39,"i",21)(40,"i",22)(41,"i",23),t.k0s()(),t.j41(42,"div",24),t.nrm(43,"img",25),t.k0s()()()(),t.nrm(44,"app-footer")),2&n&&(t.Y8G("isLogin",r.isLogin),t.R7$(8),t.JRh(t.bMT(9,11,"new-password")),t.R7$(2),t.Y8G("formGroup",r.loginForm),t.R7$(5),t.SpI("",t.bMT(16,13,"Password")," "),t.R7$(4),t.Y8G("placeholder",t.bMT(20,15,"Password")),t.R7$(5),t.SpI("",t.bMT(25,17,"password_confirmation")," "),t.R7$(4),t.Y8G("placeholder",t.bMT(29,19,"password_confirmation")),t.R7$(3),t.Y8G("disabled",r.loginForm.invalid),t.R7$(),t.SpI(" ",t.bMT(33,21,"continue")," "),t.R7$(2),t.Y8G("ngIf",r.errorMessage),t.R7$(2),t.JRh(t.bMT(37,23,"social-p")))},dependencies:[l.bT,i.qT,i.me,i.BC,i.cb,i.YS,i.j4,i.JD,f.n,m._,d.D9],styles:[".contact[_ngcontent-%COMP%]{min-height:70vh}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{color:#31363f;font-size:32px;font-weight:bolder;line-height:51.2px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .contact-main-p[_ngcontent-%COMP%]{font-size:24px;font-weight:400;color:#555874;line-height:38.4px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-weight:400}.contact[_ngcontent-%COMP%]   .social-p[_ngcontent-%COMP%]{font-size:20px;line-height:24.2px;font-weight:500}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;width:40px;height:40px;line-height:40px;border-radius:50%;border:1px solid;margin-left:5px;margin-right:5px;cursor:pointer;font-size:14px;color:#fff}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-facebook-f[_ngcontent-%COMP%]{background-color:#006ffd}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-apple[_ngcontent-%COMP%]{background-color:#1f2024}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-google[_ngcontent-%COMP%]{background-color:#ed3241}"]})}}return o})(),z=(()=>{class o{constructor(){}ngOnInit(){}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-auth"]],decls:1,vars:0,template:function(n,r){1&n&&t.nrm(0,"router-outlet")},dependencies:[g.n3],encapsulation:2})}}return o})();var A=c(793);function V(o,p){if(1&o&&(t.j41(0,"div",23),t.EFF(1),t.k0s()),2&o){const e=t.XpG();t.R7$(),t.SpI(" ",e.errorMessage," ")}}const q=[{path:"",component:z,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:k},{path:"register",component:T},{path:"forget-password",component:j},{path:"activate-account",component:X},{path:"new-password",component:J},{path:"complete-profile",component:(()=>{class o{constructor(e,n,r,a){this.router=e,this.route=n,this.injector=r,this.alertService=a,this.errorMessage=null,this.isLogin=!0,this.userName="",this.loginForm=new i.gE({username:new i.MJ(null,[i.k0.required,i.k0.minLength(3)]),password:new i.MJ(null,[i.k0.required,i.k0.minLength(6)]),password_confirmation:new i.MJ(null,[i.k0.required,i.k0.minLength(6)])})}ngOnInit(){const e=localStorage.getItem("userInfo");if(e){const n=JSON.parse(e);this.loginForm.patchValue({username:n.username??""})}this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}onSubmit(e){let n={...this.loginForm.value};this.injector.get(A.g).editProfileData(n).subscribe({next:a=>{let s=JSON.parse(localStorage.getItem("userInfo")??"");s={...s,...a.data},localStorage.setItem("userInfo",JSON.stringify(s)),this.alertService.toast({severity:"success",summary:"",detail:a.message}),this.router.navigate(["/user/userdashboard/welcome"])},error:a=>this.errorMessage=a.error.errors})}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(g.Ix),t.rXU(g.nX),t.rXU(t.zZn),t.rXU(b.n))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-complete-profile"]],standalone:!0,features:[t.aNF],decls:47,vars:32,consts:[[3,"isLogin"],[1,"contact"],[1,"container"],[1,"row"],[1,"col-lg-6","mt-5","px-5"],[1,"text-box","mb-5","text-center"],["src","../../../../assets/logo/logo.png","alt","we print logo",1,"img-fluid","mb-5"],[1,"h4"],[1,"forms-sample",3,"formGroup"],[1,"col-md-12","mb-2"],[1,"mb-3"],["for","Username",1,"form-label"],[1,"text-danger","d-inline-block"],["type","text","id","Username","required","","formControlName","username",1,"form-control",3,"placeholder"],["for","password",1,"form-label"],["id","password","formControlName","password",3,"placeholder","feedback","toggleMask"],["for","password_confirmation",1,"form-label"],["id","password_confirmation","formControlName","password_confirmation",3,"placeholder","feedback","toggleMask"],[1,"col-md-12","w-100"],["type","submit",1,"main-btn","mt-5","w-100",3,"click","disabled"],["class","error-message text-danger",4,"ngIf"],[1,"col-lg-6","d-none","justify-content-end","d-lg-flex"],["src","../../../../assets/images/Security-cuate 1.png","alt","Security",1,"img-fluid"],[1,"error-message","text-danger"]],template:function(n,r){1&n&&(t.nrm(0,"app-navbar",0),t.j41(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.nrm(6,"img",6),t.j41(7,"h2",7),t.EFF(8),t.nI1(9,"translate"),t.k0s()(),t.j41(10,"form",8)(11,"div",3)(12,"div",9)(13,"div",10)(14,"label",11),t.EFF(15),t.nI1(16,"translate"),t.j41(17,"span",12),t.EFF(18,"*"),t.k0s()(),t.nrm(19,"input",13),t.nI1(20,"translate"),t.k0s()(),t.j41(21,"div",9)(22,"div",10)(23,"label",14),t.EFF(24),t.nI1(25,"translate"),t.j41(26,"span",12),t.EFF(27,"*"),t.k0s()(),t.nrm(28,"p-password",15),t.nI1(29,"translate"),t.k0s()(),t.j41(30,"div",9)(31,"div",10)(32,"label",16),t.EFF(33),t.nI1(34,"translate"),t.j41(35,"span",12),t.EFF(36,"*"),t.k0s()(),t.nrm(37,"p-password",17),t.nI1(38,"translate"),t.k0s()(),t.j41(39,"div",18)(40,"button",19),t.bIt("click",function(s){return r.onSubmit(s)}),t.EFF(41),t.nI1(42,"translate"),t.k0s()(),t.DNE(43,V,2,1,"div",20),t.k0s()()(),t.j41(44,"div",21),t.nrm(45,"img",22),t.k0s()()()(),t.nrm(46,"app-footer")),2&n&&(t.Y8G("isLogin",r.isLogin),t.R7$(8),t.JRh(t.bMT(9,16,"complete your info")),t.R7$(2),t.Y8G("formGroup",r.loginForm),t.R7$(5),t.SpI("",t.bMT(16,18,"Username")," "),t.R7$(4),t.Y8G("placeholder",t.bMT(20,20,"Username")),t.R7$(5),t.SpI("",t.bMT(25,22,"Password")," "),t.R7$(4),t.Y8G("placeholder",t.bMT(29,24,"Password"))("feedback",!1)("toggleMask",!0),t.R7$(5),t.SpI("",t.bMT(34,26,"password_confirmation")," "),t.R7$(4),t.Y8G("placeholder",t.bMT(38,28,"password_confirmation"))("feedback",!1)("toggleMask",!0),t.R7$(3),t.Y8G("disabled",r.loginForm.invalid),t.R7$(),t.SpI(" ",t.bMT(42,30,"continue")," "),t.R7$(2),t.Y8G("ngIf",r.errorMessage))},dependencies:[f.n,m._,d.h,d.D9,i.X1,i.qT,i.me,i.BC,i.cb,i.YS,i.j4,i.JD,l.MD,l.bT,h.Ou,h._2,i.YN],styles:[".contact[_ngcontent-%COMP%]{min-height:70vh}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{color:#31363f;font-size:32px;font-weight:bolder;line-height:51.2px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .contact-main-p[_ngcontent-%COMP%]{font-size:24px;font-weight:400;color:#555874;line-height:38.4px;letter-spacing:.3px}.contact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-weight:400}.contact[_ngcontent-%COMP%]   .social-p[_ngcontent-%COMP%]{font-size:20px;line-height:24.2px;font-weight:500}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;width:40px;height:40px;line-height:40px;border-radius:50%;border:1px solid;margin-left:5px;margin-right:5px;cursor:pointer;font-size:14px;color:#fff}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-facebook-f[_ngcontent-%COMP%]{background-color:#006ffd}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-apple[_ngcontent-%COMP%]{background-color:#1f2024}.contact[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .fa-google[_ngcontent-%COMP%]{background-color:#ed3241}"]})}}return o})()}]}];let W=(()=>{class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({providers:[u.u],imports:[l.MD,g.iI.forChild(q),i.X1,d.h,m._,h.Ou]})}}return o})()}}]);