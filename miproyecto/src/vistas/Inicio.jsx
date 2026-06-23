import Header from '../Componentes/Header'
import Nav from '../Componentes/Nav'
import Footer from '../Componentes/Footer'

import imagenRopa from '../assets/img/1.jfif'

function Inicio() {
  return (
    <>  
      <Header />
      <Nav />
      <main>
        <section className="presentacion">
          <h2>Nueva colección</h2>
          <p>Descubre nuestra nueva línea de ropa.</p>
          <img src={imagenRopa} alt="Colección de ropa"/>
        </section>

        <section className="productos">
            <h2>Productos destacados</h2>

            <article className="card">
                <h3>Camiseta</h3>
                <p>Precio: $50.000</p>
                <button>Comprar</button>
            </article>

            <article className="card">
                <h3>Buzo</h3>
                <p>Precio: $90.000</p>
                <button>Comprar</button>
            </article>

        </section>
        
      </main>
      <Footer />
    </>
  )
}
export default Inicio