import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export interface Oferta {
  id: number;
  nombre: string;
  cargo:string;
  lugar: string;
  descripcion: string;
}

export interface Credencial {
  tipoID: string;
  ID: string;
  nombre:string;
  email: string;
  contraseña: string;
  ofertas:number[]
  rol:string
}

export interface Estudio {
  nivel: string;
  institucion: string;
  fechaInicio: Date;
  fechaFin?: Date; // La fechaFin es opcional, ya que puede estar estudiando actualmente
}

export interface Idioma {
  nombre: string;
  nivel: string;
}

export interface Conocimiento {
  nombre: string;
  nivel: string;
}

export interface Curriculum {
  id: string;
  perfil: string;
  estudios: Estudio[];
  idiomas: Idioma[];
  conocimientos: Conocimiento[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase_01_angular';
  public ofertas: Oferta[] = [];
  public credenciales: Credencial[] = [];
  public curriculums:Curriculum[]=[];

  constructor(public router: Router, private _snackBar: MatSnackBar){
    if(!localStorage.getItem("ofertas")){
      this.insertData()
    }

    if(!localStorage.getItem("data")){
      this.insertDataCredenciales()
    }

    if(!localStorage.getItem("curriculums")){
      this.insertDataCurriculum()
    }
    
  }

  insertDataCredenciales(){
    this.credenciales = [
      {
        tipoID: "CC",
        ID: "1019762839",
        nombre:'Brayan',
        email: "Brayanpaloma19b@gmail.com",
        contraseña: "Brayan123@",
        ofertas:[1],
        rol:'1'
      },
      {
        tipoID: "CC",
        ID: "123456789",
        nombre:"Juan",
        email: "Juan@gmail.com",
        contraseña: "Juan123",
        ofertas:[2],
        rol:'2'
      }
    ];

    localStorage.setItem('data', JSON.stringify(this.credenciales))
  }

  insertData(){
    this.ofertas = [
      {
        id: 1,
        nombre:'Oferta 1',
        cargo: "Desarrollador",
        lugar: "Bogotá",
        descripcion:"Descripción de la oferta 1"
      },
      {
        id: 2,
        nombre:'Oferta 2',
        cargo: "Gestor de base de datos",
        lugar: "Medellin",
        descripcion:"Descripción de la oferta 2"
      },
      {
        id: 3,
        nombre:'Oferta 3',
        cargo: "Gestor de base de datos",
        lugar: "Medellin",
        descripcion:"Descripción de la oferta 3"
      },
      {
        id: 4,
        nombre:'Oferta 4',
        cargo: "Gestor de base de datos",
        lugar: "Medellin",
        descripcion:"Descripción de la oferta 4"
      }
    ];

    localStorage.setItem('ofertas', JSON.stringify(this.ofertas))
  }

  insertDataCurriculum(){

    const newCurriculum:Curriculum= {
      id: 'Brayanpaloma19b@gmail.com',
      perfil: 'Desarrollador Full Stack',
      estudios: [
        {
          nivel: 'Universitario',
          institucion: 'Universidad X',
          fechaInicio: new Date('2016-09-01'),
          fechaFin: new Date('2020-06-30'),
        },
        {
          nivel: 'Certificación',
          institucion: 'Curso de Desarrollo Web',
          fechaInicio: new Date('2021-01-15'),
        },
      ],
      idiomas: [
        {
          nombre: 'Inglés',
          nivel: 'Avanzado',
        },
        {
          nombre: 'Español',
          nivel: 'Nativo',
        },
      ],
      conocimientos: [
        {
          nombre: 'JavaScript',
          nivel: 'Avanzado',
        },
        {
          nombre: 'React',
          nivel: 'Intermedio',
        },
        {
          nombre: 'Node.js',
          nivel: 'Avanzado',
        },
      ],
    };

    const newCurriculum2: Curriculum = {
      id: 'Juan@gmail.com',
      perfil: 'Diseñador UX/UI',
      estudios: [
        {
          nivel: 'Universitario',
          institucion: 'Universidad Y',
          fechaInicio: new Date('2015-09-01'),
          fechaFin: new Date('2019-06-30'),
        },
        {
          nivel: 'Certificación',
          institucion: 'Curso de Diseño UX/UI',
          fechaInicio: new Date('2020-01-15'),
        },
      ],
      idiomas: [
        {
          nombre: 'Inglés',
          nivel: 'Intermedio',
        },
        {
          nombre: 'Francés',
          nivel: 'Básico',
        },
      ],
      conocimientos: [
        {
          nombre: 'Figma',
          nivel: 'Avanzado',
        },
        {
          nombre: 'Sketch',
          nivel: 'Intermedio',
        },
        {
          nombre: 'Adobe XD',
          nivel: 'Avanzado',
        },
      ],
    };
    this.curriculums.push(newCurriculum,newCurriculum2)
    localStorage.setItem('curriculums', JSON.stringify(this.curriculums))
  }
  
}
