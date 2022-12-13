import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscJockeyDetailComponent } from './disc-jockey-detail.component';

describe('DiscJockeyDetailComponent', () => {
  let component: DiscJockeyDetailComponent;
  let fixture: ComponentFixture<DiscJockeyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscJockeyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscJockeyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
