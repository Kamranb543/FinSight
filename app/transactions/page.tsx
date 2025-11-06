"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const transactions = [
  {
    date: "2025-10-12",
    description: "Stripe Payout",
    amount: 7500.0,
    category: "Sales Revenue",
  },
  {
    date: "2025-10-11",
    description: "Amazon Web Services",
    amount: -450.75,
    category: "Cloud & Hosting",
  },
  {
    date: "2025-10-10",
    description: "HubSpot Subscription",
    amount: -200.0,
    category: "Software & Subscriptions",
  },
  {
    date: "2025-10-09",
    description: "Office Depot",
    amount: -112.45,
    category: "Office Supplies",
  },
]

export default function TransactionsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Review & Reconcile</h1>
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
            <CardTitle>Review & Reconcile</CardTitle>
            <CardDescription>
              FinSight AI has automatically categorized new transactions. Review the suggestions and approve to reconcile your books.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium">DATE</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">DESCRIPTION</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">AMOUNT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">FINSIGHT AI SUGGESTED CATEGORY</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="px-4 py-3 text-sm">{transaction.date}</td>
                      <td className="px-4 py-3 text-sm font-medium">{transaction.description}</td>
                      <td
                        className={`px-4 py-3 text-sm font-medium ${
                          transaction.amount >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {transaction.amount >= 0 ? "+" : ""}
                        ${transaction.amount.toFixed(2)}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {transaction.category}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-600">
                          Approve
                        </Button>
                      </td>
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
