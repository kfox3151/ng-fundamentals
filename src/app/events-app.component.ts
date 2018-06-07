import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <app-events-list></app-events-list>`
})
export class EventsAppComponent {
  title = 'app';
}
