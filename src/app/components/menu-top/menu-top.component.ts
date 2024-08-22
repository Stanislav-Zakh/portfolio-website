import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-top',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-top.component.html',
  styleUrl: './menu-top.component.css'
})
export class MenuTopComponent {

  ngOnInit(): void {
    document.querySelector('.hamburger')?.addEventListener('click', function() {
    document.querySelectorAll('.dropdown')?.forEach( e => e.classList.toggle('show'))
    });

    document.addEventListener('DOMContentLoaded', function() {
      const currentLocation = location.pathname;
      const menuItems = document.querySelectorAll('.top-nav a');
      menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
          item.parentElement?.classList.add('active');
        }
      });
    });
  }

}
