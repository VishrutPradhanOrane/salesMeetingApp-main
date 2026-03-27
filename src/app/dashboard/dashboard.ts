import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { SalesService } from '../sales-service';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, CommonModule, MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
departmentsCount: number = 0;
companiesCount: number = 0;
usersCount: number = 0;
  constructor(public salesService: SalesService) {}
  ngOnInit(): void {
  
      this.getDashboardData();
  }

  getDashboardData() {
    this.salesService.getDashboardCount().subscribe((res: any) => {
      console.log(res);

      this.usersCount = res.users;
      this.companiesCount = res.companies;
      this.departmentsCount = res.departments;
    });
  }}
 

