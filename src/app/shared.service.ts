import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getPosList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/position/');
  }

  addPosition(val:any){
    return this.http.post(this.APIUrl + '/position/',val);
  }

  updatePosition(val:any){
    return this.http.put(this.APIUrl + '/position/',val);
  }

  deletePosition(val:any){
    return this.http.delete(this.APIUrl + '/position/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/employee/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/employee/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/employee/'+val);
  }

  
  getAllPositionNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/position/');
  }


}