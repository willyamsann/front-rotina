import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  url = "https://localhost:44339/api/User";
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url).pipe(retry(2));
  }

  postUser(obj: User) {
    return this.httpClient.post(this.url, obj);
  }
}
