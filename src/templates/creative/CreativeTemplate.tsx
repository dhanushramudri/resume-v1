import React, { useContext } from 'react';
import { StateContext } from '../../modules/builder/resume/ResumeLayout';
import { SectionValidator } from '../../helpers/common/components/ValidSectionRenderer';
import BasicIntro from '../professional/components/BasicIntro';
import { EducationSection } from '../modern/components/Education';
import { WorkSection } from '../modern/components/Work';
import { SkillsSection } from '../modern/components/Skills';
import { Objective } from '../modern/components/Objective';
import Achievements from '../professional/components/Achievements';

export default function CreativeTemplate() {
  const resumeData = useContext(StateContext);
  const achievements = resumeData.activities?.achievements || [];

  return (
    <div className="max-w-[850px] mx-auto bg-white p-8">
      {/* Header Section - ATS Friendly with clear hierarchy */}
      <header className="mb-6 print:mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {resumeData?.basics.name || 'Your Name'}
        </h1>
        <div className="text-lg text-gray-700">{resumeData.basics?.headline || ''}</div>
        <div className="mt-2">
          <BasicIntro basics={resumeData.basics} />
        </div>
      </header>

      {/* Professional Summary - Clear semantic structure for ATS */}
      <SectionValidator value={resumeData.basics.summary}>
        <section className="mb-6 print:mb-4 page-break-inside-avoid">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 uppercase tracking-wider">
            Professional Summary
          </h2>
          <div className="text-gray-700 leading-relaxed">{resumeData.basics.summary}</div>
        </section>
      </SectionValidator>

      {/* Work Experience - Most important section for ATS */}
      <SectionValidator value={resumeData.work}>
        <section className="mb-6 print:mb-4 page-break-inside-avoid">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 uppercase tracking-wider">
            Professional Experience
          </h2>
          <WorkSection experience={resumeData.work} />
        </section>
      </SectionValidator>

      {/* Education */}
      <SectionValidator value={resumeData.education}>
        <section className="mb-6 print:mb-4 page-break-inside-avoid">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 uppercase tracking-wider">
            Education
          </h2>
          <EducationSection education={resumeData.education} />
        </section>
      </SectionValidator>

      {/* Skills - Optimized for ATS keyword matching */}
      <SectionValidator value={resumeData.skills.languages}>
        <section className="mb-6 print:mb-4 page-break-inside-avoid">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 uppercase tracking-wider">
            Technical Skills
          </h2>
          <SkillsSection
            title="Skills"
            list={resumeData.skills.languages.concat(resumeData.skills.technologies)}
          />
        </section>
      </SectionValidator>

      {/* Achievements */}
      <SectionValidator value={resumeData.achievements}>
        <section className="mb-6 print:mb-4 page-break-inside-avoid">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 uppercase tracking-wider">
            Key Achievements
          </h2>
          <Achievements achievements={achievements} />
        </section>
      </SectionValidator>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .page-break-inside-avoid {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          @page {
            margin: 0.5in;
            size: letter;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
