import React from 'react';
import './MainContent.css';

interface Props {
  equipment: string;
}

const MainContent: React.FC<Props> = ({ equipment }) => (
  <div className="main-content">
    <p>Select actions above to manage your {equipment}.</p>
  </div>
);

export default MainContent;
