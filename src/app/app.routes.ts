import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { AddUser } from './add-user/add-user';
import { AddCompany } from './add-company/add-company';
import { Users } from './users/users';
import { Company } from './company/company';
import { Departments } from './departments/departments';
import { AddDepartment } from './add-department/add-department';


export const routes: Routes = [
    { path:'', component:Login},
    {path:'dashboard',component:Dashboard},
    {path:'users',component:Users},
    {path:'add-user',component:AddUser},
    {path:'departments',component: Departments},
    {path:'add-department',component:AddDepartment},
    {path:'company',component:Company},
    {path:'add-company',component:AddCompany}
  
    
];

