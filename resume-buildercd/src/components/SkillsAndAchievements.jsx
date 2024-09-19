import React from 'react';

const SkillsAndAchievements = ({ onChange }) => {
  return (
    <div className="section">
      <h2>Skills and Achievements</h2>
      <textarea onChange={(e) => onChange(e.target.value.split(','))} placeholder="Enter your skills, separated by commas" />
    </div>
  );
};

export default SkillsAndAchievements;
