import React, { useState, useEffect } from 'react';
import { INSTAGRAM_POSTS, INSTAGRAM_HIGHLIGHTS, InstagramPost } from '../data/instagramData';
import { Instagram, Heart, MessageCircle, Eye, ExternalLink, X, MapPin, CheckCircle } from 'lucide-react';
import { portraitDennisDearArtists } from '../assets/images';

export const InstagramFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  // Close modal on Escape
  useEffect(() => {
    if (!selectedPost) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPost(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPost]);

  return (
    <section id="instagram-feed" className="w-full py-28 sm:py-36 bg-[#09090b] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Instagram Profile Header Lockup */}
        <div className="bg-[#111115] border border-white/10 p-6 sm:p-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
            {/* Profile Avatar & Bio */}
            <div className="flex items-start sm:items-center gap-6">
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#c5a880] via-[#dfc7a5] to-[#8c7150]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img
                      src={portraitDennisDearArtists}
                      alt="Dennis Bezalel"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#c5a880] p-1.5 rounded-full text-black">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                    @dennisbezalel
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] font-sans text-[#c5a880] tracking-wider uppercase bg-[#181820] px-2.5 py-0.5 border border-[#c5a880]/30">
                    <CheckCircle className="w-3 h-3 text-[#c5a880]" />
                    <span>Verified Creator</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#c8c5be] font-sans max-w-xl leading-relaxed mb-3">
                  <strong className="text-white">Dennis Bezalel (Dennis Ochieng)</strong> — Architectural Designer & Creative Director. Documenting bespoke luxury residences, Bentley suites, modern farmhouses & private aviation. Nairobi · Dubai.
                </p>

                {/* Engagement Metrics */}
                <div className="flex items-center gap-6 text-xs text-[#9e9b94] font-sans">
                  <span>
                    <strong className="text-white font-mono">1M+</strong> Followers
                  </span>
                  <span>·</span>
                  <span>
                    <strong className="text-white font-mono">20M+</strong> Views
                  </span>
                  <span>·</span>
                  <span>
                    <strong className="text-white font-mono">50+</strong> Productions
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Instagram Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://www.instagram.com/dennisbezalel/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs font-sans font-medium uppercase tracking-[0.2em] transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 border border-white/20 hover:border-white text-white text-xs font-sans uppercase tracking-[0.2em] transition-colors flex items-center gap-2"
              >
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>

          {/* Real Instagram Story Highlights Strip (from Dennis's real profile in video) */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-[10px] uppercase tracking-widest text-[#9e9b94] font-sans block mb-4">
              Featured Profile Stories & Highlights
            </span>
            <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none">
              {INSTAGRAM_HIGHLIGHTS.map((hl) => (
                <a
                  key={hl.id}
                  href="https://www.instagram.com/dennisbezalel/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer"
                >
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2px] border border-white/30 group-hover:border-[#c5a880] transition-colors">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <img
                        src={hl.coverImage}
                        alt={hl.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <span className="text-[11px] text-[#c8c5be] group-hover:text-[#c5a880] font-sans transition-colors">
                    {hl.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-8 mb-10 gap-4">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-2">
              Live Field Dispatches · @dennisbezalel
            </span>
            <h2
              className="text-2xl sm:text-4xl font-serif text-[#f4f2ee] font-normal leading-tight"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Documented Real Projects & Walkthroughs
            </h2>
          </div>

          <a
            href="https://www.instagram.com/dennisbezalel/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#c5a880] hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-widest font-sans font-medium"
          >
            <span>View All Instagram Reels</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Grid of Real Instagram Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-[#121216] border border-white/10 hover:border-[#c5a880]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Media Container with Reel Overlay */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-black">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />

                {/* Top Corner Instagram Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/15 text-[10px] text-white font-sans uppercase tracking-widest">
                  <Instagram className="w-3 h-3 text-[#c5a880]" />
                  <span>@dennisbezalel</span>
                </div>

                {/* Views Counter */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/15 text-xs text-white/90 font-mono">
                  <Eye className="w-3 h-3 text-[#c5a880]" />
                  <span>{post.views}</span>
                </div>

                {/* Location Stamp */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[11px] text-[#c8c5be] font-sans">
                  <MapPin className="w-3 h-3 text-[#c5a880]" />
                  <span>{post.location}</span>
                </div>
              </div>

              {/* Text / Caption Container */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-white group-hover:text-[#c5a880] transition-colors mb-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-[#9e9b94] font-sans font-light line-clamp-3 leading-relaxed mb-4">
                    {post.caption}
                  </p>
                </div>

                {/* Engagement Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9e9b94] font-sans">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-white/60" />
                      <span>{post.comments}</span>
                    </span>
                  </div>

                  <span className="text-[#c5a880] group-hover:underline text-[11px] uppercase tracking-wider font-medium flex items-center gap-1">
                    <span>Inspect Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Post Lightbox Modal */}
      {selectedPost && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedPost(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
        >
          <div className="relative w-full max-w-4xl bg-[#101014] border border-white/15 flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
            {/* Modal Image */}
            <div className="md:w-3/5 bg-black relative flex items-center justify-center overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover max-h-[60vh] md:max-h-full"
              />
              <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 border border-white/20 text-xs text-white flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>@dennisbezalel</span>
              </div>
            </div>

            {/* Modal Caption and Link */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#121217] border-t md:border-t-0 md:border-l border-white/10">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={portraitDennisDearArtists}
                      alt="Dennis"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">dennisbezalel</span>
                      <span className="text-[10px] text-[#9e9b94]">{selectedPost.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-1 text-[#9e9b94] hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-serif text-xl text-white mb-2">
                  {selectedPost.title}
                </h3>

                <p className="text-xs text-[#c8c5be] font-sans font-light leading-relaxed mb-6">
                  {selectedPost.caption}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selectedPost.tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] text-[#c5a880] font-sans">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center text-xs">
                  <div>
                    <span className="block font-mono text-white text-sm">{selectedPost.views}</span>
                    <span className="text-[10px] uppercase text-[#9e9b94]">Views</span>
                  </div>
                  <div>
                    <span className="block font-mono text-white text-sm">{selectedPost.likes}</span>
                    <span className="text-[10px] uppercase text-[#9e9b94]">Likes</span>
                  </div>
                  <div>
                    <span className="block font-mono text-white text-sm">{selectedPost.comments}</span>
                    <span className="text-[10px] uppercase text-[#9e9b94]">Comments</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={selectedPost.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs font-sans font-medium uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Open on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
