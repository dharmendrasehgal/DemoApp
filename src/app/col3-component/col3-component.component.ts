import { Component, OnInit } from '@angular/core';
import { rawData} from '../../assets/data/rawData';

@Component({
  selector: 'app-col3-component',
  templateUrl: './col3-component.component.html',
  styleUrls: ['./col3-component.component.scss']
})
export class Col3ComponentComponent implements OnInit {
rawData=rawData;
  constructor() { }

  ngOnInit() {
  }

}
