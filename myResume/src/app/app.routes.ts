import { Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
