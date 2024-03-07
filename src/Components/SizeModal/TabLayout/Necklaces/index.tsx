import React from 'react';

const Necklaces = () => {
  const data = [
    { pol: 16, cm: 40.50 },
    { pol: 18, cm: 45.75 },
    { pol: 20, cm: 50.75 },
    { pol: 24, cm: 61.00 },
    { pol: 30, cm: 76.25 },
    { pol: 32, cm: 78.74 },
    { pol: 36, cm: 91.50 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Comprimento (pol.)</th>
          <th>Comprimento (cm)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.pol}</td>
            <td>{item.cm}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Necklaces;
