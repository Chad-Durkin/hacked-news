import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SocialNewsComponent } from './social-news/social-news.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AddEventComponent } from './add-event/add-event.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'current',
    component: CurrentEventsComponent
  },
  {
    path: 'tech',
    component: TechNewsComponent
  },
  {
    path: 'social',
    component: SocialNewsComponent
  },
  {
    path: 'events/:id',
    component: EventDetailComponent
  },
  {
    path: 'edit/:id',
    component: EditEventComponent
  },
  {
    path: 'add',
    component: AddEventComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
