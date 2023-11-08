import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router){
    this.insertData()
  }

  insertData(){
    let credenciales = [{
      nombre:"Brayan", 
      contraseña:"Brayan123"}]
    localStorage.setItem('data', JSON.stringify(credenciales))
  }

  navegar(){
    let nombre = (document.getElementById("nombre") as HTMLInputElement).value
    let password = (document.getElementById("password") as HTMLInputElement).value
    console.log(nombre,password)

  let credencialesString = localStorage.getItem('data');
  if (credencialesString) {
    let credenciales = JSON.parse(credencialesString);
    credenciales.map((credencial: { nombre: string }) => {
      console.log(credencial.nombre);
    });
  }
    
    // this.router.navigateByUrl('/register')
  }
}
