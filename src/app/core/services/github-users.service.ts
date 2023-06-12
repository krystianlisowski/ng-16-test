import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiResponse } from 'src/app/shared/model/response.model';
import { GithubUser } from 'src/app/shared/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class GithubUsersService {
  private readonly resourceUrl = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) {}

  searchUsers(query: string): Observable<GithubUser[]> {
    const params = new HttpParams().append('q', query);
    return this.http
      .get<ApiResponse<GithubUser>>(this.resourceUrl, { params })
      .pipe(map((response) => response.items));
  }
}
