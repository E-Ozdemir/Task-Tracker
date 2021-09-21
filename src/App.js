import "./App.css";
import Header from "./components/Header";

import {useState} from 'react'
import { initialState } from './store/initialState';
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(initialState);

  //create task

  //delete task
  const onDelete = (deletedItemID)=> setTasks(tasks.filter((task)=>task.id !== deletedItemID));



  //toggle done

  //toggle show and hide
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <TaskList tasks={tasks} onDelete={onDelete}/>
    </div>
  );
}

export default App;
