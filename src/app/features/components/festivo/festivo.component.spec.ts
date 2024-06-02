import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivoComponent } from './festivo.component';

describe('FestivoComponent', () => {
  let component: FestivoComponent;
  let fixture: ComponentFixture<FestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
