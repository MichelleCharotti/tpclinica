import{$ as E,A as u,B as n,C as f,G as p,H as l,J as a,K as i,L as m,M as b,N as v,O as d,T as o,U as c,V as C,Wa as O,Xa as k,_ as h,ha as S,ia as I,ja as y,ka as D,p as _,ra as U,t as g,u as x}from"./chunk-UO5LRNZ5.js";var P=e=>({activo:e});function w(e,r){if(e&1&&(a(0,"div")(1,"label"),o(2,"Nombre"),i(),a(3,"p"),o(4),i()()),e&2){let t=d();n(4),c(t.nombre)}}function F(e,r){if(e&1&&(a(0,"div")(1,"label"),o(2,"Apellido"),i(),a(3,"p"),o(4),i()()),e&2){let t=d();n(4),c(t.apellido)}}function j(e,r){if(e&1&&(a(0,"div")(1,"label"),o(2,"DNI"),i(),a(3,"p"),o(4),i()()),e&2){let t=d();n(4),c(t.dni)}}function N(e,r){if(e&1&&(a(0,"div")(1,"label"),o(2,"Tipo"),i(),a(3,"p"),o(4),i()()),e&2){let t=d();n(4),c(t.tipo)}}function A(e,r){if(e&1&&(a(0,"div")(1,"label"),o(2,"Edad"),i(),a(3,"p"),o(4),i()()),e&2){let t=d();n(4),c(t.edad)}}function R(e,r){if(e&1&&(a(0,"div")(1,"label"),o(2,"Email"),i(),a(3,"p"),o(4),i()()),e&2){let t=d();n(4),c(t.email)}}function z(e,r){if(e&1&&(a(0,"div")(1,"label"),o(2,"Obra Social"),i(),a(3,"p"),o(4),i()()),e&2){let t=d();n(4),c(t.obraSocial)}}function B(e,r){if(e&1&&(a(0,"p"),o(1),i()),e&2){let t=r.$implicit;n(),c(t)}}function H(e,r){if(e&1&&(a(0,"div")(1,"label",4),o(2,"Especialidades"),i(),p(3,B,2,1,"p",5),i()),e&2){let t=d();n(3),l("ngForOf",t.especialidades)}}function V(e,r){if(e&1&&(a(0,"div")(1,"label"),o(2,"Habilitado"),i(),m(3,"p",6),i()),e&2){let t=d();n(3),l("textContent",t.habilitado?"SI":"NO")}}function L(e,r){if(e&1&&(a(0,"div",7)(1,"label",8),o(2,"Foto Perfil"),i(),m(3,"img",9),i()),e&2){let t=d();n(3),l("src",t.imagen1,u)}}function $(e,r){if(e&1&&(a(0,"div",7)(1,"label",8),o(2,"Foto Alt"),i(),m(3,"img",10),i()),e&2){let t=d();n(3),l("src",t.imagen2,u)}}function q(e,r){if(e&1){let t=b();a(0,"button",11),v("click",function(){g(t);let T=d();return x(T.cambiarEstado())}),o(1),i()}if(e&2){let t=d();l("disabled",t.cargando)("ngClass",E(3,P,t.habilitado)),n(),C(" ",t.mensaje,` Especialista
`)}}var M=class e{constructor(r,t){this.db=r;this.permisos=t}_usuario;cargando=!1;mensajeEstadoEspecialista="";set usuario(r){this._usuario=r,this.mensajeEstadoEspecialista=r?.habilitado?"Deshabilitar":"Habilitar"}get id(){return this._usuario?.id}get esAdmin(){return this.permisos.datos?.tipo=="admin"}get nombre(){return this._usuario?.nombre}get apellido(){return this._usuario?.apellido}get dni(){return this._usuario?.dni}get email(){return this._usuario?.email}get edad(){return this._usuario?.edad}get imagen1(){return this._usuario?.imagen1}get imagen2(){return this._usuario?.imagen2}get tipo(){return this._usuario?.tipo}get especialidades(){return this._usuario?.especialidades}get obraSocial(){return this._usuario?.obraSocial}get habilitado(){return this._usuario?.habilitado}get mensaje(){return this._usuario?this._usuario.habilitado?"Deshabilitar":"Habilitar":""}cambiarEstado(){this.cargando=!0,this._usuario!=null&&this._usuario.tipo=="especialista"&&(this.db.cambiarEstado(this._usuario.id,!this._usuario.habilitado).then(()=>{this.cargando=!1}).catch(r=>console.log(r)),this._usuario.habilitado=!this._usuario.habilitado)}static \u0275fac=function(t){return new(t||e)(f(O),f(k))};static \u0275cmp=_({type:e,selectors:[["app-detalle-usuario"]],inputs:{usuario:"usuario"},standalone:!0,features:[h],decls:15,vars:12,consts:[[4,"ngIf"],[1,"contenedor-imagenes"],["class","imagen",4,"ngIf"],[3,"disabled","ngClass","click",4,"ngIf"],[1,"br"],[4,"ngFor","ngForOf"],[3,"textContent"],[1,"imagen"],[1,"br","titulo-foto"],["alt","foto perfil",3,"src"],["alt","foto secundaria",3,"src"],[3,"click","disabled","ngClass"]],template:function(t,s){t&1&&(a(0,"label"),o(1,"Detalles de Usuario"),i(),p(2,w,5,1,"div",0)(3,F,5,1,"div",0)(4,j,5,1,"div",0)(5,N,5,1,"div",0)(6,A,5,1,"div",0)(7,R,5,1,"div",0)(8,z,5,1,"div",0)(9,H,4,1,"div",0)(10,V,4,1,"div",0),a(11,"div",1),p(12,L,4,1,"div",2)(13,$,4,1,"div",2),i(),p(14,q,2,5,"button",3)),t&2&&(n(2),l("ngIf",s.nombre),n(),l("ngIf",s.apellido),n(),l("ngIf",s.dni),n(),l("ngIf",s.tipo),n(),l("ngIf",s.edad),n(),l("ngIf",s.email),n(),l("ngIf",s.obraSocial),n(),l("ngIf",s.especialidades),n(),l("ngIf",s.especialidades),n(2),l("ngIf",s.imagen1),n(),l("ngIf",s.imagen2),n(),l("ngIf",s.esAdmin&&s.tipo=="especialista"))},dependencies:[U,D,S,I,y],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}label[_ngcontent-%COMP%]{display:inline-block;margin-bottom:5px;text-align:left;font-weight:700}p[_ngcontent-%COMP%]{display:inline-block;margin-left:10px;margin-bottom:0}.br[_ngcontent-%COMP%]{display:inline-block}div[_ngcontent-%COMP%]{width:100%;margin:10px;background-color:#f5f5f5;border-radius:20px;padding:8px 3px}.contenedor-imagenes[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:10px;min-width:500px;background-color:#f5f5f5;border-radius:20px;padding:10px 15px 15px}.imagen[_ngcontent-%COMP%]{width:20%;aspect-ratio:1/1;text-align:center;margin:2px;background-color:#fff;border-radius:10px;border:1px solid black}.titulo-foto[_ngcontent-%COMP%]{font-size:14px}img[_ngcontent-%COMP%]{width:80%;aspect-ratio:1/1}button[_ngcontent-%COMP%]{width:80%;background-color:#48cc48;color:#fff;padding:10px;border-radius:10px;font-weight:700;border:1px solid black}button[_ngcontent-%COMP%]:disabled{background-color:gray;color:#fff}.activo[_ngcontent-%COMP%]{background-color:#dd4343}"]})};export{M as a};