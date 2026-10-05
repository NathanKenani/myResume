import { Component } from '@angular/core';
import { ResumeStore } from '../../services/resume.store';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  readonly content = this.resumeStore.content;

  constructor(private readonly resumeStore: ResumeStore) {}
}
