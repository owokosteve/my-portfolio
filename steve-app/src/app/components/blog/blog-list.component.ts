import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/shared/blogs.service';

@Component({
  template: `
    <div class="container-xl">
        <div id="blog-list" >
          <div *ngFor="let blog of blogs">
            <blog-thumbnail [blog]="blog"></blog-thumbnail>
          </div>
        </div>
    </div>
  `,
  styles: [`
    
  `]
})
export class BlogListComponent implements OnInit {

  constructor(private blogService: BlogService) { 

  }

  blogs: any

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

}