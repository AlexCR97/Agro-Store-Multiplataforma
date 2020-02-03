import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReputacionPage } from './reputacion.page';

describe('ReputacionPage', () => {
  let component: ReputacionPage;
  let fixture: ComponentFixture<ReputacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReputacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReputacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
