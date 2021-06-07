import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeItemComponent } from './pages/type-item/type-item.component';
import { TypeListComponent } from './pages/type-list/type-list.component';
import { TypesLayoutComponent } from './shared/components/types-layout/types-layout.component';

const routes: Routes = [
  {
    path: '',
    component: TypesLayoutComponent,
    children: [
      {
        path: '',
        component: TypeListComponent,
      },
      {
        path: 'item',
        component: TypeItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
