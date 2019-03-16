import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'router-outlet2',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  public employees =[];
  
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data)
  }

}
