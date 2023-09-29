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
    return '$ ' + (partes[1] ? partes.join('.') : partes[0]);
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