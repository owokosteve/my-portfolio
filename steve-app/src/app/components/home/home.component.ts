import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/shared/blogs.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  blogs: any
  
  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs()
  }

}
