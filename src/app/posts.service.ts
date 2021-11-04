import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + '/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + '/posts/'+id);
  }

}
