import { personajes } from './Personajes'

const Layout = () => {
    return (
        <>
            {personajes.map((personaje, index) => (
                <div className="card" key={index} style={{ width: '18rem' }}>
                    <img src={personaje.imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{personaje.nombre}</h5>
                        <p className="card-text">{personaje.descripcion}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Layout
