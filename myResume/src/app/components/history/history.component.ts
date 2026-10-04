import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ResumeContent } from '../../models/content';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  content?: ResumeContent;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(content => this.content = content);
  }

}
