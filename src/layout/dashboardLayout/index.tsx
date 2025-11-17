import { useState, type ReactNode } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBFB]">
      <SideNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <TopNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <main
        className={`transition-all duration-300 ease-in-out pt-40 lg:pt-[120px]
          ${isCollapsed ? "lg:ml-[90px]" : "lg:ml-[283px]"}`}
      >
        <div className=" min-h-[calc(100vh-120px)]">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
