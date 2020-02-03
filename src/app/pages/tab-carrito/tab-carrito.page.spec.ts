import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCarritoPage } from './tab-carrito.page';

describe('TabCarritoPage', () => {
  let component: TabCarritoPage;
  let fixture: ComponentFixture<TabCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
