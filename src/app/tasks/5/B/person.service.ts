import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  static generatePeople(amount: number): Person[] {
    return faker.helpers.multiple(this.createRandomPerson, {
        count: amount,
      });
  }

  static createRandomPerson() {
    return new Person(
        faker.person.fullName(),
        Math.floor((Math.random() * (2024 - 1950 ) + 1950 )), 
        faker.location.streetAddress()
    );
  }
}
