import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curriculum } from '../app.component';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  curriculumPerfil:string=''
  nombreJS=JSON.stringify(localStorage.getItem('name'))
  nombre: String = JSON.parse(this.nombreJS)

  emailJS=JSON.stringify(localStorage.getItem('email'))
  email: String = JSON.parse(this.emailJS)

  public curriculums:Curriculum[]=[];
  public curriculumUsuario:Curriculum|undefined;

  public modoEdicion:boolean=false

  public modoEdicionEstudios: boolean = false;
  public modoEdicionIdiomas: boolean = false;
  public modoEdicionConocimientos: boolean = false;

  // Nuevos arreglos para almacenar información durante la edición
  public curriculumEstudios: any[] = [];
  public curriculumIdiomas: any[] = [];
  public curriculumConocimientos: any[] = [];



  constructor(public router: Router){
    const curriculumsJS=localStorage.getItem('curriculums')
    if(curriculumsJS){
      this.curriculums=JSON.parse(curriculumsJS)
      console.log(this.curriculums)
      this.curriculumUsuario = this.curriculums.find((curriculum)=> curriculum.id==this.email)
      console.log(this.curriculumUsuario)
    }
    
  }

  activarEdicion(){
    this.modoEdicion=true
    this.curriculumPerfil = this.curriculumUsuario?.perfil || '';
  }

  activarEdicionEstudios() {
    this.modoEdicionEstudios = true;
    // Copiar valores actuales a un nuevo arreglo
    this.curriculumEstudios = this.curriculumUsuario?.estudios ? [...this.curriculumUsuario.estudios] : [];
  }

  activarEdicionIdiomas() {
    this.modoEdicionIdiomas = true;
    // Copiar valores actuales a un nuevo arreglo
    this.curriculumIdiomas = this.curriculumUsuario?.idiomas ? [...this.curriculumUsuario.idiomas] : [];
  }

  activarEdicionConocimientos() {
    this.modoEdicionConocimientos = true;
    // Copiar valores actuales a un nuevo arreglo
    this.curriculumConocimientos = this.curriculumUsuario?.conocimientos ? [...this.curriculumUsuario.conocimientos] : [];
  }

  guardarCambios(){
    this.modoEdicion=false
    if (this.curriculumUsuario) {
      this.curriculumUsuario.perfil = this.curriculumPerfil;
      localStorage.setItem('curriculums',JSON.stringify(this.curriculums))
      this.curriculumPerfil=''
    }
  }

  guardarCambiosEstudios() {
    this.modoEdicionEstudios = false;
    // Actualizar curriculumUsuario con los cambios realizados
    if (this.curriculumUsuario) {
      this.curriculumUsuario.estudios = [...this.curriculumEstudios];
    }
    localStorage.setItem('curriculums',JSON.stringify(this.curriculums))
  }

  guardarCambiosIdiomas() {
    this.modoEdicionIdiomas = false;
    // Actualizar curriculumUsuario con los cambios realizados
    if (this.curriculumUsuario) {
      this.curriculumUsuario.idiomas = [...this.curriculumIdiomas];
    }
    localStorage.setItem('curriculums',JSON.stringify(this.curriculums))
  }

  guardarCambiosConocimientos() {
    this.modoEdicionConocimientos = false;
    // Actualizar curriculumUsuario con los cambios realizados
    if (this.curriculumUsuario) {
      this.curriculumUsuario.conocimientos = [...this.curriculumConocimientos];
    }
    localStorage.setItem('curriculums',JSON.stringify(this.curriculums))
  }

  // Métodos para agregar/eliminar elementos en los arreglos
  agregarEstudio() {
    this.curriculumEstudios.push({ nivel: '', institucion: '' });
  }

  eliminarEstudio(index: number) {
    this.curriculumEstudios.splice(index, 1);
  }

  agregarIdioma() {
    this.curriculumIdiomas.push({ nombre: '', nivel: '' });
  }

  eliminarIdioma(index: number) {
    this.curriculumIdiomas.splice(index, 1);
  }

  agregarConocimiento() {
    this.curriculumConocimientos.push({ nombre: '', nivel: '' });
  }

  eliminarConocimiento(index: number) {
    this.curriculumConocimientos.splice(index, 1);
  }
  
  navegarLogin(){
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    this.router.navigateByUrl('/')
  }
  
  navegarJobSearch(){
    this.router.navigateByUrl('/JobSearch')
  }

  navegarCurriculum(){
    this.router.navigateByUrl('/Curriculum')
  }

}
