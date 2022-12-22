import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './bookDetails-list/bookDetails-list.component';
import { AddBookComponent } from 'src/app/Admin/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from 'src/app/Admin/add-student/add-student.component';
import { StudentListComponent } from 'src/app/Admin/student-list/student-list.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from 'src/app/component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { IssueResponseListComponent } from './issue-response-list/issue-response-list.component';
import { BookDetailsListAdminComponent } from './Admin/book-details-list-admin/book-details-list-admin.component';
import { BooksBorrowedByStudentComponent } from './Admin/books-borrowed-by-student/books-borrowed-by-student.component';
import { UsersBorrowedBookComponent } from './Admin/users-borrowed-book/users-borrowed-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    StudentListComponent,
    AddStudentComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    IssueResponseListComponent,
    BookDetailsListAdminComponent,
    BooksBorrowedByStudentComponent,
    UsersBorrowedBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
