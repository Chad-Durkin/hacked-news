import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.css'],
  providers: [EventService]
})
export class CurrentEventsComponent implements OnInit {
  events: Event[];

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }


  goToDetailPage(clickedEvent: Event) {
    this.router.navigate(['events', clickedEvent.id]);
  };
}
