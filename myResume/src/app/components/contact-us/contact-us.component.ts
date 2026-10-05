import { Component } from '@angular/core';
import { ResumeStore } from '../../services/resume.store';

@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  readonly content = this.resumeStore.content;

  constructor(private readonly resumeStore: ResumeStore) {}
}
