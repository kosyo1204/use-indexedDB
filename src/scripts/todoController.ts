import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";

export class TodoController {
  private model: TodoModel;
  private view: TodoView;

  constructor(model: TodoModel, view: TodoView) {
    this.model = model;
    this.view = view;
  }

  handleAddTodo(todo: string) {
    this.model.addTodo(todo);
    this.updateView();
  }

  handleRemoveTodo(index: number) {
    this.model.removeTodo(index);
    this.updateView();
  }

  updateView() {
    const todos = this.model.getTodos();
    this.view.render(todos);
  }
}
