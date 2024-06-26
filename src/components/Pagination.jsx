import ProductTableHeader from "./ProductTableHeader";
import ProductListTable from "./ProductListTable";
import { useState } from "react";

const Pagination = ({ products }) => {
   const [currentPage, setCurrentPage] = useState();
   return (
      <div className="w-full mx-auto xl:w-10/12 mb-12 xl:mb-0 px-4">
         <div className="flex flex-col w-full relative min-w-0 break-words mb-6 shadow-lg rounded-2xl bg-white">
            <ProductTableHeader />
            <ProductListTable products={products} />
         </div>
      </div>
   );
}

export default Pagination;