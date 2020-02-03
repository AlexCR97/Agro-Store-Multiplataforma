import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompraPage } from './compra.page';

describe('CompraPage', () => {
  let component: CompraPage;
  let fixture: ComponentFixture<CompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
