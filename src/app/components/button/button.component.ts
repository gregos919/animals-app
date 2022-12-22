import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    public buttonText = '';

    @Input()
    set text(name: string) {
        this.buttonText = name;
    }

    @Output() btnClick = new EventEmitter();

    constructor() {}

    onClick() {
        this.btnClick.emit();
    }
}
