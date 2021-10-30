"use strict";(self.webpackChunkqbo_angular_course=self.webpackChunkqbo_angular_course||[]).push([[349],{4349:(I,c,i)=>{i.r(c),i.d(c,{AuthModule:()=>S});var Z=i(4650),m=i(4655),a=i(3679),A=i(8939),t=i(7716),T=i(1841);let v=(()=>{class n{constructor(o){this.httpClient=o}login(o,r){return this.httpClient.post("https://danidelgadoz.com/oauth/token",{email:o,password:r})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(T.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var C=i(7001),l=i(5618),u=i(8295),g=i(9983),L=i(8583),p=i(1095);function b(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Email is required"),t.qZA())}function y(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Email is invalid"),t.qZA())}function x(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Password is required"),t.qZA())}function q(n,e){1&n&&(t.TgZ(0,"span"),t._uU(1,"Login"),t.qZA())}function U(n,e){1&n&&(t.TgZ(0,"span"),t._uU(1,"Loading..."),t.qZA())}let d=(()=>{class n{constructor(o,r,s){this.authService=o,this.router=r,this.matSnackBar=s,this.isLoading=!1}ngOnInit(){this.loginForm=new a.cw({email:new a.NI("",[a.kI.required,a.kI.email]),password:new a.NI("",[a.kI.required])})}ngOnDestroy(){var o;null===(o=this.loginSuscription)||void 0===o||o.unsubscribe()}onSubmit(){const{email:o,password:r}=this.loginForm.value;this.isLoading=!0,this.loginSuscription=this.authService.login(o,r).pipe((0,A.x)(()=>this.isLoading=!1)).subscribe(s=>{sessionStorage.setItem("userSession","3661411c65331184ac73d8660d0b4648"),this.router.navigate(["dashboard"])},s=>{this.matSnackBar.open(`Ups! ${s.error.message}`,"OK",{duration:3e3})})}onNavigateToRegister(){this.router.navigate(["auth/register"])}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(v),t.Y36(m.F0),t.Y36(C.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:23,vars:8,consts:[[3,"formGroup","ngSubmit"],["fxLayout","column",3,"disabled"],["appearance","fill"],["type","text","name","email","formControlName","email","matInput",""],[4,"ngIf"],["type","password","name","password","formControlName","password","matInput",""],["type","submit","mat-raised-button","","color","primary",3,"disabled"],["fxLayout","column","fxLayoutAlign","center center",1,"register"],[3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Login"),t.qZA(),t.TgZ(2,"form",0),t.NdJ("ngSubmit",function(){return r.loginForm.valid&&r.onSubmit()}),t.TgZ(3,"fieldset",1),t.TgZ(4,"mat-form-field",2),t.TgZ(5,"mat-label"),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",3),t.YNc(8,b,2,0,"mat-error",4),t.YNc(9,y,2,0,"mat-error",4),t.qZA(),t.TgZ(10,"mat-form-field",2),t.TgZ(11,"mat-label"),t._uU(12,"Password"),t.qZA(),t._UZ(13,"input",5),t.YNc(14,x,2,0,"mat-error",4),t.qZA(),t.TgZ(15,"button",6),t.YNc(16,q,2,0,"span",4),t.YNc(17,U,2,0,"span",4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",7),t.TgZ(19,"p"),t._uU(20,"Don't have an account?"),t.qZA(),t.TgZ(21,"a",8),t.NdJ("click",function(){return r.onNavigateToRegister()}),t._uU(22,"Create an account"),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("formGroup",r.loginForm),t.xp6(1),t.Q6J("disabled",r.isLoading),t.xp6(5),t.Q6J("ngIf",r.loginForm.controls.email.hasError("required")),t.xp6(1),t.Q6J("ngIf",r.loginForm.controls.email.hasError("email")),t.xp6(5),t.Q6J("ngIf",r.loginForm.controls.password.hasError("required")),t.xp6(1),t.Q6J("disabled",r.isLoading),t.xp6(1),t.Q6J("ngIf",!1===r.isLoading),t.xp6(1),t.Q6J("ngIf",!0===r.isLoading))},directives:[a._Y,a.JL,a.sg,l.xw,u.KE,u.hX,a.Fj,g.Nt,a.JJ,a.u,L.O5,p.lW,l.Wh,u.TO],styles:[".register[_ngcontent-%COMP%]{margin-top:18px}.register[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-bottom:0}.register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#039be5;text-decoration:none;cursor:pointer}"]}),n})(),f=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:18,vars:0,consts:[["fxLayout","column"],["appearance","fill"],["matInput",""],["mat-raised-button","","color","primary"]],template:function(o,r){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Register"),t.qZA(),t.TgZ(2,"form"),t.TgZ(3,"fieldset",0),t.TgZ(4,"mat-form-field",1),t.TgZ(5,"mat-label"),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",2),t.qZA(),t.TgZ(8,"mat-form-field",1),t.TgZ(9,"mat-label"),t._uU(10,"Password"),t.qZA(),t._UZ(11,"input",2),t.qZA(),t.TgZ(12,"mat-form-field",1),t.TgZ(13,"mat-label"),t._uU(14,"ReepetPassword"),t.qZA(),t._UZ(15,"input",2),t.qZA(),t.TgZ(16,"button",3),t._uU(17,"Signup"),t.qZA(),t.qZA(),t.qZA())},directives:[a._Y,a.JL,a.F,l.xw,u.KE,u.hX,g.Nt,p.lW],styles:[""]}),n})(),h=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:3,vars:0,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"full-page"],["fxLayout","column",1,"form-container"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"router-outlet"),t.qZA(),t.qZA())},directives:[l.xw,l.Wh,m.lC],styles:[".full-page[_ngcontent-%COMP%]{background:url(https://ngxadmin-e5c2f.firebaseapp.com/assets/images/backgrounds/dark-material-bg.jpg) no-repeat;background-size:cover;height:100vh}.full-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{background-color:#fff;padding:48px 32px 80px;width:450px;border-radius:8px}.full-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]     h1{text-align:center}.full-page[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]     form fieldset{border:none}"]}),n})();const M=[{path:"",component:h,children:[{path:"login",component:d},{path:"register",component:f},{path:"",redirectTo:"login",pathMatch:"full"}]}];let O=(()=>{class n{}return n.components=[d,f,h],n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(M)],m.Bz]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[Z.m,O]]}),n})()}}]);