import { IParticlesProps } from 'react-particles'

const tsparticlesConfig: IParticlesProps['options'] = {
  background: {
    color: {
      value: "#0a192f",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#0ee3b5",
    },
    links: {
      color: "#0ee3b5",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export default tsparticlesConfig;
