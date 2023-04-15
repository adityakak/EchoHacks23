import React from "react";
import Cell from './cell';

type TableProps = {
  data: Array<{
    original_item: Array<{
      item: string;
      link: string;
      score: number;
      image: string;
    }>;
    alt_one: Array<{
      item: string;
      link: string;
      score: number;
      image: string;
    }>;
    alt_two: Array<{
      item: string;
      link: string;
      score: number;
      image: string;
    }>;
    alt_three: Array<{
      item: string;
      link: string;
      score: number;
      image: string;
    }>;
  }>;
};
  
  const Table: React.FC<TableProps> = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Original Item</th>
            <th>Alternative One</th>
            <th>Alternative Two</th>
            <th>Alternative Three</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ original_item, alt_one, alt_two, alt_three }, i) => (
            <tr key={i}>
              <td><Cell data={original_item}/></td>
              <td><Cell data={alt_one}/></td>
              <td><Cell data={alt_two}/></td>
              <td><Cell data={alt_three}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;