import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IEmployee, Employee } from '../models/employee.model';
import {EmployeeService} from '../models/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[]

  constructor(private _employeeService:EmployeeService,private route:Router) { }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();

  }

  editEmployee(name){
    this.route.navigate(['employeeEdit', {name}]);
  }

  deleteEmployee(name){
    this._employeeService.deleteEmployee(name);
  }

}
