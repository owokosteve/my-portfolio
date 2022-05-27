import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <nav-bar></nav-bar>
            <router-outlet></router-outlet>
            <footer>
              <div class="container-xxl" id="footer">
                  <p class="py-3">Stephen Otieno &copy; 2022</p>
              </div>
          </footer>
            `,
  styles: [`
    footer { background-color: var(--dark); color: white; }
    footer p { font-family: 'Roboto Slab', serif; font-size: .85em; font-weight: 300; }
  `]
})
export class AppComponent {
  title = 'steve-app';
}
