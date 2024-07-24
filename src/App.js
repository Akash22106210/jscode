
import './App.css';
import {useState} from 'react'
function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>PANDI KARIMPAARA......, Bwooiii </h2>
    </div>
    <div className="input">
      <input type="text" placeholder="🖊️ Add item..." />
      <i className="fas fa-plus"></i>
    </div>
    <div className="todos">
      <div className="todo">
        <div className="left">
          <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="checkbox" name="" id="" />
          <p>ENNE THODALLE</p>
        </div>
        <div className="right">
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
