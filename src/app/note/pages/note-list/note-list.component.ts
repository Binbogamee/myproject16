import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note, NoteType } from 'src/app/shared/interfaces/note';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  types!: NoteType[];
  notes!: Note[];
  temptype: string;

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.types = (await this.noteService.getData(false)) || [];
      this.notes = (await this.noteService.getData(true)) || [];
    } catch (error) {
      console.log(error)
    }
  }

  linkToItem(id?: number) {
    if (id) {
      this.router.navigate([this.router.url, 'item', id]);
    } else {
      this.router.navigate([this.router.url, 'item']);
    }
  }

}
