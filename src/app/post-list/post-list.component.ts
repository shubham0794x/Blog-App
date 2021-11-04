import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: Post[];

  constructor(private postsService: PostsService) {
    this.postList = [];
   }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      result => {
        this.postList = result;
      }
    );
  }

}
