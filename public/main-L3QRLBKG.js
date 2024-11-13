import{a as p}from"./chunk-JUPKOMRS.js";import{$ as C,$a as ve,Aa as w,Ba as L,C as u,Ca as q,D as N,Da as Q,Ea as ee,Fa as y,Ga as k,H,Ha as te,I as d,Ia as ne,Ja as oe,K as r,Ka as ie,L as a,La as re,M as g,Ma as O,N as z,Na as ae,O as B,Oa as se,P as G,Pa as pe,Qa as ce,Ra as le,Ta as me,U as s,Va as ue,Ya as de,Za as fe,_a as ge,fa as $,l as U,na as Y,o as l,p as v,qa as h,ra as J,sa as K,ta as W,u as j,ua as x,v as V,va as I,wa as X,xa as b,ya as P,za as Z}from"./chunk-CITMPR77.js";var A=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["app-bienvenida"]],standalone:!0,features:[C],decls:16,vars:0,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8","text-center"],[1,"text-title"],[1,"text-primary"],["role","group",1,"btn-group"],["routerLink","/login",1,"btn","btn-primary","btn-lg"],["routerLink","/registro",1,"btn","btn-outline-info","text-dark","btn-lg"],["src","../../../assets/medical_result.png",1,"img-1"],["src","../../../assets/microscope_medical.png",1,"img-2"]],template:function(n,o){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),s(4,"Bienvenida a la"),a(),r(5,"h1",4),s(6,"Cl\xEDnica On-Line"),a(),r(7,"p"),s(8,"Somos una cl\xEDnica especializada en salud."),a(),r(9,"div",5)(10,"a",6),s(11,"Ingresar"),a(),r(12,"a",7),s(13,"Registrar"),a()()()()(),g(14,"img",8)(15,"img",9))},dependencies:[I,b,h],styles:["[_nghost-%COMP%]{background-color:red}.text-primary[_ngcontent-%COMP%], .text-title[_ngcontent-%COMP%]{font-size:28px;font-weight:700;margin:4px 0}.container[_ngcontent-%COMP%]{margin-top:10vh}.col-md-8[_ngcontent-%COMP%]{border-radius:25px;padding:20px}.img-1[_ngcontent-%COMP%]{position:absolute;z-index:-1;bottom:5%;width:35vw;left:5%}.img-2[_ngcontent-%COMP%]{position:absolute;z-index:-1;bottom:5%;width:35vw;right:5%}p[_ngcontent-%COMP%]{font-size:18px}[_nghost-%COMP%], [_nghost-%COMP%]   *[_ngcontent-%COMP%]{opacity:0;transform:translate(-100%);animation:_ngcontent-%COMP%_slideInAnimation .5s ease forwards}@keyframes _ngcontent-%COMP%_slideInAnimation{0%{opacity:0;transform:translate(-100%)}to{opacity:1;transform:translate(0)}}"]})};var E=(e,t)=>l(p).datos==null;var be=(e,t)=>{let n=l(p);return console.log(n.datos,"|",n.datos?.tipo),n.datos==null||n.datos?.tipo=="admin"};var _e=(e,t)=>{let n=l(p),o=l(x);return n==null?o.parseUrl("/home"):n.datos?.tipo=="admin"?!0:o.parseUrl("/perfil")};var ye=(e,t)=>l(p).datos!=null;var Ae=(e,t)=>l(p).datos?.tipo=="especialista";var Se=[{path:"",component:A,canActivate:[E]},{path:"home",component:A,canActivate:[E]},{path:"registro",loadComponent:()=>import("./chunk-JBDYAGZX.js").then(e=>e.RegistroComponent),canActivate:[be]},{path:"login",loadComponent:()=>import("./chunk-24CD2EJY.js").then(e=>e.LoginComponent),canActivate:[E]},{path:"detalle-usuario",loadComponent:()=>import("./chunk-PP7K2PKR.js").then(e=>e.DetalleUsuarioComponent),canActivate:[_e]},{path:"lista-usuarios",loadComponent:()=>import("./chunk-LUBOTQMD.js").then(e=>e.ListaUsuariosComponent)},{path:"perfil",loadComponent:()=>import("./chunk-BOQGJ4DF.js").then(e=>e.PerfilComponent),canActivate:[ye]},{path:"solicitar-turno",loadComponent:()=>import("./chunk-YUWNT3TR.js").then(e=>e.SolicitarTurnoComponent)},{path:"solicitar-turno/admin",loadComponent:()=>import("./chunk-EJ5TPE63.js").then(e=>e.AdminComponent)},{path:"gestionar-horarios",loadComponent:()=>import("./chunk-QZINC6GK.js").then(e=>e.GestionarHorariosComponent),canActivate:[Ae]},{path:"historial-turnos",loadComponent:()=>import("./chunk-G7Q7ZLH7.js").then(e=>e.HistorialTurnosComponent)}];var D={projectId:"tpclinica-1ac34",appId:"1:391509732992:web:377c8fcbf28f55a6c88065",storageBucket:"tpclinica-1ac34.appspot.com",apiKey:"AIzaSyC2yfgOSk8S1rV4476JjH04gXWCYaICpic",authDomain:"tpclinica-1ac34.firebaseapp.com",messagingSenderId:"391509732992"};var T=class{constructor(t,n){this._delegate=t,this.firebase=n,k(t,new Q("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),re(this._delegate)))}_getService(t,n=y){var o;this._delegate.checkDestroyed();let m=this._delegate.container.getProvider(t);return!m.isInitialized()&&((o=m.getComponent())===null||o===void 0?void 0:o.instantiationMode)==="EXPLICIT"&&m.initialize(),m.getImmediate({identifier:n})}_removeServiceInstance(t,n=y){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){k(this._delegate,t)}_addOrOverwriteComponent(t){te(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}};var we={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},xe=new w("app-compat","Firebase",we);function Le(e){let t={},n={__esModule:!0,initializeApp:Me,app:m,registerVersion:O,setLogLevel:se,onLog:ae,apps:null,SDK_VERSION:oe,INTERNAL:{registerComponent:Fe,removeApp:o,useAsService:Ne,modularAPIs:pe}};n.default=n,Object.defineProperty(n,"apps",{get:Re});function o(i){delete t[i]}function m(i){if(i=i||y,!L(t,i))throw xe.create("no-app",{appName:i});return t[i]}m.App=e;function Me(i,f={}){let c=ie(i,f);if(L(t,c.name))return t[c.name];let _=new e(c,n);return t[c.name]=_,_}function Re(){return Object.keys(t).map(i=>t[i])}function Fe(i){let f=i.name,c=f.replace("-compat","");if(ne(i)&&i.type==="PUBLIC"){let _=(S=m())=>{if(typeof S[c]!="function")throw xe.create("invalid-app-argument",{appName:f});return S[c]()};i.serviceProps!==void 0&&P(_,i.serviceProps),n[c]=_,e.prototype[c]=function(...S){return this._getService.bind(this,f).apply(this,i.multipleInstances?S:[])}}return i.type==="PUBLIC"?n[c]:null}function Ne(i,f){return f==="serverAuth"?null:f}return n}function Pe(){let e=Le(T);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:Pe,extendNamespace:t,createSubscribe:q,ErrorFactory:w,deepExtend:P});function t(n){P(e,n)}return e}var ke=Pe();var Ie=new ee("@firebase/app-compat"),De="@firebase/app-compat",Te="0.2.43";function Ue(e){O(De,Te,e)}try{let e=Z();if(e.firebase!==void 0){Ie.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);let t=e.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ie.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}var M=ke;Ue();var je="firebase",Ve="10.14.1";M.registerVersion(je,Ve,"app-compat");var Oe=new U("angularfire2.app.options");var Bt=typeof module<"u"&&!!module.hot;globalThis.\u0275AngularfireInstanceCache||=[];var Ee={providers:[$({eventCoalescing:!0}),X(Se),ce(()=>le(D)),me(()=>ue()),de(()=>fe()),ge(()=>ve()),J(),{provide:Oe,useValue:D}]};function He(e,t){e&1&&(r(0,"li",9)(1,"a",10),s(2,"Usuarios"),a()())}function ze(e,t){e&1&&(r(0,"li",9)(1,"a",11),s(2,"Mis Turnos"),a()())}function Be(e,t){e&1&&(r(0,"li",9)(1,"a",11),s(2,"Turnos"),a()())}function Ge(e,t){e&1&&(r(0,"li",9)(1,"a",12),s(2,"Mis Pacientes"),a()())}function $e(e,t){e&1&&(r(0,"li",9)(1,"a",13),s(2,"Solicitar Turno"),a()())}function Ye(e,t){e&1&&(r(0,"li",9)(1,"a",14),s(2,"Solicitar Turno"),a()())}function Je(e,t){e&1&&(r(0,"li",9)(1,"a",15),s(2,"Mi Perfil"),a()())}function Ke(e,t){if(e&1){let n=z();r(0,"li",9)(1,"a",16),B("click",function(){j(n);let m=G();return V(m.cerrarSesion())}),s(2,"Cerrar Sesion"),a()()}}var R=class e{constructor(t,n){this.usuario=t;this.router=n}get tipoUsuario(){return this.usuario.datos?.tipo}cerrarSesion(){this.usuario.cerrarSesion(),this.router.navigate(["home"])}static \u0275fac=function(n){return new(n||e)(N(p),N(x))};static \u0275cmp=v({type:e,selectors:[["app-header"]],standalone:!0,features:[C],decls:17,vars:8,consts:[[1,"navbar","navbar-expand-sm","bg-body-tertiary"],[1,"container"],["routerLink","/",1,"navbar-brand"],["src","../../../assets/favicon.png","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","/navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-end"],[1,"navbar-nav","ml-auto","mb-2","mb-lg-0"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["routerLink","/detalle-usuario",1,"nav-link","active"],["routerLink","/historial-turnos",1,"nav-link","active"],["routerLink","/pacientes",1,"nav-link","active"],["routerLink","/solicitar-turno",1,"nav-link","active"],["routerLink","/solicitar-turno/admin",1,"nav-link","active"],["routerLink","/perfil",1,"nav-link","active"],[1,"nav-link","active","text-danger",3,"click"]],template:function(n,o){n&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),g(3,"img",3),s(4," Clinica On-Line "),a(),r(5,"button",4),g(6,"span",5),a(),r(7,"div",6)(8,"ul",7),H(9,He,3,0,"li",8)(10,ze,3,0,"li",8)(11,Be,3,0,"li",8)(12,Ge,3,0,"li",8)(13,$e,3,0,"li",8)(14,Ye,3,0,"li",8)(15,Je,3,0,"li",8)(16,Ke,3,0,"li",8),a()()()()),n&2&&(u(9),d("ngIf",o.tipoUsuario=="admin"),u(),d("ngIf",o.tipoUsuario=="especialista"||o.tipoUsuario=="paciente"),u(),d("ngIf",o.tipoUsuario=="admin"),u(),d("ngIf",o.tipoUsuario=="especialista"),u(),d("ngIf",o.tipoUsuario=="paciente"),u(),d("ngIf",o.tipoUsuario=="admin"),u(),d("ngIf",o.tipoUsuario!=null),u(),d("ngIf",o.tipoUsuario!=null))},dependencies:[I,b,h,Y],styles:[".nav-link[_ngcontent-%COMP%]:hover{background-color:#2736df;color:#fff;border-radius:5px;transition:background-color .3s ease}.navbar[_ngcontent-%COMP%]{border-bottom:1px solid black}.nav-link[_ngcontent-%COMP%]{font-size:18px;margin:0 5px}.navbar-brand[_ngcontent-%COMP%]{font-weight:600;font-size:18px;display:flex;align-items:center}img[_ngcontent-%COMP%]{margin-right:8px}.text-danger[_ngcontent-%COMP%]{border:1px solid red;border-radius:5px}.text-danger[_ngcontent-%COMP%]:hover{background-color:#ff000006;transition:background-color .3s ease;cursor:pointer}"]})};var F=class e{title="tpclinica";static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["app-root"]],standalone:!0,features:[C],decls:3,vars:0,consts:[["outlet","outlet"]],template:function(n,o){n&1&&g(0,"app-header")(1,"router-outlet",null,0)},dependencies:[W,b,h,R]})};K(F,Ee).catch(e=>console.error(e));
