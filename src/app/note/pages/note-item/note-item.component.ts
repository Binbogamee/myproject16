import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note, NoteType } from 'src/app/shared/interfaces/note';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  id: number | null = null;
  note: Note;
  notes: Note[];
  noteForm!: FormGroup;
  types: NoteType[];

  constructor(
    private noteservice: NoteService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id ? +params.id : null;
    })
    this.getData();
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(50)]],
      text: [null, [Validators.required, Validators.maxLength(300)]],
      type: [null, Validators.required]
    }

    this.noteForm = this.fb.group(controls);
  }

  async getData() {
    this.types = (await this.noteservice.getData(false)) || [];
    this.notes = (await this.noteservice.getData(true)) || [];
    this.types.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    if (this.id) {
      try {
        this.note = await this.noteservice.getNote(this.id);
      } catch (error) {
        console.log(error);
      }
      this.noteForm.patchValue(this.note);
    } else {
      this.noteForm.reset();
    }
  }

  async onSaveNote() {
    if (this.id) {
      let tempnote = this.noteForm.value;
      try {
        let idxnote = this.notes.findIndex(elm => elm.id == this.id);
        let note = this.notes[idxnote];
        let idx = this.types.findIndex(elm => elm.name == tempnote.type);
        note.name = tempnote.name;
        note.text = tempnote.text;
        note.type = this.types[idx].id;
        note.editDate = new Date();
        await this.noteservice.putNote(note, this.id);
        this.router.navigate(['note']);
      } catch (error) {
        console.log(error);
      }
    }

    else {
      let note = this.noteForm.value;
      let tempnote = this.noteForm.value;
      try {
        let idx = this.types.findIndex(elm => elm.name == tempnote.type);
        note.type = this.types[idx].id;
        note.createDate = new Date();
        await this.noteservice.postNote(note);
        this.router.navigate(['note']);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async onDeleteNote() {
    try {
      await this.noteservice.deleteNote(this.id);
      this.router.navigate(['note']);
    } catch (error) {
      console.log(error);
    }
  }

}
