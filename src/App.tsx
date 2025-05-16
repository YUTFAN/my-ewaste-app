import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ActionBar from './components/ActionBar';
import MainContent from './components/MainContent';
import ReportForm from './components/ReportForm';
import RepairGuide from './components/RepairGuide';
import ReuseForm from './components/ReuseForm';
import RecycleLocations from './components/RecycleLocations'; // ✅ 新增导入

import './App.css';

const App: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<string>('Laptop');
  const [selectedAction, setSelectedAction] = useState<string>(''); // '', 'Report', 'Repair', 'Reuse', 'Recycle'

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar selected={selectedEquipment} onSelect={setSelectedEquipment} />

        <div className="main-section">
          <ActionBar selected={selectedAction} onSelect={setSelectedAction} />

          <div className="content-area">
            {selectedAction === 'Report' ? (
              <ReportForm equipment={selectedEquipment} />
            ) : selectedAction === 'Repair' ? (
              <RepairGuide equipment={selectedEquipment} />
            ) : selectedAction === 'Reuse' ? (
              <ReuseForm />
            ) : selectedAction === 'Recycle' ? (
              <RecycleLocations />
            ) : (
              <MainContent equipment={selectedEquipment} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
