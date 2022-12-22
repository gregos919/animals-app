import { Component, Input } from '@angular/core';
import { Animal } from '../../types/animal';

@Component({
    selector: 'app-animal-card',
    templateUrl: './animal-card.component.html',
    styleUrls: ['./animal-card.component.scss'],
})
export class AnimalCardComponent {
    @Input() animal!: Animal;
    @Input() size: 'small' | 'large' = 'small';
}
