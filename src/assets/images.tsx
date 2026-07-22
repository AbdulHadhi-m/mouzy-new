import React from 'react';

// Brand Logo SVG
export const MouzyLogo: React.FC<{ className?: string; light?: boolean }> = ({ className = 'h-10', light = false }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 280 80" 
    className={className} 
    aria-label="Mouzy Logo"
  >
    <defs>
      <linearGradient id="mouzyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#106829" />
        <stop offset="100%" stopColor="#1b8a3e" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fdf302" />
        <stop offset="100%" stopColor="#f5e025" />
      </linearGradient>
    </defs>
    
    {/* Stylized Milk Splash and Banana leaf Icon */}
    <g transform="translate(10, 10)">
      <circle cx="30" cy="30" r="28" fill={light ? 'rgba(255,255,255,0.08)' : 'url(#mouzyGrad)'} />
      {/* Cup outline */}
      <path d="M20 18 L24 45 A4 4 0 0 0 28 49 L32 49 A4 4 0 0 0 36 45 L40 18 Z" fill={light ? '#fdf302' : '#ffffff'} />
      {/* Straw */}
      <path d="M34 10 L31 22 M31 22 L27 18" stroke={light ? '#ffffff' : '#fdf302'} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Spilled grains (rice flakes) */}
      <circle cx="15" cy="22" r="2.5" fill="#fdf302" />
      <circle cx="45" cy="26" r="2" fill="#1b8a3e" />
      <circle cx="42" cy="40" r="2.5" fill="#fdf302" />
    </g>

    {/* Text Logo */}
    <text 
      x="85" 
      y="48" 
      fontFamily="Outfit, sans-serif" 
      fontWeight="900" 
      fontSize="36" 
      letterSpacing="1"
      fill={light ? '#ffffff' : 'url(#goldGrad)'}
    >
      MOUZY
    </text>
    
    {/* Subtitle */}
    <text 
      x="87" 
      y="65" 
      fontFamily="Inter, sans-serif" 
      fontWeight="700" 
      fontSize="11" 
      letterSpacing="3"
      fill={light ? 'rgba(255,255,255,0.6)' : '#1b8a3e'}
    >
      AVIL MILK
    </text>
  </svg>
);

// High-fidelity Avil Milk Cup SVG Illustration (For Hero / Section banners)
export const AvilMilkCupIllustration: React.FC<{ className?: string }> = ({ className = 'w-full max-w-sm' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 400 500" 
    className={className} 
    aria-label="A cup of fresh Mouzy Avil Milk"
  >
    <defs>
      <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
      <linearGradient id="milkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fffdef" />
        <stop offset="40%" stopColor="#fdf8cb" />
        <stop offset="100%" stopColor="#f0e2a3" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Glow behind cup */}
    <ellipse cx="200" cy="400" rx="120" ry="40" fill="#106829" opacity="0.3" filter="url(#glow)" />
    
    {/* Bananas (Background Decoration) */}
    <g transform="translate(40, 100) rotate(-15)" opacity="0.9">
      <path d="M 0 50 Q 50 10 120 50 Q 60 100 0 50" fill="#fdf302" stroke="#c9c000" strokeWidth="2" />
      <path d="M 120 50 L 130 55" stroke="#4a3b00" strokeWidth="6" strokeLinecap="round" />
    </g>

    {/* Peanuts / Almonds floaties */}
    <g transform="translate(290, 80) rotate(25)" opacity="0.9">
      <path d="M 0 15 Q 15 0 30 15 Q 15 30 0 15" fill="#e0a96d" stroke="#ad7d4f" strokeWidth="2" />
      <path d="M 50 45 Q 60 35 70 45 Q 60 55 50 45" fill="#8d5b4c" />
    </g>
    
    {/* Glass Cup Body */}
    <path 
      d="M 100 120 L 130 420 A 20 20 0 0 0 150 440 L 250 440 A 20 20 0 0 0 270 420 L 300 120 Z" 
      fill="url(#milkGrad)" 
    />
    
    {/* Inside textures (layers of banana, aval/flakes, nuts) */}
    {/* Aval Layer (Bottom) */}
    <path d="M 127 390 L 130 420 A 20 20 0 0 0 150 440 L 250 440 A 20 20 0 0 0 270 420 L 273 390 Z" fill="#ebd28f" opacity="0.85" />
    {/* Banana chunks inside */}
    <circle cx="150" cy="320" r="14" fill="#fffbeb" opacity="0.9" />
    <circle cx="230" cy="280" r="18" fill="#fffbeb" opacity="0.9" />
    <circle cx="180" cy="380" r="16" fill="#fffbeb" opacity="0.9" />
    
    {/* Peanut bits inside glass */}
    <ellipse cx="140" cy="410" rx="8" ry="4" fill="#a47551" transform="rotate(15, 140, 410)" />
    <ellipse cx="240" cy="370" rx="9" ry="5" fill="#a47551" transform="rotate(-30, 240, 370)" />
    
    {/* Whipped Cream & Ice Cream Scoop on Top */}
    <path d="M 90 120 C 90 70, 160 50, 200 80 C 240 50, 310 70, 310 120 Z" fill="#ffffff" />
    <circle cx="200" cy="95" r="45" fill="#fcf9ea" /> {/* Ice cream scoop */}
    
    {/* Toppings (Rice Flakes, Nuts, Cherry) */}
    {/* Cherry */}
    <circle cx="200" cy="40" r="15" fill="#d00000" />
    <path d="M 200 25 Q 220 5 210 -15" stroke="#470000" strokeWidth="3" fill="none" strokeLinecap="round" />
    
    {/* Roasted Rice Flakes (Aval) Top Sprinkle */}
    <path d="M 160 90 Q 170 85 180 92" stroke="#ebd28f" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M 210 95 Q 225 100 235 90" stroke="#ebd28f" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M 180 75 Q 190 70 200 78" stroke="#ebd28f" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M 230 75 Q 240 82 250 76" stroke="#ebd28f" strokeWidth="4" fill="none" strokeLinecap="round" />
    
    {/* Roasted Nuts Sprinkle */}
    <circle cx="165" cy="70" r="4" fill="#8d5524" />
    <circle cx="225" cy="65" r="5" fill="#ad7d4f" />
    <circle cx="195" cy="85" r="3" fill="#8d5524" />
    <circle cx="240" cy="85" r="4" fill="#ad7d4f" />

    {/* Glass Reflection Highlight */}
    <path 
      d="M 100 120 L 130 420 A 20 20 0 0 0 150 440 L 250 440 A 20 20 0 0 0 270 420 L 300 120 Z" 
      fill="url(#cupGrad)" 
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="2"
    />
    
    {/* Glass Rim highlight */}
    <ellipse cx="200" cy="120" rx="100" ry="10" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />

    {/* Premium Metal Straw */}
    <path 
      d="M 150 -10 L 150 300" 
      stroke="#e2e8f0" 
      strokeWidth="10" 
      strokeLinecap="round" 
      fill="none" 
      transform="rotate(18, 150, 100)"
    />
    <path 
      d="M 150 -10 L 150 300" 
      stroke="#106829" 
      strokeWidth="2" 
      strokeDasharray="10,15"
      fill="none" 
      transform="rotate(18, 150, 100)"
    />
  </svg>
);

