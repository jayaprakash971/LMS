import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueResponseListComponent } from './issue-response-list.component';

describe('IssueResponseListComponent', () => {
  let component: IssueResponseListComponent;
  let fixture: ComponentFixture<IssueResponseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueResponseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueResponseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
