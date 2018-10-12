import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-streetart-profile',
  templateUrl: './streetart-profile.component.html',
  styleUrls: ['./streetart-profile.component.css']
})
export class StreetartProfileComponent implements OnInit {

  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();

  }

}