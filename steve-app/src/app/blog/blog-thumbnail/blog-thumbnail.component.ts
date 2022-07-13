import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/shared/blogs.service';

@Component({
  selector: 'app-blog-thumbnail',
  templateUrl: './blog-thumbnail.component.html',
  styleUrls: ['./blog-thumbnail.component.css']
})


export class BlogThumbnailComponent implements OnInit {
  blogs:any = []

  constructor( private blogService:BlogsService) {
    
   }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs()
  }

}
