import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  details: any;
  id: any;
  img:any;
  Name: any;
  Email:any;
  Phone:any;
  searchItem:any
  display;
  selectedProductToEdit;
  form: any;
  
  constructor(public service:ServiceService) { }

  ngOnInit(): void {
    this.service.getdetails().subscribe((res:any)=>{
      this.details=res;
      this.display=res[0];
      console.log(this.display);


      
    })
  }

  
  

  onSubmit(form:NgForm){
    console.log(form);
    localStorage.setItem('akhi',JSON.stringify(this.form.value))
    
  }

action(detail: any){
    this.display=detail;
    console.log(this.display);
    

  }

  click(detail:any):any{
    if(detail.Name === this.display.Name){
     return 'color'
    }
  }
}