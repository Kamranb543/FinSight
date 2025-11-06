"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const projects = [
  {
    name: "Website Redesign",
    client: "ClientCorp",
    budget: 20000,
    invoiced: 15000,
    profitability: 45,
  },
  {
    name: "Q3 Marketing Campaign",
    client: "Global Solutions Ltd.",
    budget: 50000,
    invoiced: 50000,
    profitability: -5,
  },
]

export default function ProjectsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Project-Based Accounting</h1>
          <div className="flex gap-4 flex-1 sm:justify-end">
            <div className="relative w-full sm:w-auto sm:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Ask FinSight AI: 'What was my net income in October?'"
                className="pl-9 w-full sm:w-[400px]"
              />
            </div>
            <Button>New Project</Button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Project-Based Accounting</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.client}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Budget:</span>
                  <span className="font-medium">${project.budget.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Invoiced:</span>
                  <span className="font-medium">${project.invoiced.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Profitability:</span>
                  <span
                    className={`font-semibold ${
                      project.profitability >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {project.profitability >= 0 ? "+" : ""}
                    {project.profitability}%
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
