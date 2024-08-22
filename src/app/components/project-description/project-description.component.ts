import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteContent } from '../../common/site-content';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.css'
})
export class ProjectDescriptionComponent {

  public projectName: string = "Coming Soon";
  public projectCode: string = "";
  public descriptions: any = [];

  constructor(private route: ActivatedRoute) {

    let index: number = +route.snapshot.paramMap.get("id")! - 1;

    this.projectName = SiteContent.project_cards[index].name;
    this.projectCode = SiteContent.project_cards[index].code;
    this.descriptions = SiteContent.project_description[index];
  }

  incrementImage(description: any) {
    if (description.images.ind < description.images.total - 1) {
        description.images.ind += 1;
        console.log(description.images.ind);
    } else {
      description.images.ind = 0;
    }
    description.show = false;
    setTimeout(() => { 
      description.images.default_img = description.images.src_list[description.images.ind];
      description.show = true;
  }, 500)
  }

  decrementImage(description: any) {
    if (description.images.ind == 0) {
      description.images.ind = description.images.total;
    } 
    description.images.ind -= 1; 
    
    description.show = false; 
    setTimeout(() => {
      description.images.default_img = description.images.src_list[description.images.ind];
      description.show = true;
    }, 500);
   
  }


  



}
