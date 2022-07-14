import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<User> {
    return this.http.get('http://127.0.0.1:8000/user' + id).pipe(
      map((user:User) => user)
    )
  }

  updateOne(user: { id: string; }): Observable<User> {
    return this.http.put('http://127.0.0.1:8000/user' + user.id, user);
  }

  
  }