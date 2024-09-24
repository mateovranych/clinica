import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariosComponent } from './secretarios.component';

describe('SecretariosComponent', () => {
  let component: SecretariosComponent;
  let fixture: ComponentFixture<SecretariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecretariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
