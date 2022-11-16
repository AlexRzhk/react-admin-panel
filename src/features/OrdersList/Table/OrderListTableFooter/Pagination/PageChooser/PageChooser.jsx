import { Input } from "../../../../../../elements/Input/Input";

export function PageChooser() {
  const gg = (e) => {
    if (e.keyCode === 13) {
      console.log("new page");
    }
  };
  return (
    <>
      Номер страницы
      <Input onKeyDown={gg} placeholder="Введите номер" />
    </>
  );
}
