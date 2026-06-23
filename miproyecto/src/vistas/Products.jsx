import Header from '../componentes/Header'
import Nav from '../componentes/Nav'
import Footer from '../componentes/Footer'

import { useEffect, useState } from 'react'
import CardProducto from '../Componentes/CardProducto'

function Products() {
    const [Productos, setProductos] = useState([])

    async function cargarProductos() {

        try {
            const respuesta = await fetch('http://fakestoreapi.com/products')
            const data = await respuesta.json()
            
            const ropa = data.filter(producto => 
                producto.category === 'men´s clothing' || 
                producto.category === 'women´s clothing')

                
            setProductos(ropa)

        } catch (error) {
            console.error('Error al cargar los productos:', error)
        }
    }

    useEffect(() => {
        cargarProductos()
    }, [])

    return (
        <>
            <Header />
            <Nav />
            <main className="container py-5">
                <h2 className='text-center mb-4'> 
                    Catálogo de Ropa
                </h2>

                <div id="contenedor-productos" className="row g-4">
                    {
                        Productos.map(producto => (
                            <CardProducto 
                                key={producto.id} 
                                imagen={producto.image}
                                titulo={producto.title}
                                descripcion={producto.description.substring(0, 80)}
                                precio={producto.price}                             
                            />
                        ))
                    }
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Products