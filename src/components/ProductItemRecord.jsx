export default function ProductItemRecord({ product }) {
  const { id, title, price, permalink, thumbnail } = product;
  return (
    <tr className="border border-dashed border-t-0 border-l-0 border-r-0 text-xs">
      <td className="whitespace-nowrap py-4 pl-4 sm:pl-6 pr-3 font-medium text-gray-900">
        {id}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-gray-500">{title}</td>
      <td className="whitespace-nowrap px-3 py-4 text-gray-500">
        $ {price.toLocaleString("es-AR")}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-center">
        <a
          className="text-slate-500 hover:text-blue-600"
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en Mercado Libre
        </a>
      </td>
      <td>
        <img
          className="w-[50px] h-[50px] block mx-auto"
          src={thumbnail}
          alt={title}
          loading="lazy"
        />
      </td>
    </tr>
  );
}
