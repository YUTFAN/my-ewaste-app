import React from 'react';

interface Props {
  equipment: string;
}

const faqData: Record<string, { question: string; solution: string }[]> = {
  Laptop: [
    {
      question: "Laptop won't turn on",
      solution:
        "Ensure the power adapter is connected. Try holding the power button for 10 seconds to force a restart. If it still doesn't power on, check for battery issues.",
    },
    {
      question: 'Screen flickering',
      solution:
        'Update your graphics driver. If the issue persists, check the display cable connection or test with an external monitor.',
    },
    {
      question: 'Loud fan noise',
      solution:
        'Clean the fan using compressed air. If the noise continues, consider replacing the thermal paste or checking for blocked airflow.',
    },
  ],
  Charger: [
    {
      question: "Device won't charge",
      solution:
        'Ensure the charger is original and fully inserted. Try using a different socket. Inspect the cable for damage.',
    },
    {
      question: 'Charger is overheating',
      solution:
        'Avoid continuous charging. Ensure good ventilation and stop using if excessive heat is present. Replace if needed.',
    },
  ],
  Microphone: [
    {
      question: 'No sound detected',
      solution:
        'Ensure the microphone is not muted in system settings. Try reconnecting it to a different port or updating your audio drivers.',
    },
    {
      question: 'Too much background noise',
      solution:
        'Use noise suppression in your audio settings. Move the mic away from fans or electronics. Consider using a pop filter.',
    },
  ],
};

const RepairGuide: React.FC<Props> = ({ equipment }) => {
  const faqs = faqData[equipment] || [];

  return (
    <div className="repair-guide">
      <h2>Repair Guide for {equipment}</h2>
      {faqs.length === 0 ? (
        <p>No repair tips available for this device.</p>
      ) : (
        <ul>
          {faqs.map((item, index) => (
            <li key={index} className="repair-item">
              <h4>🔧 {item.question}</h4>
              <p>{item.solution}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepairGuide;
