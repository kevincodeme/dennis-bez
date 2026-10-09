import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Calendar, Ruler, Layers, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[currentIndex] || PROJECTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const allImages = project.galleryImages.length > 0 ? project.galleryImages : [project.heroImage];
  const currentImage = allImages[activeImageIndex] || project.heroImage;

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen">
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white border border-white/20 hover:border-[#c5a880] cursor-pointer z-50"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white border border-white/20 hover:border-[#c5a880] cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) => (prev + 1) % allImages.length);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white border border-white/20 hover:border-[#c5a880] cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <img
            src={currentImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Navigation Breadcrumbs & Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
            <Link to="/" className="hover:text-white transition-colors">
              Atelier
            </Link>
            <span>/</span>
            <Link to="/residences" className="hover:text-white transition-colors">
              Residences
            </Link>
            <span>/</span>
            <span className="text-[#c5a880]">{project.title}</span>
          </div>

          <Link
            to="/residences"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8c5be] hover:text-[#c5a880] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Residences</span>
          </Link>
        </div>

        {/* Project Header Title & Metrics */}
        <div className="border-b border-white/10 pb-10 mb-12">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-sans mb-3">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.location}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              {project.title}
            </h1>

            <Link
              to={`/conversation?project=${encodeURIComponent(project.title)}`}
              className="px-6 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfc7a5] transition-colors whitespace-nowrap self-start lg:self-auto shadow-xl"
            >
              Commission Similar Residence
            </Link>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t border-white/10">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9e9b94] font-sans block mb-1">
                Location
              </span>
              <span className="text-sm font-sans text-white font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                {project.location}
              </span>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9e9b94] font-sans block mb-1">
                Project record
              </span>
              <span className="text-sm font-sans text-white font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                Photo archive
              </span>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9e9b94] font-sans block mb-1">
                Area
              </span>
              <span className="text-sm font-sans text-white font-medium flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-[#c5a880]" />
                Not listed
              </span>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9e9b94] font-sans block mb-1">
                Typology
              </span>
              <span className="text-sm font-sans text-white font-medium flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#c5a880]" />
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Gallery Showcase */}
        <div className="mb-16">
          <button
            onClick={() => setLightboxOpen(true)}
            type="button"
            aria-label={`Open ${project.title} image ${activeImageIndex + 1} of ${allImages.length}`}
            className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden bg-black border border-white/15 cursor-zoom-in group shadow-2xl w-full text-left"
          >
            <img
              src={currentImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/80 border border-white/20 text-xs text-[#c5a880] uppercase tracking-widest backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Expand Lightbox (Image {activeImageIndex + 1} of {allImages.length})</span>
            </div>
          </button>

          {/* Thumbnails row */}
          {allImages.length > 1 && (
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  type="button"
                  aria-label={`Show image ${idx + 1}`}
                  aria-pressed={activeImageIndex === idx}
                  className={`relative w-24 sm:w-32 aspect-16/10 overflow-hidden border transition-all cursor-pointer shrink-0 ${
                    activeImageIndex === idx
                      ? 'border-[#c5a880] ring-1 ring-[#c5a880]'
                      : 'border-white/15 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} thumbnail ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Narrative & Architectural Synopsis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-12 border-t border-b border-white/10 mb-16">
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-sans font-medium block mb-3">
              Project Record
            </span>
            <h2
              className="text-2xl sm:text-3xl font-serif text-white font-normal leading-snug"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Photo archive
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#c8c5be] font-light leading-relaxed">
            <p className="text-base sm:text-lg text-[#f4f2ee] font-serif italic">
              "{project.architecturalStatement}"
            </p>
            <p>
              The gallery contains the photographs available in the supplied project archive. Project dates, dimensions and detailed specifications were not included with the images.
            </p>
          </div>
        </div>

        {/* Spatial Zones & Materiality Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Spatial Zones */}
          <div className="border border-white/10 bg-[#0c0c0f] p-8 sm:p-10">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-sans font-medium block mb-6">
              Photographed Spaces
            </span>
            <div className="space-y-6">
              {project.spatialZones?.map((zone, idx) => (
                <div key={idx} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="text-base font-serif text-white mb-1">{zone.name}</h4>
                  <p className="text-xs text-[#9e9b94] leading-relaxed">{zone.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Materiality Breakdown */}
          <div className="border border-white/10 bg-[#0c0c0f] p-8 sm:p-10">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-sans font-medium block mb-6">
              Visible Details
            </span>
            <div className="space-y-4">
              {project.materials?.map((mat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-[#c8c5be]">
                  <span className="w-1.5 h-1.5 bg-[#c5a880] rounded-full shrink-0" />
                  <span>{mat}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                to="/materiality"
                className="text-xs uppercase tracking-widest text-[#c5a880] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <span>View Full Materiality Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Next / Prev Project Navigation */}
        <div className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link
            to={`/residences/${prevProject.id}`}
            className="group p-6 border border-white/10 hover:border-[#c5a880] transition-colors flex items-center justify-between"
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#9e9b94] block mb-1">
                Previous Residence
              </span>
              <span className="text-lg font-serif text-white group-hover:text-[#c5a880] transition-colors">
                {prevProject.title}
              </span>
            </div>
            <ArrowLeft className="w-5 h-5 text-[#9e9b94] group-hover:text-[#c5a880] transition-colors" />
          </Link>

          <Link
            to={`/residences/${nextProject.id}`}
            className="group p-6 border border-white/10 hover:border-[#c5a880] transition-colors flex items-center justify-between sm:text-right"
          >
            <ArrowRight className="w-5 h-5 text-[#9e9b94] group-hover:text-[#c5a880] transition-colors order-2 sm:order-1" />
            <div className="order-1 sm:order-2">
              <span className="text-[10px] uppercase tracking-widest text-[#9e9b94] block mb-1">
                Next Residence
              </span>
              <span className="text-lg font-serif text-white group-hover:text-[#c5a880] transition-colors">
                {nextProject.title}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
