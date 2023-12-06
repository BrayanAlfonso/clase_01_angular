import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from '../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent {
  nombreJS=JSON.stringify(localStorage.getItem('name'))
  nombre: String = JSON.parse(this.nombreJS)
  inputNombre:string=''
  inputCargo:string=''
  inputLugar:string=''
  inputDes:string=''

  public ofertas:Oferta[]=[]

  constructor(public router: Router, private _snackBar: MatSnackBar){
    
  }

  navegarJobSearch(){
    this.router.navigateByUrl('/JobSearch')
  }

  navegarLogin(){
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    this.router.navigateByUrl('/')
  }

  navegarCurriculum(){
    this.router.navigateByUrl('/Curriculum')
  }

  navegarJobOpenings(){
    this.router.navigateByUrl('/JobOpenings')
  }

  registrarOferta(){
    const ofertasJS=localStorage.getItem('ofertas')
    if(ofertasJS){
      this.ofertas=JSON.parse(ofertasJS)
      console.log(this.ofertas)
    }

    const newOferta={
      id:this.ofertas.length+1,
      nombre:this.inputNombre,
      cargo:this.inputCargo,
      lugar:this.inputLugar,
      descripcion:this.inputDes
    }

    this.ofertas.push(newOferta)
    localStorage.setItem('ofertas',JSON.stringify(this.ofertas))
    this._snackBar.open("Oferta registrada ","",{
      duration:4000,
      panelClass: ['red-snackbar']
    })
    this.clearForm()
  }

  clearForm(){
    (document.getElementById("name") as HTMLSelectElement).value = "";
    (document.getElementById("cargo") as HTMLInputElement).value = "";
    (document.getElementById("lugar") as HTMLInputElement).value = "";
    (document.getElementById("descripcion") as HTMLInputElement).value = "";
  }
}
