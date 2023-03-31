import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaInfoComponent } from './asignatura-info.component';

describe('AsignaturaInfoComponent', () => {
  let component: AsignaturaInfoComponent;
  let fixture: ComponentFixture<AsignaturaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
