import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StreetartService } from '../../services/streetart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  streetArts: Array<any>
  constructor(private streetartService: StreetartService) {}

  ngOnInit() {
    this.streetartService.getAll()
    .then((results) => {
      this.streetArts = results
      console.log(this.streetArts)
    })
  }

}
