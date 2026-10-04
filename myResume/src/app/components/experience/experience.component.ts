import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ResumeContent } from '../../models/content';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  content?: ResumeContent;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(content => this.content = content);
  }

}
