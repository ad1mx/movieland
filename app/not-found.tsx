import Button from "@/components/Button";
import { BiSolidHome } from "react-icons/bi";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="px-20 py-40 flex flex-col items-center text-center">
      <h2 className="text-6xl font-black">Oops, Page not found!</h2>
      <p className="text-lg font-bold pt-4 text-slate-200">
        This page your looking for might have been removed, or isnt existed.
      </p>
      <Button sx="mt-6" asLink={Link} href="/" leftIcon={BiSolidHome}>
        Go back home
      </Button>
    </main>
  );
};

export default NotFound;
