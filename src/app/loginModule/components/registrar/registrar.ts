import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  imports: [],
  standalone: true,
  templateUrl: './registrar.html',
  styleUrl: './registrar.scss'
})
export class Registrar {


  constructor(private router:Router) {

  }

  goToRegister() {
    this.router.navigate(['/login']);
  }
}
