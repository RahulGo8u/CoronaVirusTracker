import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCasesListComponent } from './global-cases-list.component';

describe('GlobalCasesListComponent', () => {
  let component: GlobalCasesListComponent;
  let fixture: ComponentFixture<GlobalCasesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCasesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
