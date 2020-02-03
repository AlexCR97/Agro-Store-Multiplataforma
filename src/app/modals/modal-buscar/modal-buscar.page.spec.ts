import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBuscarPage } from './modal-buscar.page';

describe('ModalBuscarPage', () => {
  let component: ModalBuscarPage;
  let fixture: ComponentFixture<ModalBuscarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBuscarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBuscarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
