import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Rating = ({ rate }: { rate: number }) => {
  if (rate > 5) return false;

  const rates = [...Array(5)];

  return (
    <div className="flex gap-2 text-yellow-500 text-xl">
      {rates.map((_, i) => {
        i += 1;
        if (rate >= i) {
          return <BsStarFill key={i} />;
        } else if (rate >= i - 0.5) {
          return <BsStarHalf key={i} />;
        } else {
          return <BsStar key={i} />;
        }
      })}
    </div>
  );
};

export default Rating;
