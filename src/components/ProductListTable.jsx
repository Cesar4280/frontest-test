import { useState, useEffect } from "react";

import { TABLE_FIELDS } from "../config/constans";
import { DEFAULT_LIMIT as TOTAL_PER_PAGE } from "../config/API";

import { fetchProducts } from "../services/mercadoLibreAPI";

import ProductItemRecord from "./ProductItemRecord";
import ProductTableHeader from "./ProductTableHeader";
import Pagination from "./Pagination";

const ProductTableFields = ({ columnNames }) => {
  return (
    <tr className="text-left text-xs text-slate-500">
      {columnNames.map((columnName) => (
        <th
          key={columnName}
          scope="col"
          className="font-semibold whitespace-nowrap px-6 py-3"
        >
          {columnName.toUpperCase()}
        </th>
      ))}
    </tr>
  );
};

const ProductListTable = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(products.length);

  useEffect(() => {
    const offset = (currentPage - 1) * TOTAL_PER_PAGE;
    fetchProducts(offset).then((data) => {
      const totalQuantity = data.paging.total;
      const productsToShow = data.results;
      setProducts(productsToShow);
      setTotalProducts(totalQuantity);
    });
  }, [currentPage]);

  const getTotalPages = () => Math.ceil(totalProducts / TOTAL_PER_PAGE);
  const changeCurrentPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full mx-auto xl:w-10/12 mb-12 xl:mb-0 px-4">
      <div className="flex flex-col w-full relative min-w-0 break-words mb-6 shadow-lg rounded-2xl bg-white">
        <ProductTableHeader />
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="bg-slate-50">
              <ProductTableFields columnNames={TABLE_FIELDS} />
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductItemRecord key={product.id} product={product} />
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={getTotalPages()}
          changeCurrentPage={changeCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductListTable;
