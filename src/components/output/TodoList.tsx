import { Tarea } from "../../types/Tareas"


interface props {
  tarea:Tarea
  onDelete: (id: number) => void
  onSelectCheck: (complete: Tarea) => void
}

function TodoList({tarea,onDelete,onSelectCheck}:props) {

    return (
      <tr >
        <td><input type="checkbox" checked={tarea.complete}
        onChange={() => onSelectCheck(tarea)}
        /></td>
      
        <td>{tarea.title}</td>
        <td><button onClick={() => onDelete(tarea.id)} className=''>X</button></td>
      </tr>      
    )
  }
  
  export default TodoList