import { Component } from '@angular/core';

@Component({
    selector: 'app-app-top-nav',
    templateUrl: './app-top-nav.component.html',
    styleUrls: ['./app-top-nav.component.scss'],
})
export class AppTopNavComponent {
    isOpen = false;
    toggleResponsiveNav(): void {
        this.isOpen = !this.isOpen;
    }
}
