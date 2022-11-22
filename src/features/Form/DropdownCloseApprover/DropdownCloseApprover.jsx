import { Button } from "../../../elements/Button/Button";

import { func } from "prop-types";

DropdownCloseApprover.propTypes = {
  onDropdownClose: func,
  onModalClose: func,
};

export function DropdownCloseApprover({ onDropdownClose, onModalClose }) {
  return (
    <>
      Есть несохраненные изменения
      <Button isFullWidth size="short" onClick={onModalClose}>
        Сбросить
      </Button>
      <Button
        isFullWidth
        size="short"
        isSecondary={true}
        onClick={onDropdownClose}
      >
        Остаться
      </Button>
    </>
  );
}
