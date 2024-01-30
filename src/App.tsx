import Title from './components/title/title'
import Input from './components/input/input'
import './App.css'
import { useState } from 'react';
import TodoList from './components/output/TodoList';

const data={
  "tareas": [
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
          "title": "Ejercitarce",
          "id": 3,
          "complete": false
      }
  ]
}


interface TareaAgregada {
  title: string,
  id: number,
  complete: boolean
}

function App() {
  

  const [tareas, setTareas]  = useState(data);

  const handleOnsubmit = (texto: string) => {
    console.log("Texto desde el padre",texto);
    setTareas(tareas);
  }

  const addId = (id: number) => {
    console.log("id seleccionado",id);
 
  }

  const imprimir=()=>{
    tareas.tareas.forEach(function(tarea:TareaAgregada) {
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

            {tareas.tareas.map((tarea : TareaAgregada)  => {
              return(<TodoList
                tarea={tarea}
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
