import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { BookService } from 'src/app/service/bookDetails/bookDetails.service';
import { StudentDetailsService } from 'src/app/service/student-details/student-details.service';

@Component({
  selector: 'app-users-borrowed-book',
  templateUrl: './users-borrowed-book.component.html',
  styleUrls: ['./users-borrowed-book.component.css']
})
export class UsersBorrowedBookComponent implements OnInit {


  students: User[]=[]
  bookId!: number;
  name: any

  constructor(private studentService: StudentDetailsService,private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.bookIdObservable.subscribe(id => this.bookId = id)
    this.usersBorrowedBook(this.bookId);
  }



  usersBorrowedBook(bookid: number) {
    this.bookService.getUsersBorrowedBook(bookid).subscribe(data => {
      this.students = data;
    },
    err => {
      console.log("error");
    })
  }

  findStudentByName() {
    if(this.name == "") {
      this.ngOnInit();
    }
    else {
      this.students = this.students.filter(res => {
        return res.user_name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
    // this.bookService.getBookByName(this.bookname).subscribe(res => {
    //   console.log(res);
    //   this.books = res;
    // });
  }

  public unIssueBookToStudent(student : any) {
    console.log("delete2")
    if(confirm("Are you sure you want to delete?")) {
        this .studentService.deleteStudent(student.id).subscribe(
          data => {
            console.log(data);
            this.usersBorrowedBook(this.bookId);
          },
          (err) => console.log(err)
        );
        this.router.navigateByUrl('/admin/students');
    }

  }
}
