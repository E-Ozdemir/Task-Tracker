import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import { initialState } from './store/initialState';

function App() {
  const [tasks, setTasks] = useState(initialState);
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
