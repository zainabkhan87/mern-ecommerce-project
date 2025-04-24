import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import { LayoutContext } from "./components/shop/index"; // Correctly import the context
import { layoutState, layoutReducer } from "./components/shop";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);

  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
