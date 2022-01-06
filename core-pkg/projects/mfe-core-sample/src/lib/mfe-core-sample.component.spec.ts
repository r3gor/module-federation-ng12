import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeCoreSampleComponent } from './mfe-core-sample.component';

describe('MfeCoreSampleComponent', () => {
  let component: MfeCoreSampleComponent;
  let fixture: ComponentFixture<MfeCoreSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeCoreSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeCoreSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
