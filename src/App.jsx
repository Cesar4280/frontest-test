import CategoryMenu from "./components/CategoryMenu";
import ProductListTable from "./components/ProductListTable";

export default function App() {
  /**
   * un aplicativo en React.js el cual permita enlistar productos, paginarlos y poder filtrarlos
   * con base a ciertos parámetros. Esta información proviene de una API de Mercado Libre.
   */

  return (
    <div className="container mx-auto">
      <CategoryMenu />
      <ProductListTable />
    </div>
  );
}
