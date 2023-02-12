import { Component, Input } from "@angular/core";

@Component({
    selector: 'blog-thumbnail',
    template: `
        <div class="card">
            <div class="card-header">
                <h5 class="card-title"><a href="#">{{ blog.title }}</a></h5>
                <span class="card-link small text-muted">{{ blog.readTime }} min read</span>
            </div>
            <div class="card-body">
              <p class="card-text">{{ blog.content }}<span><a href="#" class="card-link">Read more</a></span></p>
            </div>
            <div class="card-footer">
                <a href="#" class="card-link small"><i class="bi bi-calendar"></i>{{ blog.datePosted }}</a>
                <a href="#" class="card-link small"><i class="bi bi-chat"></i>0 Comments</a>
            </div>
        </div>
    `,
    styles: [`
        .card { max-width: 400px; max-height: 500px; }
        .card-header { background-color: white; border-bottom: 0.01rem solid rgb(238, 233, 233);}
        .card-title a { text-decoration: none; color: var(--primary); font-weight: 400; line-height: 1.5; }
        .card-title a:hover { color: var(--secondary); }
        .card-text { font-size: 1.085rem; color: #666; line-height: 1.6; margin-top: 20px; }
        .card-link { color: var(--primary); text-decoration: none; }
        .card-link:hover { color: var(--secondary); }
        span .card-link { text-decoration: none; color: var(--secondary);}
        span .card-link:hover { text-decoration: underline; }
        .card-footer a { font-weight: 600; color: var(--light);}
        .card-footer a:hover { color: var(--secondary);}
        .card-footer i { margin-right: 5px; font-size: 1.2em;}
    `]
})
export class BlogThumbnailComponent{

    @Input() blog:any
}