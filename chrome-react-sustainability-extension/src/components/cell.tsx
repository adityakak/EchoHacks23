import React from "react";

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
        {data.map((item, index) => (
          <div key={index}>
            <img src={`data:image/png;base64,${item.image}`} alt={item.item} />
            <h3>{item.item}</h3>
            <p>{item.link}</p>
            <p>{item.score}</p>
          </div>
        ))}
      </div>
  );

}
export default Cell;