import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabNotificacionesPage } from './tab-notificaciones.page';

describe('TabNotificacionesPage', () => {
  let component: TabNotificacionesPage;
  let fixture: ComponentFixture<TabNotificacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabNotificacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabNotificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
