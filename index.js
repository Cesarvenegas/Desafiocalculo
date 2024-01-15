const precio = 400000;
let unidad = document.querySelector('.cantidad');
let cantidad = 0;

function aumentarCantidad() {
    cantidad++;
    unidad.innerHTML = cantidad;

   
    let resultado = precio * cantidad;
    document.getElementById('resultado').innerHTML = resultado;
}

function reducirCantidad(){

cantidad--;
unidad.innerHTML = cantidad;

let resultado = resultado - precio;
document.getElementById('resultado').innerHTML = resultado;
}