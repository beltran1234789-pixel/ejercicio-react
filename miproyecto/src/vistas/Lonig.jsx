import Header from '../Componentes/Header'
import Nav from '../Componentes/Nav'
import Footer from '../Componentes/Footer'

function Lonig() {
  return ( 
    <>
      <Header />
      <Nav />

      <main className="contenedor-formulario">

      <form className="formulario">

          <h2>Iniciar Sesión</h2>

            <div className="grupo-input">

                <label>Correo electrónico</label>

                <input type="email"
                      placeholder="Ingrese su correo" />

            </div>


            <div className="grupo-input">

                <label>Contraseña</label>

                <input type="password"
                      placeholder="Ingrese su contraseña" />

            </div>

            <button type="submit">
                Ingresar
            </button>

          </form>

      </main>
      <Footer />
    </>
  ) 
}
export default Lonig