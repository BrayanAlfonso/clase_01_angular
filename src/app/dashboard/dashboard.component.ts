import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  titulo:String=''
  contenido:String=''
  constructor(public router: Router){
    
  }

  mostrarContenido(x: Number){
    if(x==1){
      this.titulo="¿Qué es?"
      this.contenido="Angular es un framework de desarrollo de aplicaciones web desarrollado y mantenido por Google. Utiliza TypeScript como lenguaje de programación y facilita la creación de aplicaciones web de una sola página (SPA) mediante el uso de componentes reutilizables. Angular ofrece un conjunto de herramientas y patrones para la creación eficiente y estructurada de aplicaciones, incluyendo enlaces bidireccionales de datos, inyección de dependencias, y un sistema de módulos que permite organizar el código de manera modular y escalable. Además, Angular proporciona funcionalidades para interactuar con servicios web mediante HTTP, facilitando la construcción de aplicaciones robustas y dinámicas."
    }else if(x==2){
      this.titulo="¿Para qué sirve?"
      this.contenido=`
      Angular es un framework de desarrollo frontend que se utiliza para construir aplicaciones web dinámicas y de una sola página (SPA). Aquí tienes una descripción de algunas de las principales características y funciones de Angular:
      Desarrollo de SPA (Single Page Applications): Angular facilita la creación de SPAs, donde una única página web se carga inicialmente y el contenido se actualiza de manera dinámica a medida que el usuario interactúa con la aplicación, sin necesidad de recargar la página.
      Arquitectura basada en componentes: Angular se basa en una arquitectura de componentes, lo que significa que la interfaz de usuario se construye utilizando componentes reutilizables. Estos componentes encapsulan la lógica y la presentación de una parte específica de la interfaz de usuario.
      Enlace bidireccional de datos: Angular facilita el enlace bidireccional de datos entre los componentes y la interfaz de usuario. Esto significa que los cambios realizados en la interfaz de usuario se reflejan automáticamente en los componentes y viceversa, simplificando la gestión del estado de la aplicación.
      Inyección de dependencias: Angular utiliza un sistema de inyección de dependencias que facilita la organización y reutilización del código. Los servicios pueden inyectarse en componentes y otros servicios, lo que promueve la modularidad y la mantenibilidad del código.
      Manejo de eventos y cambios en el estado de la aplicación: Angular proporciona un sistema de eventos y un mecanismo para gestionar cambios en el estado de la aplicación, lo que facilita la manipulación de datos y la actualización de la interfaz de usuario en respuesta a eventos específicos.
      Interacción con servicios web: Angular incluye módulos para realizar solicitudes HTTP, lo que facilita la interacción con servicios web y la obtención de datos dinámicos para actualizar la interfaz de usuario.
      Herramientas para pruebas unitarias: Angular está diseñado con la facilidad de prueba en mente. Proporciona herramientas integradas para escribir y ejecutar pruebas unitarias y de integración, lo que contribuye a la creación de aplicaciones más robustas y fiables.
      En resumen, Angular es utilizado para construir aplicaciones web modernas y escalables, proporcionando una estructura organizada, un sistema de componentes reutilizables y herramientas integradas para abordar diversos aspectos del desarrollo frontend.`
    }else if(x==3){
      this.titulo="Sintaxis"
      this.contenido=`
      Angular es un framework de desarrollo frontend que simplifica la creación de aplicaciones web modernas y dinámicas. Utiliza TypeScript, un superconjunto tipado de JavaScript, para mejorar la robustez y la mantenibilidad del código. La arquitectura central de Angular se basa en componentes, unidades reutilizables que encapsulan tanto la lógica como la interfaz de usuario.
      El desarrollo en Angular involucra la definición de componentes, que se componen en módulos. Los módulos actúan como contenedores para organizar y estructurar la aplicación. La inyección de dependencias es una característica clave de Angular, facilitando la gestión de las dependencias y promoviendo la reutilización de código.
      Además, Angular ofrece enlaces bidireccionales de datos, permitiendo una sincronización automática entre la interfaz de usuario y la lógica de la plicación. La capacidad de realizar solicitudes HTTP facilita la interacción con servicios web para obtener y actualizar datos dinámicamente.
      El desarrollo en Angular también implica la creación de plantillas HTML para definir la interfaz de usuario y estilos CSS para darle estilo. Estos elementos se integran de manera cohesiva en el framework, proporcionando una experiencia de desarrollo estructurada y eficiente. En resumen, Angular es una herramienta poderosa para construir aplicaciones web escalables, mantenibles y eficientes.`
    }else if(x==4){
      this.titulo="Ejemplo"
      this.contenido=`Imagina que estás construyendo una aplicación web para mostrar una lista de tareas pendientes. En el contexto de Angular, podrías estructurar tu aplicación de la siguiente manera:
      Creación de un Componente:
      Definir un componente llamado ListaTareas que represente la vista de la lista de tareas pendientes. Este componente podría tener propiedades como tareas para almacenar la lista de tareas y métodos para realizar acciones como agregar o completar tareas.
      Definición de un Módulo:      
      Crear un módulo llamado TareasModule que encapsule el componente ListaTareas. Este módulo podría importar módulos necesarios de Angular y declarar el componente ListaTareas dentro de él.      
      Servicio para la Gestión de Tareas:      
      Crear un servicio llamado GestorTareasService que se encargue de manejar la lógica de negocio relacionada con las tareas, como la obtención de tareas desde un servidor o la actualización del estado de una tarea.      
      Plantilla HTML del Componente:      
      Diseñar la interfaz de usuario utilizando una plantilla HTML en el componente ListaTareas. Podrías utilizar directivas estructurales de Angular, como *ngFor, para iterar sobre la lista de tareas y mostrarlas en la interfaz.      
      Estilos CSS:      
      Aplicar estilos CSS específicos para el componente ListaTareas y, opcionalmente, estilos globales para toda la aplicación.      
      En este ejemplo, Angular facilita la estructuración de la aplicación en componentes reutilizables, modulariza el código mediante la definición de módulos y utiliza servicios para la gestión de datos y lógica de negocio. La plantilla HTML y los estilos CSS se integran de manera coherente en el componente, ofreciendo una experiencia de desarrollo organizada y eficiente.`
    }else if(x==5){
      this.titulo="Material Angular"
      this.contenido=`Link https://material.angular.io`
    }
  }

  navegarLogin(){
    this.router.navigateByUrl('/')
  }
}
