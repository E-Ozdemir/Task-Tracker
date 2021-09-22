import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";

import {useState} from 'react'
// import { initialState } from './store/initialState';
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";

function App() {
  const [tasks, setTasks] = useState(()=>{
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : []
  });
  const [isTaskBarShowed, setIsTaskBarShowed] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks]);


  //create task
  const onCreate= (task)=>{
    const uniqID = Date.now();
    const newTask = {uniqID, ...task}
    setTasks((e)=>[newTask, ...e])

  }

  //delete task
  const onDelete = (deletedItemID)=> setTasks(tasks.filter((task)=>task.id !== deletedItemID));

  //toggle done
  const toggleDone = (chosedItemID) => {
    setTasks(
      tasks.map((task)=> 
      task.id === chosedItemID ? {...task, isDone: !task.isDone} : task
      )
    )

  }

  //toggle show and hide
const toggleShow = () => setIsTaskBarShowed(!isTaskBarShowed);
// const toggleShow = () => setIsTaskBarShowed(prevState => !prevState);



  return (
    <div className="container">
      <Header title="Task Tracker" toggleShow={toggleShow} isTaskBarShowed={isTaskBarShowed}/>
      { isTaskBarShowed && <CreateTask onCreate={onCreate}/>
      }
      { tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={onDelete} toggleDone={toggleDone}/>
      ) : (
        <p>No Task To show!</p>
      )
      }
    </div>
  );
}

export default App;
