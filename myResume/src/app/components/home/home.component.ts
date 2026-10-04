import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { ResumeContent } from '../../models/content';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [RouterLink]
})
export class HomeComponent implements OnInit {
  content?: ResumeContent;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(content => this.content = content);
  }

}
