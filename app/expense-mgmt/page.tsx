"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Eye, ClipboardCheck } from "lucide-react"

const reports = [
  {
    id: "ER-2025-003",
    submittedBy: "Alice Johnson",
    amount: 450.50,
    status: "Approved",
  },
  {
    id: "ER-2025-002",
    submittedBy: "Bob Williams",
    amount: 1200.00,
    status: "Pending Approval",
  },
]

export default function ExpenseMgmtPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Expense Reports</h1>
          <div className="relative w-full sm:w-auto sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Ask FiNet: 'What was my net income in June?'"
              className="pl-9 w-full sm:w-[400px]"
            />
          </div>
        </div>

        <Card>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 border-b border-border">
            <div>
              <CardTitle>Expense Reports</CardTitle>
            </div>
            <Button className="mt-4 sm:mt-0">
              <ClipboardCheck className="h-4 w-4 mr-2" />
              Submit New Report
            </Button>
          </div>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left py-3 px-6 text-sm font-medium">REPORT ID</th>
                    <th className="text-left py-3 px-6 text-sm font-medium">SUBMITTED BY</th>
                    <th className="text-left py-3 px-6 text-sm font-medium">AMOUNT</th>
                    <th className="text-left py-3 px-6 text-sm font-medium">STATUS</th>
                    <th className="text-left py-3 px-6 text-sm font-medium">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id} className="border-b border-border">
                      <td className="py-3 px-6 text-sm">{report.id}</td>
                      <td className="py-3 px-6 text-sm">{report.submittedBy}</td>
                      <td className="py-3 px-6 text-sm font-medium">${report.amount.toFixed(2)}</td>
                      <td className="py-3 px-6">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            report.status === "Approved"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-orange-500/20 text-orange-500"
                          }`}
                        >
                          {report.status}
                        </span>
                      </td>
                      <td className="py-3 px-6">
                        <Button variant="ghost" size="sm" className="text-primary">
                          {report.status === "Approved" ? (
                            <>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </>
                          ) : (
                            <>
                              <ClipboardCheck className="h-4 w-4 mr-1" />
                              Review
                            </>
                          )}
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

