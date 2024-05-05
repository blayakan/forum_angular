import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }

  goToPostDetail(postId: number) {
    this.router.navigate(['/posts', postId]);
  }
}
