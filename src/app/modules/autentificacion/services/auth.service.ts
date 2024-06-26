import { Injectable } from '@angular/core';
//servicio en la nube de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth  de firebase en el servicio

  constructor(public auth: AngularFireAuth) {
  }

  //funcion para registro
  registrar(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }


  //funcion para inicio de sesion
  IniciarSesion(email: string, password: string) {
    //validar la informacion del usuario -> saber si existe en la coleccion
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  //funcion para cerrar sesion 
  cerrarSesion() {
    return this.auth.signOut();
  }

  //funcion para tomar el uid
  async obtenerUid() {
    //nos  va a generar una promesa y la constante la va a capturar
    const user = await this.auth.currentUser;
    /*Si el usuario no respeta la estructura de la interfaz /
    si tuvo problemas para el registrp -> ej: mal internet */
    if (user == null) {
      return null;
    } else {
      return user.uid;
    }
  }


}
