import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDetails } from 'src/app/model/bookDetails';
import { BookService } from 'src/app/service/bookDetails/bookDetails.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book : BookDetails = new BookDetails();
  constructor(private bookService: BookService, private router:Router) { }

  ngOnInit(): void {
  }

  saveBook() {
    this.bookService.addBook(this.book).subscribe(data => {
      console.log(data);
      this.gotobooklist();
    },
    error => console.log(error));
  }

  gotobooklist() {
    this.router.navigate(['/admin/books']);
  }

  onSubmit() {
    console.log(this.book)
      this.saveBook();
  }

}
