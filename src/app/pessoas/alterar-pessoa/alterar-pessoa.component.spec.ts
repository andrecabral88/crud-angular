import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPessoaComponent } from './alterar-pessoa.component';

describe('AlterarPessoaComponent', () => {
  let component: AlterarPessoaComponent;
  let fixture: ComponentFixture<AlterarPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
