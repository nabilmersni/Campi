import { createContext, useState } from 'react';

export const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <DashboardContext.Provider
      value={{ isSidebarCollapsed, setIsSidebarCollapsed }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;
