import { Component } from '@angular/core';
import { ResumeStore } from '../../services/resume.store';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  readonly content = this.resumeStore.content;

  constructor(private readonly resumeStore: ResumeStore) {}
}
