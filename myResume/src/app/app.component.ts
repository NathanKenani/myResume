import { Component, OnDestroy, OnInit } from '@angular/core';
import { RESOURCE_BUNDLE_LABELS } from './constant/constants';
import { IContent } from './models/content';
import { ContentService } from './services/content.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public title: string = 'myResume';
	public homeContent: IContent | undefined;
	public experienceContent: IContent | undefined;
	public historyContent: IContent | undefined;
	public contactsContent: IContent | undefined;
	public footerContent: IContent | undefined;

	constructor(private contentService: ContentService){}

	public ngOnInit(): void {
		this.getData();
	}
	private getData() {
		this.contentService.getContent();
		// this.homeContent = [RESOURCE_BUNDLE_LABELS.homeBundle];
	}
}
