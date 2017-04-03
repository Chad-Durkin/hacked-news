export class Event {

  public id: number = null;
  public static idCounter: number = 5;

  constructor (public title: string, public author: string, public content: string, public image: string, public type: string) {
    this.id = Event.idCounter;
    Event.idCounter++;
  }
}
