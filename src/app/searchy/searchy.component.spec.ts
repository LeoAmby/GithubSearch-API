import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchyComponent } from './searchy.component';

describe('SearchyComponent', () => {
  let component: SearchyComponent;
  let fixture: ComponentFixture<SearchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
