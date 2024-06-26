import { useState, useEffect, Fragment } from "react";
import { fetchProducts } from "./api/mercadoLibre";

import CategoryMenu from "./components/CategoryMenu";
import Pagination from "./components/Pagination";

export default function App() {
  /**
   * un aplicativo en React.js el cual permita enlistar productos, paginarlos y poder filtrarlos
   * con base a ciertos parámetros. Esta información proviene de una API de Mercado Libre.
   */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="container mx-auto">
      <CategoryMenu />
      <Pagination products={products} />
    </div>
  );
}
