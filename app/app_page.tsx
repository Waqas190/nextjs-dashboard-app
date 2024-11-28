import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Dashboard App</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>View your main dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Spreadsheet</CardTitle>
            <CardDescription>Manage your spreadsheet data</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/spreadsheet">Go to Spreadsheet</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Module Matrix</CardTitle>
            <CardDescription>View module interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/module-matrix">Go to Module Matrix</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

