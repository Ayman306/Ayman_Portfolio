import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackOnTitanComponent } from './attack-on-titan.component';

describe('AttackOnTitanComponent', () => {
  let component: AttackOnTitanComponent;
  let fixture: ComponentFixture<AttackOnTitanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AttackOnTitanComponent]
    });
    fixture = TestBed.createComponent(AttackOnTitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
