import './CSS/TodoItems.css'

const TodoItems = ({no,display,text,setTodos}) => {

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter((todo)=> todo.no!==no);
        setTodos(data);
    }

    const toggle = (no) =>{
        let data = JSON.parse(localStorage.getItem('todos'));
        for(let i = 0;i<data.length;i++){
            if(data[i].no===no){
                if(data[i].display===''){
                    data[i].display = 'line-through';
                }
                else
                {
                    data[i].display = '';
                }
                break;
            }
        }
        setTodos(data)
    }
  return (
    <div className='todo-items'>
<div className={`todo-items-container ${display}`} onClick={()=>{toggle(no)}}>
    {display===''?<img src=''alt='not tick'/>: <img src='' alt='tick'/>}
    <div className="todoitems-text">{text}</div>
</div>
<img src="" alt="cross" onClick={()=>{deleteTodo(no)}}/>
    </div>
  )
}

export default TodoItems