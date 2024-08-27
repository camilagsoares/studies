import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string;

  constructor(private route: Router){}

  login() {
   sessionStorage.setItem("user",this.username);

    this.route.navigate(['home'])
  }



}
