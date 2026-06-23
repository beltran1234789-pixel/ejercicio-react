function cardProducto(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 shadow">
                <img    
                    src={props.imagen} 
                    alt={props.titulo} 
                    className="card-img-top producto-img"
                />

                <div className="card-body text-center">

                    <span className="badge bg-warning text-dark mb-2">
                        Premium
                    </span>

                    <h5 className="card-title titulo">{props.titulo}</h5>

                    <p className="card-text descripcion">{props.descripcion}</p>

                    <h4 className="text-success precio">$ {props.precio}</h4>

                </div>

                <div className="card-footer text-center bg-white border-0">
                    <button className="btn btn-dark w-100">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default cardProducto