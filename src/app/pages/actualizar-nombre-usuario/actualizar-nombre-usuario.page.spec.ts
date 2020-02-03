import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizarNombreUsuarioPage } from './actualizar-nombre-usuario.page';

describe('ActualizarNombreUsuarioPage', () => {
  let component: ActualizarNombreUsuarioPage;
  let fixture: ComponentFixture<ActualizarNombreUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarNombreUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarNombreUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
