import { Component, OnInit } from '@angular/core';


import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-pending-status',
  templateUrl: './pending-status.component.html',
  styleUrl: './pending-status.component.css'
})
export class PendingStatusComponent implements OnInit{
  content=
  {
    emailId:'',
    action:null
  };
  constructor(private apiser:ApiServiceService,private router:Router){}
  ngOnInit(): void {
    this.PendingRequestMethod();
  
    
    
   
  }
  pendingAdmin:any;


PendingRequestMethod(){
  return this.apiser.pendingRequest().subscribe(data=>{
      this.pendingAdmin=data;
  },error=>console.log(error));
}

approveAdmin(status:boolean,emailId:string){


// this.content.action=status;
    console.log(status);
    console.log(emailId);
      return this.apiser.approveStatus(emailId,status).subscribe((Content:any)=>{
        console.log(this.content,"Approved");
      },error=>console.log(error,"Not Approved"));
  }
}

