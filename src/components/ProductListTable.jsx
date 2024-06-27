import { useState, useEffect } from "react";

import { TABLE_FIELDS } from "../config/constans";
import { DEFAULT_LIMIT as TOTAL_PER_PAGE } from "../config/API";

import { fetchProducts } from "../services/mercadoLibreAPI";

import ProductItemRecord from "./ProductItemRecord";
import ProductTableHeader from "./ProductTableHeader";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const offset = getSliceIndex(1);
    fetchProducts(offset)
      .then((data) => {
        const totalQuantity = data.paging.total;
        const productsToShow = data.results;
        setProducts(productsToShow);
        setTotalProducts(totalQuantity);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const getTotalPages = () => Math.ceil(totalProducts / TOTAL_PER_PAGE);
  const getSliceIndex = (subtract = 0) => (currentPage - subtract) * TOTAL_PER_PAGE;
  const changeCurrentPage = (pageNumber) => setCurrentPage(pageNumber);

  

  return (
    <div className="w-full mx-auto xl:w-10/12 mb-12 xl:mb-0 px-4 col-span-10">
      <div className="flex flex-col w-full relative min-w-0 break-words mb-6 shadow-lg rounded-2xl bg-white">
        <ProductTableHeader />
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="bg-slate-50">
              <ProductTableFields columnNames={TABLE_FIELDS} />
            </thead>
            <tbody>
              {isLoading ? <Spinner /> : products.map((product) => <ProductItemRecord key={product.id} product={product} />)}
            </tbody>
          </table>
        </div>
        {isLoading || (
          <div className="rounded-t-lg mb-0 px-2 py-3 border-0 text-slate-500 shadow">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  {getSliceIndex(1) + 1}-{getSliceIndex()} de {totalProducts}
                  resultados
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <Pagination
                  currentPage={currentPage}
                  totalPages={getTotalPages()}
                  changeCurrentPage={changeCurrentPage}
                  rowSpan={TABLE_FIELDS.length}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListTable;
