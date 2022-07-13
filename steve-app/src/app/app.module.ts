import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './home/nav/nav.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/404.component';
import { BlogsService } from './shared/blogs.service';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogThumbnailComponent } from './blog/blog-thumbnail/blog-thumbnail.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    HomeComponent,
    Error404Component,
    BlogListComponent,
    BlogThumbnailComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
