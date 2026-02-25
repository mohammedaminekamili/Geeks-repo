export class TodoList {
    constructor() {
      this.tasks = []; // each task: { id, text, completed }
      this.nextId = 1;
    }
  
    addTask(text) {
      const task = { id: this.nextId++, text, completed: false };
      this.tasks.push(task);
      return task;
    }
  
    markComplete(id) {
      const task = this.tasks.find(t => t.id === id);
      if (!task) return false;       // task not found
      task.completed = true;
      return true;
    }
  
    listTasks() {
      return this.tasks;
    }
  }