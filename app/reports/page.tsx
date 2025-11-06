"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { useThemeColors } from "@/hooks/use-theme-colors"

const profitLossData = [
  { month: "Apr", revenue: 30, netIncome: 5 },
  { month: "May", revenue: 35, netIncome: 7 },
  { month: "Jun", revenue: 42, netIncome: 10 },
  { month: "Jul", revenue: 45, netIncome: 12 },
  { month: "Aug", revenue: 40, netIncome: 8 },
  { month: "Sep", revenue: 50, netIncome: 15 },
  { month: "Oct", revenue: 55, netIncome: 20 },
]

const balanceSheetData = [
  { category: "Assets", amount: 150000, color: "#3b82f6" },
  { category: "Liabilities", amount: 75000, color: "#f97316" },
  { category: "Equity", amount: 75000, color: "#10b981" },
]

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("profit-loss")
  const { primary, chart2, textColor } = useThemeColors()

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="relative w-full sm:w-auto sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Ask FinSight AI: 'What was my net income in October?'"
              className="pl-9 w-full sm:w-[400px]"
            />
          </div>
        </div>

        <div className="flex gap-4 border-b border-border">
          <button
            onClick={() => setActiveTab("profit-loss")}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeTab === "profit-loss"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Profit & Loss
          </button>
          <button
            onClick={() => setActiveTab("balance-sheet")}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeTab === "balance-sheet"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Balance Sheet
          </button>
          <button
            onClick={() => setActiveTab("cash-flow")}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeTab === "cash-flow"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Cash Flow Statement
          </button>
        </div>

        {activeTab === "profit-loss" && (
          <Card>
            <CardHeader>
              <CardTitle>Profit & Loss (YTD)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={profitLossData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="month"
                    stroke={textColor}
                    tick={{ fill: textColor, fontSize: 12 }}
                  />
                  <YAxis
                    stroke={textColor}
                    tick={{ fill: textColor, fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      opacity: 0.95,
                    }}
                    cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
                  />
                  <Legend wrapperStyle={{ color: textColor }} />
                  <Bar dataKey="revenue" fill={primary} name="Revenue" />
                  <Bar dataKey="netIncome" fill={chart2} name="Net Income" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {activeTab === "balance-sheet" && (
          <Card>
            <CardHeader>
              <CardTitle>Balance Sheet (as of Oct 15, 2025)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={balanceSheetData}
                  layout="vertical"
                  margin={{ left: 20, right: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    type="number"
                    stroke={textColor}
                    tick={{ fill: textColor, fontSize: 12 }}
                  />
                  <YAxis
                    dataKey="category"
                    type="category"
                    stroke={textColor}
                    tick={{ fill: textColor, fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      opacity: 0.95,
                    }}
                    cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
                  />
                  <Bar
                    dataKey="amount"
                    name="Amount ($)"
                    radius={[0, 4, 4, 0]}
                  >
                    {balanceSheetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {activeTab === "cash-flow" && (
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Cash flow statement data will be displayed here.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  )
}
