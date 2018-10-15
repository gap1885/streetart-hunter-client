import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { StreetartCreateService  } from '../../services/streetart-create.service';
import { StreetartService } from '../../services/streetart.service';

@Component({
  selector: 'app-streetart-create',
  templateUrl: './streetart-create.component.html',
  styleUrls: ['./streetart-create.component.css']
})
export class StreetartCreateComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/'
  });

  name: '';
  author: '';

  feedback: string;

  streetartlist: any;

  constructor(
    private StreetartCreateService: StreetartCreateService
  ) {}


  ngOnInit() {
    this.StreetartCreateService.getAll()
    .then((results) => {
      this.streetartlist = results;
    });

  this.uploader.onSuccessItem = (item, response) => {
    this.StreetartCreateService.getAll()
    .then((results) => {
      this.streetartlist = results;
    });
  };

  this.uploader.onErrorItem = (item, response, status, headers) => {
    this.feedback = JSON.parse(response).message;
  };
}

submitForm(form) {
  if (form.valid) {
    this.uploader.onBuildItemForm = (item, form2) => {
      form2.append('name', this.name);
      form2.append('author', this.author)
    };
  }
  this.uploader.uploadAll();
}
}
