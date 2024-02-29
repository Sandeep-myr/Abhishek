import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent implements OnInit{

    userData={managerName: '', emailId: '' };
visible: boolean=false;
  constructor(private route:Router){}
  showPendingStatus:boolean=true;
  showAdminDetails:boolean=false;
  items:any;
  

  ngOnInit() {
    this.items = [
      {
          label: 'About',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/about'],
          styleClass: 'about-link',

      },
      {
          label: 'FeedBack',
          icon: 'pi pi-fw pi-pencil',
          routerLink: ['/feedback'],
          styleClass: 'feedback-link' 
      },
      {
          label: 'Admins',
          icon: 'pi pi-fw pi-user',
          items: [
              {
                  label: 'Getalladmins',
                  icon: 'pi pi-fw pi-users',
                  routerLink: ['/adminDetails'],
                  styleClass: 'admins-link' 
              },
              {
                  label: 'Pendingstatus',
                  icon: 'pi pi-fw pi-user-plus',
                  routerLink: ['/pendingStatus'],    
                  styleClass: 'pendingstatus-link' 
              },
              {
                  label: 'Status',
                  icon: 'pi pi-fw pi-chart-line',
                  routerLink: ['/status'],
                  
              }
          ]
      },
      {
          label: 'LogOut',
          icon: 'pi pi-fw pi-power-off',
          routerLink: ['/login'],
          styleClass: 'logout-link' ,
          command  : () => this.logOut()
      }
  ];
  this.showDialog();
  this.closeRegistration();
  this.logOut();
  
  }
  logOut(){
    sessionStorage.removeItem('manager');
  }
//   showScreenDetails(){
//     this.showAdminDetails=true;
//     this.showPendingStatus=false;
//   }
//   showScreenPending(){
//     this.showAdminDetails=false;
//     this.showPendingStatus=true;
//   }
showDialog() {

    const model=document.getElementById('myModal');
    if(model!=null)
    {
        model.style.display='block';
    }
    this.visible = true;
   const storeData=sessionStorage.getItem('manager');
   if(storeData){
        this.userData=JSON.parse(storeData);
   }
  }
  closeRegistration() {
        const model=document.getElementById('myModal')
        if(model!=null){
            model.style.display='none';
        }
    }
  
}
