import { Routes } from '@angular/router';
import { ClientListPage } from './pages/client-list-page.components';
import { BindingPageComponent } from './pages/binding-page.component';

export const routes: Routes = [
    {path: 'client', component: ClientListPage},
    {path: 'binding', component: BindingPageComponent}
];
