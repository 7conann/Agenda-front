import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  organizationId = '';
  username = '';
  password = '';
  constructor(private router:Router) {

  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
  login() {
    console.log('Login info:', {
      organizationId: this.organizationId,
      username: this.username,
      password: this.password
    });
  }
}
