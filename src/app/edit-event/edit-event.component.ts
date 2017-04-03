import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [EventService]
})

export class EditEventComponent implements OnInit {
  eventId: number = null;
  eventToEdit: Event;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private eventService: EventService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventId = parseInt(urlParameters['id']);
    });
    this.eventToEdit = this.eventService.getEventById(this.eventId);
  }

  editEvent(title: string, author: string, content: string, image: string) {
    this.eventToEdit.title = title;
    this.eventToEdit.author = author;
    this.eventToEdit.content = content;
    this.eventToEdit.image = image;

    this.router.navigate(['events', this.eventToEdit.id]);
  }

}
