import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionCuentaPage } from './configuracion-cuenta.page';

describe('ConfiguracionCuentaPage', () => {
  let component: ConfiguracionCuentaPage;
  let fixture: ComponentFixture<ConfiguracionCuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionCuentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
