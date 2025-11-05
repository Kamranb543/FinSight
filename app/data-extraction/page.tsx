"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Upload } from "lucide-react"

export default function DataExtractionPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Upload a Document</h1>
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
          <CardHeader>
            <CardTitle>Upload a Document</CardTitle>
            <CardDescription>
              Simulate uploading an invoice, receipt, or bank statement. FiNet will analyze the document and extract the key data points automatically.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-12 text-center">
              <Upload className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-muted-foreground">Simulated: PDF, PNG, JPG</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
