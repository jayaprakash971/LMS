import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/model/bookDetails';
import { BookService } from 'src/app/service/bookDetails/bookDetails.service';
import { lendingModel } from 'src/app/model/lendingModel';

@Component({
  selector: 'app-bookDetails-list',
  templateUrl: './bookDetails-list.component.html',
  styleUrls: ['./bookDetails-list.component.css']
})
export class BookListComponent implements OnInit {

  books: BookDetails[]=[];
  bookname : any
  lend: lendingModel = new lendingModel();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  public getBooks() {
    this.bookService.getBooksList().subscribe(data => {
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

    // this.bookService.getBookByName(this.bookname).subscribe(res => {
    //   console.log(res);
    //   this.books = res;
    // });
  }


  IssueBook(bookid: number) {
    console.log("book id: " + bookid);
      this.lend.user_id = Number(localStorage.getItem("token"));
      this.lend.book_id = bookid;
      let today = new Date();
      this.lend.borrowed_date = today.toISOString().split('T')[0];
      this.lend.due_date = today.toISOString().split('T')[0];
      this.lend.returned_date = today.toISOString().split('T')[0];
      console.log(this.lend);
      this.bookService.IssueBook(this.lend).subscribe(res => {
        if(res == null) {
          console.log("null")
          alert("Borrow Failed");
          this.ngOnInit();
        }else {
          console.log(res);
          console.log("Borrow successful");
          alert("Borrow successful");
        }
      },
      error => {
        console.log("error");
        alert("Borrow failed.");
        this.ngOnInit();
      })
    }

}
