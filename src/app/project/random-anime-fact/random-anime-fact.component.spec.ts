import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAnimeFactComponent } from './random-anime-fact.component';

describe('RandomAnimeFactComponent', () => {
  let component: RandomAnimeFactComponent;
  let fixture: ComponentFixture<RandomAnimeFactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RandomAnimeFactComponent]
    });
    fixture = TestBed.createComponent(RandomAnimeFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
