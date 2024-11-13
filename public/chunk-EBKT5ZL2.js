import{a as oe}from"./chunk-3ANA2CMW.js";import{a as ae}from"./chunk-LBLMZG4W.js";import{c as V,d as m,f as z,g as Q,h as X,i as h,j as Z,k as ee,m as te,n as ie,o as R,p as ne}from"./chunk-QVBJDRAH.js";import{$ as W,C as l,D as T,H as x,I as u,K as a,L as o,M,N as g,O as d,P as p,U as r,V as C,W as v,X as B,Y as U,Z as D,_ as F,aa as I,ca as P,cb as A,da as G,db as j,ea as q,eb as K,na as Y,oa as H,p as y,qa as J,ra as k,s as L,u as _,v as f,y as $,za as O}from"./chunk-ZJHYH6I5.js";var b=class n{transform(t,...e){switch(t){case 0:return"pendiente";case 1:return"aceptado";case 4:return"cancelado";case 3:return"cancelado";case 2:return"cancelado";case 5:return"rechazado";case 1:return"aceptado";case 6:return"realizado";default:return"tipo dato invalido"}}static \u0275fac=function(e){return new(e||n)};static \u0275pipe=L({name:"estadoTurno",type:n,pure:!0,standalone:!0})};function me(n,t){n&1&&(a(0,"small"),r(1," Debe Ser Una Altura Entre 40cm y 240cm "),o())}function _e(n,t){n&1&&(a(0,"small"),r(1," Debe Ser Un Peso Entre 1kg y 500kg "),o())}function fe(n,t){n&1&&(a(0,"small"),r(1," Debe Ser Una Temperatura Entre 32\xB0C y 50\xB0C "),o())}function ge(n,t){n&1&&(a(0,"small"),r(1," Minima debe ser entre 5 y 25 y menor a Maxima "),o())}function xe(n,t){n&1&&(a(0,"small"),r(1," Minima debe ser entre 5 y 25 y mayor a Minima "),o())}function Ce(n,t){n&1&&M(0,"app-loading",25),n&2&&u("mensaje","Registrando Datos")}function he(n,t){if(n&1){let e=g();a(0,"div",26)(1,"div",27)(2,"p"),r(3),o(),a(4,"button",28),d("click",function(){_(e);let s=p();return f(s.finalizarRegistro())}),r(5,"Ok"),o()()()}if(n&2){let e=p();l(3),C(e.respuesta)}}var N=class n{constructor(t){this.db=t;this.formularioRegistro=new X({altura:new h("",[m.required,m.pattern("^[0-9]+$"),m.min(40),m.max(240)]),peso:new h("",[m.required,m.pattern("^^[0-9]+(.[0-9]+)?$"),m.min(1),m.max(500)]),temperatura:new h("",[m.required,m.pattern("^[0-9]+(.[0-9]+)?$"),m.min(32),m.max(50)]),presionMin:new h("",[m.required,m.pattern("^[0-9]+(.[0-9]+)?$"),m.min(5),m.max(25)]),presionMax:new h("",[m.required,m.pattern("^[0-9]+(.[0-9]+)?$"),m.min(5),m.max(25)]),clave1:new h(""),clave2:new h(""),clave3:new h(""),valor1:new h(""),valor2:new h(""),valor3:new h("")})}formularioRegistro;generando=!1;respuesta;finalizado=new $;turno;finalizarRegistro(){this.finalizado.emit(!0)}generarHistoriaClinica(){if(this.turno){let t=this.formularioRegistro.value,e={clave:t.clave1,valor:t.valor1},i={clave:t.clave2,valor:t.valor2},s={clave:t.clave3,valor:t.valor3},c={altura:t.altura,peso:t.peso,temperatura:t.temperatura,presionMin:t.presionMin,presionMax:t.presionMax,dato1:e,dato2:i,dato3:s};this.generando=!0,this.db.agregarHistoriaClinica(this.turno,c).then(w=>{this.respuesta="Se genero nueva historia clinica",this.generando=!1})}}formatearNumeros(t){let e=t.value||"";t.setValue(e.replace(/[^\d.]/g,""))}static \u0275fac=function(e){return new(e||n)(T(j))};static \u0275cmp=y({type:n,selectors:[["app-generar-historia-clinica"]],inputs:{turno:"turno"},outputs:{finalizado:"finalizado"},standalone:!0,features:[I],decls:46,vars:9,consts:[[1,"login-form",3,"formGroup"],[1,"datos"],[1,"form-group"],["for","altura"],["type","text","id","altura","placeholder","Ingrese altura","formControlName","altura",3,"input"],[4,"ngIf"],["for","peso"],["type","text","id","peso","placeholder","Ingrese peso","formControlName","peso",3,"input"],["for","temperatura"],["type","text","id","temperatura","placeholder","Ingrese temperatura","formControlName","temperatura",3,"input"],["for","presionMin"],["type","text","id","presionMin","placeholder","Ingrese presion minima","formControlName","presionMin",3,"input"],["for","presionMax"],["type","text","id","presionMax","placeholder","Ingrese presion maxima","formControlName","presionMax",3,"input"],[1,"fila"],["type","text","id","clave1","placeholder","Ingrese tipo","formControlName","clave1"],["type","text","id","valor1","placeholder","Ingrese valor","formControlName","valor1"],["type","text","id","clave2","placeholder","Ingrese tipo","formControlName","clave2"],["type","text","id","valor2","placeholder","Ingrese valor","formControlName","valor2"],["type","text","id","clave3","placeholder","Ingrese tipo","formControlName","clave3"],["type","text","id","valor3","placeholder","Ingrese valor","formControlName","valor3"],[1,"button-group"],[1,"register-button",3,"click","disabled"],[3,"mensaje",4,"ngIf"],["class","pantalla-completa",4,"ngIf"],[3,"mensaje"],[1,"pantalla-completa"],[1,"mensaje"],[3,"click"]],template:function(e,i){if(e&1&&(a(0,"form",0)(1,"div",1)(2,"h3"),r(3,"Nueva Historia Clinica"),o(),a(4,"div",2)(5,"label",3),r(6,"Altura"),o(),a(7,"input",4),d("input",function(){return i.formatearNumeros(i.formularioRegistro.get("altura"))}),o(),x(8,me,2,0,"small",5),o(),a(9,"div",2)(10,"label",6),r(11,"Peso"),o(),a(12,"input",7),d("input",function(){return i.formatearNumeros(i.formularioRegistro.get("peso"))}),o(),x(13,_e,2,0,"small",5),o(),a(14,"div",2)(15,"label",8),r(16,"Temperatura"),o(),a(17,"input",9),d("input",function(){return i.formatearNumeros(i.formularioRegistro.get("temperatura"))}),o(),x(18,fe,2,0,"small",5),o(),a(19,"div",2)(20,"label",10),r(21,"Presion Minima"),o(),a(22,"input",11),d("input",function(){return i.formatearNumeros(i.formularioRegistro.get("presionMin"))}),o(),x(23,ge,2,0,"small",5),o(),a(24,"div",2)(25,"label",12),r(26,"Presion Maxima"),o(),a(27,"input",13),d("input",function(){return i.formatearNumeros(i.formularioRegistro.get("presionMax"))}),o(),x(28,xe,2,0,"small",5),o(),a(29,"div",2)(30,"label",12),r(31,"Informacion Adicional"),o(),a(32,"div",14),M(33,"input",15)(34,"input",16),o(),a(35,"div",14),M(36,"input",17)(37,"input",18),o(),a(38,"div",14),M(39,"input",19)(40,"input",20),o()()()(),a(41,"div",21)(42,"button",22),d("click",function(){return i.generarHistoriaClinica()}),r(43,"Generar Historia Clinica"),o()(),x(44,Ce,1,1,"app-loading",23)(45,he,6,1,"div",24)),e&2){let s,c,w,S,E;u("formGroup",i.formularioRegistro),l(8),u("ngIf",((s=i.formularioRegistro.get("altura"))==null?null:s.touched)&&!((s=i.formularioRegistro.get("altura"))!=null&&s.valid)),l(5),u("ngIf",((c=i.formularioRegistro.get("peso"))==null?null:c.touched)&&!((c=i.formularioRegistro.get("peso"))!=null&&c.valid)),l(5),u("ngIf",((w=i.formularioRegistro.get("temperatura"))==null?null:w.touched)&&!((w=i.formularioRegistro.get("temperatura"))!=null&&w.valid)),l(5),u("ngIf",((S=i.formularioRegistro.get("presionMin"))==null?null:S.touched)&&!((S=i.formularioRegistro.get("presionMin"))!=null&&S.valid)),l(5),u("ngIf",((E=i.formularioRegistro.get("presionMax"))==null?null:E.touched)&&!((E=i.formularioRegistro.get("presionMax"))!=null&&E.valid)),l(14),u("disabled",!i.formularioRegistro.valid),l(2),u("ngIf",i.generando),l(),u("ngIf",i.respuesta)}},dependencies:[O,k,H,R,ee,V,z,Q,oe,ne,te,ie],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#eee;padding:20px;border-radius:15px;border:solid 2px grey}.datos[_ngcontent-%COMP%]{display:flex;max-width:1200px;flex-direction:column;justify-content:center;align-items:center}.pantalla-completa[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;top:0%;width:100vw;height:100vh;background-color:#3485c333}.mensaje[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:400px;background-color:#f5f5f5;border-radius:25px;border:1px solid black}.mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:700;text-align:center}.mensaje[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:60%;margin:10px;border-radius:10px;background-color:#3485c3;color:#fff}.mensaje[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.form-group[_ngcontent-%COMP%]{margin:10px;width:90%;background-color:#f5f5f5;border-radius:20px;padding:10px 15px 15px}.fila[_ngcontent-%COMP%]{display:flex;flex-direction:row}.fila[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:45%;display:inline-block}label[_ngcontent-%COMP%]{display:block}.button-group[_ngcontent-%COMP%]{width:212px;margin-top:5px;display:flex;align-items:center}.register-button[_ngcontent-%COMP%]{background-color:#3485c3;color:#fff}.register-button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.register-button[_ngcontent-%COMP%]:disabled{background-color:#3485c3b3;cursor:not-allowed}button[_ngcontent-%COMP%]{width:100%;margin:2px 0;padding:10px 0;border:none;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer}input[_ngcontent-%COMP%]{display:block;width:90%}"]})};function ve(n,t){n&1&&(a(0,"p"),r(1,"paciente"),o())}function be(n,t){n&1&&(a(0,"p"),r(1,"dni"),o())}function Te(n,t){n&1&&(a(0,"p"),r(1,"especialista"),o())}function we(n,t){if(n&1&&(a(0,"p"),r(1),o()),n&2){let e=p().$implicit;l(),C(e.nombrePaciente)}}function Me(n,t){if(n&1&&(a(0,"p"),r(1),P(2,"dniFormato"),o()),n&2){let e=p().$implicit;l(),C(G(2,1,e.dniPaciente))}}function Se(n,t){if(n&1&&(a(0,"p"),r(1),o()),n&2){let e=p().$implicit;l(),C(e.nombreEspecialista)}}function Ee(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.cancelarTurno(s))}),r(1,"Cancelar"),o()}}function ye(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.rechazarTurno(s))}),r(1,"Rechazar"),o()}}function Ie(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.aceptarTurno(s))}),r(1,"Aceptar"),o()}}function Pe(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.finalizarTurno(s))}),r(1,"Finalizar"),o()}}function He(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.verResenia(s))}),r(1,"Rese\xF1a"),o()}}function ke(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.verCalificacion(s))}),r(1,"Calificacion"),o()}}function Oe(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.verEncuesta(s))}),r(1,"Encuesta"),o()}}function je(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.verHistoria(s))}),r(1,"Historia"),o()}}function Ve(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.calificarAtencion(s))}),r(1,"Calificar Atencion"),o()}}function ze(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.completarEncuesta(s))}),r(1,"Completar Encuesta"),o()}}function Re(n,t){if(n&1){let e=g();a(0,"button",13),d("click",function(){_(e);let s=p().$implicit,c=p();return f(c.verCancelacion(s))}),r(1,"Ver Motivo"),o()}}function Ne(n,t){if(n&1&&(a(0,"p",14),r(1),o()),n&2){let e=p().$implicit,i=p();l(),v(" Turno Cancelado Por ",e.estado==i.estados.canceladoPaciente?"Paciente":e.estado==i.estados.canceladoEspecialista?"Especialita":"Administracion"," ")}}function Ue(n,t){n&1&&(a(0,"p",14),r(1," Turno Rechazado Por Especialista "),o())}function De(n,t){if(n&1&&(a(0,"div",8),x(1,we,2,1,"p",5)(2,Me,3,3,"p",5)(3,Se,2,1,"p",5),a(4,"p"),r(5),o(),a(6,"p"),r(7),P(8,"date"),o(),a(9,"p",9),r(10),P(11,"estadoTurno"),o(),a(12,"div",10),x(13,Ee,2,0,"button",11)(14,ye,2,0,"button",11)(15,Ie,2,0,"button",11)(16,Pe,2,0,"button",11)(17,He,2,0,"button",11)(18,ke,2,0,"button",11)(19,Oe,2,0,"button",11)(20,je,2,0,"button",11)(21,Ve,2,0,"button",11)(22,ze,2,0,"button",11)(23,Re,2,0,"button",11)(24,Ne,2,1,"p",12)(25,Ue,2,0,"p",12),o()()),n&2){let e=t.$implicit,i=p();l(),u("ngIf",i.tipoUser!="paciente"),l(),u("ngIf",i.tipoUser!="paciente"),l(),u("ngIf",i.tipoUser!="especialista"),l(2),C(e.tipo),l(2),C(q(8,19,e.fecha,"d/MM HH:mm","-0300")),l(3),v(" ",G(11,23,e.estado)," "),l(3),u("ngIf",e.estado==i.estados.pendiente||i.tipoUser=="paciente"&&e.estado==i.estados.aceptado),l(),u("ngIf",e.estado==i.estados.pendiente&&i.tipoUser=="especialista"),l(),u("ngIf",e.estado==i.estados.pendiente&&i.tipoUser=="especialista"),l(),u("ngIf",e.estado==i.estados.aceptado&&i.tipoUser=="especialista"),l(),u("ngIf",e.resenia&&i.tipoUser!="admin"),l(),u("ngIf",e.calificacion&&i.tipoUser!="admin"),l(),u("ngIf",e.encuesta&&i.tipoUser!="admin"),l(),u("ngIf",e.estado==i.estados.realizado),l(),u("ngIf",e.estado==i.estados.realizado&&i.tipoUser=="paciente"&&!e.calificacion),l(),u("ngIf",e.estado==i.estados.realizado&&i.tipoUser=="paciente"&&!e.encuesta),l(),u("ngIf",e.estado>1&&e.estado<5||e.estado==i.estados.rechazado),l(),u("ngIf",e.estado>1&&e.estado<5),l(),u("ngIf",e.estado==i.estados.rechazado)}}function Fe(n,t){if(n&1){let e=g();a(0,"div",17)(1,"p"),r(2),o(),a(3,"textarea",18),F("ngModelChange",function(s){_(e);let c=p(2);return D(c.respuestaUsuario,s)||(c.respuestaUsuario=s),f(s)}),o(),a(4,"button",19),d("click",function(){_(e);let s=p(2);return f(s.finalizarMensaje())}),r(5,"Ok"),o(),a(6,"button",19),d("click",function(){_(e);let s=p(2);return f(s.cancelarMensaje())}),r(7,"Cancelar"),o()()}if(n&2){let e=p(2);l(2),C(e.mensaje),l(),U("ngModel",e.respuestaUsuario)}}function Ge(n,t){if(n&1){let e=g();a(0,"div",17)(1,"p"),r(2),o(),a(3,"button",19),d("click",function(){_(e);let s=p(2);return f(s.cancelarMensaje())}),r(4,"Ok"),o()()}if(n&2){let e=p(2);l(2),C(e.mensaje)}}function Ae(n,t){if(n&1&&(a(0,"div",15),x(1,Fe,8,2,"div",16)(2,Ge,5,1,"div",16),o()),n&2){let e=p();l(),u("ngIf",e.tipoMensaje||e.encuesta!=null),l(),u("ngIf",!e.tipoMensaje&&e.encuesta==null)}}function Le(n,t){if(n&1){let e=g();a(0,"app-generar-historia-clinica",21),d("finalizado",function(s){_(e);let c=p(2);return f(c.agregarHistoriaClinica(s))}),o()}if(n&2){let e=p(2);u("turno",e.turnoSeleccionado)}}function $e(n,t){if(n&1&&(a(0,"div",15),x(1,Le,1,1,"app-generar-historia-clinica",20),o()),n&2){let e=p();l(),u("ngIf",e.generandoHistoriaClinica)}}function Be(n,t){if(n&1&&(a(0,"p")(1,"strong"),r(2),o(),r(3),o()),n&2){let e=p(2);l(2),v("",e.historiaClinica.dato1==null?null:e.historiaClinica.dato1.clave,": "),l(),v("",e.historiaClinica.dato1==null?null:e.historiaClinica.dato1.valor," ")}}function We(n,t){if(n&1&&(a(0,"p")(1,"strong"),r(2),o(),r(3),o()),n&2){let e=p(2);l(2),v("",e.historiaClinica.dato2==null?null:e.historiaClinica.dato2.clave,": "),l(),v("",e.historiaClinica.dato2==null?null:e.historiaClinica.dato2.valor," ")}}function qe(n,t){if(n&1&&(a(0,"p")(1,"strong"),r(2),o(),r(3),o()),n&2){let e=p(2);l(2),v("",e.historiaClinica.dato3==null?null:e.historiaClinica.dato3.clave,": "),l(),v("",e.historiaClinica.dato3==null?null:e.historiaClinica.dato3.valor," ")}}function Ye(n,t){if(n&1){let e=g();a(0,"div",15)(1,"div",22)(2,"p")(3,"strong"),r(4,"Altura: "),o(),r(5),o(),a(6,"p")(7,"strong"),r(8,"Peso: "),o(),r(9),o(),a(10,"p")(11,"strong"),r(12,"Temperatura: "),o(),r(13),o(),a(14,"p")(15,"strong"),r(16,"Presi\xF3n: "),o(),r(17),o(),x(18,Be,4,2,"p",5)(19,We,4,2,"p",5)(20,qe,4,2,"p",5),a(21,"button",19),d("click",function(){_(e);let s=p();return f(s.cancelarMensaje())}),r(22,"Ok"),o()()()}if(n&2){let e=p();l(5),C(e.historiaClinica.altura),l(4),C(e.historiaClinica.peso),l(4),v("",e.historiaClinica.temperatura,"\xB0C"),l(4),B("",e.historiaClinica.presionMax," / ",e.historiaClinica.presionMin,""),l(),u("ngIf",(e.historiaClinica.dato1==null?null:e.historiaClinica.dato1.clave)!=""&&(e.historiaClinica.dato1==null?null:e.historiaClinica.dato1.valor)!=""),l(),u("ngIf",(e.historiaClinica.dato2==null?null:e.historiaClinica.dato2.clave)!=""&&(e.historiaClinica.dato2==null?null:e.historiaClinica.dato2.valor)!=""),l(),u("ngIf",(e.historiaClinica.dato3==null?null:e.historiaClinica.dato3.clave)!=""&&(e.historiaClinica.dato3==null?null:e.historiaClinica.dato3.valor)!="")}}var se=class n{constructor(t,e,i){this.usuario=t;this.db=e;this.estadoPipe=i;this.usuario.datos?.tipo=="admin"?this.subTurnos=this.db.obtenerTurnosAdmin().subscribe(s=>{this._turnos=s,this.obtenerOpciones(),this.filtrarTurnos()}):this.usuario.datos?.tipo=="paciente"?this.subTurnos=this.db.obtenerTurnosPaciente(this.usuario.datos.id).subscribe(s=>{this._turnos=s,this.obtenerOpciones(),this.filtrarTurnos()}):this.usuario.datos?.tipo=="especialista"?this.subTurnos=this.db.obtenerTurnosEspecialista(this.usuario.datos.id).subscribe(s=>{this._turnos=s,this.obtenerOpciones(),this.filtrarTurnos()}):this.subTurnos=this.db.obtenerTurnosAdmin().subscribe(s=>{this._turnos=s,this.obtenerOpciones(),this.filtrarTurnos()})}_turnos;turnos;especialistas;especialidades;pacientes;especialidadSeleccionada="";especialistaSeleccionado="";pacienteSeleccionado="";filtro="";subTurnos;estados=A;mensaje="";tipoMensaje;respuestaUsuario="";turnoSeleccionado;encuesta;generandoHistoriaClinica=!1;historiaClinica;get tipoUser(){return this.usuario.datos?.tipo}ngDestroy(){this.subTurnos&&this.subTurnos.unsubscribe()}filtrarTurnos(){this.turnos=[];let t=this.filtro.trim().toLowerCase().split(" ");if(this._turnos)for(let e of this._turnos)if(this.filtro!="")this.compararTurnos(e,t)&&this.turnos.push(e);else{this.turnos=this._turnos;break}}compararTurnos(t,e){let i=new Date(t.fecha);i.setHours(i.getHours()-3);let s=i.toISOString();for(let c of e)if(c=c.toLowerCase(),!t.nombrePaciente.toLowerCase().includes(c)&&!t.nombreEspecialista.toLowerCase().includes(c)&&!t.dniPaciente.toLowerCase().includes(c)&&!t.tipo.toLowerCase().includes(c)&&!t.historiaClinica?.altura.toString().includes(c)&&!t.historiaClinica?.temperatura.toString().includes(c)&&!t.historiaClinica?.peso.toString().includes(c)&&!t.historiaClinica?.presionMax.toString().includes(c)&&!t.historiaClinica?.presionMin.toString().includes(c)&&!t.historiaClinica?.dato1?.clave.toLowerCase().includes(c)&&!t.historiaClinica?.dato1?.valor.toLowerCase().includes(c)&&!t.historiaClinica?.dato2?.clave.toLowerCase().includes(c)&&!t.historiaClinica?.dato2?.valor.toLowerCase().includes(c)&&!t.historiaClinica?.dato3?.clave.toLowerCase().includes(c)&&!t.historiaClinica?.dato3?.valor.toLowerCase().includes(c)&&!this.estadoPipe.transform(t.estado).toLowerCase().includes(c)&&!this.compararFecha(s,c))return!1;return!0}compararFecha(t,e){t=t.replace(/-/g,"/"),t=t.slice(0,16);let i=e.split("/");return e=i.length==1?i[0]:(i[1]=="0"?"":i[1])+"/"+(i[0]=="0"?"":i[0]),console.log(t," | ",e),t.includes(e)}obtenerOpciones(){this.obtenerEspecialidades(),this.usuario.datos?.tipo=="especialista"?this.obtenerPacientes():this.obtenerEspecialistas()}obtenerPacientes(){if(this.pacientes=[],this._turnos)for(let t of this._turnos){let e={id:t.idPaciente,nombre:t.nombrePaciente};this.existe(this.pacientes,e.id)||this.pacientes.push(e)}}existe(t,e){for(let i of t)if(i.id==e)return!0;return!1}obtenerEspecialidades(){if(this.especialidades=[],this._turnos)for(let t of this._turnos)this.especialidades.includes(t.tipo)||this.especialidades.push(t.tipo)}obtenerEspecialistas(){if(this.especialistas=[],this._turnos)for(let t of this._turnos){let e={id:t.idEspecialista,nombre:t.nombreEspecialista};this.existe(this.especialistas,e.id)||this.especialistas.push(e)}}seleccionarEspecialidad(t){this.especialidadSeleccionada==t?this.especialidadSeleccionada="":(this.especialidadSeleccionada=t,this.especialistaSeleccionado="",this.pacienteSeleccionado=""),this.filtrarTurnos()}seleccionarPaciente(t){this.pacienteSeleccionado==t?this.pacienteSeleccionado="":(this.pacienteSeleccionado=t,this.especialistaSeleccionado="",this.especialidadSeleccionada=""),this.filtrarTurnos()}seleccionarEspecialista(t){this.especialistaSeleccionado==t?this.especialistaSeleccionado="":(this.especialistaSeleccionado=t,this.especialidadSeleccionada="",this.pacienteSeleccionado=""),this.filtrarTurnos()}cancelarTurno(t){this.mensaje="Ingrese motivo de la cancelacion",this.tipoUser=="paciente"?this.tipoMensaje=2:this.tipoUser=="especialista"?this.tipoMensaje=3:this.tipoMensaje=4,this.turnoSeleccionado=t}rechazarTurno(t){this.mensaje="Ingrese motivo del rechazo",this.tipoMensaje=5,this.turnoSeleccionado=t}aceptarTurno(t){this.db.actualizarEstadoTurno(t,1)}finalizarTurno(t){this.turnoSeleccionado=t,this.generandoHistoriaClinica=!0}cancelarMensaje(){this.mensaje="",this.tipoMensaje=void 0,this.historiaClinica=void 0}finalizarMensaje(){this.turnoSeleccionado&&(this.tipoMensaje&&this.encuesta===void 0?(this.db.actualizarEstadoTurno(this.turnoSeleccionado,this.tipoMensaje),this.tipoMensaje==6?this.db.agregarMensajeReseniaTurno(this.turnoSeleccionado,this.respuestaUsuario):(this.tipoMensaje==4||this.tipoMensaje==2||this.tipoMensaje==3)&&this.db.agregarMensajeCancelacionTurno(this.turnoSeleccionado,this.respuestaUsuario)):this.encuesta?this.db.agregarMensajeEncuestaTurno(this.turnoSeleccionado,this.respuestaUsuario):this.db.agregarMensajeCalificacionTurno(this.turnoSeleccionado,this.respuestaUsuario)),this.mensaje="",this.respuestaUsuario="",this.tipoMensaje=void 0,this.encuesta=void 0}verResenia(t){this.mensaje=t.resenia?t.resenia:""}verCalificacion(t){this.mensaje=t.calificacion?t.calificacion:""}verEncuesta(t){this.mensaje=t.encuesta?t.encuesta:""}verCancelacion(t){console.log(t),this.mensaje=t.mensajeCancelacion?t.mensajeCancelacion:""}calificarAtencion(t){this.mensaje="Ingrese calificacion de la Atencion",this.turnoSeleccionado=t,this.encuesta=!1}verHistoria(t){this.historiaClinica=t.historiaClinica}completarEncuesta(t){this.mensaje="Ingrese encuesta",this.turnoSeleccionado=t,this.encuesta=!0}agregarHistoriaClinica(t){this.generandoHistoriaClinica=!1,this.mensaje="Ingrese rese\xF1a para el paciente",this.tipoMensaje=6}static \u0275fac=function(e){return new(e||n)(T(K),T(j),T(b))};static \u0275cmp=y({type:n,selectors:[["app-historial-turnos"]],standalone:!0,features:[W([b]),I],decls:26,vars:8,consts:[[1,"contendor-info"],[1,"titulo"],[1,"opciones"],["placeholder","Ingrese datos...","type","text",3,"ngModelChange","input","ngModel"],[1,"datos","head"],[4,"ngIf"],["class","datos",4,"ngFor","ngForOf"],["class","pantalla-completa",4,"ngIf"],[1,"datos"],[1,"estado"],[1,"botones-estado"],["class","cambiar-estado",3,"click",4,"ngIf"],["class","cancelado",4,"ngIf"],[1,"cambiar-estado",3,"click"],[1,"cancelado"],[1,"pantalla-completa"],["class","mensaje",4,"ngIf"],[1,"mensaje"],["type","text","placeholder","Mensaje...",1,"respuesta",3,"ngModelChange","ngModel"],[3,"click"],[3,"turno","finalizado",4,"ngIf"],[3,"finalizado","turno"],[1,"historia"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"h3"),r(2,"Historial Turnos"),o(),a(3,"div",1)(4,"h4"),r(5,"Filtrar Datos"),o(),a(6,"div",2)(7,"input",3),F("ngModelChange",function(c){return D(i.filtro,c)||(i.filtro=c),c}),d("input",function(){return i.filtrarTurnos()}),o()()(),a(8,"div",1)(9,"div")(10,"h4"),r(11,"Turnos"),o(),a(12,"div",4),x(13,ve,2,0,"p",5)(14,be,2,0,"p",5)(15,Te,2,0,"p",5),a(16,"p"),r(17,"tipo"),o(),a(18,"p"),r(19,"fecha"),o(),a(20,"p"),r(21,"estado"),o()(),x(22,De,26,25,"div",6),o()()(),x(23,Ae,3,2,"div",7)(24,$e,2,1,"div",7)(25,Ye,23,8,"div",7)),e&2&&(l(7),U("ngModel",i.filtro),l(6),u("ngIf",i.tipoUser!="paciente"),l(),u("ngIf",i.tipoUser!="paciente"),l(),u("ngIf",i.tipoUser!="especialista"),l(7),u("ngForOf",i.turnos),l(),u("ngIf",i.mensaje),l(),u("ngIf",i.generandoHistoriaClinica),l(),u("ngIf",i.historiaClinica))},dependencies:[O,k,Y,H,J,R,V,z,Z,b,ae,N],styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-direction:column}input[_ngcontent-%COMP%]{width:50vw}button[_ngcontent-%COMP%]{margin:5px;width:200px;padding:2px 0;border:none;border-radius:5px;font-size:1rem;font-weight:700;text-transform:capitalize;cursor:pointer}.activo[_ngcontent-%COMP%]{background-color:#3485c3;color:#fff}.titulo[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;max-height:65vh}.opciones[_ngcontent-%COMP%]{background-color:#f5f5f5;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;max-height:50vh;max-width:80vw;padding:5px;border-radius:10px;border:1px solid grey;overflow-y:auto}.datos[_ngcontent-%COMP%]{display:flex;border:1px solid black;margin:5px 0;padding:0 10px;border-radius:10px;flex-direction:row;width:85vw;justify-content:left;align-items:center;font-size:.75vw}.estado[_ngcontent-%COMP%]{background-color:#f5f5f5;text-align:center;font-weight:700;width:80px;font-size:.65vw;margin-right:15px;padding:10px 0;border-radius:5px}.cambiar-estado[_ngcontent-%COMP%]{font-size:.65vw;font-weight:700;width:auto;padding:5px 10px}p[_ngcontent-%COMP%]{margin:0;width:180px;text-transform:capitalize}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-weight:bolder}.botones-estado[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.botones-estado[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:120px;font-size:.65vw;font-weight:700}.mensaje[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:400px;background-color:#f5f5f5;border-radius:25px;border:1px solid black}.mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:700;text-align:center}.mensaje[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:60%;margin:10px;border-radius:10px;background-color:#3485c3;color:#fff}.mensaje[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.pantalla-completa[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;top:0%;width:100vw;height:100vh;background-color:#3485c333}.respuesta[_ngcontent-%COMP%]{width:400px;height:400px;resize:none}.cancelado[_ngcontent-%COMP%]{width:300px;font-weight:bolder}[_nghost-%COMP%], .contenedor-info[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInAnimation 1s ease forwards}@keyframes _ngcontent-%COMP%_slideInAnimation{0%{opacity:0;transform:translateY(200%)}to{opacity:1;transform:translateY(0)}}.historia[_ngcontent-%COMP%]{background-color:#f5f5f5;border:2px solid grey;border-radius:15px;margin:10px 0;padding:5px 10px 0}p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:capitalize}h3[_ngcontent-%COMP%]{text-align:center}.contenedor-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]})};export{se as HistorialTurnosComponent};
