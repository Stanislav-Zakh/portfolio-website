import { Routes } from '@angular/router';
import { GridCenterComponent } from './components/grid-center/grid-center.component';
import { IntroductionCenterComponent } from './components/introduction-center/introduction-center.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';

export const routes: Routes = [
    {path: "detail/:id", component: ProjectDescriptionComponent},
    {path: "contact", component: ContactDetailComponent},
    {path: "projects", component: GridCenterComponent},
    {path: "", component: IntroductionCenterComponent},
    {path: "**", component: IntroductionCenterComponent}
];
