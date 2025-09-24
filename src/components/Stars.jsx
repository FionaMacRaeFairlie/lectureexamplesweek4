import React, { useState } from "react";
import Star from "./Star";

export default function StarRating({ totalStars = 5 }) {
  const createArray = (length) => [...Array(length)];
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars{" "}
      </p>
    </div>
  );
}
