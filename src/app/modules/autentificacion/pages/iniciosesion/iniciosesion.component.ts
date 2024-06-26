import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;

  

  constructor(
    //le enviamos parametros al constructor
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ){}

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

  async compara() {//funcion inicio sesion

    

    const credenciales ={
      email:this.usuarios.email,
      password:this.usuarios.password
    }

    const res = await this.servicioAuth.IniciarSesion(credenciales.email,credenciales.password)
    .then(res =>{
      alert('¡ser pudo ingresar con exito!');
      this.servicioRutas.navigate(['/inicio']);
    })
    .catch(err => {
      alert('hubo un problema al iniciar sesion' +err)
    })


    this.limpiarInputs();

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
 
    }

}
