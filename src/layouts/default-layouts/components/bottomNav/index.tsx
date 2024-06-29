import { SidebarNav } from "../sidebar";

export function BottomNav() {
  return (
    <div className=" sm:hidden grid grid-flow-dense sticky bottom-0  border-t justify-center overflow-x-scroll bg-white">
      <SidebarNav />
    </div>
  );
}
