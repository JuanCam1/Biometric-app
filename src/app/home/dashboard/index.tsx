import { createFileRoute } from "@tanstack/react-router";

import { dashboardData } from "@/data/dashboard-data";
import CardInfo from "@/features/dashboard/components/card-dashboard";
import TypographyH2 from "@/components/shared/typography-h2";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/home/dashboard/")({
  component: DashboardComponent,
});

function DashboardComponent() {
  return (
    <div className="flex flex-col items-center gap-8 p-8 h-full">
      <TypographyH2
        className="mt-8 font-bold text-black dark:text-white text-3xl text-left"
        text="Panel de Control"
      />
      <Card className="dark:bg-zinc-950/80 w-[70%]">
        <CardContent>
          <div className="gap-4 gap-y-6 grid md:grid-cols-2 lg:grid-cols-3 mt-6">
            {dashboardData.map((item) => (
              <CardInfo key={item.id}  {...item} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
