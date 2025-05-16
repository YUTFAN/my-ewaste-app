import React from 'react';
import { FaTools, FaRecycle, FaRegStickyNote, FaRedo } from 'react-icons/fa';
import './ActionBar.css';

interface Props {
  selected: string;
  onSelect: (action: string) => void;
}

const ActionBar: React.FC<Props> = ({ selected, onSelect }) => {
  const actions = [
    { icon: <FaRegStickyNote size={24} />, label: 'Report' },
    { icon: <FaTools size={24} />, label: 'Repair' },
    { icon: <FaRedo size={24} />, label: 'Reuse' },
    { icon: <FaRecycle size={24} />, label: 'Recycle' },
  ];

  return (
    <div className="action-bar">
      {actions.map(action => (
        <div
          key={action.label}
          className={`action ${selected === action.label ? 'active' : ''}`}
          onClick={() => onSelect(action.label)}
        >
          {action.icon}
          <span>{action.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ActionBar;
