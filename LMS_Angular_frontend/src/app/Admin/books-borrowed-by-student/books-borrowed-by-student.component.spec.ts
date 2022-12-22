import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksBorrowedByStudentComponent } from './books-borrowed-by-student.component';

describe('BooksBorrowedByStudentComponent', () => {
  let component: BooksBorrowedByStudentComponent;
  let fixture: ComponentFixture<BooksBorrowedByStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksBorrowedByStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksBorrowedByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
