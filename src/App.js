import React, { useState } from 'react';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form.component";
import TaskList from "./components/Task.component";




function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
<div className="App">
  <header>
    
    <h1> Taskerr! </h1>
  </header>
  <Form 
  tasks={tasks} 
  setTasks={setTasks} 
  setInputText={setInputText} 
  inputText={inputText}
  />
  <TaskList tasks={tasks} />
</div>
  );
}

export default App;
