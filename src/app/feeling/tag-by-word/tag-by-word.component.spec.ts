import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagByWordComponent } from './tag-by-word.component';

describe('TagByWordComponent', () => {
  let component: TagByWordComponent;
  let fixture: ComponentFixture<TagByWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagByWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagByWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
