import { Component, OnInit } from '@angular/core';

import { Data} from '../../assets/data/data';
import { DataServiceService} from '../data-service.service';


@Component({
  selector: 'app-col2component',
  templateUrl: './col2component.component.html',
  styleUrls: ['./col2component.component.scss']
})

export class Col2componentComponent implements OnInit {
	rawData: Data[];
	constructor(private dataService:DataServiceService) { }
	
	getrawData(): void {
		this.dataService.getrawData().then(rawData => this.rawData=rawData);
	}
	
	ngOnInit(): void {
		this.getrawData();
	}
  

}
