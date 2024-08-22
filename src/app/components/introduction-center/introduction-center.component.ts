import { Component } from '@angular/core';
import { SafeHTMLPipe } from '../../pipes/safe-html.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-introduction-center',
  standalone: true,
  imports: [SafeHTMLPipe, RouterModule],
  templateUrl: './introduction-center.component.html',
  styleUrl: './introduction-center.component.css'
})
export class IntroductionCenterComponent {

  public fullName: string = "Stanislav Zakharchenko";
  public introText: string = `I am a developer with experience in Java, C# (.net), Typescript, Python, and SQL.`;

}
