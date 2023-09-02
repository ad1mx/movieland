import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <main className="bg-gray-900 bg-opacity-90 main_container py-10 flex">
      <Skeleton className="w-[400px] h-[600px] rounded-2xl bg-[#151d30]" />
      <div className="ml-10">
        <Skeleton className="w-56 h-10 bg-[#1d2841]" />
        <Skeleton className="w-96 h-5 mt-4 bg-[#1d2841]" />
      </div>
    </main>
  );
};

export default Loading;
