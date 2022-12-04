import dropdownSelectorStyles from "./StatusSelectorByModal/StatusSelectorByModal.module.css";
import styles from "./Form.module.css";
import dropdownCloseApproverStyle from "./DropdownCloseApprover/DropdownCloseApprover.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue, finalize } from "../store/Form/FormSlice";
import { changeOrder } from "../store/Orders/OrdersSlice";
import { Button } from "../../elements/Button/Button";
import { MyDropdown } from "../../elements/Dropdown/MyDropdown";
import { StatusSelectorByModal } from "./StatusSelectorByModal/StatusSelectorByModal";
import { DropdownCloseApprover } from "./DropdownCloseApprover/DropdownCloseApprover";
import cn from "classnames";
import { Input } from "../../elements/Input/Input";
import { OrderDetail } from "./OrderDetail/OrderDetail";
import { statusNames } from "../../App";
import loaderStyles from "../Filter/MainFilter/MainFilter.module.css";

const confirmationCode = "123";

export function Form() {
  const [isSelectorDropdownVisible, setIsSelectorDropdownVisible] =
    useState(false);
  const [isCodeCorrect, setIsCodeCorrect] = useState(true);
  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isDataChanged, setIsDataChanged] = useState(false);

  const handleToggleSelectorVisibility = () => {
    setIsSelectorDropdownVisible(!isSelectorDropdownVisible);
  };
  const [isApproveDropdownVisible, setIsApproveDropdownVisible] =
    useState(false);
  const handleToggleApproverVisibility = () => {
    if (isDataChanged) {
      setIsApproveDropdownVisible(!isApproveDropdownVisible);
    } else {
      handleCloseModal();
    }
  };

  const { confirmationCodeValue, id, date, status, loyalty, fullName } =
    useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const createHandleValueChanger =
    (valueName, additionalReset) =>
    ({ target: { value } }) => {
      if (additionalReset) {
        additionalReset();
      }
      dispatch(changeValue({ valueName, newValue: value }));
      setIsDataChanged(true);
    };

  const createHandleValueReset = (valueName) => () => {
    dispatch(changeValue({ valueName, newValue: "" }));
    setIsDataChanged(true);
  };

  const handleCloseModal = () => {
    dispatch(finalize());
    setIsApproveDropdownVisible(false);
    setIsDataChanged(false);
  };

  const checkName = () => {
    return fullName.trim() === "";
  };
  const checkCode = () => {
    return confirmationCodeValue === confirmationCode;
  };

  const handleChangeOrder = () => {
    setIsNameCorrect(!checkName());
    setIsCodeCorrect(checkCode());
    if (!checkName() && checkCode()) {
      const loader = document.querySelector(".loaderOff");
      loader.classList.add(loaderStyles.loaderOn);
      const handler = function () {
        dispatch(
          changeOrder({
            id: id,
            status: status,
            fullName: fullName,
          })
        );
      };
      setTimeout(handler, 2000);
      setTimeout(() => {
        const loader = document.querySelector(".loaderOff");
        loader.classList.remove(loaderStyles.loaderOn);
      }, 2000);
      handleCloseModal();
    }
  };
  const validate = function () {
    const errors = [];
    if (!isNameCorrect) {
      errors.push("поле ФИО заполнено неверно");
    }
    if (!isCodeCorrect) {
      errors.push("поле код заполнено неверно");
    }
    return errors[0] ? errors[0] : "";
  };

  const errorMessage = validate();

  const triggerSelectorElement = <Button icon="arrow" />;

  const dropdownSelectorElement = (
    <MyDropdown
      externalVisibilityValue={isSelectorDropdownVisible}
      externalVisibilitySetter={handleToggleSelectorVisibility}
      trigger={triggerSelectorElement}
      childrenClassName={dropdownSelectorStyles._}
      triggerClassNameWithActiveTrigger={styles.flipped}
    >
      <StatusSelectorByModal onDropdownClose={handleToggleSelectorVisibility} />
    </MyDropdown>
  );

  const triggerApproveChangeElement = <Button icon="x-large" />;

  const dropdownApproveChangeElement = (
    <MyDropdown
      externalVisibilityValue={isApproveDropdownVisible}
      externalVisibilitySetter={handleToggleApproverVisibility}
      triggerClassName={styles.button}
      trigger={triggerApproveChangeElement}
      childrenClassName={dropdownCloseApproverStyle._}
    >
      <DropdownCloseApprover
        onDropdownClose={handleToggleApproverVisibility}
        onModalClose={handleCloseModal}
      />
    </MyDropdown>
  );

  return (
    <div className={styles._}>
      <div
        className={cn(styles.modalBackground, {
          [styles.active]: !!id,
        })}
      />

      <div className={cn(styles.modalForm, { [styles.active]: !!id })}>
        <div className={styles.header}>
          Заявка #{id}
          {dropdownApproveChangeElement}
        </div>
        <div className={styles.body}>
          <Input disabled value={date} label="Дата и время заказа" />
          <Input
            value={fullName}
            onChange={createHandleValueChanger("fullName", () => {
              setIsNameCorrect(true);
            })}
            onReset={createHandleValueReset("fullName")}
            label="ФИО покупателя"
            isIncorrect={!isNameCorrect}
          />
          <OrderDetail />
          <Input disabled value={loyalty} label="Уровень лояльности" />

          <Input
            value={statusNames[status]}
            readOnly
            label="Статус заказа"
            postfix={dropdownSelectorElement}
          />

          <Input
            label="Код подтверждения"
            value={confirmationCodeValue}
            onChange={createHandleValueChanger("confirmationCodeValue", () => {
              setIsCodeCorrect(true);
            })}
            onReset={createHandleValueReset("confirmationCodeValue")}
            isIncorrect={!isCodeCorrect > 0}
          />
        </div>

        <div className={styles.footer}>
          {errorMessage}
          <Button
            icon="checkmark"
            isSecondary={true}
            onClick={handleChangeOrder}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}
