import './App.css'
import Producto from './components/Producto'

// 1. Aquí importas tus imágenes (asegúrate de que el nombre coincida con tus archivos)
import pantalonBaggy from './assets/Pantalon-Baggy.jpg'
import camisetaEncaje from './assets/Camisa-Encaje.jpg'
import tenisCampus from './assets/Tennis-Campus.jpg'
import poloElegante from './assets/Camisa-Polo.jpg'
import vestidoFloral from './assets/Vestido-Floral.jpg'

function App() {
  const productos = [
    {
      id: 1,
      nombre: "Pantalón Jean Baggy Extragrande",
      descripcion: "Jean clásico de silueta muy ancha desde la cadera, tiro medio-bajo y bota amplia inspirado en el streetwear de los 90.",
      precio: 150000,
      imagen: pantalonBaggy // <--- Aquí usas la variable importada
    },
    {
      id: 2,
      nombre: "Camiseta de Canalé con Aplique de Encaje",
      descripcion: "Top ajustado de manga larga elaborado en tejido elástico con líneas verticales, cuello en V y detalles románticos de encaje blanco.",
      precio: 60000,
      imagen: camisetaEncaje
    },
    {
      id: 3,
      nombre: "Tenis Adidas Campus 00s",
      descripcion: "Calzado urbano de horma ancha confeccionado en gamuza suave con las tres franjas gruesas clásicas de la marca y cordones anchos.",
      precio: 420000,
      imagen: tenisCampus
    },
    {
      id: 4,
      nombre: "Camisa Polo Elegante de Ajuste Regular",
      descripcion: "Camiseta de cuello formal estructurado con botones frontales, fabricada en algodón de alta densidad para un look casual sofisticado.",
      precio: 110000,
      imagen: poloElegante
    },
    {
      id: 5,
      nombre: "Vestido Corto Cottagecore Floral",
      descripcion: "Vestido veraniego de tirantes delgados con corsé ajustado a la cintura, falda fluida con capas de volantes y estampado de pequeñas flores campestres.",
      precio: 120000,
      imagen: vestidoFloral
    }
  ]

  return (
    <main className="app">
      <h1>Maison de Luxe</h1>
      <section className="catalogo">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </section>
    </main>
  )
}

export default App