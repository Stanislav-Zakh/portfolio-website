import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {

  tableData: ContactInfo[] = [
    { icon: 'fas fa-user', label: 'Full Name', value: 'Stanislav Zakharchenko' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'stass1170@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone Number (UK)', value: '+44 7741 399809 ' }
  ]


  copyToClipboard(info: ContactInfo) {
    navigator.clipboard.writeText(info.value).then(() => {
      info.copied = true;
      setTimeout(() => {
        info.copied = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}


interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  copied?: boolean;
}
