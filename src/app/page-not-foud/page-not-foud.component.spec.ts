import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoudComponent } from './page-not-foud.component';

describe('PageNotFoudComponent', () => {
  let component: PageNotFoudComponent;
  let fixture: ComponentFixture<PageNotFoudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFoudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
