import React from 'react';
import './Sidebar.css';

interface Props {
  selected: string;
  onSelect: (item: string) => void;
}

const items = ['Laptop', 'Charger', 'Microphone'];

const Sidebar: React.FC<Props> = ({ selected, onSelect }) => (
  <aside className="sidebar">
    <h3>MENU OF EQUIPMENT</h3>
    {items.map(item => (
      <div
        key={item}
        className={`sidebar-item ${selected === item ? 'active' : ''}`}
        onClick={() => onSelect(item)}
      >
        {item}
      </div>
    ))}
  </aside>
);

export default Sidebar;
