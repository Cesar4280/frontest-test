import {
    SITE,
    SELLER_ID,
    MERCADO_LIBRE_API_URL,
    DEFAULT_LIMIT
} from "../config/API";

const fetchMercadoLibre = async (URI = MERCADO_LIBRE_API_URL) => {
    let data = null;
    try {
        const response = await fetch(URI);
        if (!response.ok) {
            const { status, statusText } = response;
            throw new Error(`HTTP Error ${status} ${statusText}`);
        }
        data = await response.json();
    } catch (error) {
        console.error(error);
    } finally {
        console.log("fetchMercadoLibre Finished!!!");
    }
    return data;
};

const getURI = (offset = 0, limit = 50, categoryId = "") => `${MERCADO_LIBRE_API_URL}/sites/${SITE}/search?seller_id=${SELLER_ID}&${categoryId && `category=${categoryId}&`}offset=${offset}&limit=${limit}`;

export const fetchProducts = (offset = 0, limit = DEFAULT_LIMIT) => {
    const productsAccordingToSellerURI = getURI(offset, limit);
    return fetchMercadoLibre(productsAccordingToSellerURI);
};

export const fetchProductsByCategory = (categoryId = "", offset = 0, limit = DEFAULT_LIMIT) => {
    const productsAccordingToCategoryURI = getURI(offset, limit, categoryId);
    return fetchMercadoLibre(productsAccordingToCategoryURI);
};

// const getOneResult = async (criteria = "results", defaultValue = null, offset = 0, limit = 0) => {
//     const data = await fetchProducts(offset, limit);
//     const result = data === null ? defaultValue : data[criteria] ?? defaultValue;
//     return result;
// };
//  * Obtener el listado de productos asociados al vendedor
//  * @param {number} offset 
//  * @param {number} limit 
//  */
// export const getProductList = (offset = 0, limit = DEFAULT_LIMIT) => getOneResult("results", [], offset, limit);
// /**
//  * Obtener los resultados de paginación asociado a los productos del vendedor
//  */
// export const getPagingResults = () => getOneResult("paging", {});
// export const fetchCategory = () => {
//     const productsAccordingToCategoryURI = `${BASE_URL}/categories`;
//     return fetchMercadoLibre(productsAccordingToCategoryURI);
// };
//