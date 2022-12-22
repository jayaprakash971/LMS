import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IssueResponse } from 'src/app/model/issue-response';
import { Observable } from 'rxjs';
import { BookDetails } from 'src/app/model/bookDetails';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueResponseService {

  private studId = new BehaviorSubject<number>(0);
  studIdObservable = this.studId.asObservable();

  changeStudId(id: number) {
    this.studId.next(id)
  }

  private baseURL = "http://localhost:8080/getBooksBorrowedByUser";

  constructor(private httpClient: HttpClient) { }

  getBooksList(id: number): Observable<BookDetails[]> {
      return this.httpClient.get<BookDetails[]>(`${this.baseURL}/${id}`);
  }

  deletebook(bookname: string): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/returnBook/"+bookname, {responseType: 'text'});
}


}
