import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  qualifications:string[];
  experience:string[];
  languages:any[];
  selectedValue :string[]=[];
  j:number;

      public firstName:string;
     public lastName:string;
     public emailaddress:string;
     public contact:number;
     public address:string;
     public username:string;
     public pwd:string;
     public gender:string;
     public qual:string;
     public exp:string;

     

  model=new Employee();
  

  ngOnInit() {
    

    this.qualifications=['BE','B.Tech','M.Tech','BCA','MCA'];
    this.experience=['1','2','3','4','5'];
    //this.languages=['C/C++','JAVA','C#','PHP','Python'];
    this.languages=[
      {name:'C/C++',checked:false},
      {name:'JAVA',checked:false},
      {name:'C#',checked:false},
      {name:'PHP',checked:false},
      {name:'Python',checked:false}
      ];
  }

  /*changeCheckbox(languages, i) {
    if (languages) {
      this.languages[i].checked = !this.languages[i].checked;
    }
  }*/

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
    console.log(this.model);
    //console.log("languages:"+this.selectedValue);
        }

}
