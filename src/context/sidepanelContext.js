import React, { useState, createContext } from "react";

const sidepanelContext = createContext({
  sidepanelStatus: false,
  toggleSidepanel: () => {},
  closeSidebar: () => {},
});

export const SidepanelContextProvider = (props) => {
  const [sidepanelStatus, setSidepanelStatus] = useState(false);

  const sidepanelToggleHandler = () => {
    setSidepanelStatus((prevState) => !prevState);
  };

  const closeSidebarHandler = () => {
    setSidepanelStatus(false);
  };
  return (
    <sidepanelContext.Provider
      value={{
        sidepanelStatus: sidepanelStatus,
        toggleSidepanel: sidepanelToggleHandler,
        closeSidebar: closeSidebarHandler,
      }}
    >
      {props.children}
    </sidepanelContext.Provider>
  );
};
export default sidepanelContext;
