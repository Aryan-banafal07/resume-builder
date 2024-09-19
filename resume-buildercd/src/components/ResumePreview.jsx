import React from 'react';

const ResumePreview = ({ data }) => {
  return (
    <div className="resume-preview">
      <h3>Resume Preview</h3>
      <div>
        <span>Career Objective:</span>
        {data.careerObjective}
      </div>
      <div>
        <span>Professional Summary:</span>
        {data.professionalSummary}
      </div>
      <div>
        <span>Education Qualifications:</span>
        {data.education.map((edu, index) => (
          <div key={index}>
            <strong>{edu.degree}</strong> from {edu.institution}, {edu.year}
          </div>
        ))}
      </div>
      <div>
        <span>Skills and Achievements:</span>
        {data.skills.join(', ')}
      </div>
      <div>
        <span>Experience and Internships:</span>
        {data.experience.map((exp, index) => (
          <div key={index}>
            <strong>{exp.role}</strong> at {exp.company}, {exp.duration}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;
