import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/shared/blogs.service';

@Component({
  template: `
    <div class="container">
      <section>
      </section>
      <section id="list">
        <div class="card shadow-sm" *ngFor="let blog of blogs">
          <div class="card-body">
              <h5 class="card-title"><a href="#">{{ blog.title }}</a></h5>
              <span class="card-link small text-muted">{{ blog.readTime }} min read</span>
              <hr>
              <p class="card-text">{{ blog.content }}</p>
              <span class="d-block"><a href="#" class="card-link">Continue Reading --></a></span>
          </div>
          <div class="card-footer">
            <a href="#" class="card-link small"><i class="bi bi-calendar"></i>{{ blog.datePosted }}</a>
            <a href="#" class="card-link small"><i class="bi bi-chat"></i>0 Comments</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: any[] = []
  constructor(private blogService: BlogService) { 

  }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

}