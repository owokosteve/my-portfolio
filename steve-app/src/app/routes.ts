import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { BlogListComponent } from "./components/blog/blog-list.component";
import { Error404Component } from "./components/shared/errors/404.component";
import { HomeComponent } from "./components/home/home.component";

export const appRoutes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogListComponent},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]