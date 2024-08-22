import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteContent } from '../../common/site-content';

@Component({
  selector: 'app-grid-center',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './grid-center.component.html',
  styleUrl: './grid-center.component.css'
})
export class GridCenterComponent {

  projects: any = SiteContent.project_cards;

}
