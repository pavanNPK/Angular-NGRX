import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForNgrxComponent } from './test-for-ngrx.component';

describe('TestForNgrxComponent', () => {
  let component: TestForNgrxComponent;
  let fixture: ComponentFixture<TestForNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestForNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestForNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
