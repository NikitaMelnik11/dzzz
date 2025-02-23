import React, { Component } from "react";
import TaskList from "./TaskList";

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.trim()) {
      TaskList.addTask(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="task-input">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Додати завдання..."
        />
        <button type="submit">Додати</button>
      </form>
    );
  }
}

export default TaskInput;
