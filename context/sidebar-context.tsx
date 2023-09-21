"use client"
import React, { createContext, useState } from "react"

interface SidebarContextType {
    open: boolean
    setOpen: (open: boolean) => void
}

const SIDEBAR_DEFAULT_VALUES: SidebarContextType = { open: false, setOpen: () => { } }

export const SidebarContext = createContext<SidebarContextType>(SIDEBAR_DEFAULT_VALUES)

export const SidebarProvider = ({ children }: any) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const contextValues: SidebarContextType = { open: sidebarOpen, setOpen: setSidebarOpen }

    return (
        <SidebarContext.Provider value={contextValues}>
            {children}
        </SidebarContext.Provider>
    )
}