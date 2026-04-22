import type { ISourceOptions } from 'tsparticles-engine'

export const particlesConfig: ISourceOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: true, mode: 'repulse' },
      resize: true,
    },
    modes: {
      grab: { distance: 180, links: { opacity: 0.5 } },
      repulse: { distance: 200, duration: 1.5 },
    },
  },
  particles: {
    color: { value: ['#6366f1', '#06b6d4', '#818cf8'] },
    links: {
      color: '#6366f1',
      distance: 160,
      enable: true,
      opacity: 0.18,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
    number: {
      value: 80,
      density: { enable: true, area: 900 },
    },
    opacity: {
      value: { min: 0.2, max: 0.6 },
      animation: { enable: true, speed: 0.8, minimumValue: 0.1 },
    },
    shape: { type: 'circle' },
    size: {
      value: { min: 1, max: 3 },
      animation: { enable: true, speed: 2, minimumValue: 0.5 },
    },
  },
  detectRetina: true,
}
