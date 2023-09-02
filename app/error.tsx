"use client";

import Button from "@/components/Button";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <main
      className={
        "flex flex-col justify-center items-center text-center py-40 px-20 space-y-4"
      }
    >
      <h1 className="font-black text-6xl">Oops!</h1>
      <h2 className="font-medium text-2xl text-slate-200">
        something went wrong.
      </h2>
      <Button sx="mt-12" onClick={reset}>
        Try again
      </Button>
    </main>
  );
};

export default Error;
