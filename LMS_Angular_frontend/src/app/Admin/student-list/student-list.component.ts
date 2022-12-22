import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { StudentDetailsService } from 'src/app/service/student-details/student-details.service';
import { IssueResponseService } from 'src/app/service/issue-response/issue-response.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: User[]=[];
  name : any
  studId!: number;

  studentToUpdate = {
    id : 0,
    user_name : "",
    user_email : "",
    user_mobile : "",
    user_password : "",
    role : ""
  }

  constructor(private studentService: StudentDetailsService, private issueService: IssueResponseService, private router: Router) {
    this.getStudents();
  }

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents() {
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;
    });
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

   public deleteStudent(student : any) {
    console.log("delete2")
    if(confirm("Are you sure you want to delete?")) {
        this .studentService.deleteStudent(student.id).subscribe(
          data => {
            console.log(data);
            this.getStudents();
          },
          (err) => console.log(err)
        );
        this.router.navigateByUrl('/admin/students');
    }
  }

  edit(student:any) {
    this.studentToUpdate = student;
  }

  updatestudent() {
    console.log("update");
    this.studentService.updateStudent(this.studentToUpdate).subscribe(
      res => {
          console.log(res)
      },
      (err) => {
          console.log(err)
      }
    )
  }

  getBooksBorrowed(id: number) {
    this.issueService.changeStudId(id)
    this.router.navigate(['/admin/students/booksBorrowed']);
  }

}
