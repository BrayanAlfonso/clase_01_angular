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

  constructor(public router: Router, private _snackBar: MatSnackBar){
    if(!localStorage.getItem("ofertas")){
      this.insertData()
    }

    if(!localStorage.getItem("data")){
      this.insertDataCredenciales()
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
        ofertas:[1]
      },
      {
        tipoID: "CC",
        ID: "123456789",
        nombre:"Juan",
        email: "Juan@gmail.com",
        contraseña: "Juan123",
        ofertas:[2]
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

  
}
