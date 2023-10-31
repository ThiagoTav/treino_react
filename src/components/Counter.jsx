import React, { useState } from "react";

export default function Counter() {
    const [numero, setNumero] = useState(0)

    const handleAddNumber = () => {
        setNumero(numero + 1)
    }
    const handleReset = () => {
        setNumero(0);
    }

    const handleLowNumber = () => {
        setNumero(numero - 1)
    }
  
    return(
        <div>
        <p>Contador: {numero}</p>
        <button onClick={handleAddNumber}>
           +
        </button>
        
        <button onClick={handleReset}>
                Resetar
        </button>
            
            <button onClick={handleLowNumber}>
                -
            </button>
        </div>

    );
}