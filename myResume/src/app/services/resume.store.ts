import { Injectable, signal } from '@angular/core';
import { ResumeContent } from '../models/content';
import { ContentService } from './content.service';

@Injectable({ providedIn: 'root' })
export class ResumeStore {
  private readonly resumeContent = signal<ResumeContent | undefined>(undefined);

  readonly content = this.resumeContent.asReadonly();

  constructor(private readonly contentService: ContentService) {}

  load(): void {
    if (this.resumeContent()) {
      return;
    }

    this.contentService.getContent().subscribe({
      next: content => this.resumeContent.set(content),
      error: error => console.error('Unable to load resume content.', error)
    });
  }
}
