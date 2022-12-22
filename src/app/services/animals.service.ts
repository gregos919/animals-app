import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../types/animal';
import { ResponseList } from '../types/response';
@Injectable({
    providedIn: 'root',
})
export class AnimalsService {
    private animalsUrl =
        'https://61f12139072f86001749f044.mockapi.io/api/v1/animals';
    constructor(private http: HttpClient) {}

    getAnimals(): Observable<ResponseList<Animal[]>> {
        return this.http.get<ResponseList<Animal[]>>(this.animalsUrl);
    }
    getAnimal(id: string): Observable<Animal> {
        return this.http.get<Animal>(`${this.animalsUrl}/${id}`);
    }
}
