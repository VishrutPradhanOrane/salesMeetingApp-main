import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private baseUrl = environment.apiBaseUrl;
 

  constructor(private http: HttpClient) {}

  addCompany(data: any) {
    return this.http.post(`${this.baseUrl}/company`, data);
  }

  getCompany() {
    return this.http.get(`${this.baseUrl}/company`);
  }
  getAllDepartment() {
    return this.http.get(`${this.baseUrl}/departments`);
  }

  addUser(data: any) {
    return this.http.post(`${this.baseUrl}/user`, data);
  }

  getUser() {
    return this.http.get(`${this.baseUrl}/user`);
  }

  addDepartment(data: any) {
    return this.http.post(`${this.baseUrl}/departments`, data);
  }

  getDepartments() {
    return this.http.get(`${this.baseUrl}/departments`);
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  getDashboardCount() {
  return this.http.get(`${this.baseUrl}/dashboard-count`);
}

 
}
  

