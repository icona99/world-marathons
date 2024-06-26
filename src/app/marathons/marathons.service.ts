import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
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
    return this.http.post<Marathon>(`${this.apiUrl}/data/marathons`, { name, location, image, date, description })
  }

  getAllMarathons(): Observable<Marathon[]> {
    this.http.get<Marathon[]>(`${this.apiUrl}/data/marathons`).subscribe({
      next: marathons => this.marathonsSubject.next(marathons),
      error: error => console.error('Error fetching marathons:', error)
    });
    return this.marathonsSubject.asObservable();
  }

  getMarathonById(id: string): Observable<Marathon> {
    return this.http.get<Marathon>(`${this.apiUrl}/data/marathons/${id}`);
  }

  deleteMarathon(id: string): Observable<Marathon> {
    return this.http.delete<Marathon>(`${this.apiUrl}/data/marathons/${id}`);
  }


  editMarathon(marathon: Marathon): Observable<Marathon> {
    const editUrl = `${this.apiUrl}/data/marathons/${marathon._id}`; 
    return this.http.put<Marathon>(editUrl, marathon);
  }

  searchMarathonsByName(name: string): Observable<Marathon[]> {
    return this.getAllMarathons().pipe(
      map((marathons: Marathon[]) => {
        return marathons.filter(marathon => marathon.name.toLowerCase().includes(name.toLowerCase()));
      })
    );
  
}
  

}

