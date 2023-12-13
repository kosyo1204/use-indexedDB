export class TodoView {
  render(todos: string[]) {
    console.log("ToDo List:");
    todos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo}`);
    });
  }
}
