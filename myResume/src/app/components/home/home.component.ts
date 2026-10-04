import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ResumeContent } from '../../models/content';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  content?: ResumeContent;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(content => this.content = content);
  }

}
