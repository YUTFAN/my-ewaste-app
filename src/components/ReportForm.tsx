import React, { useState } from 'react';

interface Props {
  equipment: string;
}

const ReportForm: React.FC<Props> = ({ equipment }) => {
  const [type, setType] = useState('');
  const [serial, setSerial] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!type) newErrors.type = 'Please select a problem type.';
    if (!serial) newErrors.serial = 'Please enter the device serial number.';
    if (!description) newErrors.description = 'Please describe the issue.';
    if (!email) {
      newErrors.email = 'Please enter your contact email.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log('🔧 Submitting Report:', {
      equipment,
      type,
      serial,
      description,
      email,
      file,
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>✅ Thank you!</h2>
        <p>
          Your report for <strong>{equipment}</strong> has been submitted.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h2>Report an Issue with {equipment}</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Problem Type: *
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem' }}
          >
            <option value="">-- Select --</option>
            <option value="Won't turn on">Won't turn on</option>
            <option value="Screen issue">Screen issue</option>
            <option value="Battery problem">Battery problem</option>
            <option value="Other">Other</option>
          </select>
        </label>
        {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Device Serial Number: *
          <input
            type="text"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            placeholder="e.g. ABC123456"
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem' }}
          />
        </label>
        {errors.serial && <p style={{ color: 'red' }}>{errors.serial}</p>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Describe the issue: *
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem' }}
          />
        </label>
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Contact Email: *
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem' }}
          />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Screenshot (optional):
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            style={{ display: 'block', marginTop: '0.5rem' }}
          />
        </label>
        {file && <p>Selected file: {file.name}</p>}
      </div>

      <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Submit Report
      </button>
    </form>
  );
};

export default ReportForm;
