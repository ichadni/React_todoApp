import React,{useState} from 'react'
import style from './newtodo.module.css'

const Newtodo = (props) => {
  const [todo,settodo] = useState({
    title:"",
    description:""
  })
  const {title,description} = todo;
  const handlesubmit = (e) => {
    e.preventDefault();
    props.onaddtodo(todo);
    settodo({
      title:"",
      description:""
    })
    
  }
  const handlechange = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    settodo(oldtodo=>({...oldtodo,[name]:value}));

    };

  

  return (
    <form className={style.form} onSubmit={handlesubmit}>
        <div className={style["form-field"]}>
            <label htmlFor="title" >Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={handlechange} />

        </div>
        <div  className={style["form-field"]}>
            <label htmlFor="description" >Description:</label>
            <textarea type="text" id="description" name="description" value={description} onChange={handlechange} />
        </div>
        <button type='submit'>
            Add Todo
        </button>
    </form>
  )
}

export default Newtodo
