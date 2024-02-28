import { Component, OnInit } from '@angular/core';
// import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';

import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css'
})
export class AdminDetailsComponent implements OnInit {
  constructor(private apiser:ApiServiceService,private router:Router){}
  ngOnInit(): void {
 this.getAllAdmins();
  }
  admin:any={
    adminName :'',
    adminAddresses: [],
    adminContacts: [
        {
            mobileNumber: 0,
            emailId: ''
        },
        {
            mobileNumber: 0,
            emailId: ''
        }
    ],
    isApproved: ''
  }
  
  adminDetails:any;
  

getAllAdmins(){
  return this.apiser.fetchAdminDetails().subscribe(data=>{
    this.adminDetails=data;
    console.log(this.adminDetails);
  },error=>console.log(error));

}
}
