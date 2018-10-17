import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import{StreetartService}from '../../services/streetart.service';

@Component({
  selector: 'app-streetart-profile',
  templateUrl: './streetart-profile.component.html',
  styleUrls: ['./streetart-profile.component.css']
})
export class StreetartProfileComponent implements OnInit {

  user: any;
  streetArts: Array<any>
  constructor(private authService: AuthService,private streetartService: StreetartService) { }

  ngOnInit() {
    this.user = this.authService.getUser();

    this.streetartService.getAll()
    .then((results) => {
      this.streetArts = results
      console.log(this.streetArts)
    })
  }
}