import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-gender-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gender-summary.component.html',
  styleUrls: ['./gender-summary.component.css']
})
export class GenderSummaryComponent implements OnInit {
  summary: any[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadSummary();
    this.personService.personAdded$.subscribe(() => {
      this.loadSummary();
    });
  }

  loadSummary(): void {
    this.personService.getGenderSummary().subscribe(data => {
      this.summary = data;
    });
  }
}
