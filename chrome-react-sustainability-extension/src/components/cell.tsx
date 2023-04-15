import React from "react";
import Image from "./image"

type CellProps = {
    data: Array<{
      item: string;
      link: string;
      score: number;
      image: string;
    }>;
  };

  const Cell: React.FC<CellProps> = ({ data }) => {
    return (
    <div>
      <Image src="../resources/product-photo-water-bottle-hero.png" alt="Example image" />
    </div>
  );
}