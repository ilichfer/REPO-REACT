import { useState } from "react";

interface Props {
  admensaje: (texto: string) => void
}
interface idselect {
  addId: (id: number) => void
}

function Input({ admensaje }: Props) {
    const [texto, setTexto] = useState('');

    //function admensaje() {
     //   console.log('clic con boton '+ texto);
    //}
 
    return (
    
        <div>
          <input type="text"
          value={texto}
          placeholder="ingresa una actividad" 
          name='actividadtxt'
          onChange={ev =>setTexto(ev.target.value)}>
          </input>
          <button onClick={() => admensaje(texto)}>agregar</button>
      
        </div>
      
    )
  }
  
  export default Input