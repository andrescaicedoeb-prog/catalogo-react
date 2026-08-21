export default function Producto({ nombre, descripcion, precio, imagen }) {
    return (
        <article className="producto">
            <img src={imagen} alt={nombre} />
            <h2>{nombre}</h2>
            <p className="descripcion">{descripcion}</p>
            <strong>${precio.toLocaleString('es-CO')}</strong>
        </article>
    );
}