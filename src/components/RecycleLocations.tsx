import React from 'react';

interface Location {
  name: string;
  campus: string;
  description?: string;
  notes?: string;
}

const recycleBins: Location[] = [
  {
    name: 'Building 188 Entrance',
    campus: 'Parkville',
    description: 'Inside the main entrance, next to the reception.',
    notes: 'Available Mon–Fri, 9am–5pm',
  },
  {
    name: 'Old Arts Building Lobby',
    campus: 'Parkville',
    description: 'Beside the central staircase.',
  },
  {
    name: 'Southbank Hub – Level 1',
    campus: 'Southbank',
    description: 'In front of the cafeteria seating area.',
  },
  {
    name: 'Burnley Horticulture Office',
    campus: 'Burnley',
    description: 'Ask at reception; located in storage hallway.',
    notes: 'Drop-off only for staff',
  },
  {
    name: 'Engineering Workshop Foyer',
    campus: 'Parkville',
    description: 'Next to student printing station.',
  },
];

const RecycleLocations: React.FC = () => {
  const openMap = (place: string) => {
    const query = encodeURIComponent(`University of Melbourne ${place}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="recycle-list">
      <h2>Campus E-Waste Recycling Bins</h2>
      {recycleBins.map((bin, idx) => (
        <div key={idx} className="recycle-card">
          <h4>{bin.name}</h4>
          <p><strong>Campus:</strong> {bin.campus}</p>
          {bin.description && <p><strong>Location:</strong> {bin.description}</p>}
          {bin.notes && <p><em>{bin.notes}</em></p>}
          <button onClick={() => openMap(bin.name)}>📍 View on Map</button>
        </div>
      ))}
    </div>
  );
};

export default RecycleLocations;
