import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxRoutes } from './common/interfaces'
import { DesignSystemComponent } from './design-system/design-system.component';
import { MaterialViewComponent } from './material-view/material-view.component';

const routes: Routes = [
  {path: '', redirectTo: SandboxRoutes.DESIGN_SYSTEM, pathMatch: 'full' },
  {path: SandboxRoutes.DESIGN_SYSTEM, component: DesignSystemComponent},
  {path: SandboxRoutes.MATERIAL_VIEW, component: MaterialViewComponent},
  {path: '**', redirectTo: SandboxRoutes.DESIGN_SYSTEM, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
