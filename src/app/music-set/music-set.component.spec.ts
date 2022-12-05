import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSetComponent } from './music-set.component';

describe('MusicSetComponent', () => {
  let component: MusicSetComponent;
  let fixture: ComponentFixture<MusicSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
