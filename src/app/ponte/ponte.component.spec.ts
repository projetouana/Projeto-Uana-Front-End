import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonteComponent } from './ponte.component';

describe('PonteComponent', () => {
  let component: PonteComponent;
  let fixture: ComponentFixture<PonteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
