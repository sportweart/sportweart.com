


const url = 'https://formspree.io/f/mjvqpklr'

export default async function sendForm(data) {
    const r = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            accept: 'application/json'
        }
    })
    const response = r.json();
    return response
}