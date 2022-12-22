import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { HttpHeaders } from '@angular/common/http';
import { BookDetails } from 'src/app/model/bookDetails';
import { IssueResponse } from 'src/app/model/issue-response';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  private baseURL = "http://localhost:8080/allUsers";
  private addURL = "http://localhost:8080/addUser";

  constructor(private httpClient: HttpClient) { }

  private updateURL = "http://localhost:8080/updateUser"
  private delURL = 'http://localhost:8080/delUser';

  public getStudentsList(): Observable<User[]> {
      return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  addStudent(student: User): Observable<any> {
      return this.httpClient.post(`${this.addURL}`, student, {responseType : 'text'});
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  public deleteStudent(id:number): Observable<any>{
    //const deleteURL = "http://localhost:8080/studentdetails/delete/"+id;
    // let headers = new HttpHeaders({
    //   // 'Content-type': 'application/json',
    //   // 'Access-Control-Request-Headers': 'DELETE',
    // });
      return this.httpClient.delete(this.delURL+"/"+id, {responseType : 'text'});
  }

  public updateStudent(student : User): Observable<User[]> {
      console.log(student);
      return this.httpClient.put<User[]>(this.updateURL, student);
  }

  getBooksBorrowed(id: number): Observable<BookDetails[]> {
      return this.httpClient.get<BookDetails[]>(`${this.baseURL}/${id}`);
  }
}
