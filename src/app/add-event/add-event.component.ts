import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  providers: [EventService]
})
export class AddEventComponent implements OnInit {
  events: Event[];
  newEvent: Event;
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  addEvent(title: string, author: string, content: string, image: string, type: string) {
    this.newEvent = new Event(title, author, content, image, type);
    this.events.push(this.newEvent);
  }

}
