import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { StudentDetailsService } from 'src/app/service/student-details/student-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student : User = new User();
  constructor(private studentService: StudentDetailsService, private router: Router) { }

  ngOnInit(): void {
  }

  saveStudent() {
    this.student.role="student";
    this.studentService.addStudent(this.student).subscribe(data => {
      console.log(data);
      this.gotostudentlist();
    },
    error => console.log(error));
  }

  gotostudentlist() {
    this.router.navigate(['/admin/students']);
  }

  onSubmit() {
    console.log(this.student)
      this.saveStudent();
  }

}
