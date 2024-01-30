interface TareaAgregada {

  tarea: 
  {
    title: string,
    id: number,
    complete: boolean
  }
}

interface idSeleccionado {
  onDelete: (id: number) => void
}

function TodoList({tarea}:TareaAgregada,{onDelete}:idSeleccionado) {

    return (
      <tr >
        <td><input type="checkbox" checked={tarea.complete}
        /></td>
      
        <td>{tarea.title}</td>
        <td><button onClick={() => onDelete(1)} className=''>X</button></td>
      </tr>      
    )
  }
  
  export default TodoList