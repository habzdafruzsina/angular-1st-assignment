import { Component, ViewChild } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { NzTableComponent } from 'ng-zorro-antd/table';

export interface VirtualDataInterface {
  name: string;
  year_of_birth: number;
  address: string;
}

@Component({
    selector: 'app-task5-b',
    templateUrl: './task5-b.component.html',
    styleUrls: ['./task5-b.component.less'],
    standalone: false
})
export class Task5BComponent {

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;
  private destroy$ = new Subject<boolean>();
  people: Person[] = [];
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  filteredPeople: Person[] = [];
  filterSubject = new Subject<string>();
  filterStr?: string;

  ngOnInit(){
    this.people = PersonService.generatePeople(1000);
    this.filteredPeople = [...this.people];
    this.filterSubject.pipe(
      debounceTime(500)
    ).subscribe((value) => {
      this.filteredPeople = this.people.filter(person =>
        person.name.toLowerCase().includes(value.toLowerCase()) ||
        person.year_of_birth.toString().toLowerCase().includes(value.toLowerCase()) ||
        person.address.toLowerCase().includes(value.toLowerCase())
      );
    });
  }

  trackByIndex(_: number, data: VirtualDataInterface): string {
    return data.name + data.year_of_birth;
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onFilterChange(value: string) {
    this.filterSubject.next(value);
  }

  protected readonly Person = Person;
}
