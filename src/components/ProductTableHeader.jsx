const ProductTableHeader = () => {
  return (
    <div className="rounded-t-lg mb-0 px-2 py-3 border-0 text-slate-500 shadow">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">
            Listado de Productos
          </h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button className="bg-yellow-500 text-white active:bg-yellow-600 text-xs font-bold px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            MERCADO LIBRE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTableHeader;
