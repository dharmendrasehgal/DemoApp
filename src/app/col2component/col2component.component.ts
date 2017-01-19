import { Component, OnInit } from '@angular/core';
import { rawData} from '../../assets/data/rawData';


@Component({
  selector: 'app-col2component',
  templateUrl: './col2component.component.html',
  styleUrls: ['./col2component.component.scss']
})

export class Col2componentComponent implements OnInit {
	rawData=rawData;

  ngOnInit() {
  }

}
