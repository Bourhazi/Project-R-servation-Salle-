import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalleComponent } from './create-salle.component';

describe('CreateSalleComponent', () => {
  let component: CreateSalleComponent;
  let fixture: ComponentFixture<CreateSalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSalleComponent]
    });
    fixture = TestBed.createComponent(CreateSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
