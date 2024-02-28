import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrl: './manager-login.component.css'
})
export class ManagerLoginComponent {
  logins = {
    userName: '',
    password: ''
  };
  msg: any;
  status: boolean = false;
  manager: any;
  constructor(private service: ApiServiceService,private route:Router) { }


  ngOnInit(){
    this.login();
    
  }

  login() {
    // console.log(this.logins)
    this.service.managerLogin(this.logins).subscribe((data: any) => {
      this.manager = data;
      // console.log(this.logins)
      this.manager = JSON.stringify(this.manager);
      sessionStorage.setItem('manager', this.manager);
      this.status = true;
      this.msg = 'Login successfull';
    }, error => {
      console.log(error);
      this.status = true;
      this.msg = 'Invalid Credentials';

    })
setTimeout(()=>{
  this.status=false;
},5000)

  }
}
