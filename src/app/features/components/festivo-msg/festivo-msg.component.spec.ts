import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivoMsgComponent } from './festivo-msg.component';

describe('FestivoMsgComponent', () => {
  let component: FestivoMsgComponent;
  let fixture: ComponentFixture<FestivoMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivoMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivoMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
