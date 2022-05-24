import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
          <footer>
            <div class="container" id="footer">
                <p class="py-3">Stephen Otieno &copy; 2022</p>
            </div>
        </footer> `,
  styles: [`
          footer { background-color: var(--dark); color: white;}
          footer p { font-family: 'Roboto Slab', serif; font-size: .85em; font-weight: 300; }
          `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
