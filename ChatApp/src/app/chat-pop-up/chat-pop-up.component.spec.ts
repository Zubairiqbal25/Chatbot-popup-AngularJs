import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPopUpComponent } from './chat-pop-up.component';

describe('ChatPopUpComponent', () => {
  let component: ChatPopUpComponent;
  let fixture: ComponentFixture<ChatPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatPopUpComponent]
    });
    fixture = TestBed.createComponent(ChatPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
