import Header from '../Componentes/Header'
import Nav from '../Componentes/Nav'
import Footer from '../Componentes/Footer'

function Register() {
  return (
    <>
      <Header />
      <Nav />
      <main className="contenedor-formulario">

        <form className="formulario">

            <h2>Crear Cuenta</h2>

            <div className="grupo-input">

                <label>Nombre completo</label>

                <input type="text"
                      placeholder="Ingrese su nombre" />

            </div>


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


            <div className="grupo-input">

                <label>Confirmar contraseña</label>

                <input type="password"
                      placeholder="Confirme contraseña" />

            </div>

            <button type="submit">
                Registrarse
            </button>

        </form>

      </main>
      <Footer />
    </> 
  )
}
export default Register