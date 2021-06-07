import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteType } from 'src/app/shared/interfaces/note';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent implements OnInit {

  types: NoteType[];
  strtypes = '';
  typesname: Array<string>;

  constructor(
    private router: Router,
    private noteService: NoteService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.types = await this.noteService.getData(false);
    this.typesname = [];
    for (let item of this.types) {
      this.typesname.push(item.name);
    }
    this.strtypes = this.typesname.join("\n");
  }

  async onSaveTypes() {
    this.typesname = []
    this.typesname = this.strtypes.split("\n");
    let arr = [];
    for (let a of this.typesname) {
      if (a != "") {
        arr.push(a);
      }
    }
    this.typesname = arr;
    try {
      let arrPromises1 = this.types.map(item => this.noteService.deleteTypes(item));
      await Promise.all(arrPromises1);
      let arrPromises = arr.map(item => this.noteService.postTypes({ name: item }));
      await Promise.all(arrPromises);
      this.router.navigate(['types']);
    } catch (error) {
      console.log(error)
    }
  }
}