// High Quality SVG Illustrations for Product Catalog Flavors
export const FlavorIllustration: React.FC<{ flavor: string; className?: string }> = ({ flavor, className = 'w-16 h-16' }) => {
  const norm = flavor.toLowerCase();
  
  if (norm.includes('badam')) {
    return (
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        {/* Almond illustration */}
        <path d="M 25 50 C 25 30, 45 10, 50 10 C 55 10, 75 30, 75 50 C 75 70, 55 90, 50 90 C 45 90, 25 70, 25 50 Z" fill="#ad7d4f" stroke="#8d5b4c" strokeWidth="2" />
        <path d="M 33 50 Q 50 25 50 15" stroke="#ffd09b" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
        <circle cx="50" cy="70" r="3" fill="#8d5b4c" />
        <circle cx="42" cy="55" r="2.5" fill="#8d5b4c" />
      </svg>
    );
  }
  if (norm.includes('arabian') || norm.includes('date')) {
    return (
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        {/* Arabian Palm Date illustration */}
        <rect x="35" y="20" width="30" height="60" rx="15" fill="#582a20" stroke="#3b1710" strokeWidth="2" />
        <path d="M 40 30 L 40 70 M 60 30 L 60 70" stroke="#773f32" strokeWidth="2" strokeDasharray="3,6" fill="none" />
        <ellipse cx="50" cy="50" rx="8" ry="12" fill="#3b1710" opacity="0.5" />
      </svg>
    );
  }
  if (norm.includes('mango')) {
    return (
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        {/* Mango slice */}
        <path d="M 20 60 Q 30 20 65 20 Q 85 20 80 50 Q 75 80 40 80 Q 25 80 20 60 Z" fill="#ffb007" stroke="#e08200" strokeWidth="2" />
        <path d="M 23 60 Q 40 40 75 35" stroke="#ffe082" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
        <path d="M 12 60 Q 20 85 45 85" stroke="#4caf50" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    );
  }
  if (norm.includes('choco')) {
    return (
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        {/* Chocolate bar */}
        <rect x="25" y="25" width="50" height="50" rx="4" fill="#4e2c14" stroke="#2c1608" strokeWidth="2" />
        <line x1="50" y1="25" x2="50" y2="75" stroke="#2c1608" strokeWidth="2" />
        <line x1="25" y1="50" x2="75" y2="50" stroke="#2c1608" strokeWidth="2" />
        <rect x="30" y="30" width="15" height="15" fill="#6a3e1f" />
        <rect x="55" y="30" width="15" height="15" fill="#6a3e1f" />
        <rect x="30" y="55" width="15" height="15" fill="#6a3e1f" />
        <rect x="55" y="55" width="15" height="15" fill="#6a3e1f" />
      </svg>
    );
  }
  if (norm.includes('pista')) {
    return (
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        {/* Pistachio shell and nut */}
        <path d="M 25 50 C 25 30, 45 20, 50 20 C 55 20, 75 30, 75 50 C 75 70, 55 80, 50 80 C 45 80, 25 70, 25 50 Z" fill="#eed9b3" stroke="#d5be94" strokeWidth="2" />
        <path d="M 40 30 Q 50 10 60 30 Z" fill="#8bc34a" />
        <path d="M 50 20 L 50 80" stroke="#d5be94" strokeWidth="2" />
      </svg>
    );
  }
  if (norm.includes('berry') || norm.includes('fruit')) {
    return (
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        {/* Red Berry / Strawberry */}
        <path d="M 30 30 C 30 15, 70 15, 70 30 C 70 55, 55 85, 50 85 C 45 85, 30 55, 30 30 Z" fill="#d32f2f" stroke="#9a0007" strokeWidth="2" />
        {/* Leaf */}
        <path d="M 40 25 Q 50 10 60 25 Q 50 20 40 25 Z" fill="#388e3c" />
        {/* Seeds */}
        <circle cx="45" cy="40" r="1.5" fill="#fdf302" />
        <circle cx="55" cy="40" r="1.5" fill="#fdf302" />
        <circle cx="50" cy="52" r="1.5" fill="#fdf302" />
        <circle cx="42" cy="62" r="1.5" fill="#fdf302" />
        <circle cx="58" cy="62" r="1.5" fill="#fdf302" />
      </svg>
    );
  }
  if (norm.includes('honey')) {
    return (
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        {/* Honey dipper / jar */}
        <circle cx="50" cy="45" r="25" fill="#ffb300" stroke="#ff8f00" strokeWidth="2" />
        <rect x="42" y="10" width="16" height="15" fill="#ff8f00" />
        <line x1="30" y1="45" x2="70" y2="45" stroke="#fff" strokeWidth="2" opacity="0.6" />
        {/* Honey bee */}
        <ellipse cx="65" cy="30" rx="8" ry="6" fill="#ffe082" />
        <line x1="61" y1="24" x2="61" y2="36" stroke="#000" strokeWidth="1.5" />
        <line x1="67" y1="24" x2="67" y2="36" stroke="#000" strokeWidth="1.5" />
      </svg>
    );
  }
  
  // Default Generic Shake / Drink Icon
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M 35 25 L 40 85 A 6 6 0 0 0 46 90 L 54 90 A 6 6 0 0 0 60 85 L 65 25 Z" fill="#106829" opacity="0.8" />
      <path d="M 32 25 L 68 25" stroke="#fdf302" strokeWidth="4" strokeLinecap="round" />
      <path d="M 52 10 L 48 35" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

// ISO 22000:2018 Badge
export const ISOBadge: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg 
    viewBox="0 0 120 120" 
    className={className}
    aria-label="ISO 22000:2018 Certified Company Badge"
  >
    <defs>
      <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fdf302" />
        <stop offset="100%" stopColor="#c9c000" />
      </linearGradient>
    </defs>
    
    {/* Outer circle */}
    <circle cx="60" cy="60" r="54" fill="none" stroke="url(#badgeGrad)" strokeWidth="3" strokeDasharray="4,2" />
    <circle cx="60" cy="60" r="48" fill="#106829" stroke="url(#badgeGrad)" strokeWidth="2" />
    
    {/* Texts */}
    <text x="60" y="38" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="13" fill="#ffffff" textAnchor="middle">
      ISO 22000
    </text>
    <text x="60" y="52" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="10" fill="#fdf302" textAnchor="middle">
      2018
    </text>
    <text x="60" y="70" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="8" fill="#ffffff" textAnchor="middle" letterSpacing="0.5">
      CERTIFIED
    </text>
    <text x="60" y="84" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="7" fill="rgba(255,255,255,0.7)" textAnchor="middle">
      FOOD SAFETY
    </text>
    
    {/* Decorative stars */}
    <g fill="#fdf302" transform="translate(60, 94) scale(0.6)">
      <polygon points="0,0 2,5 7,5 3,8 5,13 0,10 -5,13 -3,8 -7,5 -2,5" transform="translate(-15, -4)" />
      <polygon points="0,0 2,5 7,5 3,8 5,13 0,10 -5,13 -3,8 -7,5 -2,5" transform="translate(0, -6)" />
      <polygon points="0,0 2,5 7,5 3,8 5,13 0,10 -5,13 -3,8 -7,5 -2,5" transform="translate(15, -4)" />
    </g>
  </svg>
);
