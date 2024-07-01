"use client";

import LatestTasks from "@/app/ui/LatestTasks";
import ProductivityCard from "@/app/ui/ProductivityCard";
import ProjectsInProgressCard from "@/app/ui/ProjectsInProgressCard";

export default function Dashboard() {
  return (
    <main className="flex-1 p-4 space-y-8 overflow-auto md:p-6 mt-16">
      <LatestTasks />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <ProductivityCard />
        <ProjectsInProgressCard />
      </div>
    </main>
  );
}
