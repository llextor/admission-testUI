import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropitiesComponent } from './propities.component';

describe('PropitiesComponent', () => {
  let component: PropitiesComponent;
  let fixture: ComponentFixture<PropitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
