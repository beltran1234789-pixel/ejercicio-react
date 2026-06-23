import Header from '../Componentes/Header'
import Nav from '../Componentes/Nav'
import Footer from '../Componentes/Footer'

import imagen1 from '../assets/img/1.jfif'
import imagen2 from '../assets/img/2.jfif'
import imagen3 from '../assets/img/3.jfif'  
import imagen4 from '../assets/img/4.jfif'
import imagen5 from '../assets/img/5.jfif'
import imagen6 from '../assets/img/6.jfif'
import imagen7 from '../assets/img/7.jfif'

import imagen8 from '../assets/img/algodon.jfif'
import imagen9 from '../assets/img/satin.jfif'
import imagen10 from '../assets/img/p2.jfif'
import imagen11 from '../assets/img/p3.jfif'
import imagen12 from '../assets/img/p4.jfif'
import imagen13 from '../assets/img/p5.jfif'





function Materiales() {
  return (
    <>

      <Header />
      <Nav />

      <main>
        
        {/* carrusel */}

        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner">

            <div className="carousel-item active">
                <img src={imagen1} className="d-block w-100 img-carousel"/>
            </div>

            <div className="carousel-item">
                <img src={imagen2} className="d-block w-100 img-carousel"/>
            </div>

            <div className="carousel-item">
                <img src={imagen3} className="d-block w-100 img-carousel"/>
            </div>

            <div className="carousel-item">
                <img src={imagen4} className="d-block w-100 img-carousel"/>
            </div>

            <div className="carousel-item">
                <img src={imagen5} className="d-block w-100 img-carousel"/>
            </div>

            <div className="carousel-item">
                <img src={imagen6} className="d-block w-100 img-carousel"/>
            </div>

            <div className="carousel-item">
                <img src={imagen7} className="d-block w-100 img-carousel" />
            </div>

          </div>

        </div>


        <section className="container py-5">
          <h2 className="text-center text-warning">
              Nuestra Historia
          </h2>

          <p className="text-center">
              Trabajamos con materiales premium,
              seleccionados cuidadosamente para
              garantizar calidad, resistencia y diseño.
          </p>
        </section>


        <section className="container py-5">

          <h2 className="text-center text-warning mb-4">
            Materiales Premium
          </h2>

          <div className="row g-4">

            <div className="col-md-4 col-sm-6">
              <img src={imagen8} className="img-fluid premium" />
            </div>

            <div className="col-md-4 col-sm-6">
              <img src={imagen9} className="img-fluid premium" />
            </div>

            <div className="col-md-4 col-sm-6">
              <img src={imagen10} className="img-fluid premium" />
            </div>

            <div className="col-md-4 col-sm-6">
              <img src={imagen11} className="img-fluid premium" />
            </div>

            <div className="col-md-4 col-sm-6">
              <img src={imagen12} className="img-fluid premium" />
            </div>

            <div className="col-md-4 col-sm-6">
              <img src={imagen13} className="img-fluid premium" />
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
    )
}
export default Materiales