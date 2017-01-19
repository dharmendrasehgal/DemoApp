import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
 @Input()
 searchPlaceholder = "type your serach text!";
  constructor() { }

  ngOnInit() {
  }
  
  searchClear(sInput){
	sInput.value="";
  }

}
