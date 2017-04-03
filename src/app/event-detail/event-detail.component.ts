import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event.model';
import { EventService } from '../event.service';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [EventService]
})

export class EventDetailComponent implements OnInit {
  eventId: number = null;
  eventToDisplay: Event;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private eventService: EventService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventId = parseInt(urlParameters['id']);
    });
    this.eventToDisplay = this.eventService.getEventById(this.eventId);
  }

  goToEditPage(clickedEvent: Event) {
    this.router.navigate(['edit', clickedEvent.id]);
  };

}
