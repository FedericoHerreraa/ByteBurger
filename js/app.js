
function agregarAlCarrito(prod,precio) {
    let carrito = document.getElementById('carrito');

    let producto = document.createElement('p');
    producto.innerHTML = 'Hamburguesa pedida: ' + prod + "." + "<br>" + 'Precio: $' + precio + "." + '<br>'

    producto.style.padding = '10px'
    producto.style.backgroundColor = 'grey'
    producto.style.border = '1px solid black'
    producto.style.borderRadius = '10px'

    let btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.style.padding = '2px 10px 2px 10px'
    btnEliminar.style.marginTop = '10px'
    btnEliminar.style.borderRadius = '5px'
    btnEliminar.onclick = function() {
        carrito.removeChild(producto);
        Toastify({
            text: "Producto eliminado",
            duration: 3000,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "#b08a17",
                borderRadius: '10px'
            }
        }).showToast();
    };
    producto.appendChild(btnEliminar);

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        gravity: "top", 
        position: "left", 
        stopOnFocus: true,
        style: {
            background: "#b08a17",
            borderRadius: '10px'
        }
      }).showToast();

    carrito.appendChild(producto)
}

function comprar() {
    Swal.fire({
        title: 'Se ha comprado con exito!!',
        text: 'Desea continuar?',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })

    let carrito = document.getElementById('carrito')
    carrito.innerHTML = ''
}