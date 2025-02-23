import React, { Component } from "react";
import TaskInput from "./TaskInput";

class TaskList extends Component {
  static tasks = JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, text: "Купити молоко" },
    { id: 2, text: "Відправити лист" },
    { id: 3, text: "Зробити зарядку" }
  ];

  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  static saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(TaskList.tasks));
  }

  static deleteTask(id) {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    TaskList.saveTasks();
    TaskList.updateComponent();
  }

  static addTask(text) {
    const newTask = { id: Date.now(), text };
    TaskList.tasks.push(newTask);
    TaskList.saveTasks();
    TaskList.updateComponent();
  }

  static updateComponent;

  componentDidMount() {
    TaskList.updateComponent = this.forceUpdate;
  }

  render() {
    return (
      <div className="task-list">
        <h2>Список завдань</h2>
        <TaskInput />
        <ul>
          {TaskList.tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => TaskList.deleteTask(task.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
