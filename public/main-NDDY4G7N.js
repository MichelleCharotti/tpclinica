import{Aa as L,B as M,Ba as te,C as F,Ca as ne,Da as oe,Ea as re,Fa as ie,G as z,Ga as O,H as N,Ha as ae,Ia as se,J as i,Ja as pe,K as a,Ka as ce,L as d,La as me,M as B,N as H,Na as le,O as $,Pa as ue,Sa as de,T as p,Ta as fe,Ua as ge,Va as ve,Xa as m,_ as g,ba as G,ja as Y,ka as v,l as j,la as J,ma as K,na as W,o as l,oa as A,p as f,pa as x,qa as X,ra as b,sa as S,t as V,ta as Z,u as U,ua as w,va as D,wa as q,xa as Q,ya as ee,za as h}from"./chunk-RE4NDVYS.js";var y=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["app-bienvenida"]],standalone:!0,features:[g],decls:18,vars:0,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8","text-center"],[1,"text-title"],[1,"text-primary"],["role","group",1,"btn-group"],["routerLink","/login",1,"btn","btn-primary","btn-lg"],["routerLink","registro",1,"btn","btn-outline-info","text-dark","btn-lg"],["src","../../../assets/medical_result.png",1,"img-1"],["src","../../../assets/microscope_medical.png",1,"img-2"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),p(4,"Bienvenida a la"),a(),i(5,"h1",4),p(6,"Cl\xEDnica On-Line"),a(),i(7,"p"),p(8,"Somos una cl\xEDnica especializada en salud."),a(),i(9,"p"),p(10,"Ofrecemos servicios y tratamientos para cuidar tu salud y bienestar."),a(),i(11,"div",5)(12,"a",6),p(13,"Ingresar"),a(),i(14,"a",7),p(15,"Registrar"),a()()()()(),d(16,"img",8)(17,"img",9))},dependencies:[x,b,v],styles:["[_nghost-%COMP%]{background-color:red}.text-primary[_ngcontent-%COMP%], .text-title[_ngcontent-%COMP%]{font-size:28px;font-weight:700;margin:4px 0}.container[_ngcontent-%COMP%]{margin-top:10vh}.col-md-8[_ngcontent-%COMP%]{border-radius:25px;padding:20px}.img-1[_ngcontent-%COMP%]{position:absolute;z-index:-1;bottom:5%;width:35vw;left:5%}.img-2[_ngcontent-%COMP%]{position:absolute;z-index:-1;bottom:5%;width:35vw;right:5%}p[_ngcontent-%COMP%]{font-size:18px}[_nghost-%COMP%], [_nghost-%COMP%]   *[_ngcontent-%COMP%]{opacity:0;transform:translate(-100%);animation:_ngcontent-%COMP%_slideInAnimation .5s ease forwards}@keyframes _ngcontent-%COMP%_slideInAnimation{0%{opacity:0;transform:translate(-100%)}to{opacity:1;transform:translate(0)}}"]})};var I=(e,t)=>l(m).datos==null;var he=(e,t)=>{let n=l(m);return console.log(n.datos,"|",n.datos?.tipo),n.datos==null||n.datos?.tipo=="admin"};var ye=(e,t)=>{let n=l(m),r=l(A);return n==null?r.parseUrl("/home"):n.datos?.tipo=="admin"?!0:r.parseUrl("/perfil")};var _e=(e,t)=>l(m).datos!=null;var Ae=[{path:"",component:y,canActivate:[I]},{path:"home",component:y,canActivate:[I]},{path:"registro",loadComponent:()=>import("./chunk-YKIZC6TM.js").then(e=>e.RegistroComponent),canActivate:[he]},{path:"login",loadComponent:()=>import("./chunk-7RF7KIC2.js").then(e=>e.LoginComponent),canActivate:[I]},{path:"detalle-usuario",loadComponent:()=>import("./chunk-6QHETXFB.js").then(e=>e.DetalleUsuarioComponent),canActivate:[ye]},{path:"perfil",loadComponent:()=>import("./chunk-KIMQK74E.js").then(e=>e.PerfilComponent),canActivate:[_e]}];var k={projectId:"tpclinica-1ac34",appId:"1:391509732992:web:377c8fcbf28f55a6c88065",storageBucket:"tpclinica-1ac34.appspot.com",apiKey:"AIzaSyC2yfgOSk8S1rV4476JjH04gXWCYaICpic",authDomain:"tpclinica-1ac34.firebaseapp.com",messagingSenderId:"391509732992"};var T=class{constructor(t,n){this._delegate=t,this.firebase=n,L(t,new Q("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ie(this._delegate)))}_getService(t,n=h){var r;this._delegate.checkDestroyed();let c=this._delegate.container.getProvider(t);return!c.isInitialized()&&((r=c.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&c.initialize(),c.getImmediate({identifier:n})}_removeServiceInstance(t,n=h){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){L(this._delegate,t)}_addOrOverwriteComponent(t){te(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}};var Ne={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},xe=new w("app-compat","Firebase",Ne);function we(e){let t={},n={__esModule:!0,initializeApp:Ee,app:c,registerVersion:O,setLogLevel:se,onLog:ae,apps:null,SDK_VERSION:oe,INTERNAL:{registerComponent:Me,removeApp:r,useAsService:Fe,modularAPIs:pe}};n.default=n,Object.defineProperty(n,"apps",{get:Re});function r(o){delete t[o]}function c(o){if(o=o||h,!D(t,o))throw xe.create("no-app",{appName:o});return t[o]}c.App=e;function Ee(o,u={}){let s=re(o,u);if(D(t,s.name))return t[s.name];let C=new e(s,n);return t[s.name]=C,C}function Re(){return Object.keys(t).map(o=>t[o])}function Me(o){let u=o.name,s=u.replace("-compat","");if(ne(o)&&o.type==="PUBLIC"){let C=(_=c())=>{if(typeof _[s]!="function")throw xe.create("invalid-app-argument",{appName:u});return _[s]()};o.serviceProps!==void 0&&S(C,o.serviceProps),n[s]=C,e.prototype[s]=function(..._){return this._getService.bind(this,u).apply(this,o.multipleInstances?_:[])}}return o.type==="PUBLIC"?n[s]:null}function Fe(o,u){return u==="serverAuth"?null:u}return n}function Oe(){let e=we(T);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:Oe,extendNamespace:t,createSubscribe:q,ErrorFactory:w,deepExtend:S});function t(n){S(e,n)}return e}var De=Oe();var Se=new ee("@firebase/app-compat"),Le="@firebase/app-compat",ke="0.2.43";function Te(e){O(Le,ke,e)}try{let e=Z();if(e.firebase!==void 0){Se.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);let t=e.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Se.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}var P=De;Te();var je="firebase",Ve="10.14.1";P.registerVersion(je,Ve,"app-compat");var Ie=new j("angularfire2.app.options");var Nt=typeof module<"u"&&!!module.hot;globalThis.\u0275AngularfireInstanceCache||=[];var Pe={providers:[G({eventCoalescing:!0}),X(Ae),ce(()=>me(k)),le(()=>ue()),de(()=>fe()),ge(()=>ve()),J(),{provide:Ie,useValue:k}]};function Ue(e,t){e&1&&(i(0,"li",9)(1,"a",10),p(2,"Usuarios"),a()())}function ze(e,t){if(e&1){let n=B();i(0,"li",9)(1,"a",11),H("click",function(){V(n);let c=$();return U(c.cerrarSesion())}),p(2,"Cerrar Sesion"),a()()}}var E=class e{constructor(t,n){this.usuario=t;this.router=n}get tipoUsuario(){return this.usuario.datos?.tipo}cerrarSesion(){this.usuario.cerrarSesion(),this.router.navigate(["home"])}static \u0275fac=function(n){return new(n||e)(F(m),F(A))};static \u0275cmp=f({type:e,selectors:[["app-header"]],standalone:!0,features:[g],decls:11,vars:2,consts:[[1,"navbar","navbar-expand-sm","bg-body-tertiary"],[1,"container"],["routerLink","/",1,"navbar-brand"],["src","../../../assets/favicon.png","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","/navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-end"],[1,"navbar-nav","ml-auto","mb-2","mb-lg-0"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["routerLink","/detalle-usuario",1,"nav-link","active"],[1,"nav-link","active","text-danger",3,"click"]],template:function(n,r){n&1&&(i(0,"nav",0)(1,"div",1)(2,"a",2),d(3,"img",3),p(4," Clinica On-Line "),a(),i(5,"button",4),d(6,"span",5),a(),i(7,"div",6)(8,"ul",7),z(9,Ue,3,0,"li",8)(10,ze,3,0,"li",8),a()()()()),n&2&&(M(9),N("ngIf",r.tipoUsuario=="admin"),M(),N("ngIf",r.tipoUsuario!=null))},dependencies:[x,b,v,Y],styles:[".nav-link[_ngcontent-%COMP%]:hover{background-color:#2736df;color:#fff;border-radius:5px;transition:background-color .3s ease}.navbar[_ngcontent-%COMP%]{border-bottom:1px solid black}.nav-link[_ngcontent-%COMP%]{font-size:18px;margin:0 5px}.navbar-brand[_ngcontent-%COMP%]{font-weight:600;font-size:18px;display:flex;align-items:center}img[_ngcontent-%COMP%]{margin-right:8px}.text-danger[_ngcontent-%COMP%]{border:1px solid red;border-radius:5px}.text-danger[_ngcontent-%COMP%]:hover{background-color:#ff000006;transition:background-color .3s ease;cursor:pointer}"]})};var R=class e{title="tpclinica";static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:3,vars:0,consts:[["outlet","outlet"]],template:function(n,r){n&1&&d(0,"app-header")(1,"router-outlet",null,0)},dependencies:[W,b,v,E]})};K(R,Pe).catch(e=>console.error(e));