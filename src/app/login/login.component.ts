import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(e:any){
    e.preventDefault();
    const {email,password} = e.target;
    console.log(email.value,password.value);

    this.Auth.getUsers(email.value,password.value)
    .subscribe(data=>{
      let a = true;
      console.log("data = ", data);
      if(a){
        this.router.navigate(["admin"]);
        this.Auth.setLoggedIn(true);
      }else{
        window.alert("wrong cred");
      }
    });
  }
}
