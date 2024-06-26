import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicio de autentificacion 
import { AuthService } from '../../services/auth.service';
//importamos componente de rutas de angular
import { Router } from '@angular/router';
//importamo servicio de firestore
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input e la contraseña
  hide = true;
//************************************************** importaciones de 'interfaz usuario'*/
  //importar/inicializar la interfaz de usuario

  usuarios: Usuario = {
    uid: '',//inicializamos con comilla simple porque es de STRING
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: ''

  }

  //creamos coleccion de usuarios, tipo 'usuario' para arrays
  coleccionUsuarios: Usuario[] = [];
  //**********************************************************fin */
constructor(
  public servicioAuth:AuthService,
  public servicioRutas:Router,
  public servicioFirestore: FirestoreService
){}
  //funcion para el registro de nuevos usuarios
  async registrar() {


    //registro con servicio de auth
    const credenciales = {
      email:this.usuarios.email,
      password:this.usuarios.password
    }

    const res =this.servicioAuth.registrar(credenciales.email,credenciales.password)
    .then(res =>{  //el metodo .then es una promesa que devuelve el mismo valor si todo sale bien

      alert("Se pudo registrar con exito")

      //elmetodo navigate nos redirecciona a otra vista
      this.servicioRutas.navigate(['/incio'])
    })
    //el metodo catch captura una falla y la vuelve un error cuando la promesa salga mal
    .catch(error=>{
      alert("hubo un error al registrar un nuevo usuario :( \n"+error)
    }) 
    const uid = await this.servicioAuth.obtenerUid();

    this.usuarios.uid=uid;

    this.guardarUsuario()

    //llamamos a la funcion para ejecutarla
    this.limpiarInputs();

  }

  async guardarUsuario(){
   this.servicioFirestore.agregarUsuario(this.usuarios,this.usuarios.uid)
   .then(res =>{
    console.log(this.usuarios);

   })
   .catch(err =>{
    console.log('error =>', err)
   })
   const uid=await this.servicioAuth.obtenerUid();

  }

  //funcion para vaciar los input
  limpiarInputs(){
    const inputs={
      //en constante inputs llamamos a los atributos y los inicializamos como vacios (string = '', number = 0)
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      password: this.usuarios.password= '',
      rol: this.usuarios.rol= ''

    }   
    alert("Te registraste con exito")
  }




}
