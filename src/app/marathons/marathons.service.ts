import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Marathon } from '../types/Marathon';


@Injectable({
  providedIn: 'root'
})
export class MarathonsService {

  private apiUrl = `${environment.apiUrl}`;
  private marathonsSubject = new BehaviorSubject<Marathon[]>([]);

  constructor(private http: HttpClient) { }

  create(name: string, location: string, image: string, date: string, description: string) {

    return this.http.post<{ name: string, location: string, image: string, date: string, description: string }>(`${this.apiUrl}/data/:marathons`, { name, location, image, date, description })

  }

  getAllMarathons(): Observable<Marathon[]> {
    this.http.get<Marathon[]>(`${this.apiUrl}/data/:marathons`).subscribe({
      next: marathons => this.marathonsSubject.next(marathons),
      error: error => console.error('Error fetching marathons:', error)
    });
    return this.marathonsSubject.asObservable();
  }
}




