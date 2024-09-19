import React, { useState, useRef } from 'react';
import ProfessionalSummary from './components/ProfessionalSummary';
import EducationQualifications from './components/EducationQualifications';
import SkillsAndAchievements from './components/SkillsAndAchievements';
import ExperienceAndInternships from './components/ExperienceAndInternships';
import CareerObjective from './components/CareerObjective';
import ResumePreview from './components/ResumePreview';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const App = () => {
  const [resumeData, setResumeData] = useState({
    professionalSummary: '',
    education: [],
    skills: [],
    achievements: [],
    experience: [],
    careerObjective: '',
  });

  const resumeRef = useRef();

  const handleInputChange = (field, value) => {
    setResumeData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleDownload = () => {
    const input = resumeRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="app-container">
      <h1>Resume Builder</h1>
      <CareerObjective onChange={(value) => handleInputChange('careerObjective', value)} />
      <ProfessionalSummary onChange={(value) => handleInputChange('professionalSummary', value)} />
      <EducationQualifications onChange={(value) => handleInputChange('education', value)} />
      <SkillsAndAchievements onChange={(value) => handleInputChange('skills', value)} />
      <ExperienceAndInternships onChange={(value) => handleInputChange('experience', value)} />
      <button className="download-btn" onClick={handleDownload}>Download Resume</button>
      <div ref={resumeRef}>
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
};

export default App;
