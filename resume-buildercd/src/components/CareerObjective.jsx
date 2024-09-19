import React from 'react';

const CareerObjective = ({ onChange }) => {
  return (
    <div className="section">
      <h2>Career Objective</h2>
      <textarea onChange={(e) => onChange(e.target.value)} placeholder="Enter your career objective" />
    </div>
  );
};

export default CareerObjective;
