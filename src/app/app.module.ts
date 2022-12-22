import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopNavComponent } from './components/app-top-nav/app-top-nav.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AnimalListComponent } from './pages/animal-list/animal-list.component';
import { AnimalDetailComponent } from './pages/animal-detail/animal-detail.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
    declarations: [
        AppComponent,
        AppTopNavComponent,
        AppFooterComponent,
        AnimalListComponent,
        AnimalDetailComponent,
        AnimalCardComponent,
        ButtonComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
