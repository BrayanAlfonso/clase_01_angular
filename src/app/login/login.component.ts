import { Component, Inject } from '@angular/core';
import {  MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface Credencial {
  tipoID: string;
  ID: string;
  nombre: string;
  contraseña: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  public credenciales: Credencial[] = [];
  Saludo: String = ''
  // campo=''
  storage:String=''

  constructor(public router: Router, private _snackBar: MatSnackBar){
    if(!localStorage.getItem("data")){
      this.insertData()
    }
    
  }

  insertData(){
    this.credenciales = [
      {
        tipoID: "CC",
        ID: "1019762839",
        nombre: "Brayan",
        contraseña: "Brayan123"
      },
      {
        tipoID: "CC",
        ID: "123456789",
        nombre: "Juan",
        contraseña: "Juan123"
      }
    ];

    localStorage.setItem('data', JSON.stringify(this.credenciales))
  }

  buscarUsuario(nombre: String, password:String){
    let credencialesString = localStorage.getItem('data');
    if (credencialesString) {
      let credenciales = JSON.parse(credencialesString);
      credenciales.some((credencial: { nombre: string, contraseña:string }) => {
        let credencialEncontrada = credencial.nombre==nombre && credencial.contraseña==password
        console.log(credencialEncontrada)
        if(credencialEncontrada){
          this._snackBar.open("Bienvenido al login","",{
            duration:4000,
            panelClass: ['green-snackbar']
          })
          this.router.navigateByUrl('/dashboard')
        }else{
            // Simple message with an action.
            this._snackBar.open("Lo sentimos tus credenciales de acceso son incorrectas","",{
              duration:4000,
              panelClass: ['red-snackbar']
            })
          }
      });
    }
  }

  // saveData(){
  //   let campito=this.campo
  //   localStorage.setItem("campo",campito)
  // }
  // getStorage(){
  //   let texto = JSON.stringify(localStorage.getItem('campo'))
  //   this.storage = JSON.parse(texto)
  // }

  // saludarMessage(){
  //   this.Saludo="Hola inmundos"
  // }

  navegar(){
    let nombre = (document.getElementById("nombre") as HTMLInputElement).value
    let password = (document.getElementById("password") as HTMLInputElement).value
    console.log(nombre,password)

    if( nombre!="" && password!="" && nombre!=null && password!=null && nombre!=undefined && password!=undefined){
      this.buscarUsuario(nombre,password)
    }else{
      // Simple message with an action.
      this._snackBar.open("No has completado los campos solicitados","",{
        duration:4000
      })

    }
  }

  navegarRegister(){
    this.router.navigateByUrl('/register')
  }
}
