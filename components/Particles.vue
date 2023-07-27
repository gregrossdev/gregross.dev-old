<script lang="ts" setup>
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { ParticlesComponent } from "vue3-particles"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
const options = {
      background: {
        color: "#000", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event, it's disabled by default
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the mouse hover event, it's disabled by default
            mode: "repulse", // repulse the particles on mouse hover
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 300, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          distance: 200, // maximum distance for linking the particles
          enable: true, // enabling this will make the particles linked together
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particle has its own value, it won't change over time by default
        },
        number: {
          value: 100,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
      },
    }
declare module "particles.vue3";
const particlesInit = async engine => {
  //await loadFull(engine);
  await loadSlim(engine);
};

const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};

</script>

<template>
  <!-- tsParticles Repository: https://github.com/matteobruni/tsparticles -->
  <!-- tsParticles Website: https://particles.js.org -->
  <ParticlesComponent
      id="tsparticles"
      :options="options"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
  />
</template>

<style scoped></style>
