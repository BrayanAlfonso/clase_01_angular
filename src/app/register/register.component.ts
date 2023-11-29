import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


interface Credencial {
  tipoID: string;
  ID: string;
  nombre: string;
  contraseña: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    inputId:string=''
    inputEmail:string=''
    inputPassword:string=''
    infoId:string=''
    infoEmail:string=''
    infoPassword:string=''


  public credenciales: Credencial[] = [];


  constructor(public router: Router, private _snackBar: MatSnackBar){
    const credencialesString=localStorage.getItem("data")
    this.credenciales=credencialesString?JSON.parse(credencialesString):[]
  }



  validarCampos(){

    const numberRegex:RegExp=/^[0-9]{7,11}$/
    const emailRegex:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex: RegExp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


    const id = (document.getElementById("ID") as HTMLInputElement)
    const email = (document.getElementById("email") as HTMLInputElement)
    const password = (document.getElementById("pass") as HTMLInputElement)


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

    if(this.inputId!=null || this.inputId!=''){

      if(numberRegex.test(this.inputId)){
        id.classList.remove('error')
        id.classList.add('success')
        this.infoId=''
      }else{
        id.classList.remove('success')
        id.classList.add('error')
        this.infoId='Lo sentimos, ingresa un numero de documento valido.'
      }
    }
  }


  createUser(){
    
    const tipoID = (document.getElementById("tipoID") as HTMLSelectElement).value
    const ID = (document.getElementById("ID") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const password = (document.getElementById("pass") as HTMLInputElement).value
    console.log(tipoID,ID,email,password)

    const nuevasCredenciales={
      tipoID:tipoID,
      ID:ID,
      nombre:email, 
      contraseña:password
    }
    this.credenciales.push(nuevasCredenciales)

    localStorage.setItem('data', JSON.stringify(this.credenciales));
    this._snackBar.open("Usuario registrado ","",{
      duration:4000,
      panelClass: ['red-snackbar']
    })
    this.clearForm()
  }

  clearForm() {
    (document.getElementById("tipoID") as HTMLSelectElement).value = "";
    (document.getElementById("ID") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
    (document.getElementById("pass") as HTMLInputElement).value = "";
  }

  navegarLogin(){
    this.router.navigateByUrl('/')
  }
}


