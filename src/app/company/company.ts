import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { SalesService } from '../sales-service';

@Component({
  selector: 'app-company',
  imports: [RouterModule, FormsModule, MatTableModule, MatButtonModule,
     MatFormFieldModule, MatToolbarModule, MatInputModule, CommonModule  ],
  templateUrl: './company.html',
  styleUrl: './company.css',
})
export class Company {
addCompany() {
    this.router.navigate(['/add-company']);
  }
  constructor(private router: Router, private service: SalesService) { }
   companies: any[] = [];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getCompany().subscribe((res: any) => {
      this.companies = res;
    });
  }
}
  
 


