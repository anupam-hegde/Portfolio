'use client';

import { useEffect, useRef } from 'react';

// --- Types ---
interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  layer: number;
  color: [number, number, number]; // realistic star color
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: [number, number, number];
  opacity: number;
  driftX: number;
  driftY: number;
  phase: number;
}

interface CosmicDust {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  color: [number, number, number];
  angle: number;
  drift: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
  thickness: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
  thickness: number;
  glowSize: number;
  color: [number, number, number];
  fragments: { x: number; y: number; vx: number; vy: number; opacity: number; size: number }[];
}

// --- Realistic star color temperatures (Kelvin-inspired) ---
function getStarColor(): [number, number, number] {
  const r = Math.random();
  if (r < 0.05) return [255, 120, 80];    // red giant (M-class)
  if (r < 0.15) return [255, 180, 120];   // orange (K-class)
  if (r < 0.35) return [255, 230, 180];   // warm yellow (G-class, sun-like)
  if (r < 0.55) return [255, 245, 230];   // white-yellow (F-class)
  if (r < 0.80) return [220, 230, 255];   // white-blue (A-class)
  if (r < 0.93) return [180, 200, 255];   // blue-white (B-class)
  return [160, 180, 255];                  // hot blue (O-class)
}

// --- Initialization ---
function createStars(w: number, h: number, count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const layer = Math.random() < 0.55 ? 0 : Math.random() < 0.65 ? 1 : 2;
    const maxSize = layer === 2 ? 2.8 : layer === 1 ? 1.6 : 0.7;
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 0.2 + Math.random() * maxSize,
      baseOpacity: 0.15 + Math.random() * 0.85,
      twinkleSpeed: 0.3 + Math.random() * 2.5,
      twinkleOffset: Math.random() * Math.PI * 2,
      layer,
      color: getStarColor(),
    });
  }
  return stars;
}

