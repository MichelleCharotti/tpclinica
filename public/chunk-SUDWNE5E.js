import{a as j}from"./chunk-JTS3NMMF.js";import{a as N}from"./chunk-DTWTHZQZ.js";import{a as B,b as V}from"./chunk-4X2OL3FX.js";import"./chunk-4BMBXJ76.js";import"./chunk-5VHRWU7W.js";import"./chunk-VP4YQ6D5.js";import{$ as O,A as l,B as _,F as g,G as s,I as r,J as a,K as h,L as b,M as u,N as c,S as f,T,U as v,_ as w,cb as H,la as R,m as C,ma as A,na as y,o as L,qa as U,r as d,s as m,v as x,va as D,x as M,y as P,ya as k,z as I}from"./chunk-ZKOOGIRO.js";import"./chunk-WTI2L5DI.js";var S=class i{constructor(e){this.elementRef=e}cliclAfueraEvent=new x;condicionExtra=!0;onClick(e){let t=this.elementRef.nativeElement.contains(e);this.condicionExtra&&!t&&this.cliclAfueraEvent.emit()}static \u0275fac=function(t){return new(t||i)(_(M))};static \u0275dir=L({type:i,selectors:[["","appClickAfuera",""]],hostBindings:function(t,o){t&1&&u("click",function(p){return o.onClick(p.target)},!1,I)},inputs:{condicionExtra:"condicionExtra"},outputs:{cliclAfueraEvent:"cliclAfueraEvent"},standalone:!0})};var q=i=>({active:i}),W=i=>({visible:i});function G(i,e){if(i&1&&(r(0,"div"),h(1,"img",6),a()),i&2){let t=c().$implicit;l(),s("src",t.imagen1,P)}}function J(i,e){if(i&1){let t=b();r(0,"button",4),u("click",function(){let n=d(t).$implicit,p=c();return m(p.seleccionarUsuario(n))}),g(1,G,2,1,"div",5),r(2,"p"),f(3),a(),r(4,"p"),f(5),a()()}if(i&2){let t=e.$implicit,o=c();s("ngClass",O(5,W,o.mostrandoBotones))("disabled",!o.mostrandoBotones),l(),s("ngIf",t.imagen1),l(2),v("",t.nombre," \xA0"),l(2),T(t.apellido)}}var E=class i{constructor(e){this.db=e}usuarioSeleccionado=new x;usuariosLista=new x;usuarios=[];subToUsuarios;mostrandoBotones=!1;mostrarBotones(){this.mostrandoBotones=!this.mostrandoBotones}ngOnInit(){this.subToUsuarios=this.db.obtenerUsuarios().subscribe(e=>{this.usuarios=e,this.actualizarLista()})}ngOnDestroy(){this.subToUsuarios&&this.subToUsuarios.unsubscribe()}seleccionarUsuario(e){this.usuarioSeleccionado.emit(e)}actualizarLista(){this.usuariosLista.emit(this.usuarios)}static \u0275fac=function(t){return new(t||i)(_(H))};static \u0275cmp=C({type:i,selectors:[["app-lista-usuarios"]],outputs:{usuarioSeleccionado:"usuarioSeleccionado",usuariosLista:"usuariosLista"},standalone:!0,features:[w],decls:5,vars:5,consts:[["appClickAfuera","",1,"button-container",3,"cliclAfueraEvent","condicionExtra","ngClass"],[1,"main-button",3,"click"],[1,"hidden-buttons"],["class","sub-button",3,"ngClass","disabled","click",4,"ngFor","ngForOf"],[1,"sub-button",3,"click","ngClass","disabled"],[4,"ngIf"],["alt","foto perfil",3,"src"]],template:function(t,o){t&1&&(r(0,"div",0),u("cliclAfueraEvent",function(){return o.mostrarBotones()}),r(1,"button",1),u("click",function(){return o.mostrarBotones()}),f(2,"USUARIOS"),a(),r(3,"div",2),g(4,J,6,7,"button",3),a()()),t&2&&(s("condicionExtra",o.mostrandoBotones)("ngClass",O(3,q,o.mostrandoBotones)),l(4),s("ngForOf",o.usuarios))},dependencies:[k,U,R,A,y,S],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;overflow-y:auto}button[_ngcontent-%COMP%]{background-color:#3485c3;display:flex;border:1px solid gainsboro;border-radius:100%;align-items:center;justify-content:center;font-size:1rem;font-weight:700}.sub-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;margin:0;text-transform:capitalize}.sub-button[_ngcontent-%COMP%]{height:90px;width:90px;color:#fff;padding:0 20px;font-size:10px;border-radius:100px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column;font-weight:700;transition:transform .5s}.sub-button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.sub-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:50px;border-radius:100%;border:1px solid whitesmoke;display:flex}.tipo[_ngcontent-%COMP%]{width:15%;padding-left:5px}.nombre[_ngcontent-%COMP%], .apellido[_ngcontent-%COMP%]{width:35%;padding-left:5px}.dni[_ngcontent-%COMP%]{width:15%;padding-left:5px}.button-container[_ngcontent-%COMP%]{position:absolute;top:22%}.main-button[_ngcontent-%COMP%]{background-color:#3485c3;color:#fff;padding:20px;font-size:16px;border:none;border-radius:100%;cursor:pointer;height:90px;width:90px}.hidden-buttons[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s}.button-container.active[_ngcontent-%COMP%]   .hidden-buttons[_ngcontent-%COMP%]{opacity:1;visibility:visible}"]})};function K(i,e){if(i&1){let t=b();r(0,"div",6)(1,"button",7),u("click",function(){d(t);let n=c();return m(n.enviarARegistro())}),f(2,"Generar Nuevo Usuario"),a(),r(3,"button",7),u("click",function(){d(t);let n=c();return m(n.descargarExcel())}),f(4,"Descargar Datos Excel"),a(),r(5,"app-lista-usuarios",8),u("usuarioSeleccionado",function(n){d(t);let p=c();return m(p.onSeleccion(n))})("usuariosLista",function(n){d(t);let p=c();return m(p.onListaNueva(n))}),a()()}}function Q(i,e){if(i&1){let t=b();r(0,"app-detalle-usuario",9),u("mostrarHistoria",function(n){d(t);let p=c();return m(p.onMostrarHistoria(n))}),a()}if(i&2){let t=c();s("usuario",t.usuario)}}function Y(i,e){if(i&1){let t=b();r(0,"button",10),u("click",function(){d(t);let n=c();return m(n.volver())}),f(1,"Volver"),a()}}function Z(i,e){if(i&1&&(r(0,"h2"),f(1),a()),i&2){let t=c();l(),v("Historia Clinica de ",(t.usuario==null?null:t.usuario.nombre)+" "+(t.usuario==null?null:t.usuario.apellido),"")}}function tt(i,e){if(i&1&&h(0,"app-historia-clinica",11),i&2){let t=c();s("paciente",t.usuario)}}var F=class i{constructor(e){this.router=e}usuario;usuariosLista=[];mostrandoHistoria=!1;onSeleccion(e){this.usuario=e}onListaNueva(e){this.usuariosLista=e}enviarARegistro(){this.router.navigate(["/registro"])}descargarExcel(){let e="datos-usuarios",t=this.formatearDatos(this.usuariosLista),o=V.json_to_sheet(t),n={Sheets:{[e]:o},SheetNames:[e]},p=B(n,{bookType:"xlsx",type:"array"});this.generarArchivoExcel(p,`${e}.xlsx`)}formatearDatos(e){return e.map(t=>({id:t.id,tipo:t.tipo,habilitado:t.habilitado===void 0?"":t.habilitado?"SI":"NO",nombre:t.nombre,apellido:t.apellido,dni:t.dni,edad:t.edad,obraSocial:t.obraSocial||"",especialidades:t.especialidades?t.especialidades.join(", "):"",email:t.email,imagen1:t.imagen1,imagen2:t.imagen2}))}generarArchivoExcel(e,t){let o=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),n=document.createElement("a");n.href=window.URL.createObjectURL(o),n.download=t,n.click(),setTimeout(()=>{window.URL.revokeObjectURL(n.href)},100)}onMostrarHistoria(e){this.usuario=e,this.mostrandoHistoria=!0}volver(){this.mostrandoHistoria=!1}static \u0275fac=function(t){return new(t||i)(_(D))};static \u0275cmp=C({type:i,selectors:[["app-usuarios"]],standalone:!0,features:[w],decls:6,vars:5,consts:[["class","izquierda",4,"ngIf"],["class","derecha",3,"usuario","mostrarHistoria",4,"ngIf"],["class","top-boton",3,"click",4,"ngIf"],[1,"historia"],[4,"ngIf"],[3,"paciente",4,"ngIf"],[1,"izquierda"],[3,"click"],[3,"usuarioSeleccionado","usuariosLista"],[1,"derecha",3,"mostrarHistoria","usuario"],[1,"top-boton",3,"click"],[3,"paciente"]],template:function(t,o){t&1&&(g(0,K,6,0,"div",0)(1,Q,1,1,"app-detalle-usuario",1)(2,Y,2,0,"button",2),r(3,"div",3),g(4,Z,2,1,"h2",4)(5,tt,1,1,"app-historia-clinica",5),a()),t&2&&(s("ngIf",!o.mostrandoHistoria),l(),s("ngIf",!o.mostrandoHistoria),l(),s("ngIf",o.mostrandoHistoria),l(2),s("ngIf",o.mostrandoHistoria),l(),s("ngIf",o.mostrandoHistoria&&o.usuario))},dependencies:[k,U,y,E,N,j],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-around;height:100%;margin-top:5px}.derecha[_ngcontent-%COMP%]{border:1px solid whitesmoke;width:40%;border-radius:25px;padding:10px}app-lista-usuarios[_ngcontent-%COMP%]{width:100%;align-items:center}.izquierda[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;border:1px solid whitesmoke;padding:10px;width:28%;height:90%}button[_ngcontent-%COMP%]{width:80%;margin:2px 0;padding:10px 0;border:none;border-radius:5px;font-size:1rem;font-weight:700;background-color:#3485c3;color:#fff}button[_ngcontent-%COMP%]:hover{background-color:#2f75aa}.top-boton[_ngcontent-%COMP%]{position:absolute;left:1%;width:150px}p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:capitalize}.historia[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"]})};export{F as UsuariosComponent};
