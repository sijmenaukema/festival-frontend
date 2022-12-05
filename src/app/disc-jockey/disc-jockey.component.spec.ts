import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscJockeyComponent } from './disc-jockey.component';

describe('DiscJockeyComponent', () => {
  let component: DiscJockeyComponent;
  let fixture: ComponentFixture<DiscJockeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscJockeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscJockeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
