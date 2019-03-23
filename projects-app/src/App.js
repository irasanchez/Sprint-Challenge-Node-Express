import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/projects")
      .then(res => console.log(res))
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="App">
        {this.state.projects.map(project => (
          <p key={project.id}>{project.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
