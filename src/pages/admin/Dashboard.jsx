import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, DollarSign, Activity } from "lucide-react";

export default function Dashboard() {
  // Dummy data for dashboard
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      change: "+12%",
    },
    {
      title: "Revenue",
      value: "$45,231",
      icon: DollarSign,
      change: "+8%",
    },
    {
      title: "Active Sessions",
      value: "573",
      icon: Activity,
      change: "+19%",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      icon: BarChart,
      change: "+7%",
    },
  ];

  return (
    <div className="container p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}