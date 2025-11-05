"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Home,
  FileText,
  CreditCard,
  Briefcase,
  BarChart3,
  Scale,
  Zap,
  Settings,
  LogOut,
  ShoppingCart,
  Folder,
  Building,
  Users,
  Receipt,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "Data Extraction", href: "/data-extraction", icon: FileText },
]

const operationsItems = [
  { name: "Workflows", href: "/workflows", icon: Briefcase },
  { name: "Expense Mgmt", href: "/expense-reports", icon: Receipt },
  { name: "Inventory", href: "/inventory", icon: ShoppingCart },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Fixed Assets", href: "/fixed-assets", icon: Building },
]

const planningItems = [
  { name: "Budgeting", href: "/budgeting", icon: Scale },
  { name: "Tax Center", href: "/tax-center", icon: Building },
  { name: "Payroll", href: "/payroll", icon: Users },
]

const configItems = [
  { name: "Integrations", href: "/integrations", icon: Zap },
  { name: "Settings", href: "/settings/appearance", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { logout } = useAuth()

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href)
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const renderNavItem = (item: { name: string; href: string; icon: any }) => {
    const Icon = item.icon
    const active = isActive(item.href)
    return (
      <Link
        key={item.name}
        href={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          active
            ? "bg-sidebar-accent text-sidebar-accent-foreground"
            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{item.name}</span>
      </Link>
    )
  }

  return (
    <div className="flex h-full w-full flex-col bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="flex h-16 items-center px-6 border-b border-sidebar-border flex-shrink-0">
        <h1 className="text-xl font-semibold text-sidebar-foreground">
          <span className="text-sidebar-primary">Fi</span>Net
        </h1>
      </div>

      <nav className="flex-1 space-y-6 px-3 py-4 overflow-y-auto">
        <div className="space-y-1">
          <p className="px-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
            Menu
          </p>
          {menuItems.map(renderNavItem)}
        </div>

        <div className="space-y-1">
          <p className="px-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
            Operations
          </p>
          {operationsItems.map(renderNavItem)}
        </div>

        <div className="space-y-1">
          <p className="px-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
            Planning & Compliance
          </p>
          {planningItems.map(renderNavItem)}
        </div>

        <div className="space-y-1">
          <p className="px-3 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
            Configuration
          </p>
          {configItems.map(renderNavItem)}
        </div>
      </nav>

      <div className="border-t border-sidebar-border p-4 space-y-4 flex-shrink-0">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
        <div className="px-3 space-y-1">
          <p className="text-xs text-sidebar-foreground/60">NET Labs</p>
          <p className="text-xs text-sidebar-foreground/60">© 2025</p>
        </div>
      </div>
    </div>
  )
}
