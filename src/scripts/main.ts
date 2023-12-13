import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { TodoController } from "./todoController";

const model = new TodoModel();
const view = new TodoView();
const controller = new TodoController(model, view);

// Initial rendering
controller.updateView();

// Simulate user actions
controller.handleAddTodo("Buy groceries");
controller.handleAddTodo("Finish coding");
controller.handleAddTodo("Read a book");
controller.handleRemoveTodo(1);