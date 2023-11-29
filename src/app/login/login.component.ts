import { Component, Inject } from '@angular/core';
import {  MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface Credencial {
  tipoID: string;
  ID: string;
  email: string;
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
  credencialEncontrada:boolean=false
  // campo=''
  storage:string=''
  inputEmail:string=''
  inputPassword:string=''
  infoEmail:string=''
  infoPassword:string=''

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
        email: "Brayanpaloma19b@gmail.com",
        contraseña: "Brayan123"
      },
      {
        tipoID: "CC",
        ID: "123456789",
        email: "Juan@gmail.com",
        contraseña: "Juan123"
      }
    ];

    localStorage.setItem('data', JSON.stringify(this.credenciales))
  }




  buscarUsuario(email: String, password:String){
    let credencialesString = localStorage.getItem('data');
    if (credencialesString) {
      let credenciales = JSON.parse(credencialesString);  
      credenciales.some((credencial: { email: string, contraseña:string }) => {
        if(credencial.email==email && credencial.contraseña==password){
          this.credencialEncontrada=true
          console.log(this.credencialEncontrada)
        }
      });

      if(this.credencialEncontrada){
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

  validarCampos(){
    console.log("Entro al metodo")
    const emailRegex:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex: RegExp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const email = (document.getElementById("email") as HTMLInputElement)
    const password = (document.getElementById("password") as HTMLInputElement)


    if(this.inputEmail!=null || this.inputEmail!= ''){
      console.log("Entro al if")
      if(emailRegex.test(this.inputEmail)){
        email.classList.remove('error')
        email.classList.add('success')
        this.infoEmail=''
      }else{
        email.classList.remove('success')
        email.classList.add('error')
        this.infoEmail='Lo sentimos, por favor ingresa un correo valido.'
      }
    }
    if(this.inputPassword!=null || this.infoPassword!=''){
      console.log("")
      if(passwordRegex.test(this.inputPassword)){
        password.classList.remove('error')
        password.classList.add('success')
        this.infoPassword=''
      }else{
        password.classList.remove('success')
        password.classList.add('error')
        this.infoPassword='Lo sentimos, ingresa una contraseña valida.'
      }
    }
  }

  navegar(){
    let email = (document.getElementById("email") as HTMLInputElement).value
    let password = (document.getElementById("password") as HTMLInputElement).value
    console.log(email,password)

    if( email!="" && password!="" && email!=null && password!=null && email!=undefined && password!=undefined){
      this.buscarUsuario(email,password)
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
