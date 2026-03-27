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

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;

// }

@Component({
  selector: 'app-departments',
  imports: [ RouterModule,
    FormsModule, MatTableModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    CommonModule ],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments {
  constructor(private router: Router,private service: SalesService) { }
  addDepartment() {
      this.router.navigate(['/add-department']);
    }
    
     departments: any[] = [];

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.service.getDepartments().subscribe((res: any) => {
      this.departments = res;
    });
  }

 
    
    //   ELEMENT_DATA: PeriodicElement[] = [
    //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'  },
    //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'  },
    //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'  },
    //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    // ]
    
    // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    //   dataSource = this.ELEMENT_DATA;
     
    

}
