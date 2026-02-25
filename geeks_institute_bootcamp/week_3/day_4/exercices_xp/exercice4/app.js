import { TodoList } from "./todo.js";

const newList= new TodoList()

newList.addTask("Buy milk")
newList.addTask("Do homework")
newList.addTask("Clean the room")

newList.markComplete(1)
newList.markComplete(3)

console.log(newList.listTasks())