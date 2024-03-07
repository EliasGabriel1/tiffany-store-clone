import React from 'react';

const BraceletSizeTable = () => {
  const data = [
    { tamanho: 'PP', medidasPulso_mm: '121-133 mm', medidasPulso_cm: '12,1-13,3 cm' },
    { tamanho: 'P', medidasPulso_mm: '134-146 mm', medidasPulso_cm: '13,4-14,6 cm' },
    { tamanho: 'M', medidasPulso_mm: '146-159 mm', medidasPulso_cm: '14,6-15,9 cm' },
    { tamanho: 'G', medidasPulso_mm: '159-171 mm', medidasPulso_cm: '15,9-17,3 cm' },
    { tamanho: 'GG', medidasPulso_mm: '172-184 mm', medidasPulso_cm: '17,2-18,3 cm' },
    { tamanho: 'EG', medidasPulso_mm: '184-197 mm', medidasPulso_cm: '18,4–19,7 cm' },
    { tamanho: 'EGG', medidasPulso_mm: '197-210 mm', medidasPulso_cm: '19,7–21,3 cm' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Tamanho</th>
          <th>Medidas do Pulso (mm)</th>
          <th>Medidas do Pulso (cm)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.tamanho}</td>
            <td>{item.medidasPulso_mm}</td>
            <td>{item.medidasPulso_cm}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BraceletSizeTable;
