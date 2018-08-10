import { Routes } from '@angular/router';
import { Error404Component } from '../errors/404.component';
import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
 } from '../events';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['CanDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]
