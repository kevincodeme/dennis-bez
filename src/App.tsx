/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ResidencesPage } from './pages/ResidencesPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AtelierPage } from './pages/AtelierPage';
import { MaterialityPage } from './pages/MaterialityPage';
import { CinematographyPage } from './pages/CinematographyPage';
import { ArchitectPage } from './pages/ArchitectPage';
import { FieldDiaryPage } from './pages/FieldDiaryPage';
import { ConversationPage } from './pages/ConversationPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#08080a] text-[#eae7e1] font-sans selection:bg-[#c5a880] selection:text-black flex flex-col justify-between">
        {/* Persistent Luxury Top Bar with Page Links & Redesigned Menu */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/residences" element={<ResidencesPage />} />
            <Route path="/residences/:id" element={<ProjectDetailPage />} />
            <Route path="/atelier" element={<AtelierPage />} />
            <Route path="/materiality" element={<MaterialityPage />} />
            <Route path="/film" element={<CinematographyPage />} />
            <Route path="/cinematography" element={<Navigate to="/film" replace />} />
            <Route path="/architect" element={<ArchitectPage />} />
            <Route path="/field-diary" element={<FieldDiaryPage />} />
            <Route path="/conversation" element={<ConversationPage />} />
            <Route path="/contact" element={<ConversationPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Monolithic Atelier Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
