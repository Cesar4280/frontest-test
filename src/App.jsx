// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryMenu from "./components/CategoryMenu";
import ProductListTable from "./components/ProductListTable";

export default function App() {
  /**
   * un aplicativo en React.js el cual permita enlistar productos, paginarlos y poder filtrarlos
   * con base a ciertos parámetros. Esta información proviene de una API de Mercado Libre.
   */

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-12">
        <CategoryMenu />
        <ProductListTable />
      </div>
    </div>
    // <Router>
    //   <div className="container mx-auto">
    //     <CategoryMenu />
    //     <Routes>
    //       <Route path="/" element={<ProductListTable />} />
    //       <Route path="/:category_id" element={<ProductListTable />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}
