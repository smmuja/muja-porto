import { useCallback, useState } from "react";

export function useOpenRightSidebar() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

  const handleOpenRightSidebar = useCallback(() => {
    setIsRightSidebarOpen(true);
  }, []);
  const handleCloseRightSidebar = useCallback(() => {
    setIsRightSidebarOpen(false);
  }, []);

  console.log(isRightSidebarOpen);

  return {
    isRightSidebarOpen,
    handleOpenRightSidebar,
    handleCloseRightSidebar,
  };
}
