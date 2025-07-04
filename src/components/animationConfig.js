// animationConfig.js
export const ANIMATION_CONFIG = {
  // === SÉLECTEURS DES SECTIONS ===
  selectors: {
    hero: ".hero",
    section1: ".section-1", 
    section2: ".section-2"
  },

  // === TIMING AJUSTÉ ===
  phases: {
    fallEnd: 0.1,
    impactEnd: 0.2,
    disappearEnd: 1.0
  },

  // === DÉCLENCHEMENT DU SCROLL ===
  trigger: {
    start: "top bottom",
    scrub: 1,
    markers: false
  },

  // === DIMENSIONS DU PERSONNAGE ===
  character: {
    width: 300,
    height: 300,
    heroPosition: 70,
    image: "/assets/images/guy.webp"
  },

  // === VITESSE DE CHUTE ===
  fallSpeed: {
    scrollMultiplier: 0.5
  },

  // === PHYSIQUE DE L'ANIMATION ===
  physics: {
    bounceHeight: 40,
    fallEasing: "power2.in",
    bounceEasing: "elastic.out(1, 0.4)",
    disappearDepth: 150
  },

  // === FRAGMENTS ===
  fragments: {
    count: 18,
    sizeRange: { min: 8, max: 20 },
    velocityRange: { x: 300, y: 200 },
    color: "#6D09CE",
    gravity: 0.5,
    friction: 0.98
  },

  // === RESPONSIVE ===
  responsive: {
    mobileBreakpoint: 768,
    mobileScale: 0.7
  },

  // === Z-INDEX ===
  zIndex: {
    overlay: 100,
    character: 101,
    fragmentsBehind: 100,
    fragmentsFront: 102,
    behindSection2: 1
  }
};

export function createFragments() {
  const config = ANIMATION_CONFIG.fragments;
  
  return Array.from({ length: config.count }, (_, i) => ({
    id: i,
    size: Math.random() * (config.sizeRange.max - config.sizeRange.min) + config.sizeRange.min,
    xVelocity: (Math.random() - 0.5) * config.velocityRange.x,
    yVelocity: -(Math.random() * config.velocityRange.y + 50),
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
    color: config.color,
    startX: (Math.random() - 0.5) * 100,
    startY: (Math.random() - 0.5) * 50,
    type: Math.random() < 0.7 ? 'triangle' : 'square',
    zLayer: Math.random() < 0.5 ? 'behind' : 'front'
  }));
}

export function getResponsiveScale() {
  if (typeof window === 'undefined') return 1;
  return window.innerWidth <= ANIMATION_CONFIG.responsive.mobileBreakpoint 
    ? ANIMATION_CONFIG.responsive.mobileScale 
    : 1;
}
