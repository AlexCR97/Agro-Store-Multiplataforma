import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiPerfilPage } from './mi-perfil.page';

describe('MiPerfilPage', () => {
  let component: MiPerfilPage;
  let fixture: ComponentFixture<MiPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
