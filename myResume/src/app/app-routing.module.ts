import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
