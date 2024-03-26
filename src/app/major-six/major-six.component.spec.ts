import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorSixComponent } from './major-six.component';

describe('MajorSixComponent', () => {
  let component: MajorSixComponent;
  let fixture: ComponentFixture<MajorSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MajorSixComponent]
    });
    fixture = TestBed.createComponent(MajorSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
