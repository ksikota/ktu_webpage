import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonListComponent } from './components/person-list/person-list.component'; // <-- Import
import { GenderSummaryComponent } from './components/gender-summary/gender-summary.component'; // <-- Import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PersonFormComponent,
    PersonListComponent,
    GenderSummaryComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
