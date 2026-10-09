/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectLetter } from './components/ArchitectLetter';
import { MonographWorks } from './components/MonographWorks';
import { OnSiteProcess } from './components/OnSiteProcess';
import { MaterialityLab } from './components/MaterialityLab';
import { InstagramFeed } from './components/InstagramFeed';
import { CinematographySection } from './components/CinematographySection';
import { Monograph } from './components/Monograph';
import { HumanConversation } from './components/HumanConversation';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS, Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [conversationModalOpen, setConversationModalOpen] = useState(false);
  const [conversationTargetProject, setConversationTargetProject] = useState<string>('');

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  const handleOpenConversationFromProject = (projectTitle: string) => {
    setSelectedProject(null);
    setConversationTargetProject(projectTitle);
    setConversationModalOpen(true);
  };

  const handleOpenGeneralConversation = () => {
    setConversationTargetProject('');
    setConversationModalOpen(true);
  };

  const scrollToMonograph = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#eae7e1] font-sans selection:bg-[#c5a880] selection:text-black">
      {/* Whisper-thin Minimalist Monograph Navigation & Menu */}
      <Navbar onOpenCommissionModal={handleOpenGeneralConversation} />

      {/* Monumental Architectural Entrance (Full-viewport, quiet, coordinates) */}
      <Hero
        projects={PROJECTS}
        onSelectProject={handleSelectProject}
        onExploreClick={scrollToMonograph}
      />

      {/* A Personal Note from Dennis Ochieng (Authentic Human Voice & Studio Desk) */}
      <ArchitectLetter />

      {/* Selected Works: Monograph Spreads with Hand-Drafting Blueprint Trace Toggle */}
      <MonographWorks
        projects={PROJECTS}
        onOpenProjectDossier={handleSelectProject}
        onOpenCommission={handleOpenConversationFromProject}
      />

      {/* How We Build: From Dirt to Sanctuary (Raw craftsmanship on site) */}
      <OnSiteProcess />

      {/* The Materiality Archive (Quarried stone, patinated bronze & Belgian oak) */}
      <MaterialityLab />

      {/* Field Diary & Real Dispatches (@dennisbezalel Instagram & Reels) */}
      <InstagramFeed />

      {/* Architectural Motion & Archival Cinematography Reel */}
      <CinematographySection />

      {/* Dennis Ochieng (Bezalel) Monograph Profile & Heritage */}
      <Monograph onOpenCommissionModal={handleOpenGeneralConversation} />

      {/* Direct Personal Conversation (Discrete dialogue, WhatsApp direct & private letter) */}
      <HumanConversation />

      {/* Monolithic Atelier Footer */}
      <Footer />

      {/* Comprehensive Architectural Project Dossier Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseProjectModal}
          onCommission={handleOpenConversationFromProject}
        />
      )}

      {/* Floating Dialogue Dialog when triggered from header or project spread */}
      {conversationModalOpen && (
        <HumanConversation
          isModal={true}
          initialProjectTitle={conversationTargetProject}
          onClose={() => setConversationModalOpen(false)}
        />
      )}
    </div>
  );
}
