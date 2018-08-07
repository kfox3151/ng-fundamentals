import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';
@Component ({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .bold { font-weight: bold; }
        .green { color: #003300 !important; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px; }
        `]
})

export class EventThumbnailComponent {
   @Input() event: IEvent;
   someProperty: any = 'some value';

   getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
       return ['green', 'bold'];
        }
       return [];
   }
}
