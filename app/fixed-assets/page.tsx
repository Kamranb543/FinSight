"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const assets = [
  {
    name: "MacBook Pro 16\"",
    acquisitionDate: "2024-01-15",
    cost: 2500.0,
    depreciation: 416.67,
    bookValue: 2083.33,
  },
]

export default function FixedAssetsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Fixed Asset Register</h1>
          <div className="flex gap-4 flex-1 sm:justify-end">
            <div className="relative w-full sm:w-auto sm:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Ask FiNet: 'What was my net income in June?'"
                className="pl-9 w-full sm:w-[400px]"
              />
            </div>
            <Button>Add New Asset</Button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Fixed Asset Register</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fixed Asset Register</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium">ASSET</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">ACQUISITION DATE</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">COST</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">DEPRECIATION</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">BOOK VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="px-4 py-3 text-sm font-medium">{asset.name}</td>
                      <td className="px-4 py-3 text-sm">{asset.acquisitionDate}</td>
                      <td className="px-4 py-3 text-sm font-medium">${asset.cost.toFixed(2)}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        (${asset.depreciation.toFixed(2)})
                      </td>
                      <td className="px-4 py-3 text-sm font-medium">${asset.bookValue.toFixed(2)}</td>
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

