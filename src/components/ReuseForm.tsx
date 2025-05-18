import React, { useState } from 'react';

interface ReuseItem {
  name: string;
  description: string;
  department: string;
  contact: string;
}

interface ScheduleRequest {
  name: string;
  itemType: string;
  pickupDate: string;
  notes?: string;
}

const ReuseForm: React.FC = () => {
  const [mode, setMode] = useState<'Declare' | 'Claim' | 'Schedule'>('Declare');

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

  const [scheduleData, setScheduleData] = useState<ScheduleRequest>({
    name: '',
    itemType: '',
    pickupDate: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (mode === 'Schedule') {
      setScheduleData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'Declare') {
      if (Object.values(formData).some(v => !v)) {
        alert('Please fill in all fields');
        return;
      }
      setItems(prev => [...prev, formData]);
      setFormData({ name: '', description: '', department: '', contact: '' });
      setMode('Claim');
    } else if (mode === 'Schedule') {
      if (!scheduleData.name || !scheduleData.itemType || !scheduleData.pickupDate) {
        alert('Please fill in all required fields');
        return;
      }
      // ✅ 跳转官网链接
      window.location.href = 'https://sustainablecampus.unimelb.edu.au/reduce-reuse-recycle/furniture';
    }
  };

  return (
    <div className="reuse-panel">
      <div className="reuse-header">
        <h2>Reuse Equipment</h2>
        <select value={mode} onChange={e => setMode(e.target.value as 'Declare' | 'Claim' | 'Schedule')}>
          <option value="Declare">Declare</option>
          <option value="Claim">Claim</option>
          <option value="Schedule">Schedule Pickup</option>
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

      {mode === 'Schedule' && (
        <form className="reuse-form" onSubmit={handleSubmit}>
          <label>
            Name *
            <input type="text" name="name" value={scheduleData.name} onChange={handleChange} />
          </label>

          <p><strong>Note:</strong> Request will be sent to <em>Furniture & Equipment Store</em>.</p>

          <label>
            Item Type *
            <select name="itemType" value={scheduleData.itemType} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Office Chair">Office Chair</option>
              <option value="Table / Desk">Table / Desk</option>
              <option value="Monitor">Monitor</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Preferred Pickup Date *
            <input type="date" name="pickupDate" value={scheduleData.pickupDate} onChange={handleChange} />
          </label>

          <label>
            Notes
            <textarea name="notes" value={scheduleData.notes} onChange={handleChange} />
          </label>

          <button type="submit">Schedule Pickup</button>
        </form>
      )}
    </div>
  );
};

export default ReuseForm;
