import { Component, OnInit } from '@angular/core';

import { Data} from '../../assets/data/data';
import { DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-col4-component',
  templateUrl: './col4-component.component.html',
  styleUrls: ['./col4-component.component.scss']
})
export class Col4ComponentComponent implements OnInit {
	rawData:Data[];
	constructor(private dataService: DataServiceService) { }
	getrawData(): void{
		this.dataService.getrawData().then(rawData => this.rawData = rawData);
	}
	ngOnInit(): void {
		this.getrawData();
	}
}
