import { Client } from "@notionhq/client";
export async function getProductsFromNotion() {
    
    const notion = new Client({
        auth: 'secret_OCB8RIMw3JzpBY9axQdwjDbf5YUHe3iVbWGhbCdMt44'
    })

    const query = { database_id: '2984d07f214b4561b67f1d47351a3764' }

    const { results } = await notion.databases.query(query)
    let services = []
    services = results.map(page => {
        // @ts-ignore
        const { properties } = page
        const { precio, nombre, imagen, categoria } = properties

        return {
            price: precio.number ?? null,
            category:  (categoria.select) ? categoria.select.name : null,
            name: (nombre.title && nombre.title.length > 0) ? nombre.title[0].plain_text : null,
            image: imagen.files[0] ? imagen.files[0].file.url : null,
        }
    })

    services = services.filter((service) => service.name !== null && service.price !== null && service.image !== null && service.category !== null)

    console.log(services.length, 'services');

    return services
}