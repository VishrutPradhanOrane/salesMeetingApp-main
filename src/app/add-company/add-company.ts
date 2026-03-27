import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card';   
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { SalesService } from '../sales-service';
import { Router } from '@angular/router';

export  interface departmentInterface {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [RouterModule, FormsModule, MatTableModule, MatButtonModule, MatFormFieldModule, 
    MatToolbarModule, MatInputModule, CommonModule,MatCardModule,
    MatIconModule,MatRadioModule,MatSelectModule ],
  templateUrl: './add-company.html',
  styleUrl: './add-company.css',
})
export class AddCompany {
  selectedDepartment: any; // 👈 separate variable
  departments: departmentInterface[] | undefined;
  companyName = '';
  area = '';
  address = '';
  department = ''
  showForm = true;

    constructor(private service: SalesService,private router: Router) {
      this.service.getAllDepartment().subscribe(
        (res: any) =>{
          console.log("department==> ", res);
          // this.departments = res;

          this.departments = res.map((item: { department_id: any; departmentName: any; }) => ({
            value: item.department_id,
            viewValue: item.departmentName
          }));
        }
      )
    }
     

  toggleForm() {
    this.showForm = !this.showForm;
  }



  addCompany() {
    const data = {
      companyName: this.companyName,
      area: this.area,
      address: this.address,
      department:  this.department
    };
    console.log("Sending data:",data);;

    this.service.addCompany(data).subscribe({
      next: () => {
        // alert(' Company Added');
        this.companyName = '';
        this.area = '';
        this.address = '';
        this.department = '';
        this.router.navigate(['/company']);
        this.showForm = false;
      },
      error: (err) => console.error(err)
    });
  }
  }


  
 
  




