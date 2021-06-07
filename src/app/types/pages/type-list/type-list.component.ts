import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteType } from 'src/app/shared/interfaces/note';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  types!: NoteType[];

  constructor(private http: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.types = await this.http.getData(false);
    this.types.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  linkToItem() {
    this.router.navigate([this.router.url, 'item']);
  }
}
