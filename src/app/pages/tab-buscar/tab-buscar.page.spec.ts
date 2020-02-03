import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabBuscarPage } from './tab-buscar.page';

describe('TabBuscarPage', () => {
  let component: TabBuscarPage;
  let fixture: ComponentFixture<TabBuscarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBuscarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabBuscarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
