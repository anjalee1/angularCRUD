import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId!:string;
  EmployeeName!:string;
  Position!:string;
  DateOfJoining!:string;
  Contact!:string

  PositionsList:any=[];

  ngOnInit(): void {
    this.loadPositionList();
  }

  loadPositionList(){
    this.service.getAllPositionNames().subscribe((data:any)=>{
      this.PositionsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.Position=this.emp.Position;
      this.DateOfJoining=this.emp.DateOfJoining;
      this.Contact=this.emp.Contact;
     
    });
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                Position:this.Position,
               DateOfJoining:this.DateOfJoining,
               Contact:this.Contact};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Position:this.Position,
    DateOfJoining:this.DateOfJoining,
    Contact:this.Contact};

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }


 

}