import styles from "./Pagination.module.css";
import { Button } from "../../../../../elements/Button/Button";
import { MyDropdown } from "../../../../../elements/Dropdown/MyDropdown";
import { PageChooser } from "./PageChooser/PageChooser";
import { number } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage } from "../../../../store/Filters/FiltersSlice";

Pagination.propTypes = {
  ordersLength: number,
};

export function Pagination({ ordersLength }) {
  const { pageLimit, currentPage } = useSelector((state) => state.filters);
  const maxPage = Math.ceil(ordersLength / pageLimit);

  const dispatch = useDispatch();
  const handleChangePage = (pageNumber) => {
    dispatch(changeCurrentPage(pageNumber));
  };

  const dropdownTrigger = <Button>#</Button>;

  return (
    <div className={styles._}>
      <div className={styles.wrapper}>
        {currentPage >= 4 && (
          <Button onClick={() => handleChangePage(1)} size="short" isFullWidth>
            1
          </Button>
        )}
        {currentPage > 4 && (
          <Button size="short" isFullWidth>
            ...
          </Button>
        )}
        {currentPage > 2 && (
          <Button
            onClick={() => handleChangePage(currentPage - 2)}
            size="short"
            isFullWidth
          >
            {currentPage - 2}
          </Button>
        )}
        {currentPage > 1 && (
          <Button
            onClick={() => handleChangePage(currentPage - 1)}
            size="short"
            isFullWidth
          >
            {currentPage - 1}
          </Button>
        )}

        <Button size="short" isFullWidth isSecondary={true}>
          {currentPage}
        </Button>

        {currentPage < maxPage && (
          <Button
            size="short"
            isFullWidth
            onClick={() => handleChangePage(currentPage + 1)}
          >
            {currentPage + 1}
          </Button>
        )}
        {currentPage < maxPage - 1 && (
          <Button
            size="short"
            isFullWidth
            onClick={() => handleChangePage(currentPage + 2)}
          >
            {currentPage + 2}
          </Button>
        )}
        {currentPage < maxPage - 3 && (
          <Button size="short" isFullWidth>
            ...
          </Button>
        )}
        {currentPage < maxPage - 2 && (
          <Button
            size="short"
            isFullWidth
            onClick={() => handleChangePage(maxPage)}
          >
            {maxPage}
          </Button>
        )}
      </div>
      <MyDropdown trigger={dropdownTrigger} childrenClassName={styles.dropdown}>
        <PageChooser maxPage={maxPage} />
      </MyDropdown>
    </div>
  );
}
