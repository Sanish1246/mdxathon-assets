import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import  AppSidebar  from "@/components/app-sidebar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
        <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger className="relative md:right-36 md:top-0 cursor-pointer"/>
        {children}
      </main>
    </SidebarProvider>
  )
}

export default layout