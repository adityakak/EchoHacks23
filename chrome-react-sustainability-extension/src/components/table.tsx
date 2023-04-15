import React from "react";

type TableProps = {
    data: Array<{
      original_item: string;
      alt_one: string;
      alt_two: string;
      alt_three: string;
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
              <td>{original_item}</td>
              <td>{alt_one}</td>
              <td>{alt_two}</td>
              <td>{alt_three}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;