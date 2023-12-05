import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  nombreJS=JSON.stringify(localStorage.getItem('name'))
  nombre: String = JSON.parse(this.nombreJS)

  emailJS=JSON.stringify(localStorage.getItem('email'))
  email: String = JSON.parse(this.emailJS)

  constructor(public router: Router){
    
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
