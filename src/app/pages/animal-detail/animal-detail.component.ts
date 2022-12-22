import { Component, OnInit } from '@angular/core';
import { Animal } from '../../types/animal';
import { AnimalsService } from '../../services/animals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-animal-detail',
    templateUrl: './animal-detail.component.html',
    styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
    animal: Animal | undefined;
    constructor(
        private animalService: AnimalsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getAnimal();
    }

    getAnimal(): void {
        const id = this.route.snapshot.paramMap.get('id') as string;
        this.animalService
            .getAnimal(id)
            .subscribe((animal) => (this.animal = animal));
    }
}
