const diccionario = ['Paraguay', 'Argentina', 'Brasil', 'Uruguay', 'Bolivia'];

function obtenerPalabraAleatoria() {
    return diccionario[Math.floor(Math.random() * diccionario.length)];
}

document.getElementById('guess-button').addEventListener('click', function() {
    const palabra = obtenerPalabraAleatoria();
    document.getElementById('palabra-aleatoria').textContent = `País: ${palabra}`;
});
