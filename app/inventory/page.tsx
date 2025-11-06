"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const inventoryItems = [
  {
    name: "Pro Widget",
    sku: "PW-001",
    stockLevel: 150,
    reorderPoint: 100,
    value: 7500.0,
    lowStock: false,
  },
  {
    name: "Standard Gizmo",
    sku: "SG-002",
    stockLevel: 45,
    reorderPoint: 50,
    value: 1125.0,
    lowStock: true,
  },
]

export default function InventoryPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
          <div className="flex gap-4 flex-1 sm:justify-end">
            <div className="relative w-full sm:w-auto sm:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Ask FinSight AI: 'What was my net income in October?'"
                className="pl-9 w-full sm:w-[400px]"
              />
            </div>
            <Button>Add New Item</Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium">ITEM NAME</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">SKU</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">STOCK LEVEL</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">REORDER POINT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryItems.map((item, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="px-4 py-3 text-sm font-medium">{item.name}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.sku}</td>
                      <td className={`px-4 py-3 text-sm ${item.lowStock ? "text-red-500" : ""}`}>
                        {item.lowStock && "• "}
                        {item.stockLevel} units
                      </td>
                      <td className="px-4 py-3 text-sm">{item.reorderPoint}</td>
                      <td className="px-4 py-3 text-sm font-medium">${item.value.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
