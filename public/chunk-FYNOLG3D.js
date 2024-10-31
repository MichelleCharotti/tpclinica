import{E as S,F as A,u as y,y as k,z as E}from"./chunk-U3VAIRWR.js";import{c as I,d as p,f as B,g as F,h as V,i as _,k as N,l as D,m as R,n as T,o as z}from"./chunk-MATUUI4B.js";import{Ba as L,Ea as w,M as l,N as u,R as g,S as s,U as t,V as o,W as b,Y as m,Z as v,ca as r,ea as h,ja as M,ka as f,ua as P,wa as O,xa as x,z as C}from"./chunk-K7SDNGR6.js";var U=n=>({active:n}),G=n=>({visible:n});function q(n,c){n&1&&(t(0,"small",16),r(1," Debe Ingresar Un Mail Valido "),o())}function W(n,c){n&1&&(t(0,"small",16),r(1," Al Menos 16 Caracteres "),o())}function Y(n,c){if(n&1&&(t(0,"strong",16),r(1),o()),n&2){let i=v();l(),h(" ",i.error," ")}}var j=class n{constructor(c,i,e,a){this.router=c;this.usuario=i;this.auth=e;this.db=a;this.formularioLogin=new V({email:new _("",[p.required,p.email]),password:new _("",[p.minLength(16),p.required])})}formularioLogin;validando=!1;error="";verBotones=!1;logear(){this.limpiarEspacios(),this.error="",this.validando=!0;let c=this.formularioLogin.value;E(this.auth,c.email,c.password).then(i=>{i.user?i.user.emailVerified?this.usuario.obtenerDatos().then(e=>{e.tipo=="especialista"&&!e.habilitado?(this.validando=!1,this.error="Cuenta NO Verificado Por Administracion. Contacte a la Clinica",this.usuario.cerrarSesion()):(this.db.generarLog(this.usuario.datos),console.log("logueado"),this.router.navigate(["perfil"]))}):(this.validando=!1,this.error="Debe verificar su email antes de iniciar sesion",k(i.user),this.auth.signOut()):(this.validando=!1,this.error="Credenciales Invalidas")}).catch(i=>{this.validando=!1,this.error="Credenciales Invalidas"})}limpiarEspacios(){this.formularioLogin.get("email")?.setValue(this.formularioLogin.get("email")?.value.trim()),this.formularioLogin.get("password")?.setValue(this.formularioLogin.get("password")?.value.trim())}registro(){this.router.navigate(["registro"])}mostrarBotones(){this.verBotones=!this.verBotones}completarAdmin(){this.formularioLogin.get("email")?.setValue("michellecharotti@gmail.com"),this.formularioLogin.get("password")?.setValue("rootrootrootroot")}completarEspecialista1(){this.formularioLogin.get("email")?.setValue("michel_1@hotmail.com.ar"),this.formularioLogin.get("password")?.setValue("medicomedicomedico")}static \u0275fac=function(i){return new(i||n)(u(L),u(A),u(y),u(S))};static \u0275cmp=C({type:n,selectors:[["app-login"]],standalone:!0,features:[M],decls:31,vars:16,consts:[[1,"zoom"],[1,"login-form",3,"formGroup"],[1,"form-group"],["for","nombre"],["type","text","id","email","placeholder","Ingrese usuario","formControlName","email"],["class","error",4,"ngIf"],["for","password"],[1,"password"],["appMostrarPassword","","type","password","id","password","placeholder","Ingrese contrase\xF1a","formControlName","password"],[1,"button-group"],[1,"login-button",3,"click","disabled"],[1,"register-button",3,"click"],["appClickAfuera","",1,"button-container",3,"cliclAfueraEvent","ngClass"],[1,"main-button",3,"click"],[1,"hidden-buttons"],[1,"sub-button",3,"click","ngClass","disabled"],[1,"error"]],template:function(i,e){if(i&1&&(t(0,"span",0)(1,"form",1)(2,"h3"),r(3,"Login"),o(),t(4,"div",2)(5,"label",3),r(6,"Usuario"),o(),b(7,"input",4),g(8,q,2,0,"small",5),o(),t(9,"div",2)(10,"label",6),r(11,"Contrase\xF1a"),o(),t(12,"div",7),b(13,"input",8),o(),g(14,W,2,0,"small",5),o(),t(15,"div",9)(16,"button",10),m("click",function(){return e.logear()}),r(17,"Login"),o(),t(18,"button",11),m("click",function(){return e.registro()}),r(19,"Registrarse"),o()(),g(20,Y,2,1,"strong",5),o(),t(21,"div",12),m("cliclAfueraEvent",function(){return e.mostrarBotones()}),t(22,"button",13),m("click",function(){return e.mostrarBotones()}),r(23,"Acceso Rapido"),o(),t(24,"div",14)(25,"button",15),m("click",function(){return e.completarAdmin()}),t(26,"p"),r(27,"Admin"),o()(),t(28,"button",15),m("click",function(){return e.completarEspecialista1()}),t(29,"p"),r(30,"Especialista "),o()()()()()),i&2){let a,d;l(),s("formGroup",e.formularioLogin),l(7),s("ngIf",((a=e.formularioLogin.get("email"))==null?null:a.touched)&&!((a=e.formularioLogin.get("email"))!=null&&a.valid)),l(6),s("ngIf",((d=e.formularioLogin.get("password"))==null?null:d.touched)&&!((d=e.formularioLogin.get("password"))!=null&&d.valid)),l(2),s("disabled",!e.formularioLogin.valid),l(4),s("ngIf",e.error!=""),l(),s("ngClass",f(10,U,e.verBotones)),l(4),s("ngClass",f(12,G,e.verBotones))("disabled",!e.verBotones),l(3),s("ngClass",f(14,G,e.verBotones))("disabled",!e.verBotones)}},dependencies:[w,x,P,O,T,N,I,B,F,z,D,R],styles:[".login-form[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center}.form-group[_ngcontent-%COMP%]{margin:10px 0}.button-group[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;font-weight:700}input[_ngcontent-%COMP%]{padding:5px;border-radius:5px;border:1px solid #ccc;width:100%;max-width:300px}button[_ngcontent-%COMP%]{width:212px;margin:2px 25px;padding:10px;border:none;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer}.password[_ngcontent-%COMP%]{display:flex;align-items:center}.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:195px}.login-button[_ngcontent-%COMP%], .register-button[_ngcontent-%COMP%]{background-color:#3485c3;color:#fff}.login-button[_ngcontent-%COMP%]:hover, .register-button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.login-button[_ngcontent-%COMP%]:disabled{background-color:#3485c3b3;cursor:not-allowed}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:red 1px solid}small[_ngcontent-%COMP%]{text-decoration:underline;display:block;width:212px}.error[_ngcontent-%COMP%]{color:red}.button-container[_ngcontent-%COMP%]{position:fixed;bottom:.5%;left:.5%}.main-button[_ngcontent-%COMP%]{background-color:#00f;color:#fff;padding:10px 20px;font-size:16px;border:none;border-radius:5px;cursor:pointer}.hidden-buttons[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s}.button-container.active[_ngcontent-%COMP%]   .hidden-buttons[_ngcontent-%COMP%]{opacity:1;visibility:visible}.sub-button[_ngcontent-%COMP%]{height:50px;background-color:#3485c3;color:#fff;padding:0 20px;font-size:16px;border:none;border-radius:10px;cursor:pointer;transition:transform .5s;display:flex;align-items:center}.sub-button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.sub-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 5px}.sub-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:100%;border:1px solid whitesmoke}.button-container.active[_ngcontent-%COMP%]   .sub-button[_ngcontent-%COMP%]{transform:translateY(-370px)}.zoom[_ngcontent-%COMP%], .zomm[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInAnimation 1s ease forwards,_ngcontent-%COMP%_sizeChangeAnimation 2s ease forwards}@keyframes _ngcontent-%COMP%_fadeInAnimation{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_sizeChangeAnimation{0%{transform:scale(.1)}to{transform:scale(1)}}.button-container[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInAnimation 1s ease forwards}"]})};export{j as LoginComponent};