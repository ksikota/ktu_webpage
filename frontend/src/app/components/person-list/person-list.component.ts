import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: any[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPersons();
    // Subscribe to the signal from the service
    this.personService.personAdded$.subscribe(() => {
      this.loadPersons();
    });
  }

  loadPersons(): void {
    this.personService.getPersons().subscribe(data => {
      this.persons = data;
    });
  }
}
