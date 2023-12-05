import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from '../app.component';
import { Credencial } from '../app.component';

@Component({
  selector: 'app-jobopenings',
  templateUrl: './jobopenings.component.html',
  styleUrls: ['./jobopenings.component.css']
})
export class JobopeningsComponent {

  nombreJS=JSON.stringify(localStorage.getItem('name'))
  nombre: String = JSON.parse(this.nombreJS)

  emailJS=JSON.stringify(localStorage.getItem('email'))
  email: String = JSON.parse(this.emailJS)

  public ofertas:Oferta[]=[]
  public credenciales:Credencial[]=[]
  public ofertasDeUsuario:Oferta[]=[]
  public Usuario:Credencial|undefined;

  constructor(public router: Router){
    const ofertasJS=localStorage.getItem('ofertas')
    if(ofertasJS){
      this.ofertas=JSON.parse(ofertasJS)
      console.log(this.ofertas)
      
    }

    const dataJS=localStorage.getItem('data')
    if(dataJS){
      this.credenciales=JSON.parse(dataJS)
      this.Usuario = this.credenciales.find((usuario)=> usuario.email==this.email)
      console.log(this.Usuario)

      if (this.Usuario) {
        this.ofertasDeUsuario = this.ofertas.filter(oferta => this.Usuario?.ofertas.includes(oferta.id));
        console.log(this.ofertasDeUsuario)
      }
      
    }
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
}
