import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styles: ['./upvote.component.css']
})
export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    public iconColor: string;


    onClick() {
        this.vote.emit({});
    }
}