import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSousAgenceComponent } from './liste-sous-agence.component';

describe('ListeSousAgenceComponent', () => {
  let component: ListeSousAgenceComponent;
  let fixture: ComponentFixture<ListeSousAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSousAgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSousAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
