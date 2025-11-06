"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const integrations = [
  {
    name: "Payroll Systems",
    icon: "Payroll",
    color: "bg-blue-500",
    status: "available",
  },
  {
    name: "CRM Platforms",
    icon: "CRM",
    color: "bg-green-500",
    status: "available",
  },
  {
    name: "Payment Gateways",
    icon: "Stripe",
    color: "bg-orange-500",
    status: "available",
  },
  {
    name: "HRIS",
    icon: "HRIS",
    color: "bg-gray-500",
    status: "coming-soon",
  },
]

export default function IntegrationsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Seamless Integrations</h1>
          <div className="relative w-full sm:w-auto sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Ask FinSight AI: 'What was my net income in October?'"
              className="pl-9 w-full sm:w-[400px]"
            />
          </div>
        </div>

        <div>
          <p className="text-muted-foreground mb-6">
            Connect your favorite business tools to create a single source of truth for your financial data.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`h-16 w-16 rounded-full ${integration.color} flex items-center justify-center text-white font-semibold`}>
                    {integration.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">{integration.name}</h3>
                    {integration.status === "available" ? (
                      <Button variant="link" className="text-primary">
                        Connect
                      </Button>
                    ) : (
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

