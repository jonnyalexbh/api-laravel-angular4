import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: '../views/post.component.html',
  providers: [PostService]
})
export class PostComponent {

  // public posts:any[] = [];
  public posts: Post[];

  constructor(
    private _postService: PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this._postService.getAll().subscribe(
      result => {
        this.posts = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
