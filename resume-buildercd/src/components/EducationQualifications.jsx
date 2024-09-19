import React, { useState } from 'react';

const EducationQualifications = ({ onChange }) => {
  const [education, setEducation] = useState([{ degree: '', institution: '', year: '' }]);

  const handleInputChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
    onChange(updatedEducation);
  };

  return (
    <div className="section">
      <h2>Education Qualifications</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
          />
          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
          />
          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => handleInputChange(index, 'year', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default EducationQualifications;
