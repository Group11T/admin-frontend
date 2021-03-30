import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  constructor(private authService : AuthServiceService,private router : Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username : new FormControl(null,{updateOn : "change" , validators : [Validators.required]}),
      password : new FormControl(null,{updateOn : "change" , validators : [Validators.required]}),
    })
  }

  register(){
    let formData = new FormData();
    alert("log in")
    formData.append('username',this.registerForm.get('username').value);
    formData.append('password',this.registerForm.get('password').value);
    this.authService.register(formData).subscribe((response)=>{
      alert("logged in");
      console.log(response)
    })
  }

}
