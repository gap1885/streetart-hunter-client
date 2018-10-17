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
streetart: Array<any> = [];
imgs = {
  'streetart1': 'https://theculturetrip.com/wp-content/uploads/2015/11/El-Pez-Track-Barcelona.jpg',  
  'streetart2': 'https://southeastlondonblog.files.wordpress.com/2017/01/img_7625-1.jpg',  
  'streetart3': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVUszoOjFdtBa2ziwHHEU2qDooWycZUtTvqp-UGMtWJql_AlvLw'
};
newStreetart: any = {
  author: 'author',
  name: 'name',

};

constructor() {
}
