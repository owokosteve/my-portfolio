import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { Error404Component } from "./errors/404.component";
import { HomeComponent } from "./home/home.component";

export const appRoutes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]