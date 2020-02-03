import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisComprasPage } from './mis-compras.page';

describe('MisComprasPage', () => {
  let component: MisComprasPage;
  let fixture: ComponentFixture<MisComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisComprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
