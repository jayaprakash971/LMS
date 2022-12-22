import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsListAdminComponent } from './book-details-list-admin.component';

describe('BookDetailsListAdminComponent', () => {
  let component: BookDetailsListAdminComponent;
  let fixture: ComponentFixture<BookDetailsListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsListAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
