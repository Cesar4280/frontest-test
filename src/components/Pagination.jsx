import Arrow from "./Arrow";

const Pagination = (props) => {
  const { totalPages, currentPage, changeCurrentPage } = props;

  const changeToNextPage = () => changeCurrentPage(currentPage + 1);
  const changeToPreviousPage = () => changeCurrentPage(currentPage - 1);

  const getPaginationItems = () => {
    const paginationItems = [];

    for (let numberPage = 1; numberPage <= totalPages; numberPage++) {
      const updateCurrentPage = () => changeCurrentPage(numberPage);
      paginationItems.push(
        <button
          type="button"
          key={numberPage}
          className={`h-12 border-2 border-r-0 border-yellow-500 w-12 ${
            numberPage === currentPage && "bg-yellow-500 text-white"
          }`}
          onClick={updateCurrentPage}
        >
          {numberPage}
        </button>
      );
    }
    return paginationItems;
  };

  const paginationItems = getPaginationItems();

  if (currentPage > 1)
    paginationItems.unshift(
      <button
        key={0}
        type="button"
        onClick={changeToPreviousPage}
        className="h-12 border-2 border-r-0 border-yellow-500 px-4 rounded-l-lg hover:bg-yellow-500 hover:text-white"
      >
        <Arrow direction="left" />
      </button>
    );

  if (currentPage < totalPages)
    paginationItems.push(
      <button
        key={totalPages + 1}
        type="button"
        onClick={changeToNextPage}
        className="h-12 border-2 border-yellow-500 px-4 rounded-r-lg hover:bg-yellow-500 hover:text-white"
      >
        <Arrow direction="right" />
      </button>
    );

  return <div className="flex flex-row justify-center">{paginationItems}</div>;
};

export default Pagination;
