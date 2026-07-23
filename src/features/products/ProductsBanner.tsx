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
  const fgLeavesRef = useRef<HTMLDivElement>(null);

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
      // 1. Create a pure GSAP Timeline for silky 60-120 FPS scrubbing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top top',
          end: '+=240%',
          pin: pinEl,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            let step = 0;
            if (p >= 0.80) {
              step = 3;
            } else if (p >= 0.50) {
              step = 2;
            } else if (p >= 0.20) {
              step = 1;
            } else {
              step = 0;
            }

            // Only update React state when step changes
            if (step !== currentStepRef.current) {
              currentStepRef.current = step;
              setCurrentStep(step);
            }
          }
        }
      });

      // 2. Hardware-accelerated GPU timeline animations (Zero JS scroll overhead!)
      if (bgTreesRef.current) {
        tl.to(bgTreesRef.current, { x: -650, ease: 'none' }, 0);
      }
      if (bgHillsRef.current) {
        tl.to(bgHillsRef.current, { x: -300, ease: 'none' }, 0);
      }
      if (bgSkyRef.current) {
        tl.to(bgSkyRef.current, { x: -100, ease: 'none' }, 0);
      }
      if (fgLeavesRef.current) {
        tl.to(fgLeavesRef.current, { x: 450, ease: 'none' }, 0);
      }

      // Refresh ScrollTrigger to recalculate exact offsets after assets render
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      const handleLoad = () => ScrollTrigger.refresh();
      window.addEventListener('load', handleLoad);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('load', handleLoad);
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const currentProduct = products[currentStep];

  return (
    <div ref={triggerRef} id="products-banner" className="relative w-full bg-[#37B249]">
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
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[1100px] h-[750px] pointer-events-none z-0 animate-light-ray">
          <div className="w-full h-full bg-gradient-to-b from-[#FACC15]/30 via-[#4ADE80]/20 to-transparent blur-2xl rounded-full transform -rotate-12" />
        </div>

        {/* Glowing Sun Circle */}
        <div className="absolute top-36 left-16 w-28 h-28 rounded-full bg-gradient-to-br from-[#FFF200] to-[#FACC15] blur-sm opacity-85 z-0 shadow-[0_0_80px_#FACC15]" />

        {/* ------------------------------------------------------------- */}
        {/* 2. VECTOR LAYER: Flying Birds & Drifting Clouds                 */}
        {/* ------------------------------------------------------------- */}
        <div className="absolute top-36 left-0 w-full z-10 pointer-events-none overflow-hidden h-28">
          <div 
            ref={bgSkyRef}
            className="animate-birds-fly flex items-center space-x-9 text-[#FACC15]/90 will-change-transform transform-gpu"
          >
            <svg className="w-8 h-8 fill-current drop-shadow-sm" viewBox="0 0 24 24">
              <path d="M2.5 12c3-4.5 6-4.5 9.5 0c3.5-4.5 6.5-4.5 9.5 0c-3 2-6 2-9.5-1.5c-3.5 3.5-6.5 3.5-9.5 1.5z"/>
            </svg>
            <svg className="w-5 h-5 fill-current opacity-80 transform -translate-y-3" viewBox="0 0 24 24">
              <path d="M2.5 12c3-4.5 6-4.5 9.5 0c3.5-4.5 6.5-4.5 9.5 0c-3 2-6 2-9.5-1.5c-3.5 3.5-6.5 3.5-9.5 1.5z"/>
            </svg>
            <svg className="w-6 h-6 fill-current opacity-95 transform translate-y-1" viewBox="0 0 24 24">
              <path d="M2.5 12c3-4.5 6-4.5 9.5 0c3.5-4.5 6.5-4.5 9.5 0c-3 2-6 2-9.5-1.5c-3.5 3.5-6.5 3.5-9.5 1.5z"/>
            </svg>
          </div>
        </div>

        {/* Drifting Vector Clouds */}
        <div className="absolute inset-x-0 top-36 z-0 opacity-35 pointer-events-none overflow-hidden h-36">
          <div className="absolute top-2 left-0 w-[500px] h-28 animate-cloud-slow">
            <svg viewBox="0 0 300 80" fill="#F8FAFC" className="w-full h-full">
              <path d="M 30 60 Q 10 60 10 40 Q 10 20 30 20 Q 40 5 65 5 Q 90 5 95 20 Q 110 10 130 20 Q 185 30 185 50 Q 185 60 165 60 Z" />
            </svg>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. VECTOR LAYER: Ultra-Wide 3D Rolling Hills Panorama          */}
        {/* ------------------------------------------------------------- */}
        <div 
          ref={bgHillsRef}
          className="absolute inset-x-0 bottom-0 z-0 opacity-45 pointer-events-none will-change-transform transform-gpu"
        >
          <svg viewBox="0 0 2400 180" className="w-[2400px] h-36 fill-[#063e2d]">
            <path d="M 0 180 Q 300 60 600 140 Q 900 40 1200 120 Q 1500 50 1800 140 Q 2100 70 2400 180 Z" />
            <path d="M 0 180 Q 400 90 800 150 Q 1200 70 1600 130 Q 2000 80 2400 180 Z" fill="#08543c" opacity="0.75" />
          </svg>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. VECTOR LAYER: Extended 6-Tree Ultra-Detailed 3D Banana Grove */}
        {/* ------------------------------------------------------------- */}
        <div 
          ref={bgTreesRef}
          className="absolute bottom-0 z-0 opacity-95 pointer-events-none w-[2500px] flex justify-between px-4 will-change-transform transform-gpu"
        >
          {/* Tree 1 (Far Left - Ultra Detailed with Abundant Bananas) */}
          <div className="w-84 sm:w-96 h-96 relative animate-tree-sway">
            <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-md">
              {/* Pseudostem Trunk */}
              <path d="M 210 420 C 216 290 204 200 222 135 C 226 200 230 290 238 420 Z" fill="#4A2E1B" stroke="#25150B" strokeWidth="3.5" />
              <path d="M 213 340 C 222 315 230 315 235 340" fill="none" stroke="#25150B" strokeWidth="2.5" />
              <path d="M 215 270 C 223 245 228 245 234 270" fill="none" stroke="#25150B" strokeWidth="2.5" />

              {/* Fronds */}
              <g className="animate-frond-left">
                <path d="M 222 135 C 150 50 50 55 10 120 C 70 112 145 120 222 135 Z" fill="#4ADE80" stroke="#10B981" strokeWidth="3" />
                <path d="M 222 135 C 150 50 50 55 10 120" fill="none" stroke="#86EFAC" strokeWidth="2.5" strokeDasharray="6 3" />
              </g>
              <g className="animate-frond-left" style={{ animationDelay: '0.3s' }}>
                <path d="M 222 135 C 165 30 70 0 10 40 C 70 48 145 85 222 135 Z" fill="#84CC16" stroke="#10B981" strokeWidth="3" />
                <path d="M 222 135 C 165 30 70 0 10 40" fill="none" stroke="#FEF08A" strokeWidth="2.5" />
              </g>
              <g className="animate-frond-right">
                <path d="M 222 135 C 280 30 370 0 420 40 C 360 48 290 85 222 135 Z" fill="#4ADE80" stroke="#10B981" strokeWidth="3" />
                <path d="M 222 135 C 280 30 370 0 420 40" fill="none" stroke="#86EFAC" strokeWidth="2.5" />
              </g>

              {/* Dense Multi-Tier Heavy Yellow Banana Bunch */}
              <g transform="translate(206, 138)">
                <path d="M 16 -5 Q 20 20 16 40 Q 12 70 16 120" fill="none" stroke="#65A30D" strokeWidth="6" strokeLinecap="round" />
                {/* Tier 1 */}
                <g transform="translate(0, 10)">
                  <path d="M -26 0 C -48 24 -52 55 -30 80 C -18 55 -18 28 -26 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M -12 0 C -30 28 -34 60 -18 85 C -6 60 -6 30 -12 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 12 0 C 30 28 34 60 18 85 C 6 60 6 30 12 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 26 0 C 48 24 52 55 30 80 C 18 55 18 28 26 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                {/* Tier 2 */}
                <g transform="translate(0, 35)">
                  <path d="M -22 0 C -42 22 -46 50 -26 72 C -14 50 -14 25 -22 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M -8 0 C -24 25 -28 52 -14 76 C -4 52 -4 25 -8 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 8 0 C 24 25 28 52 14 76 C 4 52 4 25 8 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 22 0 C 42 22 46 50 26 72 C 14 50 14 25 22 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                {/* Tier 3 */}
                <g transform="translate(0, 60)">
                  <path d="M -16 0 C -32 18 -36 42 -20 62 C -10 42 -10 20 -16 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 0 0 C -12 20 -14 44 0 65 C 8 44 8 20 0 0 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 16 0 C 32 18 36 42 20 62 C 10 42 10 20 16 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                {/* Banana Heart Blossom */}
                <path d="M 16 122 C 4 135 16 160 16 160 C 16 160 28 135 16 122 Z" fill="#881337" stroke="#4C0519" strokeWidth="2.5" />
              </g>
            </svg>
          </div>

          {/* Tree 2 (Left Mid - Ultra Detailed with Abundant Bananas) */}
          <div className="w-84 sm:w-96 h-96 relative animate-tree-sway" style={{ animationDelay: '0.8s' }}>
            <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-md">
              <path d="M 200 420 C 194 290 206 200 188 135 C 184 200 180 290 172 420 Z" fill="#3D2314" stroke="#25150B" strokeWidth="3.5" />
              <path d="M 197 340 C 188 315 180 315 175 340" fill="none" stroke="#25150B" strokeWidth="2.5" />
              <g className="animate-frond-left">
                <path d="M 188 135 C 130 60 40 60 10 120 C 70 112 130 120 188 135 Z" fill="#84CC16" stroke="#10B981" strokeWidth="3" />
                <path d="M 188 135 C 130 60 40 60 10 120" fill="none" stroke="#FEF08A" strokeWidth="2.5" />
              </g>
              <g className="animate-frond-right">
                <path d="M 188 135 C 245 30 335 0 395 40 C 335 48 265 85 188 135 Z" fill="#4ADE80" stroke="#10B981" strokeWidth="3" />
                <path d="M 188 135 C 245 30 335 0 395 40" fill="none" stroke="#86EFAC" strokeWidth="2.5" />
              </g>
              <g transform="translate(172, 138)">
                <path d="M 16 -5 Q 20 20 16 40 Q 12 70 16 120" fill="none" stroke="#65A30D" strokeWidth="6" strokeLinecap="round" />
                <g transform="translate(0, 10)">
                  <path d="M -26 0 C -48 24 -52 55 -30 80 C -18 55 -18 28 -26 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M -12 0 C -30 28 -34 60 -18 85 C -6 60 -6 30 -12 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 12 0 C 30 28 34 60 18 85 C 6 60 6 30 12 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 26 0 C 48 24 52 55 30 80 C 18 55 18 28 26 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <g transform="translate(0, 35)">
                  <path d="M -22 0 C -42 22 -46 50 -26 72 C -14 50 -14 25 -22 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 0 0 C -12 20 -14 44 0 65 C 8 44 8 20 0 0 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 22 0 C 42 22 46 50 26 72 C 14 50 14 25 22 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <path d="M 16 122 C 4 135 16 160 16 160 C 16 160 28 135 16 122 Z" fill="#881337" stroke="#4C0519" strokeWidth="2.5" />
              </g>
            </svg>
          </div>

          {/* Tree 3 (Center Left - Ultra Detailed with Abundant Bananas) */}
          <div className="w-84 sm:w-96 h-96 relative animate-tree-sway" style={{ animationDelay: '1.4s' }}>
            <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-md">
              <path d="M 210 420 C 216 290 204 200 222 135 C 226 200 230 290 238 420 Z" fill="#4A2E1B" stroke="#25150B" strokeWidth="3.5" />
              <g className="animate-frond-left">
                <path d="M 222 135 C 150 50 50 55 10 120 C 70 112 145 120 222 135 Z" fill="#4ADE80" stroke="#10B981" strokeWidth="3" />
              </g>
              <g className="animate-frond-right">
                <path d="M 222 135 C 280 30 370 0 420 40 C 360 48 290 85 222 135 Z" fill="#84CC16" stroke="#10B981" strokeWidth="3" />
              </g>
              <g transform="translate(206, 138)">
                <path d="M 16 -5 Q 20 20 16 40 Q 12 70 16 120" fill="none" stroke="#65A30D" strokeWidth="6" strokeLinecap="round" />
                <g transform="translate(0, 10)">
                  <path d="M -26 0 C -48 24 -52 55 -30 80 C -18 55 -18 28 -26 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M -12 0 C -30 28 -34 60 -18 85 C -6 60 -6 30 -12 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 12 0 C 30 28 34 60 18 85 C 6 60 6 30 12 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 26 0 C 48 24 52 55 30 80 C 18 55 18 28 26 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <g transform="translate(0, 35)">
                  <path d="M -22 0 C -42 22 -46 50 -26 72 C -14 50 -14 25 -22 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 22 0 C 42 22 46 50 26 72 C 14 50 14 25 22 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <path d="M 16 122 C 4 135 16 160 16 160 C 16 160 28 135 16 122 Z" fill="#881337" stroke="#4C0519" strokeWidth="2.5" />
              </g>
            </svg>
          </div>

          {/* Tree 4 (Center Right - Ultra Detailed with Abundant Bananas) */}
          <div className="w-84 sm:w-96 h-96 relative animate-tree-sway" style={{ animationDelay: '0.4s' }}>
            <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-md">
              <path d="M 200 420 C 194 290 206 200 188 135 C 184 200 180 290 172 420 Z" fill="#3D2314" stroke="#25150B" strokeWidth="3.5" />
              <g className="animate-frond-left">
                <path d="M 188 135 C 130 60 40 60 10 120 C 70 112 130 120 188 135 Z" fill="#84CC16" stroke="#10B981" strokeWidth="3" />
              </g>
              <g className="animate-frond-right">
                <path d="M 188 135 C 245 30 335 0 395 40 C 335 48 265 85 188 135 Z" fill="#4ADE80" stroke="#10B981" strokeWidth="3" />
              </g>
              <g transform="translate(172, 138)">
                <path d="M 16 -5 Q 20 20 16 40 Q 12 70 16 120" fill="none" stroke="#65A30D" strokeWidth="6" strokeLinecap="round" />
                <g transform="translate(0, 10)">
                  <path d="M -26 0 C -48 24 -52 55 -30 80 C -18 55 -18 28 -26 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M -12 0 C -30 28 -34 60 -18 85 C -6 60 -6 30 -12 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 12 0 C 30 28 34 60 18 85 C 6 60 6 30 12 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 26 0 C 48 24 52 55 30 80 C 18 55 18 28 26 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <g transform="translate(0, 35)">
                  <path d="M -22 0 C -42 22 -46 50 -26 72 C -14 50 -14 25 -22 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 22 0 C 42 22 46 50 26 72 C 14 50 14 25 22 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <path d="M 16 122 C 4 135 16 160 16 160 C 16 160 28 135 16 122 Z" fill="#881337" stroke="#4C0519" strokeWidth="2.5" />
              </g>
            </svg>
          </div>

          {/* Tree 5 (Right Mid - Ultra Detailed with Abundant Bananas) */}
          <div className="w-84 sm:w-96 h-96 relative animate-tree-sway" style={{ animationDelay: '1.6s' }}>
            <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-md">
              <path d="M 210 420 C 216 290 204 200 222 135 C 226 200 230 290 238 420 Z" fill="#4A2E1B" stroke="#25150B" strokeWidth="3.5" />
              <g className="animate-frond-left">
                <path d="M 222 135 C 150 50 50 55 10 120 C 70 112 145 120 222 135 Z" fill="#4ADE80" stroke="#10B981" strokeWidth="3" />
              </g>
              <g className="animate-frond-right">
                <path d="M 222 135 C 280 30 370 0 420 40 C 360 48 290 85 222 135 Z" fill="#84CC16" stroke="#10B981" strokeWidth="3" />
              </g>
              <g transform="translate(206, 138)">
                <path d="M 16 -5 Q 20 20 16 40 Q 12 70 16 120" fill="none" stroke="#65A30D" strokeWidth="6" strokeLinecap="round" />
                <g transform="translate(0, 10)">
                  <path d="M -26 0 C -48 24 -52 55 -30 80 C -18 55 -18 28 -26 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M -12 0 C -30 28 -34 60 -18 85 C -6 60 -6 30 -12 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 12 0 C 30 28 34 60 18 85 C 6 60 6 30 12 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 26 0 C 48 24 52 55 30 80 C 18 55 18 28 26 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <g transform="translate(0, 35)">
                  <path d="M -22 0 C -42 22 -46 50 -26 72 C -14 50 -14 25 -22 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 22 0 C 42 22 46 50 26 72 C 14 50 14 25 22 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <path d="M 16 122 C 4 135 16 160 16 160 C 16 160 28 135 16 122 Z" fill="#881337" stroke="#4C0519" strokeWidth="2.5" />
              </g>
            </svg>
          </div>

          {/* Tree 6 (Far Right - Ultra Detailed with Abundant Bananas) */}
          <div className="w-84 sm:w-96 h-96 relative animate-tree-sway" style={{ animationDelay: '1.0s' }}>
            <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-md">
              <path d="M 200 420 C 194 290 206 200 188 135 C 184 200 180 290 172 420 Z" fill="#3D2314" stroke="#25150B" strokeWidth="3.5" />
              <g className="animate-frond-left">
                <path d="M 188 135 C 130 60 40 60 10 120 C 70 112 130 120 188 135 Z" fill="#84CC16" stroke="#10B981" strokeWidth="3" />
              </g>
              <g className="animate-frond-right">
                <path d="M 188 135 C 245 30 335 0 395 40 C 335 48 265 85 188 135 Z" fill="#4ADE80" stroke="#10B981" strokeWidth="3" />
              </g>
              <g transform="translate(172, 138)">
                <path d="M 16 -5 Q 20 20 16 40 Q 12 70 16 120" fill="none" stroke="#65A30D" strokeWidth="6" strokeLinecap="round" />
                <g transform="translate(0, 10)">
                  <path d="M -26 0 C -48 24 -52 55 -30 80 C -18 55 -18 28 -26 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M -12 0 C -30 28 -34 60 -18 85 C -6 60 -6 30 -12 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 12 0 C 30 28 34 60 18 85 C 6 60 6 30 12 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 26 0 C 48 24 52 55 30 80 C 18 55 18 28 26 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <g transform="translate(0, 35)">
                  <path d="M -22 0 C -42 22 -46 50 -26 72 C -14 50 -14 25 -22 0 Z" fill="#FFF200" stroke="#CA8A04" strokeWidth="2.5" />
                  <path d="M 22 0 C 42 22 46 50 26 72 C 14 50 14 25 22 0 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
                </g>
                <path d="M 16 122 C 4 135 16 160 16 160 C 16 160 28 135 16 122 Z" fill="#881337" stroke="#4C0519" strokeWidth="2.5" />
              </g>
            </svg>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 5. VECTOR LAYER: Floating Leaves & Shimmer Particles            */}
        {/* ------------------------------------------------------------- */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="absolute top-20 left-10 animate-leaf-sway-1 opacity-85">
            <svg className="w-10 h-10 text-[#4ADE80] fill-current drop-shadow-md" viewBox="0 0 24 24">
              <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3A32.2,32.2,0,0,0,17,8Z"/>
            </svg>
          </div>
          <div className="absolute top-1/2 right-1/4 animate-leaf-sway-2 opacity-75">
            <svg className="w-8 h-8 text-[#84CC16] fill-current drop-shadow-md" viewBox="0 0 24 24">
              <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3A32.2,32.2,0,0,0,17,8Z"/>
            </svg>
          </div>
          <div className="absolute top-1/3 left-1/4 w-2.5 h-2.5 rounded-full bg-[#FFF200] blur-[1px] animate-particle" />
          <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-[#4ADE80] blur-[1px] animate-particle" style={{ animationDelay: '1.8s' }} />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 5. MAIN PINNED SHOWCASE: Fixed Left Card & Animated Right Image */}
        {/* ------------------------------------------------------------- */}
        <div className="max-w-7xl mx-auto w-full z-20 relative my-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px] sm:min-h-[520px]">
            
            {/* LEFT COLUMN: Fixed Organic Panel (#FEFAD3) with Smooth Content Transitions */}
            <div className="lg:col-span-7 flex justify-center lg:justify-start relative">
              <div 
                className="bg-[#FEFAD3] p-8 sm:p-14 text-left max-w-xl relative flex flex-col justify-center space-y-4 sm:space-y-5 shadow-2xl border border-white/50 backdrop-blur-sm transition-all duration-500"
                style={{
                  borderRadius: '55% 45% 70% 30% / 40% 60% 40% 60%'
                }}
              >
                {/* Animated Product Title */}
                <AnimatePresence mode="wait">
                  <motion.h3 
                    key={currentProduct.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="text-2xl sm:text-5xl font-extrabold font-accent text-[#0B6E4F] tracking-wide leading-tight drop-shadow-sm"
                  >
                    {currentProduct.title}
                  </motion.h3>
                </AnimatePresence>

                {/* Animated Product Description */}
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentProduct.description}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="text-xs sm:text-base text-[#0B6E4F] leading-relaxed font-semibold max-w-md"
                  >
                    {currentProduct.description}
                  </motion.p>
                </AnimatePresence>

              </div>
            </div>

            {/* RIGHT COLUMN: Pinned Animated Product Showcase (Increased Image Size for Mobile Phone Users) */}
            <div className="lg:col-span-5 flex justify-center items-center relative min-h-[300px] sm:min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentProduct.id}
                  initial={{ opacity: 0, scale: 0.82, rotate: -8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, rotate: 8, y: -30 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] max-w-[88vw] h-auto relative z-20 animate-float"
                >
                  {/* Drop Shadow Underneath Image */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 rounded-full blur-lg z-0" />
                  
                  {/* Product Showcase Image */}
                  <img 
                    src={currentProduct.image} 
                    alt={currentProduct.title} 
                    className="w-full h-auto object-contain relative z-10 drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 6. LAYER: Foreground Depth-of-Field Blur Leaves                */}
        {/* ------------------------------------------------------------- */}
        <div 
          ref={fgLeavesRef}
          className="absolute top-8 -right-6 z-30 pointer-events-none opacity-80 will-change-transform transform-gpu"
        >
          <svg className="w-28 h-28 text-[#10B981] fill-current transform rotate-45" viewBox="0 0 24 24">
            <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3A32.2,32.2,0,0,0,17,8Z"/>
          </svg>
        </div>

      </div>
    </div>
  );
};
