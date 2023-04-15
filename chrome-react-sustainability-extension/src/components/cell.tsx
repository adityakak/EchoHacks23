import React from "react";
import ScoreDial from "./scoredial";

type CellProps = {
    data: Array<{
      item: string;
      link: string;
      score: string;
      image: string;
      price: string;
    }>;
  };

  const Cell: React.FC<CellProps> = ({ data }) => {
    return (
    <div>
        {data.map((item, index) => (
          <div key={index}>
            <img src={`data:image/png;base64,${item.image}`} alt={item.item} />
            <h3><a href={item.link} target="_blank" rel="noopener noreferrer">{item.item}</a></h3>
            <p>{item.price}</p>
            <p><ScoreDial value={item.score} size={50} strokeColor="black" textColor="white" circleSize={25}/></p>
          </div>
        ))}
      </div>
  );

}
export default Cell;