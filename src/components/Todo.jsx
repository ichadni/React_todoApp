import React from 'react'
import style from './todo.module.css'

const Todo = (props) => {
    
const {title, description} = props.todo;
const {id} = props;
const handleclick = (id) => {
  props.onremovetodo(id);
}
  
  return (
    <article className={style.todo}>
        <div>
        <h2>{title}</h2>
        <p>{description}</p>
        
        </div>
        <div>
            <button className={style.btn} onClick={()=>{handleclick(id)}}>
                <i className="fa fa-trash fa-2x"></i>
            </button>
        </div>
    </article>
    
    
  )
}

export default Todo
