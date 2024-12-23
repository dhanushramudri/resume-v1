// src/components/resume-builder/index.tsx

import React from 'react';
import { RefreshCw } from 'lucide-react';
import { StepType, useResume } from '../../context/ResumeContext';
import BasicInfoForm from './BasicInfoForm';
import SkillsForm from './SkillsForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import ActivitiesForm from './ActivitiesForm';
import VolunteerForm from './VolunteerForm';
import AwardsForm from './AwardsForm';

const steps = [
  { id: 'basics', label: 'Basic Info' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work Experience' },
  { id: 'education', label: 'Education' },
  { id: 'activities', label: 'Activities' },
  { id: 'volunteer', label: 'Volunteer' },
  { id: 'awards', label: 'Awards' },
];

const ResumeBuilder = () => {
  const { currentStep, setCurrentStep, resetForm } = useResume();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <button
          onClick={resetForm}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          <RefreshCw className="w-4 h-4" />
          Reset
        </button>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(step.id as StepType)}
            className={`px-4 py-2 rounded whitespace-nowrap ${
              currentStep === step.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {currentStep === 'basics' && <BasicInfoForm />}
        {currentStep === 'skills' && <SkillsForm />}
        {currentStep === 'work' && <WorkExperienceForm />}
        {currentStep === 'education' && <EducationForm />}
        {currentStep === 'activities' && <ActivitiesForm />}
        {currentStep === 'volunteer' && <VolunteerForm />}
        {currentStep === 'awards' && <AwardsForm />}
      </div>
    </div>
  );
};

export default ResumeBuilder;
