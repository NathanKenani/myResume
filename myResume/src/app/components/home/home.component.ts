import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResumeStore } from '../../services/resume.store';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [RouterLink]
})
export class HomeComponent {
  readonly content = this.resumeStore.content;

  constructor(private readonly resumeStore: ResumeStore) {}
}
