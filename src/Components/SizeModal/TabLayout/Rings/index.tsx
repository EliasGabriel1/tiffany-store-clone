import React from 'react';

const RingSizeTable = () => {
  const data = [
    { tamanhoEUA: 3, tamanhoBR: 8, circunferenciaInterna_mm: 42.9, circunferenciaInterna_cm: 4.29 },
    { tamanhoEUA: 3.5, tamanhoBR: 9, circunferenciaInterna_mm: 45.5, circunferenciaInterna_cm: 4.55 },
    { tamanhoEUA: 4, tamanhoBR: 10, circunferenciaInterna_mm: 46.8, circunferenciaInterna_cm: 4.68 },
    { tamanhoEUA: 4.5, tamanhoBR: 11.5, circunferenciaInterna_mm: 48.0, circunferenciaInterna_cm: 4.80 },
    { tamanhoEUA: 5, tamanhoBR: 12.5, circunferenciaInterna_mm: 49.3, circunferenciaInterna_cm: 4.93 },
    { tamanhoEUA: 5.5, tamanhoBR: 14, circunferenciaInterna_mm: 50.6, circunferenciaInterna_cm: 5.06 },
    { tamanhoEUA: 6, tamanhoBR: 15, circunferenciaInterna_mm: 51.9, circunferenciaInterna_cm: 5.19 },
    { tamanhoEUA: 6.5, tamanhoBR: 16.5, circunferenciaInterna_mm: 53.1, circunferenciaInterna_cm: 5.31 },
    { tamanhoEUA: 7, tamanhoBR: 17.5, circunferenciaInterna_mm: 54.4, circunferenciaInterna_cm: 5.44 },
    { tamanhoEUA: 7.5, tamanhoBR: 18.5, circunferenciaInterna_mm: 55.7, circunferenciaInterna_cm: 5.57 },
    { tamanhoEUA: 8, tamanhoBR: 20, circunferenciaInterna_mm: 57.0, circunferenciaInterna_cm: 5.70 },
    { tamanhoEUA: 8.5, tamanhoBR: 21, circunferenciaInterna_mm: 58.3, circunferenciaInterna_cm: 5.83 },
    { tamanhoEUA: 9, tamanhoBR: 22.5, circunferenciaInterna_mm: 59.5, circunferenciaInterna_cm: 5.95 },
    { tamanhoEUA: 9.5, tamanhoBR: 23.5, circunferenciaInterna_mm: 60.8, circunferenciaInterna_cm: 6.08 },
    { tamanhoEUA: 10, tamanhoBR: 24.5, circunferenciaInterna_mm: 62.1, circunferenciaInterna_cm: 6.21 },
    { tamanhoEUA: 10.5, tamanhoBR: 26, circunferenciaInterna_mm: 63.4, circunferenciaInterna_cm: 6.34 },
    { tamanhoEUA: 11, tamanhoBR: 27.5, circunferenciaInterna_mm: 64.6, circunferenciaInterna_cm: 6.46 },
    { tamanhoEUA: 11.5, tamanhoBR: 28.5, circunferenciaInterna_mm: 65.9, circunferenciaInterna_cm: 6.59 },
    { tamanhoEUA: 12, tamanhoBR: 29.5, circunferenciaInterna_mm: 67.2, circunferenciaInterna_cm: 6.72 },
    { tamanhoEUA: 12.5, tamanhoBR: 31, circunferenciaInterna_mm: 68.5, circunferenciaInterna_cm: 6.85 },
    { tamanhoEUA: 13, tamanhoBR: 32, circunferenciaInterna_mm: 69.7, circunferenciaInterna_cm: 6.97 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Tamanho EUA</th>
          <th>Tamanho BR</th>
          <th>Circunferência Interna (mm)</th>
          <th>Circunferência Interna (cm)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.tamanhoEUA}</td>
            <td>{item.tamanhoBR}</td>
            <td>{item.circunferenciaInterna_mm}</td>
            <td>{item.circunferenciaInterna_cm}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RingSizeTable;
