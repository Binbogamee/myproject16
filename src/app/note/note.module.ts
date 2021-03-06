import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { NoteItemComponent } from './pages/note-item/note-item.component';
import { NoteLayoutComponent } from './shared/components/note-layout/note-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MynoteComponent } from './pages/note-list/mynote/mynote.component';


@NgModule({
  declarations: [
    NoteListComponent,
    NoteItemComponent,
    NoteLayoutComponent,
    MynoteComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    ReactiveFormsModule
  ]
})
export class NoteModule { }
