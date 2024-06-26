const SITE = import.meta.env.VITE_API_SITE;
const SELLER_ID = import.meta.env.VITE_API_SELLER_ID;
const MERCADO_LIBRE_API_URL = import.meta.env.VITE_API_URL;
const DEFAULT_LIMIT = import.meta.env.VITE_API_DEFAULT_LIMIT;
/**
 * La API de Mercado Libre tiene un endpoint que
 * permite buscar productos de un vendedor en particular.
 * Puede definir el tamaño de página de la lista de
 * resultados. Existen 2 parámetros: Límite y Desplazamiento.
 * Ambos parámetros definen el bloque de tamaño de los resultados. 
 * Los valores por defecto son offset=0 y limit=50.
 */
// const BASE_URL = `${MERCADO_LIBRE_API_URL}/sites/${SITE}`;

const fetchMercadoLibre = async (URI = ENDPOINT) => {
    let productList = null;
    try {
        const response = await fetch(URI);
        if (response.ok) {
            const data = await response.json();
            productList = data.results;
        }
    } catch (error) {
        console.error(error);
    } finally {
        console.log("fetchMercadoLibre Finished!!!");
    }
    return productList;
};

const getURI = (resource = "search", isQueryParam = true) => {
    let endpoint = `${MERCADO_LIBRE_API_URL}/sites/${SITE}/${resource}`;
    if (isQueryParam) endpoint += `?seller_id=${SELLER_ID}&limit=${DEFAULT_LIMIT}`;
    return endpoint;
}

export const fetchProducts = () => {
    // const resource = "search";
    // const queryParams = `seller_id=${SELLER_ID}&limit=${DEFAULT_LIMIT}`;
    // const endpoint = `${BASE_URL}/${resource}?${queryParams}`;
    const PRODUCTS_ACCORDING_TO_SELLER_URI = getURI("search", true);
    return fetchMercadoLibre(PRODUCTS_ACCORDING_TO_SELLER_URI);
};
export const fetchCategories = () => {
    // const resource = "categories";
    // const endpoint = `${BASE_URL}/${resource}`;
    const CATEGORIES_AVAILABLE_ON_SITE_URI = getURI("categories", false);
    return fetchMercadoLibre(CATEGORIES_AVAILABLE_ON_SITE_URI);
};