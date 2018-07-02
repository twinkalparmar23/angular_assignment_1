import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IEmployee, Employee } from '../models/employee.model';
import {EmployeeService} from '../models/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  model=new Employee();
  name:string;
  qualifications:string[];
  experience:string[];
  languages:any[];
  selectedValue :string[]=[];
  j:number;


  constructor(private _employeeService:EmployeeService,private route:ActivatedRoute,private router:Router) {
     this.name=this.route.snapshot.params['name'];
   }

  ngOnInit() {

      this.qualifications=['BE','B.Tech','M.Tech','BCA','MCA'];
      this.experience=['1','2','3','4','5'];
      this.languages=[
      {name:'C/C++',checked:false},
      {name:'JAVA',checked:false},
      {name:'C#',checked:false},
      {name:'PHP',checked:false},
      {name:'Python',checked:false}
      ];

      //console.log(this.route.snapshot.params['name']);
      this.model=this._employeeService.getEmployeeData(this.name);

  }

  change(e, languages,i){
 
    if(!languages.checked){
       this.languages[i].checked = !this.languages[i].checked;
      this.selectedValue.push(this.languages[i].name);
     
    }
    else{
      this.languages[i].checked = !this.languages[i].checked;
      this.j=this.selectedValue.indexOf(this.languages[i]);
      this.selectedValue.splice(this.j,1);
      //this.selectedValue.pop();
      
    }
    //console.log(languages);
    //console.log(this.languages[i].checked);
   //console.log(this.selectedValue);
  }

  onSubmit(form:any) {
    this.model.languages=this.selectedValue;
    //console.log(form);
    //console.log(this.model.languages);
    //console.log(this.model);
    //console.log("languages:"+this.selectedValue);

    this._employeeService.saveEditedData(this.model);
    this.router.navigate(['/employeelist']);
    //this.router.navigate(['/employeelist']);
     }

  btnCancel(){
    //form.reset();
    this.router.navigate(['/employeelist']);
  }
}
