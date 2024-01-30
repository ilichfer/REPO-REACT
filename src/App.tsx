import Title from './components/title/title'
import Input from './components/input/input'
import './App.css'
import { useState } from 'react';
import TodoList from './components/output/TodoList';
import { Tarea } from './types/Tareas';

const data:Tarea[]=[

      {
          "title": "Viajar",
          "id": 1,
          "complete": true
      },
      {
          "title": "Trabajar",
          "id": 2,
          "complete": false
      },
      {
          "title": "Ejercitarse",
          "id": 3,
          "complete": false
      }
  
    ]


interface TareaAgregada {
  title: string,
  id: number,
  complete: boolean
}

function App() {
  const [tareas, setTareas]  = useState(data);

  const handleOnsubmit = (texto: string) => {
    const addTarea:Tarea={
      title: texto,
      id: tareas.length +1,
      complete: false
    }
 
    setTareas([... tareas ,addTarea]);
  }

  const onDelete = (id: number) => {
  const newTareas = tareas.filter((tarea)=>tarea.id !== id)
  setTareas(newTareas)
  }
  const onSelectCheck = (tareaSelect: Tarea) => {
    console.log("estado",tareaSelect);
  const newTareas = tareas.map((t) => {
    if (t.id === tareaSelect.id) {
      // valida estado de check y le asigna valor contrario
      if(t.complete===true){
        t.complete=false
      }
      else{ t.complete=true}
      return t
    } else {
      // El resto no ha cambiado
      return t;
    }
  });
  setTareas(newTareas);


  }


  const imprimir=()=>{
    tareas.forEach(function(tarea:TareaAgregada) {
      console.log(tarea);
  });
  }


  return (
    <>
      <Title />
      
      <p className="read-the-docs">
        Ingrese sus actividades
      </p>
     
      <Input 
      admensaje={handleOnsubmit}
      />

      <button onClick={imprimir}>Mostrar lista</button>

      {<div className='contenerdor-principal'>
        <div>
          <table>
            <tr>
              <th></th>
              <th>Actividad</th>
              <th></th>              
            </tr>

            {tareas.map((tarea : TareaAgregada)  => {
              return(<TodoList
                tarea={tarea} 
                onDelete={onDelete}
                onSelectCheck={onSelectCheck}

                />
                )
            })}

          </table>

        </div>
      </div>}

      
      
    </>
  )
}

export default App
