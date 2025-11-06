"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react"
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useThemeColors } from "@/hooks/use-theme-colors"

const cashFlowData = [
  { month: "Apr", inflow: 45, outflow: 30 },
  { month: "May", inflow: 52, outflow: 35 },
  { month: "Jun", inflow: 48, outflow: 38 },
  { month: "Jul", inflow: 61, outflow: 42 },
  { month: "Aug", inflow: 55, outflow: 45 },
  { month: "Sep", inflow: 68, outflow: 48 },
  { month: "Oct", inflow: 72, outflow: 50 },
]

const insights = [
  {
    icon: TrendingUp,
    iconColor: "text-green-500",
    title: "Sales revenue has increased by 15% month-over-month.",
  },
  {
    icon: AlertTriangle,
    iconColor: "text-orange-500",
    title: "Software spending is 30% higher than the 3-month average. Review recent subscriptions.",
  },
  {
    icon: ArrowRight,
    iconColor: "text-blue-500",
    title: "Based on current trends, you are projected to exceed your Q3 profit target by 8%.",
  },
]

export default function DashboardPage() {
  const { primary, textColor } = useThemeColors()

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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cash Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-500">$125,730.55</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Income (YTD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">$48,210.90</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue (YTD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$215,600.00</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expenses (YTD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">$167,389.10</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-1 md:col-span-2 lg:col-span-4">
            <CardHeader>
              <CardTitle>Cash Flow Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={cashFlowData}>
                  <defs>
                    <linearGradient id="inflowGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={primary} stopOpacity={0.3} />
                      <stop offset="100%" stopColor={primary} stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
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
                  <Area
                    type="monotone"
                    dataKey="inflow"
                    stroke={primary}
                    strokeWidth={2}
                    fill="url(#inflowGradient)"
                    dot={{ r: 4 }}
                    name="Inflow"
                  />
                  <Line
                    type="monotone"
                    dataKey="outflow"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Outflow"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>FinSight AI Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {insights.map((insight, index) => {
                const Icon = insight.icon
                return (
                  <div key={index} className="flex gap-3">
                    <Icon className={`h-5 w-5 ${insight.iconColor} mt-0.5 shrink-0`} />
                    <p className="text-sm text-muted-foreground">{insight.title}</p>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}

