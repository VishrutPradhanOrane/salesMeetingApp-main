import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { SalesService } from '../sales-service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-users',
  imports: [MatTableModule, CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
addUser() {
  this.router.navigate(['/add-user']);
}
  constructor(private router: Router, private service: SalesService) { }

  users: any[] = [];

  ngOnInit() {
    this.service.getUser().subscribe((res: any) => {
      this.users= res;
      console.log("USERS ", res);
    });
  }



}
