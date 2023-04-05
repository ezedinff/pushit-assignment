import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PushitListComponent } from './pushit-list.component';

describe('PushitListComponent', () => {
  let component: PushitListComponent;
  let fixture: ComponentFixture<PushitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PushitListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PushitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
