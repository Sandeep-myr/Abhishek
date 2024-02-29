import { Component, OnInit } from '@angular/core';

import { manager } from './manager';

import { Router } from '@angular/router';

import { ApiServiceService } from '../service/api-service.service';
// import { country } from '../../country';
// import { state } from '../../state';

@Component({
  selector: 'app-registration-manager',
  templateUrl: './registration-manager.component.html',
  styleUrl: './registration-manager.component.css'
})
export class RegistrationManagerComponent  {
  manager: manager = new manager();
  data: any;
  fetch: boolean = false;
  
  constructor(private apiSer: ApiServiceService,private route:Router) { }
  saveAllManager() {
    return this.apiSer.managerReg(this.manager).subscribe((da: any) => {
      this.data = da;
      this.route.navigate(['./login'])
    }, error => { console.log(error) }
    
    )
  }

}
