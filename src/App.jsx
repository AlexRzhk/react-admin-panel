import { useState } from "react";
import "./App.css";
import { Filter } from "./features/Filter/Filter";

import { Header } from "./features/Header/Header";

function App() {
  const [additionalFilterVisibility, setAdditionalFilterVisibility] =
    useState(false);
  const handleSwitchAdditionalFilter = () =>
    setAdditionalFilterVisibility(!additionalFilterVisibility);

  return (
    <div className="pageWrapper">
      <Header />
      <Filter
        additionalFilterVisibility={additionalFilterVisibility}
        handleSwitchAdditionalFilter={handleSwitchAdditionalFilter}
      />
    </div>
  );
}

export default App;
