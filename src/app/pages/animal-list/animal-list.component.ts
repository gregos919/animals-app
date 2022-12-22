import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { Animal } from '../../types/animal';

@Component({
    selector: 'app-animal-list',
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
    animals: Animal[] = [];
    constructor(private animalService: AnimalsService) {}

    ngOnInit(): void {
        this.getAnimals();
    }

    getAnimals(): void {
        this.animalService
            .getAnimals()
            .subscribe((animals) => (this.animals = animals.items));
    }
}
