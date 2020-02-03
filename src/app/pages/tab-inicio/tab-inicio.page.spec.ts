import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabInicioPage } from './tab-inicio.page';

describe('TabInicioPage', () => {
  let component: TabInicioPage;
  let fixture: ComponentFixture<TabInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabInicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
