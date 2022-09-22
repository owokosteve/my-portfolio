import { Injectable } from "@angular/core"
import { BLOGS } from 'blog-data'


@Injectable({
    providedIn: 'root'
})
export class BlogService {
    getBlogs(): any[] {

        return BLOGS
    }
}
