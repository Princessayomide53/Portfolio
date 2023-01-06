import React from 'react';
import Particles from "react-particles"
import ParticleConfig from '../config/Particle-Config'

export default function ParticlesBackground() {
  return (
    <div>
    <Particles params={ParticleConfig}></Particles>
    
    </div>
  )
}

