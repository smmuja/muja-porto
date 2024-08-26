import { useOpenRightSidebar } from "layouts/default-layouts/hooks/UseOpenRightSidebar";
import React, { createContext, useContext, ReactNode } from "react";

// Create a context with default values
const OpenRightSidebarContext = createContext<
  ReturnType<typeof useOpenRightSidebar> | undefined
>(undefined);

// Create a provider component
export const OpenRightSidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const rightSidebar = useOpenRightSidebar(); // Use the hook here

  return (
    <OpenRightSidebarContext.Provider value={rightSidebar}>
      {children}
    </OpenRightSidebarContext.Provider>
  );
};

// Custom hook to use the sidebar context
export const useOpenRightSidebarContext = () => {
  const context = useContext(OpenRightSidebarContext);
  if (context === undefined) {
    throw new Error(
      "useOpenSidebarContext must be used within an OpenSidebarProvider"
    );
  }
  return context;
};
