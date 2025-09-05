import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger className="relative md:right-32 lg:right-50 cursor-pointer" />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
