import{a as p}from"./chunk-VP4YQ6D5.js";import{$a as ge,A as u,Aa as Z,B as N,Ba as w,Ca as k,Da as q,Ea as Q,F as V,Fa as ee,G as d,Ga as y,Ha as L,I as r,Ia as te,J as a,Ja as ne,K as g,Ka as oe,L as z,La as ie,M as B,Ma as re,N as G,Na as P,Oa as ae,Pa as se,Qa as pe,Ra as ce,S as s,Sa as me,Ua as le,Wa as ue,Za as de,_ as C,_a as fe,ab as ve,fa as Y,i as U,l as m,m as v,na as $,qa as h,r as j,s as H,sa as J,ta as K,ua as W,va as x,wa as I,xa as X,ya as b,za as E}from"./chunk-ZKOOGIRO.js";import"./chunk-WTI2L5DI.js";var A=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["app-bienvenida"]],standalone:!0,features:[C],decls:16,vars:0,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8","text-center"],[1,"text-title"],[1,"text-primary"],["role","group",1,"btn-group"],["routerLink","/login",1,"btn","btn-primary","btn-lg"],["routerLink","/registro",1,"btn","btn-outline-info","text-dark","btn-lg"],["src","../../../assets/medical_result.png",1,"img-1"],["src","../../../assets/microscope_medical.png",1,"img-2"]],template:function(n,o){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),s(4,"Bienvenida a la"),a(),r(5,"h1",4),s(6,"Cl\xEDnica On-Line"),a(),r(7,"p"),s(8,"Somos una cl\xEDnica especializada en salud."),a(),r(9,"div",5)(10,"a",6),s(11,"Ingresar"),a(),r(12,"a",7),s(13,"Registrar"),a()()()()(),g(14,"img",8)(15,"img",9))},dependencies:[I,b,h],styles:["[_nghost-%COMP%]{background-color:red}.text-primary[_ngcontent-%COMP%], .text-title[_ngcontent-%COMP%]{font-size:28px;font-weight:700;margin:4px 0}.container[_ngcontent-%COMP%]{margin-top:10vh}.col-md-8[_ngcontent-%COMP%]{border-radius:25px;padding:20px}.img-1[_ngcontent-%COMP%]{position:absolute;z-index:-1;bottom:5%;width:35vw;left:5%}.img-2[_ngcontent-%COMP%]{position:absolute;z-index:-1;bottom:5%;width:35vw;right:5%}p[_ngcontent-%COMP%]{font-size:18px}[_nghost-%COMP%], [_nghost-%COMP%]   *[_ngcontent-%COMP%]{opacity:1;transform:translateY(120%);animation:_ngcontent-%COMP%_slideInAnimation .5s ease forwards}@keyframes _ngcontent-%COMP%_slideInAnimation{0%{opacity:0;transform:translateY(120%)}to{opacity:1;transform:translateY(0)}}"]})};var O=(e,t)=>m(p).datos==null;var be=(e,t)=>{let n=m(p);return console.log(n.datos,"|",n.datos?.tipo),n.datos==null||n.datos?.tipo=="admin"};var _e=(e,t)=>{let n=m(p),o=m(x);return n==null?o.parseUrl("/home"):n.datos?.tipo=="admin"?!0:o.parseUrl("/perfil")};var ye=(e,t)=>m(p).datos!=null;var Ae=(e,t)=>m(p).datos?.tipo=="especialista";var Se=[{path:"",component:A,canActivate:[O]},{path:"home",component:A,canActivate:[O]},{path:"registro",loadComponent:()=>import("./chunk-7JVEATHY.js").then(e=>e.RegistroComponent),canActivate:[be]},{path:"login",loadComponent:()=>import("./chunk-RNASWVDU.js").then(e=>e.LoginComponent),canActivate:[O]},{path:"detalle-usuario",loadComponent:()=>import("./chunk-ZAJIGQ4R.js").then(e=>e.UsuariosComponent),canActivate:[_e]},{path:"perfil",loadComponent:()=>import("./chunk-H35T7IHA.js").then(e=>e.PerfilComponent),canActivate:[ye]},{path:"solicitar-turno",loadComponent:()=>import("./chunk-YKPESNGE.js").then(e=>e.SolicitarTurnoComponent)},{path:"solicitar-turno/admin",loadComponent:()=>import("./chunk-WQXV6MHW.js").then(e=>e.AdminComponent)},{path:"gestionar-horarios",loadComponent:()=>import("./chunk-MKCMNCTO.js").then(e=>e.GestionarHorariosComponent),canActivate:[Ae]},{path:"historial-turnos",loadComponent:()=>import("./chunk-7WEB23JS.js").then(e=>e.HistorialTurnosComponent)},{path:"historia-clinica",loadComponent:()=>import("./chunk-3OXW4WFH.js").then(e=>e.HistoriaClinicaComponent)},{path:"pacientes",loadComponent:()=>import("./chunk-HUA43HUX.js").then(e=>e.EspecialistaComponent)},{path:"estadisticas",loadComponent:()=>import("./chunk-OAZGM6AM.js").then(e=>e.EstadisticasComponent)}];var T={projectId:"tpclinica-1ac34",appId:"1:391509732992:web:377c8fcbf28f55a6c88065",storageBucket:"tpclinica-1ac34.appspot.com",apiKey:"AIzaSyC2yfgOSk8S1rV4476JjH04gXWCYaICpic",authDomain:"tpclinica-1ac34.firebaseapp.com",messagingSenderId:"391509732992"};var D=class{constructor(t,n){this._delegate=t,this.firebase=n,L(t,new Q("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),re(this._delegate)))}_getService(t,n=y){var o;this._delegate.checkDestroyed();let l=this._delegate.container.getProvider(t);return!l.isInitialized()&&((o=l.getComponent())===null||o===void 0?void 0:o.instantiationMode)==="EXPLICIT"&&l.initialize(),l.getImmediate({identifier:n})}_removeServiceInstance(t,n=y){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){L(this._delegate,t)}_addOrOverwriteComponent(t){te(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}};var we={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},xe=new w("app-compat","Firebase",we);function ke(e){let t={},n={__esModule:!0,initializeApp:Me,app:l,registerVersion:P,setLogLevel:se,onLog:ae,apps:null,SDK_VERSION:oe,INTERNAL:{registerComponent:Fe,removeApp:o,useAsService:Ne,modularAPIs:pe}};n.default=n,Object.defineProperty(n,"apps",{get:Re});function o(i){delete t[i]}function l(i){if(i=i||y,!k(t,i))throw xe.create("no-app",{appName:i});return t[i]}l.App=e;function Me(i,f={}){let c=ie(i,f);if(k(t,c.name))return t[c.name];let _=new e(c,n);return t[c.name]=_,_}function Re(){return Object.keys(t).map(i=>t[i])}function Fe(i){let f=i.name,c=f.replace("-compat","");if(ne(i)&&i.type==="PUBLIC"){let _=(S=l())=>{if(typeof S[c]!="function")throw xe.create("invalid-app-argument",{appName:f});return S[c]()};i.serviceProps!==void 0&&E(_,i.serviceProps),n[c]=_,e.prototype[c]=function(...S){return this._getService.bind(this,f).apply(this,i.multipleInstances?S:[])}}return i.type==="PUBLIC"?n[c]:null}function Ne(i,f){return f==="serverAuth"?null:f}return n}function Ee(){let e=ke(D);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:Ee,extendNamespace:t,createSubscribe:q,ErrorFactory:w,deepExtend:E});function t(n){E(e,n)}return e}var Le=Ee();var Ie=new ee("@firebase/app-compat"),Te="@firebase/app-compat",De="0.2.43";function Ue(e){P(Te,De,e)}try{let e=Z();if(e.firebase!==void 0){Ie.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);let t=e.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ie.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}var M=Le;Ue();var je="firebase",He="10.14.1";M.registerVersion(je,He,"app-compat");var Pe=new U("angularfire2.app.options");var Gt=typeof module<"u"&&!!module.hot;globalThis.\u0275AngularfireInstanceCache||=[];var Oe={providers:[Y({eventCoalescing:!0}),X(Se),ce(()=>me(T)),le(()=>ue()),de(()=>fe()),ge(()=>ve()),J(),{provide:Pe,useValue:T}]};function Ve(e,t){e&1&&(r(0,"li",9)(1,"a",10),s(2,"Estadisticas"),a()())}function ze(e,t){e&1&&(r(0,"li",9)(1,"a",11),s(2,"Usuarios"),a()())}function Be(e,t){e&1&&(r(0,"li",9)(1,"a",12),s(2,"Mis Turnos"),a()())}function Ge(e,t){e&1&&(r(0,"li",9)(1,"a",12),s(2,"Turnos"),a()())}function Ye(e,t){e&1&&(r(0,"li",9)(1,"a",13),s(2,"Mis Pacientes"),a()())}function $e(e,t){e&1&&(r(0,"li",9)(1,"a",14),s(2,"Solicitar Turno"),a()())}function Je(e,t){e&1&&(r(0,"li",9)(1,"a",15),s(2,"Solicitar Turno"),a()())}function Ke(e,t){e&1&&(r(0,"li",9)(1,"a",16),s(2,"Mi Perfil"),a()())}function We(e,t){if(e&1){let n=z();r(0,"li",9)(1,"a",17),B("click",function(){j(n);let l=G();return H(l.cerrarSesion())}),s(2,"Cerrar Sesion"),a()()}}var R=class e{constructor(t,n){this.usuario=t;this.router=n}get tipoUsuario(){return this.usuario.datos?.tipo}cerrarSesion(){this.usuario.cerrarSesion(),this.router.navigate(["/home"])}static \u0275fac=function(n){return new(n||e)(N(p),N(x))};static \u0275cmp=v({type:e,selectors:[["app-header"]],standalone:!0,features:[C],decls:18,vars:9,consts:[[1,"navbar","navbar-expand-sm","bg-body-tertiary"],[1,"container"],["routerLink","/",1,"navbar-brand"],["src","../../../assets/favicon.png","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","/navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-end"],[1,"navbar-nav","ml-auto","mb-2","mb-lg-0"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["routerLink","/estadisticas",1,"nav-link","active"],["routerLink","/detalle-usuario",1,"nav-link","active"],["routerLink","/historial-turnos",1,"nav-link","active"],["routerLink","/pacientes",1,"nav-link","active"],["routerLink","/solicitar-turno",1,"nav-link","active"],["routerLink","/solicitar-turno/admin",1,"nav-link","active"],["routerLink","/perfil",1,"nav-link","active"],[1,"nav-link","active","text-danger",3,"click"]],template:function(n,o){n&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),g(3,"img",3),s(4," Clinica On-Line "),a(),r(5,"button",4),g(6,"span",5),a(),r(7,"div",6)(8,"ul",7),V(9,Ve,3,0,"li",8)(10,ze,3,0,"li",8)(11,Be,3,0,"li",8)(12,Ge,3,0,"li",8)(13,Ye,3,0,"li",8)(14,$e,3,0,"li",8)(15,Je,3,0,"li",8)(16,Ke,3,0,"li",8)(17,We,3,0,"li",8),a()()()()),n&2&&(u(9),d("ngIf",o.tipoUsuario=="admin"),u(),d("ngIf",o.tipoUsuario=="admin"),u(),d("ngIf",o.tipoUsuario=="especialista"||o.tipoUsuario=="paciente"),u(),d("ngIf",o.tipoUsuario=="admin"),u(),d("ngIf",o.tipoUsuario=="especialista"),u(),d("ngIf",o.tipoUsuario=="paciente"),u(),d("ngIf",o.tipoUsuario=="admin"),u(),d("ngIf",o.tipoUsuario!=null),u(),d("ngIf",o.tipoUsuario!=null))},dependencies:[I,b,h,$],styles:[".nav-link[_ngcontent-%COMP%]:hover{background-color:#2736df;color:#fff;border-radius:5px;transition:background-color .3s ease}.navbar[_ngcontent-%COMP%]{border-bottom:1px solid black}.nav-link[_ngcontent-%COMP%]{font-size:18px;margin:0 5px}.navbar-brand[_ngcontent-%COMP%]{font-weight:600;font-size:18px;display:flex;align-items:center}img[_ngcontent-%COMP%]{margin-right:8px}.text-danger[_ngcontent-%COMP%]{border:1px solid red;border-radius:5px}.text-danger[_ngcontent-%COMP%]:hover{background-color:#ff000006;transition:background-color .3s ease;cursor:pointer}"]})};var F=class e{title="tpclinica";static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["app-root"]],standalone:!0,features:[C],decls:3,vars:0,consts:[["outlet","outlet"]],template:function(n,o){n&1&&g(0,"app-header")(1,"router-outlet",null,0)},dependencies:[W,b,h,R]})};K(F,Oe).catch(e=>console.error(e));