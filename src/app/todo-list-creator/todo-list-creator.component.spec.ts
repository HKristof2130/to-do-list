import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListCreatorComponent } from './todo-list-creator.component';

describe('TodoListCreatorComponent', () => {
  let component: TodoListCreatorComponent;
  let fixture: ComponentFixture<TodoListCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
