import { useFetch } from 'react'
import { useNavigate } from 'react-router-dom'

const ItemListContainer = () => {
    const { data, loading, error } = useFetch ('http://localhost:5000/estilosDeYoga')

    const Navigate = useNavigate
    if (loading) {
        return <div>Namaste</div>
    }

    if (error) {
        return <div>ERROR</div>
    }

    return (
        <itemList productos={data}/>
    )
}

export default ItemListContainer