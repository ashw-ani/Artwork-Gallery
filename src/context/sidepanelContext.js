import React, { useState, createContext } from "react";

const sidepanelContext = createContext({
  sidepanelStatus: false,
  toggleSidepanel: () => {},
});

export const SidepanelContextProvider = (props) => {
  const [sidepanelStatus, setSidepanelStatus] = useState(false);

  const sidepanelToggleHandler = () => {
    setSidepanelStatus((prevState) => !prevState);
  };
  return (
    <sidepanelContext.Provider
      value={{
        sidepanelStatus: sidepanelStatus,
        toggleSidepanel: sidepanelToggleHandler,
      }}
    >
      {props.children}
    </sidepanelContext.Provider>
  );
};
export default sidepanelContext;
