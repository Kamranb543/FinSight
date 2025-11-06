"use client"

import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const colorThemes = [
  { name: "Blue", value: "blue", color: "bg-blue-500" },
  { name: "Red", value: "red", color: "bg-red-500" },
  { name: "Green", value: "green", color: "bg-green-500" },
  { name: "Purple", value: "purple", color: "bg-purple-500" },
]

export default function AppearancePage() {
  const { theme, colorTheme, setTheme, setColorTheme } = useTheme()

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Appearance</h1>
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
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize the look and feel of your workspace.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mode">Mode</Label>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm ${theme === "light" ? "font-medium" : "text-muted-foreground"}`}>
                      Light
                    </span>
                    <Switch
                      id="mode"
                      checked={theme === "dark"}
                      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                    <span className={`text-sm ${theme === "dark" ? "font-medium" : "text-muted-foreground"}`}>
                      Dark
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Color Theme</Label>
                  <div className="flex gap-4 flex-wrap">
                    {colorThemes.map((themeOption) => (
                      <button
                        key={themeOption.value}
                        onClick={() => setColorTheme(themeOption.value as "blue" | "red" | "green" | "purple")}
                        className={`relative h-10 w-10 rounded-full ${themeOption.color} transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                          colorTheme === themeOption.value
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                            : ""
                        }`}
                        aria-label={`Select ${themeOption.name} theme`}
                      />
                    ))}
                  </div>
                </div>
              </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

