import React,{useState} from 'react'
import Todos from './Todos';
import style from './home.module.css'
import Newtodo from './Newtodo';
import {v4 as uuidv4} from 'uuid';

const Home = () => {
  const [todos,settodos] = useState([]);
  const handletodos = (todo) => {
    settodos(oldtodos=>{
      return [...oldtodos,{id:uuidv4(),todo}];
    }
    );
  }
  const removehandle = (id) => {
    settodos((oldtodos)=>{
      const filteredtodos = oldtodos.filter((todo)=> todo.id !== id);
      return filteredtodos;
    });
  }

  return (
    <div className={style.container}>
        <h1 style={{color: 'white'}}>Todo App</h1>
        <Newtodo onaddtodo={handletodos} />
      
      <Todos todos={todos} onremovetodo={removehandle}/>
    </div>
  )
}

export default Home
