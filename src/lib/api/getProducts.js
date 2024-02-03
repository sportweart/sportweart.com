import { Client } from "@notionhq/client";

export async function getProductsFromNotion() {

    const DATABASES = [
        "9e5b4465f5884817ab95b1e141ece8d8",
        "3dcc709b9a9348ddad02b3486889d3bc",
        "d5abbf548a73459488fb14dacf0a087f",
        "3796597f8169408a8906dc5f9a5521cf",
        "ab949b6850dc477f86388ceaccbe612c"
    ]

    const notion = new Client({
        auth: 'secret_OCB8RIMw3JzpBY9axQdwjDbf5YUHe3iVbWGhbCdMt44'
    })

    
    let services = []
    const promises = DATABASES.map(async (ID) => {
        const query = { database_id: ID }
        const { results } = await notion.databases.query(query)
        let collector = []
        collector = results.map(page => {
            // @ts-ignore
            const { properties } = page
            const { precio, nombre, imagen, categoria } = properties
            return {
                price: precio.number ?? null,
                category: (categoria.select) ? categoria.select.name : null,
                name: (nombre.title && nombre.title.length > 0) ? nombre.title[0].plain_text : null,
                image: imagen.files[0] ? imagen.files[0].file.url : null,
            }
            
        })
        services = [...services, ...collector]
        return collector;
    });

    await Promise.all(promises);

    return services
}