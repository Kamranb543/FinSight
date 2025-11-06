"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const budgetItems = [
  {
    category: "Marketing",
    spent: 10500,
    budget: 10000,
    percentage: 105,
    color: "bg-red-500",
  },
  {
    category: "Software & Subscriptions",
    spent: 1800,
    budget: 2000,
    percentage: 90,
    color: "bg-orange-500",
  },
  {
    category: "Cloud & Hosting",
    spent: 600,
    budget: 1000,
    percentage: 60,
    color: "bg-green-500",
  },
]

export default function BudgetingPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Budget vs. Actuals</h1>
          <div className="relative w-full sm:w-auto sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Ask FinSight AI: 'What was my net income in October?'"
              className="pl-9 w-full sm:w-[400px]"
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Budget vs. Actuals</CardTitle>
            <CardDescription>
              Track your spending against your budget in real-time. FinSight AI flags categories that are over budget.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {budgetItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-sm text-muted-foreground">
                    ${item.spent.toLocaleString()} / ${item.budget.toLocaleString()} ({item.percentage}%)
                  </span>
                </div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full ${item.color}`}
                    style={{ width: `${Math.min(item.percentage, 100)}%` }}
                  />
                </div>
                {item.percentage > 100 && (
                  <p className="text-sm text-red-500">{item.percentage}%</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

