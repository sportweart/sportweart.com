
import { getProductsFromNotion } from "$lib/api/getProducts";
export const load = async () => {
    let services = await getProductsFromNotion()
    services = services.filter((service) => service.name !== null)
    return {
        "products": services
    }



}