import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallgepinventoryComponent } from './getallgepinventory.component';

describe('GetallgepinventoryComponent', () => {
  let component: GetallgepinventoryComponent;
  let fixture: ComponentFixture<GetallgepinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallgepinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallgepinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});