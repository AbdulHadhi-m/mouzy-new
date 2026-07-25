import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

// Import official Product Showcase images from src/assets/products/
import p1Img from '../../assets/products/P1.png';
import p2Img from '../../assets/products/P2.png';
import p3Img from '../../assets/products/P3.png';
import p4Img from '../../assets/products/P4.png';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: string;
  stepNum: string;
  title: string;
  tag: string;
  description: string;
  cta: string;
  image: string;
  badgeBg: string;
}

export const ProductsBanner: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  const bgSkyRef = useRef<HTMLDivElement>(null);
  const bgHillsRef = useRef<HTMLDivElement>(null);
  const bgTreesRef = useRef<HTMLDivElement>(null);

  const [currentStep, setCurrentStep] = useState(0);
  const currentStepRef = useRef(0);

  const products: Product[] = [
    {
      id: 'P1',
      stepNum: '01 / 04',
      title: 'Kadakki Special Avil Milk',
      tag: 'BESTSELLER',
      description: 'Our signature original recipe loaded with roasted flattened rice (avil), fresh banana, rich milk, and crushed dry fruits.',
      cta: 'Explore Kadakki',
      image: p1Img,
      badgeBg: 'bg-[#FFF200] text-[#0B6E4F]'
    },
    {
      id: 'P2',
      stepNum: '02 / 04',
      title: 'Pistachio Supreme',
      tag: 'PREMIUM FLAVOR',
      description: 'Infused with natural pistachio essence and topped with crunchy pistachios, roasted avil, and velvety banana puree.',
      cta: 'Discover Pistachio',
      image: p2Img,
      badgeBg: 'bg-[#84CC16] text-white'
    },
    {
      id: 'P3',
      stepNum: '03 / 04',
      title: 'Chocolate Nut Crunch',
      tag: 'CHOC LOVER',
      description: 'Decadent dark chocolate sauce swirled with fresh banana, crispy avil flakes, and roasted cashew nuts.',
      cta: 'Try Chocolate',
      image: p3Img,
      badgeBg: 'bg-[#78350F] text-white'
    },
    {
      id: 'P4',
      stepNum: '04 / 04',
      title: 'Oreo Crunch Avil Milk',
      tag: 'KIDS FAVORITE',
      description: 'Crushed Oreo biscuits layered with rich cream, fresh mashed banana, crispy avil, and chocolate drizzle.',
      cta: 'Order Oreo Crunch',
      image: p4Img,
      badgeBg: 'bg-[#3B82F6] text-white'
    }
  ];

  useEffect(() => {
    const triggerEl = triggerRef.current;
    const pinEl = pinRef.current;

    if (!triggerEl || !pinEl) return;

    const ctx = gsap.context(() => {
      // 1. GSAP ScrollTrigger timeline with precise pinning & spacing calculation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top top',
          end: '+=220%',
          pin: pinEl,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            let step = 0;
            if (p >= 0.75) {
              step = 3;
            } else if (p >= 0.50) {
              step = 2;
            } else if (p >= 0.25) {
              step = 1;
            } else {
              step = 0;
            }

            if (step !== currentStepRef.current) {
              currentStepRef.current = step;
              setCurrentStep(step);
            }
          }
        }
      });

      // 2. Parallax background vector layer animations
      if (bgTreesRef.current) {
        tl.to(bgTreesRef.current, { x: -700, ease: 'none' }, 0);
      }
      if (bgHillsRef.current) {
        tl.to(bgHillsRef.current, { x: -300, ease: 'none' }, 0);
      }
      if (bgSkyRef.current) {
        tl.to(bgSkyRef.current, { x: 350, ease: 'none' }, 0);
      }

      // Refresh ScrollTrigger after DOM renders & images load to prevent layout glitches
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      const handleRefresh = () => ScrollTrigger.refresh();
      window.addEventListener('load', handleRefresh);
      window.addEventListener('resize', handleRefresh);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('load', handleRefresh);
        window.removeEventListener('resize', handleRefresh);
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const currentProduct = products[currentStep];

  return (
    <div ref={triggerRef} id="items" className="relative w-full bg-[#37B249]">
      <div 
        ref={pinRef}
        className="relative w-full h-screen min-h-[640px] bg-[#37B249] overflow-hidden flex flex-col justify-between transform-gpu"
        style={{
          background: 'linear-gradient(180deg, #42c254 0%, #37B249 45%, #2a9e3b 100%)'
        }}
        aria-label="Pinned Products Showcase"
      >

        {/* ------------------------------------------------------------- */}
        {/* 1. VECTOR LAYER: Sunburst Light Rays & Radial Atmosphere       */}
        {/* ------------------------------------------------------------- */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[1100px] h-[750px] pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-b from-[#FACC15]/30 via-[#4ADE80]/20 to-transparent blur-2xl rounded-full transform -rotate-12" />
        </div>

        {/* Glowing Sun Circle */}
        <div className="absolute top-28 sm:top-36 left-8 sm:left-16 w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gradient-to-br from-[#FFF200] to-[#FACC15] blur-sm opacity-85 z-0 shadow-[0_0_80px_#FACC15]" />

        {/* ------------------------------------------------------------- */}
        {/* 2. VECTOR LAYER: Drifting Clouds                               */}
        {/* ------------------------------------------------------------- */}
        <div className="absolute top-28 sm:top-36 left-0 w-full z-10 pointer-events-none overflow-hidden h-28">
          <div 
            ref={bgSkyRef}
            className="w-[2000px] flex items-center justify-between px-12 opacity-80 will-change-transform transform-gpu"
          >
            <div className="flex items-center space-x-16">
              <svg className="w-36 h-20 fill-white/80 drop-shadow-sm" viewBox="0 0 200 100">
                <path d="M 30 60 Q 10 60 10 40 Q 10 20 30 20 Q 40 5 65 5 Q 90 5 95 20 Q 110 10 130 20 Q 185 30 185 50 Q 185 60 165 60 Z" />
              </svg>
            </div>
            <div className="flex items-center space-x-24">
              <svg className="w-48 h-24 fill-white/90 drop-shadow-md" viewBox="0 0 200 100">
                <path d="M 30 60 Q 10 60 10 40 Q 10 20 30 20 Q 40 5 65 5 Q 90 5 95 20 Q 110 10 130 20 Q 185 30 185 50 Q 185 60 165 60 Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. VECTOR LAYER: Panorama Hills                                */}
        {/* ------------------------------------------------------------- */}
        <div 
          ref={bgHillsRef}
          className="absolute inset-x-0 bottom-0 z-0 opacity-50 pointer-events-none will-change-transform transform-gpu"
        >
          <svg viewBox="0 0 2400 180" className="w-[2400px] h-36 fill-[#063e2d]">
            <path d="M 0 180 Q 300 60 600 140 Q 900 40 1200 120 Q 1500 50 1800 140 Q 2100 70 2400 180 Z" />
            <path d="M 0 180 Q 400 90 800 150 Q 1200 70 1600 130 Q 2000 80 2400 180 Z" fill="#08543c" opacity="0.75" />
          </svg>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. VECTOR LAYER: Sleek Smooth Banana Palm Grove                */}
        {/* ------------------------------------------------------------- */}
        <div 
          ref={bgTreesRef}
          className="absolute -bottom-12 z-0 opacity-45 pointer-events-none w-[2800px] flex justify-between px-2 will-change-transform transform-gpu"
        >
          {[0, 1, 2, 3, 4].map((idx) => (
            <div key={idx} className="w-80 sm:w-96 h-[520px] relative overflow-visible">
              <svg viewBox="0 0 420 520" className="w-full h-full overflow-visible drop-shadow-xl">
                {/* Flared Root Base & Sleek Tapered Light Green Trunk */}
                <path d="M 165 520 C 185 450 195 300 208 115 L 222 115 C 230 300 240 450 260 520 Z" fill="#84CC16" stroke="#4ADE80" strokeWidth="2" />
                {/* Trunk Shadow Edge */}
                <path d="M 215 115 C 223 300 230 450 260 520 L 245 520 C 230 450 222 300 208 115 Z" fill="#65A30D" />
                
                {/* 1. TOP ERECT LEAF */}
                <g>
                  <path d="M 210 115 C 190 60 210 10 270 5 C 290 35 295 70 275 105 L 210 115 Z" fill="#84CC16" stroke="#4ADE80" strokeWidth="2" />
                  <path d="M 210 115 Q 240 55 270 5" stroke="#FACC15" strokeWidth="3" fill="none" />
                  <path d="M 225 90 L 245 75 M 240 60 L 260 45" stroke="#BEF264" strokeWidth="1" opacity="0.6" />
                </g>

                {/* 2. TOP RIGHT LEAF */}
                <g>
                  <path d="M 215 115 C 260 80 340 50 395 75 C 380 110 330 135 275 130 L 215 115 Z" fill="#4ADE80" stroke="#22C55E" strokeWidth="2" />
                  <path d="M 215 115 Q 315 90 395 75" stroke="#FEF08A" strokeWidth="3" fill="none" />
                </g>

                {/* 3. TOP LEFT LEAF */}
                <g>
                  <path d="M 205 115 C 160 80 80 50 25 75 C 40 110 90 135 145 130 L 205 115 Z" fill="#84CC16" stroke="#4ADE80" strokeWidth="2" />
                  <path d="M 205 115 Q 105 90 25 75" stroke="#FEF08A" strokeWidth="3" fill="none" />
                </g>

                {/* 4. MID LEFT LEAF */}
                <g>
                  <path d="M 200 120 C 140 110 60 125 15 170 C 45 190 100 185 150 160 L 200 120 Z" fill="#65A30D" stroke="#4ADE80" strokeWidth="2" />
                  <path d="M 200 120 Q 100 140 15 170" stroke="#BEF264" strokeWidth="3" fill="none" />
                </g>

                {/* 5. MID RIGHT HANGING LEAF */}
                <g>
                  <path d="M 220 120 C 240 160 250 210 240 265 C 270 235 290 180 270 135 L 220 120 Z" fill="#4ADE80" stroke="#22C55E" strokeWidth="2" />
                  <path d="M 220 120 Q 240 180 240 265" stroke="#FEF08A" strokeWidth="3" fill="none" />
                </g>

                {/* 6. FAR RIGHT LEAF */}
                <g>
                  <path d="M 225 125 C 285 130 365 170 395 210 C 370 230 310 220 265 180 L 225 125 Z" fill="#84CC16" stroke="#4ADE80" strokeWidth="2" />
                  <path d="M 225 125 Q 315 160 395 210" stroke="#FEF08A" strokeWidth="3" fill="none" />
                </g>

                {/* CURVED STALK & TIERED BANANA BUNCH WITH RED FLOWER */}
                <g>
                  {/* Smooth Green Stalk Arching Down Left */}
                  <path d="M 210 120 Q 190 100 170 120 Q 150 140 160 180" stroke="#84CC16" strokeWidth="9" fill="none" strokeLinecap="round" />
                  <path d="M 210 120 Q 190 100 170 120 Q 150 140 160 180" stroke="#4ADE80" strokeWidth="6" fill="none" strokeLinecap="round" />

                  {/* Tiered Banana Bunch Cluster */}
                  <g transform="translate(115, 140)">
                    {/* Tier 1 */}
                    <g transform="translate(15, 0)">
                      <path d="M 0 10 Q 15 -5 30 10 Q 20 25 0 10 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
                      <path d="M 12 12 Q 27 -3 42 12 Q 32 27 12 12 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="1" />
                      <path d="M 24 14 Q 39 -1 54 14 Q 44 29 24 14 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
                    </g>
                    {/* Tier 2 */}
                    <g transform="translate(10, 18)">
                      <path d="M 0 10 Q 15 -5 30 10 Q 20 25 0 10 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="1" />
                      <path d="M 12 12 Q 27 -3 42 12 Q 32 27 12 12 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
                      <path d="M 24 14 Q 39 -1 54 14 Q 44 29 24 14 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="1" />
                    </g>
                    {/* Tier 3 */}
                    <g transform="translate(5, 36)">
                      <path d="M 0 10 Q 15 -5 30 10 Q 20 25 0 10 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
                      <path d="M 12 12 Q 27 -3 42 12 Q 32 27 12 12 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="1" />
                      <path d="M 24 14 Q 39 -1 54 14 Q 44 29 24 14 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
                    </g>
                    {/* Red Banana Heart Flower Tip */}
                    <path d="M 32 58 C 22 58 18 70 32 88 C 46 70 42 58 32 58 Z" fill="#F43F5E" stroke="#BE123C" strokeWidth="1.5" />
                  </g>
                </g>
              </svg>
            </div>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 5. MAIN CONTENT CARD (Matching Vercel Old Design 100%)         */}
        {/* ------------------------------------------------------------- */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 pb-8 flex-grow flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column: Organic Fluid Blob Card with Cursive Font Title */}
            <div className="lg:col-span-7 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 40, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-[#FEFAD3] text-[#083c16] rounded-[220px_100px_170px_80px/100px_180px_90px_160px] p-8 sm:p-12 sm:px-14 shadow-2xl border-4 border-white/60 relative z-10 max-w-xl"
                >
                  {/* Cursive Brand Title */}
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-accent text-[#083c16] leading-tight mb-4 tracking-wide">
                    {currentProduct.title}
                  </h2>

                  {/* Product Description */}
                  <p className="text-base sm:text-lg font-semibold text-[#083c16]/90 leading-relaxed">
                    {currentProduct.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Standing Monkey Mascot holding Product Cup */}
            <div className="lg:col-span-5 flex justify-center relative select-none">
              <div className="absolute inset-0 bg-[#FFF200]/30 rounded-full blur-3xl transform scale-90 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative z-10 max-w-[300px] sm:max-w-[350px] lg:max-w-[420px] w-full animate-float"
                >
                  <img 
                    src={currentProduct.image} 
                    alt={currentProduct.title} 
                    className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]" 
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
