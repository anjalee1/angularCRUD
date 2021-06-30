import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-position',
  templateUrl: './add-edit-position.component.html',
  styleUrls: ['./add-edit-position.component.css']
})
export class AddEditPositionComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() pos:any;
  PositionId?:string;
  PositionName?:string;

  ngOnInit(): void {
    this.PositionId=this.pos.PositionId;
    this.PositionName=this.pos.PositionName;
  }

  addPosition(){
    var val = {PositionId:this.PositionId,
      PositionName:this.PositionName};
    this.service.addPosition(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePosition(){
    var val = {PositionId:this.PositionId,
      PositionName:this.PositionName};
    this.service.updatePosition(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
