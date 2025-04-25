import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyGuessOfGradesComponent } from './my-guess-of-grades.component';

describe('MyGuessOfGradesComponent', () => {
  let component: MyGuessOfGradesComponent;
  let fixture: ComponentFixture<MyGuessOfGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGuessOfGradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGuessOfGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
