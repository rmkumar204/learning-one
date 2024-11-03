import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryitemsComponent } from './groceryitems.component';

describe('GroceryitemsComponent', () => {
  let component: GroceryitemsComponent;
  let fixture: ComponentFixture<GroceryitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryitemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
