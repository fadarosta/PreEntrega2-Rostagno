import { useEffect, useState } from 'react';

const EstilosDeYoga = () => {
    const [estilos, setEstilos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/estilosDeYoga")
            .then(response => response.json())
            .then(data => setEstilos(data))
            .catch(error => console.error("Error al obtener los estilos:", error));
    }, []);

    return (
        <div>
            <h2>Estilos de Yoga Disponibles</h2>
            <ul>
                {estilos.map(estilo => (
                    <li key={estilo.id}>
                        <strong>{estilo.nombre}</strong>: {estilo.descripcion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EstilosDeYoga;
