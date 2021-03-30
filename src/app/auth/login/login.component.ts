import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm : FormGroup;
  constructor(private authService : AuthServiceService,private router : Router) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      username : new FormControl(null,{updateOn : "change" , validators : [Validators.required]}),
      password : new FormControl(null,{updateOn : "change" , validators : [Validators.required]}),
    })
  }

  
  logIn(){
    let formData = new FormData();
    alert("log in")
    formData.append('username',this.logInForm.get('username').value);
    formData.append('password',this.logInForm.get('password').value);
    this.authService.logIn(formData).subscribe((response)=>{
      alert("logged in");
      console.log(response)
    })
  }

}
