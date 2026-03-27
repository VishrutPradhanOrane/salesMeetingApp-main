import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { SalesService } from '../sales-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule,FormsModule,CommonModule, MatIconModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatSelectModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

  constructor(private service: SalesService,private router: Router) {}
   showForm = true;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  firstname = '';
  lastname = '';
  email = '';
  phonenumber = '';

  addUser() {
    const data = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phonenumber: this.phonenumber
    };

    console.log("USER DATA 👉", data);

    this.service.addUser(data).subscribe({
      next: () => {
        // reset
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.phonenumber = '';
        this.router.navigate(['/users']);
      },
      error: (err) => console.error(err)
    });
  }

}






  


