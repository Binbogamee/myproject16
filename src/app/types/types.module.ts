import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypeListComponent } from './pages/type-list/type-list.component';
import { TypeItemComponent } from './pages/type-item/type-item.component';
import { TypesLayoutComponent } from './shared/components/types-layout/types-layout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TypeListComponent,
    TypeItemComponent,
    TypesLayoutComponent
  ],
  imports: [
    CommonModule,
    TypesRoutingModule,
    FormsModule
  ]
})
export class TypesModule { }
