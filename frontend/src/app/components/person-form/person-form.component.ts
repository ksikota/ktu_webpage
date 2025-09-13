import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    CommonModule, // <-- Needed for *ngIf
    ReactiveFormsModule // <-- Import forms module here
  ],
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  personForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(48)]],
      surname: ['', [Validators.required, Validators.maxLength(64)]],
      gender: ['Male', Validators.required]
    });
  }

  onSubmit(): void {
    console.log('Form Value:', this.personForm.value);
    if (this.personForm.invalid) {
      this.personForm.markAllAsTouched();
      alert('First name and surname are required.');
      return;
    }

    this.personService.addPerson(this.personForm.value).subscribe({
      next: (response) => {
        console.log('Person saved successfully!', response);
        alert('Person Saved!');
        this.personForm.reset({ gender: 'Male' });
      },
      error: (err) => {
        console.error('Error saving person', err);
        alert('Failed to save person.');
      }
    });
  }
}
