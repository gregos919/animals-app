import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './pages/animal-list/animal-list.component';
import { AnimalDetailComponent } from './pages/animal-detail/animal-detail.component';

const routes: Routes = [
    { path: 'animals', component: AnimalListComponent },
    { path: 'animals/:id', component: AnimalDetailComponent },
    { path: '', redirectTo: '/animals', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
