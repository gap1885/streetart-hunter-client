import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { StreetartCreateService  } from '../../services/streetart-create.service';
import { StreetartService } from '../../services/streetart.service';

@Component({
  selector: 'app-streetart-create',
  templateUrl: './streetart-create.component.html',
  styleUrls: ['./streetart-create.component.css']
})

export class StreetartCreateComponent {
loading = true;
streetarts: Array<any> = [];
imgs = {
  'opt 1':'http://indietravel.net/wp-content/uploads/2013/11/Street-Art-by-Alice-in-Vitry-sur-Seine-France-1.jpeg',  
  'opt 2':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcY3y-hBRHnhsbUsSwNBQYjC-vzdZETzqvcCt-E1Q7e95RQPBnA',  
  'opt 3':'https://cdn.theculturetrip.com/wp-content/uploads/2015/11/2905082810_22aaa7aed4_z.jpg',
};

author: string;
name: string;
url: string;

  constructor(private streetartService:StreetartService) { }

  ngOnInit () {
    this.streetartService.getAll()
    .then((results)=> {
      this.streetarts = results;
    })
  }

  submitForm(form) {
    this.streetartService.create({author: this.author, name: this.name, url: this.url})
    .then((result) => {
      this.streetartService.getAll()
      .then((results)=> {
        this.streetarts = results;
      })
      console.log("streetart created")
    })
    .catch((err) => {
    });
  }

}


