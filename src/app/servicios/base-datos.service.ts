import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docSnapshots, DocumentSnapshot, Firestore, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';
import { map, Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Especialidad } from '../interfaces/especialidad';
import { Log } from '../interfaces/log';


@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  constructor(private firestore: Firestore, private storage: Storage) { }

  obtenerDatosUsuario(id:string){
    return getDoc(doc(this.firestore, "usuarios", id));
  }

  //fijarme
  asignarDatosUsuario(id: string): Observable<Usuario|undefined> {
    const docRef = doc(this.firestore, 'usuarios', id);
    return docSnapshots(docRef).pipe(
      map((docSnapshot) => {
        if (docSnapshots.exists()) {
          return docSnapshots.data() as Usuario;
        }
        return undefined;
      })
    );
  }

  obtenerUsuarios(){
    const coleccion = collection(this.firestore, "usuarios");
    const q = query(coleccion, orderBy("tipo", "desc"))
    return collectionData(q, {idField: 'id'}) as Observable<Usuario[]>;
  }

  obtenerEspecialistas(){
    const coleccion = collection(this.firestore, "usuarios");
    const q = query(coleccion, where("tipo", "==", "especialista"))
    return collectionData(q, {idField: 'id'}) as Observable<Usuario[]>;
  }

  obtenerPacientes(){
    const coleccion = collection(this.firestore, "usuarios");
    const q = query(coleccion, where("tipo", "==", "paciente"))
    return collectionData(q, {idField: 'id'}) as Observable<Usuario[]>;
  }


  obtenerEspecialidades(){
    const coleccion = collection(this.firestore, "especialidades");
    return collectionData(coleccion, {idField: 'id'}) as Observable<Especialidad[]>;
  }

  agregarEspecialidad(valor: string){
    const coleccion = collection(this.firestore, "especialidades");
    const documentoNuevo = doc(coleccion);
    const nuevoId = documentoNuevo.id;

    setDoc(documentoNuevo, {
      id: nuevoId,
      nombre: valor
    });
  }

  async agregarUsuario(datos: Usuario){
    const coleccion = collection(this.firestore, "usuarios");
    datos.imagen1 = await this.subirArchivos(datos.imagen1, datos.id + "-1");
    if(datos.imagen2){
      datos.imagen2 = await this.subirArchivos(datos.imagen2, datos.id + "-2");
    }
    const documentoNuevo = doc(coleccion, datos.id);
    setDoc(documentoNuevo, datos);
  }

  cambiarEstado(id: string, estado: boolean){
    const documento = doc(this.firestore, "usuarios", id);
    return updateDoc(documento, {habilitado: estado});
  }

  async subirArchivos(foto: File, nombre: string) : Promise<string> {
    const storageRef = ref(this.storage, `imagenes/${nombre}`);
    const snapshot = await uploadBytesResumable(storageRef, foto);
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  }

  async usuarioExiste(email: string): Promise<boolean> {
    const coleccion = collection(this.firestore, "usuarios");
    const q = query(coleccion, where("email", "==", email));
    const datos = await getDocs(q);
    return datos.size !== 0;
  }


  generarLog(usuario?: Usuario){
    if(usuario){
      const coleccion = collection(this.firestore, "logs");
      const documentoNuevo = doc(coleccion);
      const nuevoId = documentoNuevo.id;
  
      setDoc(documentoNuevo, {
        id: nuevoId,
        idUsuario: usuario.id,
        nombre: usuario.nombre + " " + usuario.apellido,
        dni: usuario.dni,
        tipo: usuario.tipo,
        fecha: new Date().toUTCString()
      });
    }
  }

  obtenerLogs(){
    const coleccion = collection(this.firestore, "logs");
    const q = query(coleccion, orderBy("fecha", "asc"));
    return collectionData(q, {idField: 'id'}) as Observable<Log[]>;
  }

}
