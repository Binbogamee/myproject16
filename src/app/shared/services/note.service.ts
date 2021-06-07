import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Note, NoteType } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getData(dataNote: boolean): Promise<any> {
    if (dataNote) {
      return this.http.get<Note[]>(`${environment.apiUrl}/notes`).toPromise();
    } else {
      return this.http.get<NoteType[]>(`${environment.apiUrl}/types`).toPromise();
    }
  }

  getNote(id: number): Promise<Note> {
      return this.http.get<Note>(`${environment.apiUrl}/notes/${id}`).toPromise();
  }

  postNote(data: Note) {
      return this.http.post<Note>(`${environment.apiUrl}/notes`, data).toPromise();
  }

  deleteNote(id: number) {
      return this.http.delete<Note>(`${environment.apiUrl}/notes/${id}`).toPromise();
  }

  putNote(note: Note, id: number) {
      return this.http.put<Note>(`${environment.apiUrl}/notes/${id}`, note).toPromise();
  }

  deleteTypes(type: NoteType) {
      return this.http.delete<NoteType>(`${environment.apiUrl}/types/${type.id}`).toPromise();
  }

  postTypes(data: any) {
      return this.http.post<NoteType>(`${environment.apiUrl}/types`, data).toPromise();
  }
}
