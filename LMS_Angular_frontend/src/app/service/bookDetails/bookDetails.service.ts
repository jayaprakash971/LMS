import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { BookDetails } from 'src/app/model/bookDetails';
import { lendingModel } from 'src/app/model/lendingModel';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookId = new BehaviorSubject<number>(0);
  bookIdObservable = this.bookId.asObservable();

  changeBookId(id: number) {
    this.bookId.next(id)
  }

  private baseURL = "http://localhost:8080/allBooks";
  private addURL = "http://localhost:8080/addBook";
  private lendingURL = "http://localhost:8080/borrowBook";
  private delURL = "http://localhost:8080/delBook";
  private usersBorrowedBook = "http://localhost:8080/getUsersBorrowedBook";
  constructor(private httpClient: HttpClient) { }

  getBooksList(): Observable<BookDetails[]> {
      return this.httpClient.get<BookDetails[]>(`${this.baseURL}`);
  }

  addBook(book: BookDetails): Observable<Object> {
      return this.httpClient.post<BookDetails[]>(`${this.addURL}`, book);
  }

  IssueBook(lend: lendingModel): Observable<Object> {
    return this.httpClient.post<lendingModel[]>(`${this.lendingURL}`, lend);
  }

  deleteBook(bookid: number): Observable<any> {
    return this.httpClient.delete(this.delURL+"/"+bookid, {responseType : 'text'});
  }

  getUsersBorrowedBook(bookid: number): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersBorrowedBook+"/"+bookid);
  }

//   getBookByName(name : string) : Observable<BookDetails[]> {
//       return this.httpClient.get<BookDetails[]>("http://localhost:8080/bookdetails/bookByName/"+name);
//   }
}
