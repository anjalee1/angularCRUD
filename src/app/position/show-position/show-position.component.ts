import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-position',
  templateUrl: './show-position.component.html',
  styleUrls: ['./show-position.component.css']
})
export class ShowPositionComponent implements OnInit {

  constructor(private service:SharedService) { }
  PositionList:any=[];
  ModalTitle?:string;
  ActivateAddEditPosComp:boolean=false;
  pos:any;

  ngOnInit(): void {
    this.refreshPosList();
  }

  addClick(){
    this.pos={
      PositionId:0,
      PositionName:""
    }
    this.ModalTitle="Add Position";
    this.ActivateAddEditPosComp=true;

  }

  editClick(item:any){
    this.pos=item;
    this.ModalTitle="Edit Position";
    this.ActivateAddEditPosComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deletePosition(item.PositionId).subscribe(data=>{
        alert(data.toString());
        this.refreshPosList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditPosComp=false;
    this.refreshPosList();
  }

  refreshPosList(){
    this.service.getPosList().subscribe(data=>{
      this.PositionList=data;
    });
  }

}
