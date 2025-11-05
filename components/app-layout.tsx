"use client"

import { Sidebar } from "./sidebar"
import { MobileSidebar } from "./mobile-sidebar"
import { ProtectedRoute } from "./protected-route"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen w-full bg-background">
        <aside className="hidden lg:block w-64 shrink-0">
          <Sidebar />
        </aside>
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex h-16 items-center gap-4 border-b border-border px-4 lg:px-6">
            <MobileSidebar />
          </header>
          <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  )
}

