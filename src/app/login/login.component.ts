import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router){

  }



  navegar(){
    let nombre = (document.getElementById("nombre") as HTMLInputElement).value
    let password = (document.getElementById("password") as HTMLInputElement).value
    console.log(nombre,password)

  let credencialesString = localStorage.getItem('data');
  if (credencialesString) {
    let credenciales = JSON.parse(credencialesString);
    credenciales.map((credencial: { nombre: string, contraseña:string }) => {
      console.log(credencial.nombre,credencial.contraseña);
      if(credencial.nombre===nombre && credencial.contraseña===password){
        console.log('Funciona redireccion a dashboard')
        this.router.navigateByUrl('/dashboard')
      }else{
        console.log('Funciona redireccion a register')
        this.navegarRegister()
      }
    });
  }
  }

  navegarRegister(){
    this.router.navigateByUrl('/register')
  }
}
