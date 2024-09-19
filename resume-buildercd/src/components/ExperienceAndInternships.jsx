import React, { useState } from 'react';

const ExperienceAndInternships = ({ onChange }) => {
  const [experience, setExperience] = useState([{ role: '', company: '', duration: '' }]);

  const handleInputChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
    onChange(updatedExperience);
  };

  return (
    <div className="section">
      <h2>Experience and Internships</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => handleInputChange(index, 'role', e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleInputChange(index, 'company', e.target.value)}
          />
          <input
            type="text"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) => handleInputChange(index, 'duration', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceAndInternships;
