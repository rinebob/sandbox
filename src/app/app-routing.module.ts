import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxRoutes } from './common/interfaces'
import { DesignSystemComponent } from './design-system/design-system.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { AngNewFeaturesComponent } from './ang-new-features/ang-new-features.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { TodosViewComponent } from './todos-signals/comps/todos-view/todos-view.component';
import { EnergyViewComponent } from './energy/comps/energy-view/energy-view.component';

const routes: Routes = [
  {path: '', redirectTo: SandboxRoutes.DESIGN_SYSTEM, pathMatch: 'full' },
  {path: SandboxRoutes.DESIGN_SYSTEM, component: DesignSystemComponent},
  {path: SandboxRoutes.MATERIAL_VIEW, component: MaterialViewComponent},
  {path: SandboxRoutes.ANGULAR_NEW_FEATURES, component: AngNewFeaturesComponent},
  {path: SandboxRoutes.BOOKS_APP, component: BooksViewComponent},
  {path: SandboxRoutes.TODOS, component: TodosViewComponent},
  {path: SandboxRoutes.ENERGY, component: EnergyViewComponent},
  {path: '**', redirectTo: SandboxRoutes.BOOKS_APP, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
