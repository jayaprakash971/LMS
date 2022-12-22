import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/model/bookDetails';
import { IssueResponseService } from 'src/app/service/issue-response/issue-response.service';
import { lendingModel } from 'src/app/model/lendingModel';

@Component({
  selector: 'app-books-borrowed-by-student',
  templateUrl: './books-borrowed-by-student.component.html',
  styleUrls: ['./books-borrowed-by-student.component.css']
})
export class BooksBorrowedByStudentComponent implements OnInit {

  books: BookDetails[]=[];
  lend: lendingModel = new lendingModel();
  studId!: number;
  bookname: any;

  constructor(private issueService: IssueResponseService) {  }

  ngOnInit(): void {
    this.issueService.studIdObservable.subscribe(id => this.studId = id)
    this.getBooksBorrowed();
  }

  public getBooksBorrowed() {
      this.issueService.getBooksList(this.studId).subscribe(data => {
        this.books = data;
      });
     }

  findBookByName() {
    if(this.bookname == "") {
      this.ngOnInit();
    }
    else {
      this.books = this.books.filter(res => {
        return res.book_name.toLocaleLowerCase().match(this.bookname.toLocaleLowerCase());
      })
    }
  }

  unIssueBook(bookname: string) {
    this.issueService.deletebook(bookname).subscribe(res => {
      console.log(res);
      this.getBooksBorrowed();
    },
    err => {
      console.log(err);
    })
  }

}
