"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const expenseReports = [
  {
    id: "ER-2025-003",
    submittedBy: "Alice Johnson",
    amount: 450.5,
    status: "Approved",
    action: "View",
  },
  {
    id: "ER-2025-002",
    submittedBy: "Bob Williams",
    amount: 1200.0,
    status: "Pending Approval",
    action: "Review",
  },
]

export default function ExpenseReportsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Expense Reports</h1>
          <div className="flex gap-4 flex-1 sm:justify-end">
            <div className="relative w-full sm:w-auto sm:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Ask FiNet: 'What was my net income in June?'"
                className="pl-9 w-full sm:w-[400px]"
              />
            </div>
            <Button>Submit New Report</Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Expense Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left text-sm font-medium">REPORT ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">SUBMITTED BY</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">AMOUNT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">STATUS</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {expenseReports.map((report, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="px-4 py-3 text-sm font-medium">{report.id}</td>
                      <td className="px-4 py-3 text-sm">{report.submittedBy}</td>
                      <td className="px-4 py-3 text-sm font-medium">${report.amount.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            report.status === "Approved"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-orange-500/20 text-orange-500"
                          }`}
                        >
                          {report.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="link" size="sm" className="text-primary">
                          {report.action}
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

