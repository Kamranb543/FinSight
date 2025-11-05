"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const accountsPayable = [
  {
    company: "Innovate Tech Inc.",
    dueDate: "Aug 14, 2025",
    amount: 1250.0,
  },
  {
    company: "Office Supplies Co.",
    dueDate: "Jul 28, 2025",
    amount: 345.2,
  },
]

const accountsReceivable = [
  {
    company: "ClientCorp",
    dueStatus: "Overdue by 5 days",
    amount: 5000.0,
  },
  {
    company: "Global Solutions Ltd.",
    dueStatus: "Due in 10 days",
    amount: 12500.0,
  },
]

export default function WorkflowsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Accounts Payable</h1>
          <div className="relative w-full sm:w-auto sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Ask FiNet: 'What was my net income in June?'"
              className="pl-9 w-full sm:w-[400px]"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Accounts Payable</CardTitle>
              <CardDescription>Review and approve upcoming bills.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {accountsPayable.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex-1">
                    <p className="font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground">Due: {item.dueDate}</p>
                    <p className="text-lg font-semibold text-red-500 mt-1">${item.amount.toFixed(2)}</p>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                    Approve
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accounts Receivable</CardTitle>
              <CardDescription>Track outstanding invoices.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {accountsReceivable.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex-1">
                    <p className="font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.dueStatus}</p>
                    <p className="text-lg font-semibold text-blue-500 mt-1">${item.amount.toFixed(2)}</p>
                  </div>
                  <Button size="sm" variant="default">
                    Send Reminder
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
