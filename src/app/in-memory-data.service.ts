import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Groudon' },
      { id: 12, name: 'Charizard' },
      { id: 13, name: 'Articuno' },
      { id: 14, name: 'Mew' },
      { id: 15, name: 'Celebi' },
      { id: 16, name: 'Jirachi' },
      { id: 17, name: 'Deoxys' },
      { id: 18, name: 'Gyrados' },
      { id: 19, name: 'Raikou' },
      { id: 20, name: 'Kyogre' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
