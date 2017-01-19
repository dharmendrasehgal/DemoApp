import { Component, OnInit } from '@angular/core';
import { rawData} from '../../assets/data/rawData';

@Component({
  selector: 'app-col4-component',
  templateUrl: './col4-component.component.html',
  styleUrls: ['./col4-component.component.scss']
})
export class Col4ComponentComponent implements OnInit {
rawData=rawData;
  constructor() { }

  ngOnInit() {
  }

}
