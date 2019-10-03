import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookshelfPage } from './user-bookshelf.page';

describe('UserBookshelfPage', () => {
  let component: UserBookshelfPage;
  let fixture: ComponentFixture<UserBookshelfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookshelfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookshelfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