function createNebulae(w: number, h: number): Nebula[] {
  const palette: [number, number, number][] = [
    [20, 60, 120],    // deep blue
    [60, 20, 100],    // dark purple
    [100, 30, 70],    // muted magenta
    [15, 80, 100],    // teal
    [40, 10, 80],     // violet
    [10, 50, 90],     // navy blue
  ];
  const nebulae: Nebula[] = [];
  for (let i = 0; i < 6; i++) {
    nebulae.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: 250 + Math.random() * 400,
      color: palette[i % palette.length],
      opacity: 0.015 + Math.random() * 0.025,
      driftX: (Math.random() - 0.5) * 0.08,
      driftY: (Math.random() - 0.5) * 0.06,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return nebulae;
}

function createCosmicDust(w: number, h: number): CosmicDust[] {
  const dust: CosmicDust[] = [];
  for (let i = 0; i < 8; i++) {
    dust.push({
      x: Math.random() * w,
      y: Math.random() * h,
      width: 300 + Math.random() * 500,
      height: 40 + Math.random() * 100,
      opacity: 0.008 + Math.random() * 0.015,
      color: [180, 160, 200],
      angle: (Math.random() - 0.5) * 0.4,
      drift: (Math.random() - 0.5) * 0.03,
    });
  }
  return dust;
}

function createShootingStar(w: number, h: number): ShootingStar {
  const angle = (Math.PI / 6) + Math.random() * (Math.PI / 3);
  return {
    x: Math.random() * w,
    y: -10,
    length: 80 + Math.random() * 120,
    speed: 5 + Math.random() * 9,
    angle,
    opacity: 0.5 + Math.random() * 0.5,
    life: 0,
    maxLife: 35 + Math.random() * 45,
    thickness: 0.4 + Math.random() * 0.8,
  };
}

function createMeteor(w: number, h: number): Meteor {
  const angle = (Math.PI / 5) + Math.random() * (Math.PI / 4);
  const colors: [number, number, number][] = [
    [255, 200, 80],   // golden
    [120, 200, 255],  // icy blue
    [255, 140, 60],   // amber
    [200, 180, 255],  // lavender
  ];
  return {
    x: Math.random() * w * 0.8,
    y: -20,
    length: 140 + Math.random() * 200,
    speed: 7 + Math.random() * 11,
    angle,
    opacity: 0.7 + Math.random() * 0.3,
    life: 0,
    maxLife: 55 + Math.random() * 50,
    thickness: 1.5 + Math.random() * 2.5,
    glowSize: 10 + Math.random() * 14,
    color: colors[Math.floor(Math.random() * colors.length)],
    fragments: [],
  };
}

// --- Main Component ---
export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    let stars = createStars(w, h, 600);
    let nebulae = createNebulae(w, h);
    let cosmicDust = createCosmicDust(w, h);
    const shootingStars: ShootingStar[] = [];
    const meteors: Meteor[] = [];

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      stars = createStars(w, h, 600);
      nebulae = createNebulae(w, h);
      cosmicDust = createCosmicDust(w, h);
    };
    window.addEventListener('resize', handleResize);

    // --- Drawing ---
    function drawBackground() {
      const grad = ctx!.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#000005');
      grad.addColorStop(0.2, '#01000a');
      grad.addColorStop(0.5, '#020010');
      grad.addColorStop(0.8, '#01000a');
      grad.addColorStop(1, '#000005');
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, w, h);
    }

    function drawCosmicDust(time: number) {
      for (const d of cosmicDust) {
        d.x += d.drift;
        if (d.x > w + d.width) d.x = -d.width;
        if (d.x < -d.width) d.x = w + d.width;

        ctx!.save();
        ctx!.translate(d.x, d.y);
        ctx!.rotate(d.angle);

        const pulse = d.opacity + Math.sin(time * 0.0001 + d.angle) * 0.003;
        const grad = ctx!.createRadialGradient(0, 0, 0, 0, 0, d.width * 0.5);
        grad.addColorStop(0, `rgba(${d.color[0]}, ${d.color[1]}, ${d.color[2]}, ${pulse})`);
        grad.addColorStop(0.6, `rgba(${d.color[0]}, ${d.color[1]}, ${d.color[2]}, ${pulse * 0.3})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx!.fillStyle = grad;
        ctx!.fillRect(-d.width * 0.5, -d.height * 0.5, d.width, d.height);
        ctx!.restore();
      }
    }

    function drawNebulae(time: number) {
      for (const n of nebulae) {
        n.x += n.driftX;
        n.y += n.driftY;
        if (n.x > w + n.radius) n.x = -n.radius;
        if (n.x < -n.radius) n.x = w + n.radius;
        if (n.y > h + n.radius) n.y = -n.radius;
        if (n.y < -n.radius) n.y = h + n.radius;

        const pulse = n.opacity + Math.sin(time * 0.00015 + n.phase) * 0.005;

        // Multi-layer nebula for realism
        for (let layer = 0; layer < 3; layer++) {
          const r = n.radius * (1 - layer * 0.25);
          const o = pulse * (1 - layer * 0.3);
          const offsetX = Math.sin(time * 0.0001 + layer) * 20;
          const offsetY = Math.cos(time * 0.00012 + layer) * 15;

          const grad = ctx!.createRadialGradient(
            n.x + offsetX, n.y + offsetY, 0,
            n.x + offsetX, n.y + offsetY, r
          );
          grad.addColorStop(0, `rgba(${n.color[0]}, ${n.color[1]}, ${n.color[2]}, ${o})`);
          grad.addColorStop(0.3, `rgba(${n.color[0]}, ${n.color[1]}, ${n.color[2]}, ${o * 0.6})`);
          grad.addColorStop(0.7, `rgba(${n.color[0]}, ${n.color[1]}, ${n.color[2]}, ${o * 0.15})`);
          grad.addColorStop(1, 'rgba(0,0,0,0)');

          ctx!.fillStyle = grad;
          ctx!.fillRect(n.x + offsetX - r, n.y + offsetY - r, r * 2, r * 2);
        }
      }
    }

    function drawStars(time: number) {
      for (const s of stars) {
        // Realistic irregular twinkling (2 sine waves combined)
        const t1 = Math.sin(time * 0.001 * s.twinkleSpeed + s.twinkleOffset);
        const t2 = Math.sin(time * 0.0007 * s.twinkleSpeed + s.twinkleOffset * 1.7);
        const twinkle = (t1 * 0.6 + t2 * 0.4);
        const opacity = s.baseOpacity * (0.4 + 0.6 * (0.5 + 0.5 * twinkle));

        // Layer-based drift
        const speed = [0.015, 0.04, 0.08][s.layer];
        s.y += speed;
        if (s.y > h + 5) { s.y = -5; s.x = Math.random() * w; }

        const [r, g, b] = s.color;

        // Core
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx!.fill();

        // Soft glow halo for brighter stars
        if (s.size > 1.0) {
          const glowR = s.size * 4;
          const glow = ctx!.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
          glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`);
          glow.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.08})`);
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx!.fillStyle = glow;
          ctx!.fillRect(s.x - glowR, s.y - glowR, glowR * 2, glowR * 2);
        }

        // Diffraction spikes for the brightest stars (cross pattern)
        if (s.size > 2.0 && opacity > 0.6) {
          const spikeLen = s.size * 6;
          const spikeOpacity = opacity * 0.25;
          ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${spikeOpacity})`;
          ctx!.lineWidth = 0.5;
          ctx!.beginPath();
          ctx!.moveTo(s.x - spikeLen, s.y);
          ctx!.lineTo(s.x + spikeLen, s.y);
          ctx!.stroke();
          ctx!.beginPath();
          ctx!.moveTo(s.x, s.y - spikeLen);
          ctx!.lineTo(s.x, s.y + spikeLen);
          ctx!.stroke();
        }
      }
    }

    function drawShootingStars() {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;

        const lifeRatio = ss.life / ss.maxLife;
        const fade = lifeRatio > 0.7 ? ss.opacity * (1 - (lifeRatio - 0.7) / 0.3) : ss.opacity;

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx!.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${fade})`);
        grad.addColorStop(0.2, `rgba(200, 220, 255, ${fade * 0.4})`);
        grad.addColorStop(1, 'rgba(200, 220, 255, 0)');

        ctx!.beginPath();
        ctx!.moveTo(ss.x, ss.y);
        ctx!.lineTo(tailX, tailY);
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = ss.thickness;
        ctx!.lineCap = 'round';
        ctx!.stroke();

        // Tiny bright head
        ctx!.beginPath();
        ctx!.arc(ss.x, ss.y, 1.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${fade})`;
        ctx!.fill();

        if (ss.life >= ss.maxLife) shootingStars.splice(i, 1);
      }
    }

    function drawMeteors() {
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life++;
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;

        const lifeRatio = m.life / m.maxLife;
        const fade = lifeRatio > 0.5 ? m.opacity * (1 - (lifeRatio - 0.5) / 0.5) : m.opacity;

        // Spawn burning fragments
        if (m.life % 2 === 0 && lifeRatio < 0.8) {
          for (let f = 0; f < 2; f++) {
            m.fragments.push({
              x: m.x + (Math.random() - 0.5) * 6,
              y: m.y + (Math.random() - 0.5) * 6,
              vx: (Math.random() - 0.5) * 1.5 - Math.cos(m.angle) * 0.5,
              vy: (Math.random() - 0.5) * 1.5 + 0.3,
              opacity: fade * (0.4 + Math.random() * 0.4),
              size: 0.5 + Math.random() * 1.5,
            });
          }
        }

        // Update & draw fragments
        for (let j = m.fragments.length - 1; j >= 0; j--) {
          const f = m.fragments[j];
          f.x += f.vx;
          f.y += f.vy;
          f.opacity -= 0.02;
          f.size *= 0.96;
          if (f.opacity <= 0) { m.fragments.splice(j, 1); continue; }

          ctx!.beginPath();
          ctx!.arc(f.x, f.y, f.size, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${m.color[0]}, ${m.color[1]}, ${m.color[2]}, ${f.opacity * 0.6})`;
          ctx!.fill();
        }

        // Main streak with realistic gradient
        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const streakGrad = ctx!.createLinearGradient(m.x, m.y, tailX, tailY);
        streakGrad.addColorStop(0, `rgba(255, 255, 255, ${fade * 0.9})`);
        streakGrad.addColorStop(0.05, `rgba(${m.color[0]}, ${m.color[1]}, ${m.color[2]}, ${fade * 0.8})`);
        streakGrad.addColorStop(0.2, `rgba(${m.color[0]}, ${m.color[1]}, ${m.color[2]}, ${fade * 0.4})`);
        streakGrad.addColorStop(0.5, `rgba(${m.color[0]}, ${m.color[1]}, ${m.color[2]}, ${fade * 0.08})`);
        streakGrad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx!.beginPath();
        ctx!.moveTo(m.x, m.y);
        ctx!.lineTo(tailX, tailY);
        ctx!.strokeStyle = streakGrad;
        ctx!.lineWidth = m.thickness;
        ctx!.lineCap = 'round';
        ctx!.stroke();

        // Wide atmospheric glow
        const glowGrad = ctx!.createLinearGradient(m.x, m.y, tailX, tailY);
        glowGrad.addColorStop(0, `rgba(${m.color[0]}, ${m.color[1]}, ${m.color[2]}, ${fade * 0.2})`);
        glowGrad.addColorStop(0.3, `rgba(${m.color[0]}, ${m.color[1]}, ${m.color[2]}, ${fade * 0.04})`);
        glowGrad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx!.beginPath();
        ctx!.moveTo(m.x, m.y);
        ctx!.lineTo(tailX, tailY);
        ctx!.strokeStyle = glowGrad;
        ctx!.lineWidth = m.glowSize;
        ctx!.lineCap = 'round';
        ctx!.stroke();

        // Bright head with white-hot core
        const headGlow = ctx!.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.glowSize * 1.2);
        headGlow.addColorStop(0, `rgba(255, 255, 255, ${fade})`);
        headGlow.addColorStop(0.15, `rgba(255, 255, 240, ${fade * 0.7})`);
        headGlow.addColorStop(0.4, `rgba(${m.color[0]}, ${m.color[1]}, ${m.color[2]}, ${fade * 0.3})`);
        headGlow.addColorStop(1, 'rgba(0,0,0,0)');

        ctx!.beginPath();
        ctx!.arc(m.x, m.y, m.glowSize * 1.2, 0, Math.PI * 2);
        ctx!.fillStyle = headGlow;
        ctx!.fill();

        if (m.life >= m.maxLife) meteors.splice(i, 1);
      }
    }

    // --- Loop ---
    function animate() {
      const time = performance.now();

      drawBackground();
      drawCosmicDust(time);
      drawNebulae(time);
      drawStars(time);

      // Shooting stars (~every 90 frames)
      if (Math.random() < 0.011) {
        shootingStars.push(createShootingStar(w, h));
      }
      drawShootingStars();

      // Meteors (~every 180 frames)
      if (Math.random() < 0.006) {
        meteors.push(createMeteor(w, h));
      }
      drawMeteors();

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
