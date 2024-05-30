import { Routes } from '@angular/router'

import { TemplateFormComponent } from './template-form/template-form.component'

export const routes: Routes = [
  { path: '', redirectTo: '/templateform', pathMatch: 'full' },
  { path: 'templateform', component: TemplateFormComponent },
]
