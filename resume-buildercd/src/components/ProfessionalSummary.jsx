import React from 'react';

const ProfessionalSummary = ({ onChange }) => {
  return (
    <div className="section">
      <h2>Professional Summary</h2>
      <textarea onChange={(e) => onChange(e.target.value)} placeholder="Enter your professional summary" />
    </div>
  );
};

export default ProfessionalSummary;
