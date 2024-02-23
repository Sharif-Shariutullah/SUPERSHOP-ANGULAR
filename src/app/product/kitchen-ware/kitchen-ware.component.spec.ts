import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenWareComponent } from './kitchen-ware.component';

describe('KitchenWareComponent', () => {
  let component: KitchenWareComponent;
  let fixture: ComponentFixture<KitchenWareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenWareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenWareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
