import { personajes } from './Personajes'

const Layout = () => {
    return (
        <>
            {personajes.map((personaje, index) => (
                <div className="card-img-top" key={index} style={{ width: '200rem' }}>
                    <img src={personaje.imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{personaje.nombre}</h5>
                        <p className="card-text">{personaje.descripcion}</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Layout
