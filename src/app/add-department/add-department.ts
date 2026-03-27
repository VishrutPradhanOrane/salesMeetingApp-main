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


@Component({
  selector: 'app-add-department',
  imports: [RouterModule, FormsModule, MatTableModule, MatButtonModule, MatFormFieldModule,
    MatToolbarModule, MatInputModule, CommonModule,MatCardModule,
    MatIconModule,MatRadioModule,MatSelectModule],
  templateUrl: './add-department.html',
  styleUrl: './add-department.css',
})
export class AddDepartment {
  constructor(private service: SalesService) {}
   showForm = true;

  toggleForm() {
    this.showForm = !this.showForm;
  }

 departmentName = '';
  description = '';

  addDepartment() {
    const data = {
      departmentName: this.departmentName,
      description: this.description
    };

    console.log("DEPT DATA ", data);

    this.service.addDepartment(data).subscribe({
      next: () => {
        alert(' Department Added');

        this.departmentName = '';
        this.description = '';
      },
      error: (err) => console.error(err)
    });
  }
}