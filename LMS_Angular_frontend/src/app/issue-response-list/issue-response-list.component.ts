import { Component, OnInit } from '@angular/core';
import { IssueResponse } from 'src/app/model/issue-response';
import { BookDetails } from 'src/app/model/bookDetails';
import { IssueResponseService } from 'src/app/service/issue-response/issue-response.service';

@Component({
  selector: 'app-issue-response-list',
  templateUrl: './issue-response-list.component.html',
  styleUrls: ['./issue-response-list.component.css']
})
export class IssueResponseListComponent implements OnInit {

  //issues: IssueResponse[]=[];
  booksIssuedByStudent: BookDetails[]=[];

  constructor(private issueResponseService: IssueResponseService) { }

  ngOnInit(): void {
    this.getIssuedBooks();
  }

  private getIssuedBooks() {
    this.issueResponseService.getBooksList(Number(localStorage.getItem("token"))).subscribe(data => {
      this.booksIssuedByStudent = data;
    });
  }

//   reloadData() {
//     this.booksIssuedByStudent = this.issueResponseService.getBooksList();
//   }

  // findBookByName() {
  //   if(this.issues == "") {
  //     this.ngOnInit();
  //   }
  //   else {
  //     this.issues = this.issues.filter(res => {
  //       return res.issues.toLocaleLowerCase().match(this.issues.toLocaleLowerCase());
  //     })
  //   }
  //   // this.bookService.getBookByName(this.bookname).subscribe(res => {
  //   //   console.log(res);
  //   //   this.books = res;
  //   // });
  // }

  public deleteBook(bookname:string) {
    console.log("Inside deleteBook");
    this.issueResponseService.deletebook(bookname).subscribe(data => {
      console.log(data);
      this.getIssuedBooks();
    },
    error => console.log(error));

  }



}
