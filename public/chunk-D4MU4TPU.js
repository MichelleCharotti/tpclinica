import{a as z}from"./chunk-5W6VUDYI.js";import{c as S,d,f as E,g as A,h as V,i as b,k as D,l as F,m as N,n as R,o as T}from"./chunk-6OSBLEJS.js";import{B as s,C as c,G as p,H as m,J as i,K as t,L as f,Ma as L,N as u,O as h,Qa as w,Ra as y,T as r,V as C,Wa as k,Xa as I,_ as v,ja as M,ka as x,oa as P,p as _,ra as O}from"./chunk-UO5LRNZ5.js";function G(o,a){o&1&&(i(0,"small",14),r(1," Debe Ingresar Un Mail Valido "),t())}function B(o,a){o&1&&(i(0,"small",14),r(1," Al Menos 16 Caracteres "),t())}function U(o,a){if(o&1&&(i(0,"strong",14),r(1),t()),o&2){let n=h();s(),C(" ",n.error," ")}}function q(o,a){o&1&&f(0,"app-loading",15),o&2&&m("mensaje","Validando")}var j=class o{constructor(a,n,e,l){this.router=a;this.usuario=n;this.auth=e;this.db=l;this.formularioLogin=new V({email:new b("",[d.required,d.email]),password:new b("",[d.minLength(16),d.required])})}formularioLogin;validando=!1;error="";logear(){this.limpiarEspacios(),this.error="",this.validando=!0;let a=this.formularioLogin.value;y(this.auth,a.email,a.password).then(n=>{n.user?n.user.emailVerified?this.usuario.obtenerDatos().then(e=>{e.tipo=="especialista"&&!e.habilitado?(this.validando=!1,this.error="Cuenta NO Verificado Por Administracion. Contacte a la Clinica",this.usuario.cerrarSesion()):(this.db.generarLog(this.usuario.datos),this.router.navigate(["perfil"]))}):(this.validando=!1,this.error="Debe verificar su email antes de iniciar sesion",w(n.user),this.auth.signOut()):(this.validando=!1,this.error="Credenciales Invalidas")}).catch(n=>{this.validando=!1,this.error="Credenciales Invalidas"})}limpiarEspacios(){this.formularioLogin.get("email")?.setValue(this.formularioLogin.get("email")?.value.trim()),this.formularioLogin.get("password")?.setValue(this.formularioLogin.get("password")?.value.trim())}registro(){this.router.navigate(["registro"])}completarAdmin(){this.formularioLogin.get("email")?.setValue("michellecharotti@gmail.com"),this.formularioLogin.get("password")?.setValue("rootrootrootroot")}completarEspecialista(){this.formularioLogin.get("email")?.setValue("michel_1@hotmail.com.ar"),this.formularioLogin.get("password")?.setValue("medicomedicomedico")}completarPaciente(){this.formularioLogin.get("email")?.setValue("informmc01@gmail.com"),this.formularioLogin.get("password")?.setValue("pacientepaciente")}static \u0275fac=function(n){return new(n||o)(c(P),c(I),c(L),c(k))};static \u0275cmp=_({type:o,selectors:[["app-login"]],standalone:!0,features:[v],decls:26,vars:6,consts:[[1,"zoom"],[1,"login-form",3,"formGroup"],[1,"form-group"],["for","nombre"],["type","text","id","email","placeholder","Ingrese usuario","formControlName","email"],["class","error",4,"ngIf"],["for","password"],[1,"password"],["appMostrarPassword","","type","password","id","password","placeholder","Ingrese contrase\xF1a","formControlName","password"],[1,"button-group"],[1,"login-button",3,"click","disabled"],[1,"register-button",3,"click"],[1,"sub-button",3,"click"],[3,"mensaje",4,"ngIf"],[1,"error"],[3,"mensaje"]],template:function(n,e){if(n&1&&(i(0,"span",0)(1,"form",1)(2,"h3"),r(3,"Login"),t(),i(4,"div",2)(5,"label",3),r(6,"Usuario"),t(),f(7,"input",4),p(8,G,2,0,"small",5),t(),i(9,"div",2)(10,"label",6),r(11,"Contrase\xF1a"),t(),i(12,"div",7),f(13,"input",8),t(),p(14,B,2,0,"small",5),t(),i(15,"div",9)(16,"button",10),u("click",function(){return e.logear()}),r(17,"Login"),t(),i(18,"button",11),u("click",function(){return e.registro()}),r(19,"Registrarse"),t(),i(20,"button",12),u("click",function(){return e.completarAdmin()}),r(21,"Acceso Administrador"),t(),i(22,"button",12),u("click",function(){return e.completarPaciente()}),r(23,"Acceso Paciente"),t()(),p(24,U,2,1,"strong",5),t()(),p(25,q,1,1,"app-loading",13)),n&2){let l,g;s(),m("formGroup",e.formularioLogin),s(7),m("ngIf",((l=e.formularioLogin.get("email"))==null?null:l.touched)&&!((l=e.formularioLogin.get("email"))!=null&&l.valid)),s(6),m("ngIf",((g=e.formularioLogin.get("password"))==null?null:g.touched)&&!((g=e.formularioLogin.get("password"))!=null&&g.valid)),s(2),m("disabled",!e.formularioLogin.valid),s(8),m("ngIf",e.error!=""),s(),m("ngIf",e.validando)}},dependencies:[O,x,M,R,D,S,E,A,T,F,N,z],styles:[".login-form[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center}.form-group[_ngcontent-%COMP%]{margin:10px 0}.button-group[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;font-weight:700}input[_ngcontent-%COMP%]{padding:5px;border-radius:5px;border:1px solid #ccc;width:100%;max-width:300px}button[_ngcontent-%COMP%]{width:212px;margin:2px 25px;padding:10px;border:none;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer}.password[_ngcontent-%COMP%]{display:flex;align-items:center}.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:195px}.login-button[_ngcontent-%COMP%], .register-button[_ngcontent-%COMP%]{background-color:#3485c3;color:#fff}.login-button[_ngcontent-%COMP%]:hover, .register-button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.login-button[_ngcontent-%COMP%]:disabled{background-color:#3485c3b3;cursor:not-allowed}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:red 1px solid}small[_ngcontent-%COMP%]{text-decoration:underline;display:block;width:212px}.error[_ngcontent-%COMP%]{color:red}.button-container[_ngcontent-%COMP%]{position:fixed;bottom:.5%;left:.5%}.main-button[_ngcontent-%COMP%]{background-color:#00f;color:#fff;padding:10px 20px;font-size:16px;border:none;border-radius:5px;cursor:pointer}.hidden-buttons[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s}.button-container.active[_ngcontent-%COMP%]   .hidden-buttons[_ngcontent-%COMP%]{opacity:1;visibility:visible}.sub-button[_ngcontent-%COMP%]{height:50px;background-color:#3485c3;color:#fff;padding:0 20px;font-size:16px;border:none;border-radius:10px;cursor:pointer;transition:transform .5s;display:flex;align-items:center}.sub-button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.sub-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 5px}.sub-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:100%;border:1px solid whitesmoke}.button-container.active[_ngcontent-%COMP%]   .sub-button[_ngcontent-%COMP%]{transform:translateY(-370px)}.zoom[_ngcontent-%COMP%], .zomm[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInAnimation 1s ease forwards,_ngcontent-%COMP%_sizeChangeAnimation 2s ease forwards}@keyframes _ngcontent-%COMP%_fadeInAnimation{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_sizeChangeAnimation{0%{transform:scale(.1)}to{transform:scale(1)}}.button-container[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInAnimation 1s ease forwards}"]})};export{j as LoginComponent};
