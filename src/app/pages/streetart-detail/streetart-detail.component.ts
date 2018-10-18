import { Component, OnInit } from '@angular/core';
import { StreetartService } from '../../services/streetart.service';
import { identifierName, Identifiers } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streetart-detail',
  templateUrl: './streetart-detail.component.html',
  styleUrls: ['./streetart-detail.component.css']
})
export class StreetartDetailComponent implements OnInit {

 feedbackEnabled = false;
  error = null;
  processing = false;


  constructor(private streetartService: StreetartService,private router: Router) { }

  ngOnInit() {}
  
  submitForm(streetart) {
    this.error = '';
    this.feedbackEnabled = true;
    if (streetart.valid) {
      this.processing = true;
      this.streetartService.getStreetart(Identifiers)
      .then((result) => {
        this.router.navigate(['profile']);
      })
      .catch((err) => {
        this.error = err.error.code; //
        this.processing = false;
        this.feedbackEnabled = false;
      });
    }
  }
}
  

