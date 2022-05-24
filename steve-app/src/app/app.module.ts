import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { NavComponent } from './home/nav/nav.component';
import { FooterComponent } from './home/footer.component';
import { HeroComponent } from './home/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    NavComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
