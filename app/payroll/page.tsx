"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function PayrollPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Run Payroll</h1>
          <div className="relative w-full sm:w-auto sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Ask FiNet: 'What was my net income in June?'"
              className="pl-9 w-full sm:w-[400px]"
            />
          </div>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Run Payroll</CardTitle>
            <CardDescription>
              Process payroll in minutes with our fully integrated system.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Next Pay Run</p>
                <p className="text-lg font-medium">Jul 1 - Jul 15</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Pay Date</p>
                <p className="text-lg font-medium">Jul 20, 2025</p>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground mb-2">Total Payroll Cost</p>
              <p className="text-5xl font-bold">$45,820.50</p>
            </div>
            <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
              Run Payroll
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

