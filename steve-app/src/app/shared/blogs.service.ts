import { Injectable } from "@angular/core"
import { BLOGS } from 'blog-data'


@Injectable()
export class BlogsService {
    getBlogs() {
        return BLOGS
    }
}
