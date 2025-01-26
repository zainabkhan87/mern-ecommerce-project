import './App.css';
import { Plus, Trash, CheckCircle } from 'react-feather';
import { useState } from 'react';
import ThemeToggler from './ThemeToggler';

function App() {

  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState("");

  const addTodo = () => {
    let todoitem = {
      name:todo,
      check:false
    }
    if(todo !== ""){
      setTodos([...todos,todoitem])
      setTodo("");
    }
  }
//to get cureent date
  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString(undefined, options);
  };


  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo,ind)=>{
      return ind !== index;
    });
    setTodos(newTodos);
  }

  const markTodo = (index) => {
    const newTodos = todos.map((todo,ind)=>{
      if(ind === index){
        todo.check = !todo.check
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      
      <div className='brand'>
        <CheckCircle color='#666' size={24}></CheckCircle>
        <h1>TODO APP</h1>
        <div className='flex justify-end'><ThemeToggler/></div>
      </div>
      <h3>{getCurrentDate()}</h3>

      {/* <p>{JSON.stringify(todos)}</p> */}

      <div className='input-wrapper'>
        <input 
        type='text'
        name='todo'
        value={todo}
        placeholder='Create a new todo'
        onChange={(e)=>{
          setTodo(e.target.value);
        }}
        >
        </input>
        
        <button className='add-button' onClick={addTodo}>
          <Plus></Plus>
        </button>
        {/* <ThemeToggler/> */}
      </div>

      <div>
        
        {todos?.length > 0 ? (
        <ul className='todo-list'>
          {
            todos.map((entry,index) => {
              return <li>
                <input 
                type='checkbox'
                name='todocheck'
                checked={entry.check}
                onChange={(e) => {
                  markTodo(index);
                }}
                ></input>
                <p className={entry.check ? 'check' : ''}>{entry.name}</p>
                <button onClick={()=>{deleteTodo(index)}}>
                  <Trash size={14}></Trash>
                </button>
              </li>
            })
          }
          
        </ul>
        ) : (
        <div className='empty'>
          <p>No todo's found !</p>
        </div>)
        }

        

        
      </div>


    </div>

  );
}

export default App;