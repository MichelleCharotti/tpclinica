import{a as Ie}from"./chunk-2AU4HY5R.js";import{a as _e,b as Ce,c as ve,d as m,e as be,f as N,g as xe,h as we,i as b,j as Ee,k as ye,l as Se,m as Re,n as z,o as F}from"./chunk-CRJ7JGEG.js";import{$ as M,B as p,C as v,D as W,F as ee,G as h,H as l,J as o,K as a,L as y,M as w,Ma as ge,N as g,O as d,Oa as he,P as te,Q as ie,R as ne,S as $,T as s,U as A,W as re,Wa as T,X as ae,Xa as fe,Y as oe,Z as se,_ as D,c as Q,ca as le,ha as ce,i as K,ia as pe,j as U,ja as de,k as H,ka as k,m as Y,n as V,oa as me,p as I,pa as ue,q as J,r as X,ra as j,s as q,t as _,u as C,w as B,x,y as P}from"./chunk-RE4NDVYS.js";function ke(){return t=>{let i=t.get("password"),e=t.get("repetirPassword"),n={noCoincide:"La Contrase\xF1a No Coincide"};return i?.value!==e?.value?(t.get("repetirPassword")?.setErrors(n),n):(t.get("repetirPassword")?.setErrors(null),null)}}function ze(t,i){if(t&1){let e=w();o(0,"div",3),g("click",function(){let r=_(e).$implicit,c=d();return C(c.seleccionar(r))}),o(1,"p"),s(2),a(),o(3,"div",4)(4,"input",5),oe("ngModelChange",function(r){let c=_(e).$implicit;return ae(c.seleccionado,r)||(c.seleccionado=r),C(r)}),g("change",function(){_(e);let r=d();return C(r.actulizarSeleccion())}),a()()()}if(t&2){let e=i.$implicit;p(2),A(e.especialidad.nombre),p(2),l("name",e.especialidad.id),re("ngModel",e.seleccionado)}}var L=class t{constructor(i){this.db=i}onEspecialidadesSeleccionados=new x;onSeleccionarUnEspecialidad=new x;especialidades=[];especialidadesSeleccionadas=[];subcripcion;ngOnInit(){this.subcripcion=this.db.obtenerEspecialidades().subscribe(i=>{this.especialidades=[];for(let e of i)this.especialidades.push({seleccionado:!1,especialidad:e})})}ngOnDestroy(){this.subcripcion&&this.subcripcion.unsubscribe()}actulizarSeleccion(){this.especialidadesSeleccionadas=this.especialidades.filter(i=>i.seleccionado),this.emitirListadoSeleccionado()}emitirListadoSeleccionado(){this.onEspecialidadesSeleccionados.emit(this.especialidadesSeleccionadas)}seleccionar(i){i.seleccionado=!i.seleccionado,this.especialidadesSeleccionadas=this.especialidades.filter(e=>e.seleccionado),this.emitirListadoSeleccionado()}static \u0275fac=function(e){return new(e||t)(v(T))};static \u0275cmp=I({type:t,selectors:[["app-lista-especialidades"]],outputs:{onEspecialidadesSeleccionados:"onEspecialidadesSeleccionados",onSeleccionarUnEspecialidad:"onSeleccionarUnEspecialidad"},standalone:!0,features:[D],decls:4,vars:1,consts:[[1,"titulo"],[1,"listado"],["class","especialidad-datos",3,"click",4,"ngFor","ngForOf"],[1,"especialidad-datos",3,"click"],[1,"selector"],["type","checkbox",3,"ngModelChange","change","name","ngModel"]],template:function(e,n){e&1&&(o(0,"p",0),s(1,"Seleccione Especialidad"),a(),o(2,"div",1),h(3,ze,5,3,"div",2),a()),e&2&&(p(3),l("ngForOf",n.especialidades))},dependencies:[j,k,pe,z,Ce,N,Ee,F],styles:[".especialidad-datos[_ngcontent-%COMP%]{cursor:pointer;display:flex;background-color:#fff;border-radius:5px;border:1px solid gray;justify-content:center;width:155px;margin:5px 5px 0 0;font-size:14px}.especialidad-datos[_ngcontent-%COMP%]:hover{font-weight:600}.selector[_ngcontent-%COMP%]{display:grid;justify-content:center}.especialidad-datos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;justify-content:center;margin:0;width:125px;text-align:center}.titulo[_ngcontent-%COMP%]{font-weight:600;font-size:16px;font-weight:700;text-align:center}.listado[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"]})};var Fe=["captchaWrapperElem"],G=(()=>{class t{constructor(e){this.zone=e,this.scriptElemId="ngx-catpcha-script",this.windowGrecaptcha="grecaptcha",this.windowGrecaptchaEnterprise="enterprise",this.windowOnLoadCallbackProperty="ngx_captcha_onload_callback",this.windowOnLoadEnterpriseCallbackProperty="ngx_captcha_onload_enterprise_callback",this.globalDomain="recaptcha.net",this.defaultDomain="google.com",this.enterpriseApi="enterprise.js",this.defaultApi="api.js"}registerCaptchaScript(e,n,r,c){if(this.grecaptchaScriptLoaded(e.useEnterprise)){e.useEnterprise?this.zone.run(()=>{r(window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise])}):this.zone.run(()=>{r(window[this.windowGrecaptcha])});return}e.useEnterprise?window[this.getCallbackName(!0)]=()=>this.zone.run(r.bind(this,window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise])):window[this.getCallbackName(!1)]=()=>this.zone.run(r.bind(this,window[this.windowGrecaptcha]));let u=document.createElement("script");u.id=this.scriptElemId,u.innerHTML="",u.src=this.getCaptchaScriptUrl(e,n,c),u.async=!0,u.defer=!0,document.getElementsByTagName("head")[0].appendChild(u)}cleanup(){let e=document.getElementById(this.scriptElemId);e&&e.remove(),window[this.getCallbackName()]=void 0,window[this.windowGrecaptcha]=void 0}grecaptchaScriptLoaded(e){return!window[this.getCallbackName(e)]||!window[this.windowGrecaptcha]?!1:e&&window[this.windowGrecaptcha][this.windowGrecaptchaEnterprise]?!0:!!window[this.windowGrecaptcha].execute}getCallbackName(e){return e?this.windowOnLoadEnterpriseCallbackProperty:this.windowOnLoadCallbackProperty}getLanguageParam(e){return e?`&hl=${e}`:""}getCaptchaScriptUrl(e,n,r){let c=e.useGlobalDomain?this.globalDomain:this.defaultDomain,u=e.useEnterprise?this.enterpriseApi:this.defaultApi,E=this.getCallbackName(e.useEnterprise);return`https://www.${c}/recaptcha/${u}?onload=${E}&render=${n}${this.getLanguageParam(r)}`}}return t.\u0275fac=function(e){return new(e||t)(V(P))},t.\u0275prov=U({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Le=(()=>{class t{constructor(e,n,r,c){this.renderer=e,this.zone=n,this.injector=r,this.scriptService=c,this.captchaElemPrefix="ngx_captcha_id_",this.setupCaptcha=!0,this.useGlobalDomain=!1,this.useEnterprise=!1,this.type="image",this.tabIndex=0,this.success=new x,this.load=new x,this.reset=new x,this.ready=new x,this.error=new x,this.expire=new x,this.setupAfterLoad=!1,this.resetCaptchaAfterSuccess=!1,this.onChange=u=>{},this.onTouched=u=>{},this.isLoaded=!1}ngAfterViewInit(){this.control=this.injector.get(be,void 0,Y.Optional)?.control}ngAfterViewChecked(){this.setupCaptcha&&(this.setupCaptcha=!1,this.setupComponent())}ngOnChanges(e){e&&e.hl&&!e.hl.firstChange&&e.hl.currentValue!==e.hl.previousValue&&this.scriptService.cleanup(),e&&e.useGlobalDomain&&!e.useGlobalDomain.firstChange&&e.useGlobalDomain.currentValue!==e.useGlobalDomain.previousValue&&this.scriptService.cleanup(),this.setupCaptcha=!0}getResponse(){return this.reCaptchaApi.getResponse(this.captchaId)}getCaptchaId(){return this.captchaId}resetCaptcha(){this.zone.run(()=>{this.reCaptchaApi.reset(),this.onChange(void 0),this.onTouched(void 0),this.reset.next()})}getCurrentResponse(){return this.currentResponse}reloadCaptcha(){this.setupComponent()}ensureCaptchaElem(e){let n=document.getElementById(e);if(!n)throw Error(`Captcha element with id '${e}' was not found`);this.captchaElem=n}renderReCaptcha(){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.captchaId=this.reCaptchaApi.render(this.captchaElemId,this.getCaptchaProperties()),this.ready.next()},0)})}handleCallback(e){this.currentResponse=e,this.success.next(e),this.zone.run(()=>{this.onChange(e),this.onTouched(e)}),this.resetCaptchaAfterSuccess&&this.resetCaptcha()}getPseudoUniqueNumber(){return new Date().getUTCMilliseconds()+Math.floor(Math.random()*9999)}setupComponent(){this.captchaSpecificSetup(),this.createAndSetCaptchaElem(),this.scriptService.registerCaptchaScript({useGlobalDomain:this.useGlobalDomain,useEnterprise:this.useEnterprise},"explicit",e=>{this.onloadCallback(e)},this.hl)}onloadCallback(e){if(this.reCaptchaApi=e,!this.reCaptchaApi)throw Error("ReCaptcha Api was not initialized correctly");this.isLoaded=!0,this.load.next(),this.renderReCaptcha(),this.setupAfterLoad&&(this.setupAfterLoad=!1,this.setupComponent())}generateNewElemId(){return this.captchaElemPrefix+this.getPseudoUniqueNumber()}createAndSetCaptchaElem(){if(this.captchaElemId=this.generateNewElemId(),!this.captchaElemId)throw Error("Captcha elem Id is not set");if(!this.captchaWrapperElem)throw Error("Captcha DOM element is not initialized");this.captchaWrapperElem.nativeElement.innerHTML="";let e=this.renderer.createElement("div");e.id=this.captchaElemId,this.renderer.appendChild(this.captchaWrapperElem.nativeElement,e),setTimeout(()=>{this.captchaElemId&&this.ensureCaptchaElem(this.captchaElemId)},0)}writeValue(e){}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}handleErrorCallback(){this.zone.run(()=>{this.onChange(void 0),this.onTouched(void 0)}),this.error.next()}handleExpireCallback(){this.expire.next(),this.resetCaptcha()}}return t.\u0275fac=function(e){return new(e||t)(v(W),v(P),v(B),v(G))},t.\u0275dir=X({type:t,inputs:{siteKey:"siteKey",useGlobalDomain:"useGlobalDomain",useEnterprise:"useEnterprise",type:"type",hl:"hl",tabIndex:"tabIndex"},outputs:{success:"success",load:"load",reset:"reset",ready:"ready",error:"error",expire:"expire"},features:[q]}),t})(),Me=function(t){return t[t.InvisibleReCaptcha=0]="InvisibleReCaptcha",t[t.ReCaptcha2=1]="ReCaptcha2",t}(Me||{});var Oe=(()=>{class t extends Le{constructor(e,n,r,c){super(e,n,r,c),this.renderer=e,this.zone=n,this.injector=r,this.scriptService=c,this.windowOnErrorCallbackProperty="ngx_captcha_error_callback",this.windowOnExpireCallbackProperty="ngx_captcha_expire_callback",this.theme="light",this.size="normal",this.recaptchaType=Me.ReCaptcha2}ngOnChanges(e){super.ngOnChanges(e)}ngOnDestroy(){window[this.windowOnErrorCallbackProperty]={},window[this.windowOnExpireCallbackProperty]={}}captchaSpecificSetup(){this.registerCallbacks()}getCaptchaProperties(){return{sitekey:this.siteKey,callback:e=>this.zone.run(()=>this.handleCallback(e)),"expired-callback":()=>this.zone.run(()=>this.handleExpireCallback()),"error-callback":()=>this.zone.run(()=>this.handleErrorCallback()),theme:this.theme,type:this.type,size:this.size,tabindex:this.tabIndex}}registerCallbacks(){window[this.windowOnErrorCallbackProperty]=super.handleErrorCallback.bind(this),window[this.windowOnExpireCallbackProperty]=super.handleExpireCallback.bind(this)}}return t.\u0275fac=function(e){return new(e||t)(v(W),v(P),v(B),v(G))},t.\u0275cmp=I({type:t,selectors:[["ngx-recaptcha2"]],viewQuery:function(e,n){if(e&1&&te(Fe,5),e&2){let r;ie(r=ne())&&(n.captchaWrapperElem=r.first)}},inputs:{theme:"theme",size:"size"},features:[se([{provide:_e,useExisting:K(()=>t),multi:!0}]),ee,q],decls:2,vars:0,consts:[["captchaWrapperElem",""]],template:function(e,n){e&1&&y(0,"div",null,0)},encapsulation:2}),t})(),Ge=(()=>{class t{constructor(e,n){this.scriptService=e,this.zone=n}execute(e,n,r,c,u){this.executeAsPromise(e,n,c).then(r).catch(E=>u?u(E):console.error(E))}executeAsPromise(e,n,r){return new Promise((c,u)=>{let E=r||{},R=O=>{this.zone.runOutsideAngular(()=>{try{O.execute(e,{action:n}).then(S=>this.zone.run(()=>c(S)))}catch(S){u(S)}})};this.scriptService.registerCaptchaScript(E,e,R)})}}return t.\u0275fac=function(e){return new(e||t)(V(G),V(P))},t.\u0275prov=U({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Ve=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=J({type:t}),t.\u0275inj=H({providers:[G,Ge],imports:[k]}),t})();var qe=t=>({rotar:t}),Z=t=>({activo:t});function Be(t,i){if(t&1){let e=w();o(0,"button",6),g("click",function(){_(e);let r=d();return C(r.setAdmin())}),o(1,"p"),s(2,"Admin"),a(),y(3,"img",21),a()}}function We(t,i){if(t&1){let e=w();o(0,"button",12),g("click",function(){_(e);let r=d();return C(r.setAdmin())}),s(1,"Admin"),a()}if(t&2){let e=d();l("ngClass",M(1,Z,e.tipo=="admin"))}}function $e(t,i){t&1&&(o(0,"small"),s(1," Debe Ingresar Un Nombre "),a())}function Ze(t,i){t&1&&(o(0,"small"),s(1," Debe Ingresar Un Apellido "),a())}function Qe(t,i){t&1&&(o(0,"small"),s(1," Debe Ser Una Edad Entre 1 y 120 "),a())}function Ke(t,i){t&1&&(o(0,"small"),s(1," Debe Ingresar Una Obra Social "),a())}function He(t,i){if(t&1&&(o(0,"div",23)(1,"label",27),s(2,"Obra Social"),a(),y(3,"input",38),h(4,Ke,2,0,"small",26),a()),t&2){let e=d(2);p(4),l("ngIf",e.obraSocialControl&&e.obraSocialControl.touched&&!e.obraSocialControl.valid)}}function Ye(t,i){t&1&&(o(0,"small"),s(1," Debe Ingresar Un DNI Valido "),a())}function Je(t,i){t&1&&(o(0,"small"),s(1," Debe Ingresar Un Email Valido "),a())}function Xe(t,i){t&1&&(o(0,"small"),s(1," Usuario Ya Registrado "),a())}function et(t,i){t&1&&(o(0,"small"),s(1," Al Menos 16 Caracteres "),a())}function tt(t,i){t&1&&(o(0,"small"),s(1," Debe Coincidir Con Contrase\xF1a "),a())}function it(t,i){t&1&&(o(0,"small"),s(1," Debe Ingresar una Imagen "),a())}function nt(t,i){t&1&&(o(0,"small"),s(1," Debe Ingresar una Imagen "),a())}function rt(t,i){if(t&1){let e=w();o(0,"div")(1,"div",23)(2,"label",39),s(3,"Segunda Imagen"),a(),o(4,"input",40),g("change",function(r){_(e);let c=d(2);return C(c.cargarImagen2(r))}),a(),h(5,nt,2,0,"small",26),a()()}if(t&2){let e=d(2);p(5),l("ngIf",e.imagen2Control&&e.imagen2Control.touched&&!e.imagen2Control.valid)}}function at(t,i){if(t&1){let e=w();o(0,"div",22)(1,"div",23)(2,"label",24),s(3,"Nombre"),a(),o(4,"input",25),g("input",function(){_(e);let r=d();return C(r.formatearLetras(r.formularioRegistro.get("nombre")))}),a(),h(5,$e,2,0,"small",26),a(),o(6,"div",23)(7,"label",27),s(8,"Apellido"),a(),o(9,"input",28),g("input",function(){_(e);let r=d();return C(r.formatearLetras(r.formularioRegistro.get("apellido")))}),a(),h(10,Ze,2,0,"small",26),a(),o(11,"div",23)(12,"label",27),s(13,"Edad"),a(),o(14,"input",29),g("input",function(){_(e);let r=d();return C(r.formatearNumeros(r.formularioRegistro.get("edad")))}),a(),h(15,Qe,2,0,"small",26),a(),h(16,He,5,1,"div",15),o(17,"div",23)(18,"label",27),s(19,"DNI"),a(),o(20,"input",30),g("input",function(){_(e);let r=d();return C(r.formatearNumeros(r.formularioRegistro.get("dni")))}),a(),h(21,Ye,2,0,"small",26),a(),o(22,"div",23)(23,"label",24),s(24,"Email"),a(),o(25,"input",31),g("input",function(){_(e);let r=d();return C(r.eliminarEspacios(r.formularioRegistro.get("email")))}),a(),h(26,Je,2,0,"small",26)(27,Xe,2,0,"small",26),a(),o(28,"div",23)(29,"label",32),s(30,"Contrase\xF1a"),a(),o(31,"input",33),g("input",function(){_(e);let r=d();return C(r.eliminarEspacios(r.formularioRegistro.get("password")))}),a(),h(32,et,2,0,"small",26),a(),o(33,"div",23)(34,"label",34),s(35,"Repetir Contrase\xF1a"),a(),o(36,"input",35),g("input",function(){_(e);let r=d();return C(r.eliminarEspacios(r.formularioRegistro.get("repetirPassword")))}),a(),h(37,tt,2,0,"small",26),a(),o(38,"div",23)(39,"label",36),s(40,"Imagen Perfil"),a(),o(41,"input",37),g("change",function(r){_(e);let c=d();return C(c.cargarImagen1(r))}),a(),h(42,it,2,0,"small",26),a(),h(43,rt,6,1,"div",26),a()}if(t&2){let e,n,r,c,u,E,R,O,S,f=d();p(5),l("ngIf",((e=f.formularioRegistro.get("nombre"))==null?null:e.touched)&&!((e=f.formularioRegistro.get("nombre"))!=null&&e.valid)),p(5),l("ngIf",((n=f.formularioRegistro.get("apellido"))==null?null:n.touched)&&!((n=f.formularioRegistro.get("apellido"))!=null&&n.valid)),p(5),l("ngIf",((r=f.formularioRegistro.get("edad"))==null?null:r.touched)&&!((r=f.formularioRegistro.get("edad"))!=null&&r.valid)),p(),l("ngIf",f.tipo=="paciente"),p(5),l("ngIf",((c=f.formularioRegistro.get("dni"))==null?null:c.touched)&&!((c=f.formularioRegistro.get("dni"))!=null&&c.valid)),p(5),l("ngIf",((u=f.formularioRegistro.get("email"))==null?null:u.touched)&&(((u=f.formularioRegistro.get("email"))==null||u.errors==null?null:u.errors.email)||((u=f.formularioRegistro.get("email"))==null||u.errors==null?null:u.errors.required))),p(),l("ngIf",(E=f.formularioRegistro.get("email"))==null?null:E.getError("usuarioExiste")),p(5),l("ngIf",((R=f.formularioRegistro.get("password"))==null?null:R.touched)&&!((R=f.formularioRegistro.get("password"))!=null&&R.valid)),p(5),l("ngIf",((O=f.formularioRegistro.get("repetirPassword"))==null?null:O.touched)&&f.formularioRegistro.getError("noCoincide")),p(5),l("ngIf",((S=f.formularioRegistro.get("imagen1"))==null?null:S.touched)&&!((S=f.formularioRegistro.get("imagen1"))!=null&&S.valid)),p(),l("ngIf",f.tipo=="paciente")}}function ot(t,i){t&1&&(o(0,"small"),s(1," Debe Seleccionar Una Especialidad "),a())}function st(t,i){if(t&1){let e=w();o(0,"div",23)(1,"app-lista-especialidades",41),g("onEspecialidadesSeleccionados",function(r){_(e);let c=d();return C(c.onSeleccion(r))}),a(),h(2,ot,2,0,"small",26),a()}if(t&2){let e=d();p(2),l("ngIf",e.formularioRegistro.getError("faltaEspecialidad"))}}function lt(t,i){if(t&1){let e=w();o(0,"div",23)(1,"label"),s(2,"Agregar Especialidad"),a(),o(3,"input",42,0),g("input",function(){_(e);let r=$(4),c=d();return C(c.formatearInputLetras(r))}),a(),o(5,"button",6),g("click",function(){_(e);let r=$(4),c=d();return C(c.agregarEspecialidad(r.value))}),s(6,"Agregar"),a()()}}function ct(t,i){t&1&&y(0,"ngx-recaptcha2",43),t&2&&l("siteKey","6Ld8-n8mAAAAAMyuuh2Ccwlf0x24IbiCTfLFP63a")}function pt(t,i){t&1&&y(0,"app-loading",44),t&2&&l("mensaje","Generando Usuario")}function dt(t,i){if(t&1){let e=w();o(0,"div",45)(1,"div",46)(2,"p"),s(3),a(),o(4,"button",6),g("click",function(){_(e);let r=d();return C(r.finalizarRegistro())}),s(5,"Ok"),a()()()}if(t&2){let e=d();p(3),A(e.mensaje)}}var Ae=class t{constructor(i,e,n,r,c){this.db=i;this.usuario=e;this.router=n;this.auth=r;this.cdr=c;this.formularioRegistro=new we({email:new b("",[m.required,m.email]),nombre:new b("",[m.required,m.pattern("^[a-zA-Z\\s]+$")]),apellido:new b("",[m.required,m.pattern("^[a-zA-Z\\s]+$")]),obraSocial:new b("",[m.required]),edad:new b("",[m.required,m.pattern("^[0-9]+$"),m.min(1),m.max(120)]),dni:new b("",[m.required,m.pattern("^[0-9]+$"),m.maxLength(8),m.minLength(7)]),password:new b("",[m.minLength(16),m.required]),repetirPassword:new b("",[m.minLength(16),m.required]),imagen1:new b(null,[m.required]),imagen2:new b(null,[m.required]),recaptcha:new b(null,[m.required])},[ke()]),this.imagen2Control=this.formularioRegistro.get("imagen2"),this.obraSocialControl=this.formularioRegistro.get("obraSocial")}formularioRegistro;imagen2Control;obraSocialControl;tipo="";especialidades=[];posiblesEspecialidades=[];generando=!1;mensaje="";imagen1;imagen2;get esAdmin(){return this.usuario.datos?.tipo=="admin"}setPaciente(){this.tipo="paciente",this.imagen2Control?.reset(),this.obraSocialControl?.reset(),this.imagen2Control?.setValidators([m.required]),this.obraSocialControl?.setValidators([m.required]),this.formularioRegistro.updateValueAndValidity(),this.cdr.detectChanges()}setEspecialista(){this.tipo="especialista",this.obraSocialControl?.clearValidators(),this.imagen2Control?.clearValidators(),this.obraSocialControl?.setErrors(null),this.imagen2Control?.setErrors(null),this.especialidades=[],this.cdr.detectChanges()}setAdmin(){this.tipo="admin",this.obraSocialControl?.clearValidators(),this.imagen2Control?.clearValidators(),this.obraSocialControl?.setErrors(null),this.imagen2Control?.setErrors(null),this.formularioRegistro.updateValueAndValidity(),this.cdr.detectChanges()}onSeleccion(i){this.especialidades=i,this.especialidades.length>0?this.formularioRegistro.updateValueAndValidity():this.formularioRegistro.setErrors({faltaEspecialidad:!0})}generarUsuario(){return Q(this,null,function*(){this.generando=!0,this.limpiarEspacios();let i=this.formularioRegistro.value;(yield this.db.usuarioExiste(i.email))?(this.formularioRegistro.get("email")?.setErrors({usuarioExiste:!0}),this.generando=!1):he(this.auth,i.email,i.password).then(e=>(i.id=e.user.uid,this.guardarEnBaseDatos(i),!0)).then(()=>{this.generando=!1,this.mensaje="Se genero el usuario exitosamente. Se envio mail de verificacion de cuenta"}).catch(e=>{this.generando=!1,this.mensaje="Error, Base de datos fuera de servicio, vuelva a intentarlo en unos minutos",console.error("Registro fallado:",e)})})}guardarEnBaseDatos(i){let e={id:i.id,nombre:i.nombre,apellido:i.apellido,email:i.email,dni:i.dni,edad:i.edad,tipo:this.tipo,imagen1:this.imagen1};switch(e.tipo){case"paciente":e.obraSocial=i.obraSocial,e.imagen2=this.imagen2;break;case"especialista":e.especialidades=this.especialidades.map(n=>n.especialidad.nombre),e.horarios=[];for(let n of e.especialidades)e.horarios.push({especialidad:n,tiempo:30,dias:[{nombre:"lunes",estado:!0,inicio:8,fin:19},{nombre:"martes",estado:!0,inicio:8,fin:19},{nombre:"miercoles",estado:!0,inicio:8,fin:19},{nombre:"jueves",estado:!0,inicio:8,fin:19},{nombre:"viernes",estado:!0,inicio:8,fin:19},{nombre:"sabado",estado:!0,inicio:8,fin:14}]});e.habilitado=!1;break}this.db.agregarUsuario(e)}limpiarEspacios(){this.formularioRegistro.get("email")?.setValue(this.formularioRegistro.get("email")?.value.trim()),this.formularioRegistro.get("password")?.setValue(this.formularioRegistro.get("password")?.value.trim()),this.formularioRegistro.get("repetirPassword")?.setValue(this.formularioRegistro.get("repetirPassword")?.value.trim())}formatearNumeros(i){let e=i.value||"";i.setValue(e.replace(/\D/g,""))}formatearLetras(i){let e=i.value||"";i.setValue(e.replace(/[^A-Za-z\s]/g,""))}formatearInputLetras(i){let e=i.value||"";i.value=e.replace(/[^A-Za-z\s]/g,"")}eliminarEspacios(i){let e=i.value||"";i.setValue(e.replace(/\s/g,""))}agregarEspecialidad(i){this.db.agregarEspecialidad(i)}finalizarRegistro(){this.usuario.datos?.tipo=="admin"?this.router.navigate(["detalle-usuario"]):this.router.navigate(["/login"])}cargarImagen1(i){let e=this.formularioRegistro.get("imagen1")?.value.split(".");e=e[e.length-1],e!="png"&&e!="jpeg"&&e!="jpg"&&e!="gif"?this.formularioRegistro.get("imagen1")?.setValue(""):this.imagen1=i.target.files[0]}cargarImagen2(i){let e=this.formularioRegistro.get("imagen2")?.value.split(".");e=e[e.length-1],e!="png"&&e!="jpeg"&&e!="jpg"&&e!="gif"?this.formularioRegistro.get("imagen2")?.setValue(""):this.imagen2=i.target.files[0]}static \u0275fac=function(e){return new(e||t)(v(T),v(fe),v(me),v(ge),v(le))};static \u0275cmp=I({type:t,selectors:[["app-registro"]],standalone:!0,features:[D],decls:34,vars:19,consts:[["nuevaEspecialidad",""],[1,"zoom"],[1,"login-form",3,"formGroup"],[1,"carta-animacion-contenedor"],[1,"carta-animacion",3,"ngClass"],[1,"carta-animacion-dorso"],[3,"click"],["src","../../../assets/paciente.png","alt","Paciente"],["src","../../../assets/medico.png","alt","Especialista"],[3,"click",4,"ngIf"],[1,"carta-animacion-frente"],[1,"opciones-usuario"],[1,"opcion",3,"click","ngClass"],["class","opcion",3,"ngClass","click",4,"ngIf"],["class","datos",4,"ngIf"],["class","form-group",4,"ngIf"],[1,"button-group"],["routerLink","/registro",1,"register-button",3,"click","disabled"],["formControlName","recaptcha",3,"siteKey",4,"ngIf"],[3,"mensaje",4,"ngIf"],["class","pantalla-completa",4,"ngIf"],["src","../../../assets/admin.png","alt","admin"],[1,"datos"],[1,"form-group"],["for","nombre"],["type","text","id","nombre","placeholder","Ingrese nombre","formControlName","nombre",3,"input"],[4,"ngIf"],["for","apellido"],["type","text","id","apellido","placeholder","Ingrese apellido","formControlName","apellido",3,"input"],["type","text","id","edad","placeholder","Ingrese edad","formControlName","edad",3,"input"],["type","text","id","dni","placeholder","Ingrese DNI","formControlName","dni",3,"input"],["type","text","id","email","placeholder","Ingrese email","formControlName","email",3,"input"],["for","password"],["type","password","id","password","placeholder","Ingrese contrase\xF1a","formControlName","password",3,"input"],["for","repetirPassword"],["type","password","id","repetirPassword","placeholder","Repita contrase\xF1a","formControlName","repetirPassword",3,"input"],["for","imagen1"],["type","file","accept","image/png, image/jpg, image/jpeg","placeholder","Imagen Perfil","id","imagen1","formControlName","imagen1",3,"change"],["type","text","id","obraSocial","placeholder","Ingrese obra social","formControlName","obraSocial"],["for","imagen2"],["type","file","accept","image/png, image/jpg, image/jpeg","placeholder","Imagen Perfil","id","imagen2","formControlName","imagen2",3,"change"],[3,"onEspecialidadesSeleccionados"],["type","text","placeholder","Ingrese Especialidad",3,"input"],["formControlName","recaptcha",3,"siteKey"],[3,"mensaje"],[1,"pantalla-completa"],[1,"mensaje"]],template:function(e,n){e&1&&(o(0,"span",1)(1,"form",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"h3"),s(6,"Seleccione Tipo de Cuenta"),a(),o(7,"button",6),g("click",function(){return n.setPaciente()}),o(8,"p"),s(9,"Paciente"),a(),y(10,"img",7),a(),o(11,"button",6),g("click",function(){return n.setEspecialista()}),o(12,"p"),s(13,"Especialista"),a(),y(14,"img",8),a(),h(15,Be,4,0,"button",9),a(),o(16,"div",10)(17,"h3"),s(18,"Registro"),a(),o(19,"div",11)(20,"button",12),g("click",function(){return n.setPaciente()}),s(21,"Paciente"),a(),o(22,"button",12),g("click",function(){return n.setEspecialista()}),s(23,"Especialista"),a(),h(24,We,2,3,"button",13),a(),h(25,at,44,11,"div",14)(26,st,3,1,"div",15)(27,lt,7,0,"div",15),o(28,"div",16)(29,"button",17),g("click",function(){return n.generarUsuario()}),s(30,"Registrarse"),a()(),h(31,ct,1,1,"ngx-recaptcha2",18),a()()()()(),h(32,pt,1,1,"app-loading",19)(33,dt,6,1,"div",20)),e&2&&(p(),l("formGroup",n.formularioRegistro),p(2),l("ngClass",M(13,qe,n.tipo!="")),p(12),l("ngIf",n.esAdmin),p(5),l("ngClass",M(15,Z,n.tipo=="paciente")),p(2),l("ngClass",M(17,Z,n.tipo=="especialista")),p(2),l("ngIf",n.esAdmin),p(),l("ngIf",n.tipo!=""),p(),l("ngIf",n.tipo=="especialista"),p(),l("ngIf",n.tipo=="especialista"),p(2),l("disabled",!n.formularioRegistro.valid||n.tipo=="especialista"&&n.especialidades.length==0),p(2),l("ngIf",n.tipo!=""),p(),l("ngIf",n.generando),p(),l("ngIf",n.mensaje))},dependencies:[ue,j,k,ce,de,z,ye,ve,N,xe,F,Se,Re,L,Ve,Oe,Ie],styles:[".login-form[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center}.form-group[_ngcontent-%COMP%]{margin:10px;background-color:#f5f5f5;border-radius:20px;padding:10px 15px 15px}.button-group[_ngcontent-%COMP%]{width:212px;margin-top:5px;display:flex;align-items:center}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;text-align:center;font-weight:700}input[_ngcontent-%COMP%]{display:block;padding:5px;border-radius:5px;border:1px solid #ccc;width:280px}button[_ngcontent-%COMP%]{width:100%;margin:2px 0;padding:10px 0;border:none;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer}.register-button[_ngcontent-%COMP%]{background-color:#3485c3;color:#fff}.register-button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.register-button[_ngcontent-%COMP%]:disabled{background-color:#3485c3b3;cursor:not-allowed}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:red 1px solid}small[_ngcontent-%COMP%]{text-decoration:underline;color:red;display:block;width:212px}.activo[_ngcontent-%COMP%]{background-color:#3485c3;color:#fff}.opciones-usuario[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.opcion[_ngcontent-%COMP%]{margin:5px;width:300px}.datos[_ngcontent-%COMP%]{display:flex;max-width:1200px;flex-wrap:wrap;justify-content:center;align-items:center}.opciones-especialidad[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;max-width:1000px;background-color:#f5f5f5;border-radius:20px;padding:0}.opciones-especialidad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:155px;margin:5px 5px 0 0;font-size:14px}.pantalla-completa[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;top:0%;width:100vw;height:100vh;background-color:#3485c333}.mensaje[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:400px;background-color:#f5f5f5;border-radius:25px;border:1px solid black}.mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:700;text-align:center}.mensaje[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:60%;margin:10px;border-radius:10px;background-color:#3485c3;color:#fff}.mensaje[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.carta-animacion-contenedor[_ngcontent-%COMP%]{position:relative;top:0%;padding:0;margin:0rem 2rem 2rem 0rem;height:88vh;width:90vw}.carta-animacion[_ngcontent-%COMP%]{position:relative;top:0%;width:100%;height:100%;transform-style:preserve-3d;transition:all .5s ease}.rotar[_ngcontent-%COMP%]{transform:rotateY(180deg)}.carta-animacion-dorso[_ngcontent-%COMP%]{position:absolute;top:0%;display:flex;flex-direction:column;align-items:center;background-color:#fff;width:100%;height:100%;backface-visibility:hidden}.carta-animacion-frente[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:column;align-items:center;position:absolute;top:0%;width:100%;height:100%;backface-visibility:hidden;transform:rotateY(180deg)}.carta-animacion-dorso[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30vw;min-width:500px;height:25vh;border-radius:0;border:2px solid whitesmoke;background-color:#3485c3;color:#fff;font-size:28px;font-weight:bolder}.carta-animacion-dorso[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.carta-animacion-dorso[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80%}.carta-animacion-dorso[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.zoom[_ngcontent-%COMP%], .zomm[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInAnimation 1s ease forwards,_ngcontent-%COMP%_sizeChangeAnimation 2s ease forwards}@keyframes _ngcontent-%COMP%_fadeInAnimation{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_sizeChangeAnimation{0%{transform:scale(.1)}to{transform:scale(1)}}"]})};export{Ae as RegistroComponent};
