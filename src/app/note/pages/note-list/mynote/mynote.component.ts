import { Component, Input, OnInit } from '@angular/core';
import { Note, NoteType } from 'src/app/shared/interfaces/note';

@Component({
  selector: 'app-mynote',
  templateUrl: './mynote.component.html',
  styleUrls: ['./mynote.component.css']
})
export class MynoteComponent implements OnInit {

  @Input() mynote: Note;
  @Input() types: NoteType[];

  temptype: string;

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    try {
      let idx = this.types.findIndex(elm => elm.id == this.mynote.type);
      if (idx != -1) {
        this.temptype = this.types[idx].name;
      } else {
        this.temptype = "";
      }
    } catch (error) {
      console.log(error);
    }
  }

}
