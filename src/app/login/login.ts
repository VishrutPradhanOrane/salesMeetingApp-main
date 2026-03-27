import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { SalesService } from '../sales-service';  

@Component({
  selector: 'app-login',
  imports: [FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email='';
  password='';

constructor(private router:Router, private service: SalesService){}

login() {
   this.router.navigate(['/dashboard'])

  const data = {
    Username: this.email,   
    password: this.password
  };

  console.log("LOGIN DATA ", data);

  this.service.login(data).subscribe((res: any) => {

    console.log("RESPONSE ", res);

    if (res.success) {
      this.router.navigate(['/dashboard']);   
    } else {
      alert("Invalid Username or Password ");
    }

  }, (err) => {
    console.error(err);
  });
}
// login(){
 
// if(this.email==='admin@gmail.com' && this.password==='@dmin@123'){
// this.router.navigate(['/dashboard'])
// }
// else{
// alert("Invalid login")
// }
}



