// @ts-nocheck

export function formatPhone(phone) {
    const numbers = phone.split("");
    for (let i = 0; i < numbers.length; i++) {
        if (i % 3 === 2) {
            numbers.splice(i, 0, " ");
        }
    }
    return numbers.join("");
}

export function formatMoney(numero) {
    let partes = numero.toString().split('.');
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return '$' + (partes[1] ? partes.join('.') : partes[0]);
}

export function changePage(url = '') {
    //-----------------------------------------------------------
    // -------> Replace with
    // -------> import { goto } from '$app/navigation';
    // -------> goto('/redirectpage');
    //-----------------------------------------------------------
    // let shopLink = document.querySelector(`a[href*="${url}"]`);
    // if (!shopLink) {
    //     const link = document.createElement('a');
    //     link.href = `${url}`;
    //     link.style.width = '0.1px';
    //     link.style.height = '0.1px';
    //     const body = document.body;
    //     body.appendChild(link);
    //     shopLink = document.querySelector(`a[href*="${url}"]`);
    // }
    // shopLink.click();
}
export function changeText(variaciones) {
    const spanElement = document.querySelector('.main_small');

    const tiempoTotal = 5000; // Tiempo total de la animación en milisegundos
    const tiempoEntrada = 2000; // Tiempo en milisegundos para la animación de entrada
    const tiempoSalida = 10; // Tiempo en milisegundos para la animación de salida
    const intervaloEntrada = tiempoEntrada / spanElement.textContent.length; // Intervalo de tiempo para cada letra de la animación de entrada
    const intervaloSalida = tiempoSalida / variaciones[0].length; // Intervalo de tiempo para cada letra de la animación de salida

    let currentWord = 0; // Índice de la palabra actual en el array de variaciones

    // Función para la animación de entrada de letra por letra
    function animacionEntrada() {
        let index = 0;
        const palabraActual = variaciones[currentWord];
        const interval = setInterval(() => {
            if (index === palabraActual.length) {
                clearInterval(interval);
                setTimeout(animacionSalida, 2000); // Esperar dos segundos antes de iniciar la animación de salida
            } else {
                spanElement.textContent = palabraActual.slice(0, index + 1);
                index++;
            }
        }, 900 / palabraActual.length); // Intervalo de tiempo para cada letra de la animación de entrada

        setTimeout(() => {
            spanElement.textContent = palabraActual; // Mostrar la palabra completa después de 2 segundos
        }, 2000);
    }

    // Función para la animación de salida de letra por letra y cambio de palabra
    function animacionSalida() {
        let index = variaciones[currentWord].length;
        const interval = setInterval(() => {
            if (index === 0) {
                clearInterval(interval);
                currentWord = (currentWord + 1) % variaciones.length; // Cambiar al siguiente índice en el array de variaciones
                setTimeout(() => {
                    spanElement.textContent = ''; // Limpiar el contenido del elemento antes de iniciar la animación de entrada con la nueva palabra
                    animacionEntrada(); // Iniciar la animación de entrada con la nueva palabra
                }, 100); // Esperar dos segundos antes de iniciar la animación de entrada con la nueva palabra
            } else {
                spanElement.textContent = variaciones[currentWord].slice(0, index);
                index--;
            }
        }, intervaloSalida);
    }

    spanElement.textContent = ''; // Limpiar el contenido del elemento antes de iniciar la animación
    animacionEntrada(); // Iniciar la animación de entrada
}