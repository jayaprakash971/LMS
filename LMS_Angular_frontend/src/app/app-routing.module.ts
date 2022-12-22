import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from 'src/app/Admin/add-book/add-book.component';
import { BookListComponent } from 'src/app/bookDetails-list/bookDetails-list.component';
import { StudentListComponent } from 'src/app/Admin/student-list/student-list.component';
import { AddStudentComponent } from 'src/app/Admin/add-student/add-student.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { IssueResponseListComponent } from './issue-response-list/issue-response-list.component';
import { BookDetailsListAdminComponent } from './Admin/book-details-list-admin/book-details-list-admin.component';
import { BooksBorrowedByStudentComponent } from './Admin/books-borrowed-by-student/books-borrowed-by-student.component';
import { UsersBorrowedBookComponent } from './Admin/users-borrowed-book/users-borrowed-book.component';

const routes: Routes = [
  {path : '', component:LoginComponent},
  {path : 'signup', component:SignupComponent},
  {path : 'user', component:UserDashboardComponent},
  {path : 'admin', component:AdminDashboardComponent},
  {path : 'admin/books' , component: BookDetailsListAdminComponent},
  {path : 'admin/books/usersBorrowedBook' , component: UsersBorrowedBookComponent},
  {path : 'admin/add-book', component: AddBookComponent},
  {path : 'admin/students' , component: StudentListComponent},
  {path : 'admin/add-student', component: AddStudentComponent},
  {path : 'admin/students/booksBorrowed', component: BooksBorrowedByStudentComponent},
  {path : 'user/books' , component: BookListComponent},
  {path : 'user/issue', component: IssueResponseListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
