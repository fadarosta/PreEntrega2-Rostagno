import { useState } from 'react';

function itemCount() {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return (
        <>
            <h1>Contador</h1>
            <h2>{contador}</h2>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
        </>
    )

}

export default itemCount