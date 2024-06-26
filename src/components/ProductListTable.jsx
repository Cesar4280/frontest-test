import ProductItemRecord from "./ProductItemRecord";

const TABLE_FIELDS = ["Producto ID", "Nombre Producto", "Precio", "Mercado enlace", "Imagen"];

const ProductTableField = ({ columnName }) => (
   <th scope="col" className="font-semibold whitespace-nowrap px-6 py-3">
      {columnName}
   </th>
);

const ProductListTable = ({ products }) => {
   return (
      <div className="block w-full overflow-x-auto">
         <table className="items-center w-full bg-transparent border-collapse">
            <thead className="bg-slate-50">
               <tr className="text-left text-xs text-slate-500">
                  {TABLE_FIELDS.map(columnName =>
                     <ProductTableField
                        key={columnName}
                        columnName={columnName.toUpperCase()} />
                  )}
               </tr>
            </thead>
            <tbody>
               {products.map(product =>
                  <ProductItemRecord
                     key={product.id}
                     product={product} />
               )}
            </tbody>
            <tfoot>
               <tr>
                  <th scope="row" colspan="2">Número total de álbumes</th>
                  <td colspan="2">77</td>
               </tr>
            </tfoot>
         </table>
      </div>
  );
};

export default ProductListTable;