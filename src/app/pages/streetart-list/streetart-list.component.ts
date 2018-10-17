import { Component, OnInit } from '@angular/core';
import { StreetartService } from '../../services/streetart.service';

@Component({
  selector: 'app-streetart-list',
  templateUrl: './streetart-list.component.html',
  styleUrls: ['./streetart-list.component.css']
})
export class StreetartListComponent implements OnInit {
  streetart: Array<any>;
  error = false;

  constructor(private StreetartService:StreetartService) { }

  ngOnInit() {
    this.StreetartService.getAll()
    .then((results) => {
      this.streetart = results;
    })
    .catch((error) => {
      console.log(error);
      this.error = true;
    });
  }

}



