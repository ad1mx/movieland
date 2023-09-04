import React from "react";
import Hero from "@/components/Hero";
import Movies from "@/components/Movies";

export interface HomeProps {
  searchParams: { page: string; category: string };
}

const Home: React.FC<HomeProps> = ({ searchParams: { page, category } }) => {
  return (
    <main>
      <Hero />
      <Movies page={+page || 1} category={+category || false} />
    </main>
  );
};

export default Home;
