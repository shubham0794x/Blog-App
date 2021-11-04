import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;


  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.post = {
      id: 1,
      title: 'This is a title',
      body: 'This is a body'
    }

   }

  ngOnInit(): void {
    const postId: number = this.activatedRoute.snapshot.params['postId'];

    this.postsService.getPostById(postId).subscribe(
      result => {
        this.post = result;
      }
    )
  }

  sendToHome(): void {
    this.router.navigate(['/posts']);
  }

}
