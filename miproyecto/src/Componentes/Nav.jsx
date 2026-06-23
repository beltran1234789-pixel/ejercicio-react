import { Link } from 'react-router-dom'

function Nav() {
  return (
    // Menú 
    <nav>

        <div className="nav-left">
            <Link to="/">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/materiales">Nuestros Materiales</Link>
            <Link to="/">Contacto</Link>
        </div>
    
        <div className="nav-right">
    
            <Link to="/login"
               className="btn-login">
               Login
            </Link>
    
            <Link to="/register"
               className="btn-register">
               Registro
            </Link>
    
        </div>
    
    </nav>
  )
}

export default Nav