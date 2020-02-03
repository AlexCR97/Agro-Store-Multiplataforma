import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenderPage } from './vender.page';

describe('VenderPage', () => {
  let component: VenderPage;
  let fixture: ComponentFixture<VenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
