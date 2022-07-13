import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="container">
        <app-blog-thumbnail></app-blog-thumbnail>
    </div>
  `,
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs:any = []
  constructor() { }

  ngOnInit(): void {
  }

}