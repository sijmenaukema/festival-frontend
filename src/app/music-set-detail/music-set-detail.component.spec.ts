import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSetDetailComponent } from './music-set-detail.component';

describe('MusicSetDetailComponent', () => {
  let component: MusicSetDetailComponent;
  let fixture: ComponentFixture<MusicSetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicSetDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicSetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
