export interface IEmployee{
    
     firstName:string;
      lastName:string;
      emailaddress:string;
      contact:number;
      address:string;
      username:string;
      pwd:string;
      gender:string;
      qual:string;
      exp:string;
      languages:string[];
}


export class Employee implements IEmployee{
    constructor(    
    ) { }
   
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
     public languages:string[];
    
    
}



