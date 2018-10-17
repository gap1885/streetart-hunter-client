import { Component, OnInit } from '@angular/core';
import { StreetartService } from '../../services/streetart.service';

@Component({
  selector: 'app-streetart-list',
  templateUrl: './streetart-list.component.html',
  styleUrls: ['./streetart-list.component.css']
})
export class StreetartListComponent implements OnInit {
  streetArts: Array<any>
  error = false;

  constructor(private StreetartService:StreetartService) { }

  ngOnInit() {
    this.StreetartService.getAll()
    .then((results) => {
      this.streetArts = results
      console.log(this.streetArts)
    })
  }
 

}



