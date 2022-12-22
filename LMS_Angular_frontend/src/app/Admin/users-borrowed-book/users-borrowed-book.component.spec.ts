import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBorrowedBookComponent } from './users-borrowed-book.component';

describe('UsersBorrowedBookComponent', () => {
  let component: UsersBorrowedBookComponent;
  let fixture: ComponentFixture<UsersBorrowedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersBorrowedBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersBorrowedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
