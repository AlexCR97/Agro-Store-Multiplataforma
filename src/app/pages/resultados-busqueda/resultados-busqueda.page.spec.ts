import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadosBusquedaPage } from './resultados-busqueda.page';

describe('ResultadosBusquedaPage', () => {
  let component: ResultadosBusquedaPage;
  let fixture: ComponentFixture<ResultadosBusquedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosBusquedaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadosBusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
