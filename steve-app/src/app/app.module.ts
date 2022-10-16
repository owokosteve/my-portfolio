import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/shared/errors/404.component';
import { BlogListComponent } from './components/blog/blog-list.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { BlogService } from './services/shared/blogs.service';
import { BlogThumbnailComponent } from './components/blog/blog-thumbnail.component';

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
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
