import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;

  username: string;
  password: string;

  constructor( private authService: AuthService, private router: Router) {}

  ngOnInit() {}


  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const data = {
        username: this.username,
        password: this.password
      }
      this.authService.login(data)
      .then((result) => {
        this.router.navigate(['/profile']);
      })
      .catch((err) => {
        this.error = err.error.code;
        this.processing = false;
        this.feedbackEnabled = false;
      });
    }
  }
}

