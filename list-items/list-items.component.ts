import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/core/services/details.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  users: any;
  constructor(private detailService: DetailsService) { }

  dataItems;
  ngOnInit(): void {

    
    this.initData()
    //console.log('Init data', this.detailService.getItems());
  }

  initData(){
    this.detailService.getItems().subscribe(data => {
      this.users = data['result'];

      localStorage.setItem('dataRegisters', JSON.stringify(this.users));

      console.log('LOCAL STORAGE ITEMS', localStorage.getItem('dataRegisters'));
    });
  }

}
