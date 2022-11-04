import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 when click plus button', () => {
    // given
    component.count = 0;
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]')
    // when
    plusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(displayCount.textContent).toEqual('number:1')
  })

  it('should substract 1 when click minus button', () => {
    // given
    component.count = 0;
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]')
    // when
    minusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(displayCount.textContent).toEqual('number:-1')
  })

  it('should hide minus button when count number less than 0', () => {
    // given
    component.count = -1;
    
    // when
    fixture.detectChanges();

    // then
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]')
    expect(minusBtn).toBeFalsy();
  })

  it('should return false when count number less than 0', () => {
    // given
    component.count = -1;

    // when
    // fixture.detectChanges();

    // then
    expect(component.isGreaterOrEqualThanZero()).toBeFalse();
  })

  it('should return true when count number larger than 0', () => {
    // given
    component.count = 1;

    // when
    // fixture.detectChanges();

    // then
    expect(component.isGreaterOrEqualThanZero()).toBeTrue();
  })

  it('should return true when count number less than 10', () => {
    // given
    component.count = 1;

    // when
    // fixture.detectChanges();

    // then
    expect(component.isLessOrEqualThanTen()).toBeTrue();
  })

  it('should return false when count number larger than 10', () => {
    // given
    component.count = 11;

    // when
    // fixture.detectChanges();

    // then
    expect(component.isLessOrEqualThanTen()).toBeFalse();
  })

  it('should display 0 when click reset', () => {
    // given
    component.count = 1;

    // when
    // fixture.detectChanges();

    // then
    expect(component.isGreaterOrEqualThanZero()).toBeTrue();
  })

  it('should show 0 when click reset button', () => {
    // given
    component.count = -1;
    fixture.detectChanges()
    // when
    const resetBtn = fixture.nativeElement.querySelector('[data-test="resetBtn"]')
    resetBtn.click()
    fixture.detectChanges()

    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(displayCount.textContent).toEqual('number:0')
  })

});
