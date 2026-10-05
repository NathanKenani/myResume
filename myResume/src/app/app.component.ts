import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeStore } from './services/resume.store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [NavbarComponent, RouterOutlet]
})
export class AppComponent implements OnInit {
  public title = 'myResume';

  constructor(private readonly resumeStore: ResumeStore) {}

  ngOnInit(): void {
    this.resumeStore.load();
  }
}
