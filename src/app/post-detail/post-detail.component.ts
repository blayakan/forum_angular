import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class PostDetailComponent implements OnInit {
  postId?: number;
  post: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'] ? +params['id'] : undefined;
      this.loadPostDetails();
    });
  }

  loadPostDetails() {
    if (this.postId !== undefined) {
      this.dataService.getPostById(this.postId).subscribe(data => {
        this.post = {
          ...data,
          date: new Date(),
          author: 'Jacek Kowalski'
        };
      });
    }
  }
}
