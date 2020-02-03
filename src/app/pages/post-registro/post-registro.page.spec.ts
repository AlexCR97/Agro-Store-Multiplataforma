import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostRegistroPage } from './post-registro.page';

describe('PostRegistroPage', () => {
  let component: PostRegistroPage;
  let fixture: ComponentFixture<PostRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
