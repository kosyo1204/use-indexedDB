export class TodoModel {
  private todos: string[] = [];

  getTodos() {
    return this.todos.slice();
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
