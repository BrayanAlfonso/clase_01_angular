import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Oferta} from '../app.component'
import { Credencial } from '../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent {
  nombreJS=JSON.stringify(localStorage.getItem('name'))
  nombre: String = JSON.parse(this.nombreJS)
  idJS=JSON.stringify(localStorage.getItem('id'))
  id: String = JSON.parse(this.idJS)
  ofertas: Oferta[]=[]
  credenciales:Credencial[]=[]

  constructor(public router:Router, private _snackBar: MatSnackBar){
    const ofertasJSON = localStorage.getItem('ofertas');
    console.log(ofertasJSON)

    if (ofertasJSON) {
      this.ofertas = JSON.parse(ofertasJSON);
      console.log(this.ofertas);
    } else {
      console.log('No hay ofertas en el localStorage');
    }


    const credencialesJSON = localStorage.getItem('data');
    console.log(credencialesJSON)

    if (credencialesJSON) {
      this.credenciales = JSON.parse(credencialesJSON);
      console.log(this.credenciales);
    } else {
      console.log('No hay credenciales en el localStorage');
    }
  }

  aplicarOferta(idOferta:number){
    const usuario= this.credenciales.find((usuario)=> usuario.ID==this.id)
    usuario?.ofertas.push(idOferta)
    localStorage.setItem('data', JSON.stringify(this.credenciales))

    this._snackBar.open(`Se ha asignado la oferta ${idOferta} al ususario ${this.id}`,"",{
      duration:4000,
      panelClass: ['red-snackbar']
    })
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
}
