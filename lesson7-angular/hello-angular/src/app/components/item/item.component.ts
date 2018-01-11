import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item:{
    id:number;
    Name:string;
    Description:string;
  }
  
  public arrs:string[];

  constructor() { 
    this.item = {
      id: 1,
      Name:"item-1",
      Description:"Pencil"
    }

    this.arrs =["One", "Two", "Three"];

  }

  ngOnInit() {
    
  }

  

  save(id, name, desc){
    alert(id+','+name+','+desc);
    return false;
  }

  addArr(str){

    this.arrs.push(str);
  }

  

}


