import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisVentasPage } from './mis-ventas.page';

describe('MisVentasPage', () => {
  let component: MisVentasPage;
  let fixture: ComponentFixture<MisVentasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisVentasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisVentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
