import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private readonly apiUrl = 'http://localhost:8080/api/persons';

  // This will act as a signal to tell components to reload data
  private personAddedSource = new BehaviorSubject<void | null>(null);
  personAdded$ = this.personAddedSource.asObservable();

  constructor(private http: HttpClient) { }

  getPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getGenderSummary(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/summary`);
  }

  addPerson(person: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, person).pipe(
      // After a successful POST, send a signal through the BehaviorSubject
      tap(() => this.personAddedSource.next())
    );
  }
}
