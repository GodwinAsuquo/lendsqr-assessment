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
      {/* Side Navigation */}
      <SideNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Top Navigation */}
      <TopNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area */}
      <main
        className={`transition-all duration-300 ease-in-out pt-[160px] lg:pt-[120px]
          ${isCollapsed ? "lg:ml-[90px]" : "lg:ml-[283px]"}`}
      >
        <div className=" min-h-[calc(100vh-120px)]">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
