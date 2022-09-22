import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/shared/blogs.service';

@Component({
  template: `
    <div class="container">
      <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laborum consectetur obcaecati porro culpa odio aut, dolores sequi quod accusamus, voluptatibus nam, nemo qui ad voluptatem quam nostrum minus delectus ipsa aliquid voluptates. Est fuga, tenetur nemo at illum aperiam dolorem velit cupiditate deserunt, corrupti eaque enim totam. Laborum, ducimus?</p>
      </section>
      <section id="list">
        <div class="card shadow-sm" *ngFor="let blog of blogs">
          <div class="card-body">
              <h5 class="card-title"><a href="#">{{ blog.title }}</a></h5>
              <span class="card-link text-muted"><i class="bi bi-clock"></i>{{ blog.readTime }} min</span>
              <span class="card-link text-muted">By: {{ blog.author }}</span>
              <hr>
              <p class="card-text">{{ blog.content }}</p>
              <span class="d-block"><a href="#" class="card-link">Continue Reading --></a></span>
              <a href="#" class="card-link"><i class="bi bi-clock"></i>{{ blog.datePosted }}</a>
              <a href="#" class="card-link"><i class="bi bi-chat"></i>0 Comments</a>
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