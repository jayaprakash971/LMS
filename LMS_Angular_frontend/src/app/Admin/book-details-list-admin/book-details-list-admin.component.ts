import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDetails } from 'src/app/model/bookDetails';
import { BookService } from 'src/app/service/bookDetails/bookDetails.service';
import { lendingModel } from 'src/app/model/lendingModel';

@Component({
  selector: 'app-book-details-list-admin',
  templateUrl: './book-details-list-admin.component.html',
  styleUrls: ['./book-details-list-admin.component.css']
})
export class BookDetailsListAdminComponent implements OnInit {

  books: BookDetails[]=[];
    bookname : any
    lend: lendingModel = new lendingModel();

    constructor(private bookService: BookService, private router: Router) { }

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

    deleteBook(bookid: number) {
      this.bookService.deleteBook(bookid).subscribe(res => {
        console.log(res);
        alert("book deleted successfully");
        this.ngOnInit();
      },
      err => {
        alert("book delete failed")})
    }

    usersBorrowedBook(bookid: number) {
      this.bookService.changeBookId(bookid);
      this.router.navigate(['/admin/books/usersBorrowedBook']);
    }
}
