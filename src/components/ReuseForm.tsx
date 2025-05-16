import React, { useState } from 'react';

interface ReuseItem {
  name: string;
  description: string;
  department: string;
  contact: string;
}

const ReuseForm: React.FC = () => {
  const [mode, setMode] = useState<'Declare' | 'Claim'>('Declare');
  const [formData, setFormData] = useState<ReuseItem>({
    name: '',
    description: '',
    department: '',
    contact: '',
  });

  const [items, setItems] = useState<ReuseItem[]>([
    {
      name: 'Dell Latitude E5470',
      description: '14-inch business laptop, i5 processor, 8GB RAM, functional but not needed anymore.',
      department: 'Engineering Faculty',
      contact: 'eng-tech@unimelb.edu.au',
    },
    {
      name: 'MacBook Air 2017',
      description: 'Used for admin work, still works well. Battery recently replaced.',
      department: 'Arts Administration',
      contact: 'arts-admin@unimelb.edu.au',
    },
    {
      name: 'Logitech USB Microphone',
      description: 'Used for online lectures. Comes with foam cover and stand.',
      department: 'Education Tech Lab',
      contact: 'edutech@unimelb.edu.au',
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).some(v => !v)) {
      alert('Please fill in all fields');
      return;
    }
    setItems(prev => [...prev, formData]);
    setFormData({ name: '', description: '', department: '', contact: '' });
    setMode('Claim');
  };

  return (
    <div className="reuse-panel">
      <div className="reuse-header">
        <h2>Reuse Equipment</h2>
        <select value={mode} onChange={e => setMode(e.target.value as 'Declare' | 'Claim')}>
          <option value="Declare">Declare</option>
          <option value="Claim">Claim</option>
        </select>
      </div>

      {mode === 'Declare' && (
        <form className="reuse-form" onSubmit={handleSubmit}>
          <label>
            Device Name *
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>

          <label>
            Description *
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </label>

          <label>
            Department *
            <input type="text" name="department" value={formData.department} onChange={handleChange} />
          </label>

          <label>
            Contact Email *
            <input type="email" name="contact" value={formData.contact} onChange={handleChange} />
          </label>

          <button type="submit">Submit</button>
        </form>
      )}

      {mode === 'Claim' && (
        <div className="reuse-list">
          <h3>Available Equipment</h3>
          {items.length === 0 ? (
            <p>No available devices yet.</p>
          ) : (
            items.map((item, idx) => (
              <div key={idx} className="reuse-card">
                <h4>{item.name}</h4>
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Department:</strong> {item.department}</p>
                <p><strong>Contact:</strong> {item.contact}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ReuseForm;
