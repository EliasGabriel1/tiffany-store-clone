import React, { useState } from 'react';
import "./index.css"
import RingSizeTable from './Rings';
import BraceletSizeTable from './BraceletSizeTable';
import Necklaces from './Necklaces';

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState('Anéis');

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container">
      <div className={`tab ${activeTab === 'Anéis' && 'active'}`} onClick={() => handleTabClick('Anéis')}>
        Anéis
      </div>
      <div className={`tab ${activeTab === 'Pulseiras' && 'active'}`} onClick={() => handleTabClick('Pulseiras')}>
        Pulseiras
      </div>
      <div className={`tab ${activeTab === 'Colares' && 'active'}`} onClick={() => handleTabClick('Colares')}>
        Colares e Pendentes
      </div>

      {activeTab === 'Anéis' && <div><RingSizeTable/> </div>}
      {activeTab === 'Pulseiras' && <div><BraceletSizeTable/></div>}
      {activeTab === 'Colares' && <div><Necklaces/></div>}
    </div>
  );
};

export default TabLayout;
