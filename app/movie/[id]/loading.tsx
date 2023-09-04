import Skeleton from "@/components/Skeleton";
import React from "react";

const Loading = () => {
  return (
    <main className="main_container py-10 flex">
      <Skeleton rounded="2xl" className="w-[400px] h-[600px] rounded-2xl" />
      <div className="ml-10">
        <Skeleton className="w-56 h-10 bg-[#1d2841]" />
        <Skeleton className="w-96 h-5 mt-4" />
      </div>
    </main>
  );
};

export default Loading;
