import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { manager } from '../registration-manager/manager';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ApiServiceService {
    baseUrl = "http://localhost:8083/flipkart/managerReg";
    loginUrl = "http://localhost:8083/flipkart/managerLoginDetails";
    getAllAdmins = "http://localhost:8083/flipkart/allAdminDetails";
    PendingRequest = "http://localhost:8083/flipkart/pendingRequest";
    ApproveAdmin="http://localhost:8083/flipkart/approveAdmin"
  
    constructor(private http: HttpClient) { }
    managerReg(data: manager): Observable<any> {
      return this.http.post(`${this.baseUrl}`, data, { responseType: 'text' });
    }
  
    managerLogin(data: any): Observable<any> {
      return this.http.post(`${this.loginUrl}`, data, { responseType: 'json' });
    }
    fetchAdminDetails(): Observable<any> {
      return this.http.get(`${this.getAllAdmins}`, { responseType: 'json' });
    }
    pendingRequest(): Observable<any> {
      return this.http.get(`${this.PendingRequest}`, { responseType: 'json' });
  
    }
    approveStatus(emailId: string, action: boolean):Observable<any>{
      const emailid:string='';
      // const params = {
      //   emailId: data.emailId,
      //   action: data.action
      // };
      // console.log(params.emailId,params.action)
      return this.http.put(`${this.ApproveAdmin}?emailId=${emailId}&action=${action}`, { responseType: 'text' });
  }
  // approveRequest(emailId: string, action: boolean): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const body = { emailId: emailId, action: action };

  //   return this.http.put(this.ApproveAdmin, body, { headers: headers })
  // }

  }